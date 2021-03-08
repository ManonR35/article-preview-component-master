$(function(){

function showSocial(){
    $("#social").css("display", "flex");
}

$(".share a").on("click", showSocial);

function hideSocial(){
    $("#social").css("display", "none");
}

$("#social").on("click", hideSocial);

});