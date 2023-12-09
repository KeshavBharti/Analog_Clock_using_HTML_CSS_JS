let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');
let dateEle=document.getElementById("date");

function displayTime(){
    let date= new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss= date.getSeconds();
    let dateForm=date.getDate()
    let month=date.getMonth();
    let year= date.getFullYear();
    

    let hRot=30*hh+mm/2;
    let mRot=6*mm;
    let sRot=6*ss;

    hr.style.transform=`rotate(${hRot}deg)`;
    min.style.transform=`rotate(${mRot}deg)`;
    sec.style.transform=`rotate(${sRot}deg)`;
    dateEle.textContent=dateForm+" : "+month+" : " +year;
    //dateEle.textContent=day;
}

setInterval(displayTime, 1000);
