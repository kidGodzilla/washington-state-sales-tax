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
        "expires": "2024-01-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT COUNTY": {
            "locationCode": 2915,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT-PTBA": {
            "locationCode": 2933,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "SAUK-SUIATTLE TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4235,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20231001",
            "expirationDate": "20231231"
        }
    },
    {
        "expires": "2024-04-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SAUK-SUIATTLE TRIBE - SKAGIT COUNTY": {
            "locationCode": 2915,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240101",
            "expirationDate": "20240331"
        }
    },
    {
        "expires": "2024-07-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240401",
            "expirationDate": "20240630"
        }
    },
    {
        "expires": "2024-10-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20240701",
            "expirationDate": "20240930"
        }
    },
    {
        "expires": "2025-01-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20241001",
            "expirationDate": "20241231"
        }
    },
    {
        "expires": "2025-04-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.031,
            "rta": 0,
            "totalTaxRate": 0.096,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SQUAXIN ISLAND TRIBE - TUMWATER": {
            "locationCode": 3421,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250101",
            "expirationDate": "20250331"
        }
    },
    {
        "expires": "2025-07-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - CHELAN COUNTY": {
            "locationCode": 407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - FERRY COUNTY": {
            "locationCode": 1003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - MOSES LAKE": {
            "locationCode": 1329,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - OKANOGAN COUNTY": {
            "locationCode": 2425,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - OKANOGAN-PTBA": {
            "locationCode": 2427,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - COULEE DAM": {
            "locationCode": 2429,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - NESPELEM": {
            "locationCode": 2431,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - OKANOGAN CITY": {
            "locationCode": 2433,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE TRIBES - OMAK": {
            "locationCode": 2435,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.031,
            "rta": 0,
            "totalTaxRate": 0.096,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SQUAXIN ISLAND TRIBE - TUMWATER": {
            "locationCode": 3421,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250401",
            "expirationDate": "20250630"
        }
    }
];
