const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = ''
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);
// Store data so that even if we refresh/close browser it shows wehere we left

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
};

// Display the stored data
function showList(){
    listContainer.innerHTML = localStorage.getItem('data')
};
showList();