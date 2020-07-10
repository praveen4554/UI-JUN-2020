// "use strict";
// console.log(document.getElementById("display"));
// document.getElementById("display").innerHTML = "praveen1234";
// //document.getElementById("display").style.color = "red";
// //document.write("praveen");

// function toggleTheColors() {
//     //a = 10;
//      var name = document.getElementById("firstName").value;
//     // if(document.getElementById("display").style.color === "red")
//     //     document.getElementById("display").style.color = "green";
//     // else
//     //   document.getElementById("display").style.color = "red";
//     //   var elemnts =  document.getElementsByClassName("Mythri");
//     //   console.log(elemnts);
//     //   Object.keys(elemnts).forEach((ele)=>{
//     //       document.getElementsByClassName("Mythri")[ele].style.color = "green";
//     //       document.getElementsByClassName("Mythri")[ele].innerHTML = name;
//     //   })
//     /**
//      * >
//      *  
//      * 
//      * document.querySelctor -- css combinators
//      * document.querySelectorAll
//      */
//     //   document.getElementById("firstName").value = "";
    
//     var tableJson =  [{
//       firstName:'praveen',
//       lastName:'Kumar'
//       },{
//       firstName:'praveen',
//       lastName:'Kumar'
//       },{
//       firstName:'praveen',
//       lastName:'Kumar'
//       }];
     
//       var elemnts =  document.getElementsByTagName("div");
//       console.log(elemnts);
//       Object.keys(elemnts).forEach((ele)=>{
//           document.getElementsByTagName("div")[ele].style.color = "green";
//          document.getElementsByTagName("div")[ele].innerHTML = name;
//          document.getElementsByTagName("div")[ele].setAttribute('class','animation')
//       })
//       document.getElementById("firstName").value = "";
//     var displayElement = document.getElementById("display");
//     var btn = document.createElement("button");
//     btn.textContent = "submit";
//     displayElement.appendChild(btn);
//     //document.getElementsByTagName("body")[0].removeChild(displayElement);
//         // elemnts.forEach((ele)=>{
//     //      ele.style.color="red";
//     //  })
// }

// // function test(arg){
// //     var a=arg;
// // }
// // //toggleTheColors();
// // test(20);
// function phoneFormat(){
//     var phone = document.getElementById("phoneNumber").value;
//     console.log(phone);
//     if(phone.length === 4) {
//         document.getElementById("phoneNumber").value = "("+phone.slice(0,3)+") "+phone.slice(3,4);
//     }
// }
// // console.log(a);


//     var displayElement = document.getElementById("display");
//     var btn = document.createElement("button");
//     btn.textContent = "submit";
//     btn.addEventListener("click",function(){
//         alert('creating a function');
//     },true);
//     displayElement.appendChild(btn);
// var a = 10;
// function test(self){
//     var a = 20;
//     console.log(self.a);
//     console.log(a);
// }

// test(this);


// var person = {
//     age: 27,
//     returnAge: function() {
//         this.age = 28;
//         return this.age;
//     }
// }

// console.log(person.returnAge());

// function add(c){
//     return this.a+this.b+c;
// }
// var person = {
//     firsName: 'praveen',
//     lastName: 'Kumar',
//     fullName: function() {
//         return this.firsName + this.lastName;
//     }
// }
// var a= 20;
// var b = 30;
// var obj = {a:10,b:20}
// console.log(add.call(obj,30,40));
// console.log(add.apply(obj,[30,40]));

// var bindExample = add.bind(obj); // object add this {a:10,b:20} - bindExample
// console.log(typeof bindExample); // input box 50 submit - 
// console.log(bindExample(50)); 
// console.log(bindExample(60));


// function initalName(){
//     var name="praveen";
//      function displayName(){
//          console.log(name);
//      }
//      displayName();
// }

// initalName();


// var myName = getName();
// console.log(myName);
// function getName(){
//      var name="praveen";
//      function displayName(){
//          console.log(name);
//      }
//      return displayName;
// }
// myName();


// function addValues(a){
//     return function(b){
//         return a+b;
//     }
// }

//  var add5 = addValues(5); // a=5  add5 - return function(b) {return 5+b;}

//  var add10 = addValues(10); // a=10 add0 - return function(b) {return 10+b;}
//  add5 = null;

// console.log(add5(2)); //7
// console.log(add10(2)); //12

// function capture(event){
//     console.log(event);
// }
// /**
//  * A  B  C
//  * A - C - pass values name= praveen c will be printing the name 
//  * B - C - pass values name= Mythri 
//  */

var divs = document.getElementsByTagName("div");
for(var i=0;i<divs.length;i++){
    divs[i].addEventListener("click",function(){
        alert("hello"+ this.getAttribute("id"));
    },true);
}