let events = {};
let $currentDay = $("#currentDay");
$currentDay.text(moment().format("MMMM Do YYYY,dddd,hA"));

let $hours = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
let id = 0;
//For every hour display the time line with text area and save button.
for (let i = 9; i <= 17; i++) {

    //Making the timeblocks elements
    var $container = $(".container");
    let $div = $('<div>')
        .addClass("row time-block")
        .attr('id', id);

    let $divTime = $('<div>')
        .addClass("col-3 hour")
        .text(moment(i, 'h').format("hh a"));

    let $textarea = $('<textarea>')
        .addClass("col-7 textarea")
        .text(" ");

    let $saveBtn = $('<button>')
        .addClass("col-2 saveBtn");

    let $icon = $('<i>')
        .addClass("fa fa-save");

    $saveBtn.append($icon);


    let now = parseInt(moment().format("h"));
    // let now = 12;
    console.log(now, i);

    //Applying color class to past hours
    if (i < now) {
        $textarea.addClass("past");
    }
    else if (i === now) {
        $textarea.addClass("present");
    }
    else if (i > now) {
        $textarea.addClass("future");
    }


    //Appending time block elements to the div
    $div.append($divTime, $textarea, $saveBtn);
    //Appending the div to the container.
    $container.append($div);
    id++;

}
//Save the events as entered into local storage
let saveEvents = function () {
    localStorage.setItem("events", JSON.stringify(events));
};

//Edit the text area
$(".textarea").on('click', function () {
    let text = $(this).text().trim();
    let classList = $(".textarea").attr("class");//gives the classes currently in the <textarea>
    console.log(classList);
    let textInput = $("<textarea>").addClass(classList).val(text);
    console.log(text);
    console.log(textInput);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

$(".saveBtn").on('click', function () {
    console.log("Save button clicked" + text);
    $div[id].text = text;

});