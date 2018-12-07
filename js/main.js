$(document).ready(function() {
    $(".search-hotels-button").click(function(e) {
        $("#search-hotels").css("display", "none");
		$("#conradHotelInformation").css("display", "none");
		$("#waldorfHotelInformation").css("display", "none");
		$("#exeMoncloaHotelInformation").css("display", "none");
		$("#versallesHotelInformation").css("display", "none");
        $("#hotel-results").fadeIn("slow");
    });


})

function showTravelExperiences(){
        $("#hotel-results").css("display", "none");
		$("#favourite-list").css("display", "none");
		$("#conradHotelInformation").css("display", "none");
		$("#waldorfHotelInformation").css("display", "none");
		$("#exeMoncloaHotelInformation").css("display", "none");
		$("#versallesHotelInformation").css("display", "none");
        $("#search-hotels").css("display", "none");
		$("#collaborative-list").css("display", "none");
		$("#search-box").css("display", "none");
		$("#travel-experiences").fadeIn("slow");
  }

  function showCollaborativeList(){
        $("#hotel-results").css("display", "none");
		$("#favourite-list").css("display", "none");
		$("#conradHotelInformation").css("display", "none");
		$("#waldorfHotelInformation").css("display", "none");
		$("#exeMoncloaHotelInformation").css("display", "none");
		$("#versallesHotelInformation").css("display", "none");
        $("#search-hotels").css("display", "none");
		$("#travel-experiences").css("display", "none");
		$("#search-box").css("display", "none");
		$("#collaborative-list").fadeIn("slow");
  }

function showHotelSearch(){
        $("#hotel-results").css("display", "none");
		$("#favourite-list").css("display", "none");
		$("#conradHotelInformation").css("display", "none");
		$("#waldorfHotelInformation").css("display", "none");
		$("#exeMoncloaHotelInformation").css("display", "none");
		$("#versallesHotelInformation").css("display", "none");
		$("#collaborative-list").css("display", "none");
		$("#travel-experiences").css("display", "none");
		$("#search-box").fadeIn("slow");
        $("#search-hotels").fadeIn("slow");
  }
  
  
function showFavouriteList(){
	 $("#search-hotels").css("display", "none");
     $("#hotel-results").css("display", "none");
	 $("#conradHotelInformation").css("display", "none");
	 $("#waldorfHotelInformation").css("display", "none");
	 $("#exeMoncloaHotelInformation").css("display", "none");
	 $("#versallesHotelInformation").css("display", "none");
	 $("#travel-experiences").css("display", "none");
	 $("#collaborative-list").css("display", "none");
	 $("#search-box").css("display", "none");
	 $("#favourite-list").fadeIn("slow");
}
//Functions for deleting the hotels from the favourote list
function deleteConradFavourite(){
	  document.getElementById('conradFavourite').style.display='none';
}
function deleteWaldorfFavourite(){
	  document.getElementById('waldorfFavourite').style.display='none';
}
function deleteExeMoncloaFavourite(){
	  document.getElementById('exeMoncloaFavourite').style.display='none';
}
function deleteVersallesFavourite(){
	  document.getElementById('versallesFavourite').style.display='none';
}
//Functions for adding the hotels to the favourite list
function deleteConradFavourite(){
	  document.getElementById('conradFavourite').style.display='block';
}
function addWaldorfFavourite(){
	  document.getElementById('waldorfFavourite').style.display='block';
}
function addExeMoncloaFavourite(){
	  document.getElementById('exeMoncloaFavourite').style.display='block';
}
function addVersallesFavourite(){
	  document.getElementById('versallesFavourite').style.display='block';
}

function startFav(){
	document.getElementById('exeMoncloaFavourite').style.display='none';
	document.getElementById('versallesFavourite').style.display='none';
}	

//Functions for showing the full information of  a hotel
function showConradInfo(){
	 $("#hotel-results").css("display", "none");
	 $("#search-box").css("display", "none");
	 $("#conradHotelInformation").fadeIn("slow");

}
function showWaldorfInfo(){
	 $("#hotel-results").css("display", "none");
	 $("#search-box").css("display", "none");
	 $("#waldorfHotelInformation").fadeIn("slow");
}
function showExeMoncloaInfo(){
	 $("#hotel-results").css("display", "none");
	 $("#search-box").css("display", "none");
	 $("#exeMoncloaHotelInformation").fadeIn("slow");
}
function showVersallesInfo(){
	 $("#hotel-results").css("display", "none");
	 $("#search-box").css("display", "none");
	 $("#versallesHotelInformation").fadeIn("slow");
}
