// ------------------------------------------------------------------------------------------------------------- COUNTER
window.onload=function() {
    // Month,Day,Year,Hour,Minute,Second
    upTime('august,04,2017,00:00:00');
};

function upTime(countTo) {
    now = new Date();
    countTo = new Date(countTo);
    difference = (now - countTo);
    days = Math.max(0, -(Math.floor(difference/(60*60*1000*24)) + 1));

    hours = Math.max(0, -(Math.floor((difference%(60*60*1000*24))/(60*60*1000)) + 1));
    mins = Math.max(0, -(Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)) + 1));
    secs = Math.max(0, -(Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000) + 1));

    document.getElementById('days').firstChild.nodeValue = days;
    document.getElementById('hours').firstChild.nodeValue = hours;
    document.getElementById('minutes').firstChild.nodeValue = mins;
    document.getElementById('seconds').firstChild.nodeValue = secs;

    document.getElementById('days-2').firstChild.nodeValue = days;
    document.getElementById('hours-2').firstChild.nodeValue = hours;
    document.getElementById('minutes-2').firstChild.nodeValue = mins;
    document.getElementById('seconds-2').firstChild.nodeValue = secs;

    document.getElementById('days-3').firstChild.nodeValue = days;
    document.getElementById('hours-3').firstChild.nodeValue = hours;
    document.getElementById('minutes-3').firstChild.nodeValue = mins;
    document.getElementById('seconds-3').firstChild.nodeValue = secs;

    document.getElementById('days-mobile').firstChild.nodeValue = days;
    document.getElementById('hours-mobile').firstChild.nodeValue = hours;
    document.getElementById('minutes-mobile').firstChild.nodeValue = mins;
    document.getElementById('seconds-mobile').firstChild.nodeValue = secs;

    clearTimeout(upTime.to);
    upTime.to=setTimeout(function(){ upTime(countTo); },1000);
}
// -------------------------------------------------------------------------------------------------------- /end counter

