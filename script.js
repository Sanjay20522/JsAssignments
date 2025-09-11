// while loop:

let i = 0;
while (i < 5) {
  console.log("Number:", i);
  i++;
}

let j = 0;
do {
  console.log("Number:", j);
  j++;
} while (j < 10);

//array and objects:

let fruits = ["apple", "banana", "mango"];
for (let fruit of fruits) {
  console.log(fruit);
}

//object and keys:

let person = { name: "Naveen", age: 22, city: "Chennai" };
for (let key in person) {
  console.log(key, ":", person[key]);
}


//Function:

function sla(a,b){
     return a+b;
}

let result1=sla(10,20);

console.log("Add:",result1);

//

const multi = function(x,y){
    return x*y;
}
console.log(multi(4,5));