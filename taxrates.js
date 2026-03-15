/**
 * WA sales tax rates Jan 1 2020 - Jan 01 2022
 *
 * These rates must be updated each quarter. Pull Requests appreciated :)
 *
 * INSTRUCTIONS FOR UPDATING:
 *
 * 1. Download updated Location codes and rates tables: https://dor.wa.gov/taxes-rates/sales-and-use-tax-rates/downloadable-database
 * 2. Convert to CSV (Excel, Numbers, libreOffice, others)
 * 3. Find -> Replace ` CITY` with `` (in a text editor)
 * 4. Convert CSV to Keyed JSON: http://www.convertcsv.com/csv-to-json.htm
 *    New Header Row one: location,locationCode,stateTaxRate,localTaxRate,rta,totalTaxRate,effectiveDate,expirationDate
 *
 * Assumed Column names: county, locationCode, localTaxRate, stateTaxRate, totalTaxRate
 *
 * ARRAY OF ITEMS MUST BE SORTED BY EXPIRES, ASCENDING - THE FIRST ITEM WHICH HAS NOT EXPIRED WILL BE USED.
 */

module.exports = [
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
    },
    {
        "expires": "2025-10-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - CHELAN COUNTY": {
            "locationCode": 407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - FERRY COUNTY": {
            "locationCode": 1003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - MOSES LAKE": {
            "locationCode": 1329,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - OKANOGAN COUNTY": {
            "locationCode": 2425,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - OKANOGAN-PTBA": {
            "locationCode": 2427,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - COULEE DAM": {
            "locationCode": 2429,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - NESPELEM": {
            "locationCode": 2431,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - OKANOGAN": {
            "locationCode": 2433,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE TRIBES - OMAK": {
            "locationCode": 2435,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.031,
            "rta": 0,
            "totalTaxRate": 0.096,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0185,
            "rta": 0,
            "totalTaxRate": 0.0835,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0215,
            "rta": 0,
            "totalTaxRate": 0.0865,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0185,
            "rta": 0,
            "totalTaxRate": 0.0835,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SQUAXIN ISLAND TRIBE - TUMWATER": {
            "locationCode": 3421,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20250701",
            "expirationDate": "20250930"
        }
    },
    {
        "expires": "2026-01-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - CHELAN COUNTY": {
            "locationCode": 407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - FERRY COUNTY": {
            "locationCode": 1003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - MOSES LAKE": {
            "locationCode": 1329,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0385,
            "rta": 0,
            "totalTaxRate": 0.1035,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - OKANOGAN COUNTY": {
            "locationCode": 2425,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - OKANOGAN-PTBA": {
            "locationCode": 2427,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - COULEE DAM": {
            "locationCode": 2429,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - NESPELEM": {
            "locationCode": 2431,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - OKANOGAN": {
            "locationCode": 2433,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE TRIBES - OMAK": {
            "locationCode": 2435,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.031,
            "rta": 0,
            "totalTaxRate": 0.096,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0185,
            "rta": 0,
            "totalTaxRate": 0.0835,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0215,
            "rta": 0,
            "totalTaxRate": 0.0865,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0185,
            "rta": 0,
            "totalTaxRate": 0.0835,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SQUAXIN ISLAND TRIBE - TUMWATER": {
            "locationCode": 3421,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20251001",
            "expirationDate": "20251231"
        }
    },
    {
        "expires": "2026-04-01T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ASOTIN": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BENTON": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHELAN": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - CHELAN COUNTY": {
            "locationCode": 407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COWLITZ TRIBE - CLARK COUNTY": {
            "locationCode": 609,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COWLITZ TRIBE - LA CENTER": {
            "locationCode": 611,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - FERRY COUNTY": {
            "locationCode": 1003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COULEE": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ELECTRIC": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ROYAL": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - MOSES LAKE": {
            "locationCode": 1329,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0405,
            "rta": 0,
            "totalTaxRate": 0.1055,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SUQUAMISH TRIBE - BREMERTON": {
            "locationCode": 1807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KITTITAS": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ELMER": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OKANOGAN": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - OKANOGAN COUNTY": {
            "locationCode": 2425,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - OKANOGAN-PTBA": {
            "locationCode": 2427,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - COULEE DAM": {
            "locationCode": 2429,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - NESPELEM": {
            "locationCode": 2431,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - OKANOGAN": {
            "locationCode": 2433,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE TRIBES - OMAK": {
            "locationCode": 2435,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.031,
            "rta": 0,
            "totalTaxRate": 0.096,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.031,
            "rta": 0,
            "totalTaxRate": 0.096,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0185,
            "rta": 0,
            "totalTaxRate": 0.0835,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0215,
            "rta": 0,
            "totalTaxRate": 0.0865,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LUMMI NATION - SAN JUAN COUNTY": {
            "locationCode": 2803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0185,
            "rta": 0,
            "totalTaxRate": 0.0835,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.034,
            "rta": 0,
            "totalTaxRate": 0.099,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SNOHOMISH": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.041,
            "rta": 0,
            "totalTaxRate": 0.106,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STILLAGUAMISH TRIBE - ARLINGTON": {
            "locationCode": 3123,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STILLAGUAMISH TRIBE - MARYSVILLE": {
            "locationCode": 3125,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPOKANE": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SQUAXIN ISLAND TRIBE - TUMWATER": {
            "locationCode": 3421,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.032,
            "rta": 0,
            "totalTaxRate": 0.097,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.03,
            "rta": 0,
            "totalTaxRate": 0.095,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WALLA WALLA": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LUMMI NATION - FERNDALE": {
            "locationCode": 3709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LUMMI NATION - WHATCOM COUNTY": {
            "locationCode": 3711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LUMMI NATION - BELLINGHAM": {
            "locationCode": 3713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LUMMI NATION - WHATCOM-PTBA": {
            "locationCode": 3739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "MOXEE": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "YAKIMA": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        },
        "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4237,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20260101",
            "expirationDate": "20260331"
        }
    },
    {
      "expires": "2026-07-01T07:00:00.000Z",
      "ADAMS COUNTY": {
        "locationCode": 100,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HATTON": {
        "locationCode": 101,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LIND": {
        "locationCode": 102,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OTHELLO": {
        "locationCode": 103,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RITZVILLE": {
        "locationCode": 104,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WASHTUCNA": {
        "locationCode": 105,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ASOTIN COUNTY": {
        "locationCode": 200,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ASOTIN": {
        "locationCode": 201,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CLARKSTON": {
        "locationCode": 202,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BENTON COUNTY": {
        "locationCode": 300,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BENTON": {
        "locationCode": 301,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KENNEWICK": {
        "locationCode": 302,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PROSSER": {
        "locationCode": 303,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RICHLAND": {
        "locationCode": 304,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WEST RICHLAND": {
        "locationCode": 305,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BENTON-PTBA": {
        "locationCode": 333,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHELAN COUNTY": {
        "locationCode": 400,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CASHMERE": {
        "locationCode": 401,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHELAN": {
        "locationCode": 402,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ENTIAT": {
        "locationCode": 403,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LEAVENWORTH": {
        "locationCode": 404,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WENATCHEE": {
        "locationCode": 405,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - CHELAN COUNTY": {
        "locationCode": 407,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CLALLAM COUNTY": {
        "locationCode": 500,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FORKS": {
        "locationCode": 501,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PORT ANGELES": {
        "locationCode": 502,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SEQUIM": {
        "locationCode": 503,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CLARK COUNTY": {
        "locationCode": 600,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BATTLE GROUND": {
        "locationCode": 601,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CAMAS": {
        "locationCode": 602,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LA CENTER": {
        "locationCode": 603,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RIDGEFIELD": {
        "locationCode": 604,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "VANCOUVER": {
        "locationCode": 605,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WASHOUGAL": {
        "locationCode": 606,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "YACOLT": {
        "locationCode": 607,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COWLITZ TRIBE - CLARK COUNTY": {
        "locationCode": 609,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COWLITZ TRIBE - LA CENTER": {
        "locationCode": 611,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CLARK-PTBA": {
        "locationCode": 666,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLUMBIA COUNTY": {
        "locationCode": 700,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DAYTON": {
        "locationCode": 701,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STARBUCK": {
        "locationCode": 702,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COWLITZ COUNTY": {
        "locationCode": 800,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CASTLE ROCK": {
        "locationCode": 801,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KALAMA": {
        "locationCode": 802,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KELSO": {
        "locationCode": 803,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LONGVIEW": {
        "locationCode": 804,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WOODLAND": {
        "locationCode": 805,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DOUGLAS COUNTY": {
        "locationCode": 900,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.013,
        "rta": 0,
        "totalTaxRate": 0.078,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BRIDGEPORT": {
        "locationCode": 901,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.013,
        "rta": 0,
        "totalTaxRate": 0.078,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EAST WENATCHEE": {
        "locationCode": 902,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MANSFIELD": {
        "locationCode": 903,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ROCK ISLAND": {
        "locationCode": 904,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WATERVILLE": {
        "locationCode": 905,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DOUGLAS-PTBA": {
        "locationCode": 909,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FERRY COUNTY": {
        "locationCode": 1000,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "REPUBLIC": {
        "locationCode": 1001,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - FERRY COUNTY": {
        "locationCode": 1003,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FRANKLIN COUNTY": {
        "locationCode": 1100,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CONNELL": {
        "locationCode": 1101,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KAHLOTUS": {
        "locationCode": 1102,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MESA": {
        "locationCode": 1103,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PASCO": {
        "locationCode": 1104,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FRANKLIN-PTBA": {
        "locationCode": 1111,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GARFIELD COUNTY": {
        "locationCode": 1200,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "POMEROY": {
        "locationCode": 1201,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GRANT COUNTY": {
        "locationCode": 1300,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COULEE": {
        "locationCode": 1301,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ELECTRIC": {
        "locationCode": 1302,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EPHRATA": {
        "locationCode": 1303,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GEORGE": {
        "locationCode": 1304,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GRAND COULEE": {
        "locationCode": 1305,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HARTLINE": {
        "locationCode": 1306,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KRUPP": {
        "locationCode": 1307,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MATTAWA": {
        "locationCode": 1308,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MOSES LAKE": {
        "locationCode": 1309,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "QUINCY": {
        "locationCode": 1310,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ROYAL": {
        "locationCode": 1311,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SOAP LAKE": {
        "locationCode": 1312,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WARDEN": {
        "locationCode": 1313,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WILSON CREEK": {
        "locationCode": 1315,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - MOSES LAKE": {
        "locationCode": 1329,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GRAYS HARBOR COUNTY": {
        "locationCode": 1400,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ABERDEEN": {
        "locationCode": 1401,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.0258,
        "rta": 0,
        "totalTaxRate": 0.0908,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COSMOPOLIS": {
        "locationCode": 1402,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ELMA": {
        "locationCode": 1403,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HOQUIAM": {
        "locationCode": 1404,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MCCLEARY": {
        "locationCode": 1405,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MONTESANO": {
        "locationCode": 1406,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OAKVILLE": {
        "locationCode": 1407,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WESTPORT": {
        "locationCode": 1408,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OCEAN SHORES": {
        "locationCode": 1409,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
        "locationCode": 1411,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEHALIS TRIBES - OAKVILLE": {
        "locationCode": 1413,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ISLAND COUNTY": {
        "locationCode": 1500,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COUPEVILLE": {
        "locationCode": 1501,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LANGLEY": {
        "locationCode": 1502,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OAK HARBOR": {
        "locationCode": 1503,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "JEFFERSON COUNTY": {
        "locationCode": 1600,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PORT TOWNSEND": {
        "locationCode": 1601,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
        "locationCode": 1603,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KING COUNTY RTA": {
        "locationCode": 1700,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ALGONA": {
        "locationCode": 1701,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "AUBURN/KING RTA": {
        "locationCode": 1702,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BEAUX ARTS VILLAGE": {
        "locationCode": 1703,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BELLEVUE RTA": {
        "locationCode": 1704,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BLACK DIAMOND": {
        "locationCode": 1705,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BOTHELL/KING": {
        "locationCode": 1706,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CARNATION": {
        "locationCode": 1707,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CLYDE HILL": {
        "locationCode": 1708,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DES MOINES": {
        "locationCode": 1709,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DUVALL": {
        "locationCode": 1710,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ENUMCLAW": {
        "locationCode": 1711,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COVINGTON": {
        "locationCode": 1712,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HUNTS POINT": {
        "locationCode": 1713,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ISSAQUAH RTA": {
        "locationCode": 1714,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KENT RTA": {
        "locationCode": 1715,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KIRKLAND": {
        "locationCode": 1716,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LAKE FOREST PARK": {
        "locationCode": 1717,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MEDINA": {
        "locationCode": 1718,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MERCER ISLAND": {
        "locationCode": 1719,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MAPLE VALLEY": {
        "locationCode": 1720,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NORMANDY PARK": {
        "locationCode": 1721,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NORTH BEND": {
        "locationCode": 1722,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PACIFIC/KING": {
        "locationCode": 1723,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "REDMOND RTA": {
        "locationCode": 1724,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RENTON RTA": {
        "locationCode": 1725,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SEATTLE": {
        "locationCode": 1726,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.0405,
        "rta": 0,
        "totalTaxRate": 0.1055,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SKYKOMISH": {
        "locationCode": 1727,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SNOQUALMIE": {
        "locationCode": 1728,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TUKWILA": {
        "locationCode": 1729,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "YARROW POINT": {
        "locationCode": 1730,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MILTON/KING": {
        "locationCode": 1731,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FEDERAL WAY": {
        "locationCode": 1732,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SEATAC": {
        "locationCode": 1733,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BURIEN": {
        "locationCode": 1734,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WOODINVILLE RTA": {
        "locationCode": 1735,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NEWCASTLE": {
        "locationCode": 1736,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SHORELINE": {
        "locationCode": 1737,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KENMORE": {
        "locationCode": 1738,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SAMMAMISH RTA": {
        "locationCode": 1739,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - FEDERAL WAY": {
        "locationCode": 1741,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.038,
        "rta": 0,
        "totalTaxRate": 0.103,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KITSAP COUNTY": {
        "locationCode": 1800,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BREMERTON": {
        "locationCode": 1801,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PORT ORCHARD": {
        "locationCode": 1802,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "POULSBO": {
        "locationCode": 1803,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BAINBRIDGE ISLAND": {
        "locationCode": 1804,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SUQUAMISH TRIBE - KITSAP COUNTY": {
        "locationCode": 1805,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SUQUAMISH TRIBE - BREMERTON": {
        "locationCode": 1807,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KITTITAS COUNTY": {
        "locationCode": 1900,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CLE ELUM": {
        "locationCode": 1901,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ELLENSBURG": {
        "locationCode": 1902,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KITTITAS": {
        "locationCode": 1903,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ROSLYN": {
        "locationCode": 1904,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SOUTH CLE ELUM": {
        "locationCode": 1905,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KLICKITAT COUNTY": {
        "locationCode": 2000,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.011,
        "rta": 0,
        "totalTaxRate": 0.076,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BINGEN": {
        "locationCode": 2001,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GOLDENDALE": {
        "locationCode": 2002,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WHITE SALMON": {
        "locationCode": 2003,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LEWIS COUNTY": {
        "locationCode": 2100,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CENTRALIA": {
        "locationCode": 2101,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEHALIS": {
        "locationCode": 2102,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MORTON": {
        "locationCode": 2103,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MOSSYROCK": {
        "locationCode": 2104,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NAPAVINE": {
        "locationCode": 2105,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PE ELL": {
        "locationCode": 2106,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TOLEDO": {
        "locationCode": 2107,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "VADER": {
        "locationCode": 2108,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WINLOCK": {
        "locationCode": 2109,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEHALIS TRIBES - LEWIS COUNTY": {
        "locationCode": 2111,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LINCOLN COUNTY": {
        "locationCode": 2200,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ALMIRA": {
        "locationCode": 2201,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CRESTON": {
        "locationCode": 2202,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DAVENPORT": {
        "locationCode": 2203,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HARRINGTON": {
        "locationCode": 2204,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ODESSA": {
        "locationCode": 2205,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "REARDAN": {
        "locationCode": 2206,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPRAGUE": {
        "locationCode": 2207,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WILBUR": {
        "locationCode": 2208,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MASON COUNTY": {
        "locationCode": 2300,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SHELTON": {
        "locationCode": 2301,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
        "locationCode": 2303,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OKANOGAN COUNTY": {
        "locationCode": 2400,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BREWSTER": {
        "locationCode": 2401,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CONCONULLY": {
        "locationCode": 2402,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COULEE DAM": {
        "locationCode": 2403,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ELMER": {
        "locationCode": 2404,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NESPELEM": {
        "locationCode": 2405,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OKANOGAN": {
        "locationCode": 2406,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OMAK": {
        "locationCode": 2407,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OROVILLE": {
        "locationCode": 2408,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PATEROS": {
        "locationCode": 2409,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RIVERSIDE": {
        "locationCode": 2410,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TONASKET": {
        "locationCode": 2411,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TWISP": {
        "locationCode": 2412,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WINTHROP": {
        "locationCode": 2413,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.021,
        "rta": 0,
        "totalTaxRate": 0.086,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OKANOGAN-PTBA": {
        "locationCode": 2424,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - OKANOGAN COUNTY": {
        "locationCode": 2425,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - OKANOGAN-PTBA": {
        "locationCode": 2427,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - COULEE DAM": {
        "locationCode": 2429,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - NESPELEM": {
        "locationCode": 2431,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - OKANOGAN": {
        "locationCode": 2433,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE TRIBES - OMAK": {
        "locationCode": 2435,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PACIFIC COUNTY": {
        "locationCode": 2500,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ILWACO": {
        "locationCode": 2501,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LONG BEACH": {
        "locationCode": 2502,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RAYMOND": {
        "locationCode": 2503,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SOUTH BEND": {
        "locationCode": 2504,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PEND OREILLE COUNTY": {
        "locationCode": 2600,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CUSICK": {
        "locationCode": 2601,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "IONE": {
        "locationCode": 2602,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "METALINE": {
        "locationCode": 2603,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "METALINE FALLS": {
        "locationCode": 2604,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NEWPORT": {
        "locationCode": 2605,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KALISPEL TRIBE - PEND OREILLE COUNTY": {
        "locationCode": 2607,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PIERCE COUNTY RTA": {
        "locationCode": 2700,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BONNEY LAKE RTA": {
        "locationCode": 2701,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BUCKLEY": {
        "locationCode": 2702,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CARBONADO": {
        "locationCode": 2703,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DUPONT": {
        "locationCode": 2704,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.031,
        "rta": 0,
        "totalTaxRate": 0.096,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EATONVILLE": {
        "locationCode": 2705,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FIFE": {
        "locationCode": 2706,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FIRCREST": {
        "locationCode": 2707,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GIG HARBOR": {
        "locationCode": 2708,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MILTON/PIERCE": {
        "locationCode": 2709,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ORTING": {
        "locationCode": 2710,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP": {
        "locationCode": 2711,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.037,
        "rta": 0,
        "totalTaxRate": 0.102,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ROY": {
        "locationCode": 2712,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RUSTON": {
        "locationCode": 2713,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SOUTH PRAIRIE": {
        "locationCode": 2714,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STEILACOOM": {
        "locationCode": 2715,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SUMNER": {
        "locationCode": 2716,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.031,
        "rta": 0,
        "totalTaxRate": 0.096,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TACOMA": {
        "locationCode": 2717,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WILKESON": {
        "locationCode": 2718,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "UNIVERSITY PLACE": {
        "locationCode": 2719,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EDGEWOOD": {
        "locationCode": 2720,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LAKEWOOD": {
        "locationCode": 2721,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PACIFIC/PIERCE": {
        "locationCode": 2723,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.037,
        "rta": 0,
        "totalTaxRate": 0.102,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "AUBURN/PIERCE": {
        "locationCode": 2724,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.037,
        "rta": 0,
        "totalTaxRate": 0.102,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
        "locationCode": 2725,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PIERCE-PTBA RTA": {
        "locationCode": 2727,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NISQUALLY TRIBE - LAKEWOOD": {
        "locationCode": 2731,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - PUYALLUP": {
        "locationCode": 2733,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.037,
        "rta": 0,
        "totalTaxRate": 0.102,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - FIFE": {
        "locationCode": 2735,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - MILTON": {
        "locationCode": 2737,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - EDGEWOOD": {
        "locationCode": 2739,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - TACOMA": {
        "locationCode": 2741,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.039,
        "rta": 0,
        "totalTaxRate": 0.104,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
        "locationCode": 2745,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.036,
        "rta": 0,
        "totalTaxRate": 0.101,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PIERCE PTBA - HBZ": {
        "locationCode": 2787,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GIG HARBOR HBZ": {
        "locationCode": 2788,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PIERCE NON-RTA HBZ": {
        "locationCode": 2789,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SAN JUAN COUNTY": {
        "locationCode": 2800,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.0185,
        "rta": 0,
        "totalTaxRate": 0.0835,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FRIDAY HARBOR": {
        "locationCode": 2801,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.0215,
        "rta": 0,
        "totalTaxRate": 0.0865,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LUMMI NATION - SAN JUAN COUNTY": {
        "locationCode": 2803,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.0185,
        "rta": 0,
        "totalTaxRate": 0.0835,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SKAGIT COUNTY": {
        "locationCode": 2900,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ANACORTES": {
        "locationCode": 2901,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BURLINGTON": {
        "locationCode": 2902,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CONCRETE": {
        "locationCode": 2903,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HAMILTON": {
        "locationCode": 2904,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LA CONNER": {
        "locationCode": 2905,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LYMAN": {
        "locationCode": 2906,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MOUNT VERNON": {
        "locationCode": 2907,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SEDRO WOOLLEY": {
        "locationCode": 2908,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SWINOMISH TRIBE - SKAGIT COUNTY": {
        "locationCode": 2909,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SWINOMISH TRIBE - LA CONNER": {
        "locationCode": 2911,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SKAGIT-PTBA": {
        "locationCode": 2929,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SWINOMISH TRIBE - SKAGIT - PTBA": {
        "locationCode": 2931,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SKAMANIA COUNTY": {
        "locationCode": 3000,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NORTH BONNEVILLE": {
        "locationCode": 3001,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.012,
        "rta": 0,
        "totalTaxRate": 0.077,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STEVENSON": {
        "locationCode": 3002,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SNOHOMISH COUNTY RTA": {
        "locationCode": 3100,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ARLINGTON": {
        "locationCode": 3101,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BRIER": {
        "locationCode": 3102,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DARRINGTON": {
        "locationCode": 3103,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EDMONDS": {
        "locationCode": 3104,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.042,
        "rta": 0,
        "totalTaxRate": 0.107,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EVERETT RTA": {
        "locationCode": 3105,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.034,
        "rta": 0,
        "totalTaxRate": 0.099,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GOLD BAR": {
        "locationCode": 3106,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GRANITE FALLS": {
        "locationCode": 3107,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "INDEX": {
        "locationCode": 3108,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LAKE STEVENS": {
        "locationCode": 3109,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LYNNWOOD": {
        "locationCode": 3110,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.042,
        "rta": 0,
        "totalTaxRate": 0.107,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MARYSVILLE": {
        "locationCode": 3111,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.029,
        "rta": 0,
        "totalTaxRate": 0.094,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MONROE": {
        "locationCode": 3112,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.029,
        "rta": 0,
        "totalTaxRate": 0.094,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MOUNTLAKE TERRACE": {
        "locationCode": 3113,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MUKILTEO": {
        "locationCode": 3114,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.041,
        "rta": 0,
        "totalTaxRate": 0.106,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SNOHOMISH": {
        "locationCode": 3115,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STANWOOD": {
        "locationCode": 3116,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SULTAN": {
        "locationCode": 3117,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WOODWAY": {
        "locationCode": 3118,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.041,
        "rta": 0,
        "totalTaxRate": 0.106,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MILL CREEK": {
        "locationCode": 3119,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.041,
        "rta": 0,
        "totalTaxRate": 0.106,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BOTHELL/SNOHOMISH": {
        "locationCode": 3120,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TULALIP TRIBES - MARYSVILLE": {
        "locationCode": 3121,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.029,
        "rta": 0,
        "totalTaxRate": 0.094,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STILLAGUAMISH TRIBE - ARLINGTON": {
        "locationCode": 3123,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.028,
        "rta": 0,
        "totalTaxRate": 0.093,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STILLAGUAMISH TRIBE - MARYSVILLE": {
        "locationCode": 3125,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.029,
        "rta": 0,
        "totalTaxRate": 0.094,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SNOHOMISH-PTBA RTA": {
        "locationCode": 3131,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.04,
        "rta": 0,
        "totalTaxRate": 0.105,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPOKANE COUNTY": {
        "locationCode": 3200,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "AIRWAY HEIGHTS": {
        "locationCode": 3201,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHENEY": {
        "locationCode": 3202,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "DEER PARK": {
        "locationCode": 3203,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FAIRFIELD": {
        "locationCode": 3204,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LATAH": {
        "locationCode": 3205,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MEDICAL LAKE": {
        "locationCode": 3206,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MILLWOOD": {
        "locationCode": 3207,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ROCKFORD": {
        "locationCode": 3208,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPANGLE": {
        "locationCode": 3209,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPOKANE": {
        "locationCode": 3210,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WAVERLY": {
        "locationCode": 3211,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LIBERTY LAKE": {
        "locationCode": 3212,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPOKANE VALLEY": {
        "locationCode": 3213,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KALISPEL TRIBE - AIRWAY HEIGHTS": {
        "locationCode": 3215,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPOKANE-PTBA": {
        "locationCode": 3232,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STEVENS COUNTY": {
        "locationCode": 3300,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEWELAH": {
        "locationCode": 3301,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLVILLE": {
        "locationCode": 3302,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KETTLE FALLS": {
        "locationCode": 3303,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MARCUS": {
        "locationCode": 3304,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NORTHPORT": {
        "locationCode": 3305,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SPRINGDALE": {
        "locationCode": 3306,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "THURSTON COUNTY": {
        "locationCode": 3400,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BUCODA": {
        "locationCode": 3401,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LACEY": {
        "locationCode": 3402,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.032,
        "rta": 0,
        "totalTaxRate": 0.097,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OLYMPIA": {
        "locationCode": 3403,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.033,
        "rta": 0,
        "totalTaxRate": 0.098,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RAINIER": {
        "locationCode": 3404,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TENINO": {
        "locationCode": 3405,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TUMWATER": {
        "locationCode": 3406,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.032,
        "rta": 0,
        "totalTaxRate": 0.097,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "YELM": {
        "locationCode": 3407,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEHALIS TRIBES - THURSTON COUNTY": {
        "locationCode": 3409,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CHEHALIS TRIBES - TUMWATER": {
        "locationCode": 3411,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.032,
        "rta": 0,
        "totalTaxRate": 0.097,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
        "locationCode": 3413,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NISQUALLY TRIBE - THURSTON COUNTY": {
        "locationCode": 3415,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
        "locationCode": 3417,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NISQUALLY TRIBE - LACEY": {
        "locationCode": 3419,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.032,
        "rta": 0,
        "totalTaxRate": 0.097,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SQUAXIN ISLAND TRIBE - TUMWATER": {
        "locationCode": 3421,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.032,
        "rta": 0,
        "totalTaxRate": 0.097,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "THURSTON-PTBA": {
        "locationCode": 3434,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.03,
        "rta": 0,
        "totalTaxRate": 0.095,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WAHKIAKUM COUNTY": {
        "locationCode": 3500,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.013,
        "rta": 0,
        "totalTaxRate": 0.078,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "CATHLAMET": {
        "locationCode": 3501,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.013,
        "rta": 0,
        "totalTaxRate": 0.078,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WALLA WALLA COUNTY": {
        "locationCode": 3600,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLLEGE PLACE": {
        "locationCode": 3601,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PRESCOTT": {
        "locationCode": 3602,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WAITSBURG": {
        "locationCode": 3603,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WALLA WALLA": {
        "locationCode": 3604,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WALLA WALLA-PTBA": {
        "locationCode": 3636,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WHATCOM COUNTY": {
        "locationCode": 3700,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BELLINGHAM": {
        "locationCode": 3701,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BLAINE": {
        "locationCode": 3702,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EVERSON": {
        "locationCode": 3703,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FERNDALE": {
        "locationCode": 3704,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LYNDEN": {
        "locationCode": 3705,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.027,
        "rta": 0,
        "totalTaxRate": 0.092,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NOOKSACK": {
        "locationCode": 3706,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SUMAS": {
        "locationCode": 3707,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LUMMI NATION - FERNDALE": {
        "locationCode": 3709,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LUMMI NATION - WHATCOM COUNTY": {
        "locationCode": 3711,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LUMMI NATION - BELLINGHAM": {
        "locationCode": 3713,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WHATCOM-PTBA": {
        "locationCode": 3737,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LUMMI NATION - WHATCOM-PTBA": {
        "locationCode": 3739,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.023,
        "rta": 0,
        "totalTaxRate": 0.088,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WHITMAN COUNTY": {
        "locationCode": 3800,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ALBION": {
        "locationCode": 3801,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLFAX": {
        "locationCode": 3802,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "COLTON": {
        "locationCode": 3803,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ENDICOTT": {
        "locationCode": 3804,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "FARMINGTON": {
        "locationCode": 3805,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GARFIELD": {
        "locationCode": 3806,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LA CROSSE": {
        "locationCode": 3807,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "LAMONT": {
        "locationCode": 3808,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MALDEN": {
        "locationCode": 3809,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "OAKESDALE": {
        "locationCode": 3810,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PALOUSE": {
        "locationCode": 3811,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PULLMAN": {
        "locationCode": 3812,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.015,
        "rta": 0,
        "totalTaxRate": 0.08,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ROSALIA": {
        "locationCode": 3813,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ST. JOHN": {
        "locationCode": 3814,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TEKOA": {
        "locationCode": 3815,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "UNIONTOWN": {
        "locationCode": 3816,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "YAKIMA COUNTY": {
        "locationCode": 3900,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GRANDVIEW": {
        "locationCode": 3901,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "GRANGER": {
        "locationCode": 3902,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "HARRAH": {
        "locationCode": 3903,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MABTON": {
        "locationCode": 3904,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "MOXEE": {
        "locationCode": 3905,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NACHES": {
        "locationCode": 3906,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SELAH": {
        "locationCode": 3907,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SUNNYSIDE": {
        "locationCode": 3908,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TIETON": {
        "locationCode": 3909,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TOPPENISH": {
        "locationCode": 3910,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.018,
        "rta": 0,
        "totalTaxRate": 0.083,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "UNION GAP": {
        "locationCode": 3911,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.019,
        "rta": 0,
        "totalTaxRate": 0.084,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WAPATO": {
        "locationCode": 3912,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "YAKIMA": {
        "locationCode": 3913,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ZILLAH": {
        "locationCode": 3914,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.017,
        "rta": 0,
        "totalTaxRate": 0.082,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KING COUNTY NON-RTA": {
        "locationCode": 4000,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "AUBURN/KING NON-RTA": {
        "locationCode": 4002,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BELLEVUE NON-RTA": {
        "locationCode": 4004,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "ISSAQUAH NON-RTA": {
        "locationCode": 4014,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "KENT NON-RTA": {
        "locationCode": 4015,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "REDMOND NON-RTA": {
        "locationCode": 4024,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.025,
        "rta": 0,
        "totalTaxRate": 0.09,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "RENTON NON-RTA": {
        "locationCode": 4025,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "WOODINVILLE NON-RTA": {
        "locationCode": 4035,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NEWCASTLE NON-RTA": {
        "locationCode": 4036,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SAMMAMISH NON-RTA": {
        "locationCode": 4039,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.024,
        "rta": 0,
        "totalTaxRate": 0.089,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PIERCE COUNTY NON-RTA": {
        "locationCode": 4100,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "BONNEY LAKE NON-RTA": {
        "locationCode": 4101,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
        "locationCode": 4103,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
        "locationCode": 4105,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.016,
        "rta": 0,
        "totalTaxRate": 0.081,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "PIERCE-PTBA NON-RTA": {
        "locationCode": 4127,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.022,
        "rta": 0,
        "totalTaxRate": 0.087,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SNOHOMISH COUNTY NON-RTA": {
        "locationCode": 4200,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STILLAGUAMISH TRIBE - SNOHOMISH COUNTY NON-RTA": {
        "locationCode": 4201,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.014,
        "rta": 0,
        "totalTaxRate": 0.079,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "EVERETT NON-RTA": {
        "locationCode": 4205,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.02,
        "rta": 0,
        "totalTaxRate": 0.085,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "SNOHOMISH-PTBA NON-RTA": {
        "locationCode": 4231,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
        "locationCode": 4233,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      },
      "STILLAGUAMISH TRIBE - SNOHOMISH-PTBA NON-RTA": {
        "locationCode": 4237,
        "stateTaxRate": 0.065,
        "localTaxRate": 0.026,
        "rta": 0,
        "totalTaxRate": 0.091,
        "effectiveDate": "20260401",
        "expirationDate": "20260630"
      }
    }
];
