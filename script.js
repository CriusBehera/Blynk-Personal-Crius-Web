// fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v3=0')
// .then(res => console.log(res))

function on_red() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v0=1');
}
function off_red() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v0=0');
}

function on_blue() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v1=1');
}
function off_blue() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v1=0');
}

function on_green() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v2=1');
}
function off_green() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v2=0');
}

function on_all() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v3=1');
}
function off_all() {
    fetch('https://blynk.cloud/external/api/update?token=m6d3y1V-PhvQMU46j9_BEqjyfRz9CDVz&v3=0');
}