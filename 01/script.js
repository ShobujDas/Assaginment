
function multiplicationTable(num){
   for(var i = 1; i <= 10; i++){
       var product = i * num;
       console.log(`${num} * ${i} = ${product}`);
   };
};
multiplicationTable(2);
multiplicationTable(3);
multiplicationTable(4);
multiplicationTable(5);
multiplicationTable(6);