$(document).ready(function(){
	
	alert("")
	var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 6,
                center: { lat: 21.1458, lng: 79.0882 }
            });
            directionsDisplay.setMap(map);
})