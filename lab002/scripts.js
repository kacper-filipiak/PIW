"use strict";

let trash_node = undefined;

const onitemclicked = (id) => {
    const item = document.getElementById(id);
    const texts = item.querySelector('div');
    const tc = item.querySelector("#tc");
    const tm = item.querySelector("#tm");
    if(item.done === true) {
      tc.classList.remove("text-decoration-line-through");
      texts.classList.remove("opacity-50");
      item.classList.remove("text-success");
      item.classList.remove("bg-success-subtle");
      item.classList.add("bg-primary-subtle");
      tm.innerText = "";
      item.done = false;
    } else {
      tc.classList.add("text-decoration-line-through");
      texts.classList.add("opacity-50");
      item.classList.add("text-success");
      item.classList.remove("bg-primary-subtle");
      item.classList.add("bg-success-subtle");
      const date = new Date();
      tm.innerText = date.toLocaleString();
      item.done = true;
    }
}

const ondeleteconfirm = () => {
    const delete_dialog = document.querySelector("#delete-modal");
    const id = delete_dialog.itemId;
    const task_list = document.querySelector(`#task_list`);
    const item = document.getElementById(id);
    trash_node = item;
    const undo_btn = document.querySelector('#undo-btn');
    undo_btn.removeAttribute("hidden");
    task_list.removeChild(item);
}

const ondelete = (id) => {
    const delete_dialog = document.querySelector("#delete-modal");
    delete_dialog.itemId = id;
    const text = delete_dialog.querySelector('p');

    const item = document.getElementById(id);
    const tc = item.querySelector("#tc");

    text.innerText = tc.innerText;
    delete_dialog.showModal();
}

const onundo = () => {
    const undo_btn = document.querySelector('#undo-btn');
    undo_btn.setAttribute("hidden", "hidden");
    task_list.appendChild(trash_node);
}

const adder = () => {
    const task = document.querySelector("#task");
    if (task.value.trim() === "") {
        console.log("Task is empty");
        const dialog = document.querySelector("#my-modal");
        dialog.showModal();
        return;
    }

    const task_text = task.value;
    const date = new Date();
    const task_id = date.getTime();
    const listItem = document.createElement("li");
    listItem.done = false;
    listItem.classList.add("task-row");
    listItem.classList.add("bg-primary-subtle");
    listItem.id = task_id;
    
    const taskText = document.createElement("div");
    taskText.id = "text";
    taskText.classList.add("task-row");
    taskText.addEventListener('click', function(){
      onitemclicked(task_id);
    });

    const taskContent = document.createElement("p");
    taskContent.id = "tc";
    taskContent.innerText = task_text;

    const taskModified = document.createElement("p");
    taskModified.id = "tm";
    
    taskText.appendChild(taskContent);
    taskText.appendChild(taskModified);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.onclick = function(){ondelete(task_id);};
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
   
    listItem.appendChild(deleteBtn);
    listItem.appendChild(taskText);

    const oper_list = document.querySelector("#task_list");
    oper_list.appendChild(listItem);
    task.value = "";
}

window.onload = () => {
    const dialog = document.querySelector("#my-modal");
    const closeButton = document.querySelector("#close-button");
    closeButton.addEventListener("click", ()=>{dialog.close();}) 

    const delete_dialog = document.querySelector("#delete-modal");
    const confirmButton = document.querySelector("#confirm-button");
    confirmButton.addEventListener("click", ()=>{
        ondeleteconfirm();
        delete_dialog.close();
    }) 
    const cancelButton = document.querySelector("#cancel-button");
    cancelButton.addEventListener("click", ()=>{delete_dialog.close();}) 
}
