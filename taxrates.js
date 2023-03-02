/**
 * WA sales tax rates Jan 1 2020 - Jan 01 2022
 *
 * These rates must be updated each quarter. Pull Requests appreciated :)
 *
 * INSTRUCTIONS FOR UPDATING:
 *
 * 1. Download updated Location codes and rates tables: https://dor.wa.gov/taxes-rates/sales-and-use-tax-rates/downloadable-database
 * 2. Convert to CSV (Excel, Numbers, libreOffice, others)
 * 3. Find -> Replace ` (City)` with `` (in a text editor)
 * 4. Convert CSV to Keyed JSON: http://www.convertcsv.com/csv-to-json.htm
 *    New Header Row one: location,locationCode,stateTaxRate,localTaxRate,rta,totalTaxRate,effectiveDate,expirationDate
 *
 * Assumed Column names: county, locationCode, localTaxRate, stateTaxRate, totalTaxRate
 *
 * ARRAY OF ITEMS MUST BE SORTED BY EXPIRES, ASCENDING - THE FIRST ITEM WHICH HAS NOT EXPIRED WILL BE USED.
 */

module.exports = [
    {
        "expires": "2022-07-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COWLITZ TRIBE (NEW DEVELOPMENT) - CLARK COUNTY": {
            "locationCode": 610,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220401",
            "expirationDate": "20220630"
        }
    },
    {
        "expires": "2022-10-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT COUNTY": {
            "locationCode": 2915,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT-PTBA": {
            "locationCode": 2933,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "SAUK-SUIATTLE TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4235,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220701",
            "expirationDate": "20220930"
        }
    },
    {
        "expires": "2023-01-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT COUNTY": {
            "locationCode": 2915,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT-PTBA": {
            "locationCode": 2933,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "SAUK-SUIATTLE TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4235,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20221001",
            "expirationDate": "20221231"
        }
    },
    {
        "expires": "2023-04-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ASOTIN0201": {
            "locationCode": 0.065,
            "stateTaxRate": 0.015,
            "localTaxRate": 0,
            "rta": 0.08,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BENTON0301": {
            "locationCode": 0.065,
            "stateTaxRate": 0.022,
            "localTaxRate": 0,
            "rta": 0.087,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHELAN0402": {
            "locationCode": 0.065,
            "stateTaxRate": 0.018,
            "localTaxRate": 0,
            "rta": 0.083,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COULEE1301": {
            "locationCode": 0.065,
            "stateTaxRate": 0.017,
            "localTaxRate": 0,
            "rta": 0.082,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "ELECTRIC1302": {
            "locationCode": 0.065,
            "stateTaxRate": 0.017,
            "localTaxRate": 0,
            "rta": 0.082,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ROYAL1311": {
            "locationCode": 0.065,
            "stateTaxRate": 0.017,
            "localTaxRate": 0,
            "rta": 0.082,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KITTITAS1903": {
            "locationCode": 0.065,
            "stateTaxRate": 0.016,
            "localTaxRate": 0,
            "rta": 0.081,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ELMER2404": {
            "locationCode": 0.065,
            "stateTaxRate": 0.015,
            "localTaxRate": 0,
            "rta": 0.08,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OKANOGAN2406": {
            "locationCode": 0.065,
            "stateTaxRate": 0.02,
            "localTaxRate": 0,
            "rta": 0.085,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT COUNTY": {
            "locationCode": 2915,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT-PTBA": {
            "locationCode": 2933,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SNOHOMISH3115": {
            "locationCode": 0.065,
            "stateTaxRate": 0.028,
            "localTaxRate": 0,
            "rta": 0.093,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPOKANE3210": {
            "locationCode": 0.065,
            "stateTaxRate": 0.025,
            "localTaxRate": 0,
            "rta": 0.09,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WALLA WALLA3604": {
            "locationCode": 0.065,
            "stateTaxRate": 0.024,
            "localTaxRate": 0,
            "rta": 0.089,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "MOXEE3905": {
            "locationCode": 0.065,
            "stateTaxRate": 0.015,
            "localTaxRate": 0,
            "rta": 0.08,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "YAKIMA3913": {
            "locationCode": 0.065,
            "stateTaxRate": 0.018,
            "localTaxRate": 0,
            "rta": 0.083,
            "totalTaxRate": 20230101,
            "effectiveDate": "20230331",
            "expirationDate": ""
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "SAUK-SUIATTLE TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4235,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230101",
            "expirationDate": "20230331"
        }
    },
    {
        "expires": "2023-07-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT COUNTY": {
            "locationCode": 2915,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT-PTBA": {
            "locationCode": 2933,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "SAUK-SUIATTLE TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4235,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20230401",
            "expirationDate": "20230630"
        }
    }
];
