console.log("Nurgisa CS-2119")

var current = new Date();
  console.log("Year:"+current.getFullYear())
  console.log("Month:"+current. getMonth())
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const week = new Date();
  let day = days[week.getDay()];
  console.log("Today:" + day)
  console.log("Date:"+current. getDate())
  console.log("Time:"+current. getHours()+":"+current. getMinutes()+":"+current.getSeconds())


today=new Date();
 var course = 1;
 var grad=new Date((today.getFullYear()+(3-course)), 6, 30);
 var one_day=1000*60*60*24;
 console.log(Math.ceil((grad.getTime()-today.getTime()+((3-course)*365))/one_day)+" days left until the freedom!");
function multiply() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    console.log( parseInt(x) * parseInt(y));
}
function divide() {
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    console.log( parseInt(x) / parseInt(y));
}
