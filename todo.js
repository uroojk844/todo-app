let listView = document.querySelector(".list");

let todoList = [...JSON.parse(localStorage.getItem("todoList"))];

function countListItems() {
    document.querySelector("#listCount").innerText = listView.childElementCount;
}

function addItem(e, check=false, textData="") {
    e.preventDefault();

    let textVal = document.querySelector("#text").value;
    
    if (textVal.length){
        todoList.push({checked: check, text: textVal});
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }

    let listItem = document.createElement("div");
    listItem.setAttribute("class", "list-item");
    
    let state = document.createElement("div");
    state.setAttribute("class", "state icon");

    let icon = document.createElement("i");
    icon.className = "bx bx-checkbox";
    state.appendChild(icon);
    
    state.onclick = completedTask;
    
    if(check){
        completedTask();
    }

    function completedTask(){
        state.classList.toggle("checked");

        if(state.classList.contains("checked")){
            state.innerHTML = "<i class='bx bx-check'></i>";
        }else{
            state.innerHTML = "<i class='bx bx-checkbox'></i>";
        }
    }
    
    let text = document.createElement("div");
    text.className = "text";
    
    if (textData.length){
        text.innerText = textData;
    }else if(textVal.length){
        text.innerText = textVal;
    }
    
    text.onclick = function(){
        text.parentElement.classList.toggle("opened");
    }

    let delBtn = document.createElement("div");
    delBtn.className = "delBtn icon";

    let delIcon = document.createElement("i");
    delIcon.className = "bx bx-trash";
    delBtn.appendChild(delIcon);

    delBtn.onclick = function(){
        this.parentElement.remove();
        countListItems();
    }

    listItem.appendChild(state);
    listItem.appendChild(text);
    listItem.appendChild(delBtn);
    listView.appendChild(listItem);

    countListItems();

    document.forms[0].reset();
}

window.onload = function () {
    let todoList = localStorage.getItem("todoList");
    todoList = JSON.parse(todoList);

    todoList.forEach(item => {
        let check = item.checked;
        let t = item.text;
        addItem(event, check, t);
    });
}