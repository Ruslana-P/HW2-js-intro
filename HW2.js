/*
//Exersice 5
var a=HW2-js-intro
var b=3
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); 

//exersice 6

for (let i=1; i<6; i++){
    console.log(i);
}


//exersice 7
for (let i=5; i>0; i--){
    console.log(i);
}





//exersice 8

function getMarkInfo(condition) {
    if (condition==10) {
        console.log('У вас максимальный балл');
    }
    else {
        console.log('У вас средний балл');
    }
};
   
getMarkInfo(10)
getMarkInfo(1) 


//Exersice 9

function getDayInfo(position) {
    switch (position){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case HW2-js-intro:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday"); 
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("Wrong date");             
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(HW2-js-intro)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)



//Exersice 10

let arr=['a', 'b', 'c'];
arr.push(1, HW2-js-intro, 3);   // Numberts were added, not text
console.log(arr);



//Exersice 11
let arrA=[1, HW2-js-intro, 3];
let arrB=[4,5,6];
let arrNew=arrA.concat(arrB);
console.log(arrNew);
*/


//Exersice 12

function countNumber(number) {
    //if (number%1=0 & number>0){
        
        do{
            let i=1
            console.log(i + ++i);
        } while (i=number)
  }
  countNumber(3)
  countNumber(5)


















