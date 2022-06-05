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
        "expires": "2021-01-01T07:00:00.000Z",
        "Aberdeen": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0258,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0908
        },
        "Adams County Unincorp. Areas": {
            "county": "Adams",
            "locationCode": 100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Airway Heights": {
            "county": "Spokane",
            "locationCode": 3201,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Albion": {
            "county": "Whitman",
            "locationCode": 3801,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Algona": {
            "county": "King",
            "locationCode": 1701,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Almira": {
            "county": "Lincoln",
            "locationCode": 2201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Anacortes": {
            "county": "Skagit",
            "locationCode": 2901,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Arlington": {
            "county": "Snohomish",
            "locationCode": 3101,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Asotin": {
            "county": "Asotin",
            "locationCode": 201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Auburn in King County": {
            "county": "King",
            "locationCode": 1702,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Auburn in King County Non-RTA": {
            "county": "King",
            "locationCode": 4002,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Auburn in Pierce County": {
            "county": "Pierce",
            "locationCode": 2724,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Bainbridge Island": {
            "county": "Kitsap",
            "locationCode": 1804,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Battle Ground": {
            "county": "Clark",
            "locationCode": 601,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Beaux Arts Village": {
            "county": "King",
            "locationCode": 1703,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Bellevue": {
            "county": "King",
            "locationCode": 1704,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Bellevue Non-RTA": {
            "county": "King",
            "locationCode": 4004,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Bellingham": {
            "county": "Whatcom",
            "locationCode": 3701,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Benton City": {
            "county": "Benton",
            "locationCode": 301,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Benton County Unincorp. Areas": {
            "county": "Benton",
            "locationCode": 300,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Benton Co. Unincorp. PTBA": {
            "county": "Benton",
            "locationCode": 333,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Bingen": {
            "county": "Klickitat",
            "locationCode": 2001,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Black Diamond": {
            "county": "King",
            "locationCode": 1705,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Blaine": {
            "county": "Whatcom",
            "locationCode": 3702,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bonney Lake": {
            "county": "Pierce",
            "locationCode": 2701,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Bonney Lake Non-RTA": {
            "county": "Pierce",
            "locationCode": 4101,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Bothell in King County": {
            "county": "King",
            "locationCode": 1706,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Bothell in Snohomish County": {
            "county": "Snohomish",
            "locationCode": 3120,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Bremerton": {
            "county": "Kitsap",
            "locationCode": 1801,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Brewster": {
            "county": "Okanogan",
            "locationCode": 2401,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Bridgeport": {
            "county": "Douglas",
            "locationCode": 901,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Brier": {
            "county": "Snohomish",
            "locationCode": 3102,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Buckley": {
            "county": "Pierce",
            "locationCode": 2702,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Bucoda": {
            "county": "Thurston",
            "locationCode": 3401,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Burien": {
            "county": "King",
            "locationCode": 1734,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Burlington": {
            "county": "Skagit",
            "locationCode": 2902,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Camas": {
            "county": "Clark",
            "locationCode": 602,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Carbonado": {
            "county": "Pierce",
            "locationCode": 2703,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Carnation": {
            "county": "King",
            "locationCode": 1707,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Cashmere": {
            "county": "Chelan",
            "locationCode": 401,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Castle Rock": {
            "county": "Cowlitz",
            "locationCode": 801,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cathlamet": {
            "county": "Wahkiakum",
            "locationCode": 3501,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Centralia": {
            "county": "Lewis",
            "locationCode": 2101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis": {
            "county": "Lewis",
            "locationCode": 2102,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chelan": {
            "county": "Chelan",
            "locationCode": 402,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Chelan County Unincorp. Areas": {
            "county": "Chelan",
            "locationCode": 400,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Cheney": {
            "county": "Spokane",
            "locationCode": 3202,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chewelah": {
            "county": "Stevens",
            "locationCode": 3301,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Clallam County Unincorp. Areas": {
            "county": "Clallam",
            "locationCode": 500,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Clark County Unincorp. Areas": {
            "county": "Clark",
            "locationCode": 600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Clark County Unincorp. PTBA": {
            "county": "Clark",
            "locationCode": 666,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Clarkston": {
            "county": "Asotin",
            "locationCode": 202,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Clyde Hill": {
            "county": "King",
            "locationCode": 1708,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Colfax": {
            "county": "Whitman",
            "locationCode": 3802,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "College Place": {
            "county": "Walla Walla",
            "locationCode": 3601,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Colton": {
            "county": "Whitman",
            "locationCode": 3803,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Columbia County Unincorp. Areas": {
            "county": "Columbia",
            "locationCode": 700,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Colville": {
            "county": "Stevens",
            "locationCode": 3302,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Conconully": {
            "county": "Okanogan",
            "locationCode": 2402,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Concrete": {
            "county": "Skagit",
            "locationCode": 2903,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Connell": {
            "county": "Franklin",
            "locationCode": 1101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cosmopolis": {
            "county": "Grays Harbor",
            "locationCode": 1402,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Coupeville": {
            "county": "Island",
            "locationCode": 1501,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Covington": {
            "county": "King",
            "locationCode": 1712,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Cowlitz County Unincorp. Areas": {
            "county": "Cowlitz",
            "locationCode": 800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Creston": {
            "county": "Lincoln",
            "locationCode": 2202,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cusick": {
            "county": "Pend Oreille",
            "locationCode": 2601,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Darrington": {
            "county": "Snohomish",
            "locationCode": 3103,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Davenport": {
            "county": "Lincoln",
            "locationCode": 2203,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Dayton": {
            "county": "Columbia",
            "locationCode": 701,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Deer Park": {
            "county": "Spokane",
            "locationCode": 3203,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Des Moines": {
            "county": "King",
            "locationCode": 1709,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Douglas County Unincorp. Areas": {
            "county": "Douglas",
            "locationCode": 900,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Douglas County Unincorp. PTBA": {
            "county": "Douglas",
            "locationCode": 909,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "DuPont": {
            "county": "Pierce",
            "locationCode": 2704,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Duvall": {
            "county": "King",
            "locationCode": 1710,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "East Wenatchee": {
            "county": "Douglas",
            "locationCode": 902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Eatonville": {
            "county": "Pierce",
            "locationCode": 2705,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Edgewood": {
            "county": "Pierce",
            "locationCode": 2720,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Edmonds": {
            "county": "Snohomish",
            "locationCode": 3104,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Electric City": {
            "county": "Grant",
            "locationCode": 1302,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ellensburg": {
            "county": "Kittitas",
            "locationCode": 1902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Elma": {
            "county": "Grays Harbor",
            "locationCode": 1403,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Endicott": {
            "county": "Whitman",
            "locationCode": 3804,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Entiat": {
            "county": "Chelan",
            "locationCode": 403,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Enumclaw": {
            "county": "King",
            "locationCode": 1711,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Ephrata": {
            "county": "Grant",
            "locationCode": 1303,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everett": {
            "county": "Snohomish",
            "locationCode": 3105,
            "localTaxRate": 0.033,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.098
        },
        "Everett Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4205,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everson": {
            "county": "Whatcom",
            "locationCode": 3703,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Fairfield": {
            "county": "Spokane",
            "locationCode": 3204,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Farmington": {
            "county": "Whitman",
            "locationCode": 3805,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Federal Way": {
            "county": "King",
            "locationCode": 1732,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Ferndale": {
            "county": "Whatcom",
            "locationCode": 3704,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Ferry County Unincorp. Areas": {
            "county": "Ferry",
            "locationCode": 1000,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Fife": {
            "county": "Pierce",
            "locationCode": 2706,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Fircrest": {
            "county": "Pierce",
            "locationCode": 2707,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Forks": {
            "county": "Clallam",
            "locationCode": 501,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Franklin County Unincorp. Areas": {
            "county": "Franklin",
            "locationCode": 1100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Franklin County Unincorp. PTBA": {
            "county": "Franklin",
            "locationCode": 1111,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Friday Harbor": {
            "county": "San Juan",
            "locationCode": 2801,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Garfield": {
            "county": "Whitman",
            "locationCode": 3806,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Garfield County Unincorp. Areas": {
            "county": "Garfield",
            "locationCode": 1200,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "George": {
            "county": "Grant",
            "locationCode": 1304,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Gold Bar": {
            "county": "Snohomish",
            "locationCode": 3106,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Goldendale": {
            "county": "Klickitat",
            "locationCode": 2002,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Grand Coulee": {
            "county": "Grant",
            "locationCode": 1305,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granite Falls": {
            "county": "Snohomish",
            "locationCode": 3107,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Grant County Unincorp. Areas": {
            "county": "Grant",
            "locationCode": 1300,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hamilton": {
            "county": "Skagit",
            "locationCode": 2904,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Harrah": {
            "county": "Yakima",
            "locationCode": 3903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Harrington": {
            "county": "Lincoln",
            "locationCode": 2204,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hartline": {
            "county": "Grant",
            "locationCode": 1306,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Hatton": {
            "county": "Adams",
            "locationCode": 101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hoquiam": {
            "county": "Grays Harbor",
            "locationCode": 1404,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hunts Point": {
            "county": "King",
            "locationCode": 1713,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Ilwaco": {
            "county": "Pacific",
            "locationCode": 2501,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Index": {
            "county": "Snohomish",
            "locationCode": 3108,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Ione": {
            "county": "Pend Oreille",
            "locationCode": 2602,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Island County Unincorp. Areas": {
            "county": "Island",
            "locationCode": 1500,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Issaquah": {
            "county": "King",
            "locationCode": 1714,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Issaquah Non-RTA": {
            "county": "King",
            "locationCode": 4014,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Jefferson County Unincorp. Areas": {
            "county": "Jefferson",
            "locationCode": 1600,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kahlotus": {
            "county": "Franklin",
            "locationCode": 1102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kalama": {
            "county": "Cowlitz",
            "locationCode": 802,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Kelso": {
            "county": "Cowlitz",
            "locationCode": 803,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Kenmore": {
            "county": "King",
            "locationCode": 1738,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Kennewick": {
            "county": "Benton",
            "locationCode": 302,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kent": {
            "county": "King",
            "locationCode": 1715,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Kent Non-RTA": {
            "county": "King",
            "locationCode": 4015,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kettle Falls": {
            "county": "Stevens",
            "locationCode": 3303,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "King County Unincorp. Areas": {
            "county": "King",
            "locationCode": 1700,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "King County Unincorp. Non-RTA": {
            "county": "King",
            "locationCode": 4000,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kirkland": {
            "county": "King",
            "locationCode": 1716,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kitsap County Unincorp. Areas": {
            "county": "Kitsap",
            "locationCode": 1800,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kittitas City": {
            "county": "Kittitas",
            "locationCode": 1903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kittitas County Unincorp. Areas": {
            "county": "Kittitas",
            "locationCode": 1900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Klickitat County Unincorp. Areas": {
            "county": "Klickitat",
            "locationCode": 2000,
            "localTaxRate": 0.005,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.07
        },
        "Krupp": {
            "county": "Grant",
            "locationCode": 1307,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "La Center": {
            "county": "Clark",
            "locationCode": 603,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "La Conner": {
            "county": "Skagit",
            "locationCode": 2905,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "LaCrosse": {
            "county": "Whitman",
            "locationCode": 3807,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Lacey": {
            "county": "Thurston",
            "locationCode": 3402,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Lake Forest Park": {
            "county": "King",
            "locationCode": 1717,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Lake Stevens": {
            "county": "Snohomish",
            "locationCode": 3109,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Lakewood": {
            "county": "Pierce",
            "locationCode": 2721,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Lamont": {
            "county": "Whitman",
            "locationCode": 3808,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Langley": {
            "county": "Island",
            "locationCode": 1502,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Latah": {
            "county": "Spokane",
            "locationCode": 3205,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Leavenworth": {
            "county": "Chelan",
            "locationCode": 404,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lewis County Unincorp. Areas": {
            "county": "Lewis",
            "locationCode": 2100,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Liberty Lake": {
            "county": "Spokane",
            "locationCode": 3212,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Lincoln County Unincorp. Areas": {
            "county": "Lincoln",
            "locationCode": 2200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Lind": {
            "county": "Adams",
            "locationCode": 102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Long Beach": {
            "county": "Pacific",
            "locationCode": 2502,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Longview": {
            "county": "Cowlitz",
            "locationCode": 804,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Lyman": {
            "county": "Skagit",
            "locationCode": 2906,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lynden": {
            "county": "Whatcom",
            "locationCode": 3705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Lynnwood": {
            "county": "Snohomish",
            "locationCode": 3110,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Mabton": {
            "county": "Yakima",
            "locationCode": 3904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Malden": {
            "county": "Whitman",
            "locationCode": 3809,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mansfield": {
            "county": "Douglas",
            "locationCode": 903,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Maple Valley": {
            "county": "King",
            "locationCode": 1720,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Marcus": {
            "county": "Stevens",
            "locationCode": 3304,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Marysville": {
            "county": "Snohomish",
            "locationCode": 3111,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Mason County Unincorp. Areas": {
            "county": "Mason",
            "locationCode": 2300,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Mattawa": {
            "county": "Grant",
            "locationCode": 1308,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medical Lake": {
            "county": "Spokane",
            "locationCode": 3206,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medina": {
            "county": "King",
            "locationCode": 1718,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Mercer Island": {
            "county": "King",
            "locationCode": 1719,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Mesa": {
            "county": "Franklin",
            "locationCode": 1103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Metaline": {
            "county": "Pend Oreille",
            "locationCode": 2603,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Metaline Falls": {
            "county": "Pend Oreille",
            "locationCode": 2604,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Mill Creek": {
            "county": "Snohomish",
            "locationCode": 3119,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Millwood": {
            "county": "Spokane",
            "locationCode": 3207,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Milton in King County": {
            "county": "King",
            "locationCode": 1731,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Milton in Pierce County": {
            "county": "Pierce",
            "locationCode": 2709,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Monroe": {
            "county": "Snohomish",
            "locationCode": 3112,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Montesano": {
            "county": "Grays Harbor",
            "locationCode": 1406,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Morton": {
            "county": "Lewis",
            "locationCode": 2103,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Moses Lake": {
            "county": "Grant",
            "locationCode": 1309,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Mossyrock": {
            "county": "Lewis",
            "locationCode": 2104,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mount Vernon": {
            "county": "Skagit",
            "locationCode": 2907,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Mountlake Terrace": {
            "county": "Snohomish",
            "locationCode": 3113,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Moxee City": {
            "county": "Yakima",
            "locationCode": 3905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Mukilteo": {
            "county": "Snohomish",
            "locationCode": 3114,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Naches": {
            "county": "Yakima",
            "locationCode": 3906,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Napavine": {
            "county": "Lewis",
            "locationCode": 2105,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Nespelem": {
            "county": "Okanogan",
            "locationCode": 2405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Newcastle": {
            "county": "King",
            "locationCode": 1736,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Newcastle Non-RTA": {
            "county": "King",
            "locationCode": 4036,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Newport": {
            "county": "Pend Oreille",
            "locationCode": 2605,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Nooksack": {
            "county": "Whatcom",
            "locationCode": 3706,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Normandy Park": {
            "county": "King",
            "locationCode": 1721,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "North Bend": {
            "county": "King",
            "locationCode": 1722,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "North Bonneville": {
            "county": "Skamania",
            "locationCode": 3001,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Northport": {
            "county": "Stevens",
            "locationCode": 3305,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Oak Harbor": {
            "county": "Island",
            "locationCode": 1503,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Oakesdale": {
            "county": "Whitman",
            "locationCode": 3810,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1407,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Odessa": {
            "county": "Lincoln",
            "locationCode": 2205,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan": {
            "county": "Okanogan",
            "locationCode": 2406,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Orting": {
            "county": "Pierce",
            "locationCode": 2710,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Othello": {
            "county": "Adams",
            "locationCode": 103,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Pacific County Unincorp. Areas": {
            "county": "Pacific",
            "locationCode": 2500,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Pacific in King County": {
            "county": "King",
            "locationCode": 1723,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Pacific in Pierce County": {
            "county": "Pierce",
            "locationCode": 2723,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Palouse": {
            "county": "Whitman",
            "locationCode": 3811,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pasco": {
            "county": "Franklin",
            "locationCode": 1104,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pateros": {
            "county": "Okanogan",
            "locationCode": 2409,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Pe Ell": {
            "county": "Lewis",
            "locationCode": 2106,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pend Oreille County Unincorp. Areas": {
            "county": "Pend Oreille",
            "locationCode": 2600,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Pierce County Unincorp. Areas": {
            "county": "Pierce",
            "locationCode": 2700,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Pierce County Unincorp. Areas Non-RTA": {
            "county": "Pierce",
            "locationCode": 4100,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Pierce County Unincorp. Areas Non-RTA HBZ": {
            "county": "Pierce",
            "locationCode": 2789,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Pierce County Unincorp. PTBA": {
            "county": "Pierce",
            "locationCode": 2727,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Pierce County Unincorp. PTBA HBZ": {
            "county": "Pierce",
            "locationCode": 2787,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Pierce County Unincorp. PTBA\nNon-RTA": {
            "county": "Pierce",
            "locationCode": 4127,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Pomeroy": {
            "county": "Garfield",
            "locationCode": 1201,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Port Angeles": {
            "county": "Clallam",
            "locationCode": 502,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Port Orchard": {
            "county": "Kitsap",
            "locationCode": 1802,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Port Townsend": {
            "county": "Jefferson",
            "locationCode": 1601,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Poulsbo": {
            "county": "Kitsap",
            "locationCode": 1803,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Prescott": {
            "county": "Walla Walla",
            "locationCode": 3602,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Prosser": {
            "county": "Benton",
            "locationCode": 303,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pullman": {
            "county": "Whitman",
            "locationCode": 3812,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Puyallup": {
            "county": "Pierce",
            "locationCode": 2711,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Quincy": {
            "county": "Grant",
            "locationCode": 1310,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Raymond": {
            "county": "Pacific",
            "locationCode": 2503,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Reardan": {
            "county": "Lincoln",
            "locationCode": 2206,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Redmond": {
            "county": "King",
            "locationCode": 1724,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Redmond Non-RTA": {
            "county": "King",
            "locationCode": 4024,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Renton": {
            "county": "King",
            "locationCode": 1725,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Renton Non-RTA": {
            "county": "King",
            "locationCode": 4025,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Republic": {
            "county": "Ferry",
            "locationCode": 1001,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Richland": {
            "county": "Benton",
            "locationCode": 304,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Ridgefield": {
            "county": "Clark",
            "locationCode": 604,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Ritzville": {
            "county": "Adams",
            "locationCode": 104,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Riverside": {
            "county": "Okanogan",
            "locationCode": 2410,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Rock Island": {
            "county": "Douglas",
            "locationCode": 904,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Rockford": {
            "county": "Spokane",
            "locationCode": 3208,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Rosalia": {
            "county": "Whitman",
            "locationCode": 3813,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Roslyn": {
            "county": "Kittitas",
            "locationCode": 1904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Roy": {
            "county": "Pierce",
            "locationCode": 2712,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Royal City": {
            "county": "Grant",
            "locationCode": 1311,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ruston": {
            "county": "Pierce",
            "locationCode": 2713,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Sammamish": {
            "county": "King",
            "locationCode": 1739,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Sammamish Non-RTA": {
            "county": "King",
            "locationCode": 4039,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "San Juan County Unincorp. Areas": {
            "county": "San Juan",
            "locationCode": 2800,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Seattle": {
            "county": "King",
            "locationCode": 1726,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Sedro-Woolley": {
            "county": "Skagit",
            "locationCode": 2908,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Selah": {
            "county": "Yakima",
            "locationCode": 3907,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Sequim": {
            "county": "Clallam",
            "locationCode": 503,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shelton": {
            "county": "Mason",
            "locationCode": 2301,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shoreline": {
            "county": "King",
            "locationCode": 1737,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Skagit County Unincorp. Areas": {
            "county": "Skagit",
            "locationCode": 2900,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Skagit County Unincorp. PTBA": {
            "county": "Skagit",
            "locationCode": 2929,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Skamania County Unincorp. Areas": {
            "county": "Skamania",
            "locationCode": 3000,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Skykomish": {
            "county": "King",
            "locationCode": 1727,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Snohomish": {
            "county": "Snohomish",
            "locationCode": 3115,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas": {
            "county": "Snohomish",
            "locationCode": 3100,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4200,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Snohomish County Unincorp. PTBA": {
            "county": "Snohomish",
            "locationCode": 3131,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Snohomish County Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4231,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Snoqualmie": {
            "county": "King",
            "locationCode": 1728,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "South Bend": {
            "county": "Pacific",
            "locationCode": 2504,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "South Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "South Prairie": {
            "county": "Pierce",
            "locationCode": 2714,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Spangle": {
            "county": "Spokane",
            "locationCode": 3209,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane": {
            "county": "Spokane",
            "locationCode": 3210,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane County Unincorp. Areas": {
            "county": "Spokane",
            "locationCode": 3200,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane County Unincorp. PTBA": {
            "county": "Spokane",
            "locationCode": 3232,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane Valley": {
            "county": "Spokane",
            "locationCode": 3213,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Sprague": {
            "county": "Lincoln",
            "locationCode": 2207,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Springdale": {
            "county": "Stevens",
            "locationCode": 3306,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "St. John": {
            "county": "Whitman",
            "locationCode": 3814,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Stanwood": {
            "county": "Snohomish",
            "locationCode": 3116,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Starbuck": {
            "county": "Columbia",
            "locationCode": 702,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Steilacoom": {
            "county": "Pierce",
            "locationCode": 2715,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Stevens County Unincorp. Areas": {
            "county": "Stevens",
            "locationCode": 3300,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Stevenson": {
            "county": "Skamania",
            "locationCode": 3002,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Sultan": {
            "county": "Snohomish",
            "locationCode": 3117,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Sumas": {
            "county": "Whatcom",
            "locationCode": 3707,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Sumner": {
            "county": "Pierce",
            "locationCode": 2716,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Sunnyside": {
            "county": "Yakima",
            "locationCode": 3908,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Tacoma": {
            "county": "Pierce",
            "locationCode": 2717,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Tekoa": {
            "county": "Whitman",
            "locationCode": 3815,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tenino": {
            "county": "Thurston",
            "locationCode": 3405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Toledo": {
            "county": "Lewis",
            "locationCode": 2107,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tonasket": {
            "county": "Okanogan",
            "locationCode": 2411,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Tulalip Tribes - Marysville": {
            "county": "Snohomish",
            "locationCode": 3121,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Tulalip Tribes - Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4233,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Twisp": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Uniontown": {
            "county": "Whitman",
            "locationCode": 3816,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "University Place": {
            "county": "Pierce",
            "locationCode": 2719,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Vader": {
            "county": "Lewis",
            "locationCode": 2108,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Vancouver": {
            "county": "Clark",
            "locationCode": 605,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Wahkiakum County Unincorp. Areas": {
            "county": "Wahkiakum",
            "locationCode": 3500,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Waitsburg": {
            "county": "Walla Walla",
            "locationCode": 3603,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Walla Walla": {
            "county": "Walla Walla",
            "locationCode": 3604,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Walla Walla County Unincorp. Areas": {
            "county": "Walla Walla",
            "locationCode": 3600,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Walla Walla County Unincorp. PTBA": {
            "county": "Walla Walla",
            "locationCode": 3636,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Wapato": {
            "county": "Yakima",
            "locationCode": 3912,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Washougal": {
            "county": "Clark",
            "locationCode": 606,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Washtucna": {
            "county": "Adams",
            "locationCode": 105,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Waterville": {
            "county": "Douglas",
            "locationCode": 905,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Waverly": {
            "county": "Spokane",
            "locationCode": 3211,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Wenatchee": {
            "county": "Chelan",
            "locationCode": 405,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "West Richland": {
            "county": "Benton",
            "locationCode": 305,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Westport": {
            "county": "Grays Harbor",
            "locationCode": 1408,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Whatcom County Unincorp. Areas": {
            "county": "Whatcom",
            "locationCode": 3700,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Whatcom County Unincorp. PTBA": {
            "county": "Whatcom",
            "locationCode": 3737,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "White Salmon": {
            "county": "Klickitat",
            "locationCode": 2003,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Whitman County Unincorp. Areas": {
            "county": "Whitman",
            "locationCode": 3800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Wilbur": {
            "county": "Lincoln",
            "locationCode": 2208,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilkeson": {
            "county": "Pierce",
            "locationCode": 2718,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Wilson Creek": {
            "county": "Grant",
            "locationCode": 1315,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Winlock": {
            "county": "Lewis",
            "locationCode": 2109,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Winthrop": {
            "county": "Okanogan",
            "locationCode": 2413,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Woodinville": {
            "county": "King",
            "locationCode": 1735,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Woodinville Non-RTA": {
            "county": "King",
            "locationCode": 4035,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Woodland": {
            "county": "Cowlitz",
            "locationCode": 805,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Woodway": {
            "county": "Snohomish",
            "locationCode": 3118,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Yacolt": {
            "county": "Clark",
            "locationCode": 607,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Yakima": {
            "county": "Yakima",
            "locationCode": 3913,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Yarrow Point": {
            "county": "King",
            "locationCode": 1730,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Yelm": {
            "county": "Thurston",
            "locationCode": 3407,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        }
    },
    {
        "expires": "2021-03-31T07:00:00.000Z",
        "Aberdeen ": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0258,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0908
        },
        "Adams County Unincorp. Areas": {
            "county": "Adams",
            "locationCode": 100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Airway Heights ": {
            "county": "Spokane",
            "locationCode": 3201,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Albion": {
            "county": "Whitman",
            "locationCode": 3801,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Algona": {
            "county": "King",
            "locationCode": 1701,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Almira": {
            "county": "Lincoln",
            "locationCode": 2201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Anacortes": {
            "county": "Skagit",
            "locationCode": 2901,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Arlington ": {
            "county": "Snohomish",
            "locationCode": 3101,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Asotin": {
            "county": "Asotin",
            "locationCode": 201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Auburn in King County": {
            "county": "King",
            "locationCode": 1702,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Auburn in King County Non-RTA": {
            "county": "King",
            "locationCode": 4002,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Auburn in Pierce County": {
            "county": "Pierce",
            "locationCode": 2724,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Bainbridge Island": {
            "county": "Kitsap",
            "locationCode": 1804,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Battle Ground": {
            "county": "Clark",
            "locationCode": 601,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Beaux Arts Village": {
            "county": "King",
            "locationCode": 1703,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue": {
            "county": "King",
            "locationCode": 1704,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue Non-RTA": {
            "county": "King",
            "locationCode": 4004,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bellingham ": {
            "county": "Whatcom",
            "locationCode": 3701,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Benton City": {
            "county": "Benton",
            "locationCode": 301,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Benton County Unincorp. Areas": {
            "county": "Benton",
            "locationCode": 300,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Benton Co. Unincorp. PTBA": {
            "county": "Benton",
            "locationCode": 333,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Bingen": {
            "county": "Klickitat",
            "locationCode": 2001,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Black Diamond": {
            "county": "King",
            "locationCode": 1705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Blaine": {
            "county": "Whatcom",
            "locationCode": 3702,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bonney Lake": {
            "county": "Pierce",
            "locationCode": 2701,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Bonney Lake Non-RTA": {
            "county": "Pierce",
            "locationCode": 4101,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Bothell in King County": {
            "county": "King",
            "locationCode": 1706,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bothell in Snohomish County": {
            "county": "Snohomish",
            "locationCode": 3120,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Bremerton": {
            "county": "Kitsap",
            "locationCode": 1801,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Brewster": {
            "county": "Okanogan",
            "locationCode": 2401,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Bridgeport": {
            "county": "Douglas",
            "locationCode": 901,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Brier": {
            "county": "Snohomish",
            "locationCode": 3102,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Buckley": {
            "county": "Pierce",
            "locationCode": 2702,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Bucoda": {
            "county": "Thurston",
            "locationCode": 3401,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Burien": {
            "county": "King",
            "locationCode": 1734,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Burlington": {
            "county": "Skagit",
            "locationCode": 2902,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Camas": {
            "county": "Clark",
            "locationCode": 602,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Carbonado": {
            "county": "Pierce",
            "locationCode": 2703,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Carnation": {
            "county": "King",
            "locationCode": 1707,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cashmere": {
            "county": "Chelan",
            "locationCode": 401,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Castle Rock ": {
            "county": "Cowlitz",
            "locationCode": 801,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cathlamet": {
            "county": "Wahkiakum",
            "locationCode": 3501,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Centralia ": {
            "county": "Lewis",
            "locationCode": 2101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis": {
            "county": "Lewis",
            "locationCode": 2102,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis Tribes - Unincorp. Grays Harbor County": {
            "county": "Grays Harbor",
            "locationCode": 1411,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Lewis County": {
            "county": "Lewis",
            "locationCode": 2111,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Chehalis Tribes - Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1413,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3409,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Chehalis Tribes - Tumwater": {
            "county": "Thurston",
            "locationCode": 3411,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Chelan": {
            "county": "Chelan",
            "locationCode": 402,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Chelan County Unincorp. Areas": {
            "county": "Chelan",
            "locationCode": 400,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Cheney": {
            "county": "Spokane",
            "locationCode": 3202,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chewelah": {
            "county": "Stevens",
            "locationCode": 3301,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Clallam County Unincorp. Areas": {
            "county": "Clallam",
            "locationCode": 500,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Clark County Unincorp. Areas": {
            "county": "Clark",
            "locationCode": 600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Clark County Unincorp. PTBA": {
            "county": "Clark",
            "locationCode": 666,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Clarkston": {
            "county": "Asotin",
            "locationCode": 202,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Clyde Hill": {
            "county": "King",
            "locationCode": 1708,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Colfax": {
            "county": "Whitman",
            "locationCode": 3802,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "College Place": {
            "county": "Walla Walla",
            "locationCode": 3601,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Colton": {
            "county": "Whitman",
            "locationCode": 3803,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Columbia County Unincorp. Areas": {
            "county": "Columbia",
            "locationCode": 700,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Colville": {
            "county": "Stevens",
            "locationCode": 3302,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Conconully": {
            "county": "Okanogan",
            "locationCode": 2402,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Concrete": {
            "county": "Skagit",
            "locationCode": 2903,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Connell": {
            "county": "Franklin",
            "locationCode": 1101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cosmopolis": {
            "county": "Grays Harbor",
            "locationCode": 1402,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Coupeville": {
            "county": "Island",
            "locationCode": 1501,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Covington": {
            "county": "King",
            "locationCode": 1712,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cowlitz County Unincorp. Areas": {
            "county": "Cowlitz",
            "locationCode": 800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Creston": {
            "county": "Lincoln",
            "locationCode": 2202,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cusick": {
            "county": "Pend Oreille",
            "locationCode": 2601,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Darrington": {
            "county": "Snohomish",
            "locationCode": 3103,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Davenport": {
            "county": "Lincoln",
            "locationCode": 2203,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Dayton": {
            "county": "Columbia",
            "locationCode": 701,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Deer Park": {
            "county": "Spokane",
            "locationCode": 3203,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Des Moines": {
            "county": "King",
            "locationCode": 1709,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Douglas County Unincorp. Areas": {
            "county": "Douglas",
            "locationCode": 900,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Douglas County Unincorp. PTBA": {
            "county": "Douglas",
            "locationCode": 909,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "DuPont": {
            "county": "Pierce",
            "locationCode": 2704,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Duvall": {
            "county": "King",
            "locationCode": 1710,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "East Wenatchee": {
            "county": "Douglas",
            "locationCode": 902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Eatonville": {
            "county": "Pierce",
            "locationCode": 2705,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Edgewood": {
            "county": "Pierce",
            "locationCode": 2720,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Edmonds": {
            "county": "Snohomish",
            "locationCode": 3104,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Electric City": {
            "county": "Grant",
            "locationCode": 1302,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ellensburg ": {
            "county": "Kittitas",
            "locationCode": 1902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Elma": {
            "county": "Grays Harbor",
            "locationCode": 1403,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Endicott": {
            "county": "Whitman",
            "locationCode": 3804,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Entiat": {
            "county": "Chelan",
            "locationCode": 403,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Enumclaw": {
            "county": "King",
            "locationCode": 1711,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ephrata": {
            "county": "Grant",
            "locationCode": 1303,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everett": {
            "county": "Snohomish",
            "locationCode": 3105,
            "localTaxRate": 0.033,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.098
        },
        "Everett Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4205,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everson": {
            "county": "Whatcom",
            "locationCode": 3703,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Fairfield": {
            "county": "Spokane",
            "locationCode": 3204,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Farmington": {
            "county": "Whitman",
            "locationCode": 3805,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Federal Way": {
            "county": "King",
            "locationCode": 1732,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ferndale ": {
            "county": "Whatcom",
            "locationCode": 3704,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Ferry County Unincorp. Areas": {
            "county": "Ferry",
            "locationCode": 1000,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Fife": {
            "county": "Pierce",
            "locationCode": 2706,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Fircrest": {
            "county": "Pierce",
            "locationCode": 2707,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Forks": {
            "county": "Clallam",
            "locationCode": 501,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Franklin County Unincorp. Areas": {
            "county": "Franklin",
            "locationCode": 1100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Franklin County Unincorp. PTBA": {
            "county": "Franklin",
            "locationCode": 1111,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Friday Harbor ": {
            "county": "San Juan",
            "locationCode": 2801,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Garfield": {
            "county": "Whitman",
            "locationCode": 3806,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Garfield County Unincorp. Areas": {
            "county": "Garfield",
            "locationCode": 1200,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "George": {
            "county": "Grant",
            "locationCode": 1304,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Gold Bar": {
            "county": "Snohomish",
            "locationCode": 3106,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Goldendale": {
            "county": "Klickitat",
            "locationCode": 2002,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Grand Coulee": {
            "county": "Grant",
            "locationCode": 1305,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granite Falls": {
            "county": "Snohomish",
            "locationCode": 3107,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Grant County Unincorp. Areas": {
            "county": "Grant",
            "locationCode": 1300,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hamilton": {
            "county": "Skagit",
            "locationCode": 2904,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Harrah": {
            "county": "Yakima",
            "locationCode": 3903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Harrington": {
            "county": "Lincoln",
            "locationCode": 2204,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hartline": {
            "county": "Grant",
            "locationCode": 1306,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Hatton": {
            "county": "Adams",
            "locationCode": 101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hoquiam": {
            "county": "Grays Harbor",
            "locationCode": 1404,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hunts Point": {
            "county": "King",
            "locationCode": 1713,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ilwaco": {
            "county": "Pacific",
            "locationCode": 2501,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Index": {
            "county": "Snohomish",
            "locationCode": 3108,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Ione": {
            "county": "Pend Oreille",
            "locationCode": 2602,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Island County Unincorp. Areas": {
            "county": "Island",
            "locationCode": 1500,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Issaquah": {
            "county": "King",
            "locationCode": 1714,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Issaquah Non-RTA": {
            "county": "King",
            "locationCode": 4014,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Jefferson County Unincorp. Areas": {
            "county": "Jefferson",
            "locationCode": 1600,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kahlotus": {
            "county": "Franklin",
            "locationCode": 1102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kalama": {
            "county": "Cowlitz",
            "locationCode": 802,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Kelso": {
            "county": "Cowlitz",
            "locationCode": 803,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Kenmore": {
            "county": "King",
            "locationCode": 1738,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kennewick": {
            "county": "Benton",
            "locationCode": 302,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kent": {
            "county": "King",
            "locationCode": 1715,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kent Non-RTA": {
            "county": "King",
            "locationCode": 4015,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kettle Falls": {
            "county": "Stevens",
            "locationCode": 3303,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "King County Unincorp. Areas": {
            "county": "King",
            "locationCode": 1700,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "King County Unincorp. Non-RTA": {
            "county": "King",
            "locationCode": 4000,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kirkland": {
            "county": "King",
            "locationCode": 1716,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Kitsap County Unincorp. Areas": {
            "county": "Kitsap",
            "locationCode": 1800,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kittitas City": {
            "county": "Kittitas",
            "locationCode": 1903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kittitas County Unincorp. Areas": {
            "county": "Kittitas",
            "locationCode": 1900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Klickitat County Unincorp. Areas": {
            "county": "Klickitat",
            "locationCode": 2000,
            "localTaxRate": 0.005,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.07
        },
        "Krupp": {
            "county": "Grant",
            "locationCode": 1307,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "La Center": {
            "county": "Clark",
            "locationCode": 603,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "La Conner": {
            "county": "Skagit",
            "locationCode": 2905,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "LaCrosse": {
            "county": "Whitman",
            "locationCode": 3807,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Lacey": {
            "county": "Thurston",
            "locationCode": 3402,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Lake Forest Park": {
            "county": "King",
            "locationCode": 1717,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Lake Stevens": {
            "county": "Snohomish",
            "locationCode": 3109,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Lakewood": {
            "county": "Pierce",
            "locationCode": 2721,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Lamont": {
            "county": "Whitman",
            "locationCode": 3808,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Langley": {
            "county": "Island",
            "locationCode": 1502,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Latah": {
            "county": "Spokane",
            "locationCode": 3205,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Leavenworth": {
            "county": "Chelan",
            "locationCode": 404,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lewis County Unincorp. Areas": {
            "county": "Lewis",
            "locationCode": 2100,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Liberty Lake": {
            "county": "Spokane",
            "locationCode": 3212,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Lincoln County Unincorp. Areas": {
            "county": "Lincoln",
            "locationCode": 2200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Lind": {
            "county": "Adams",
            "locationCode": 102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Long Beach": {
            "county": "Pacific",
            "locationCode": 2502,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Longview": {
            "county": "Cowlitz",
            "locationCode": 804,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Lyman": {
            "county": "Skagit",
            "locationCode": 2906,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lynden ": {
            "county": "Whatcom",
            "locationCode": 3705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Lynnwood": {
            "county": "Snohomish",
            "locationCode": 3110,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Mabton": {
            "county": "Yakima",
            "locationCode": 3904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Malden": {
            "county": "Whitman",
            "locationCode": 3809,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mansfield": {
            "county": "Douglas",
            "locationCode": 903,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Maple Valley": {
            "county": "King",
            "locationCode": 1720,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Marcus": {
            "county": "Stevens",
            "locationCode": 3304,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Marysville ": {
            "county": "Snohomish",
            "locationCode": 3111,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Mason County Unincorp. Areas": {
            "county": "Mason",
            "locationCode": 2300,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Mattawa": {
            "county": "Grant",
            "locationCode": 1308,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medical Lake": {
            "county": "Spokane",
            "locationCode": 3206,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medina": {
            "county": "King",
            "locationCode": 1718,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mercer Island": {
            "county": "King",
            "locationCode": 1719,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mesa": {
            "county": "Franklin",
            "locationCode": 1103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Metaline": {
            "county": "Pend Oreille",
            "locationCode": 2603,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Metaline Falls": {
            "county": "Pend Oreille",
            "locationCode": 2604,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Mill Creek": {
            "county": "Snohomish",
            "locationCode": 3119,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Millwood": {
            "county": "Spokane",
            "locationCode": 3207,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Milton in King County": {
            "county": "King",
            "locationCode": 1731,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Milton in Pierce County": {
            "county": "Pierce",
            "locationCode": 2709,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Monroe ": {
            "county": "Snohomish",
            "locationCode": 3112,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Montesano": {
            "county": "Grays Harbor",
            "locationCode": 1406,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Morton": {
            "county": "Lewis",
            "locationCode": 2103,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Moses Lake": {
            "county": "Grant",
            "locationCode": 1309,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Mossyrock": {
            "county": "Lewis",
            "locationCode": 2104,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mount Vernon": {
            "county": "Skagit",
            "locationCode": 2907,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Mountlake Terrace": {
            "county": "Snohomish",
            "locationCode": 3113,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Moxee City": {
            "county": "Yakima",
            "locationCode": 3905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Mukilteo": {
            "county": "Snohomish",
            "locationCode": 3114,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Naches": {
            "county": "Yakima",
            "locationCode": 3906,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Napavine": {
            "county": "Lewis",
            "locationCode": 2105,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Nespelem": {
            "county": "Okanogan",
            "locationCode": 2405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Newcastle": {
            "county": "King",
            "locationCode": 1736,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Newcastle Non-RTA": {
            "county": "King",
            "locationCode": 4036,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Newport": {
            "county": "Pend Oreille",
            "locationCode": 2605,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Nooksack": {
            "county": "Whatcom",
            "locationCode": 3706,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Normandy Park": {
            "county": "King",
            "locationCode": 1721,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "North Bend": {
            "county": "King",
            "locationCode": 1722,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "North Bonneville": {
            "county": "Skamania",
            "locationCode": 3001,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Northport": {
            "county": "Stevens",
            "locationCode": 3305,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Oak Harbor": {
            "county": "Island",
            "locationCode": 1503,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Oakesdale": {
            "county": "Whitman",
            "locationCode": 3810,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1407,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Odessa": {
            "county": "Lincoln",
            "locationCode": 2205,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan": {
            "county": "Okanogan",
            "locationCode": 2406,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Orting": {
            "county": "Pierce",
            "locationCode": 2710,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Othello": {
            "county": "Adams",
            "locationCode": 103,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Pacific County Unincorp. Areas": {
            "county": "Pacific",
            "locationCode": 2500,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Pacific in King County": {
            "county": "King",
            "locationCode": 1723,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Pacific in Pierce County": {
            "county": "Pierce",
            "locationCode": 2723,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Palouse": {
            "county": "Whitman",
            "locationCode": 3811,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pasco": {
            "county": "Franklin",
            "locationCode": 1104,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pateros": {
            "county": "Okanogan",
            "locationCode": 2409,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Pe Ell": {
            "county": "Lewis",
            "locationCode": 2106,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pend Oreille County Unincorp. Areas": {
            "county": "Pend Oreille",
            "locationCode": 2600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Pierce County Unincorp. Areas": {
            "county": "Pierce",
            "locationCode": 2700,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Pierce County Unincorp. Areas Non-RTA": {
            "county": "Pierce",
            "locationCode": 4100,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Pierce County Unincorp. Areas Non-RTA HBZ": {
            "county": "Pierce",
            "locationCode": 2789,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Pierce County Unincorp. PTBA": {
            "county": "Pierce",
            "locationCode": 2727,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Pierce County Unincorp. PTBA HBZ": {
            "county": "Pierce",
            "locationCode": 2787,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Pierce County Unincorp. PTBA\nNon-RTA": {
            "county": "Pierce",
            "locationCode": 4127,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Pomeroy": {
            "county": "Garfield",
            "locationCode": 1201,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Port Angeles": {
            "county": "Clallam",
            "locationCode": 502,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Port Orchard": {
            "county": "Kitsap",
            "locationCode": 1802,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Port Townsend": {
            "county": "Jefferson",
            "locationCode": 1601,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Poulsbo": {
            "county": "Kitsap",
            "locationCode": 1803,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Prescott": {
            "county": "Walla Walla",
            "locationCode": 3602,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Prosser": {
            "county": "Benton",
            "locationCode": 303,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pullman": {
            "county": "Whitman",
            "locationCode": 3812,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Puyallup": {
            "county": "Pierce",
            "locationCode": 2711,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Quincy": {
            "county": "Grant",
            "locationCode": 1310,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Raymond": {
            "county": "Pacific",
            "locationCode": 2503,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Reardan": {
            "county": "Lincoln",
            "locationCode": 2206,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Redmond": {
            "county": "King",
            "locationCode": 1724,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Redmond Non-RTA": {
            "county": "King",
            "locationCode": 4024,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Renton": {
            "county": "King",
            "locationCode": 1725,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Renton Non-RTA": {
            "county": "King",
            "locationCode": 4025,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Republic": {
            "county": "Ferry",
            "locationCode": 1001,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Richland ": {
            "county": "Benton",
            "locationCode": 304,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Ridgefield": {
            "county": "Clark",
            "locationCode": 604,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Ritzville ": {
            "county": "Adams",
            "locationCode": 104,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Riverside": {
            "county": "Okanogan",
            "locationCode": 2410,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Rock Island": {
            "county": "Douglas",
            "locationCode": 904,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Rockford": {
            "county": "Spokane",
            "locationCode": 3208,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Rosalia": {
            "county": "Whitman",
            "locationCode": 3813,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Roslyn": {
            "county": "Kittitas",
            "locationCode": 1904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Roy": {
            "county": "Pierce",
            "locationCode": 2712,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Royal City": {
            "county": "Grant",
            "locationCode": 1311,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ruston": {
            "county": "Pierce",
            "locationCode": 2713,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Sammamish": {
            "county": "King",
            "locationCode": 1739,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Sammamish Non-RTA": {
            "county": "King",
            "locationCode": 4039,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "San Juan County Unincorp. Areas": {
            "county": "San Juan",
            "locationCode": 2800,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Seattle ": {
            "county": "King",
            "locationCode": 1726,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Sedro-Woolley": {
            "county": "Skagit",
            "locationCode": 2908,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Selah": {
            "county": "Yakima",
            "locationCode": 3907,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Sequim": {
            "county": "Clallam",
            "locationCode": 503,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shelton ": {
            "county": "Mason",
            "locationCode": 2301,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shoreline": {
            "county": "King",
            "locationCode": 1737,
            "localTaxRate": 0.038,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.103
        },
        "Skagit County Unincorp. Areas": {
            "county": "Skagit",
            "locationCode": 2900,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Skagit County Unincorp. PTBA": {
            "county": "Skagit",
            "locationCode": 2929,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Skamania County Unincorp. Areas": {
            "county": "Skamania",
            "locationCode": 3000,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Skykomish": {
            "county": "King",
            "locationCode": 1727,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Snohomish ": {
            "county": "Snohomish",
            "locationCode": 3115,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas": {
            "county": "Snohomish",
            "locationCode": 3100,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4200,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Snohomish County Unincorp. PTBA": {
            "county": "Snohomish",
            "locationCode": 3131,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Snohomish County Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4231,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Snoqualmie": {
            "county": "King",
            "locationCode": 1728,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "South Bend": {
            "county": "Pacific",
            "locationCode": 2504,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "South Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "South Prairie": {
            "county": "Pierce",
            "locationCode": 2714,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Spangle": {
            "county": "Spokane",
            "locationCode": 3209,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane": {
            "county": "Spokane",
            "locationCode": 3210,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane County Unincorp. Areas": {
            "county": "Spokane",
            "locationCode": 3200,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane County Unincorp. PTBA": {
            "county": "Spokane",
            "locationCode": 3232,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane Valley": {
            "county": "Spokane",
            "locationCode": 3213,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Sprague": {
            "county": "Lincoln",
            "locationCode": 2207,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Springdale": {
            "county": "Stevens",
            "locationCode": 3306,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "St. John": {
            "county": "Whitman",
            "locationCode": 3814,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Stanwood ": {
            "county": "Snohomish",
            "locationCode": 3116,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Starbuck": {
            "county": "Columbia",
            "locationCode": 702,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Steilacoom": {
            "county": "Pierce",
            "locationCode": 2715,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Stevens County Unincorp. Areas": {
            "county": "Stevens",
            "locationCode": 3300,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Stevenson": {
            "county": "Skamania",
            "locationCode": 3002,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Sultan": {
            "county": "Snohomish",
            "locationCode": 3117,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Sumas": {
            "county": "Whatcom",
            "locationCode": 3707,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Sumner": {
            "county": "Pierce",
            "locationCode": 2716,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Sunnyside": {
            "county": "Yakima",
            "locationCode": 3908,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Tacoma ": {
            "county": "Pierce",
            "locationCode": 2717,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Tekoa": {
            "county": "Whitman",
            "locationCode": 3815,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tenino": {
            "county": "Thurston",
            "locationCode": 3405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Toledo": {
            "county": "Lewis",
            "locationCode": 2107,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tonasket": {
            "county": "Okanogan",
            "locationCode": 2411,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Tulalip Tribes - Marysville": {
            "county": "Snohomish",
            "locationCode": 3121,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Tulalip Tribes - Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4233,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Twisp ": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Uniontown": {
            "county": "Whitman",
            "locationCode": 3816,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "University Place": {
            "county": "Pierce",
            "locationCode": 2719,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Vader": {
            "county": "Lewis",
            "locationCode": 2108,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Vancouver": {
            "county": "Clark",
            "locationCode": 605,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Wahkiakum County Unincorp. Areas": {
            "county": "Wahkiakum",
            "locationCode": 3500,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Waitsburg ": {
            "county": "Walla Walla",
            "locationCode": 3603,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Walla Walla ": {
            "county": "Walla Walla",
            "locationCode": 3604,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Walla Walla County Unincorp. Areas": {
            "county": "Walla Walla",
            "locationCode": 3600,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Walla Walla County Unincorp. PTBA": {
            "county": "Walla Walla",
            "locationCode": 3636,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Wapato": {
            "county": "Yakima",
            "locationCode": 3912,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Washougal": {
            "county": "Clark",
            "locationCode": 606,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Washtucna": {
            "county": "Adams",
            "locationCode": 105,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Waterville": {
            "county": "Douglas",
            "locationCode": 905,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Waverly": {
            "county": "Spokane",
            "locationCode": 3211,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Wenatchee": {
            "county": "Chelan",
            "locationCode": 405,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "West Richland": {
            "county": "Benton",
            "locationCode": 305,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Westport": {
            "county": "Grays Harbor",
            "locationCode": 1408,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Whatcom County Unincorp. Areas": {
            "county": "Whatcom",
            "locationCode": 3700,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Whatcom County Unincorp. PTBA": {
            "county": "Whatcom",
            "locationCode": 3737,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "White Salmon": {
            "county": "Klickitat",
            "locationCode": 2003,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Whitman County Unincorp. Areas": {
            "county": "Whitman",
            "locationCode": 3800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Wilbur": {
            "county": "Lincoln",
            "locationCode": 2208,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilkeson": {
            "county": "Pierce",
            "locationCode": 2718,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Wilson Creek": {
            "county": "Grant",
            "locationCode": 1315,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Winlock": {
            "county": "Lewis",
            "locationCode": 2109,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Winthrop": {
            "county": "Okanogan",
            "locationCode": 2413,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Woodinville": {
            "county": "King",
            "locationCode": 1735,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Woodinville Non-RTA": {
            "county": "King",
            "locationCode": 4035,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Woodland": {
            "county": "Cowlitz",
            "locationCode": 805,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Woodway": {
            "county": "Snohomish",
            "locationCode": 3118,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Yacolt": {
            "county": "Clark",
            "locationCode": 607,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Yakima": {
            "county": "Yakima",
            "locationCode": 3913,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Yarrow Point": {
            "county": "King",
            "locationCode": 1730,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Yelm": {
            "county": "Thurston",
            "locationCode": 3407,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        }
    },
    {
        "expires": "2021-06-30T07:00:00.000Z",
        "Aberdeen ": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0258,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0908
        },
        "Adams County Unincorp. Areas": {
            "county": "Adams",
            "locationCode": 100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Airway Heights ": {
            "county": "Spokane",
            "locationCode": 3201,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Albion": {
            "county": "Whitman",
            "locationCode": 3801,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Algona": {
            "county": "King",
            "locationCode": 1701,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Almira": {
            "county": "Lincoln",
            "locationCode": 2201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Anacortes": {
            "county": "Skagit",
            "locationCode": 2901,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Arlington ": {
            "county": "Snohomish",
            "locationCode": 3101,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Asotin": {
            "county": "Asotin",
            "locationCode": 201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Auburn in King County": {
            "county": "King",
            "locationCode": 1702,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Auburn in King County Non-RTA": {
            "county": "King",
            "locationCode": 4002,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Auburn in Pierce County": {
            "county": "Pierce",
            "locationCode": 2724,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Bainbridge Island": {
            "county": "Kitsap",
            "locationCode": 1804,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Battle Ground": {
            "county": "Clark",
            "locationCode": 601,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Beaux Arts Village": {
            "county": "King",
            "locationCode": 1703,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue": {
            "county": "King",
            "locationCode": 1704,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue Non-RTA": {
            "county": "King",
            "locationCode": 4004,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bellingham ": {
            "county": "Whatcom",
            "locationCode": 3701,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Benton City": {
            "county": "Benton",
            "locationCode": 301,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Benton County Unincorp. Areas": {
            "county": "Benton",
            "locationCode": 300,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Benton Co. Unincorp. PTBA": {
            "county": "Benton",
            "locationCode": 333,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Bingen": {
            "county": "Klickitat",
            "locationCode": 2001,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Black Diamond": {
            "county": "King",
            "locationCode": 1705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Blaine": {
            "county": "Whatcom",
            "locationCode": 3702,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bonney Lake": {
            "county": "Pierce",
            "locationCode": 2701,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Bonney Lake Non-RTA": {
            "county": "Pierce",
            "locationCode": 4101,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Bothell in King County": {
            "county": "King",
            "locationCode": 1706,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bothell in Snohomish County": {
            "county": "Snohomish",
            "locationCode": 3120,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Bremerton": {
            "county": "Kitsap",
            "locationCode": 1801,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Brewster": {
            "county": "Okanogan",
            "locationCode": 2401,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Bridgeport": {
            "county": "Douglas",
            "locationCode": 901,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Brier": {
            "county": "Snohomish",
            "locationCode": 3102,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Buckley": {
            "county": "Pierce",
            "locationCode": 2702,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Bucoda": {
            "county": "Thurston",
            "locationCode": 3401,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Burien": {
            "county": "King",
            "locationCode": 1734,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Burlington": {
            "county": "Skagit",
            "locationCode": 2902,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Camas": {
            "county": "Clark",
            "locationCode": 602,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Carbonado": {
            "county": "Pierce",
            "locationCode": 2703,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Carnation": {
            "county": "King",
            "locationCode": 1707,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cashmere": {
            "county": "Chelan",
            "locationCode": 401,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Castle Rock ": {
            "county": "Cowlitz",
            "locationCode": 801,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cathlamet": {
            "county": "Wahkiakum",
            "locationCode": 3501,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Centralia ": {
            "county": "Lewis",
            "locationCode": 2101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis": {
            "county": "Lewis",
            "locationCode": 2102,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis Tribes - Unincorp. Grays Harbor County": {
            "county": "Grays Harbor",
            "locationCode": 1411,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Lewis County": {
            "county": "Lewis",
            "locationCode": 2111,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Chehalis Tribes - Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1413,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3409,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Chehalis Tribes - Tumwater": {
            "county": "Thurston",
            "locationCode": 3411,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Chelan": {
            "county": "Chelan",
            "locationCode": 402,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Chelan County Unincorp. Areas": {
            "county": "Chelan",
            "locationCode": 400,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Cheney": {
            "county": "Spokane",
            "locationCode": 3202,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chewelah": {
            "county": "Stevens",
            "locationCode": 3301,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Clallam County Unincorp. Areas": {
            "county": "Clallam",
            "locationCode": 500,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Clark County Unincorp. Areas": {
            "county": "Clark",
            "locationCode": 600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Clark County Unincorp. PTBA": {
            "county": "Clark",
            "locationCode": 666,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Clarkston": {
            "county": "Asotin",
            "locationCode": 202,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Clyde Hill": {
            "county": "King",
            "locationCode": 1708,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Colfax": {
            "county": "Whitman",
            "locationCode": 3802,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "College Place": {
            "county": "Walla Walla",
            "locationCode": 3601,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Colton": {
            "county": "Whitman",
            "locationCode": 3803,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Columbia County Unincorp. Areas": {
            "county": "Columbia",
            "locationCode": 700,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Colville": {
            "county": "Stevens",
            "locationCode": 3302,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Conconully": {
            "county": "Okanogan",
            "locationCode": 2402,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Concrete": {
            "county": "Skagit",
            "locationCode": 2903,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Connell": {
            "county": "Franklin",
            "locationCode": 1101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cosmopolis": {
            "county": "Grays Harbor",
            "locationCode": 1402,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Coupeville": {
            "county": "Island",
            "locationCode": 1501,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Covington": {
            "county": "King",
            "locationCode": 1712,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cowlitz County Unincorp. Areas": {
            "county": "Cowlitz",
            "locationCode": 800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Creston": {
            "county": "Lincoln",
            "locationCode": 2202,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cusick": {
            "county": "Pend Oreille",
            "locationCode": 2601,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Darrington": {
            "county": "Snohomish",
            "locationCode": 3103,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Davenport": {
            "county": "Lincoln",
            "locationCode": 2203,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Dayton": {
            "county": "Columbia",
            "locationCode": 701,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Deer Park": {
            "county": "Spokane",
            "locationCode": 3203,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Des Moines": {
            "county": "King",
            "locationCode": 1709,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Douglas County Unincorp. Areas": {
            "county": "Douglas",
            "locationCode": 900,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Douglas County Unincorp. PTBA": {
            "county": "Douglas",
            "locationCode": 909,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "DuPont": {
            "county": "Pierce",
            "locationCode": 2704,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Duvall": {
            "county": "King",
            "locationCode": 1710,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "East Wenatchee": {
            "county": "Douglas",
            "locationCode": 902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Eatonville": {
            "county": "Pierce",
            "locationCode": 2705,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Edgewood": {
            "county": "Pierce",
            "locationCode": 2720,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Edmonds": {
            "county": "Snohomish",
            "locationCode": 3104,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Electric City": {
            "county": "Grant",
            "locationCode": 1302,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ellensburg ": {
            "county": "Kittitas",
            "locationCode": 1902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Elma": {
            "county": "Grays Harbor",
            "locationCode": 1403,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Endicott": {
            "county": "Whitman",
            "locationCode": 3804,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Entiat": {
            "county": "Chelan",
            "locationCode": 403,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Enumclaw": {
            "county": "King",
            "locationCode": 1711,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ephrata": {
            "county": "Grant",
            "locationCode": 1303,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everett": {
            "county": "Snohomish",
            "locationCode": 3105,
            "localTaxRate": 0.033,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.098
        },
        "Everett Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4205,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everson": {
            "county": "Whatcom",
            "locationCode": 3703,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Fairfield": {
            "county": "Spokane",
            "locationCode": 3204,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Farmington": {
            "county": "Whitman",
            "locationCode": 3805,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Federal Way": {
            "county": "King",
            "locationCode": 1732,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ferndale ": {
            "county": "Whatcom",
            "locationCode": 3704,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Ferry County Unincorp. Areas": {
            "county": "Ferry",
            "locationCode": 1000,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Fife": {
            "county": "Pierce",
            "locationCode": 2706,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Fircrest": {
            "county": "Pierce",
            "locationCode": 2707,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Forks": {
            "county": "Clallam",
            "locationCode": 501,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Franklin County Unincorp. Areas": {
            "county": "Franklin",
            "locationCode": 1100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Franklin County Unincorp. PTBA": {
            "county": "Franklin",
            "locationCode": 1111,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Friday Harbor ": {
            "county": "San Juan",
            "locationCode": 2801,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Garfield": {
            "county": "Whitman",
            "locationCode": 3806,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Garfield County Unincorp. Areas": {
            "county": "Garfield",
            "locationCode": 1200,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "George": {
            "county": "Grant",
            "locationCode": 1304,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Gold Bar": {
            "county": "Snohomish",
            "locationCode": 3106,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Goldendale": {
            "county": "Klickitat",
            "locationCode": 2002,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Grand Coulee": {
            "county": "Grant",
            "locationCode": 1305,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granite Falls": {
            "county": "Snohomish",
            "locationCode": 3107,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Grant County Unincorp. Areas": {
            "county": "Grant",
            "locationCode": 1300,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hamilton": {
            "county": "Skagit",
            "locationCode": 2904,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Harrah": {
            "county": "Yakima",
            "locationCode": 3903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Harrington": {
            "county": "Lincoln",
            "locationCode": 2204,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hartline": {
            "county": "Grant",
            "locationCode": 1306,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Hatton": {
            "county": "Adams",
            "locationCode": 101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hoquiam": {
            "county": "Grays Harbor",
            "locationCode": 1404,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hunts Point": {
            "county": "King",
            "locationCode": 1713,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ilwaco": {
            "county": "Pacific",
            "locationCode": 2501,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Index": {
            "county": "Snohomish",
            "locationCode": 3108,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Ione": {
            "county": "Pend Oreille",
            "locationCode": 2602,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Island County Unincorp. Areas": {
            "county": "Island",
            "locationCode": 1500,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Issaquah": {
            "county": "King",
            "locationCode": 1714,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Issaquah Non-RTA": {
            "county": "King",
            "locationCode": 4014,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Jefferson County Unincorp. Areas": {
            "county": "Jefferson",
            "locationCode": 1600,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Kahlotus": {
            "county": "Franklin",
            "locationCode": 1102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kalama": {
            "county": "Cowlitz",
            "locationCode": 802,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Kalispel Tribe -  Airway Heights": {
            "county": "Spokane",
            "locationCode": 3215,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Kalispel Tribe - Unincorp. Pend Oreille County": {
            "county": "Pend Oreille",
            "locationCode": 2607,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Kelso": {
            "county": "Cowlitz",
            "locationCode": 803,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Kenmore": {
            "county": "King",
            "locationCode": 1738,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kennewick": {
            "county": "Benton",
            "locationCode": 302,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kent": {
            "county": "King",
            "locationCode": 1715,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kent Non-RTA": {
            "county": "King",
            "locationCode": 4015,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kettle Falls": {
            "county": "Stevens",
            "locationCode": 3303,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "King County Unincorp. Areas": {
            "county": "King",
            "locationCode": 1700,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "King County Unincorp. Non-RTA": {
            "county": "King",
            "locationCode": 4000,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kirkland": {
            "county": "King",
            "locationCode": 1716,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Kitsap County Unincorp. Areas": {
            "county": "Kitsap",
            "locationCode": 1800,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kittitas City": {
            "county": "Kittitas",
            "locationCode": 1903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kittitas County Unincorp. Areas": {
            "county": "Kittitas",
            "locationCode": 1900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Klickitat County Unincorp. Areas": {
            "county": "Klickitat",
            "locationCode": 2000,
            "localTaxRate": 0.005,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.07
        },
        "Krupp": {
            "county": "Grant",
            "locationCode": 1307,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "La Center": {
            "county": "Clark",
            "locationCode": 603,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "La Conner": {
            "county": "Skagit",
            "locationCode": 2905,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "LaCrosse": {
            "county": "Whitman",
            "locationCode": 3807,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Lacey": {
            "county": "Thurston",
            "locationCode": 3402,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Lake Forest Park": {
            "county": "King",
            "locationCode": 1717,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Lake Stevens": {
            "county": "Snohomish",
            "locationCode": 3109,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Lakewood": {
            "county": "Pierce",
            "locationCode": 2721,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Lamont": {
            "county": "Whitman",
            "locationCode": 3808,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Langley": {
            "county": "Island",
            "locationCode": 1502,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Latah": {
            "county": "Spokane",
            "locationCode": 3205,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Leavenworth": {
            "county": "Chelan",
            "locationCode": 404,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lewis County Unincorp. Areas": {
            "county": "Lewis",
            "locationCode": 2100,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Liberty Lake": {
            "county": "Spokane",
            "locationCode": 3212,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Lincoln County Unincorp. Areas": {
            "county": "Lincoln",
            "locationCode": 2200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Lind": {
            "county": "Adams",
            "locationCode": 102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Long Beach": {
            "county": "Pacific",
            "locationCode": 2502,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Longview": {
            "county": "Cowlitz",
            "locationCode": 804,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Lyman": {
            "county": "Skagit",
            "locationCode": 2906,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lynden ": {
            "county": "Whatcom",
            "locationCode": 3705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Lynnwood": {
            "county": "Snohomish",
            "locationCode": 3110,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Mabton": {
            "county": "Yakima",
            "locationCode": 3904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Malden": {
            "county": "Whitman",
            "locationCode": 3809,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mansfield": {
            "county": "Douglas",
            "locationCode": 903,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Maple Valley": {
            "county": "King",
            "locationCode": 1720,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Marcus": {
            "county": "Stevens",
            "locationCode": 3304,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Marysville ": {
            "county": "Snohomish",
            "locationCode": 3111,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Mason County Unincorp. Areas": {
            "county": "Mason",
            "locationCode": 2300,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Mattawa": {
            "county": "Grant",
            "locationCode": 1308,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medical Lake": {
            "county": "Spokane",
            "locationCode": 3206,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medina": {
            "county": "King",
            "locationCode": 1718,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mercer Island": {
            "county": "King",
            "locationCode": 1719,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mesa": {
            "county": "Franklin",
            "locationCode": 1103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Metaline": {
            "county": "Pend Oreille",
            "locationCode": 2603,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Metaline Falls": {
            "county": "Pend Oreille",
            "locationCode": 2604,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Mill Creek": {
            "county": "Snohomish",
            "locationCode": 3119,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Millwood": {
            "county": "Spokane",
            "locationCode": 3207,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Milton in King County": {
            "county": "King",
            "locationCode": 1731,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Milton in Pierce County": {
            "county": "Pierce",
            "locationCode": 2709,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Monroe ": {
            "county": "Snohomish",
            "locationCode": 3112,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Montesano": {
            "county": "Grays Harbor",
            "locationCode": 1406,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Morton": {
            "county": "Lewis",
            "locationCode": 2103,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Moses Lake": {
            "county": "Grant",
            "locationCode": 1309,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Mossyrock": {
            "county": "Lewis",
            "locationCode": 2104,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mount Vernon": {
            "county": "Skagit",
            "locationCode": 2907,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Mountlake Terrace": {
            "county": "Snohomish",
            "locationCode": 3113,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Moxee City": {
            "county": "Yakima",
            "locationCode": 3905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Mukilteo": {
            "county": "Snohomish",
            "locationCode": 3114,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Naches": {
            "county": "Yakima",
            "locationCode": 3906,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Napavine": {
            "county": "Lewis",
            "locationCode": 2105,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Nespelem": {
            "county": "Okanogan",
            "locationCode": 2405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Newcastle": {
            "county": "King",
            "locationCode": 1736,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Newcastle Non-RTA": {
            "county": "King",
            "locationCode": 4036,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Newport": {
            "county": "Pend Oreille",
            "locationCode": 2605,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Nooksack": {
            "county": "Whatcom",
            "locationCode": 3706,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Normandy Park": {
            "county": "King",
            "locationCode": 1721,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "North Bend": {
            "county": "King",
            "locationCode": 1722,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "North Bonneville": {
            "county": "Skamania",
            "locationCode": 3001,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Northport": {
            "county": "Stevens",
            "locationCode": 3305,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Oak Harbor": {
            "county": "Island",
            "locationCode": 1503,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Oakesdale": {
            "county": "Whitman",
            "locationCode": 3810,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1407,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Odessa": {
            "county": "Lincoln",
            "locationCode": 2205,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan": {
            "county": "Okanogan",
            "locationCode": 2406,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Orting": {
            "county": "Pierce",
            "locationCode": 2710,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Othello": {
            "county": "Adams",
            "locationCode": 103,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Pacific County Unincorp. Areas": {
            "county": "Pacific",
            "locationCode": 2500,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Pacific in King County": {
            "county": "King",
            "locationCode": 1723,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Pacific in Pierce County": {
            "county": "Pierce",
            "locationCode": 2723,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Palouse": {
            "county": "Whitman",
            "locationCode": 3811,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pasco": {
            "county": "Franklin",
            "locationCode": 1104,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pateros": {
            "county": "Okanogan",
            "locationCode": 2409,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Pe Ell": {
            "county": "Lewis",
            "locationCode": 2106,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pend Oreille County Unincorp. Areas": {
            "county": "Pend Oreille",
            "locationCode": 2600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Pierce County Unincorp. Areas": {
            "county": "Pierce",
            "locationCode": 2700,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Pierce County Unincorp. Areas Non-RTA": {
            "county": "Pierce",
            "locationCode": 4100,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Pierce County Unincorp. Areas Non-RTA HBZ": {
            "county": "Pierce",
            "locationCode": 2789,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Pierce County Unincorp. PTBA": {
            "county": "Pierce",
            "locationCode": 2727,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Pierce County Unincorp. PTBA HBZ": {
            "county": "Pierce",
            "locationCode": 2787,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Pierce County Unincorp. PTBA\nNon-RTA": {
            "county": "Pierce",
            "locationCode": 4127,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Pomeroy": {
            "county": "Garfield",
            "locationCode": 1201,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Port Angeles": {
            "county": "Clallam",
            "locationCode": 502,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Port Orchard": {
            "county": "Kitsap",
            "locationCode": 1802,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Port Townsend": {
            "county": "Jefferson",
            "locationCode": 1601,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Poulsbo": {
            "county": "Kitsap",
            "locationCode": 1803,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Prescott": {
            "county": "Walla Walla",
            "locationCode": 3602,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Prosser": {
            "county": "Benton",
            "locationCode": 303,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pullman": {
            "county": "Whitman",
            "locationCode": 3812,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Puyallup": {
            "county": "Pierce",
            "locationCode": 2711,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Quincy": {
            "county": "Grant",
            "locationCode": 1310,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Raymond": {
            "county": "Pacific",
            "locationCode": 2503,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Reardan": {
            "county": "Lincoln",
            "locationCode": 2206,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Redmond": {
            "county": "King",
            "locationCode": 1724,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Redmond Non-RTA": {
            "county": "King",
            "locationCode": 4024,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Renton": {
            "county": "King",
            "locationCode": 1725,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Renton Non-RTA": {
            "county": "King",
            "locationCode": 4025,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Republic": {
            "county": "Ferry",
            "locationCode": 1001,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Richland ": {
            "county": "Benton",
            "locationCode": 304,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Ridgefield": {
            "county": "Clark",
            "locationCode": 604,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Ritzville ": {
            "county": "Adams",
            "locationCode": 104,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Riverside": {
            "county": "Okanogan",
            "locationCode": 2410,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Rock Island": {
            "county": "Douglas",
            "locationCode": 904,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Rockford": {
            "county": "Spokane",
            "locationCode": 3208,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Rosalia": {
            "county": "Whitman",
            "locationCode": 3813,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Roslyn": {
            "county": "Kittitas",
            "locationCode": 1904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Roy": {
            "county": "Pierce",
            "locationCode": 2712,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Royal City": {
            "county": "Grant",
            "locationCode": 1311,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ruston": {
            "county": "Pierce",
            "locationCode": 2713,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Sammamish": {
            "county": "King",
            "locationCode": 1739,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Sammamish Non-RTA": {
            "county": "King",
            "locationCode": 4039,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "San Juan County Unincorp. Areas": {
            "county": "San Juan",
            "locationCode": 2800,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Seattle ": {
            "county": "King",
            "locationCode": 1726,
            "localTaxRate": 0.0375,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1025
        },
        "Sedro-Woolley": {
            "county": "Skagit",
            "locationCode": 2908,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Selah": {
            "county": "Yakima",
            "locationCode": 3907,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Sequim": {
            "county": "Clallam",
            "locationCode": 503,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shelton ": {
            "county": "Mason",
            "locationCode": 2301,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shoreline": {
            "county": "King",
            "locationCode": 1737,
            "localTaxRate": 0.038,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.103
        },
        "Skagit County Unincorp. Areas": {
            "county": "Skagit",
            "locationCode": 2900,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Skagit County Unincorp. PTBA": {
            "county": "Skagit",
            "locationCode": 2929,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Skamania County Unincorp. Areas": {
            "county": "Skamania",
            "locationCode": 3000,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Skykomish": {
            "county": "King",
            "locationCode": 1727,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Snohomish ": {
            "county": "Snohomish",
            "locationCode": 3115,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas": {
            "county": "Snohomish",
            "locationCode": 3100,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4200,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Snohomish County Unincorp. PTBA": {
            "county": "Snohomish",
            "locationCode": 3131,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Snohomish County Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4231,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Snoqualmie": {
            "county": "King",
            "locationCode": 1728,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "South Bend": {
            "county": "Pacific",
            "locationCode": 2504,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "South Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "South Prairie": {
            "county": "Pierce",
            "locationCode": 2714,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Spangle": {
            "county": "Spokane",
            "locationCode": 3209,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane": {
            "county": "Spokane",
            "locationCode": 3210,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane County Unincorp. Areas": {
            "county": "Spokane",
            "locationCode": 3200,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane County Unincorp. PTBA": {
            "county": "Spokane",
            "locationCode": 3232,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane Valley": {
            "county": "Spokane",
            "locationCode": 3213,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Sprague": {
            "county": "Lincoln",
            "locationCode": 2207,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Springdale": {
            "county": "Stevens",
            "locationCode": 3306,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "St. John": {
            "county": "Whitman",
            "locationCode": 3814,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Stanwood ": {
            "county": "Snohomish",
            "locationCode": 3116,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Starbuck": {
            "county": "Columbia",
            "locationCode": 702,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Steilacoom": {
            "county": "Pierce",
            "locationCode": 2715,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Stevens County Unincorp. Areas": {
            "county": "Stevens",
            "locationCode": 3300,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Stevenson": {
            "county": "Skamania",
            "locationCode": 3002,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Sultan": {
            "county": "Snohomish",
            "locationCode": 3117,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Sumas": {
            "county": "Whatcom",
            "locationCode": 3707,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Sumner": {
            "county": "Pierce",
            "locationCode": 2716,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Sunnyside": {
            "county": "Yakima",
            "locationCode": 3908,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Suquamish Tribe - Unincorp. Jefferson County": {
            "county": "Jefferson",
            "locationCode": 1603,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Suquamish Tribe - Unincorp. Kitsap County": {
            "county": "Kitsap",
            "locationCode": 1805,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Swinomish Tribe - La Conner": {
            "county": "Skagit",
            "locationCode": 2911,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Swinomish Tribe - Unincorp. Skagit County": {
            "county": "Skagit",
            "locationCode": 2909,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Swinomish Tribe - Unincorp. Skagit County PTBA": {
            "county": "Skagit",
            "locationCode": 2931,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Tacoma ": {
            "county": "Pierce",
            "locationCode": 2717,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Tekoa": {
            "county": "Whitman",
            "locationCode": 3815,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tenino": {
            "county": "Thurston",
            "locationCode": 3405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Toledo": {
            "county": "Lewis",
            "locationCode": 2107,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tonasket": {
            "county": "Okanogan",
            "locationCode": 2411,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Tulalip Tribes - Marysville": {
            "county": "Snohomish",
            "locationCode": 3121,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Tulalip Tribes - Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4233,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Twisp ": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Uniontown": {
            "county": "Whitman",
            "locationCode": 3816,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "University Place": {
            "county": "Pierce",
            "locationCode": 2719,
            "localTaxRate": 0.034,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.099
        },
        "Vader": {
            "county": "Lewis",
            "locationCode": 2108,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Vancouver": {
            "county": "Clark",
            "locationCode": 605,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Wahkiakum County Unincorp. Areas": {
            "county": "Wahkiakum",
            "locationCode": 3500,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Waitsburg ": {
            "county": "Walla Walla",
            "locationCode": 3603,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Walla Walla ": {
            "county": "Walla Walla",
            "locationCode": 3604,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Walla Walla County Unincorp. Areas": {
            "county": "Walla Walla",
            "locationCode": 3600,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Walla Walla County Unincorp. PTBA": {
            "county": "Walla Walla",
            "locationCode": 3636,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Wapato": {
            "county": "Yakima",
            "locationCode": 3912,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Washougal": {
            "county": "Clark",
            "locationCode": 606,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Washtucna": {
            "county": "Adams",
            "locationCode": 105,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Waterville": {
            "county": "Douglas",
            "locationCode": 905,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Waverly": {
            "county": "Spokane",
            "locationCode": 3211,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Wenatchee": {
            "county": "Chelan",
            "locationCode": 405,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "West Richland": {
            "county": "Benton",
            "locationCode": 305,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Westport": {
            "county": "Grays Harbor",
            "locationCode": 1408,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Whatcom County Unincorp. Areas": {
            "county": "Whatcom",
            "locationCode": 3700,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Whatcom County Unincorp. PTBA": {
            "county": "Whatcom",
            "locationCode": 3737,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "White Salmon": {
            "county": "Klickitat",
            "locationCode": 2003,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Whitman County Unincorp. Areas": {
            "county": "Whitman",
            "locationCode": 3800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Wilbur": {
            "county": "Lincoln",
            "locationCode": 2208,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilkeson": {
            "county": "Pierce",
            "locationCode": 2718,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Wilson Creek": {
            "county": "Grant",
            "locationCode": 1315,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Winlock": {
            "county": "Lewis",
            "locationCode": 2109,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Winthrop": {
            "county": "Okanogan",
            "locationCode": 2413,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Woodinville": {
            "county": "King",
            "locationCode": 1735,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Woodinville Non-RTA": {
            "county": "King",
            "locationCode": 4035,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Woodland": {
            "county": "Cowlitz",
            "locationCode": 805,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Woodway": {
            "county": "Snohomish",
            "locationCode": 3118,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Yacolt": {
            "county": "Clark",
            "locationCode": 607,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Yakima": {
            "county": "Yakima",
            "locationCode": 3913,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Yarrow Point": {
            "county": "King",
            "locationCode": 1730,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Yelm": {
            "county": "Thurston",
            "locationCode": 3407,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        }
    },
    {
        "expires": "2021-10-01T07:00:00.000Z",
        "Aberdeen ": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0258,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0908
        },
        "Adams County Unincorp. Areas": {
            "county": "Adams",
            "locationCode": 100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Airway Heights ": {
            "county": "Spokane",
            "locationCode": 3201,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Albion": {
            "county": "Whitman",
            "locationCode": 3801,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Algona": {
            "county": "King",
            "locationCode": 1701,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Almira": {
            "county": "Lincoln",
            "locationCode": 2201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Anacortes": {
            "county": "Skagit",
            "locationCode": 2901,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Arlington ": {
            "county": "Snohomish",
            "locationCode": 3101,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Asotin": {
            "county": "Asotin",
            "locationCode": 201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Auburn in King County": {
            "county": "King",
            "locationCode": 1702,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Auburn in King County Non-RTA": {
            "county": "King",
            "locationCode": 4002,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Auburn in Pierce County": {
            "county": "Pierce",
            "locationCode": 2724,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Bainbridge Island": {
            "county": "Kitsap",
            "locationCode": 1804,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Battle Ground": {
            "county": "Clark",
            "locationCode": 601,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Beaux Arts Village": {
            "county": "King",
            "locationCode": 1703,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue": {
            "county": "King",
            "locationCode": 1704,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue Non-RTA": {
            "county": "King",
            "locationCode": 4004,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bellingham ": {
            "county": "Whatcom",
            "locationCode": 3701,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Benton City": {
            "county": "Benton",
            "locationCode": 301,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Benton County Unincorp. Areas": {
            "county": "Benton",
            "locationCode": 300,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Benton Co. Unincorp. PTBA": {
            "county": "Benton",
            "locationCode": 333,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Bingen": {
            "county": "Klickitat",
            "locationCode": 2001,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Black Diamond": {
            "county": "King",
            "locationCode": 1705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Blaine": {
            "county": "Whatcom",
            "locationCode": 3702,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Bonney Lake": {
            "county": "Pierce",
            "locationCode": 2701,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Bonney Lake Non-RTA": {
            "county": "Pierce",
            "locationCode": 4101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Bothell in King County": {
            "county": "King",
            "locationCode": 1706,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bothell in Snohomish County": {
            "county": "Snohomish",
            "locationCode": 3120,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Bremerton": {
            "county": "Kitsap",
            "locationCode": 1801,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Brewster": {
            "county": "Okanogan",
            "locationCode": 2401,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Bridgeport": {
            "county": "Douglas",
            "locationCode": 901,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Brier": {
            "county": "Snohomish",
            "locationCode": 3102,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Buckley": {
            "county": "Pierce",
            "locationCode": 2702,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Bucoda": {
            "county": "Thurston",
            "locationCode": 3401,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Burien": {
            "county": "King",
            "locationCode": 1734,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Burlington": {
            "county": "Skagit",
            "locationCode": 2902,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Camas": {
            "county": "Clark",
            "locationCode": 602,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Carbonado": {
            "county": "Pierce",
            "locationCode": 2703,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Carnation": {
            "county": "King",
            "locationCode": 1707,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cashmere": {
            "county": "Chelan",
            "locationCode": 401,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Castle Rock ": {
            "county": "Cowlitz",
            "locationCode": 801,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cathlamet": {
            "county": "Wahkiakum",
            "locationCode": 3501,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Centralia ": {
            "county": "Lewis",
            "locationCode": 2101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis": {
            "county": "Lewis",
            "locationCode": 2102,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis Tribes - Unincorp. Grays Harbor County": {
            "county": "Grays Harbor",
            "locationCode": 1411,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Lewis County": {
            "county": "Lewis",
            "locationCode": 2111,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Chehalis Tribes - Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1413,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3409,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Chehalis Tribes - Tumwater": {
            "county": "Thurston",
            "locationCode": 3411,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Chelan": {
            "county": "Chelan",
            "locationCode": 402,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Chelan County Unincorp. Areas": {
            "county": "Chelan",
            "locationCode": 400,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Cheney": {
            "county": "Spokane",
            "locationCode": 3202,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chewelah": {
            "county": "Stevens",
            "locationCode": 3301,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Clallam County Unincorp. Areas": {
            "county": "Clallam",
            "locationCode": 500,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Clark County Unincorp. Areas": {
            "county": "Clark",
            "locationCode": 600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Clark County Unincorp. PTBA": {
            "county": "Clark",
            "locationCode": 666,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Clarkston": {
            "county": "Asotin",
            "locationCode": 202,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Clyde Hill": {
            "county": "King",
            "locationCode": 1708,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Colfax": {
            "county": "Whitman",
            "locationCode": 3802,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "College Place": {
            "county": "Walla Walla",
            "locationCode": 3601,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Colton": {
            "county": "Whitman",
            "locationCode": 3803,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Columbia County Unincorp. Areas": {
            "county": "Columbia",
            "locationCode": 700,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Colville": {
            "county": "Stevens",
            "locationCode": 3302,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Conconully": {
            "county": "Okanogan",
            "locationCode": 2402,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Concrete": {
            "county": "Skagit",
            "locationCode": 2903,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Connell": {
            "county": "Franklin",
            "locationCode": 1101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cosmopolis": {
            "county": "Grays Harbor",
            "locationCode": 1402,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Coupeville": {
            "county": "Island",
            "locationCode": 1501,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Covington": {
            "county": "King",
            "locationCode": 1712,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cowlitz County Unincorp. Areas": {
            "county": "Cowlitz",
            "locationCode": 800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Creston": {
            "county": "Lincoln",
            "locationCode": 2202,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cusick": {
            "county": "Pend Oreille",
            "locationCode": 2601,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Darrington": {
            "county": "Snohomish",
            "locationCode": 3103,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Davenport": {
            "county": "Lincoln",
            "locationCode": 2203,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Dayton": {
            "county": "Columbia",
            "locationCode": 701,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Deer Park": {
            "county": "Spokane",
            "locationCode": 3203,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Des Moines": {
            "county": "King",
            "locationCode": 1709,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Douglas County Unincorp. Areas": {
            "county": "Douglas",
            "locationCode": 900,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Douglas County Unincorp. PTBA": {
            "county": "Douglas",
            "locationCode": 909,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "DuPont": {
            "county": "Pierce",
            "locationCode": 2704,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Duvall": {
            "county": "King",
            "locationCode": 1710,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "East Wenatchee": {
            "county": "Douglas",
            "locationCode": 902,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Eatonville": {
            "county": "Pierce",
            "locationCode": 2705,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Edgewood": {
            "county": "Pierce",
            "locationCode": 2720,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Edmonds": {
            "county": "Snohomish",
            "locationCode": 3104,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Electric City": {
            "county": "Grant",
            "locationCode": 1302,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ellensburg ": {
            "county": "Kittitas",
            "locationCode": 1902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Elma": {
            "county": "Grays Harbor",
            "locationCode": 1403,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Endicott": {
            "county": "Whitman",
            "locationCode": 3804,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Entiat": {
            "county": "Chelan",
            "locationCode": 403,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Enumclaw": {
            "county": "King",
            "locationCode": 1711,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ephrata": {
            "county": "Grant",
            "locationCode": 1303,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everett": {
            "county": "Snohomish",
            "locationCode": 3105,
            "localTaxRate": 0.033,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.098
        },
        "Everett Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4205,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everson": {
            "county": "Whatcom",
            "locationCode": 3703,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Fairfield": {
            "county": "Spokane",
            "locationCode": 3204,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Farmington": {
            "county": "Whitman",
            "locationCode": 3805,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Federal Way": {
            "county": "King",
            "locationCode": 1732,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ferndale ": {
            "county": "Whatcom",
            "locationCode": 3704,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ferry County Unincorp. Areas": {
            "county": "Ferry",
            "locationCode": 1000,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Fife": {
            "county": "Pierce",
            "locationCode": 2706,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Fircrest": {
            "county": "Pierce",
            "locationCode": 2707,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Forks": {
            "county": "Clallam",
            "locationCode": 501,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Franklin County Unincorp. Areas": {
            "county": "Franklin",
            "locationCode": 1100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Franklin County Unincorp. PTBA": {
            "county": "Franklin",
            "locationCode": 1111,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Friday Harbor ": {
            "county": "San Juan",
            "locationCode": 2801,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Garfield": {
            "county": "Whitman",
            "locationCode": 3806,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Garfield County Unincorp. Areas": {
            "county": "Garfield",
            "locationCode": 1200,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "George": {
            "county": "Grant",
            "locationCode": 1304,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Gold Bar": {
            "county": "Snohomish",
            "locationCode": 3106,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Goldendale": {
            "county": "Klickitat",
            "locationCode": 2002,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Grand Coulee": {
            "county": "Grant",
            "locationCode": 1305,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granite Falls": {
            "county": "Snohomish",
            "locationCode": 3107,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Grant County Unincorp. Areas": {
            "county": "Grant",
            "locationCode": 1300,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hamilton": {
            "county": "Skagit",
            "locationCode": 2904,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Harrah": {
            "county": "Yakima",
            "locationCode": 3903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Harrington": {
            "county": "Lincoln",
            "locationCode": 2204,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hartline": {
            "county": "Grant",
            "locationCode": 1306,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Hatton": {
            "county": "Adams",
            "locationCode": 101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hoquiam": {
            "county": "Grays Harbor",
            "locationCode": 1404,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hunts Point": {
            "county": "King",
            "locationCode": 1713,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ilwaco": {
            "county": "Pacific",
            "locationCode": 2501,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Index": {
            "county": "Snohomish",
            "locationCode": 3108,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Ione": {
            "county": "Pend Oreille",
            "locationCode": 2602,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Island County Unincorp. Areas": {
            "county": "Island",
            "locationCode": 1500,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Issaquah": {
            "county": "King",
            "locationCode": 1714,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Issaquah Non-RTA": {
            "county": "King",
            "locationCode": 4014,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Jefferson County Unincorp. Areas": {
            "county": "Jefferson",
            "locationCode": 1600,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Kahlotus": {
            "county": "Franklin",
            "locationCode": 1102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kalama": {
            "county": "Cowlitz",
            "locationCode": 802,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Kalispel Tribe -  Airway Heights": {
            "county": "Spokane",
            "locationCode": 3215,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Kalispel Tribe - Unincorp. Pend Oreille County": {
            "county": "Pend Oreille",
            "locationCode": 2607,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Kelso": {
            "county": "Cowlitz",
            "locationCode": 803,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Kenmore": {
            "county": "King",
            "locationCode": 1738,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kennewick": {
            "county": "Benton",
            "locationCode": 302,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kent": {
            "county": "King",
            "locationCode": 1715,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kent Non-RTA": {
            "county": "King",
            "locationCode": 4015,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kettle Falls": {
            "county": "Stevens",
            "locationCode": 3303,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "King County Unincorp. Areas": {
            "county": "King",
            "locationCode": 1700,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "King County Unincorp. Non-RTA": {
            "county": "King",
            "locationCode": 4000,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kirkland": {
            "county": "King",
            "locationCode": 1716,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Kitsap County Unincorp. Areas": {
            "county": "Kitsap",
            "locationCode": 1800,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kittitas City": {
            "county": "Kittitas",
            "locationCode": 1903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kittitas County Unincorp. Areas": {
            "county": "Kittitas",
            "locationCode": 1900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Klickitat County Unincorp. Areas": {
            "county": "Klickitat",
            "locationCode": 2000,
            "localTaxRate": 0.005,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.07
        },
        "Krupp": {
            "county": "Grant",
            "locationCode": 1307,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "La Center": {
            "county": "Clark",
            "locationCode": 603,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "La Conner": {
            "county": "Skagit",
            "locationCode": 2905,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "LaCrosse": {
            "county": "Whitman",
            "locationCode": 3807,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Lacey": {
            "county": "Thurston",
            "locationCode": 3402,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Lake Forest Park": {
            "county": "King",
            "locationCode": 1717,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Lake Stevens": {
            "county": "Snohomish",
            "locationCode": 3109,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Lakewood": {
            "county": "Pierce",
            "locationCode": 2721,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Lamont": {
            "county": "Whitman",
            "locationCode": 3808,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Langley": {
            "county": "Island",
            "locationCode": 1502,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Latah": {
            "county": "Spokane",
            "locationCode": 3205,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Leavenworth": {
            "county": "Chelan",
            "locationCode": 404,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lewis County Unincorp. Areas": {
            "county": "Lewis",
            "locationCode": 2100,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Liberty Lake": {
            "county": "Spokane",
            "locationCode": 3212,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Lincoln County Unincorp. Areas": {
            "county": "Lincoln",
            "locationCode": 2200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Lind": {
            "county": "Adams",
            "locationCode": 102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Long Beach": {
            "county": "Pacific",
            "locationCode": 2502,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Longview": {
            "county": "Cowlitz",
            "locationCode": 804,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Lyman": {
            "county": "Skagit",
            "locationCode": 2906,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lynden ": {
            "county": "Whatcom",
            "locationCode": 3705,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Lynnwood": {
            "county": "Snohomish",
            "locationCode": 3110,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Mabton": {
            "county": "Yakima",
            "locationCode": 3904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Malden": {
            "county": "Whitman",
            "locationCode": 3809,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mansfield": {
            "county": "Douglas",
            "locationCode": 903,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Maple Valley": {
            "county": "King",
            "locationCode": 1720,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Marcus": {
            "county": "Stevens",
            "locationCode": 3304,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Marysville ": {
            "county": "Snohomish",
            "locationCode": 3111,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Mason County Unincorp. Areas": {
            "county": "Mason",
            "locationCode": 2300,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Mattawa": {
            "county": "Grant",
            "locationCode": 1308,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medical Lake": {
            "county": "Spokane",
            "locationCode": 3206,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medina": {
            "county": "King",
            "locationCode": 1718,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mercer Island": {
            "county": "King",
            "locationCode": 1719,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mesa": {
            "county": "Franklin",
            "locationCode": 1103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Metaline": {
            "county": "Pend Oreille",
            "locationCode": 2603,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Metaline Falls": {
            "county": "Pend Oreille",
            "locationCode": 2604,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Mill Creek": {
            "county": "Snohomish",
            "locationCode": 3119,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Millwood": {
            "county": "Spokane",
            "locationCode": 3207,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Milton in King County": {
            "county": "King",
            "locationCode": 1731,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Milton in Pierce County": {
            "county": "Pierce",
            "locationCode": 2709,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Monroe ": {
            "county": "Snohomish",
            "locationCode": 3112,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Montesano": {
            "county": "Grays Harbor",
            "locationCode": 1406,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Morton": {
            "county": "Lewis",
            "locationCode": 2103,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Moses Lake": {
            "county": "Grant",
            "locationCode": 1309,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Mossyrock": {
            "county": "Lewis",
            "locationCode": 2104,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mount Vernon": {
            "county": "Skagit",
            "locationCode": 2907,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Mountlake Terrace": {
            "county": "Snohomish",
            "locationCode": 3113,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Moxee City": {
            "county": "Yakima",
            "locationCode": 3905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Mukilteo": {
            "county": "Snohomish",
            "locationCode": 3114,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Naches": {
            "county": "Yakima",
            "locationCode": 3906,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Napavine": {
            "county": "Lewis",
            "locationCode": 2105,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Nespelem": {
            "county": "Okanogan",
            "locationCode": 2405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Newcastle": {
            "county": "King",
            "locationCode": 1736,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Newcastle Non-RTA": {
            "county": "King",
            "locationCode": 4036,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Newport": {
            "county": "Pend Oreille",
            "locationCode": 2605,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Nisqually Tribe - Lacey": {
            "county": "Thurston",
            "locationCode": 3419,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Nisqually Tribe - Lakewood": {
            "county": "Pierce",
            "locationCode": 2731,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Nisqually Tribe - Unincorp. Pierce County RTA": {
            "county": "Pierce",
            "locationCode": 2725,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Nisqually Tribe - Unincorp. Pierce County Non-RTA": {
            "county": "Pierce",
            "locationCode": 4103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Nisqually Tribe - Unincorp. Pierce County RTA PTBA": {
            "county": "Pierce",
            "locationCode": 2729,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Nisqually Tribe - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3415,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Nisqually Tribe - Unincorp. Thurston County PTBA": {
            "county": "Thurston",
            "locationCode": 3417,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Nooksack": {
            "county": "Whatcom",
            "locationCode": 3706,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Normandy Park": {
            "county": "King",
            "locationCode": 1721,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "North Bend": {
            "county": "King",
            "locationCode": 1722,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "North Bonneville": {
            "county": "Skamania",
            "locationCode": 3001,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Northport": {
            "county": "Stevens",
            "locationCode": 3305,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Oak Harbor": {
            "county": "Island",
            "locationCode": 1503,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Oakesdale": {
            "county": "Whitman",
            "locationCode": 3810,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1407,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Odessa": {
            "county": "Lincoln",
            "locationCode": 2205,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan": {
            "county": "Okanogan",
            "locationCode": 2406,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Orting": {
            "county": "Pierce",
            "locationCode": 2710,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Othello": {
            "county": "Adams",
            "locationCode": 103,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Pacific County Unincorp. Areas": {
            "county": "Pacific",
            "locationCode": 2500,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Pacific in King County": {
            "county": "King",
            "locationCode": 1723,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Pacific in Pierce County": {
            "county": "Pierce",
            "locationCode": 2723,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Palouse": {
            "county": "Whitman",
            "locationCode": 3811,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pasco": {
            "county": "Franklin",
            "locationCode": 1104,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pateros": {
            "county": "Okanogan",
            "locationCode": 2409,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Pe Ell": {
            "county": "Lewis",
            "locationCode": 2106,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pend Oreille County Unincorp. Areas": {
            "county": "Pend Oreille",
            "locationCode": 2600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Pierce County Unincorp. Areas": {
            "county": "Pierce",
            "locationCode": 2700,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Pierce County Unincorp. Areas Non-RTA": {
            "county": "Pierce",
            "locationCode": 4100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Pierce County Unincorp. Areas Non-RTA HBZ": {
            "county": "Pierce",
            "locationCode": 2789,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Pierce County Unincorp. PTBA": {
            "county": "Pierce",
            "locationCode": 2727,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Pierce County Unincorp. PTBA HBZ": {
            "county": "Pierce",
            "locationCode": 2787,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pierce County Unincorp. PTBA\nNon-RTA": {
            "county": "Pierce",
            "locationCode": 4127,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pomeroy": {
            "county": "Garfield",
            "locationCode": 1201,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Port Angeles": {
            "county": "Clallam",
            "locationCode": 502,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Port Orchard": {
            "county": "Kitsap",
            "locationCode": 1802,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Port Townsend": {
            "county": "Jefferson",
            "locationCode": 1601,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Poulsbo": {
            "county": "Kitsap",
            "locationCode": 1803,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Prescott": {
            "county": "Walla Walla",
            "locationCode": 3602,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Prosser": {
            "county": "Benton",
            "locationCode": 303,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pullman": {
            "county": "Whitman",
            "locationCode": 3812,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Puyallup": {
            "county": "Pierce",
            "locationCode": 2711,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Quincy": {
            "county": "Grant",
            "locationCode": 1310,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Raymond": {
            "county": "Pacific",
            "locationCode": 2503,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Reardan": {
            "county": "Lincoln",
            "locationCode": 2206,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Redmond": {
            "county": "King",
            "locationCode": 1724,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Redmond Non-RTA": {
            "county": "King",
            "locationCode": 4024,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Renton": {
            "county": "King",
            "locationCode": 1725,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Renton Non-RTA": {
            "county": "King",
            "locationCode": 4025,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Republic": {
            "county": "Ferry",
            "locationCode": 1001,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Richland ": {
            "county": "Benton",
            "locationCode": 304,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Ridgefield": {
            "county": "Clark",
            "locationCode": 604,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Ritzville ": {
            "county": "Adams",
            "locationCode": 104,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Riverside": {
            "county": "Okanogan",
            "locationCode": 2410,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Rock Island": {
            "county": "Douglas",
            "locationCode": 904,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Rockford": {
            "county": "Spokane",
            "locationCode": 3208,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Rosalia": {
            "county": "Whitman",
            "locationCode": 3813,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Roslyn": {
            "county": "Kittitas",
            "locationCode": 1904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Roy": {
            "county": "Pierce",
            "locationCode": 2712,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Royal City": {
            "county": "Grant",
            "locationCode": 1311,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ruston": {
            "county": "Pierce",
            "locationCode": 2713,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Sammamish": {
            "county": "King",
            "locationCode": 1739,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Sammamish Non-RTA": {
            "county": "King",
            "locationCode": 4039,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "San Juan County Unincorp. Areas": {
            "county": "San Juan",
            "locationCode": 2800,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Seattle ": {
            "county": "King",
            "locationCode": 1726,
            "localTaxRate": 0.0375,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1025
        },
        "Sedro-Woolley": {
            "county": "Skagit",
            "locationCode": 2908,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Selah": {
            "county": "Yakima",
            "locationCode": 3907,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Sequim": {
            "county": "Clallam",
            "locationCode": 503,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shelton ": {
            "county": "Mason",
            "locationCode": 2301,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shoreline": {
            "county": "King",
            "locationCode": 1737,
            "localTaxRate": 0.038,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.103
        },
        "Skagit County Unincorp. Areas": {
            "county": "Skagit",
            "locationCode": 2900,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Skagit County Unincorp. PTBA": {
            "county": "Skagit",
            "locationCode": 2929,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Skamania County Unincorp. Areas": {
            "county": "Skamania",
            "locationCode": 3000,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Skykomish": {
            "county": "King",
            "locationCode": 1727,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Snohomish ": {
            "county": "Snohomish",
            "locationCode": 3115,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas": {
            "county": "Snohomish",
            "locationCode": 3100,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4200,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Snohomish County Unincorp. PTBA": {
            "county": "Snohomish",
            "locationCode": 3131,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Snohomish County Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4231,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Snoqualmie": {
            "county": "King",
            "locationCode": 1728,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "South Bend": {
            "county": "Pacific",
            "locationCode": 2504,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "South Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "South Prairie": {
            "county": "Pierce",
            "locationCode": 2714,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Spangle": {
            "county": "Spokane",
            "locationCode": 3209,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane": {
            "county": "Spokane",
            "locationCode": 3210,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Spokane County Unincorp. Areas": {
            "county": "Spokane",
            "locationCode": 3200,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane County Unincorp. PTBA": {
            "county": "Spokane",
            "locationCode": 3232,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane Valley": {
            "county": "Spokane",
            "locationCode": 3213,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Sprague": {
            "county": "Lincoln",
            "locationCode": 2207,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Springdale": {
            "county": "Stevens",
            "locationCode": 3306,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Squaxin Tribe - Unincorp. Mason County": {
            "county": "Mason",
            "locationCode": 2303,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Squaxin Tribe - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3413,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "St. John": {
            "county": "Whitman",
            "locationCode": 3814,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Stanwood ": {
            "county": "Snohomish",
            "locationCode": 3116,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Starbuck": {
            "county": "Columbia",
            "locationCode": 702,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Steilacoom": {
            "county": "Pierce",
            "locationCode": 2715,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Stevens County Unincorp. Areas": {
            "county": "Stevens",
            "locationCode": 3300,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Stevenson": {
            "county": "Skamania",
            "locationCode": 3002,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Sultan": {
            "county": "Snohomish",
            "locationCode": 3117,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Sumas": {
            "county": "Whatcom",
            "locationCode": 3707,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Sumner": {
            "county": "Pierce",
            "locationCode": 2716,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Sunnyside": {
            "county": "Yakima",
            "locationCode": 3908,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Suquamish Tribe - Unincorp. Jefferson County": {
            "county": "Jefferson",
            "locationCode": 1603,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Suquamish Tribe - Unincorp. Kitsap County": {
            "county": "Kitsap",
            "locationCode": 1805,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Swinomish Tribe - La Conner": {
            "county": "Skagit",
            "locationCode": 2911,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Swinomish Tribe - Unincorp. Skagit County": {
            "county": "Skagit",
            "locationCode": 2909,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Swinomish Tribe - Unincorp. Skagit County PTBA": {
            "county": "Skagit",
            "locationCode": 2931,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Tacoma ": {
            "county": "Pierce",
            "locationCode": 2717,
            "localTaxRate": 0.038,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.103
        },
        "Tekoa": {
            "county": "Whitman",
            "locationCode": 3815,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tenino": {
            "county": "Thurston",
            "locationCode": 3405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Toledo": {
            "county": "Lewis",
            "locationCode": 2107,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tonasket": {
            "county": "Okanogan",
            "locationCode": 2411,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Tulalip Tribes - Marysville": {
            "county": "Snohomish",
            "locationCode": 3121,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Tulalip Tribes - Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4233,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Twisp ": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Uniontown": {
            "county": "Whitman",
            "locationCode": 3816,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "University Place": {
            "county": "Pierce",
            "locationCode": 2719,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Vader": {
            "county": "Lewis",
            "locationCode": 2108,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Vancouver": {
            "county": "Clark",
            "locationCode": 605,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Wahkiakum County Unincorp. Areas": {
            "county": "Wahkiakum",
            "locationCode": 3500,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Waitsburg ": {
            "county": "Walla Walla",
            "locationCode": 3603,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Walla Walla ": {
            "county": "Walla Walla",
            "locationCode": 3604,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Walla Walla County Unincorp. Areas": {
            "county": "Walla Walla",
            "locationCode": 3600,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Walla Walla County Unincorp. PTBA": {
            "county": "Walla Walla",
            "locationCode": 3636,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Wapato": {
            "county": "Yakima",
            "locationCode": 3912,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Washougal": {
            "county": "Clark",
            "locationCode": 606,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Washtucna": {
            "county": "Adams",
            "locationCode": 105,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Waterville": {
            "county": "Douglas",
            "locationCode": 905,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Waverly": {
            "county": "Spokane",
            "locationCode": 3211,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Wenatchee": {
            "county": "Chelan",
            "locationCode": 405,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "West Richland": {
            "county": "Benton",
            "locationCode": 305,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Westport": {
            "county": "Grays Harbor",
            "locationCode": 1408,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Whatcom County Unincorp. Areas": {
            "county": "Whatcom",
            "locationCode": 3700,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Whatcom County Unincorp. PTBA": {
            "county": "Whatcom",
            "locationCode": 3737,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "White Salmon": {
            "county": "Klickitat",
            "locationCode": 2003,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Whitman County Unincorp. Areas": {
            "county": "Whitman",
            "locationCode": 3800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Wilbur": {
            "county": "Lincoln",
            "locationCode": 2208,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilkeson": {
            "county": "Pierce",
            "locationCode": 2718,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilson Creek": {
            "county": "Grant",
            "locationCode": 1315,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Winlock": {
            "county": "Lewis",
            "locationCode": 2109,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Winthrop": {
            "county": "Okanogan",
            "locationCode": 2413,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Woodinville": {
            "county": "King",
            "locationCode": 1735,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Woodinville Non-RTA": {
            "county": "King",
            "locationCode": 4035,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Woodland": {
            "county": "Cowlitz",
            "locationCode": 805,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Woodway": {
            "county": "Snohomish",
            "locationCode": 3118,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Yacolt": {
            "county": "Clark",
            "locationCode": 607,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Yakima": {
            "county": "Yakima",
            "locationCode": 3913,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Yarrow Point": {
            "county": "King",
            "locationCode": 1730,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Yelm": {
            "county": "Thurston",
            "locationCode": 3407,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        }
    },
    {
        "expires": "2022-01-01T07:00:00.000Z",
        "Aberdeen ": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0258,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0908
        },
        "Adams County Unincorp. Areas": {
            "county": "Adams",
            "locationCode": 100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Airway Heights ": {
            "county": "Spokane",
            "locationCode": 3201,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Albion": {
            "county": "Whitman",
            "locationCode": 3801,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Algona": {
            "county": "King",
            "locationCode": 1701,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Almira": {
            "county": "Lincoln",
            "locationCode": 2201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Anacortes": {
            "county": "Skagit",
            "locationCode": 2901,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Arlington ": {
            "county": "Snohomish",
            "locationCode": 3101,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Asotin": {
            "county": "Asotin",
            "locationCode": 201,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Auburn in King County": {
            "county": "King",
            "locationCode": 1702,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Auburn in King County Non-RTA": {
            "county": "King",
            "locationCode": 4002,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Auburn in Pierce County": {
            "county": "Pierce",
            "locationCode": 2724,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Bainbridge Island": {
            "county": "Kitsap",
            "locationCode": 1804,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Battle Ground": {
            "county": "Clark",
            "locationCode": 601,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Beaux Arts Village": {
            "county": "King",
            "locationCode": 1703,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue": {
            "county": "King",
            "locationCode": 1704,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bellevue Non-RTA": {
            "county": "King",
            "locationCode": 4004,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Bellingham ": {
            "county": "Whatcom",
            "locationCode": 3701,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Benton City": {
            "county": "Benton",
            "locationCode": 301,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Benton County Unincorp. Areas": {
            "county": "Benton",
            "locationCode": 300,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Benton Co. Unincorp. PTBA": {
            "county": "Benton",
            "locationCode": 333,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Bingen": {
            "county": "Klickitat",
            "locationCode": 2001,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Black Diamond": {
            "county": "King",
            "locationCode": 1705,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Blaine": {
            "county": "Whatcom",
            "locationCode": 3702,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Bonney Lake": {
            "county": "Pierce",
            "locationCode": 2701,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Bonney Lake Non-RTA": {
            "county": "Pierce",
            "locationCode": 4101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Bothell in King County": {
            "county": "King",
            "locationCode": 1706,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Bothell in Snohomish County": {
            "county": "Snohomish",
            "locationCode": 3120,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Bremerton": {
            "county": "Kitsap",
            "locationCode": 1801,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Brewster": {
            "county": "Okanogan",
            "locationCode": 2401,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Bridgeport": {
            "county": "Douglas",
            "locationCode": 901,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Brier": {
            "county": "Snohomish",
            "locationCode": 3102,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Buckley": {
            "county": "Pierce",
            "locationCode": 2702,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Bucoda": {
            "county": "Thurston",
            "locationCode": 3401,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Burien": {
            "county": "King",
            "locationCode": 1734,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Burlington": {
            "county": "Skagit",
            "locationCode": 2902,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Camas": {
            "county": "Clark",
            "locationCode": 602,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Carbonado": {
            "county": "Pierce",
            "locationCode": 2703,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Carnation": {
            "county": "King",
            "locationCode": 1707,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cashmere": {
            "county": "Chelan",
            "locationCode": 401,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Castle Rock ": {
            "county": "Cowlitz",
            "locationCode": 801,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cathlamet": {
            "county": "Wahkiakum",
            "locationCode": 3501,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Centralia ": {
            "county": "Lewis",
            "locationCode": 2101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis": {
            "county": "Lewis",
            "locationCode": 2102,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chehalis Tribes - Unincorp. Grays Harbor County": {
            "county": "Grays Harbor",
            "locationCode": 1411,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Lewis County": {
            "county": "Lewis",
            "locationCode": 2111,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Chehalis Tribes - Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1413,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chehalis Tribes - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3409,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Chehalis Tribes - Tumwater": {
            "county": "Thurston",
            "locationCode": 3411,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Chelan": {
            "county": "Chelan",
            "locationCode": 402,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Chelan County Unincorp. Areas": {
            "county": "Chelan",
            "locationCode": 400,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Cheney": {
            "county": "Spokane",
            "locationCode": 3202,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Chewelah": {
            "county": "Stevens",
            "locationCode": 3301,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Clallam County Unincorp. Areas": {
            "county": "Clallam",
            "locationCode": 500,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Clark County Unincorp. Areas": {
            "county": "Clark",
            "locationCode": 600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Clark County Unincorp. PTBA": {
            "county": "Clark",
            "locationCode": 666,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Clarkston": {
            "county": "Asotin",
            "locationCode": 202,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Clyde Hill": {
            "county": "King",
            "locationCode": 1708,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Colfax": {
            "county": "Whitman",
            "locationCode": 3802,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "College Place": {
            "county": "Walla Walla",
            "locationCode": 3601,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Colton": {
            "county": "Whitman",
            "locationCode": 3803,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Columbia County Unincorp. Areas": {
            "county": "Columbia",
            "locationCode": 700,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Colville": {
            "county": "Stevens",
            "locationCode": 3302,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Conconully": {
            "county": "Okanogan",
            "locationCode": 2402,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Concrete": {
            "county": "Skagit",
            "locationCode": 2903,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Connell": {
            "county": "Franklin",
            "locationCode": 1101,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Cosmopolis": {
            "county": "Grays Harbor",
            "locationCode": 1402,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Coupeville": {
            "county": "Island",
            "locationCode": 1501,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Covington": {
            "county": "King",
            "locationCode": 1712,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Cowlitz County Unincorp. Areas": {
            "county": "Cowlitz",
            "locationCode": 800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Creston": {
            "county": "Lincoln",
            "locationCode": 2202,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Cusick": {
            "county": "Pend Oreille",
            "locationCode": 2601,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Darrington": {
            "county": "Snohomish",
            "locationCode": 3103,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Davenport": {
            "county": "Lincoln",
            "locationCode": 2203,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Dayton": {
            "county": "Columbia",
            "locationCode": 701,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Deer Park": {
            "county": "Spokane",
            "locationCode": 3203,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Des Moines": {
            "county": "King",
            "locationCode": 1709,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Douglas County Unincorp. Areas": {
            "county": "Douglas",
            "locationCode": 900,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Douglas County Unincorp. PTBA": {
            "county": "Douglas",
            "locationCode": 909,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "DuPont": {
            "county": "Pierce",
            "locationCode": 2704,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Duvall": {
            "county": "King",
            "locationCode": 1710,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "East Wenatchee": {
            "county": "Douglas",
            "locationCode": 902,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Eatonville": {
            "county": "Pierce",
            "locationCode": 2705,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Edgewood": {
            "county": "Pierce",
            "locationCode": 2720,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Edmonds": {
            "county": "Snohomish",
            "locationCode": 3104,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Electric City": {
            "county": "Grant",
            "locationCode": 1302,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ellensburg ": {
            "county": "Kittitas",
            "locationCode": 1902,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Elma": {
            "county": "Grays Harbor",
            "locationCode": 1403,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Endicott": {
            "county": "Whitman",
            "locationCode": 3804,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Entiat": {
            "county": "Chelan",
            "locationCode": 403,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Enumclaw": {
            "county": "King",
            "locationCode": 1711,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ephrata": {
            "county": "Grant",
            "locationCode": 1303,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everett": {
            "county": "Snohomish",
            "locationCode": 3105,
            "localTaxRate": 0.033,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.098
        },
        "Everett Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4205,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Everson": {
            "county": "Whatcom",
            "locationCode": 3703,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Fairfield": {
            "county": "Spokane",
            "locationCode": 3204,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Farmington": {
            "county": "Whitman",
            "locationCode": 3805,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Federal Way": {
            "county": "King",
            "locationCode": 1732,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ferndale ": {
            "county": "Whatcom",
            "locationCode": 3704,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ferry County Unincorp. Areas": {
            "county": "Ferry",
            "locationCode": 1000,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Fife": {
            "county": "Pierce",
            "locationCode": 2706,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Fircrest": {
            "county": "Pierce",
            "locationCode": 2707,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Forks": {
            "county": "Clallam",
            "locationCode": 501,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Franklin County Unincorp. Areas": {
            "county": "Franklin",
            "locationCode": 1100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Franklin County Unincorp. PTBA": {
            "county": "Franklin",
            "locationCode": 1111,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Friday Harbor ": {
            "county": "San Juan",
            "locationCode": 2801,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Garfield": {
            "county": "Whitman",
            "locationCode": 3806,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Garfield County Unincorp. Areas": {
            "county": "Garfield",
            "locationCode": 1200,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "George": {
            "county": "Grant",
            "locationCode": 1304,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Gold Bar": {
            "county": "Snohomish",
            "locationCode": 3106,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Goldendale": {
            "county": "Klickitat",
            "locationCode": 2002,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Grand Coulee": {
            "county": "Grant",
            "locationCode": 1305,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Granite Falls": {
            "county": "Snohomish",
            "locationCode": 3107,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Grant County Unincorp. Areas": {
            "county": "Grant",
            "locationCode": 1300,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hamilton": {
            "county": "Skagit",
            "locationCode": 2904,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Harrah": {
            "county": "Yakima",
            "locationCode": 3903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Harrington": {
            "county": "Lincoln",
            "locationCode": 2204,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hartline": {
            "county": "Grant",
            "locationCode": 1306,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Hatton": {
            "county": "Adams",
            "locationCode": 101,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Hoquiam": {
            "county": "Grays Harbor",
            "locationCode": 1404,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Hunts Point": {
            "county": "King",
            "locationCode": 1713,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Ilwaco": {
            "county": "Pacific",
            "locationCode": 2501,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Index": {
            "county": "Snohomish",
            "locationCode": 3108,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Ione": {
            "county": "Pend Oreille",
            "locationCode": 2602,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Island County Unincorp. Areas": {
            "county": "Island",
            "locationCode": 1500,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Issaquah": {
            "county": "King",
            "locationCode": 1714,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Issaquah Non-RTA": {
            "county": "King",
            "locationCode": 4014,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Jefferson County Unincorp. Areas": {
            "county": "Jefferson",
            "locationCode": 1600,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Kahlotus": {
            "county": "Franklin",
            "locationCode": 1102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kalama": {
            "county": "Cowlitz",
            "locationCode": 802,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Kalispel Tribe -  Airway Heights": {
            "county": "Spokane",
            "locationCode": 3215,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Kalispel Tribe - Unincorp. Pend Oreille County": {
            "county": "Pend Oreille",
            "locationCode": 2607,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Kelso": {
            "county": "Cowlitz",
            "locationCode": 803,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Kenmore": {
            "county": "King",
            "locationCode": 1738,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kennewick": {
            "county": "Benton",
            "locationCode": 302,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Kent": {
            "county": "King",
            "locationCode": 1715,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Kent Non-RTA": {
            "county": "King",
            "locationCode": 4015,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kettle Falls": {
            "county": "Stevens",
            "locationCode": 3303,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "King County Unincorp. Areas": {
            "county": "King",
            "locationCode": 1700,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "King County Unincorp. Non-RTA": {
            "county": "King",
            "locationCode": 4000,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Kirkland": {
            "county": "King",
            "locationCode": 1716,
            "localTaxRate": 0.037,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.102
        },
        "Kitsap County Unincorp. Areas": {
            "county": "Kitsap",
            "locationCode": 1800,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Kittitas City": {
            "county": "Kittitas",
            "locationCode": 1903,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Kittitas County Unincorp. Areas": {
            "county": "Kittitas",
            "locationCode": 1900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Klickitat County Unincorp. Areas": {
            "county": "Klickitat",
            "locationCode": 2000,
            "localTaxRate": 0.005,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.07
        },
        "Krupp": {
            "county": "Grant",
            "locationCode": 1307,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "La Center": {
            "county": "Clark",
            "locationCode": 603,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "La Conner": {
            "county": "Skagit",
            "locationCode": 2905,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "LaCrosse": {
            "county": "Whitman",
            "locationCode": 3807,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Lacey": {
            "county": "Thurston",
            "locationCode": 3402,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Lake Forest Park": {
            "county": "King",
            "locationCode": 1717,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Lake Stevens": {
            "county": "Snohomish",
            "locationCode": 3109,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Lakewood": {
            "county": "Pierce",
            "locationCode": 2721,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Lamont": {
            "county": "Whitman",
            "locationCode": 3808,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Langley": {
            "county": "Island",
            "locationCode": 1502,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Latah": {
            "county": "Spokane",
            "locationCode": 3205,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Leavenworth": {
            "county": "Chelan",
            "locationCode": 404,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lewis County Unincorp. Areas": {
            "county": "Lewis",
            "locationCode": 2100,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Liberty Lake": {
            "county": "Spokane",
            "locationCode": 3212,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Lincoln County Unincorp. Areas": {
            "county": "Lincoln",
            "locationCode": 2200,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Lind": {
            "county": "Adams",
            "locationCode": 102,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Long Beach": {
            "county": "Pacific",
            "locationCode": 2502,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Longview": {
            "county": "Cowlitz",
            "locationCode": 804,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Lyman": {
            "county": "Skagit",
            "locationCode": 2906,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Lynden ": {
            "county": "Whatcom",
            "locationCode": 3705,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Lynnwood": {
            "county": "Snohomish",
            "locationCode": 3110,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Mabton": {
            "county": "Yakima",
            "locationCode": 3904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Malden": {
            "county": "Whitman",
            "locationCode": 3809,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mansfield": {
            "county": "Douglas",
            "locationCode": 903,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Maple Valley": {
            "county": "King",
            "locationCode": 1720,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Marcus": {
            "county": "Stevens",
            "locationCode": 3304,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Marysville ": {
            "county": "Snohomish",
            "locationCode": 3111,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Mason County Unincorp. Areas": {
            "county": "Mason",
            "locationCode": 2300,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Mattawa": {
            "county": "Grant",
            "locationCode": 1308,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medical Lake": {
            "county": "Spokane",
            "locationCode": 3206,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Medina": {
            "county": "King",
            "locationCode": 1718,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mercer Island": {
            "county": "King",
            "locationCode": 1719,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Mesa": {
            "county": "Franklin",
            "locationCode": 1103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Metaline": {
            "county": "Pend Oreille",
            "locationCode": 2603,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Metaline Falls": {
            "county": "Pend Oreille",
            "locationCode": 2604,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Mill Creek": {
            "county": "Snohomish",
            "locationCode": 3119,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Millwood": {
            "county": "Spokane",
            "locationCode": 3207,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Milton in King County": {
            "county": "King",
            "locationCode": 1731,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Milton in Pierce County": {
            "county": "Pierce",
            "locationCode": 2709,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Monroe ": {
            "county": "Snohomish",
            "locationCode": 3112,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Montesano": {
            "county": "Grays Harbor",
            "locationCode": 1406,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Morton": {
            "county": "Lewis",
            "locationCode": 2103,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Moses Lake": {
            "county": "Grant",
            "locationCode": 1309,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Mossyrock": {
            "county": "Lewis",
            "locationCode": 2104,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Mount Vernon": {
            "county": "Skagit",
            "locationCode": 2907,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Mountlake Terrace": {
            "county": "Snohomish",
            "locationCode": 3113,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Moxee City": {
            "county": "Yakima",
            "locationCode": 3905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Mukilteo": {
            "county": "Snohomish",
            "locationCode": 3114,
            "localTaxRate": 0.04,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.105
        },
        "Naches": {
            "county": "Yakima",
            "locationCode": 3906,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Napavine": {
            "county": "Lewis",
            "locationCode": 2105,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Nespelem": {
            "county": "Okanogan",
            "locationCode": 2405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Newcastle": {
            "county": "King",
            "locationCode": 1736,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Newcastle Non-RTA": {
            "county": "King",
            "locationCode": 4036,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Newport": {
            "county": "Pend Oreille",
            "locationCode": 2605,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Nisqually Tribe - Lacey": {
            "county": "Thurston",
            "locationCode": 3419,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Nisqually Tribe - Lakewood": {
            "county": "Pierce",
            "locationCode": 2731,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Nisqually Tribe - Unincorp. Pierce County RTA": {
            "county": "Pierce",
            "locationCode": 2725,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Nisqually Tribe - Unincorp. Pierce County Non-RTA": {
            "county": "Pierce",
            "locationCode": 4103,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Nisqually Tribe - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3415,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Nisqually Tribe - Unincorp. Thurston County PTBA": {
            "county": "Thurston",
            "locationCode": 3417,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Nooksack": {
            "county": "Whatcom",
            "locationCode": 3706,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Normandy Park": {
            "county": "King",
            "locationCode": 1721,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "North Bend": {
            "county": "King",
            "locationCode": 1722,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "North Bonneville": {
            "county": "Skamania",
            "locationCode": 3001,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Northport": {
            "county": "Stevens",
            "locationCode": 3305,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Oak Harbor": {
            "county": "Island",
            "locationCode": 1503,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Oakesdale": {
            "county": "Whitman",
            "locationCode": 3810,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Oakville": {
            "county": "Grays Harbor",
            "locationCode": 1407,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Odessa": {
            "county": "Lincoln",
            "locationCode": 2205,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan": {
            "county": "Okanogan",
            "locationCode": 2406,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Orting": {
            "county": "Pierce",
            "locationCode": 2710,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Othello": {
            "county": "Adams",
            "locationCode": 103,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Pacific County Unincorp. Areas": {
            "county": "Pacific",
            "locationCode": 2500,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Pacific in King County": {
            "county": "King",
            "locationCode": 1723,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Pacific in Pierce County": {
            "county": "Pierce",
            "locationCode": 2723,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Palouse": {
            "county": "Whitman",
            "locationCode": 3811,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pasco": {
            "county": "Franklin",
            "locationCode": 1104,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pateros": {
            "county": "Okanogan",
            "locationCode": 2409,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Pe Ell": {
            "county": "Lewis",
            "locationCode": 2106,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Pend Oreille County Unincorp. Areas": {
            "county": "Pend Oreille",
            "locationCode": 2600,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Pierce County Unincorp. Areas": {
            "county": "Pierce",
            "locationCode": 2700,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Pierce County Unincorp. Areas Non-RTA": {
            "county": "Pierce",
            "locationCode": 4100,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Pierce County Unincorp. Areas Non-RTA HBZ": {
            "county": "Pierce",
            "locationCode": 2789,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Pierce County Unincorp. PTBA": {
            "county": "Pierce",
            "locationCode": 2727,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Pierce County Unincorp. PTBA HBZ": {
            "county": "Pierce",
            "locationCode": 2787,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pierce County Unincorp. PTBA\nNon-RTA": {
            "county": "Pierce",
            "locationCode": 4127,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pomeroy": {
            "county": "Garfield",
            "locationCode": 1201,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Port Angeles": {
            "county": "Clallam",
            "locationCode": 502,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Port Orchard": {
            "county": "Kitsap",
            "locationCode": 1802,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Port Townsend": {
            "county": "Jefferson",
            "locationCode": 1601,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Poulsbo": {
            "county": "Kitsap",
            "locationCode": 1803,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Prescott": {
            "county": "Walla Walla",
            "locationCode": 3602,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Prosser": {
            "county": "Benton",
            "locationCode": 303,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Pullman": {
            "county": "Whitman",
            "locationCode": 3812,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Puyallup": {
            "county": "Pierce",
            "locationCode": 2711,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Quincy": {
            "county": "Grant",
            "locationCode": 1310,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Raymond": {
            "county": "Pacific",
            "locationCode": 2503,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Reardan": {
            "county": "Lincoln",
            "locationCode": 2206,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Redmond": {
            "county": "King",
            "locationCode": 1724,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Redmond Non-RTA": {
            "county": "King",
            "locationCode": 4024,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Renton": {
            "county": "King",
            "locationCode": 1725,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Renton Non-RTA": {
            "county": "King",
            "locationCode": 4025,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Republic": {
            "county": "Ferry",
            "locationCode": 1001,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Richland ": {
            "county": "Benton",
            "locationCode": 304,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Ridgefield": {
            "county": "Clark",
            "locationCode": 604,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Ritzville ": {
            "county": "Adams",
            "locationCode": 104,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Riverside": {
            "county": "Okanogan",
            "locationCode": 2410,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Rock Island": {
            "county": "Douglas",
            "locationCode": 904,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Rockford": {
            "county": "Spokane",
            "locationCode": 3208,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Rosalia": {
            "county": "Whitman",
            "locationCode": 3813,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Roslyn": {
            "county": "Kittitas",
            "locationCode": 1904,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Roy": {
            "county": "Pierce",
            "locationCode": 2712,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Royal City": {
            "county": "Grant",
            "locationCode": 1311,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Ruston": {
            "county": "Pierce",
            "locationCode": 2713,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Sammamish": {
            "county": "King",
            "locationCode": 1739,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Sammamish Non-RTA": {
            "county": "King",
            "locationCode": 4039,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "San Juan County Unincorp. Areas": {
            "county": "San Juan",
            "locationCode": 2800,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Seattle ": {
            "county": "King",
            "locationCode": 1726,
            "localTaxRate": 0.0375,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1025
        },
        "Sedro-Woolley": {
            "county": "Skagit",
            "locationCode": 2908,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Selah": {
            "county": "Yakima",
            "locationCode": 3907,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Sequim": {
            "county": "Clallam",
            "locationCode": 503,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shelton ": {
            "county": "Mason",
            "locationCode": 2301,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Shoreline": {
            "county": "King",
            "locationCode": 1737,
            "localTaxRate": 0.038,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.103
        },
        "Skagit County Unincorp. Areas": {
            "county": "Skagit",
            "locationCode": 2900,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Skagit County Unincorp. PTBA": {
            "county": "Skagit",
            "locationCode": 2929,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Skamania County Unincorp. Areas": {
            "county": "Skamania",
            "locationCode": 3000,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Skykomish": {
            "county": "King",
            "locationCode": 1727,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Snohomish ": {
            "county": "Snohomish",
            "locationCode": 3115,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas": {
            "county": "Snohomish",
            "locationCode": 3100,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Snohomish County Unincorp. Areas Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4200,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Snohomish County Unincorp. PTBA": {
            "county": "Snohomish",
            "locationCode": 3131,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Snohomish County Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4231,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Snoqualmie": {
            "county": "King",
            "locationCode": 1728,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "South Bend": {
            "county": "Pacific",
            "locationCode": 2504,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "South Cle Elum": {
            "county": "Kittitas",
            "locationCode": 1905,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "South Prairie": {
            "county": "Pierce",
            "locationCode": 2714,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Spangle": {
            "county": "Spokane",
            "locationCode": 3209,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane": {
            "county": "Spokane",
            "locationCode": 3210,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Spokane County Unincorp. Areas": {
            "county": "Spokane",
            "locationCode": 3200,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Spokane County Unincorp. PTBA": {
            "county": "Spokane",
            "locationCode": 3232,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Spokane Valley": {
            "county": "Spokane",
            "locationCode": 3213,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Sprague": {
            "county": "Lincoln",
            "locationCode": 2207,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Springdale": {
            "county": "Stevens",
            "locationCode": 3306,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Squaxin Tribe - Unincorp. Mason County": {
            "county": "Mason",
            "locationCode": 2303,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Squaxin Tribe - Unincorp. Thurston County": {
            "county": "Thurston",
            "locationCode": 3413,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "St. John": {
            "county": "Whitman",
            "locationCode": 3814,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Stanwood ": {
            "county": "Snohomish",
            "locationCode": 3116,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Starbuck": {
            "county": "Columbia",
            "locationCode": 702,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Steilacoom": {
            "county": "Pierce",
            "locationCode": 2715,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Stevens County Unincorp. Areas": {
            "county": "Stevens",
            "locationCode": 3300,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Stevenson": {
            "county": "Skamania",
            "locationCode": 3002,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Sultan": {
            "county": "Snohomish",
            "locationCode": 3117,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Sumas": {
            "county": "Whatcom",
            "locationCode": 3707,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Sumner": {
            "county": "Pierce",
            "locationCode": 2716,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Sunnyside": {
            "county": "Yakima",
            "locationCode": 3908,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Suquamish Tribe - Unincorp. Jefferson County": {
            "county": "Jefferson",
            "locationCode": 1603,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Suquamish Tribe - Unincorp. Kitsap County": {
            "county": "Kitsap",
            "locationCode": 1805,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Swinomish Tribe - La Conner": {
            "county": "Skagit",
            "locationCode": 2911,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Swinomish Tribe - Unincorp. Skagit County": {
            "county": "Skagit",
            "locationCode": 2909,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Swinomish Tribe - Unincorp. Skagit County PTBA": {
            "county": "Skagit",
            "locationCode": 2931,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Tacoma ": {
            "county": "Pierce",
            "locationCode": 2717,
            "localTaxRate": 0.038,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.103
        },
        "Tekoa": {
            "county": "Whitman",
            "locationCode": 3815,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tenino": {
            "county": "Thurston",
            "locationCode": 3405,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Toledo": {
            "county": "Lewis",
            "locationCode": 2107,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Tonasket": {
            "county": "Okanogan",
            "locationCode": 2411,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Tulalip Tribes - Marysville": {
            "county": "Snohomish",
            "locationCode": 3121,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Tulalip Tribes - Unincorp. PTBA Non-RTA": {
            "county": "Snohomish",
            "locationCode": 4233,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.029,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.094
        },
        "Twisp ": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Uniontown": {
            "county": "Whitman",
            "locationCode": 3816,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "University Place": {
            "county": "Pierce",
            "locationCode": 2719,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Vader": {
            "county": "Lewis",
            "locationCode": 2108,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Vancouver": {
            "county": "Clark",
            "locationCode": 605,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Wahkiakum County Unincorp. Areas": {
            "county": "Wahkiakum",
            "locationCode": 3500,
            "localTaxRate": 0.011,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.076
        },
        "Waitsburg ": {
            "county": "Walla Walla",
            "locationCode": 3603,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Walla Walla ": {
            "county": "Walla Walla",
            "locationCode": 3604,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Walla Walla County Unincorp. Areas": {
            "county": "Walla Walla",
            "locationCode": 3600,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Walla Walla County Unincorp. PTBA": {
            "county": "Walla Walla",
            "locationCode": 3636,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Wapato": {
            "county": "Yakima",
            "locationCode": 3912,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Washougal": {
            "county": "Clark",
            "locationCode": 606,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Washtucna": {
            "county": "Adams",
            "locationCode": 105,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Waterville": {
            "county": "Douglas",
            "locationCode": 905,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Waverly": {
            "county": "Spokane",
            "locationCode": 3211,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Wenatchee": {
            "county": "Chelan",
            "locationCode": 405,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "West Richland": {
            "county": "Benton",
            "locationCode": 305,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Westport": {
            "county": "Grays Harbor",
            "locationCode": 1408,
            "localTaxRate": 0.024,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.089
        },
        "Whatcom County Unincorp. Areas": {
            "county": "Whatcom",
            "locationCode": 3700,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Whatcom County Unincorp. PTBA": {
            "county": "Whatcom",
            "locationCode": 3737,
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "White Salmon": {
            "county": "Klickitat",
            "locationCode": 2003,
            "localTaxRate": 0.01,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.075
        },
        "Whitman County Unincorp. Areas": {
            "county": "Whitman",
            "locationCode": 3800,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Wilbur": {
            "county": "Lincoln",
            "locationCode": 2208,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilkeson": {
            "county": "Pierce",
            "locationCode": 2718,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Wilson Creek": {
            "county": "Grant",
            "locationCode": 1315,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Winlock": {
            "county": "Lewis",
            "locationCode": 2109,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Winthrop": {
            "county": "Okanogan",
            "locationCode": 2413,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Woodinville": {
            "county": "King",
            "locationCode": 1735,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Woodinville Non-RTA": {
            "county": "King",
            "locationCode": 4035,
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
        },
        "Woodland": {
            "county": "Cowlitz",
            "locationCode": 805,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Woodway": {
            "county": "Snohomish",
            "locationCode": 3118,
            "localTaxRate": 0.039,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.104
        },
        "Yacolt": {
            "county": "Clark",
            "locationCode": 607,
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
        },
        "Yakima": {
            "county": "Yakima",
            "locationCode": 3913,
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        },
        "Yarrow Point": {
            "county": "King",
            "locationCode": 1730,
            "localTaxRate": 0.036,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.101
        },
        "Yelm": {
            "county": "Thurston",
            "locationCode": 3407,
            "localTaxRate": 0.027,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.092
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
        }
    },
    {
        "expires": "2022-03-31T07:00:00.000Z",
        "ADAMS COUNTY": {
            "locationCode": 100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HATTON": {
            "locationCode": 101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LIND": {
            "locationCode": 102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OTHELLO": {
            "locationCode": 103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RITZVILLE": {
            "locationCode": 104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WASHTUCNA": {
            "locationCode": 105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ASOTIN COUNTY": {
            "locationCode": 200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ASOTIN CITY": {
            "locationCode": 201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CLARKSTON": {
            "locationCode": 202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BENTON COUNTY": {
            "locationCode": 300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BENTON CITY": {
            "locationCode": 301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KENNEWICK": {
            "locationCode": 302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PROSSER": {
            "locationCode": 303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RICHLAND": {
            "locationCode": 304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WEST RICHLAND": {
            "locationCode": 305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BENTON-PTBA": {
            "locationCode": 333,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHELAN COUNTY": {
            "locationCode": 400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CASHMERE": {
            "locationCode": 401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHELAN CITY": {
            "locationCode": 402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ENTIAT": {
            "locationCode": 403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LEAVENWORTH": {
            "locationCode": 404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WENATCHEE": {
            "locationCode": 405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CLALLAM COUNTY": {
            "locationCode": 500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FORKS": {
            "locationCode": 501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PORT ANGELES": {
            "locationCode": 502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SEQUIM": {
            "locationCode": 503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CLARK COUNTY": {
            "locationCode": 600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BATTLE GROUND": {
            "locationCode": 601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CAMAS": {
            "locationCode": 602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LA CENTER": {
            "locationCode": 603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RIDGEFIELD": {
            "locationCode": 604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "VANCOUVER": {
            "locationCode": 605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WASHOUGAL": {
            "locationCode": 606,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "YACOLT": {
            "locationCode": 607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CLARK-PTBA": {
            "locationCode": 666,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COLUMBIA COUNTY": {
            "locationCode": 700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DAYTON": {
            "locationCode": 701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "STARBUCK": {
            "locationCode": 702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COWLITZ COUNTY": {
            "locationCode": 800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CASTLE ROCK": {
            "locationCode": 801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KALAMA": {
            "locationCode": 802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KELSO": {
            "locationCode": 803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LONGVIEW": {
            "locationCode": 804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WOODLAND": {
            "locationCode": 805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DOUGLAS COUNTY": {
            "locationCode": 900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BRIDGEPORT": {
            "locationCode": 901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EAST WENATCHEE": {
            "locationCode": 902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MANSFIELD": {
            "locationCode": 903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ROCK ISLAND": {
            "locationCode": 904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WATERVILLE": {
            "locationCode": 905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DOUGLAS-PTBA": {
            "locationCode": 909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FERRY COUNTY": {
            "locationCode": 1000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "REPUBLIC": {
            "locationCode": 1001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FRANKLIN COUNTY": {
            "locationCode": 1100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CONNELL": {
            "locationCode": 1101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KAHLOTUS": {
            "locationCode": 1102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MESA": {
            "locationCode": 1103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PASCO": {
            "locationCode": 1104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FRANKLIN-PTBA": {
            "locationCode": 1111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GARFIELD COUNTY": {
            "locationCode": 1200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "POMEROY": {
            "locationCode": 1201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.014,
            "rta": 0,
            "totalTaxRate": 0.079,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GRANT COUNTY": {
            "locationCode": 1300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COULEE CITY": {
            "locationCode": 1301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ELECTRIC CITY": {
            "locationCode": 1302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EPHRATA": {
            "locationCode": 1303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GEORGE": {
            "locationCode": 1304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GRAND COULEE": {
            "locationCode": 1305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HARTLINE": {
            "locationCode": 1306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KRUPP": {
            "locationCode": 1307,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MATTAWA": {
            "locationCode": 1308,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MOSES LAKE": {
            "locationCode": 1309,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "QUINCY": {
            "locationCode": 1310,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ROYAL CITY": {
            "locationCode": 1311,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SOAP LAKE": {
            "locationCode": 1312,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WARDEN": {
            "locationCode": 1313,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WILSON CREEK": {
            "locationCode": 1315,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GRAYS HARBOR COUNTY": {
            "locationCode": 1400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ABERDEEN": {
            "locationCode": 1401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0258,
            "rta": 0,
            "totalTaxRate": 0.0908,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COSMOPOLIS": {
            "locationCode": 1402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ELMA": {
            "locationCode": 1403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HOQUIAM": {
            "locationCode": 1404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MCCLEARY": {
            "locationCode": 1405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MONTESANO": {
            "locationCode": 1406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OAKVILLE": {
            "locationCode": 1407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WESTPORT": {
            "locationCode": 1408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OCEAN SHORES": {
            "locationCode": 1409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEHALIS TRIBES - GRAYS HARBOR COUNTY": {
            "locationCode": 1411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEHALIS TRIBES - OAKVILLE": {
            "locationCode": 1413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ISLAND COUNTY": {
            "locationCode": 1500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COUPEVILLE": {
            "locationCode": 1501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LANGLEY": {
            "locationCode": 1502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OAK HARBOR": {
            "locationCode": 1503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "JEFFERSON COUNTY": {
            "locationCode": 1600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PORT TOWNSEND": {
            "locationCode": 1601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SUQUAMISH TRIBE - JEFFERSON COUNTY": {
            "locationCode": 1603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KING COUNTY RTA": {
            "locationCode": 1700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ALGONA": {
            "locationCode": 1701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "AUBURN/KING RTA": {
            "locationCode": 1702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BEAUX ARTS VILLAGE": {
            "locationCode": 1703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BELLEVUE RTA": {
            "locationCode": 1704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BLACK DIAMOND": {
            "locationCode": 1705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BOTHELL/KING": {
            "locationCode": 1706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CARNATION": {
            "locationCode": 1707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CLYDE HILL": {
            "locationCode": 1708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DES MOINES": {
            "locationCode": 1709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DUVALL": {
            "locationCode": 1710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ENUMCLAW": {
            "locationCode": 1711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COVINGTON": {
            "locationCode": 1712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HUNTS POINT": {
            "locationCode": 1713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ISSAQUAH RTA": {
            "locationCode": 1714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KENT RTA": {
            "locationCode": 1715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KIRKLAND": {
            "locationCode": 1716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.037,
            "rta": 0,
            "totalTaxRate": 0.102,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LAKE FOREST PARK": {
            "locationCode": 1717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MEDINA": {
            "locationCode": 1718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MERCER ISLAND": {
            "locationCode": 1719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MAPLE VALLEY": {
            "locationCode": 1720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NORMANDY PARK": {
            "locationCode": 1721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NORTH BEND": {
            "locationCode": 1722,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PACIFIC/KING": {
            "locationCode": 1723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "REDMOND RTA": {
            "locationCode": 1724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RENTON RTA": {
            "locationCode": 1725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SEATTLE": {
            "locationCode": 1726,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.0375,
            "rta": 0,
            "totalTaxRate": 0.1025,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SKYKOMISH": {
            "locationCode": 1727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SNOQUALMIE": {
            "locationCode": 1728,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TUKWILA": {
            "locationCode": 1729,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "YARROW POINT": {
            "locationCode": 1730,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MILTON/KING": {
            "locationCode": 1731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FEDERAL WAY": {
            "locationCode": 1732,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SEATAC": {
            "locationCode": 1733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BURIEN": {
            "locationCode": 1734,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WOODINVILLE RTA": {
            "locationCode": 1735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NEWCASTLE": {
            "locationCode": 1736,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SHORELINE": {
            "locationCode": 1737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KENMORE": {
            "locationCode": 1738,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SAMMAMISH RTA": {
            "locationCode": 1739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - FEDERAL WAY": {
            "locationCode": 1741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.036,
            "rta": 0,
            "totalTaxRate": 0.101,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KITSAP COUNTY": {
            "locationCode": 1800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BREMERTON": {
            "locationCode": 1801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PORT ORCHARD": {
            "locationCode": 1802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "POULSBO": {
            "locationCode": 1803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BAINBRIDGE ISLAND": {
            "locationCode": 1804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SUQUAMISH TRIBE - KITSAP COUNTY": {
            "locationCode": 1805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KITTITAS COUNTY": {
            "locationCode": 1900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CLE ELUM": {
            "locationCode": 1901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ELLENSBURG": {
            "locationCode": 1902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KITTITAS CITY": {
            "locationCode": 1903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ROSLYN": {
            "locationCode": 1904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SOUTH CLE ELUM": {
            "locationCode": 1905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KLICKITAT COUNTY": {
            "locationCode": 2000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.005,
            "rta": 0,
            "totalTaxRate": 0.07,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BINGEN": {
            "locationCode": 2001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GOLDENDALE": {
            "locationCode": 2002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WHITE SALMON": {
            "locationCode": 2003,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.01,
            "rta": 0,
            "totalTaxRate": 0.075,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LEWIS COUNTY": {
            "locationCode": 2100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CENTRALIA": {
            "locationCode": 2101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEHALIS": {
            "locationCode": 2102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MORTON": {
            "locationCode": 2103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MOSSYROCK": {
            "locationCode": 2104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NAPAVINE": {
            "locationCode": 2105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PE ELL": {
            "locationCode": 2106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TOLEDO": {
            "locationCode": 2107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "VADER": {
            "locationCode": 2108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WINLOCK": {
            "locationCode": 2109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEHALIS TRIBES - LEWIS COUNTY": {
            "locationCode": 2111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LINCOLN COUNTY": {
            "locationCode": 2200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ALMIRA": {
            "locationCode": 2201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CRESTON": {
            "locationCode": 2202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DAVENPORT": {
            "locationCode": 2203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HARRINGTON": {
            "locationCode": 2204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ODESSA": {
            "locationCode": 2205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "REARDAN": {
            "locationCode": 2206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPRAGUE": {
            "locationCode": 2207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WILBUR": {
            "locationCode": 2208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MASON COUNTY": {
            "locationCode": 2300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SHELTON": {
            "locationCode": 2301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SQUAXIN ISLAND TRIBE - MASON COUNTY": {
            "locationCode": 2303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OKANOGAN COUNTY": {
            "locationCode": 2400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BREWSTER": {
            "locationCode": 2401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CONCONULLY": {
            "locationCode": 2402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COULEE DAM": {
            "locationCode": 2403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ELMER CITY": {
            "locationCode": 2404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NESPELEM": {
            "locationCode": 2405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OKANOGAN CITY": {
            "locationCode": 2406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OMAK": {
            "locationCode": 2407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OROVILLE": {
            "locationCode": 2408,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PATEROS": {
            "locationCode": 2409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RIVERSIDE": {
            "locationCode": 2410,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TONASKET": {
            "locationCode": 2411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TWISP": {
            "locationCode": 2412,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WINTHROP": {
            "locationCode": 2413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OKANOGAN-PTBA": {
            "locationCode": 2424,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PACIFIC COUNTY": {
            "locationCode": 2500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ILWACO": {
            "locationCode": 2501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LONG BEACH": {
            "locationCode": 2502,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RAYMOND": {
            "locationCode": 2503,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SOUTH BEND": {
            "locationCode": 2504,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PEND OREILLE COUNTY": {
            "locationCode": 2600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CUSICK": {
            "locationCode": 2601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "IONE": {
            "locationCode": 2602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "METALINE": {
            "locationCode": 2603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "METALINE FALLS": {
            "locationCode": 2604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NEWPORT": {
            "locationCode": 2605,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KALISPEL TRIBE - PEND OREILLE COUNTY": {
            "locationCode": 2607,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PIERCE COUNTY RTA": {
            "locationCode": 2700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BONNEY LAKE RTA": {
            "locationCode": 2701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BUCKLEY": {
            "locationCode": 2702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CARBONADO": {
            "locationCode": 2703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DUPONT": {
            "locationCode": 2704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EATONVILLE": {
            "locationCode": 2705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FIFE": {
            "locationCode": 2706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FIRCREST": {
            "locationCode": 2707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GIG HARBOR": {
            "locationCode": 2708,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MILTON/PIERCE": {
            "locationCode": 2709,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ORTING": {
            "locationCode": 2710,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP": {
            "locationCode": 2711,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ROY": {
            "locationCode": 2712,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RUSTON": {
            "locationCode": 2713,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SOUTH PRAIRIE": {
            "locationCode": 2714,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "STEILACOOM": {
            "locationCode": 2715,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SUMNER": {
            "locationCode": 2716,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TACOMA": {
            "locationCode": 2717,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WILKESON": {
            "locationCode": 2718,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "UNIVERSITY PLACE": {
            "locationCode": 2719,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EDGEWOOD": {
            "locationCode": 2720,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LAKEWOOD": {
            "locationCode": 2721,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PACIFIC/PIERCE": {
            "locationCode": 2723,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "AUBURN/PIERCE": {
            "locationCode": 2724,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY RTA": {
            "locationCode": 2725,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PIERCE-PTBA RTA": {
            "locationCode": 2727,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NISQUALLY TRIBE - LAKEWOOD": {
            "locationCode": 2731,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - PUYALLUP": {
            "locationCode": 2733,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - FIFE": {
            "locationCode": 2735,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - MILTON": {
            "locationCode": 2737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - EDGEWOOD": {
            "locationCode": 2739,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - TACOMA": {
            "locationCode": 2741,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.038,
            "rta": 0,
            "totalTaxRate": 0.103,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY PTBA RTA": {
            "locationCode": 2745,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.035,
            "rta": 0,
            "totalTaxRate": 0.1,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PIERCE PTBA - HBZ": {
            "locationCode": 2787,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GIG HARBOR HBZ": {
            "locationCode": 2788,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PIERCE NON-RTA HBZ": {
            "locationCode": 2789,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SAN JUAN COUNTY": {
            "locationCode": 2800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FRIDAY HARBOR": {
            "locationCode": 2801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.02,
            "rta": 0,
            "totalTaxRate": 0.085,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SKAGIT COUNTY": {
            "locationCode": 2900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ANACORTES": {
            "locationCode": 2901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BURLINGTON": {
            "locationCode": 2902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CONCRETE": {
            "locationCode": 2903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HAMILTON": {
            "locationCode": 2904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LA CONNER": {
            "locationCode": 2905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LYMAN": {
            "locationCode": 2906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MOUNT VERNON": {
            "locationCode": 2907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SEDRO WOOLLEY": {
            "locationCode": 2908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SWINOMISH TRIBE - SKAGIT COUNTY": {
            "locationCode": 2909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SWINOMISH TRIBE - LA CONNER": {
            "locationCode": 2911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SKAGIT-PTBA": {
            "locationCode": 2929,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SWINOMISH TRIBE - SKAGIT - PTBA": {
            "locationCode": 2931,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SKAMANIA COUNTY": {
            "locationCode": 3000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NORTH BONNEVILLE": {
            "locationCode": 3001,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "STEVENSON": {
            "locationCode": 3002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.012,
            "rta": 0,
            "totalTaxRate": 0.077,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SNOHOMISH COUNTY RTA": {
            "locationCode": 3100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ARLINGTON": {
            "locationCode": 3101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BRIER": {
            "locationCode": 3102,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DARRINGTON": {
            "locationCode": 3103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EDMONDS": {
            "locationCode": 3104,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EVERETT RTA": {
            "locationCode": 3105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.033,
            "rta": 0,
            "totalTaxRate": 0.098,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GOLD BAR": {
            "locationCode": 3106,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GRANITE FALLS": {
            "locationCode": 3107,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "INDEX": {
            "locationCode": 3108,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LAKE STEVENS": {
            "locationCode": 3109,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LYNNWOOD": {
            "locationCode": 3110,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MARYSVILLE": {
            "locationCode": 3111,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MONROE": {
            "locationCode": 3112,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MOUNTLAKE TERRACE": {
            "locationCode": 3113,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MUKILTEO": {
            "locationCode": 3114,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SNOHOMISH CITY": {
            "locationCode": 3115,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "STANWOOD": {
            "locationCode": 3116,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SULTAN": {
            "locationCode": 3117,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WOODWAY": {
            "locationCode": 3118,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MILL CREEK": {
            "locationCode": 3119,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.04,
            "rta": 0,
            "totalTaxRate": 0.105,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BOTHELL/SNOHOMISH": {
            "locationCode": 3120,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TULALIP TRIBES - MARYSVILLE": {
            "locationCode": 3121,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.028,
            "rta": 0,
            "totalTaxRate": 0.093,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SNOHOMISH-PTBA RTA": {
            "locationCode": 3131,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.039,
            "rta": 0,
            "totalTaxRate": 0.104,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPOKANE COUNTY": {
            "locationCode": 3200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "AIRWAY HEIGHTS": {
            "locationCode": 3201,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHENEY": {
            "locationCode": 3202,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "DEER PARK": {
            "locationCode": 3203,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FAIRFIELD": {
            "locationCode": 3204,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LATAH": {
            "locationCode": 3205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MEDICAL LAKE": {
            "locationCode": 3206,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MILLWOOD": {
            "locationCode": 3207,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ROCKFORD": {
            "locationCode": 3208,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPANGLE": {
            "locationCode": 3209,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPOKANE CITY": {
            "locationCode": 3210,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WAVERLY": {
            "locationCode": 3211,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LIBERTY LAKE": {
            "locationCode": 3212,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPOKANE VALLEY": {
            "locationCode": 3213,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KALISPEL TRIBE - AIRWAY HEIGHTS": {
            "locationCode": 3215,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.026,
            "rta": 0,
            "totalTaxRate": 0.091,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPOKANE-PTBA": {
            "locationCode": 3232,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "STEVENS COUNTY": {
            "locationCode": 3300,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEWELAH": {
            "locationCode": 3301,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COLVILLE": {
            "locationCode": 3302,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KETTLE FALLS": {
            "locationCode": 3303,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MARCUS": {
            "locationCode": 3304,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NORTHPORT": {
            "locationCode": 3305,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SPRINGDALE": {
            "locationCode": 3306,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "THURSTON COUNTY": {
            "locationCode": 3400,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BUCODA": {
            "locationCode": 3401,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LACEY": {
            "locationCode": 3402,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OLYMPIA": {
            "locationCode": 3403,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RAINIER": {
            "locationCode": 3404,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TENINO": {
            "locationCode": 3405,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TUMWATER": {
            "locationCode": 3406,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "YELM": {
            "locationCode": 3407,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEHALIS TRIBES - THURSTON COUNTY": {
            "locationCode": 3409,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CHEHALIS TRIBES - TUMWATER": {
            "locationCode": 3411,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SQUAXIN ISLAND TRIBE - THURSTON COUNTY": {
            "locationCode": 3413,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY": {
            "locationCode": 3415,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NISQUALLY TRIBE - THURSTON COUNTY PTBA": {
            "locationCode": 3417,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NISQUALLY TRIBE - LACEY": {
            "locationCode": 3419,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.029,
            "rta": 0,
            "totalTaxRate": 0.094,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "THURSTON-PTBA": {
            "locationCode": 3434,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.027,
            "rta": 0,
            "totalTaxRate": 0.092,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WAHKIAKUM COUNTY": {
            "locationCode": 3500,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "CATHLAMET": {
            "locationCode": 3501,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.011,
            "rta": 0,
            "totalTaxRate": 0.076,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WALLA WALLA COUNTY": {
            "locationCode": 3600,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COLLEGE PLACE": {
            "locationCode": 3601,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PRESCOTT": {
            "locationCode": 3602,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.016,
            "rta": 0,
            "totalTaxRate": 0.081,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WAITSBURG": {
            "locationCode": 3603,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WALLA WALLA CITY": {
            "locationCode": 3604,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.024,
            "rta": 0,
            "totalTaxRate": 0.089,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WALLA WALLA-PTBA": {
            "locationCode": 3636,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WHATCOM COUNTY": {
            "locationCode": 3700,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BELLINGHAM": {
            "locationCode": 3701,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BLAINE": {
            "locationCode": 3702,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EVERSON": {
            "locationCode": 3703,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FERNDALE": {
            "locationCode": 3704,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LYNDEN": {
            "locationCode": 3705,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.023,
            "rta": 0,
            "totalTaxRate": 0.088,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NOOKSACK": {
            "locationCode": 3706,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SUMAS": {
            "locationCode": 3707,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WHATCOM-PTBA": {
            "locationCode": 3737,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WHITMAN COUNTY": {
            "locationCode": 3800,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ALBION": {
            "locationCode": 3801,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COLFAX": {
            "locationCode": 3802,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "COLTON": {
            "locationCode": 3803,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ENDICOTT": {
            "locationCode": 3804,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "FARMINGTON": {
            "locationCode": 3805,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GARFIELD": {
            "locationCode": 3806,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LA CROSSE": {
            "locationCode": 3807,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "LAMONT": {
            "locationCode": 3808,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MALDEN": {
            "locationCode": 3809,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "OAKESDALE": {
            "locationCode": 3810,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PALOUSE": {
            "locationCode": 3811,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PULLMAN": {
            "locationCode": 3812,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ROSALIA": {
            "locationCode": 3813,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ST. JOHN": {
            "locationCode": 3814,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TEKOA": {
            "locationCode": 3815,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "UNIONTOWN": {
            "locationCode": 3816,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "YAKIMA COUNTY": {
            "locationCode": 3900,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GRANDVIEW": {
            "locationCode": 3901,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "GRANGER": {
            "locationCode": 3902,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "HARRAH": {
            "locationCode": 3903,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MABTON": {
            "locationCode": 3904,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "MOXEE CITY": {
            "locationCode": 3905,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NACHES": {
            "locationCode": 3906,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SELAH": {
            "locationCode": 3907,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SUNNYSIDE": {
            "locationCode": 3908,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TIETON": {
            "locationCode": 3909,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TOPPENISH": {
            "locationCode": 3910,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "UNION GAP": {
            "locationCode": 3911,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.017,
            "rta": 0,
            "totalTaxRate": 0.082,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WAPATO": {
            "locationCode": 3912,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "YAKIMA CITY": {
            "locationCode": 3913,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.018,
            "rta": 0,
            "totalTaxRate": 0.083,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ZILLAH": {
            "locationCode": 3914,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KING COUNTY NON-RTA": {
            "locationCode": 4000,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "AUBURN/KING NON-RTA": {
            "locationCode": 4002,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BELLEVUE NON-RTA": {
            "locationCode": 4004,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "ISSAQUAH NON-RTA": {
            "locationCode": 4014,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "KENT NON-RTA": {
            "locationCode": 4015,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "REDMOND NON-RTA": {
            "locationCode": 4024,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "RENTON NON-RTA": {
            "locationCode": 4025,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "WOODINVILLE NON-RTA": {
            "locationCode": 4035,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NEWCASTLE NON-RTA": {
            "locationCode": 4036,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SAMMAMISH NON-RTA": {
            "locationCode": 4039,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.022,
            "rta": 0,
            "totalTaxRate": 0.087,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PIERCE COUNTY NON-RTA": {
            "locationCode": 4100,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "BONNEY LAKE NON-RTA": {
            "locationCode": 4101,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "NISQUALLY TRIBE - PIERCE COUNTY NON-RTA": {
            "locationCode": 4103,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PUYALLUP TRIBE - PIERCE COUNTY NON RTA": {
            "locationCode": 4105,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.015,
            "rta": 0,
            "totalTaxRate": 0.08,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "PIERCE-PTBA NON-RTA": {
            "locationCode": 4127,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.021,
            "rta": 0,
            "totalTaxRate": 0.086,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SNOHOMISH COUNTY NON-RTA": {
            "locationCode": 4200,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.013,
            "rta": 0,
            "totalTaxRate": 0.078,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "EVERETT NON-RTA": {
            "locationCode": 4205,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.019,
            "rta": 0,
            "totalTaxRate": 0.084,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4231,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        },
        "TULALIP TRIBES - SNOHOMISH-PTBA NON-RTA": {
            "locationCode": 4233,
            "stateTaxRate": 0.065,
            "localTaxRate": 0.025,
            "rta": 0,
            "totalTaxRate": 0.09,
            "effectiveDate": "20220101",
            "expirationDate": "20220331"
        }
    },
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
];
