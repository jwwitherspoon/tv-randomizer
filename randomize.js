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
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 20) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with randomHowIMetYourMother() in Season 9."); break;
            }
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 1."); break;
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 2."); break;
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 3."); break;
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 4."); break;
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 5."); break;
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 6."); break;
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
                default: $("#message").html("Something done goofed with randomParksAndRecreation() in Season 7."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with randomParksAndRecreation().");
            return 0;
    }
    $("#message").html("Parks and Recreation<br>Season " + season + ", Episode " + episode);
}
