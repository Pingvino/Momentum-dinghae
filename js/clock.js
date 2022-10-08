const clock = document.querySelector("#clock");
const SECOND = 1000;

function updateClock() {
    const now = new Date();
    const hr = String(now.getHours()).padStart(2, "0");
    const mn = String(now.getMinutes()).padStart(2, "0");
    const sc = String(now.getSeconds()).padStart(2, "0");

    clock.innerText = `${hr}:${mn}:${sc}`;
}

updateClock();
setInterval(updateClock, SECOND);