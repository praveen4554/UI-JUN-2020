
function populateTable(){
	var values =  document.getElementsByTagName("table");
      console.log(values);
      console.log(values[0]);
      console.log(values[1]);
      var tableJson =  [{
      firstName:'sagar',
      lastName:'Patil'
      },{
      firstName:'Bernard',
      lastName:'Looney'
      },{
      firstName:'Ben',
      lastName:'Beurdan'
      }];
      
      Object.keys(values).forEach((values)=>{
          
         document.getElementsByTagName("table")[values].innerHTML += "<tr>"+"<td>"+tableJson[0].firstName+"</td>"+"<td>"+tableJson[0].lastName+"</td>"+"</tr>";
         document.getElementsByTagName("table")[values].innerHTML += "<tr>"+"<td>"+tableJson[1].firstName+"</td>"+"<td>"+tableJson[1].lastName+"</td>"+"</tr>";
         document.getElementsByTagName("table")[values].innerHTML += "<tr>"+"<td>"+tableJson[2].firstName+"</td>"+"<td>"+tableJson[2].lastName+"</td>"+"</tr>";
         
        
      })

    /**
    for (var i=0; i<tableJson.length; i++) {
    	var row = document.createElement("tr");
    row.textContent = "<th>"+tableJson[i].firstName+"</th><th>"+tableJson[i].lastName+"</th>";
    values.appendChild(row);
    } */
      }
  


