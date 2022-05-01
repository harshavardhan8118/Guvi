var a=document.getElementById("fname");
var b=document.getElementById("lname");
var r1=document.getElementById("r1");
var r2=document.getElementById("r2");
var address=document.getElementById("textarea");
var check=document.getElementsByClassName("check");
var str="";
var state=document.getElementById("State");
var pincode=document.getElementById("pincode");
var country=document.getElementById("country");



function generatetable(){
    var checkboxcount=document.querySelectorAll('input[type="checkbox"]:checked');
    var table = document.getElementById("myTable");
    if((a.value==="" || b.value==="" )){
        alert("First name or Last name or both are missing ");
    }
    else if (r1.checked===false && r2.checked===false){
        alert("Radio Button is missing ");
    }

    else if(address.value===""){
        alert("Address field is missing");
    }

    else if(pincode.value===""){
        alert("Pincode is missing")
    }
    

    else if (checkboxcount.length<2){
        alert("Check Box is missing");
    }

    else if(state.value==="select"){
        alert("Please select a state");
    }
    else{
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        //new logic
        var count=0;

        
        // cell1.innerHTML="Hello"
        cell1.innerHTML = a.value;
        cell2.innerHTML = b.value;
        cell3.innerHTML = address.value;
        if(r1.checked===true){
            cell4.innerHTML = r1.value;
        }
        else if(r2.checked===true){
            cell4.innerHTML = r2.value;
        }

        for(var i=0;i<check.length;i++){
            if(check[i].checked===true){
                str+=check[i].value+" ";
            }
        }
        cell5.innerHTML=str;
        str="";
        cell6.innerHTML=state.value;
        cell7.innerHTML=pincode.value;
        cell8.innerHTML=country.value;
        document.getElementById("myTable").style.visibility="visible";

        a.value="";
        b.value="";
        address.value="";
        pincode.value="";
        //uncheck radio 
        r1.checked=false;
        r2.checked=false;
        //uncheck checkbox
        for(let i=0;i<check.length;i++){
            if(check[i].checked===true){
                check[i].checked=false;
            }
        }
        //default select value
        state.value="select"
    }


}