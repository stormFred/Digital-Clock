//  Call the showTime every 1 sec
setInterval(showTime, 1000);

function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    hour = hour < 10 ? '0' + hour : hour
    min = min < 10 ? '0' + min: min;
    sec = sec < 10 ? '0' + sec : sec;

    time = `${hour} : ${min} : ${sec}`;

    document.getElementById('clock').innerHTML = time;
}

showTime();

document.getElementById('day').innerHTML= new Date();
