# Washington State Sales Tax Calculation library

## washington-state-sales-tax on NPM

This is a very simple library to calculate sales tax rates for Washington State, in the United States. It doesn't do anything else.

Useful if your only nexus is in Washington state (like me). I take no responsibility for your use of this library (see license). API is unofficially modeled after TaxJar (no affiliation, this is what I was replacing).

**Tax Rates valid for Jan 01 2019 to Mar 31 2019.**

## How it works

## Installation

`npm i -s washington-state-sales-tax`

## Usage

```
taxForOrder({
    amount: 100,
    zip: 98101
}, function (data) {
    console.log(data);
});
```

## Expected output

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
