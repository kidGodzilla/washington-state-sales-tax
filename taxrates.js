/**
 * WA sales tax rates Jan 1 2019 - Jun 30 2021
 *
 * These rates must be updated each quarter. Pull Requests appreciated :)
 *
 * INSTRUCTIONS FOR UPDATING:
 *
 * 1. Download updates from: https://dor.wa.gov/get-form-or-publication/publications-subject/local-sales-use-tax-rates-excel-format
 * 2. Convert to CSV (Excel, Numbers, libreOffice, others)
 * 3. Find -> Replace ` (City)` with `` (in a text editor)
 * 4. Convert CSV to Keyed JSON: http://www.convertcsv.com/csv-to-json.htm
 *    Header Row one: location,county,locationCode,localTaxRate,stateTaxRate,totalTaxRate
 *
 * Assumed Column names: county, locationCode, localTaxRate, stateTaxRate, totalTaxRate
 *
 * ARRAY OF ITEMS MUST BE SORTED BY EXPIRES, ASCENDING - THE FIRST ITEM WHICH HAS NOT EXPIRED WILL BE USED.
 */

module.exports = [
    {
        "expires": "2020-01-01T07:00:00.000Z",
        "Aberdeen ": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0248,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0898
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
        "Chelan": {
            "county": "Chelan",
            "locationCode": 402,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Chelan County Unincorp. Areas": {
            "county": "Chelan",
            "locationCode": 400,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "East Wenatchee": {
            "county": "Douglas",
            "locationCode": 902,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
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
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Rock Island": {
            "county": "Douglas",
            "locationCode": 904,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Twisp ": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.019,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.084
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        }
    },
    {
        "expires": "2020-03-31T07:00:00.000Z",
        "Aberdeen ": {
            "county": "Grays Harbor",
            "locationCode": 1401,
            "localTaxRate": 0.0248,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.0898
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
        },
        "Asotin County Unincorp. Areas": {
            "county": "Asotin",
            "locationCode": 200,
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Coulee City": {
            "county": "Grant",
            "locationCode": 1301,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Coulee Dam": {
            "county": "Okanogan",
            "locationCode": 2403,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
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
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Elmer City": {
            "county": "Okanogan",
            "locationCode": 2404,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Gig Harbor": {
            "county": "Pierce",
            "locationCode": 2708,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Gig Harbor HBZ": {
            "county": "Pierce",
            "locationCode": 2788,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "Grandview": {
            "county": "Yakima",
            "locationCode": 3901,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Granger": {
            "county": "Yakima",
            "locationCode": 3902,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Grays Harbor County Unincorp. Areas": {
            "county": "Grays Harbor",
            "locationCode": 1400,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "McCleary": {
            "county": "Grays Harbor",
            "locationCode": 1405,
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
        },
        "Ocean Shores": {
            "county": "Grays Harbor",
            "locationCode": 1409,
            "localTaxRate": 0.025,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.09
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Okanogan County Unincorp. Areas": {
            "county": "Okanogan",
            "locationCode": 2400,
            "localTaxRate": 0.013,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.078
        },
        "Okanogan County Unincorp. PTBA": {
            "county": "Okanogan",
            "locationCode": 2424,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Olympia": {
            "county": "Thurston",
            "locationCode": 3403,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Omak": {
            "county": "Okanogan",
            "locationCode": 2407,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Oroville": {
            "county": "Okanogan",
            "locationCode": 2408,
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Rainier": {
            "county": "Thurston",
            "locationCode": 3404,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.012,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.077
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
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
            "localTaxRate": 0.021,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.086
        },
        "Soap Lake": {
            "county": "Grant",
            "locationCode": 1312,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Thurston County Unincorp. Areas": {
            "county": "Thurston",
            "locationCode": 3400,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Thurston County Unincorp. PTBA": {
            "county": "Thurston",
            "locationCode": 3434,
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Tieton": {
            "county": "Yakima",
            "locationCode": 3909,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
        },
        "Toppenish": {
            "county": "Yakima",
            "locationCode": 3910,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Tukwila": {
            "county": "King",
            "locationCode": 1729,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
        },
        "Tumwater": {
            "county": "Thurston",
            "locationCode": 3406,
            "localTaxRate": 0.028,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.093
        },
        "Twisp ": {
            "county": "Okanogan",
            "locationCode": 2412,
            "localTaxRate": 0.02,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.085
        },
        "Union Gap": {
            "county": "Yakima",
            "locationCode": 3911,
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        },
        "Warden": {
            "county": "Grant",
            "locationCode": 1313,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.023,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.088
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
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
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
            "localTaxRate": 0.017,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.082
        },
        "Yakima County Unincorp. Areas": {
            "county": "Yakima",
            "locationCode": 3900,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
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
            "localTaxRate": 0.026,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.091
        },
        "Zillah": {
            "county": "Yakima",
            "locationCode": 3914,
            "localTaxRate": 0.014,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.079
        }
    },
    {
        "expires": "2020-06-30T07:00:00.000Z",
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
            "localTaxRate": 0.022,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.087
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
            "localTaxRate": 0.018,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.083
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
            "localTaxRate": 0.016,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.081
        },
        "SeaTac": {
            "county": "King",
            "locationCode": 1733,
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
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
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
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
            "localTaxRate": 0.035,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.1
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
        "expires": "2020-09-30T07:00:00.000Z",
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
            "localTaxRate": 0.015,
            "stateTaxRate": 0.065,
            "totalTaxRate": 0.08
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
    }
];
