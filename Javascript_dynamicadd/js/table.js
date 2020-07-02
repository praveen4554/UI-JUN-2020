
function addRow(){
    event.preventDefault();

var table=document.getElementById("tableMain");
var firstName="<td>"
+document.getElementById("txtFirstName").value
+"</td>";
var lastName="<td>"
+document.getElementById("txtLastName").value
+"</td>";
var idtype="<td>"
+document.getElementById("txtidtype").value
+"</td>";
var phone="<td>"
+document.getElementById("txtPhone").value
+"</td>";

var deleteRow=
"<td><a href=# onclick=remove(this)"+
" class=btnDelete>Remove</a></td>";
table.innerHTML +="<tr>" + firstName + lastName + idtype+ phone + deleteRow + "</tr>";

clear();




}
function clear(){
    document.getElementById("txtFirstName").value="";
    document.getElementById("txtLastName").value="";
    document.getElementById("txtidtype").value="";
    document.getElementById("txtPhone").value="";

}
function remove(obj){
    var record=obj.parentNode.parentNode;
    record.parentNode.remove(record);
}