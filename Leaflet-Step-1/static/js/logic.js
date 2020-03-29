
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// fetch the json data 

d3.json(url,function(data) {
    //console.log(data.features);
    createFeatures(data.features);
        
    });
   
//Create function      
function createMap(earthquakes) {

// Create the tile layer that will be the background of our map  
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

var baseMaps = {
  "Street Map" : streetmap,
  "Dark Map" : darkmap
};

// create overlay object to hold overlay layer

var overlayMaps = {
  Earthquakes: earthquakes
};

 
 // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
 L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);

}


