

function currentDate(){
   var d=new Date()
   var day=d.getDay();
   var date=d.getDate();
   var month=d.getMonth();
   var year=d.getFullYear();

    if(day==0) day="Sunday";
    else if(day==1) day="Monday";
    else if(day==2) day="Tuesday";
    else if(day==3) day="Wednesday";
    else if(day==4) day="Thursday";
    else if(day==5) day="Friday";
    else day="Saturday";

    if(month==0) month="Janurary";
    else if(month==1) month="Feburary";
    else if(month==2) month="March";
    else if(month==3) month="April";
    else if(month==4) month="May";
    else if(month==5) month="June";
    else if(month==6) month="July";
    else if(month==7) month="August";
    else if(month==8) month="September";
    else if(month==9) month="October";
    else if(month==10) month="November";
    else month="December";
    document.getElementById('currentDate').innerHTML+=day+ ","+""+ date+""+ month+""+ year

    refreshTime();
}

function currentTime(){
    var t = new Date();
    var hh = t.getHours();
    var mm = t.getMinutes();
    var ss = t.getSeconds();
    var ampm=hh<=11?"AM":"PM";
    document.getElementById('hh').innerHTML=hh;
    document.getElementById('mm').innerHTML=mm;
    document.getElementById('ss').innerHTML=ss +" "+ampm ;
}   

function refreshTime(){
    setInterval(currentTime, 1000);

}

function validations(){
    var username=document.getElementById("e");
    var password=document.getElementById("p");
    
    if(username=="" && password=="")
    {
        document.getElementById('error').innerHTML="username and password is invalid";
        return false;
    }
    alert(hello);
    return false;
}