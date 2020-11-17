//Wheels
document.getElementById("service-wheels").onmouseover = function() {mouseOverWheel()};
document.getElementById("service-wheels").onmouseout = function() {mouseOutWheel()};

function mouseOverWheel() {
    document.getElementById("description-wheels").style.opacity = '1';
}

function mouseOutWheel() {
    document.getElementById("description-wheels").style.opacity = '0';
}

//paint
document.getElementById("service-paint").onmouseover = function() {mouseOverPaint()};
document.getElementById("service-paint").onmouseout = function() {mouseOutPaint()};

function mouseOverPaint() {
    document.getElementById("description-paint").style.opacity = '1';
}

function mouseOutPaint() {
    document.getElementById("description-paint").style.opacity = '0';
}

//tuning
document.getElementById("service-tuning").onmouseover = function() {mouseOverTuning()};
document.getElementById("service-tuning").onmouseout = function() {mouseOutTuning()};

function mouseOverTuning() {
    document.getElementById("description-tuning").style.opacity = '1';
}

function mouseOutTuning() {
    document.getElementById("description-tuning").style.opacity = '0';
}

//body work
document.getElementById("service-body").onmouseover = function() {mouseOverBody()};
document.getElementById("service-body").onmouseout = function() {mouseOutBody()};

function mouseOverBody() {
    document.getElementById("description-body").style.opacity = '1';
}

function mouseOutBody() {
    document.getElementById("description-body").style.opacity = '0';
}

//modifications
document.getElementById("service-mods").onmouseover = function() {mouseOverMods()};
document.getElementById("service-mods").onmouseout = function() {mouseOutMods()};

function mouseOverMods() {
    document.getElementById("description-mods").style.opacity = '1';
}

function mouseOutMods() {
    document.getElementById("description-mods").style.opacity = '0';
}