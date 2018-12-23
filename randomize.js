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
        case "Adventure Time":
            randomAdventureTime();
            break;
        case "Brooklyn Nine-Nine":
            randomBrooklynNineNine();
            break;
        case "Criminal Minds":
            randomCriminalMinds();
            break;
        case "Firefly":
            randomFirefly();
            break;
        case "Friends":
            randomFriends();
            break;
        case "Gilmore Girls":
            randomGilmoreGirls();
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
        case "Rick and Morty":
            randomRickAndMorty();
            break;
        case "Supernatural":
            randomSupernatural();
            break;
        case "That 70s Show":
            randomThat70sShow();
            break;
        default:
            $("#message").html("Something done goofed with randomize().");
            break;
	}
}

// Displays a random episode of Adventure Time
function randomAdventureTime() {
    const season = Math.floor(Math.random() * 10) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/c7e6e40a-23ca-49ed-a560-56940cc3ce98' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/8e580cd8-3d23-4490-a884-57a69b018f8d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/5f397530-70a8-4b36-b5c0-fee81afa2309' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/3a77e28c-4b51-46ff-b0fb-aa6823567b07' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/a2fe5135-8e2a-43fa-bef7-65f87f21ca23' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/8b2bb4b0-fa99-412e-929a-d4f20334d621' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/3035c7c6-59e3-4a2e-a30e-d370425eb15b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/cdd51582-b566-45e9-82ef-d89610f56733' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/96e9539a-5de8-4626-a34f-83e7cf470ff8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/40edbd7f-2684-4443-b266-7032b486461d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/c66d3eae-c2a9-4c4a-a7ed-38cfcbf0a4ff' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/83833fbd-8a53-40d9-acbf-0903db144b0b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/916d55ef-5e63-4829-a00b-0e882072a42e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/b2f7e9d0-bb2c-4db1-9057-743bfb4600ca' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/f30ca612-1841-4d79-b94f-c70f98636716' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/a20989f2-9a0e-495c-9250-96b8105a9236' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/86aa0983-3f5b-4124-9c5d-c99afb24abe5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/877ce9ba-95eb-4824-92db-3adaf3479d03' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/0187d883-190e-4fec-b66d-873a531b1e3a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/b7ec4055-0b01-49c9-ac99-6611394c3825' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/9d0daaaf-df49-463d-ba99-099113cd0523' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/b0c2c7e3-687a-4714-81fa-183e7c6b1e22' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/6361a9f0-304d-4183-ac43-6c8d83420352' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/74567b4f-6df6-447d-ad29-d8f411644d19' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/4e68697a-a686-4397-9542-08885d9aa1ce' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/06fb6de2-d931-447c-843c-351e49e83de9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/0de3d683-a86d-48a9-8923-93fc5b22c7c4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/0222b6e6-560c-4683-bed1-a55afa56a25a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/cbec723c-5517-4616-91fe-d3aec5ce20ab' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/25655640-a215-4695-85b2-1140c6aa079a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/e7ef47d2-7e14-4f96-b808-1b2ef9707d3d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/62c4a33b-c848-4093-acc8-6547fe7c505f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/877090b0-2b97-49d9-91a7-b0ee639f0717' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/7bf4f82e-9012-4b4b-8e09-5ab4e04aaf9a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/a695b600-c318-4a2f-8df7-1536e892d702' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/67d78385-413d-4832-9bef-bdf6c12471ba' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/d42dcac8-23fb-4fd4-904f-0f1dc5c2df7c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/87f385af-e0cd-4a86-aed8-c188c99df381' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/f2eb6384-1bee-4c54-a38a-2320ad913da6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/08536f31-b9e5-40fc-9009-33ded3fba612' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/1ff1c2a8-a973-4c41-8c55-a17ec6ee17ae' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/c48526ea-d68a-46c8-ae02-6b3f4db73e5f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/6928ebb6-5471-48ef-9a8a-e994ccc0e2d4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/138f7756-ac21-40e3-a345-e5fd44fb46a8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/98d93730-7796-4da1-a06e-0626f14db00f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/dba4f6a3-8674-4edd-827d-4725f3267e06' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/e604b1b3-f1c5-4e61-8343-1d5b1c0c84ec' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/e578cb4e-92a6-4b94-98e6-70ddcb502280' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/fe72a394-c2b1-46c5-960c-6fd6adb49e13' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/9da239a5-b83e-4911-a23a-8399ed9a1ba5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/f871f8cd-7698-4b0f-b0a1-354c85287ae2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/91efd417-396d-481f-997d-86f5e112b123' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/649bca74-b7ab-4739-8d96-655543f3ef81' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/fb240ae3-0e3a-4a19-93a7-147e1dbcdac5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/29c9e5dc-955a-461a-af4d-93f5986d4ceb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/2ca50de0-78c8-45ba-b046-f5c7fccc3fc8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/38b13bb7-fbbb-4003-b5f7-04855ff2c2f7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/a62244d2-a69a-49b7-b5a9-2f2d59723d78' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/8d98b93d-8b89-470c-8308-2cc44758c41b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/882e40b5-c3f3-427b-883e-04e0d67c0c9d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/df60fae0-c7f2-4705-88c0-f2ce58d23445' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/2537ec6c-ecbc-402f-9526-71a5e5fbcfec' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/d79e4a00-e754-4bde-9ac5-783914e8b15d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/ec8daa33-a37c-446f-86a7-d5241bbdb73f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/2cc40269-22a2-449a-abee-ee3e3c5cca4b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/353da184-ed24-49cd-b644-8ddda3788870' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/8d9ddea8-0af7-4b2f-879a-915c639719dc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/8a69af29-4f68-4cd2-a7e4-e47e76595856' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/a95247ec-5cbd-48a3-be5d-9e56447ff26d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/09aed343-b0e3-4e44-a27c-34f420ec39ba' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/6342548e-8e1c-4886-bede-a517e234b56d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/aab480e6-9ed6-4036-bbe7-927e4afbdc61' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/6d961e6a-9a84-45f5-b122-f2079e09cc6e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/8d15fc46-8f42-413b-94cd-547735ead96b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/09e0c711-0cc3-4818-b1c0-e84f8e645d9d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/b93d6d8f-9eaf-4eea-811f-0dfc75ca02dd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/76adb0da-bcb1-4dfa-b945-50c7b5bf81c9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/51d6821d-3d59-41d7-b303-2321eadb1785' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/b819f8b4-d4fa-4940-8564-2ae644c375fc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/f1705995-948b-4b08-9087-f1937c89befd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/b9f98adb-221d-423b-aca5-53d256b8a8e6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/1059c524-b6ab-4a34-a617-3e048bcdbe36' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/fb695d50-dc0d-41fe-a704-d531a88413bf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/e26a9b3d-c17c-4c95-bd28-d6b437ff8097' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/775943bf-b90e-4539-9b9e-76ed3f054b05' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/b74485ec-9e37-46a6-b605-b7319c0d0d2c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/a3c243e1-e296-47a8-b98e-de23aba3cb22' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/5303e626-9d36-4834-9ffb-d6f5aa0cd48d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/57aa3fbd-d8f7-44ac-82d4-c14c95288d3a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/55c65a79-9ed3-4312-a678-8c96c83dc649' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/abd24891-0b6d-4b1e-83f8-7780e2c977f9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/694e84f1-a7af-4aea-8799-3dad2cac6cb3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/829e4992-1e52-4aff-9d40-64e9f75dea12' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/1c9d98a3-f635-4bdc-8f3f-2571e289296f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/d49edcc6-e146-43f5-8127-2fab92d9a1a9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/0cd07ca7-c8d1-4714-b2c2-07d661629e23' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/4bb5679a-5701-48ca-9258-cb746b362455' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/9722a42e-5cd7-432b-9c3e-30adac78c6fd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/105768bf-8f87-4120-b7f8-42d93473bf5c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/b335fe6a-7431-482e-afd8-84a95c04f2cd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/774bcdfc-d7d7-4eb1-b783-2c10ecbb0756' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/04c9dfa1-ef2d-4fa6-b6f2-f59181180cf5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/b871f49b-ed75-4571-b641-950a06674d65' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/bef5b65e-c334-4df8-a59a-cf24bfd372e7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 52) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/b2aa9a22-bd5b-4d98-a978-bc9945be579a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/f4c730d8-9001-4956-bc35-274a47a8dff1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/5744e620-4684-4bfc-93b5-cb8367fb224e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/5a59b845-f73e-4025-97c9-41750493c299' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/e847f743-ff92-4524-a89c-8cf8f0f77dce' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/2adfbf93-4778-4657-9bc0-ecc50282113d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/4be1ca1e-754f-4f07-aecc-de2dd9253525' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/6fa2b034-89c9-4d70-b530-d0277a466545' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/255172b8-a789-4385-846b-eb562624b58d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/6a8006c9-6598-4009-ba0e-7775a92e7103' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/0feb4287-ef1c-497f-868b-5229f76a43c8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/114d19c7-f8c5-4703-86ba-ea3cf9d02fd8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/0be15572-9f4b-4107-aa46-aad9aa1afc79' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/269c2f6f-e5ef-411e-8c63-18d602a9eaa2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/d05c823b-e43a-4140-b862-66c923b2a8d4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/d5082b74-a92f-4c42-a95a-ef3aab436ec4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/7f71bf05-1ea9-4c42-8950-b8dc8f1b6591' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/d5c3c3d6-9fca-4458-b070-0f419ca044c4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/e9c75180-c6a5-461b-aee4-5722db5888da' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/5194ed36-730f-4d08-a19d-652994adf58e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/c40943b0-efde-4e46-930e-5d402aeb7215' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/e67494c1-367f-485f-b03f-da22be2d5ea6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/601c57be-bd7d-4609-b890-a5eacd511a80' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/5e7c4206-dcfc-4d2f-985d-e4acfffd11e7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/233e12df-b334-4ce2-af38-dbad3f54bdcc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/616384fd-afd9-466e-8765-adf26773a4a5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 27:
                    $("#links").append("<a href='https://www.hulu.com/watch/60596642-ca79-4c88-8372-a50d1440f4f8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 28:
                    $("#links").append("<a href='https://www.hulu.com/watch/518f5a79-3f17-4f93-b8ad-6075d861412a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 29:
                    $("#links").append("<a href='https://www.hulu.com/watch/f15b2825-3f36-485a-b5ea-d3c3c6a1a0c1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 30:
                    $("#links").append("<a href='https://www.hulu.com/watch/3f0a044b-7145-4780-8d00-eb5c1c71ca45' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 31:
                    $("#links").append("<a href='https://www.hulu.com/watch/0ceaf8a2-6a6d-4fde-8618-23a3bcbc5e27' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 32:
                    $("#links").append("<a href='https://www.hulu.com/watch/1d78f6f3-faa1-4fab-b09f-b7577fc70f65' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 33:
                    $("#links").append("<a href='https://www.hulu.com/watch/f600f914-0b5a-410e-abc6-0a59dbee3123' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 34:
                    $("#links").append("<a href='https://www.hulu.com/watch/505080da-cf47-4c9b-a1e3-9f487cd489c5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 35:
                    $("#links").append("<a href='https://www.hulu.com/watch/131a7a72-e34a-4d11-b977-ce375f1ba078' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 36:
                    $("#links").append("<a href='https://www.hulu.com/watch/cf479fb7-804b-4c73-a648-1d8f817f9736' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 37:
                    $("#links").append("<a href='https://www.hulu.com/watch/90535c45-a9f2-443e-b5f2-b8de17289bb7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 38:
                    $("#links").append("<a href='https://www.hulu.com/watch/e4f3d4d4-f18b-4fe9-9086-9c2445aeaeef' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 39:
                    $("#links").append("<a href='https://www.hulu.com/watch/c05cb14b-b90a-4a9c-bd7e-6dbc0c8e37af' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 40:
                    $("#links").append("<a href='https://www.hulu.com/watch/a530ca39-7a03-4bb9-b57c-04c6b5035760' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 41:
                    $("#links").append("<a href='https://www.hulu.com/watch/c3426974-0f7d-4323-8e42-513472b8073f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 42:
                    $("#links").append("<a href='https://www.hulu.com/watch/79f8f19e-7152-4681-a79b-145a64b9b33d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 43:
                    $("#links").append("<a href='https://www.hulu.com/watch/01570831-a24e-4d89-beff-02cafaba8b0f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 44:
                    $("#links").append("<a href='https://www.hulu.com/watch/32f62093-6678-4bf4-9a99-9a395ef935a9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 45:
                    $("#links").append("<a href='https://www.hulu.com/watch/bf9fdfae-1e55-463d-84d0-5d8af2cf070d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 46:
                    $("#links").append("<a href='https://www.hulu.com/watch/7c63f469-0a1e-4bb0-a057-2bec6614eb5e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 47:
                    $("#links").append("<a href='https://www.hulu.com/watch/df86e7c0-c947-4189-b72f-7a459f2d6b20' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 48:
                    $("#links").append("<a href='https://www.hulu.com/watch/80b531ee-8c00-4255-a56f-dfedfffa11c3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 49:
                    $("#links").append("<a href='https://www.hulu.com/watch/34b30212-c226-496f-89fa-46ac7e822423' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 50:
                    $("#links").append("<a href='https://www.hulu.com/watch/b5650469-ef80-42f8-b90e-e87dc337561f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 51:
                    $("#links").append("<a href='https://www.hulu.com/watch/9908ec63-2c4d-47f5-89a5-d1a2b7568789' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 52:
                    $("#links").append("<a href='https://www.hulu.com/watch/0fffce81-e950-4500-b9f7-3115e2f2b563' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 42) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/4ba4d6da-2b92-424e-bf48-446f49f963dd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/0a629494-fc63-4187-bd71-3871514e1b1a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/241b97b4-aeb0-4cac-887f-3048ded63693' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/21d490e3-8e3b-4058-ba6a-0a4b837fe691' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/d131fc99-21d4-468e-9059-2bd49b17c5b5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/601f7f64-8332-4c6b-85b8-00b03923980c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/33cfce4f-b615-4a90-b7f0-bc8210e6c622' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/22b29354-95d6-4c65-bd88-553568f01836' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/033d11da-e51d-49b4-9449-f97bfd2e0980' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/b917692e-910b-4564-9ff7-3a0baeb439ed' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/267674c4-c643-48f3-b7b5-433483cf67a0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/2b7be9eb-be4d-4ed1-af7f-30e3d46b1b53' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/c80bebb0-c50e-4a64-bb4c-55c001015b22' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/f79e1d25-77f6-43a5-b721-c94f55cdd9b0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/286b0570-73dc-4f92-bdab-b2eedbf52ce4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/555bc618-b0d8-49f4-aa1d-7baeb7f4fc0e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/e2e84725-4052-4661-a3cb-b5bda8efbed6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/c20790f6-dfb8-4942-b0b5-146315a94fd6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/52be1ec7-b51d-4bd8-bb71-71047d8c789b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/a874567c-805b-4131-8ac9-efbde3aefba4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/412406b9-e7d4-4333-8669-4474ddf57429' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/d016b9e7-b05d-4887-9904-84a09590d265' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/2bd8c84f-2f87-43e6-8bb4-1a8e9b5bfab6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/d4b84e1b-c10c-4d11-9336-808d1f810eaf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/4a619016-9d04-4998-bb31-5cdb5edb2afa' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/2fb0d85c-7428-43be-8cd0-f92120940a51' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 27:
                    $("#links").append("<a href='https://www.hulu.com/watch/74a4efca-0f67-4c57-8047-6f2da280fed6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 28:
                    $("#links").append("<a href='https://www.hulu.com/watch/6fb302dc-c0bd-46d6-9864-962ae465004b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 29:
                    $("#links").append("<a href='https://www.hulu.com/watch/0cabacf2-63f9-4dcc-82b7-47f6ef3879bc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 30:
                    $("#links").append("<a href='https://www.hulu.com/watch/5b5f760a-e214-485e-9ccf-53fd1e932509' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 31:
                    $("#links").append("<a href='https://www.hulu.com/watch/14208e84-01bc-4baa-9bc4-d22eafe3193b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 32:
                    $("#links").append("<a href='https://www.hulu.com/watch/8171c786-6e38-4c3b-b92f-cf2093084e4a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 33:
                    $("#links").append("<a href='https://www.hulu.com/watch/0fbf9cf0-c494-484b-9cbb-4f126dd8a626' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 34:
                    $("#links").append("<a href='https://www.hulu.com/watch/d4c4de1f-b237-4e00-8f29-108eedd2acce' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 35:
                    $("#links").append("<a href='https://www.hulu.com/watch/d17eaf13-c0b1-4ce7-b12f-e229fa2bae35' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 36:
                    $("#links").append("<a href='https://www.hulu.com/watch/cf71a447-8162-46d0-8ba2-3d83bbad86a7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 37:
                    $("#links").append("<a href='https://www.hulu.com/watch/e9887ffb-8e23-4561-984f-ac433ecd5c6a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 38:
                    $("#links").append("<a href='https://www.hulu.com/watch/89ade6e7-b11c-4e39-9d08-90daee3bdd5b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 39:
                    $("#links").append("<a href='https://www.hulu.com/watch/160d5636-e37c-43ad-b25d-2eba6a7279a8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 40:
                    $("#links").append("<a href='https://www.hulu.com/watch/bcb6acba-7d81-474b-ad07-4dcb36218ee2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 41:
                    $("#links").append("<a href='https://www.hulu.com/watch/70403282-2fbf-43bc-bf9d-4464f0b9d1b5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 42:
                    $("#links").append("<a href='https://www.hulu.com/watch/282e9821-6702-47ff-a7b1-9e2332c9ed79' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 25) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/a07e67a7-6a5b-4711-8839-a474e237744f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/1a53bff1-0437-4483-a6e5-a95b5de89e48' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/8330e783-9e7c-4216-aef0-5c07024b8bb0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/418ca425-9e5a-4bc2-829e-98ea5ab8bf3c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/9210337e-6ab2-4044-b7fa-6e3818ccc4f0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/943e714d-05fd-40cd-afd3-ebdd9b4e2ba8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/6f359079-012f-45f6-bbb6-dab0a0f8e01d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/17c0dd33-c4ce-4ff0-bdcb-61203bc0081f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/63c4cbb0-c198-49bb-8b59-87a2aa1cc538' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/e34717ca-048e-4faa-a408-6528e9a98dbd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/0bb126c0-485f-4578-911e-9b002146707d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/3d8758b5-831f-4969-8b0e-c78334055110' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/56798bd5-e32f-4a33-927d-be5b5015a8d1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/07820d94-14d4-4fbe-ad6f-d4d9f24e9663' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/233fc89a-9f44-49a1-9bbc-a7c1fa006ce7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/6cae6b00-cf97-484c-8c36-b8135f4f1548' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/859a97a9-cde3-4473-87d6-d9505384e7fd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/b8674ea5-bcc9-464f-8c53-7576c8c624c9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/73fdec24-4185-4be3-8168-08012538659b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/ed2c978e-95ee-4ae5-9b0c-0689476e2050' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/ea1559d4-aeac-4714-8598-bc36be421ffd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/271f640f-7098-4ebd-a1da-6b7d9b4d0a78' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/f019f654-8e86-426d-ad43-84ddf2890eb9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/52757907-5699-462d-9e48-46a220449538' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/ccdd895b-57b9-40db-9baf-ceeec89dd316' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 27) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/c593fb07-8d0c-4d93-9215-1a6efb3ad92c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/f351ef12-ab3e-4f71-8962-1cdc884cf51c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/d09e339e-2303-466d-8e45-60a744dc3013' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/88e8ac50-a5ae-4966-92c1-73fa8e68c792' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/3122cdb3-664a-43bc-9667-528716e9ba3f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/8f29a095-7939-4a75-ab7a-cd8a41184b3f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/57d6f318-e896-4f73-8ef4-80bbee1232e5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/fa921069-4e92-421e-8661-4271283f6519' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/f4b7a17f-ce12-41be-8dc4-03226027829e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/ead1641b-8fc5-4594-b597-c2098928b792' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/c98ce326-44ca-4f97-bf08-0f82cfa3fc9f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/b0826a10-c84f-44f7-9e7b-3f42f5c3e730' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/b93d2b30-966a-43f8-8555-d21509719551' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/4ef69201-b3d8-41ef-8d25-a553987abcd2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/5484260b-95ec-4e43-9818-8bd563504a76' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/d5aac089-3b50-4cf3-ab65-68dbba5e79cd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/5e8c73c6-2e28-495d-9b7e-b5a1dfc8c034' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/66c288b5-8f27-43f7-9acb-1ff4c4944b8c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/ec1bde68-8186-4deb-b13c-cb68cd93f808' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/1a38999a-71bd-453b-972c-9458ef03ce44' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/42d7a35b-5772-46ee-b509-2851fc111490' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/76ddb0e9-5767-4469-ae95-2b8ba4c0c4c2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/1ee7203f-bce4-410f-bc04-6a8453801692' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.hulu.com/watch/81a8f9b4-ca8b-4a80-946b-be4ef86bab15' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.hulu.com/watch/fa0dccf9-4f00-4e0a-aa6c-9ceba5aacff2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.hulu.com/watch/f0ae8caf-45c1-4f98-8afb-3068692c7533' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 27:
                    $("#links").append("<a href='https://www.hulu.com/watch/6239bbe5-cc85-476d-87f6-842d4630c146' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 14) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/155d4ebd-c69c-4488-ac62-78f5ba37fdc3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/c798e82a-cd3d-4af0-9790-8710aeab326f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/c4649ce9-ea16-4344-9767-0ce3535bec60' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/c421d35f-c4a7-42e8-9923-71b75690c473' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/c42a7037-8733-40e2-9759-3dea9361d0ca' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/cf5ddaa9-ec0f-42b1-8125-3a48999d32e7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/4fc5a22b-f2c0-4e8f-9903-f2df404dffbc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/b07bc3e7-89d5-47c4-8b54-79c018e09176' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/b4726764-66c3-4cfb-a65c-372351c0a2ed' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/ecccd7f4-d900-43b5-a128-0d9cef175cbf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/d7cb34c3-db24-4b0c-8b8d-8c7154e7b994' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/6f3b791f-c8a7-4bb5-b6da-18097e238685' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/4b032fce-91d0-4cd5-932d-05a6f8ee384e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/54544a1d-caad-41c6-b4fc-53c568f06d67' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 9."); break;
            }
            break;
        case 10:
            episode = Math.floor(Math.random() * 13) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/f8450e6f-cb92-463b-873b-b9f4842a1014' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/d4ad8165-151d-4ceb-bae3-3f3fa46e9ae3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/199aad05-98a1-4ce7-8af3-6f083ca0284a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/c273e65d-3aea-4137-bcb9-bbc077d2905d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/877c7ff5-2a6f-4a2b-88a3-5ac9f5d8f3d4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/7f685546-3c64-493e-a3fc-a368bfe1df34' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/8fb5d015-edd7-4cee-8618-9ee3b08eca77' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/e9cd8485-16df-4d39-bc79-3074d872c610' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/4f74eacd-40a5-45dc-acf8-6edc1d24e726' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/3f7d79df-7962-4ec6-ae14-f6df40622ee1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/b16c74de-baf4-42e1-82d9-7af4ec075f36' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/2368f13d-3ece-4f4d-af95-20ce12c8d5f7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/4b12dc97-1311-430d-a5e1-2d34897911c6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Adventure Time in Season 10."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Adventure Time.");
            return 0;
    }
    $("#message").html("Adventure Time<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of Brooklyn Nine-Nine
function randomBrooklynNineNine() {
    const season = Math.floor(Math.random() * 5) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/46acfada-540f-4e0c-b4c9-ee6a7fb1c201' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/f835066b-c678-4e26-9306-51a942005c08' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/13abab33-c1c6-4b87-a2b8-351dfc3b62ca' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/bf6bcd00-b567-4d26-b2dc-c9affabc1c36' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/5fed8d49-2da5-4773-9e91-2a7e0dbf63b8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/051a5990-dbbc-4ce1-9b62-261bc994370e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/419f2579-6b34-4a28-af3d-399a0b3f707e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/8d208f26-c8f6-472d-95ec-075848b669b6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/36db6564-6aab-466e-a61c-2d666eba6f7a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/fa931a4c-3e4d-4953-82c4-89a613850c8c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/cba5c2a7-cefc-4c51-b3b0-c3928c3b5069' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/ec07408e-5334-4b17-89f6-621835e3a437' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/22cf0824-c6c4-4836-afe8-3679272fb06f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/7babc119-c0ff-4604-a79a-0229576e84b2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/d7c6b602-f893-4089-b759-4e234b6de166' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/5f171572-90e8-4be9-9e2d-952a4f2e7089' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/aa029364-6b14-44f9-a4f2-49124d24f804' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/fcb86a1f-8f7d-4be9-9038-41151427d7b5' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/3ba02fa4-faff-4138-8175-1ab4c9f92a4f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/0fa6d456-2006-4c96-a5d8-58cd2776e8d7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/f5596efe-ba6d-4a3c-888d-afc872a5bad9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/a82e1b49-579a-4de6-b782-97129ea986f9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Brooklyn Nine-Nine in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/e1ffcf7f-51fd-446d-9e7e-e640b64972bd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/dc7e2a87-fb09-4949-b1fd-3db1d49224a3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/7e75132f-ce57-4349-95e6-b2ebbe619120' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/ef3f0538-f55b-444f-b97d-e4ab3a0bd317' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/d7cf0dbe-fdbf-41c3-aa64-568677f0e3a9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/beb87470-7bde-4b80-bdb4-169d29ea6947' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/1d813ffb-ed61-4d21-883d-613a64b8cb61' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/b9885317-2c22-484f-a0f0-937f7dd557eb' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/f3bbed7e-dae5-488d-bbe8-4cb23a00c819' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/b725765c-63e1-48fa-af45-4f8a88a1b290' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/1b9f96b7-3458-4086-a2f1-8cb5db67860a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/48a3e1f1-edd6-4c09-b864-8ba17f47c01c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/64280b4a-0d91-44be-8089-28d99e39609b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/fdf10336-ff55-4e46-ab40-1468b74f469e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/936e5d59-a507-427e-8647-8c49ff01faf0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/1b64da02-bee3-4264-b1b9-69efb1c98e6a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/c7bbd2bc-99ff-4b62-85a1-e8fdc1b57c97' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/7ddbe89c-1943-4173-9d0f-33e3fa06fe5c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/294f58ea-46b7-4d38-a510-74b91c2a3890' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/84cffda1-214b-4deb-b57c-e67342b7900b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/802700e3-a290-473c-94ee-58f9b32d7d92' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/4d8a2e1f-1444-47e8-ab30-af104d281ed2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/10f0110d-2468-4920-8d26-2d6c4b9991bd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Brooklyn Nine-Nine in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/bf991336-8c13-45a7-893a-1702a400d0d9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/06fb0963-152b-4bfc-8804-4f90064acb49' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/c8a1ec51-7490-4f5c-b58e-8709b30e8ed2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/56611b8c-ca39-40ce-8378-99ff585bd307' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/7e4cb17b-152f-4580-89bb-22454f9b8945' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/56bca1b3-b643-45f1-bdcd-e13ee0c01b9b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/199e79af-ad65-411f-ad98-cb09202cb083' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/529fdab8-392a-4832-9888-1093e063ae3b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/0d8770bf-ff5f-4e05-a642-cc097a7bae06' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/6ab50c7e-459e-4d55-aa91-37a8b452b56e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/5d5b0035-45e4-4d5e-b1ed-4bed6293a098' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/57de09e7-2fde-4148-81b1-351eb15ef7f7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/020c90e4-badd-49fd-8726-e6c605b70dc8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/c2931668-0b6d-405f-a576-8216ddfbb72f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/8d6ce0e4-0df0-4d45-ac66-944bda7d39a1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/c27c54cf-23e2-487f-bd82-0b2f95327fab' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/b6318f77-89fc-4e97-a34b-1695d0e75f83' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/9e7c0f65-98aa-4f00-848b-30780de46d34' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/110d0228-3fee-44b9-a2f9-5517b28f806b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/863fdd25-07a0-454f-ab86-384949fe3fb9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/8249fa68-7035-4a00-8172-c9bda3c3b5de' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/763b626a-e692-42dd-ae9e-a2c1fdd79c3c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.hulu.com/watch/20c20460-59f5-4470-9b7e-9d724c71bacf' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Brooklyn Nine-Nine in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/b4d2ab80-c9f4-42ee-a369-07ffd07ea1c6' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/1df567bd-1c89-448b-801c-60f1ad1979dc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/343f7806-5f99-4f22-9200-475f6a42cf84' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/0e41cf47-0aa2-4fb6-9f4f-59304b1cff83' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/6ea0b2a4-35f0-4299-8845-c64570b6c9a7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/212a51cc-4221-43c8-b5f0-012e558f81e1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/ee3e8443-7d50-4f29-8e67-9aca899b3da9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/24e84ca6-9281-4eb6-b9cd-20b43e34c708' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/065f6e39-bcfe-4ad7-9d49-db76d718b12b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/e6c44102-31d1-46c0-b85d-eca20b17dbae' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/ac4ed1f2-af2a-44a3-bbd4-8865f5774bc7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/d8b46913-2008-4160-b5cd-5bd1f99863b2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/74db9ab4-b383-4824-8ff2-a46152303454' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/cec3ca82-71d0-42a3-86d8-837298635bcc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/b17f312c-7476-4edb-bc58-d7ed9207a1bc' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/7158ea51-f97d-4ab6-abc4-0b2b6ee5e398' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/4850e5e0-27b8-4260-b770-a9678e739e49' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/d0ec4e1f-ed2a-42d0-b7fa-24b413fb1b5c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/fc6713eb-ab46-4f08-9131-85089cb5473f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/65ab1216-d198-4986-9a4d-5d3a19cc5fa0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/a5644fba-384f-44d0-9dda-3149b91fd5c9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/a9d3f9fb-e161-42ea-b62e-3c0b605d89ec' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Brooklyn Nine-Nine in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/6ef30a50-c93c-4470-aa9b-d5a608afaf75' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/fec883d4-8b02-4f5f-a773-868f42ab7efd' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/8bd4ff7e-5591-4397-870b-d3492da2935e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/fbd99f75-a69e-43d2-a119-04495a2be73b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/ba53e25d-a145-4fc7-b9a9-2872dbf2686f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/775aed64-c09d-41dd-84d3-d3bb9da31212' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/8b63d59c-a8cf-424a-b2a2-f906938d6a26' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/bc850cec-7bf4-4f1d-b107-c2f3fa3a9d0b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/119742e4-c64f-45ac-a2a2-9b234ebe3518' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/cba20988-3fde-44c4-98ce-0718c178686c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/44940213-ed1c-4e44-9814-b2ec291a69fa' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/b18f6fbe-406c-41e3-9f4c-a3cca23cf3af' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/3e05a02e-cb2e-498e-94c7-4638f9c7897b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/17a61e74-cab8-46b3-b4d1-187ea0697b21' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.hulu.com/watch/8cb3b011-f814-4e9b-8854-bd5eca31d226' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.hulu.com/watch/5a103f07-a423-4f71-ac95-dece76be4211' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.hulu.com/watch/e9da5eea-2a2f-49fd-9e08-80b5b9c6dcf8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.hulu.com/watch/bd47a574-edc4-4deb-9970-9e74740973c7' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.hulu.com/watch/a64c387f-6038-499f-8e88-db34a9e7b87b' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.hulu.com/watch/95097e42-e7f6-4f0e-9eb5-f01e8ac625c8' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.hulu.com/watch/daa9b923-9286-436e-b5ab-5ea4ef223fd1' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.hulu.com/watch/180163d3-a21c-425c-9104-5cef6887a450' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Brooklyn Nine-Nine in Season 5."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Brooklyn Nine-Nine.");
            return 0;
    }
    $("#message").html("Brooklyn Nine-Nine<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of Criminal Minds
function randomCriminalMinds() {
    const season = Math.floor(Math.random() * 12) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189583' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189584' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189585' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189586' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189587' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189588' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189589' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189590' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189591' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189592' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189593' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189594' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189595' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189596' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189597' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189598' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189599' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189600' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189601' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189602' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189603' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189604' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189605' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189606' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189607' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189608' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189609' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189610' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189611' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189612' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189613' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189614' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189615' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189616' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189617' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189618' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189619' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189620' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189621' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189622' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189623' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189624' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189625' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189626' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189627' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 20) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189628' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189629' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189630' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189631' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189632' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189633' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189634' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189635' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189636' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189637' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189638' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189639' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189640' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189641' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189642' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189643' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189644' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189645' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189646' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189647' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 26) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189648' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189649' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189650' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189651' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189652' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189653' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189654' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189655' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189656' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189657' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189658' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189659' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189660' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189661' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189662' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189663' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189664' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189665' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189666' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189667' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189668' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189669' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189670' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189671' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 25:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189672' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 26:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189673' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189674' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189675' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189676' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189677' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189678' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189679' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189680' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189681' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189682' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189683' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189684' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189685' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189686' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189687' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189688' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189689' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189690' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189691' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189692' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189693' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189694' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189695' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189696' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189697' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189698' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189699' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189700' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189701' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189702' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189703' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189704' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189705' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189706' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189707' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189708' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189709' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189710' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189711' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189712' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189713' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189714' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189715' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189716' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189717' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189718' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189719' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70189720' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244313' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244314' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244315' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244316' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244317' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244318' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244319' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244320' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244321' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244322' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244323' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244324' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244325' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244326' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244327' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244328' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244329' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244330' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244331' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244332' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244333' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244334' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244335' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70244336' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291438' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291439' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291440' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291441' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291442' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291443' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291444' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291445' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291446' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291447' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291448' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291449' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291450' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291451' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291452' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291453' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291454' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291455' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291456' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291457' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291458' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291459' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291460' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70291461' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 24) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297335' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297336' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297337' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297338' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297339' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297340' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297341' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297342' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297343' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297344' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297345' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297346' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297347' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297348' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297349' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297350' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297351' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297352' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297353' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297354' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297355' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297356' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297357' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 24:
                    $("#links").append("<a href='https://www.netflix.com/watch/70297358' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 9."); break;
            }
            break;
        case 10:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066864' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066865' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066866' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066867' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066869' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066868' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066870' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066871' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066872' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066873' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066874' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066875' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066876' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066877' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066878' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066879' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066880' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066881' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066882' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066883' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066884' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066885' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80066886' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 10."); break;
            }
            break;
        case 11:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076712' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076713' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076714' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076715' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076716' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076717' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076718' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076719' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076720' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076721' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076722' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076723' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076724' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076725' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076726' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076727' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076728' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076729' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076730' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076731' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076732' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80076733' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 11."); break;
            }
            break;
        case 12:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192423' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192424' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192425' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192426' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192427' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192428' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192429' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192430' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192431' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192432' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192433' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192434' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192435' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192436' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192437' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192438' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192439' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192440' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192441' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192442' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192443' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80192444' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Criminal Minds in Season 12."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Criminal Minds.");
            return 0;
    }
    $("#message").html("Criminal Minds<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of Firefly
function randomFirefly() {
    const season = Math.floor(Math.random() * 1) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 14) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/a201099a-2c92-45ec-a23b-62305f72a00e' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/61064efe-9ae6-4f8b-9c8d-dd8bcaa5dfa3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/893bd3ea-79cc-4b7b-9bfa-20aea1b9cf2a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/bcf90424-3131-4c69-ae3e-5e9cb0c28ee4' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/02a0880d-e7e3-4ed4-8deb-055f1df8a930' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/2f9b39c6-8535-4369-8445-0866fafc597f' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/17ac1214-d2b2-4fd9-a6ca-2bee6d151a8a' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/9408fc08-12bf-4000-b206-5a556a257df9' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/934b52fa-87fa-4ed3-bd1b-418401a923ae' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/e22957db-2300-4304-b95b-305ad595fa44' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/f709b6da-f9c8-4d3a-840c-b436ceb98670' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.hulu.com/watch/65977706-7905-4ac8-bb5c-e970577fb5fa' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.hulu.com/watch/a38b9d1e-312d-4d72-b5db-4eb4ac4e3f96' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.hulu.com/watch/49a8047a-b556-4b68-acb4-32c386855582' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Firefly in Season 1."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Firefly.");
            return 0;
    }
    $("#message").html("Firefly<br>Season " + season + ", Episode " + episode);
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

// Displays a random episode of Gilmore Girls
function randomGilmoreGirls() {
    const season = Math.floor(Math.random() * 7) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 21) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014130' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014131' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014132' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014133' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014134' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014135' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014136' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014137' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014138' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014139' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014140' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014141' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014142' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014143' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014144' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014145' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014146' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014147' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014148' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014149' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014150' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014151' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014152' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014153' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014154' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014155' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014156' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014157' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014158' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014159' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014160' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014161' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014162' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014163' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014164' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014165' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014166' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014167' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014168' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014169' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014170' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014171' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014172' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014032' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014033' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014034' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014035' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014036' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014037' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014038' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014039' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014040' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014041' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014042' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014043' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014044' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014045' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014046' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014047' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014048' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014049' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014050' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014051' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014052' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014053' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014213' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014214' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014215' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014216' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014217' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014218' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014219' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014220' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014221' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014222' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014223' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014224' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014225' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014226' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014227' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014228' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014229' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014230' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014231' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014232' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014233' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014234' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014235' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014236' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014237' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014238' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014239' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014240' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014241' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014242' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014243' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014244' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014245' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014246' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014247' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014248' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014249' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014250' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014251' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014252' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014253' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014254' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014255' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014256' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014054' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014055' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014056' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014057' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014058' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014059' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014060' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014061' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014062' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014063' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014064' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014065' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014066' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014067' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014068' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014069' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014070' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014071' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014072' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014073' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014074' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014075' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014257' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014258' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014259' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014260' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014261' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014262' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014263' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014264' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014265' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014266' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014267' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014268' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014269' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014270' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014271' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014272' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014273' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014274' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014275' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014276' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014277' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80014278' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Gilmore Girls in Season 7."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Gilmore Girls.");
            return 0;
    }
    $("#message").html("Gilmore Girls<br>Season " + season + ", Episode " + episode);
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

// Displays a random episode of Rick and Morty
function randomRickAndMorty() {
    const season = Math.floor(Math.random() * 3) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 11) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/ea0def9a-afa3-4371-b126-964e1c6bea89' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/6371accb-5c71-41a4-a3ce-a26f58adf14c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/7e97bd68-25c6-41cf-bc81-aa8650d4825c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/60bde394-1872-458c-87fa-6705bba6a7e0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/2d050766-5cb3-49b3-ae4d-1aec017ce02d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/c07fda98-673e-4792-a150-f6eee35ba6e0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/1c982351-67d4-4736-b5a4-40f1c2623733' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/e0b6c38f-5629-424e-8244-eded87dddf70' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/7bc00d93-5bd1-4baa-990f-0d51ba27e5c3' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/efc082d5-939c-47fc-adfa-2ccb09da394c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.hulu.com/watch/ee3932ae-9d35-4292-bb0d-b805fffe268d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Rick and Morty in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 10) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/85ffce47-28ab-42f5-8b12-b229b9a45239' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/4e625179-532a-4e87-b430-e32319912712' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/4c094576-f039-4dda-8f61-e4ef7bc53661' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/7024b555-a9ef-475f-8c28-540c456c662c' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/abb6ddc5-759d-4247-9c28-dedb5fc62850' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/61e92c30-df09-4716-8861-d6a554cd9688' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/18969ba4-e88d-4c72-b66a-32ae0bcc441d' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/ce5011b2-0f2e-4477-a4d2-0a2609e34d93' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/a594c44f-c953-46ba-b813-ef5506d5f480' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/049ba339-8ce1-4ac1-bc88-531a852a4b57' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Rick and Morty in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 10) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.hulu.com/watch/21b73ec5-f021-498f-8808-a6bb7a460867' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.hulu.com/watch/272cade0-f4db-4894-97fe-2f4811905131' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.hulu.com/watch/35bc0ce3-ee62-4882-8aa5-959cce5b06e0' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.hulu.com/watch/4b16cfca-82cb-472e-90a7-6fa9ec2d1248' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.hulu.com/watch/6c616f79-0619-41e6-9a9c-b0b7b56ad8ff' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.hulu.com/watch/84c74c50-fbe0-499c-b430-85e060fd4371' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.hulu.com/watch/87019c0c-9799-40ae-9386-cd139b6190aa' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.hulu.com/watch/92adadab-9328-4e6b-bb46-9e05887f4638' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.hulu.com/watch/c35e428c-82fd-4210-ab2d-07b1af234810' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.hulu.com/watch/f71f9e02-c392-4bc3-908c-c55a97b441d2' target='_blank' class='btn btn-success'>Hulu</a>");
                    break;
                default: $("#message").html("Something done goofed with Rick and Morty in Season 3."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Rick and Morty.");
            return 0;
    }
    $("#message").html("Rick and Morty<br>Season " + season + ", Episode " + episode);
}

// Displays a random episode of Supernatural
function randomSupernatural() {
    const season = Math.floor(Math.random() * 13) + 1;
    var episode;
    switch (season) {
        case 1:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223016' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223017' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223018' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223019' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223020' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223021' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223022' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223023' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223024' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223025' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223026' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223027' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223028' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223029' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223030' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223031' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223032' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223033' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223034' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223035' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223036' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223037' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 1."); break;
            }
            break;
        case 2:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223052' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223053' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223054' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223055' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223056' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223057' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223058' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223059' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223060' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223061' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223062' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223063' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223064' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223065' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223066' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223067' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223068' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223069' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223070' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223071' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223072' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223073' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 2."); break;
            }
            break;
        case 3:
            episode = Math.floor(Math.random() * 16) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223074' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223075' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223076' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223077' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223078' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223079' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223080' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223081' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223082' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223083' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223084' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223085' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223086' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223087' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223088' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223089' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 3."); break;
            }
            break;
        case 4:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223090' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223091' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223092' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223093' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223094' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223095' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223096' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223097' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223098' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223099' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223100' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223101' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223102' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223103' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223104' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223105' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223106' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223107' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223108' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223109' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223110' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223111' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 4."); break;
            }
            break;
        case 5:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223112' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223113' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223114' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223115' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223116' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223117' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223118' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223119' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223120' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223121' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223122' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223123' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223124' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223125' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223126' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223127' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223128' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223129' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223130' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223131' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223132' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223133' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 5."); break;
            }
            break;
        case 6:
            episode = Math.floor(Math.random() * 22) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223134' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223135' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223136' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223137' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223138' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223139' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223140' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223141' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223142' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223143' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223144' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223145' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223146' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223147' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223148' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223149' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223150' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223151' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223152' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223153' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223154' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70223155' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 6."); break;
            }
            break;
        case 7:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245740' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245741' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245742' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245743' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245744' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245745' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245746' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245747' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245748' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245749' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245750' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245751' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245752' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245753' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245754' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245755' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245756' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245757' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245758' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245759' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245760' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245761' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70245762' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 7."); break;
            }
            break;
        case 8:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283544' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283545' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283546' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283547' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283548' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283549' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283550' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283551' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283552' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283553' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283554' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283555' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283556' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283557' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283558' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283559' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283560' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283561' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283562' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283563' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283564' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283565' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/70283566' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 8."); break;
            }
            break;
        case 9:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004183' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004184' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004185' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004186' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004187' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004188' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004189' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004190' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004191' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004192' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004193' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004194' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004195' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004196' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004197' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004198' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004199' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004500' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004501' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004502' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004503' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004504' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80004505' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 9."); break;
            }
            break;
        case 10:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061133' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061134' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061135' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061136' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061137' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061138' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061139' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061140' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061141' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061142' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061143' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061144' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061145' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061146' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061147' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061148' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061149' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061150' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061151' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061152' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061153' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061154' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80061155' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 10."); break;
            }
            break;
        case 11:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120451' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120452' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120453' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120454' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120455' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120456' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120457' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120458' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120459' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120460' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120461' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120462' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120463' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120464' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120465' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120466' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120467' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120468' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120469' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120470' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120471' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120472' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80120473' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 11."); break;
            }
            break;
        case 12:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144941' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144942' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144943' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144944' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144945' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144946' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144947' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144948' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144949' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144950' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144951' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144952' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144953' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144954' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144955' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144956' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144957' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144958' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144959' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144960' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144961' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80144962' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80188885' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 12."); break;
            }
            break;
        case 13:
            episode = Math.floor(Math.random() * 23) + 1;
            switch (episode) {
                case 1:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216345' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 2:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216346' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 3:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216347' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 4:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216348' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 5:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216349' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 6:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216350' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 7:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216351' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 8:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216352' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 9:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216353' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 10:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216354' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 11:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216356' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 12:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216355' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 13:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216357' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 14:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216358' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 15:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216359' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 16:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216360' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 17:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216361' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 18:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216362' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 19:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216363' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 20:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216364' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 21:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216365' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 22:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216366' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                case 23:
                    $("#links").append("<a href='https://www.netflix.com/watch/80216367' target='_blank' class='btn btn-danger'>Netflix</a>");
                    break;
                default: $("#message").html("Something done goofed with Supernatural in Season 13."); break;
            }
            break;
        default:
            $("#message").html("Something done goofed with Supernatural.");
            return 0;
    }
    $("#message").html("Supernatural<br>Season " + season + ", Episode " + episode);
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
