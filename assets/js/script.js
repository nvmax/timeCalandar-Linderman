// https://momentjs.com/docs/#/use-it/system-js/ for more info on moment.js

$(init);

// Function to initialize page getting current time and timer for each second
function init() {
    var now = moment();
    $('#currentDay').text(now.format('MMM  Do  YYYY'));
    timeSlots();
    $(".saveBtn").on("click", save);
    //save removed it was saving undefined
    storage();
    var countdown = setInterval(timeSlots, 1000)
    console.log(countdown)
    }

    // need to use past present and future time with in a loop 
    // refacted if statments with info gathered from https://www.youtube.com/watch?v=EumXak7TyQ0
    function timeSlots() {
        $('.time-block').each(function() {
            // get current time for hour min and second 
            var currentTime = moment();
            $('#currentTime').text(currentTime.format('h:mm:ss A'));
            // combined both sections into one parseint to return time
            var time = parseInt($(this).attr('id').split('-')[1]);
            console.log(time);            
            var currenttime = moment().format("H"); 
            console.log(currenttime); // returns hour in military time
            // remove the class of past present and future worked with jessica lane 
            $(this).removeClass("past present future"); // put back in removes classes prior to adding new class
            if (time < currenttime) return $(this).addClass('past'); // changes color of past
            if (time > currenttime) return $(this).addClass('future'); // changes color of future 
            return $(this).addClass('present'); // changes color of present      
        }
        );
    }   
    
// worked with jessica lane and others in zoom call for save and storage functions
// save function to local storage
function save() {
    // gets info from ID of index.html
    var bId = $(this).parent().attr("id");
    // saves to local storage     
    localStorage.setItem(moment().format("MDYY") + bId, $("#" + bId + " textarea").val());
};

function storage() {
    // gets info from timblock and loops through to populate textarea from local storage.
    $(".time-block").each(function() {
        var bId = $(this).attr("id");
        $("#" + bId + " textarea").text(localStorage.getItem(moment().format("MDYY") + bId));
    });
}
// bonus feature remove items from local storage by double clicking
$(".time-block").on("dblclick", function() {
    var bId = $(this).attr("id");
    $("#" + bId + " textarea").val("");
    localStorage.removeItem(moment().format("MDYY") + bId);
});


    


