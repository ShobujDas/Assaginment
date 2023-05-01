
// document.getElementById('calculateBtn').addEventListener('click',()=>{
//    let h = document.getElementById('heightInput').value;
//    let w = document.getElementById('weightInput').value;

//    let bmi = w / (h*h);
//    var total = bmi.toFixed(2);
//    document.getElementById('result').innerHTML = "Your BMI is " + total;
// })


function bmi(){
   let h = document.getElementById('heightInput').value;
   let w = document.getElementById('weightInput').value;

   let bmi = w / (h*h);
   var total = bmi.toFixed(2);
   document.getElementById('result').innerHTML = "Your BMI is " + total;
}
const calculate = document.getElementById('calculateBtn');
calculate.addEventListener('click',bmi);




// const originalArray = [1,6,2,7,3,8,4,9,5,10];
// var newArray = originalArray.map((num) =>{
// if(num <= 5){
// let result = num + 10;
// }
// return result;
// })

// console.log(newArray);



