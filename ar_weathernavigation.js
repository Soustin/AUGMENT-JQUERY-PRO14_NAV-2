var coordinates = {

};
$(document).ready(function (){
    getCoords();
})

function getCoords() {
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has("source") && searchParams.has("destination")){
        let source = searchParams.get("source");
        let destination = searchParams.get("destination");

        coordinates.source_lat = source.split(";")[0];
        coordinates.source_lng = source.split(";")[1];
        coordinates.destination_lat = destination.split(";")[0];
        coordinates.destination_lng = destination.split(';')[1];
    } else{
        alert("Coordinates not selected");
        window.history.back();
    }
}