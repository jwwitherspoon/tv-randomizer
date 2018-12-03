// Changes the value of the hidden input to the dropdown's value everytime the dropdown is changed.
function getDropdownValue(button) {
    $("#message").html(button.innerHTML);
    $("#dropdown-value").val(button.innerHTML);
}

// Calls show randomizing functions based on name pulled from dropdown
function randomize() {
	let showName = $("#dropdown-value").val();
	switch (showName) {
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
            break;
        case 2:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 3:
            episode = Math.floor(Math.random() * 25) + 1;
            break;
        case 4:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 5:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 6:
            episode = Math.floor(Math.random() * 25) + 1;
            break;
        case 7:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 9:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 10:
            episode = Math.floor(Math.random() * 18) + 1;
            break;
        default:
            $("#message").html("Something done goofed with randomFriends().");
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
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 3:
            episode = Math.floor(Math.random() * 20) + 1;
            break;
        case 4:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 5:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 6:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 7:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 9:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        default:
            $("#message").html("Something done goofed with randomHowIMetYourMother().");
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
            break;
        case 2:
            episode = Math.floor(Math.random() * 25) + 1;
            break;
        case 3:
            episode = Math.floor(Math.random() * 23) + 1;
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 6:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 7:
            episode = Math.floor(Math.random() * 8) + 1;
            break;
        default:
            $("#message").html("Something done goofed with randomNewGirl().");
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
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 3:
            episode = Math.floor(Math.random() * 25) + 1;
            break;
        case 4:
            episode = Math.floor(Math.random() * 19) + 1;
            break;
        case 5:
            episode = Math.floor(Math.random() * 28) + 1;
            break;
        case 6:
            episode = Math.floor(Math.random() * 26) + 1;
            break;
        case 7:
            episode = Math.floor(Math.random() * 26) + 1;
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 9:
            episode = Math.floor(Math.random() * 25) + 1;
            break;
        default:
            $("#message").html("Something done goofed with randomTheOffice().");
            return 0;
    }
    $("#message").html("The Office<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of Parks and Recreation
function randomParksAndRecreation() {
	const season = Math.floor(Math.random() * 7) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 6) + 1;
            break;
        case 2:
            episode = Math.floor(Math.random() * 24) + 1;
            break;
        case 3:
            episode = Math.floor(Math.random() * 16) + 1;
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 6:
            episode = Math.floor(Math.random() * 22) + 1;
            break;
        case 7:
            episode = Math.floor(Math.random() * 13) + 1;
            break;
        default:
            $("#message").html("Something done goofed with randomParksAndRecreation().");
            return 0;
    }
    $("#message").html("Parks and Recreation<br>Season " + season + ", Episode " + episode);
}
