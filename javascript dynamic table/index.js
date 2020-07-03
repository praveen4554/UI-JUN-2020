function addRow(){
    event.preventDefault();

let table=document.getElementById("tableMain");
let firstName="<td>"
+document.getElementById("txtFirstName").value
+"</td>";
let lastName="<td>"
+document.getElementById("txtLastName").value
+"</td>";
let email="<td>"
+document.getElementById("txtEmail").value
+"</td>";

let deleteRow=
"<td><a href=# onclick=remove(this)"+
" class=btnDelete>Remove</a></td>";
table.innerHTML +="<tr>" + firstName + lastName + email + deleteRow + "</tr>";

clear();

}
function clear(){
    document.getElementById("txtFirstName").value="";
    document.getElementById("txtLastName").value="";
    document.getElementById("txtEmail").value="";

}
function remove(obj){
    let record=obj.parentNode.parentNode;
    record.parentNode.remove(record);
}
let elments=document.querySelector("div");
