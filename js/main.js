var siteNameInput =document.getElementById('siteNameInput')

var siteLinkInput =document.getElementById('siteLinkInput')


var sitesList = []

if( localStorage.getItem("sites") != null){

    sitesList = JSON.parse(localStorage.getItem("sites"))

    displayData()
}



function addSite(){
    var site ={

        name:siteNameInput.value,

        url:siteLinkInput.value
    }


    sitesList.push(site)
    displayData();
    clearForm();

    localStorage.setItem("sites",JSON.stringify(sitesList))

    
}


function displayData(){

    var cartona="";


    for( i=0 ; i<sitesList.length ; i++){
        cartona+=`<tr>
        <td>${i+1}</td>
        <td>${sitesList[i].name}</td>
        <td><a target="blank" href ="${sitesList[i].url}"><button class="btn btn-success btn-lg" ><i class="fa-regular fa-eye"></i> Visit</button></a></td>
        <td><button onclick="deleteItem(${i})" class="btn btn-danger btn-lg" ><i class="fa-solid fa-trash"></i> Delete</button></td>
        </tr>`
    }

    document.getElementById('tBody').innerHTML = cartona;
}

function clearForm(){
    siteNameInput.value=""
    siteLinkInput.value=""
}


function deleteItem(i){

    sitesList.splice(i,1);

    localStorage.setItem("sites",JSON.stringify(sitesList))

    displayData();

}