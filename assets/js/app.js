
let $currentDay = $("#currentDay");
$currentDay.text(moment().format("MMMM Do YYYY,dddd,hA"));

//For every hour from 9am to 5pm display the time line with text area and save button.
for (let i = 9; i <= 17; i++) {

    //Making the timeblocks elements
    var $container = $(".container");
    let $div = $('<div>')
        .addClass("row time-block")
        .attr('id', i);

    let $divTime = $('<div>')
        .addClass("col-3 hour")
        .text(moment(i, 'h').format("hh a"));

    let $textarea = $('<textarea>')
        .addClass("col-7 textarea")
        .text(localStorage.getItem(JSON.stringify(i)));

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
}

//Add or Edit and save the text area
$(".saveBtn").on('click', function () {
    const text = $(this).siblings("textarea").val();//returns only the sibling of the filter- textarea
    console.log(text);

    const keyId = $(this).parent()[0].id;//returns the parent of this
    console.log(keyId);

    localStorage.setItem(keyId, text);
});