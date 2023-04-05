function updateTime(){
   var dateTime = new Date();
   var hours = dateTime.getHours();
   var minutes = dateTime.getMinutes();
   var seconds = dateTime.getSeconds();
   var am_or_pm = document.getElementById("am-or-pm");

   if(hours >= 12){
      am_or_pm.innerHTML = "PM";
   }else{
      am_or_pm.innerHTML = "AM";
   }

   if(hours == 0){
      hours = 12;
   }
   if(hours > 12){
      hours = hours - 12;
   }
   if(hours<10){
      hours = `0${hours}`
   }
   if(minutes<10){
      minutes = `0${minutes}`
   }
   if(seconds<10){
      seconds = `0${seconds}`
   }


   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;

   
}


setInterval(updateTime,1000)
updateTime();