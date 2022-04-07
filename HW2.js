console.log('------------- #5')
var a=2
var b=3
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b); 



console.log('------------- #6')

for (let i=1; i<6; i++){
    console.log(i);
}



console.log('------------- #7')
for (let i=5; i>0; i--){
    console.log(i);
}


console.log('------------- #8')

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



console.log('------------- #9')

function getDayInfo(position) {
    switch (position){
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
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
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)


console.log('------------- #10')
let arr=['a', 'b', 'c'];
arr.push(1, 2, 3);   // Numberts were added, not text
console.log(arr);



console.log('------------- #11')
let arrA=[1, 2, 3];
let arrB=[4,5,6];
let arrNew=arrA.concat(arrB);
console.log(arrNew);



console.log('------------- #12')

function countNumber(number){
    let ARR=[1];
    let i=1;

    do{
        ARR.push(i+=1);
    } while (i<number)
    //console.log(ARR);
    let sum=ARR.reduce((a,b)=>a+b, 0);
    console.log(sum);
}
    countNumber(3)
















