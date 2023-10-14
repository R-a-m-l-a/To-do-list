const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
function AddTask(){
    if(inputBox.value===''){
        alert("You must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7" //for cross icon
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();

}
listContainer.addEventListener("click", function(e)
{
     if(e.target.tagName==="LI") //if its a li tag
     { 
        e.target.classList.toggle("checked"); //chk if class name "chked" exists,if yes delete it or no then add it.
        saveData();
     }
     else if(e.target.tagName==="SPAN") //if it is a span(X)
     {
        e.target.parentElement.remove(); //delete its parent i-e delete li
        saveData();
     }
    },false);
    function saveData(){
        localStorage.setItem("data",listContainer.innerHTML);

    }

  function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
  }
  showTask();
