// https://momentjs.com/docs/#/use-it/system-js/ for more info on moment.js

$(init);

// need current time and date for index page to display
function init() {
    var now = moment();
    $('#currentDay').text(now.format('M / Do / YYYY'));
    }


    // reference info for moment
    // Year, month, and day tokens
    // Tokens are case-sensitive.
    
    // Input	Example	Description
    // YYYY	        2014	4 or 2 digit year. Note: Only 4 digit can be parsed on strict mode
    // YY	        14	2 digit year
    // Y	        -25	Year with any number of digits and sign
    // Q	        1..4	Quarter of year. Sets month to first month in quarter.
    // M MM	        1..12	Month number
    // MMM MMMM	    Jan..December	Month name in locale set by moment.locale()
    // D DD	        1..31	Day of month
    // Do	        1st..31st	Day of month with ordinal
    // DDD DDDD	    1..365	Day of year
    // X	        1410715640.579	Unix timestamp
    // x	        1410715640579	Unix ms timestamp