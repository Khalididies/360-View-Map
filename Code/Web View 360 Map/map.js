
panorama.addEventListener("", function(){
});
panorama.addEventListener("", function(){
});

function myFun2() {
  var x = document.getElementsByClassName("div2");
  var i;
}
function myFun() {
  var x = document.getElementsByClassName("div2");
  var i;
}
function myFunction2() {
   var x = document.getElementById("firstpage");
}
var mymap = L.map('mapid').setView([31.75579, 35.25976], 17);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
	}).addTo(mymap);

	//add circles
var circle1 = L.circle([31.75579, 35.25976], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(mymap);

var popup = L.popup();

function onMapClick(e) {
	alert("You clicked the map at " + e.latlng);
}
function chim1() {
	var x = document.getElementsByClassName("cam");
	x[0].style.background = "";
	x[0].style.width="100%";
	x[0].style.height="100%";
	x[0].style.backgroundSize ="100% 100%";
}

//add circles
    circle1.on('click', onMapClick);
	circle1.on('click', myFun);
	circle1.on('click',chim1);