//your JS code here. If required.
let red= document.getElementById("browser-info");
document.addEventListener("DOMContentLoaded", () => {
    let userAgent = navigator.appVersion;
    let browserName = navigator.appName;
    let information = `You are using ${browserName} version ${userAgent}.`;

    
    if (red) {
        red.textContent = information;
    } else {
        console.error("Element with id 'browserinfo' not found.");
    }
});
