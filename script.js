//Reveal text on click
function revealText() {
    var hiddenSection = document.getElementById("hiddenSection");
    var textButton = document.getElementById("textButton");

    if (hiddenSection.style.display === "none") {
        hiddenSection.style.display = "block";
        textButton.innerHTML = "-";
        textButton.style.paddingLeft = "9px";
        textButton.style.paddingRight = "9px";
    }
    else {
        hiddenSection.style.display = "none";
        textButton.innerHTML = "+";
        textButton.style.paddingLeft = "6px";
        textButton.style.paddingRight = "6px";
    }

}

//Google Map (works on local .html but no Github pages)
  let map;

  async function initMap() {
    // The location of The Time Machine
    const position = { lat: 34.20620, lng: -118.22956 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
  
    // The map, centered at The Time Machine
    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  
    // The marker, positioned at The Time Machine
    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "The Time Machine",
    });
  }
  
  initMap();
