document.addEventListener('DOMContentLoaded',populateData);
var allUsers = [];
async function populateData(){
    let response=await fetch("https://61fe80ffa58a4e00173c989b.mockapi.io/user/userdetails")
    let data=await response.json();
    allUsers=data;
    var selecttable=document.querySelector("#userdetail-table");
    data.forEach(element => {
        var tr=document.createElement("tr");
        Object.keys(element).forEach(keys=>{
            var td=document.createElement("td");
            if(keys==="course"){
                var ul=document.createElement("ul");
                element[keys].map(course=>{
                    var li=document.createElement("li");
                    li.innerText=course;
                    ul.append(li);
                })
                td.append(ul)
            }else
                td.innerHTML=element[keys];
            tr.append(td);
        })
        tr.innerHTML += `<td> <button id="edit-${element.id}" data-action="edit" data-id="${element.id}"> Edit </button> &nbsp; 
                        <button id="delete-${element.id}" data-action="delete" data-id="${element.id}"> Delete </button> </td>`
        selecttable.append(tr);
    })
}



document.addEventListener('submit',submitdata);
async function submitdata(e){
    e.preventDefault();
    var body = JSON.stringify({
        name : document.querySelector("#name").value,
        age : document.querySelector("#age").value,
        email : document.querySelector("#email").value,
        course : document.querySelector("#course").value.split(',')
    })

    var id = document.querySelector("#id").value;
    console.log(document.querySelector("#course").value.split(',').length);
    
    //var del=document.querySelector("#editdel").value;
    if(id){
        if(document.querySelector("#name").value===""){
            //alert("Please Enter your Name");
           document.getElementById("namespan").innerHTML="Please Enter Name";   
        }
        else if(document.querySelector("#age").value===""){
            //alert("Please Enter your Name");
           document.getElementById("agespan").innerHTML="Please enter the age";   
        }
        else if(document.querySelector("#email").value===""){
            //alert("Please Enter your Name");
           document.getElementById("emailspan").innerHTML="Please Enter Email";   
        }
        else if(document.querySelector("#course").value===""){
            //alert("Please Enter your Name");
           document.getElementById("coursespan").innerHTML="Please enter Courses";   
        }
        else{
            var a= await fetch(`https://61fe80ffa58a4e00173c989b.mockapi.io/user/userdetails/${id}`,{
                method:'PUT',
                headers : {'Content-Type': 'application/JSON'},
                body: body
        })
            var data = await a.json()
            console.log(data);      
            location.reload();
        }
    }

    else if(document.querySelector("#name").value===""){
        //alert("Please Enter your Name");
        document.getElementById("namespan").innerHTML="Please Enter Name";   
    }
    else if(document.querySelector("#age").value===""){
        //alert("Please Enter your Name");
        document.getElementById("agespan").innerHTML="Please enter the age";  
    }
    else if(document.querySelector("#email").value===""){
        //alert("Please Enter your Name");
        document.getElementById("emailspan").innerHTML="Please Enter Email";    
    }
    else if(document.querySelector("#course").value===""){
        // alert("Please Enter your Name");
        document.getElementById("coursespan").innerHTML="Please enter Courses";   
    }
    else{
        var response = await fetch(`https://61fe80ffa58a4e00173c989b.mockapi.io/user/userdetails/`, {
            method: 'POST',
            headers : {'Content-Type': 'application/JSON'},
            body: body
        })
        var data = await response.json()
        console.log(data);
        location.reload();
    }
    
}

document.querySelector("#userdetail-table").addEventListener("click", function(e) {
    e.preventDefault();
    var selectedData = allUsers.filter(data => data.id === e.target.dataset.id)[0];
    if(e.target.dataset.action === "edit") {
        document.querySelector("#name").value = selectedData.name;
        document.querySelector("#age").value = selectedData.age;
        document.querySelector("#email").value = selectedData.email;
        document.querySelector("#course").value = selectedData.course.join(',');
        document.querySelector("#id").value = selectedData.id;
    }

    else if(e.target.dataset.action === "delete"){
        document.querySelector("#id").value = selectedData.id;
        var id=document.querySelector("#id").value;
        console.log(id);
        del(e);
        async function del(e){
            e.preventDefault();
            var a= await fetch(`https://61fe80ffa58a4e00173c989b.mockapi.io/user/userdetails/${id}`,{
                method:'DELETE',
                headers : {'Content-Type': 'application/JSON'},
            })
            var data = await a.json()
            console.log(data);
            location.reload();
        }
    }
})
