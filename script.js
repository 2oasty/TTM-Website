function revealText() {
    var hiddenText = document.getElementById("hiddenText");
    var textButton = document.getElementById("textButton");

    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        textButton.innerHTML = "-";
        textButton.style.paddingLeft = "9px";
        textButton.style.paddingRight = "9px";
    }
    else {
        hiddenText.style.display = "none";
        textButton.innerHTML = "+";
        textButton.style.paddingLeft = "6px";
        textButton.style.paddingRight = "6px";
    }
}