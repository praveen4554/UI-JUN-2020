"use strict";
console.log(document.getElementById("display"));
document.getElementById("display").innerHTML = "praveen1234";
//document.getElementById("display").style.color = "red";
//document.write("praveen");

function toggleTheColors() {
    //a = 10;
     var name = document.getElementById("firstName").value;
    // if(document.getElementById("display").style.color === "red")
    //     document.getElementById("display").style.color = "green";
    // else
    //   document.getElementById("display").style.color = "red";
    //   var elemnts =  document.getElementsByClassName("Mythri");
    //   console.log(elemnts);
    //   Object.keys(elemnts).forEach((ele)=>{
    //       document.getElementsByClassName("Mythri")[ele].style.color = "green";
    //       document.getElementsByClassName("Mythri")[ele].innerHTML = name;
    //   })
    /**
     * >
     *  
     * 
     * document.querySelctor -- css combinators
     * document.querySelectorAll
     */
    //   document.getElementById("firstName").value = "";
    
    var tableJson =  [{
      firstName:'praveen',
      lastName:'Kumar'
      },{
      firstName:'praveen',
      lastName:'Kumar'
      },{
      firstName:'praveen',
      lastName:'Kumar'
      }];
     
      var elemnts =  document.getElementsByTagName("div");
      console.log(elemnts);
      Object.keys(elemnts).forEach((ele)=>{
          document.getElementsByTagName("div")[ele].style.color = "green";
         document.getElementsByTagName("div")[ele].innerHTML = name;
         document.getElementsByTagName("div")[ele].setAttribute('class','animation')
      })
      document.getElementById("firstName").value = "";
    var displayElement = document.getElementById("display");
    var btn = document.createElement("button");
    btn.textContent = "submit";
    displayElement.appendChild(btn);
    document.getElementsByTagName("body")[0].removeChild(displayElement);
        // elemnts.forEach((ele)=>{
    //      ele.style.color="red";
    //  })
}

function test(arg){
    var a=arg;
}
//toggleTheColors();
test(20);
function phoneFormat(){
    var phone = document.getElementById("phoneNumber").value;
    console.log(phone);
    if(phone.length === 4) {
        document.getElementById("phoneNumber").value = "("+phone.slice(0,3)+") "+phone.slice(3,4);
    }
}
// console.log(a);
