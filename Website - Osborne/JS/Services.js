document.getElementById("service-wheels").onmouseover = function() {mouseOver()};
document.getElementById("service-wheels").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("description-wheels").style.opacity = '1';
}

function mouseOut() {
    document.getElementById("description-wheels").style.opacity = '0';
}