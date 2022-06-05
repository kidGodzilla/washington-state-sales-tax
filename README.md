# Washington State Sales Tax Calculation library

## washington-state-sales-tax on NPM

This is a very simple library to calculate sales tax rates for Washington State, in the United States. It doesn't do anything else.

Useful if your only nexus is in Washington state. I take no responsibility for your use of this library (see license). API is unofficially modeled after TaxJar (no affiliation, this is what I was replacing). Nice product which also prepares your filing for you (for a fee), and handles more complex tax scenarios.

**Tax Rates valid for Jan 01 2021 to Sept 30 2022.**

## How it works

### Named tax rates by city
If a named tax rate is provided by Washington State via https://dor.wa.gov/get-form-or-publication/publications-subject/local-sales-use-tax-rates-excel-format, this rate is returned. See the example below.


### County lookup via Mapquest Open APIs
If a rate for a city is not explicitly provided, it is charged the county unincorporated rate. 

To determine this, we need to first determine which county a city is in. 

For this, we are using the Mapquest Open API.  https://developer.mapquest.com/documentation/open/

This now requires registration via https://developer.mapquest.com/documentation/


### Inferred tax rate
If you choose not to use the Mapquest API or it returns an error, and the city rate is not explicity provided in the dataset above, a rate of 10.25% is charged, and the result will include the key/value `inferred = true`. It is up to you how you wish to implement this and you take responsibility for how you handle this fallback case (for example, you may refund this manually or set up a system to alert your customer in case this occurs).


## Installation

`npm i -s washington-state-sales-tax`

## Usage

Require: `const { taxForOrder } = require('washington-state-sales-tax');`

The function `taxForOrder` takes two arguments, a parameters object, which should have two keys: `amount` and `zip`. The second argument is a callback function, with one argument, a resulting output object.

You can see how it works in **test.js**

```
taxForOrder({
    amount: 100,
    zip: 98101
}, function (data) {
    console.log(data);
});
```

### Expected output

```
{
  "amount": 100,
  "shipping": 0,
  "order_total_amount": 100,
  "zip": "98101",
  "latitude": 47.6114,
  "longitude": -122.3305,
  "city": "Seattle",
  "state": "WA",
  "country": "US",
  "tax_source": "destination",
  "taxable_amount": 100,
  "freight_taxable": true,
  "has_nexus": true,
  "county": "King",
  "locationCode": 1726,
  "localTaxRate": 0.036,
  "stateTaxRate": 0.065,
  "totalTaxRate": 0.101,
  "taxLocaleString": "Seattle",
  "jurisdictions": {
    "country": "US",
    "state": "WA",
    "county": "KING",
    "city": "SEATTLE"
  },
  "rate": 0.101,
  "inferred": false,
  "amount_to_collect": 10.1
}
```

## Example: An out-of-state zip code is provided

```
// 10001 Manhattan, New York City, NY – Out of state (no tax collected)
taxForOrder({
    amount: 100,
    zip: 10001
}, function (data) {
    console.log(data);
});
```

### Result

```
{
  "amount": 100,
  "shipping": 0,
  "order_total_amount": 100,
  "zip": "10001",
  "latitude": 40.7484,
  "longitude": -73.9967,
  "city": "New York",
  "state": "NY",
  "country": "US",
  "freight_taxable": true,
  "amount_to_collect": 0,
  "taxable_amount": 0,
  "has_nexus": false,
  "rate": 0
}
```

## Example: Tax applicable but rate is not determined, and an inferred tax rate is used

```
// Outlook, WA 98938 - Yakima County Unincorp. Areas - Inferred tax rate
taxForOrder({
    amount: 100,
    zip: 98938
}, function (data) {
    console.log(data);
});
```

### Result

```
{
  "amount": 100,
  "shipping": 0,
  "order_total_amount": 100,
  "zip": "98938",
  "latitude": 46.3525,
  "longitude": -120.097,
  "city": "Outlook",
  "state": "WA",
  "country": "US",
  "tax_source": "destination",
  "taxable_amount": 100,
  "freight_taxable": true,
  "has_nexus": true,
  "jurisdictions": {
    "country": "US",
    "state": "WA",
    "city": "OUTLOOK"
  },
  "inferredRate": 0.101,
  "inferred": true,
  "rate": 0.101,
  "amount_to_collect": 10.1
}
```

## Tests

You can run some basic tests from the command line via `npm test`. This is also a great way to see how it works & kick the tires a bit, by editing `test.js`. Make sure you understand what this library does before you use it, as there may be financial or legal consequences for collecting taxes incorrectly.


## Maintained by Meeting Room 365
This library is maintained (unofficially) by the team that builds [Meeting Room 365](https://www.meetingroom365.com) – The Fastest Way to add a Meeting Room Display to Office 365, Exchange, and G Suite. Check us out!
