// Changes the value of the hidden input to the dropdown's value everytime the dropdown is changed.
function getDropdownValue(button) {
    $("#message").html(button.innerHTML);
    $("#dropdown-value").val(button.innerHTML);
    var container = document.getElementById("links");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Resets link buttons if they exist, then calls show randomizing functions based on name pulled from dropdown
function randomize() {
    var container = document.getElementById("links");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
	let showName = $("#dropdown-value").val();
	switch (showName) {
        case "":
            $("#message").html("Please select a show first.");
        case "Friends":
            randomFriends();
            break;
		case "How I Met Your Mother":
			randomHowIMetYourMother();
			break;
        case "New Girl":
            randomNewGirl();
            break;
		case "The Office":
			randomTheOffice();
			break;
		case "Parks and Recreation":
			randomParksAndRecreation();
			break;
        case "That 70s Show":
            randomThat70sShow();
            break;
        default:
            $("#message").html("Something done goofed with randomize().");
            break;
	}
}

// Displays a random episode of Friends
function randomFriends() {
    const season = Math.floor(Math.random() * 10) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70273997' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70273998' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70273999' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274000' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274001' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274002' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274003' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274004' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274005' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274006' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274007' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274008' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274009' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274010' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274011' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274012' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274013' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274014' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274015' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274016' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274017' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274018' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274019' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274020' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274021' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274022' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274023' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274024' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274025' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274026' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274027' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274028' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274029' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274030' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274031' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274032' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274033' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274034' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274035' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274036' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274037' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274038' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274039' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274040' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274041' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274042' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274043' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274044' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274045' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274046' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274047' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274048' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274049' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274050' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274051' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274052' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274053' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274054' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274055' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274056' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274057' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274058' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274059' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274060' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274061' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274062' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274063' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274064' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274065' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274066' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274067' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274068' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274069' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274070' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274071' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274072' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274073' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274074' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274075' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274076' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274077' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274078' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274079' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274080' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274081' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274082' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274083' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274084' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274085' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274086' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274087' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274088' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274089' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274090' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274091' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274092' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274093' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274094' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274095' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274096' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274097' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274098' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274099' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274100' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274101' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274102' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274103' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274104' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274105' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274106' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274107' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274108' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274109' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274110' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274111' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274112' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274113' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274114' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274115' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274116' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274117' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274118' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274119' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274120' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274121' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274122' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274123' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274124' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274125' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274126' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274127' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274128' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274129' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274130' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274131' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274132' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274133' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274134' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274135' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274136' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274137' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274138' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274139' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274140' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274141' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274142' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274143' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274144' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274145' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274146' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274147' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274148' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274149' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274150' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274151' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274152' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274153' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274154' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274155' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274156' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274157' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274158' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274159' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274160' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274161' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274162' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274163' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274164' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274165' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274166' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274167' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274168' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274169' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274170' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274171' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274172' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274173' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274174' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274175' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274176' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274177' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274178' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274179' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274180' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274181' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274182' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274183' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274184' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274185' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274186' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274187' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274188' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274189' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274190' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274191' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274192' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274193' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274194' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274195' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274196' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274197' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274198' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274199' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274200' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274201' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274202' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274203' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274204' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274205' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274206' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274207' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274208' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274209' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274210' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274211' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274212' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274213' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274214' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 9."); break;
            }
            break;
        case 10:
            episode = Math.floor(Math.random() * 17) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274215' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274216' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274217' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274218' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274219' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274220' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274221' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274222' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274223' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274224' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274225' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274226' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274227' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274228' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274229' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274230' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70274231' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Friends in Season 10."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Friends.");
            return 0;
    }
    $("#message").html("Friends<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of How I Met Your Mother
function randomHowIMetYourMother() {
	const season = Math.floor(Math.random() * 9) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/2ebc2ef6-3e03-4fa0-8022-4a80b662ad25' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/d131c9f3-bbae-4f5e-8e19-81f165cd1351' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/8fe8f8b1-09cd-4079-82de-d21f4ba546c6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/f74d26ef-a96c-4f49-ace2-66a68cc5e6e0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/de6ead4f-2a5b-4f60-bbbe-973a6a8815a9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/b032d097-c2aa-4e1b-a8fd-6f9a2473a56b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/7bc8136d-f3ff-4b24-83b3-e0a632ab5602' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/d1ad7bf9-6ff3-43a7-ba85-3b9b2f6fccae' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/d549f0f2-6699-4ae2-828b-6c44999397ed' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/772d18ef-5908-47cc-bd36-1f15c5792d25' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/6c7702d4-8b1a-43ee-9d46-be8c685aa154' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/7d783458-77a6-46d8-b1e7-1c481dee5ba3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/da197fdb-2ab2-4978-9a33-74027826b9ab' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/cb53d0e2-ef63-4db8-b793-247054b94ef4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/8e0f20e3-dadc-41c9-8c23-526629ffeac2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/2e73b93c-61ad-4116-9c18-c3d09c1096ab' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/f072f459-0bf6-49e4-bb6f-b17aaa121e43' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/43b8655b-e5b2-4cc3-a8c9-ecd2710d8c79' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/61a223bb-dfbd-4acc-97bd-369897377a54' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/d23dc1d3-5d62-4abc-bc45-1beece85a5bb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/3a8c64c8-c247-4b4a-b164-f3f23140f2d9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/b95dcbca-309d-4d87-80dc-958ea8bafb36' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/517565a5-2ed7-4a47-9cf4-a669aa327c72' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/641007ff-cc38-4068-b31a-3f4a8a7e3da9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/33530fe3-b607-49c1-803b-15ed94023d0f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/63d2c98d-a4f7-4d30-823f-aa362c625270' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/be10c664-324e-48db-8ec1-7e7d875f9643' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/30ff487a-7944-407c-a6a4-0e107487ea38' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/fd3644e5-f33b-47dd-92a3-56a559a8ee8b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/d6504cdf-78a9-4d26-8a6c-35af61d267ea' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/c5c2cebf-2087-431a-9bca-c138ea3be143' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/cac725d3-d301-45b6-bee6-560fcb302815' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/e883a0a3-c188-4f63-bd96-4252cccb754f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/823d01e9-d49c-4947-bc72-23f624e4b675' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/c706909f-f514-4f79-8f2a-7115f5b2b3f0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/b5f1f3da-856b-42d5-9378-2843c69f83a8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/b8ed527b-248e-4479-b4fb-d74461a0d3fb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/58469a9b-22d0-4f3a-9e30-a407bc9aa4dc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/bae354c0-0501-4ae0-ab79-123b954a53f8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/37571c5c-6c1e-4d07-8685-c832f02f8c97' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/072280b4-7ab4-4f7d-b124-93265e6b2ed5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/a7455a6c-eb85-48d4-8fbd-ce88ab2a902a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/10adf559-5c71-4520-83a5-022782232ce6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/72110c51-21ae-4c8d-9297-6cdb2afcb6db' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 20) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/a1840811-45e3-411a-9679-556c6ae19a9e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/5e6ece17-23b3-4495-bb58-e9593036da8b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/6b24f08c-b60b-46df-8ddb-213f0f6d7388' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/e0308e2e-cb6b-409f-9a89-756df5a4169c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/8951cbb3-e115-420f-8d24-39d17862940b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/40d3f310-29cf-4a4d-8672-5c295e536774' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/7953af4c-c01a-4b95-afe9-f42a027d97af' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/89da43bc-df11-4756-a7d9-f82a4f659a46' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/4f981efb-ca65-4bfa-bbf6-d40fb243746e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/b8fa95ad-2364-45b7-9d18-e03cfe0f61ad' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/6945e011-0718-4040-a282-428015f77ab1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/0f9f6738-385f-48c2-aae6-a504439b2472' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/5d191d7c-65ba-4f73-8215-a179696f3ca7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/455a9863-3371-4bd7-a885-24751ddd23fa' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/713b9b69-6d82-4f0f-a992-9c546d5142a2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/4ff06f74-b897-4923-b40f-11ecd78ddd87' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/a415450c-c7fb-484a-901b-83b2eb70b68a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/735d1314-c649-4f1b-ab42-65f31a21301b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/d4254802-4688-4578-8ff9-e1ead10d119c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/0683c75c-b763-406c-8d4f-92899522e88a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/4859c80e-572d-449f-9911-7d87f4d0baa4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/fdcd1c7e-990e-4c86-9e9e-a4b18df56914' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/aff1f15f-1bd1-4f2c-9a4f-1f8520c63762' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/2b8a29d8-7e8b-476c-bda1-e8e4c5a97531' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/a0283b0b-8edd-4084-b6fa-a03b9702535b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/a925db00-345b-45d6-b6a6-6f2af22e6f66' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/c0ae0d60-345a-476b-b407-4ebe721c3b81' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/10395c28-5241-4181-830d-53fe32bf4c2e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/bcd4c8be-b5c5-40fd-b063-ef67c59c0e7e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/10ac6f40-7974-4a18-ae9a-620878314782' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/d7e6b573-68b2-428b-b276-a107cb1e14c3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/df6b1289-103b-40dd-bb88-a560badbfd74' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/ee617306-b351-434a-ad02-1b4a1feaa864' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/eef80d06-7b37-4d47-a002-bda74c461bf7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/8a53c597-4763-4d41-9821-a242dcf00285' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/9b78a061-1e48-46bc-ae57-5656b8a95a53' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/58d38227-95a1-4d68-963c-bb5c1d896e5e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/9f05dc41-0404-4aea-be92-d33f087d4bf2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/05f6e1ce-04d6-4114-af15-fea5a8458da8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/17c2e196-0fa2-42c4-b89a-fba562094c9d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/3868be8a-b2f6-4b0c-8959-78458615ca9b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/cc85407f-8c6c-40a6-8874-5c95420215dd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/0b16c23e-9f2d-4edb-8721-3cf22f9934bb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/30621eeb-e047-466a-9f58-7d1a3d7b83a5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/62c613cf-c334-4e02-a859-3725775b04a1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/eb9f4f95-c051-4fb3-892f-302366725a75' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/34072df1-24ed-47a5-99b8-fc6e447c578c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/ad760cf3-b787-4d72-82d3-92a3f61ee5eb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/51c5a2d6-0050-49bc-9971-336a9753109d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/313432f8-494d-42d8-9f66-e15e2c3d5ca3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/40fc743e-aec8-435c-b175-dc0240eb1a5e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/f8d6c071-d2d4-4d3e-9476-9011b2bc0e8f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/3f2fc104-42bd-4c8f-8a39-dea70243da4e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/e511aece-f3ad-4dfc-9e44-896eadce6268' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/a6b2a37b-8447-4335-98fa-495886fe2517' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/22bb57a1-883b-44de-8bec-f60b816b1b0c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/33b937d4-2050-4a55-aad6-ac9b2ddaaa11' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/42414cb4-b5c2-41bd-ab97-acfe342fdd73' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/34be0c76-3aa3-43b8-af4a-a93055dd0889' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/7f55bc13-e740-4446-8b01-3d3dc44287f6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/4e56576c-a877-4509-9bb0-ff189130c45a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/92fc37ae-e1d7-4d4e-ad4e-27d66a910e8f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/4c426d88-8cee-4009-931f-20a89f22e4ff' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/b4c8ddfa-8651-443f-9891-513eb9e0985c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/39ea5a0b-d209-4032-9186-9646e67cef2d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/8052ac76-08cc-4d17-abc0-5a943fc886f0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/00e693d6-8918-4481-9fe1-459c924f87cd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/4d5a3460-bd3c-48d1-a74a-c9f0b2b7a2a7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/1c334c5b-8e3c-4895-8c7e-106c1887f592' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/986c3463-f70f-486c-865f-0d85fa20a183' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/bf255a33-8d53-44ff-aab5-5120ce88b15d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/80333419-1e4f-4bc6-9be4-f36199bf26c1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/97e4c5a3-0885-48a5-bacc-f2724b4a2c90' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/ccc254bb-7301-47d9-b476-2bf1d7af9583' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/7187b1d7-e081-49c4-9387-785718ce0d39' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/d732d2ca-572d-43cc-8d1b-277ae887a0d8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/99f92a30-dad5-4876-9812-a1e778e3da3a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/9ae0a8ae-60de-4db8-bc10-03e8d19403c3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/9b7ec2be-fcb6-4496-99fd-50e8962111ef' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/58ad185f-8900-4302-b667-beb557c41b25' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/566c4dc0-92a3-4474-8e01-488aa422209b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/ddcaebd2-31d9-4811-a0bc-66c9b7852320' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/a6dc6eb8-620c-4f24-9a3d-9a32d6b6a6f3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/1ae112ee-b3b1-4b78-afec-3d09e6097d32' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/7c4035a5-1f4e-4634-9205-76ec5ca5d8e0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/03c15d12-96fd-46c6-bd5a-f812b159f7bf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/694d738d-3d2f-40d5-9e81-bdafa3379863' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/9b39c461-7b74-4114-946e-7eb61bc761f1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/1e4e3a7e-b77a-4c55-ad73-ef0537215096' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/a5b470a0-0074-4971-92d9-455bc36cac09' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/a571486e-0bf2-4a03-aa45-6928dc0b6d54' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/e9a3e450-5b8f-4843-b8f7-c4d492edc3bf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/fdbcbea0-2335-4de3-9d4b-57f2be6b1f95' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/55e03f30-6d37-42d8-85b0-378a5f0aadcd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/882686f6-c4a0-45d4-afac-18829cd5b0f2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/0ed33568-a645-4625-a755-38511a570379' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/32ac18e5-37fd-4240-8307-95531f47e40a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/5b89375a-1d16-4990-8fe9-1daaa4498c33' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/15dfab57-3286-4897-b16a-9fe32d611a3f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/5cda5fc9-f2a2-4e20-b8d3-ca617424be10' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/559c5e3a-ea14-47cd-8323-405c8156fbf1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/7914e7a3-f20b-4e2f-86e2-0e84e6cbd88d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/f03e42d5-bc5c-4fdd-af6e-843a059e2cf6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/abcc7256-2100-4db6-a7f6-4d71c71a0fdb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/f6282fd1-6d5a-43fd-8d7b-159b34450591' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/857b6461-1b19-4525-a7ae-57bf198869cf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/ef0560fb-b3e8-479a-a2ef-480e5abe4ccd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/20af26b3-09a4-4c93-91ef-6abffe8aaab6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/601b3950-da0e-4f08-b37f-12a47de9b7c9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/c24c969a-1435-493c-bddb-2fdd87a50b62' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/49af86f7-0d6c-4aec-9d52-5b3037a7300a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/a4f9666b-eb95-42ad-af15-7b8be1909e91' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/49c61e15-1711-4a5e-b548-b1b217c8d0d9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/d5321a0f-9b5c-4599-b7a0-0bbeedcb239d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/47bb9bec-35fd-4e4a-835e-a141402d442f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/17174163-3794-4709-92da-a738b817f917' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/4b44f066-1a30-4829-b257-61114a25a604' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/34c32c70-c199-42cc-8c36-29eb9d10fbe9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/ede78c5f-6240-4ba8-b3a6-adb1b8dd80ad' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/86352e40-d3d6-4917-b6f4-07bffd8a0c83' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/d682b06f-260a-4ca6-bd26-9f9421834128' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/97977986-0b83-48d0-9b7f-ef32c2aec44b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/6b365c32-7a8b-4489-9812-7a253dec795b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/a405e158-1995-4107-82be-89e0cd0b6a2c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/01debef6-8017-4384-ab2d-f8cb87e61bee' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/6ce8aa4e-5d17-4db9-80f1-c4c89bd5e2f0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/4351d22b-fc2d-4284-81df-1151f2cd6556' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/f513f320-dedb-40b0-a93e-447d42f43561' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/9efc26ba-9cde-4c78-ad6c-bd5066a29d89' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/481cb05c-a24e-4c8e-8677-259d2af356a8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/6c0c4047-a363-4e02-8ebf-05edd41ee6dd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/c01bf06b-e422-4739-8429-ab6ca1d63ab9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/b9b777eb-3c73-4d76-b1bf-2deaa080e042' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/7434c21b-9bbe-458a-83e5-83ff435cae35' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/0d9299d4-0d00-4252-b444-dc2ae62632d1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/17bf97a1-0abc-421f-910f-c88518142410' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/adaa1897-dd7f-4e2c-9bc1-1a626610a6e5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/d2d87228-d5b1-4ff0-8444-5db20535ca0e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/643988d5-b5e6-4653-8481-5bc719503bfe' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/6e0af06c-f8ca-4369-b74c-d1a00c607f37' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/06d7b9df-69d5-484b-9ecc-3938af655495' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/c75650ed-acd1-4470-8494-b83271f72985' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/b3bbd0f4-e055-46a8-a01c-2c484dd9eb14' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/ffd6ec3a-9387-4265-a55f-2ee7ec685cc0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/901d3f9c-5627-40fa-b909-aac99d4fbee8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/6151cc3f-a4bd-409f-9b7d-2b6d63fa6364' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/d7e925cd-4d43-415a-8c78-901ed16f0623' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/e3b93a0d-22e9-41ab-bda2-e01c3a521ee3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/6520aaa8-8bed-41dd-89ee-7d202f47af15' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/83e8cab9-09ce-4eb4-9fd0-9ae58a7885ec' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/2fb5e627-c8c0-4cb9-8a29-f8032026d834' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/1e2183b2-9204-4661-8b56-1f130611b12a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/76823416-f157-4cbe-992d-a53f856f2657' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/7588adc5-396f-4032-8c6f-fbe08b6dc24b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/8e4b0293-f7da-484b-9563-28bd22865b05' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/2a56a2d4-9014-4245-a466-8d7181f873e2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/aac6c031-64f4-43fe-b788-e7ab2ce1d1d1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/30f75cfa-fd50-4b0d-9c82-a39a8e05ef6f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/c57bfdc5-10da-4d47-9544-02ebacb2902f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/13f9c6c1-9d6b-4f1e-814f-603a6a4b98ac' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/02a45a6c-ea9e-4f6b-a9e1-21507f715820' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/ca960b16-2b14-4cf5-a74d-b6d9519415a4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/5166c2a3-9aae-4a5a-8435-69189309e21b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/c517585b-0de2-45e7-ac68-14036891594f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with How I Met Your Mother in Season 9."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with How I Met Your Mother.");
            return 0;
    }
    $("#message").html("How I Met Your Mother<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of Parks and Recreation
function randomNewGirl() {
    const season = Math.floor(Math.random() * 7) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276483' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276484' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276485' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276486' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276487' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276488' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276489' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276490' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276491' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276492' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276493' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276494' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276495' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276496' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276497' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276498' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276499' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276500' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276501' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276502' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276503' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276504' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276505' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70276506' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286213' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286214' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286215' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286216' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286217' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286218' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286219' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286220' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286221' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286222' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286223' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286224' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286225' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286226' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286227' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286228' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286229' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286230' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286231' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286232' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286233' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286234' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286235' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286236' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286237' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010718' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010719' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010720' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010721' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010722' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010723' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010724' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010725' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010726' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010727' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010728' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010729' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010730' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010731' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010732' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010733' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010734' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010735' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010736' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010737' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010738' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010739' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80010740' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057613' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057614' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057615' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057616' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057617' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057618' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057619' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057620' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057621' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057622' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057623' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057624' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057625' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057626' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057627' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057628' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057629' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057630' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057631' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057632' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057633' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80057634' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111426' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111427' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111428' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111429' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111430' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111431' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111432' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111433' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111434' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111435' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111436' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111437' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111438' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111439' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111440' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111441' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111442' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111443' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111444' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111445' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111446' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80111447' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192688' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192689' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192690' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192691' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192692' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192693' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192694' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192695' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192696' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192697' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192698' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192699' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192700' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192701' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192702' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192703' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192704' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192705' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192706' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192707' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192708' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192709' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 8) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/3acd3596-35d3-4ea4-8dd3-28bbf53f81de' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/21642cef-73c8-4927-b8b3-6fe6dc2589fa' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/d472ea77-1a0f-4577-a143-a3e778369f30' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/fd05f80d-0913-44a6-9fa1-88deadd376c0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/14b833b3-63d8-4c4a-87b4-d008554ff87c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/7b37f67f-6759-4c46-a42f-529b9988865f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/bb2b934a-88ea-48ea-9da2-3d5afb0c6260' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/f8944859-0214-4d73-924b-16c7ab7e2b73' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with New Girl in Season 7."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with New Girl.");
            return 0;
    }
    $("#message").html("New Girl<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of The Office
function randomTheOffice() {
	const season = Math.floor(Math.random() * 9) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 6) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70105212' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069628' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069628' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069630' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069631' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069632' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069633' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069634' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069635' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069636' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069637' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069638' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069639' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069640' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069641' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069642' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069643' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069644' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069645' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069645' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069647' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069648' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069649' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069650' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069651' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069652' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069653' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70069654' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080635' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080631' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080633' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080636' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080637' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080634' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080628' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080639' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080632' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080627' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080624' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080645' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080643' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080626' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080641' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080629' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080630' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080640' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080644' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080642' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080646' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080625' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70080638' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 14) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108687' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108688' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108689' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108690' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108691' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108692' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108693' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108694' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108695' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108696' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108697' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108698' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108699' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70108700' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 28) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126223' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126250' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126224' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126225' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126226' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126227' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126228' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126229' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126230' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126231' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126232' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126233' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126234' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126235' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126249' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126236' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126237' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126238' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126239' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126240' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126241' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126242' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126243' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126244' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126245' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126246' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 27:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126247' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 28:
                    $("#links").append("<a href='https://www.netflix.com/watch/70126248' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151933' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151934' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151935' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151936' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151937' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151938' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151939' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151940' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151941' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151942' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151943' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151944' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151945' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151946' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151947' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151948' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151949' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151950' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151951' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151952' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151953' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151954' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151955' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151956' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151957' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.netflix.com/watch/70151958' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189006' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189007' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189008' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189009' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189010' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189011' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189012' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189013' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189014' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189015' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189016' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189017' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189018' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189019' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189020' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189021' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189022' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189023' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189024' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189025' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189026' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189027' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189028' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189029' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189030' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189031' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210965' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210966' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210967' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210968' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210969' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210970' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210971' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210972' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210973' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210974' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210975' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210976' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210977' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210978' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210979' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210980' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210981' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210982' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210983' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210984' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210985' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210986' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210987' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210988' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286845' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286846' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286847' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286848' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286849' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286850' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286851' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286852' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286853' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286854' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286855' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286856' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286857' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286858' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286859' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286860' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286861' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286862' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286863' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286864' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286865' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286866' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286867' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with The Office in Season 9."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with The Office.");
            return 0;
    }
    $("#message").html("The Office<br>Season " + season + ", Episode " + episode);
}

// Displays and plays a random episode of Parks and Recreation
function randomParksAndRecreation() {
	const season = Math.floor(Math.random() * 7) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 6) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152005' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/eafcd1c3-07ed-42fe-94a1-3810431e5995' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152006' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2ff965f8-e560-4010-aeb1-7f79b83500ba' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152007' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/f100ad33-9119-4b99-8c82-f77ff991fd4a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152008' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/31d5674e-4598-485c-8319-dce4daebe80f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152009' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/fd436898-2645-476b-b4e9-6a552aaaaa77' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152010' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/5fda2c68-cf3c-4f9c-b10a-ceaf9662f817' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152011' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2c6bdbad-bb13-43ec-bea4-13b755549da3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152012' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/a91a98f5-06f2-41c7-b180-07f879c261df' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152013' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/f30e53c0-597f-41a1-ad82-06438d89e4ef' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152014' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/6f71ae36-251b-40e6-9411-a7d838053229' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152015' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/9ccf6c8e-26f2-41d9-9867-8cfd68fe14ab' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152016' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/de39f44e-57bc-49a3-86b0-0ee60a091622' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152017' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b625cf95-67fa-4c67-a192-f91bae1f6277' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152018' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/326394cb-1c53-4450-a9f7-fb011a584849' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152019' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2b57174f-f0fe-4aa1-9509-bd591ba20b76' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152020' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b14ef954-81ba-40af-b429-ab44304584c7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152021' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/38756ff6-c8b5-4be0-a273-b3b841116b8c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152022' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/abebd9f6-5fa9-47e6-9f6d-337b613e1bd4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152023' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/6d27672c-570a-4b45-892c-d69fb4c5821c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152024' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/791e557b-6c8b-4e07-9d02-7608471f22b3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152025' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2aee6623-a12e-4994-ac02-ea8473d0c5eb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152026' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/18246155-9367-4872-acea-1fa044b166d0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152027' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/e0e90a82-a636-466f-9a6a-e1384f36df9f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152028' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/578defac-421d-4de7-9eab-be5536d9cff0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152029' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/821c9f95-699e-47e5-ad44-e12875d60eaf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152030' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/5577a582-a275-415a-be37-42bc672ebf00' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152031' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/a53049b4-3e0e-420d-b5ac-bd87b0574483' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152032' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2b4871fd-fffe-4c72-93bc-c393f9561803' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152033' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/75f551a6-7bac-435d-ae58-8c771609d033' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70152034' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/5a0de120-ccce-4db7-b598-476c887ebf5d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 16) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190095' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/6102fa95-11f1-42ce-af1e-1a6f2c809d6f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190096' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/792d3e20-e8a1-48b9-8142-f289edb9f30d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190097' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/f666ac35-b989-4aa2-8404-58177ee8d4da' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190098' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/fe16c42f-d73d-418c-9eea-107d57a76ad6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190099' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/35deaa0c-5cb2-4d9f-8c9d-d7d544ee3cee' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190100' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/40a2bfac-92e4-49b3-abf3-35608a43847e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190101' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/76219735-ace2-4769-baa8-3000dacc96ac' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190102' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/bc84c77a-981d-467e-b5da-8df591e8b428' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190103' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/e8c2b842-f8c4-47c4-ad09-70ad9bb52146' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190104' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2d864504-cc40-4733-a354-d469eb8e264e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190105' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/cee58b95-3134-42e2-8036-1b884613eab7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190106' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/672dd9d1-d76c-459e-b7be-42ab22b33887' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190107' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/c6a42b1c-c3cd-4501-bdc6-399f45d9b957' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190108' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b33e0b6d-f860-4a23-953a-b2492c4221e3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190109' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/e29fe408-adaf-4a0c-8421-1dfa18223064' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70190110' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/fb16754c-df13-4480-b5fc-4af5ece50219' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                $("#links").append("<a href='https://www.netflix.com/watch/70210916' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/4e1ae642-9d2d-441d-b393-7e2768ebcad3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210917' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b51abd3f-7c47-4ee9-a372-1d4dcf9ec212' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210918' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2b9c2f46-da97-4dc5-b109-2d5435f7f66f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210919' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/cbc5d6e4-f91b-4d34-b9f2-77432fd2ede9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210920' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2d19a878-4f41-49ba-9cbd-59bca45f3446' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210921' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/6dab64b1-8a80-4018-80e5-6dd2cc8a9aec' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210922' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b3a1d622-45de-48d6-add2-555665f8d850' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210923' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/5b9feae0-36b2-4be5-a4a3-cd95cb627471' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210924' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/7fbd5a87-4082-445d-b198-92e7452d29eb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210925' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b104eb24-f527-458c-b21e-aa02a5238c68' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210926' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/85e48ea0-8bb2-4f0b-b143-dc8c7019b9c4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210927' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/68f9e25d-5a98-42f6-901c-668c6160dc0b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210928' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/3b052e34-a5fb-46f2-8f9d-154a947f66bc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210929' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/9ab18e9a-9823-4331-9748-9b3911b1fcea' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210930' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/897defb6-9a03-4fba-84e3-9228306726b2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210931' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2e214877-8fec-451e-9401-e32210a31bb5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210932' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/3bbd64f4-d712-416f-898d-cc55d752e42f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210933' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/22c0084c-4a9b-46e8-9c86-4ea9d56631f2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210934' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b1396f55-4e26-48fe-ae72-5ecabe2a365d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210935' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/53627e95-f0ce-49ba-933b-28e84060dcb1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210936' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/0d8b05a3-82fd-45dd-b9f9-ace834f1e549' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70210937' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/aa5f6f4e-fca6-42f2-9448-f9e61a5d4319' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286781' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/a6d10333-c48a-4ad6-9de5-8815d380792e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286782' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/611f4f89-e3f3-408c-9acd-5dba8a1f78fe' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286783' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/042454a6-8ff1-403f-b4a6-0b15062dd4eb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286784' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/29023b79-368e-4f0a-91e1-99e8081bb5ca' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286785' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/fe88b279-46d8-484c-a98b-fba3472e6b0b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286786' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/044e7530-bc99-4ea3-8008-12e9e7f60953' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286787' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b8097a13-8ba6-476d-b0a4-0db99e495750' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286788' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/399d15de-86c8-4565-87d8-cfad152c566b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286789' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/1dfe393d-8eab-425c-a79a-9c10d2adf5c9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286790' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/08f50b74-0801-42ba-a895-41debf7a43bc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286791' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/61c17b22-9b9c-4454-a9ab-c3caf93e634d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286792' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/492c78cf-fd0f-458e-aefa-5f9f9f9588b4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286793' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/65426fdb-929b-45a5-8ef9-11745b5f9135' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286794' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2276e3d2-c118-4e97-89ed-4893acec8966' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286795' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/200f6388-6b6e-4c24-81b4-3c2233109fb4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286796' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/ef55cd36-3692-425d-abbf-5f91874eca35' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286797' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/0615a260-f88e-4b9b-a2d8-fd006970d01a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286798' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/af6f4d74-546a-4838-8d29-409b3d399b7f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286799' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/d34c66fb-bac8-4eed-a565-d0828e20a70d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286800' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/cd94ea98-8356-4397-a834-bd3a145e2b34' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286801' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/0462ac17-d4f0-4a78-8e2f-029496d774ee' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70286802' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/dd15cca2-7949-4212-897e-869645f88efb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 20) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004317' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/d26cc369-d1f4-40d4-9f10-9a541773957e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004318' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2fb1d0c3-dd18-4c82-97af-d2b5c1165cda' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004319' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/d8ab301d-7aa8-4d3c-874c-01bee57dc544' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80007810' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2611518e-336e-410d-80d8-634cb378915d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004320' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/49db8384-4212-4c1b-97b5-92eac94673e0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004321' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/44c7bc68-39ab-436d-a434-cef186f51903' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004322' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/f2c4b63c-8109-4183-bc8d-a3b237998738' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004323' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/1a51a7aa-3cd2-45e4-8c87-0fdae6521ca6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004324' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2c12dc40-5b80-4056-b350-12eb778031f1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004325' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/00af31ac-e9a5-46ef-83ee-5e60e7d78563' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004326' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/1c20755f-d7cc-4e3b-bf9f-3c0fc7420616' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004327' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/b8f59cb9-d427-4164-b612-a7e7ff59bd37' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004328' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/47e97983-931b-490b-872d-b02abc72ca7a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004329' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/99e07dbe-cb52-4960-9fd7-838d48dfcfd0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004330' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/91a5cac7-8b15-42c7-bf3b-95a29be5af6b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004331' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/86e7fddf-cf09-4520-9e9e-4dff677451d6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004332' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/d76e6602-6949-4331-a537-b7bca5821518' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004333' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2ca964b3-67cf-4c8e-b1b2-ed2588a98415' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004334' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/c33c05bd-3544-4366-b12f-698aaf63a969' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004335' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/83a14748-9fa6-4899-a2c0-b7981dc58bec' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 12) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080569' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/4277c3ed-728d-4cde-9ade-dec65e1630ab' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080570' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/d5726c3f-b9b8-4c65-90c8-b3607db06ad4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080571' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/a6e01401-84ef-4d5c-bd1f-957ae6fd7bb1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080572' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/2aafa549-4f05-4629-a6af-511951f8a3f2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080573' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/1649c76c-ca32-44eb-8b76-2269d6976d36' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080574' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/e0a7e78d-92ad-4e27-a10a-befba26e6992' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080575' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/f71f8018-61de-48c1-a94b-6b9f59887c94' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080576' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/588be054-37d7-42e4-b0f6-5d31874df152' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080577' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/26abe800-69d8-4f09-9bf9-35e6a3cee626' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080578' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/d19e5c6f-edbb-4a5a-b7d6-85cd262ff3e4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080579' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/16e31ee3-933f-4591-811e-d8655b292ca2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80080580' target='_blank' class='btn btn-danger'>Netflix</a>");
                    $("#links").append("<a href='https://www.hulu.com/watch/952f31f4-a701-4018-b459-13fb866918f1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Parks and Recreation in Season 7."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Parks and Recreation.");
            return 0;
    }
    $("#message").html("Parks and Recreation<br>Season " + season + ", Episode " + episode);
}

function randomThat70sShow() {
    const season = Math.floor(Math.random() * 8) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165197' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165198' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165199' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165200' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165202' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165203' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165205' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165204' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165206' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165201' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165210' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165209' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165211' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165213' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165215' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165212' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165214' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165207' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165217' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165218' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165219' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165216' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165208' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165220' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165221' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165225' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165222' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165223' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165224' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165229' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165231' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165226' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165228' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165230' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165227' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165232' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165234' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165233' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165236' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165237' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165238' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165239' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165235' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165243' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165240' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165241' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165242' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165244' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165245' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165246' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165247' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165248' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165249' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165251' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165250' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165252' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165254' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165253' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165255' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165258' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165256' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165261' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165257' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165259' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165262' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165260' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165263' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165264' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165265' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165266' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165267' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165268' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165269' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165271' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165270' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165272' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 27) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165273' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165274' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165275' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165276' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165278' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165277' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165279' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165281' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165280' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165282' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165284' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165285' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165286' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165283' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165287' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165289' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165290' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165291' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165292' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165288' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165293' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165294' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165295' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165297' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165296' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165298' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 27:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165299' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165300' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165301' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165302' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165303' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165304' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165305' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165306' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165307' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165308' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165309' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165310' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165315' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165313' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165314' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165311' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165312' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165316' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165317' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165318' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165319' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165320' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165321' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165322' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165323' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165324' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165325' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165326' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165327' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165328' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165329' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165330' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165331' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165332' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165333' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165334' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165335' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165336' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165337' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165338' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165339' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165340' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165341' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165342' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165343' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165344' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165345' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165347' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165346' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165348' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165349' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165350' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165351' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165352' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165353' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165354' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165355' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165359' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165356' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165357' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165358' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165360' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165361' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165362' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165363' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165364' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165365' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165366' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165367' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165368' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165369' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165370' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165371' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165372' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165373' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165374' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165375' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165376' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165378' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165379' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165377' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165380' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165381' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165382' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165385' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165383' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165384' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165386' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165387' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165391' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165388' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165389' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165390' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165392' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165394' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165393' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165395' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70165396' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with That 70s Show in Season 8."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with That 70s Show.");
            return 0;
    }
    $("#message").html("That 70s Show<br>Season " + season + ", Episode " + episode);
}
