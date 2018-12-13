$(document).ready(function() {
    $(".search-hotels-button").click(function(e) {
        $("#search-hotels").css("display", "none");
        $("#hotel-results").fadeIn("slow");
        $("#new-search").fadeIn("fast");
    });

    $("#new-search").click(function() {
        $("#hotel-results").css("display", "none");
        $("#new-search").fadeOut("fast");
        $("#search-hotels").fadeIn("slow");
    });
    console.log(document.cookie);

    $("#open-modal").click(function(e) {
        if (e.target === this)
            window.location.href = '#';
    })

    $("#username").text(document.cookie);

})

function tryLogin() {

    if ($("#login")[0].checkValidity()) {
        console.log("yay");
        document.cookie = $("#un-login").val();
        window.location.href = "home-logged-in.html";
    } else {
        console.log("ny");
        debugger;
        $("#login-submit").trigger('click');
    }
}

function tryRegister() {

    if ($("#register")[0].checkValidity()) {
        console.log("yay");
        document.cookie = $("#fn-reg").val() + " " + $("#ln-reg").val();
        window.location.href = "home-logged-in.html";
    } else {
        console.log("ny");
        debugger;
        $("#register-submit").trigger('click');
    }

}




$(document).ready(function() {
    $(".search-travels-button").click(function(a) {
        $("#search-travels").css("display", "none");
        $("#conradHotelInformation").css("display", "none");
        $("#waldorfHotelInformation").css("display", "none");
        $("#exeMoncloaHotelInformation").css("display", "none");
        $("#versallesHotelInformation").css("display", "none");
        $("#travelMantaInformation").css("display", "none");
        $("#travelRomeInformation").css("display", "none");
        $("#travelSailDayInformation").css("display", "none");
        $("#travelMexicoInformation").css("display", "none");
        $("#travel-results").fadeIn("slow");
    });


})

function showHotelSearch() {
    $("#favourite-list").css("display", "none");
    $("#conradHotelInformation").css("display", "none");
    $("#waldorfHotelInformation").css("display", "none");
    $("#exeMoncloaHotelInformation").css("display", "none");
    $("#versallesHotelInformation").css("display", "none");
    $("#collaborative-list").css("display", "none");
    $("#travel-experiences").css("display", "none");
    $("#travelMantaInformation").css("display", "none");
    $("#travelRomeInformation").css("display", "none");
    $("#travelSailDayInformation").css("display", "none");
    $("#travelMexicoInformation").css("display", "none");
    $(".seach-box").show();
    $(".breadcrumbs").children().removeClass("tab-selected");
    $("#bc-h").addClass("tab-selected");

    $("#Hotels").fadeIn("slow");
}

function showTravelExperiences() {
    $("#Hotels").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#conradHotelInformation").css("display", "none");
    $("#waldorfHotelInformation").css("display", "none");
    $("#exeMoncloaHotelInformation").css("display", "none");
    $("#versallesHotelInformation").css("display", "none");
    $("#collaborative-list").css("display", "none");
    $("#travelMantaInformation").css("display", "none");
    $("#travelRomeInformation").css("display", "none");
    $("#travelSailDayInformation").css("display", "none");
    $("#travelMexicoInformation").css("display", "none");
    $("#travel-results").css("display", "none");
    $(".show-search-box").css("display", "block");
    $(".breadcrumbs").children().removeClass("tab-selected");
    $("#bc-t").addClass("tab-selected");


    $("#travel-experiences").fadeIn("slow");
    $("#search-travels").fadeIn("slow");
}

function showCollaborativeList() {
    $("#Hotels").css("display", "none");
    $("#travel-experiences").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#conradHotelInformation").css("display", "none");
    $("#waldorfHotelInformation").css("display", "none");
    $("#exeMoncloaHotelInformation").css("display", "none");
    $("#versallesHotelInformation").css("display", "none");
    $("#travelMantaInformation").css("display", "none");
    $("#travelRomeInformation").css("display", "none");
    $("#travelSailDayInformation").css("display", "none");
    $("#travelMexicoInformation").css("display", "none");
    $(".breadcrumbs").children().removeClass("tab-selected");
    $("#bc-c").addClass("tab-selected");


    $("#collaborative-list").fadeIn("slow");
}




function showFavouriteList() {
    $("#Hotels").css("display", "none");
    $("#conradHotelInformation").css("display", "none");
    $("#waldorfHotelInformation").css("display", "none");
    $("#exeMoncloaHotelInformation").css("display", "none");
    $("#versallesHotelInformation").css("display", "none");
    $("#travel-experiences").css("display", "none");
    $("#travelMantaInformation").css("display", "none");
    $("#travelRomeInformation").css("display", "none");
    $("#travelSailDayInformation").css("display", "none");
    $("#travelMexicoInformation").css("display", "none");
    $("#collaborative-list").css("display", "none");
    $(".breadcrumbs").children().removeClass("tab-selected");
    $("#bc-f").addClass("tab-selected");

    $("#favourite-list").fadeIn("slow");
}
//Functions for deleting the hotels from the favourote list
function deleteConradFavourite() {
    document.getElementById('conradFavourite').style.display = 'none';
}

function deleteWaldorfFavourite() {
    document.getElementById('waldorfFavourite').style.display = 'none';
}

function deleteExeMoncloaFavourite() {
    document.getElementById('exeMoncloaFavourite').style.display = 'none';
}

function deleteVersallesFavourite() {
    document.getElementById('versallesFavourite').style.display = 'none';
}
//Functions for adding the hotels to the favourite list
function addConradFavourite() {
    document.getElementById('conradFavourite').style.display = 'block';
}

function addWaldorfFavourite() {
    document.getElementById('waldorfFavourite').style.display = 'block';
}

function addExeMoncloaFavourite() {
    document.getElementById('exeMoncloaFavourite').style.display = 'block';
}

function addVersallesFavourite() {
    document.getElementById('versallesFavourite').style.display = 'block';
}


//Functions for showing the full information of  a hotel
function showConradInfo() {
    $("#Hotels").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#conradHotelInformation").fadeIn("slow");

}

function showWaldorfInfo() {
    $("#Hotels").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#waldorfHotelInformation").fadeIn("slow");
}

function showExeMoncloaInfo() {
    $("#Hotels").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#exeMoncloaHotelInformation").fadeIn("slow");
}

function showVersallesInfo() {
    $("#Hotels").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#versallesHotelInformation").fadeIn("slow");
}

//Functions to show comments or ratings of a hotel
function showCommentsConrad() {
    $("#ratingsConrad").css("display", "none");
    $("#commentsConrad").fadeIn("slow");
}

function showCommentsWaldorf() {
    $("#ratingsWaldorf").css("display", "none");
    $("#commentsWaldorf").fadeIn("slow");
}

function showCommentsExeMoncloa() {
    $("#ratingsExeMoncloa").css("display", "none");
    $("#commentsExeMoncloa").fadeIn("slow");
}

function showCommentsVersalles() {
    $("#ratingsVersalles").css("display", "none");
    $("#commentsVersalles").fadeIn("slow");
}

function showRatingsConrad() {
    $("#commentsConrad").css("display", "none");
    $("#ratingsConrad").fadeIn("slow");
}

function showRatingsWaldorf() {
    $("#commentsWaldorf").css("display", "none");
    $("#ratingsWaldorf").fadeIn("slow");
}

function showRatingsExeMoncloa() {
    $("#commentsExeMoncloa").css("display", "none");
    $("#ratingsExeMoncloa").fadeIn("slow");
}

function showRatingsVersalles() {
    $("#commentsVersalles").css("display", "none");
    $("#ratingsVersalles").fadeIn("slow");
}
//Functions for showing the full information of a travel experiences
function showNightDiveInfo() {
    $("#travel-results").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#travelMantaInformation").fadeIn("slow");
}

function showRomeInfo() {
    $("#travel-results").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#search-box").css("display", "none");
    $("#travelRomeInformation").fadeIn("slow");
}

function showSailDayInfo() {
    $("#travel-results").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#travelSailDayInformation").fadeIn("slow");
}

function showMexicoInfo() {
    $("#travel-results").css("display", "none");
    $("#search-box").css("display", "none");
    $("#favourite-list").css("display", "none");
    $("#travelMexicoInformation").fadeIn("slow");
}

//Function for showing the lists 
function myLists() {
    var x = document.getElementById("lists").value;
    if (x == "List 1") {
        showList1();
    }
    if (x == "List 2") {
        showList2();
    }
    if (x == "List 3") {
        showList3();
    }
}

function showList1() {
    $(".list").css("display", "none");
    $("#list1").fadeIn("slow");
}

function showList2() {
    $(".list").css("display", "none");
    $("#list2").fadeIn("slow");
}

function showList3() {
    $(".list").css("display", "none");
    $("#list3").fadeIn("slow");
}

//Function for showing and hiding the users of the collaborative lists

function showUsers() {
    $(".users").css("padding-right", "1%");
    var x = document.getElementById("lists").value;
    if (x == "List 1") {
        showUsersList1();
    }
    if (x == "List 2") {
        showUsersList2();
    }
    if (x == "List 3") {
        showUsersList3();
    }
}

function hideUsers() {
    $(".user-list").css("display", "none");
    $(".users").css("padding-right", "18%");
}

function showUsersList1() {
    $(".user-list").css("display", "none");
    $("#user-list1").fadeIn("slow");
}

function showUsersList2() {
    $(".user-list").css("display", "none");
    $("#user-list2").fadeIn("slow");
}

function showUsersList3() {
    $(".user-list").css("display", "none");
    $("#user-list3").fadeIn("slow");
}

//functions for deleting travele experiences or hotels from the collaborative lists
//LIST 1
function deleteConradList1() {
    document.getElementById('conradList1').style.display = 'none';
}

function deleteWaldorfList1() {
    document.getElementById('waldorfList1').style.display = 'none';
}

function deleteExeMoncloaList1() {
    document.getElementById('exeMoncloaList1').style.display = 'none';
}

function deleteVersallesList1() {
    document.getElementById('versallesList1').style.display = 'none';
}

function deleteMantaList1() {
    document.getElementById('mantaList1').style.display = 'none';
}

function deleteMexicoList1() {
    document.getElementById('mexicoList1').style.display = 'none';
}

function deleteRomeList1() {
    document.getElementById('romeList1').style.display = 'none';
}

function deleteCamdenList1() {
    document.getElementById('camdenList1').style.display = 'none';
}
//LIST 2
function deleteConradList2() {
    document.getElementById('conradList2').style.display = 'none';
}

function deleteWaldorfList2() {
    document.getElementById('waldorfList2').style.display = 'none';
}

function deleteExeMoncloaList2() {
    document.getElementById('exeMoncloaList2').style.display = 'none';
}

function deleteVersallesList2() {
    document.getElementById('versallesList2').style.display = 'none';
}

function deleteMantaList2() {
    document.getElementById('mantaList2').style.display = 'none';
}

function deleteMexicoList2() {
    document.getElementById('mexicoList2').style.display = 'none';
}

function deleteRomeList2() {
    document.getElementById('romeList2').style.display = 'none';
}

function deleteCamdenList2() {
    document.getElementById('camdenList2').style.display = 'none';
}
//LIST 3
function deleteConradList3() {
    document.getElementById('conradList3').style.display = 'none';
}

function deleteWaldorfList3() {
    document.getElementById('waldorfList3').style.display = 'none';
}

function deleteExeMoncloaList3() {
    document.getElementById('exeMoncloaList3').style.display = 'none';
}

function deleteVersallesList3() {
    document.getElementById('versallesList3').style.display = 'none';
}

function deleteMantaList3() {
    document.getElementById('mantaList3').style.display = 'none';
}

function deleteMexicoList3() {
    document.getElementById('mexicoList3').style.display = 'none';
}

function deleteRomeList3() {
    document.getElementById('romeList3').style.display = 'none';
}

function deleteCamdenList3() {
    document.getElementById('camdenList3').style.display = 'none';
}
//functions for adding travele experiences or hotels from the collaborative lists
//LIST 1
function addConradList1() {
    document.getElementById('conradList1').style.display = 'block';
}

function addWaldorfList1() {
    document.getElementById('waldorfList1').style.display = 'block';
}

function addExeMoncloaList1() {
    document.getElementById('exeMoncloaList1').style.display = 'block';
}

function addVersallesList1() {
    document.getElementById('versallesList1').style.display = 'block';
}

function addMantaList1() {
    document.getElementById('mantaList1').style.display = 'block';
}

function addMexicoList1() {
    document.getElementById('mexicoList1').style.display = 'block';
}

function addRomeList1() {
    document.getElementById('romeList1').style.display = 'block';
}

function addCamdenList1() {
    document.getElementById('camdenList1').style.display = 'block';
}
//LIST 2
function addConradList2() {
    document.getElementById('conradList2').style.display = 'block';
}

function addWaldorfList2() {
    document.getElementById('waldorfList2').style.display = 'block';
}

function addExeMoncloaList2() {
    document.getElementById('exeMoncloaList2').style.display = 'block';
}

function addVersallesList2() {
    document.getElementById('versallesList2').style.display = 'block';
}

function addMantaList2() {
    document.getElementById('mantaList2').style.display = 'block';
}

function addMexicoList2() {
    document.getElementById('mexicoList2').style.display = 'block';
}

function addRomeList2() {
    document.getElementById('romeList2').style.display = 'block';
}

function addCamdenList2() {
    document.getElementById('camdenList2').style.display = 'block';
}
//LIST 3
function addConradList3() {
    document.getElementById('conradList3').style.display = 'block';
}

function addWaldorfList3() {
    document.getElementById('waldorfList3').style.display = 'block';
}

function addExeMoncloaList3() {
    document.getElementById('exeMoncloaList3').style.display = 'block';
}

function addVersallesList3() {
    document.getElementById('versallesList3').style.display = 'block';
}

function addMantaList3() {
    document.getElementById('mantaList3').style.display = 'block';
}

function addMexicoList3() {
    document.getElementById('mexicoList3').style.display = 'block';
}

function addRomeList3() {
    document.getElementById('romeList3').style.display = 'block';
}

function addCamdenList3() {
    document.getElementById('camdenList3').style.display = 'block';
}

//Functions for deleting the travel experiences from the favourote list
function deleteMantaFavourite() {
    document.getElementById('mantaFavourite').style.display = 'none';
}

function deleteCamdenFavourite() {
    document.getElementById('camdenFavourite').style.display = 'none';
}

function deleteMexicoFavourite() {
    document.getElementById('mexicoFavourite').style.display = 'none';
}

function deleteRomeFavourite() {
    document.getElementById('romeFavourite').style.display = 'none';
}
//Functions for adding the travel expereicnes to the favourite list
function addMantaFavourite() {
    document.getElementById('mantaFavourite').style.display = 'block';
}

function addCamdenFavourite() {
    document.getElementById('camdenFavourite').style.display = 'block';
}

function addMexicoFavourite() {
    document.getElementById('mexicoFavourite').style.display = 'block';
}

function addRomeFavourite() {
    document.getElementById('romeFavourite').style.display = 'block';
}
//functions for showing the list to which we can add the hotel or travel experience
function ShowListsConrad() {
    document.getElementById('addToListConrad').style.display = 'none';
    document.getElementById('conradLists').style.display = 'block';
}

function ShowListsWaldorf() {
    document.getElementById('addToListWaldorf').style.display = 'none';
    document.getElementById('waldorfLists').style.display = 'block';
}

function ShowListsExeMoncloa() {
    document.getElementById('addToListExeMoncloa').style.display = 'none';
    document.getElementById('exeMoncloaLists').style.display = 'block';
}

function ShowListsVersalles() {
    document.getElementById('addToListVersalles').style.display = 'none';
    document.getElementById('versallesLists').style.display = 'block';
}

function ShowListsRome() {
    document.getElementById('addToListRome').style.display = 'none';
    document.getElementById('romeLists').style.display = 'block';
}

function ShowListsManta() {
    document.getElementById('addToListManta').style.display = 'none';
    document.getElementById('mantaLists').style.display = 'block';
}

function ShowListsCamden() {
    document.getElementById('addToListCamden').style.display = 'none';
    document.getElementById('camdenLists').style.display = 'block';
}

function ShowListsMexico() {
    document.getElementById('addToListMexico').style.display = 'none';
    document.getElementById('mexicoLists').style.display = 'block';
}

function ChangeUrl(page, url) {
    if (typeof(history.pushState) != "undefined") {
        var obj = { Page: page, Url: url };
        history.pushState(obj, obj.Page, obj.Url);
    } else {
        alert("Browser does not support HTML5.");
    }
}