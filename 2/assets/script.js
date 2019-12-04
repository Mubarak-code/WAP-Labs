function getElementId(){
    debugger;
    var name = document.getElementById("stdName").value;
    var Id = document.getElementById("stdId").value;
    var confirm = document.getElementById("stdConfirm").checked;
    var assignment = document.getElementById("stdAssignment").value;

    var entry = "N/A";
    if (document.getElementById("Nov2018").checked)
        entry = document.getElementById("Nov2018").value;
    if (document.getElementById("Feb2019").checked)
        entry = document.getElementById("Feb2019").value;
    if (document.getElementById("April2019").checked)
        entry = document.getElementById("April2019").value;

 
    debugger;
    if(name == '')
    {
        alert('Please fill the name')
        return false;
    }
    else if(Id == '')
    {
        alert('Please fill the Id')
        return false;
    }
    else if(confirm == false)
    {
        alert('Please confirm the form')
        return false;
    }
    else{
        alert ('Submited successfully: \n Name: '+name+" \n Id: "+Id+" \n Assignment: "+assignment+" \n Entry: "+entry)
        return true;
    }
    
}
