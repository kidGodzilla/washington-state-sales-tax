/**
 * Washington State Sales Tax Calculator
 *
 * Valid only for Washington State.
 * This library contains no official endorsements or guarantees of accuracy.
 * See README and LICENSE for more details.
 */
const allRates = require('./taxrates.js');
const request = require('superagent');
const zipcodes = require('zipcodes');
let timestamp = + new Date();
let taxrates = null;
const debug = 0;

//if (debug) timestamp = + new Date('2019-09-02T07:00:00.000Z');

// Find correct rate by expires
allRates.forEach((rate, i) => {
    if (rate.expires && (+ new Date(rate.expires)) > timestamp && !taxrates) {
        if (debug) console.log('Using tax rate table #', i, '- Expires', rate.expires);
        taxrates = rate;
    }
});

// Fallback to latest table if all tables have expired
if (!taxrates) taxrates = allRates[allRates.length - 1];

/**
 * Calculate tax for a given order
 */
function taxForOrder (params, cb) {
    let { zip, amount, mapquestKey } = params;

    if (!zip) {
        if (cb && typeof cb === 'function') cb(false);
        return;
    }

    // Get full location information (city, state) for the provided ZIP code
    let loc = zipcodes.lookup(zip);

    if (!loc) {
        if (cb && typeof cb === 'function') cb('could not lookup zip');
        return;
    }

    // Ensure our input amount is a two-decimal float
    if (amount) amount = parseFloat(amount);

    const isInt = amount % 1 === 0;

    if (amount && !isInt) amount = parseFloat(amount.toFixed(2));

    // Scaffold the beginnings of our output object
    let obj = { amount: amount, shipping: 0, order_total_amount: amount };

    // Join in augmented location information
    if (loc) obj = Object.assign(obj, loc);

    // Check expiration
    function checkExpiry () {
        if (taxrates && taxrates.expires && timestamp > + new Date(taxrates.expires)) {
            obj.expired = true;
            console.log('Tax rate table in npm library washington-state-sales-tax has expired');
        } else
            obj.expired = false;
    }

    // Callback to be executed after final tax rate is determined
    function afterSettled () {
        // Append jurisdictions object to output object
        var jurisdictions = { country: "US", state: "WA" };

        if (obj.county) jurisdictions.county = obj.county.toUpperCase();
        if (obj.city) jurisdictions.city = obj.city.toUpperCase();
        obj.jurisdictions = jurisdictions;

        // If we have a taxable amount
        if (amount) {
            if (obj.totalTaxRate) { // If we have a tax rate
                obj.rate = obj.totalTaxRate;
                obj.inferred = false;

            } else { // Fallback behavior: charge the 10.25% (maximum) rate for unspecified WA orders. You will need to refund this later.
                obj.inferredRate = 0.1025;
                obj.inferred = true;
                obj.rate = 0.1025;
            }

            obj.amount_to_collect = parseFloat((amount * obj.rate).toFixed(2));
        }

        if (cb && typeof cb === 'function') cb(obj);
        return;
    }

    // Assume our sales tax nexus is only Washington State.
    // Calculate sales tax for WA, US orders and no others.
    if (obj.country === 'US' && obj.state === 'WA') {
        obj.tax_source = "destination";
        obj.taxable_amount = amount;
        obj.freight_taxable = true;
        obj.has_nexus = true;

        // Add tax rate table expiry date to output
        if (taxrates && taxrates.expires) obj.expires = taxrates.expires;
        checkExpiry();

        // Exact city match
        if (taxrates && taxrates[obj.city]) {
            obj = Object.assign(obj, taxrates[obj.city]);
            obj.taxLocaleString = obj.city;
            afterSettled();

        // Exact city match plus space
        } else if (taxrates && taxrates[obj.city+' ']) {
            obj = Object.assign(obj, taxrates[obj.city+' ']);
            obj.taxLocaleString = obj.city;
            afterSettled();

        // Exact city match uppercase
        } else if (taxrates && taxrates[obj.city.toUpperCase()]) {
            obj = Object.assign(obj, taxrates[obj.city.toUpperCase()]);
            obj.taxLocaleString = obj.city;
            afterSettled();

        // Lookup county if mapquestKey provided
        } else if (mapquestKey) {
            var county, countyString, countyString2, countyString3;

            var url = `http://open.mapquestapi.com/geocoding/v1/address?key=${ mapquestKey }&location=${ obj.city },${ obj.state }}`;

            request.get(url).set('Content-Type', 'application/json').end((err, ress) => {
                if (ress && ress.body) {

                    try {
                        if (ress.body.results[0].locations[0].adminArea4Type === 'County') county = ress.body.results[0].locations[0].adminArea4;
                        if (county) {
                            countyString = county + ' Unincorp. Areas';
                            countyString2 = county + ' County'.toUpperCase();
                            countyString3 = county + ' County RTA'.toUpperCase();
                        }

                        if (taxrates[countyString]) {
                            obj = Object.assign(obj, taxrates[countyString]);
                            obj.taxLocaleString = countyString;

                        } else if (taxrates[countyString2]) {
                            obj = Object.assign(obj, taxrates[countyString2]);
                            obj.taxLocaleString = countyString2;

                        } else if (taxrates[countyString3]) {
                            obj = Object.assign(obj, taxrates[countyString3]);
                            obj.taxLocaleString = countyString3;

                        } else if (taxrates[county]) {
                            obj = Object.assign(obj, taxrates[county]);
                            obj.taxLocaleString = county;

                        } else if (taxrates[county.toUpperCase()]) {
                            obj = Object.assign(obj, taxrates[county.toUpperCase()]);
                            obj.taxLocaleString = county;
                        }

                    } catch(e){}

                    if (county) obj.county = county;

                    afterSettled();

                } else {
                    afterSettled();
                }
            });
        } else {
            afterSettled();
        }

    } else {
        // Out of state (zero)
        checkExpiry();

        obj.freight_taxable = true;
        obj.amount_to_collect = 0;
        obj.taxable_amount = 0;
        obj.has_nexus = false;
        obj.rate = 0;

        if (cb && typeof cb === 'function') cb(obj);
        return;
    }
}


module.exports = {
    taxRates: taxrates,
    allRates: allRates,
    taxForOrder: taxForOrder
};
