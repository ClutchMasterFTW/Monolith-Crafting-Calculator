var versionAlert = 0;
function deprecated() {
    if(versionAlert == 0) {
        versionInterval = setInterval(deprecatedFadeIn, 10);
        versionAlert = 1;
    }
}

var opacity = 0;
function deprecatedFadeIn() {
    if(opacity <= 90) {
        document.getElementById("version-warning-container").style.visibility = "visible";
        document.getElementById("version-warning-container").style.opacity = opacity + "%";
        opacity++;
    } else {
        clearInterval(versionInterval);
    }
}

function versionCloseWarning() {
    document.getElementById("version-warning-container").style.visibility = "hidden";
}