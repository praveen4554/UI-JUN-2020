// var displayElement = document.getElementById("display");
//     var btn = document.createElement("button");
//     btn.textContent = "submit";
//     btn.addEventListener("click",function()){
//     	alert{
//     		'creating a function';
//     	}
//     }
//     displayElement.appendChild(btn);


    var person = {
    	firstName : 'Sagar',
    	lastName : 'Patil',
    	fullName : function(firstName,lastName) {
    		//console.log(this.firstName);
    	 	return this.firstName +" "+ this.lastName ;
    	 }
    }

      var firstName='Ansh'
      var lastName='Patil'

 // person.fullName.bind(this,[firstName, lastName]);
 //    console.log(person);

//--------------    bind method ------------------ //
  // var unboundFullname=person.fullName;
  // console.log(unboundFullname());            							//gives global variables

  // var boundFullname=unboundFullname.bind(person);
  // console.log(boundFullname());											//gives local variables, as person was given as argument

  //  var boundFullname=unboundFullname.bind(this,[firstName,lastName]);
  //  console.log(boundFullname());										//gives global variables, as global variables were given as argument


//--------------    call method ------------------ //
// var Name=person.fullName;
// //Name.call(this,firstName,lastName);
// console.log(Name.call(this,firstName,lastName));


//--------------    apply method ------------------ //

var Name_1=person.fullName;
var x=Name_1.apply(person,[firstName,lastName]);					//passing local variables
console.log(x);

var x=Name_1.apply(this,[firstName,lastName]);						//passing global variables
console.log(x);