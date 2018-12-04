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

// Displays and plays a random episode of Parks and Recreation
function randomParksAndRecreation() {
	const season = Math.floor(Math.random() * 7) + 1;
    const season = 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 6) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/70152005"); break;
                case 2: window.open("https://www.netflix.com/watch/70152006"); break;
                case 3: window.open("https://www.netflix.com/watch/70152007"); break;
                case 4: window.open("https://www.netflix.com/watch/70152008"); break;
                case 5: window.open("https://www.netflix.com/watch/70152009"); break;
                case 6: window.open("https://www.netflix.com/watch/70152010"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/70152011"); break;
                case 2: window.open("https://www.netflix.com/watch/70152012"); break;
                case 3: window.open("https://www.netflix.com/watch/70152013"); break;
                case 4: window.open("https://www.netflix.com/watch/70152014"); break;
                case 5: window.open("https://www.netflix.com/watch/70152015"); break;
                case 6: window.open("https://www.netflix.com/watch/70152016"); break;
                case 7: window.open("https://www.netflix.com/watch/70152017"); break;
                case 8: window.open("https://www.netflix.com/watch/70152018"); break;
                case 9: window.open("https://www.netflix.com/watch/70152019"); break;
                case 10: window.open("https://www.netflix.com/watch/70152020"); break;
                case 11: window.open("https://www.netflix.com/watch/70152021"); break;
                case 12: window.open("https://www.netflix.com/watch/70152022"); break;
                case 13: window.open("https://www.netflix.com/watch/70152023"); break;
                case 14: window.open("https://www.netflix.com/watch/70152024"); break;
                case 15: window.open("https://www.netflix.com/watch/70152025"); break;
                case 16: window.open("https://www.netflix.com/watch/70152026"); break;
                case 17: window.open("https://www.netflix.com/watch/70152027"); break;
                case 18: window.open("https://www.netflix.com/watch/70152028"); break;
                case 19: window.open("https://www.netflix.com/watch/70152029"); break;
                case 20: window.open("https://www.netflix.com/watch/70152030"); break;
                case 21: window.open("https://www.netflix.com/watch/70152031"); break;
                case 22: window.open("https://www.netflix.com/watch/70152032"); break;
                case 23: window.open("https://www.netflix.com/watch/70152033"); break;
                case 24: window.open("https://www.netflix.com/watch/70152034"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 16) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/70190095"); break;
                case 2: window.open("https://www.netflix.com/watch/70190096"); break;
                case 3: window.open("https://www.netflix.com/watch/70190097"); break;
                case 4: window.open("https://www.netflix.com/watch/70190098"); break;
                case 5: window.open("https://www.netflix.com/watch/70190099"); break;
                case 6: window.open("https://www.netflix.com/watch/70190100"); break;
                case 7: window.open("https://www.netflix.com/watch/70190101"); break;
                case 8: window.open("https://www.netflix.com/watch/70190102"); break;
                case 9: window.open("https://www.netflix.com/watch/70190103"); break;
                case 10: window.open("https://www.netflix.com/watch/70190104"); break;
                case 11: window.open("https://www.netflix.com/watch/70190105"); break;
                case 12: window.open("https://www.netflix.com/watch/70190106"); break;
                case 13: window.open("https://www.netflix.com/watch/70190107"); break;
                case 14: window.open("https://www.netflix.com/watch/70190108"); break;
                case 15: window.open("https://www.netflix.com/watch/70190109"); break;
                case 16: window.open("https://www.netflix.com/watch/70190110"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/70210916"); break;
                case 2: window.open("https://www.netflix.com/watch/70210917"); break;
                case 3: window.open("https://www.netflix.com/watch/70210918"); break;
                case 4: window.open("https://www.netflix.com/watch/70210919"); break;
                case 5: window.open("https://www.netflix.com/watch/70210920"); break;
                case 6: window.open("https://www.netflix.com/watch/70210921"); break;
                case 7: window.open("https://www.netflix.com/watch/70210922"); break;
                case 8: window.open("https://www.netflix.com/watch/70210923"); break;
                case 9: window.open("https://www.netflix.com/watch/70210924"); break;
                case 10: window.open("https://www.netflix.com/watch/70210925"); break;
                case 11: window.open("https://www.netflix.com/watch/70210926"); break;
                case 12: window.open("https://www.netflix.com/watch/70210927"); break;
                case 13: window.open("https://www.netflix.com/watch/70210928"); break;
                case 14: window.open("https://www.netflix.com/watch/70210929"); break;
                case 15: window.open("https://www.netflix.com/watch/70210930"); break;
                case 16: window.open("https://www.netflix.com/watch/70210931"); break;
                case 17: window.open("https://www.netflix.com/watch/70210932"); break;
                case 18: window.open("https://www.netflix.com/watch/70210933"); break;
                case 19: window.open("https://www.netflix.com/watch/70210934"); break;
                case 20: window.open("https://www.netflix.com/watch/70210935"); break;
                case 21: window.open("https://www.netflix.com/watch/70210936"); break;
                case 22: window.open("https://www.netflix.com/watch/70210937"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/70286781"); break;
                case 2: window.open("https://www.netflix.com/watch/70286782"); break;
                case 3: window.open("https://www.netflix.com/watch/70286783"); break;
                case 4: window.open("https://www.netflix.com/watch/70286784"); break;
                case 5: window.open("https://www.netflix.com/watch/70286785"); break;
                case 6: window.open("https://www.netflix.com/watch/70286786"); break;
                case 7: window.open("https://www.netflix.com/watch/70286787"); break;
                case 8: window.open("https://www.netflix.com/watch/70286788"); break;
                case 9: window.open("https://www.netflix.com/watch/70286789"); break;
                case 10: window.open("https://www.netflix.com/watch/70286790"); break;
                case 11: window.open("https://www.netflix.com/watch/70286791"); break;
                case 12: window.open("https://www.netflix.com/watch/70286792"); break;
                case 13: window.open("https://www.netflix.com/watch/70286793"); break;
                case 14: window.open("https://www.netflix.com/watch/70286794"); break;
                case 15: window.open("https://www.netflix.com/watch/70286795"); break;
                case 16: window.open("https://www.netflix.com/watch/70286796"); break;
                case 17: window.open("https://www.netflix.com/watch/70286797"); break;
                case 18: window.open("https://www.netflix.com/watch/70286798"); break;
                case 19: window.open("https://www.netflix.com/watch/70286799"); break;
                case 20: window.open("https://www.netflix.com/watch/70286800"); break;
                case 21: window.open("https://www.netflix.com/watch/70286801"); break;
                case 22: window.open("https://www.netflix.com/watch/70286802"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/80004317"); break;
                case 2: window.open("https://www.netflix.com/watch/80004317"); break;
                case 3: window.open("https://www.netflix.com/watch/80004318"); break;
                case 4: window.open("https://www.netflix.com/watch/80004319"); break;
                case 5: window.open("https://www.netflix.com/watch/80007810"); break;
                case 6: window.open("https://www.netflix.com/watch/80004320"); break;
                case 7: window.open("https://www.netflix.com/watch/80004321"); break;
                case 8: window.open("https://www.netflix.com/watch/80004322"); break;
                case 9: window.open("https://www.netflix.com/watch/80004323"); break;
                case 10: window.open("https://www.netflix.com/watch/80004324"); break;
                case 11: window.open("https://www.netflix.com/watch/80004325"); break;
                case 12: window.open("https://www.netflix.com/watch/80004326"); break;
                case 13: window.open("https://www.netflix.com/watch/80004327"); break;
                case 14: window.open("https://www.netflix.com/watch/80004328"); break;
                case 15: window.open("https://www.netflix.com/watch/80004329"); break;
                case 16: window.open("https://www.netflix.com/watch/80004330"); break;
                case 17: window.open("https://www.netflix.com/watch/80004331"); break;
                case 18: window.open("https://www.netflix.com/watch/80004332"); break;
                case 19: window.open("https://www.netflix.com/watch/80004333"); break;
                case 20: window.open("https://www.netflix.com/watch/80004334"); break;
                case 21: window.open("https://www.netflix.com/watch/80004335"); break;
                case 22: window.open("https://www.netflix.com/watch/80004335"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 13) + 1;
            switch (episode) {
                case 1: window.open("https://www.netflix.com/watch/80080569"); break;
                case 2: window.open("https://www.netflix.com/watch/80080570"); break;
                case 3: window.open("https://www.netflix.com/watch/80080571"); break;
                case 4: window.open("https://www.netflix.com/watch/80080572"); break;
                case 5: window.open("https://www.netflix.com/watch/80080573"); break;
                case 6: window.open("https://www.netflix.com/watch/80080574"); break;
                case 7: window.open("https://www.netflix.com/watch/80080575"); break;
                case 8: window.open("https://www.netflix.com/watch/80080576"); break;
                case 9: window.open("https://www.netflix.com/watch/80080577"); break;
                case 10: window.open("https://www.netflix.com/watch/80080578"); break;
                case 11: window.open("https://www.netflix.com/watch/80080579"); break;
                case 12: window.open("https://www.netflix.com/watch/80080580"); break;
                case 13: window.open("https://www.netflix.com/watch/80080580"); break;
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 7."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with randomParksAndRecreation().");
            return 0;
    }
    $("#message").html("Parks and Recreation<br>Season " + season + ", Episode " + episode);
}
