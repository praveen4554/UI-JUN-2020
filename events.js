
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

for(var i=0;i<divs.length;i++){
    divs[i].addEventListener("click",function(){
        alert(this.getAttribute('class'));
    },true);
}


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


for(var i=0;i<10000;i++){
    // (function(index){
    //     setTimeout(function(){
    //         console.log(index);
    //     },1000);
    // })(i);
    setTimeout(function(){
            console.log(i);
        },1000);
}
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
 * 
 */
setTimeout(function(){
    console.log('test');
},1000);

console.log('hello');