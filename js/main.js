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

})

// function tryLogin() {

//     if ($("#login")[0].checkValidity()) {
//         console.log("yay");
//         window.location.href = "home-logged-in.html";
//     } else {
//         console.log("ny")
//         $("#login").trigger('submit');
//     }
// }