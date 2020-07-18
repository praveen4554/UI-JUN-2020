var asyncApi = true;
// function loadData(cb){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         console.log(this.readyState);
//         if(this.readyState === 4 && this.status === 200) {
//             console.log(this.responseText);
//             cb();
//         }
//         if(this.readyState === 4 && this.status === 401 ){
//             //redirect to login
//         }
//     }
//     xhttp.open('POST','https://jsonplaceholder.typicode.com/todos/3451',asyncApi);
//     xhttp.send('');
// }
/**
 * readystate 0 - unintialized
 *  1- it is loading
 * 2- loaded
 * 3 - request accepted
 * 4- completed
 * httpStatusCodes
 * database users
 * praveen
 * sagar
 * 2XX
 * 200 - success responseText
 * 201 - signup 
 * 204 - no content
 * 4XX
 * 400- bad request - missing fields 
 * 401 - authroziation -
 * 403 - unauthorized - forbidden
 * 404 - not found
 * 500- internal server error
 * 
 * logedin - backend token for every api request we wil send the token
 * 
 * method
 * GET - retrieve the data 
 * POST - it will create the new record
 * PUT - it will update the existing record
 * delete - it will the data in the db
 * PATCH - it will update the existing record
 * 
 * 
 * OPTION - it will check with the server whther the rquest is allowed or not 
 */

// var promise = new Promise(function(resolve,reject){
//   var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         console.log(this.readyState);
//         if(this.readyState === 4 && this.status === 200) {
//             console.log(this.responseText);
//             resolve(this.responseText)
//         }
//         if(this.readyState === 4 && this.status === 404 ){
//            reject('err')
//         }
//     }
//     xhttp.open('GET','https://jsonplaceholder.typicode.com/todos/13424',asyncApi);
//     xhttp.send();
// })

function loadData(){
    promise.then(function(res){
        console.log(res);
        // add new elements showing the userdata
    }).catch(function(err){
        console.log(err);
        // show the error page
    })
}

function test(){
    new Promise(function(resolve,reject){
        // user - login - id
        resolve(2);
    }).then(function(res){
        // user details using id 
        return res+2;
    }).then(function(result){
        // id i will get his interests
        return result*5;
    }).then(function(displayedValue){
        // display it
        console.log(displayedValue);
    }).catch(function(err){
        console.log(err);
    })
}
test()