'use strict';
function formSubmit(event){
   event.preventDefault();
    console.log(event);
}

function parent(event) {
    console.log('parent');
    event.stopImmediatePropagation();
}

function child(event) {
    console.log('child');
    event.stopImmediatePropagation();
}


function grandChild(event) {
    console.log('grandChild');
    event.stopImmediatePropagation();
}


var divs = document.getElementsByTagName("div");

// for(var i=0;i<divs.length;i++){
//     divs[i].addEventListener("click",function(){
//         alert(this.getAttribute('class'));
//     },true);
// }


// console.log('1');
// setTimeout(function(){
//     console.log('2');
// },1000);
// setTimeout(function(){
//     console.log('3');
// },0);
// console.log('4');
function add(a,b){
    return a+b;
}
add(2,3); //5
add(3,4);  //7

// for(var i=0;i<5;i++){
//    callHandler(i); //var i=0 index= 0 - callHandler1 index=0  meory reference 1000002
//                 // var i=1 index = 1 - callHandler2  index=11000003
// }

// console.log('after the loop',i); // prints i=5

// function callHandler(index){
//      setTimeout(function(){ // var i=0 setTimeout it will removes from the event loop 
//         console.log(index);   // var i=1 , i=2 , i=3 ,i= 4
//     },1000)
// }


// for(var i=0;i<10000;i++){
//     // (function(index){
//     //     setTimeout(function(){
//     //         console.log(index);
//     //     },1000);
//     // })(i);
//     setTimeout(function(){
//             console.log(i);
//         },1000);
// }
/**
 * var i;
 * for(i=0;i<5;i++){
 * }
 * console.log(i)
 */

var timerValue = 20;
document.getElementById("timer").innerHTML = timerValue;

 var myInterval = setInterval(function(){
   document.getElementById("timer").innerHTML = --timerValue;
  if(timerValue === 0)
    clearInterval(myInterval);
},1000);
// (function(){
//     setInterval(function(){
//         if(timerValue > 0)
//    document.getElementById("timer").innerHTML = --timerValue;
// //   if(timerValue === 0)
// //     clearInterval(myInterval);
// },1000)
// })
/**
 * AJAX - asynchorous javascript and xml 
 * javascript single threaded
 * one work at a time
 * make an api - i want to get some info 
 * loader image 
 * they are making an backend call to get the data async - displaying the data 
 * progress bar - updating - stop
 * callback function
 * xss - cross site scripting
 * 
 */
setTimeout(function(){
    console.log('test');
},1000);


// var a = 10;
// var a=20;
// let b = 10;
//  b= 20;
// a=20;

// function test(){
//    // hoisting
//    // console.log(a);
//     let a;
//     const b = [20];
//     //b.push(30);
//    // b = [40];
//     for(let i=0;i<5;i++){
//         console.log('inside the loop',i);
//     }
//     var name = ['praveen','kumar'];
//     console.log(name[0]+' '+name[1]);
//     console.log(`hello ${name[0]} ${name[1]}`);

//   //  var a=20;
//   //  console.log('print',i);
// }
var test = (a,b) => {
    console.log('Hello');
    console.log(a+b);
}
test(10,20);

// function es6Rest(...val){
//     console.log(val);
// }

var es6Rest = (...val) => {
    console.log(val);
}

es6Rest(10);
es6Rest(10,20);
es6Rest(10,10,20,30);

var obj = [{name:'abc',age:12},{name:'abcd',age:13},{name:'abc3',age:14},
{name:'abce',age:11}];
//['abc','abcd','abc3','abce']
// var result = obj.map((ele)=>{
//     return ele.age;
// })
var result = obj.map((ele) => ele.age);
var filterResult = obj.filter((ele)=> ele.age > 12);
var a = [10,20,30,40];
var sum = obj.reduce((acc,cur)=>{
    console.log(`accumulator`,acc);
    console.log(`currentvalue`,cur);
    return acc+cur.age;
},0);
console.log(sum);
console.log(filterResult);
// new Promise((res,rej)=>{

// })


console.log(result);
/**
 * es6
 * 
 * let and const - blockscope
 */
