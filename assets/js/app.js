let $currentDay = $("#currentDay");
$currentDay.text(moment().format("MMMM Do YYYY,dddd,hA"));

let hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
//Making the timeblocks elements
var $container = $(".container");
let $div = $('<div>')
    .addClass("row time-block");

let $divTime = $('<div>')
    .addClass("col-3 hour")
    .text("time");

let $textarea = $('<textarea>')
    .addClass("col-7")
    .text("event for the day");

let $saveBtn = $('<button>')
    .addClass("col-2 saveBtn");

let $icon = $('<i>')
    .addClass("fa fa-save");

$saveBtn.append($icon);

$div.append($divTime, $textarea, $saveBtn);

$container.append($div);