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