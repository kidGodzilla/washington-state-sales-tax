/**
 * Simple set of tests in the command line
 */
const { taxForOrder } = require('./index.js');

const mapquestKey = ''; // Add your mapquest API key to test with Mapquest

function clear (n) {
    if (!n) n = 25;
    for (var i = 0; i < n; i++) console.log(' ');
}

function logJSON (obj) {
    console.log(JSON.stringify(obj, undefined, 2));
}

clear();

// Outlook, WA 98938 - Yakima County Unincorp. Areas - Inferred tax rate
taxForOrder({
    amount: 100,
    zip: 98938
}, function (data) {
    clear(5);
    console.log('Sales tax information for Outlook, WA 98938 - Yakima County Unincorp. Areas (using inferred tax rate)');
    logJSON(data);
});


if (mapquestKey) {
    // Outlook, WA 98938 - Yakima County Unincorp. Areas - 7.9% combined tax rate
    taxForOrder({
        amount: 100,
        zip: 98938,
        mapquestKey: mapquestKey
    }, function (data) {
        clear(5);
        console.log('Sales tax information for Outlook, WA 98938 - Yakima County Unincorp. Areas (tax rate via county, with Mapquest API for county lookup)');
        logJSON(data);
    });
}


// Seattle, WA 98101 - Exact match: Seattle - 10.1% combined tax rate
taxForOrder({
    amount: 100,
    zip: 98101
}, function (data) {
    clear(5);
    console.log('Sales tax information for Seattle, WA 98101');
    logJSON(data);
});


// 10001 Manhattan, New York City, NY – Out of state (no tax collected)
taxForOrder({
    amount: 100,
    zip: 10001
}, function (data) {
    clear(5);
    console.log('Sales tax information for 10001 Manhattan, New York City');
    logJSON(data);
});


// 123456 Invalid zip code
taxForOrder({
    amount: 100,
    zip: 123456
}, function (data) {
    clear(5);
    console.log('Sales tax information for an invalid zip code (123456):');
    logJSON(data);
    clear(5);
});
