console.log("hlo clock ji")
let thour=document.getElementById("hour")
let tminute=document.getElementById("minute")
let tsecond=document.getElementById("second")
setInterval(() => {
    d = new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds()
    hrotation=30*htime+mtime/2
    mrotation=6*mtime;
    srotation=6*stime;
    thour.style.transform=`rotate(${hrotation}deg)`
    tminute.style.transform=`rotate(${mrotation}deg)`
    tsecond.style.transform=`rotate(${srotation}deg)`
}, 1000);
document.getElementById