$(document).ready(function() {
    $(".search-hotels-button").click(function(e) {
        $("#search-hotels").css("display", "none");
        $("#hotel-results").fadeIn("slow");
    });


})