let listView = document.querySelector(".list");

function countListItems() {
    document.querySelector("#listCount").innerText = listView.childElementCount;
}

function addItem(e){
    e.preventDefault();

    let textVal = document.querySelector("#text").value;
    
    let listItem = document.createElement("div");
    listItem.setAttribute("class", "list-item");
    
    let state = document.createElement("div");
    state.setAttribute("class", "state icon");

    let icon = document.createElement("i");
    icon.className = "bx bx-checkbox";
    state.appendChild(icon);
    
    state.onclick = function(){
        state.classList.toggle("checked");

        if(state.classList.contains("checked")){
            state.innerHTML = "<i class='bx bx-check'></i>";
        }else{
            state.innerHTML = "<i class='bx bx-checkbox'></i>";
        }
    }

    
    let text = document.createElement("div");
    text.className = "text";
    text.innerText = textVal;

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