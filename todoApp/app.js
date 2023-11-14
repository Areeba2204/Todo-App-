function adding()
{
    var input = document.getElementById("todo_in"); 
    
    var list = document.getElementById("listitems"); list.style.lineHeight='2em';
    

    var element = document.createElement("li");
    var listtext = document.createTextNode(input.value); 

    element.appendChild(listtext);

    list.appendChild(element); 

    console.log(element);
    

    //*********************Delete Button********************** */

    var deletebtn = document.createElement("button");
    var btntext = document.createTextNode("Delete"); 
    deletebtn.appendChild(btntext);
    element.appendChild(deletebtn);
    deletebtn.setAttribute("onclick", "deletetodo(this)"); deletebtn.style.marginLeft='5%' , deletebtn.style.fontSize='15pt';

    //******************************************************** */
    
    //*********************EDit Button********************** */

    var editbtn = document.createElement("button");
    var ebtntext = document.createTextNode("Edit");
    editbtn.appendChild(ebtntext);
    element.appendChild(editbtn);
    editbtn.setAttribute("onclick", "edittodo(this)"); editbtn.style.marginLeft='1%', editbtn.style.fontSize='15pt';


//******************************************************** */

    input.value = "";
}

function deleting()
{
    var list = document.getElementById("listitems");
    list.innerHTML = "";
}

function deletetodo(e)
{
    console.log(e.parentNode.remove());
}

function edittodo(e)
{
    var changval = e.parentNode.firstChild.nodeValue;
    var inputfield = prompt("Edit task", changval);
    e.parentNode.firstChild.nodeValue = inputfield;
}


