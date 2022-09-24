/* eslint-disable no-restricted-globals */
var offset = [20,0];
var divOverlay = document.getElementById ("overlay");
var isDown = false;
divOverlay.addEventListener('mousedown', (e) => {
    isDown = true;
    offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
    ];
}, true);


document.addEventListener('mouseup', function() {
    isDown = false;
}, true);
document.addEventListener('mousemove', function(e) {
    if (isDown) {
        divOverlay.style.left = (e.clientX + offset[0]) + 'px';
        divOverlay.style.top  = (e.clientY + offset[1]) + 'px';
    }
}, true);
// ------------------------------------------------------------------------
var offset1 = [20,0];
var divOverlay1 = document.getElementById ("nice");
var isDown1 = false;
divOverlay1.addEventListener('mousedown', function(e) {
    isDown1 = true;
    offset1 = [
        divOverlay1.offsetLeft - e.clientX,
        divOverlay1.offsetTop - e.clientY
    ];
}, true);
document.addEventListener('mouseup', function() {
    isDown1 = false;
}, true);
document.addEventListener('mousemove', function(e) {
    if (isDown1) {
        divOverlay1.style.left = (e.clientX + offset1[0]) + 'px';
        divOverlay1.style.top  = (e.clientY + offset1[1]) + 'px';
    }
}, true);
// ------------------------------------------------------------------------
var offset2 = [20,0];
var divOverlay2 = document.getElementById ("logo");
var isDown2 = false;
divOverlay2.addEventListener('mousedown', function(e) {
    isDown2 = true;
    offset2 = [
        divOverlay2.offsetLeft - e.clientX,
        divOverlay2.offsetTop - e.clientY
    ];
}, true);
document.addEventListener('mouseup', function() {
    isDown2 = false;
}, true);
document.addEventListener('mousemove', function(e) {
    if (isDown2) {
        divOverlay2.style.left = (e.clientX + offset2[0]) + 'px';
        divOverlay2.style.top  = (e.clientY + offset2[1]) + 'px';
    }
}, true);
// ------------------------------------------------------------------------
var offset3 = [20,0];
var divOverlay3 = document.getElementById ("login");
var isDown3 = false;
divOverlay3.addEventListener('mousedown', function(e) {
    isDown3 = true;
    offset3 = [
        divOverlay3.offsetLeft - e.clientX,
        divOverlay3.offsetTop - e.clientY
    ];
}, true);
document.addEventListener('mouseup', function() {
    isDown3 = false;
}, true);
document.addEventListener('mousemove', function(e) {
    if (isDown3) {
        divOverlay3.style.left = (e.clientX + offset3[0]) + 'px';
        divOverlay3.style.top  = (e.clientY + offset3[1]) + 'px';
    }
}, true);