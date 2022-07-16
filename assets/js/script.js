// https://momentjs.com/docs/#/use-it/system-js/ for more info on moment.js

$(init);

// need current time and date for index page to display
function init() {
    var now = moment();
    $('#currentDay').text(now.format('MMM  Do  YYYY'));

    timeSlots();
    $(".saveBtn").on("click", save);
    save();
    storage();
    var countdown = setInterval(timeSlots, 1000)
    console.log(countdown)
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


    // need to use past present and future time with in a loop 

    function timeSlots() {
        $('.time-block').each(function() {
            // combined both sections into one parseint to return time
            var time = parseInt($(this).attr('id').split('-')[1]);
            console.log(time);
            
            var currenttime = moment().format("H"); 
            console.log(currenttime); // returns hour in military time
            // remove the class of past present and future worked with jessica lane 

            if (time < currenttime) {
                $(this).addClass('past'); // working changing color of past to grey
            }else if (time == currenttime) { // was not working had === jessica lane fixed it with ==
                $(this).addClass('present'); // not working colors this green 
            }else {
                $(this).addClass('future'); // working changing color of future to green

            }
        }
        );
    }

// save function to local storage
function save() {
    var bId = $(this).parent().attr("id");
    
    localStorage.setItem(moment().format("MDYY") + bId, $("#" + bId + " textarea").val());
};

function storage() {
    $(".time-block").each(function() {
        var bId = $(this).attr("id");
        $("#" + bId + " textarea").text(localStorage.getItem(moment().format("MDYY") + bId));
    });
}


    


