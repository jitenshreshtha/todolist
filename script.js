"use strict";

// console.log('Hello world!!');
const $ = (selector) => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
  const taskList = [];
 
  const clearFields = () =>{
    $('#taskName').value = '';
    $('#taskAssigned').value = '';
    $('#taskDate').value = '';
    $('#taskPriority').value='Low';
    $('#taskStatus').value='Pending';
  }

  $("#addBtn").addEventListener("click", () => {
    let singleTask = {
        taskName: $("#taskName").value.trim(),
        taskAssigned: $('#taskAssigned').value.trim(),
        taskDate: $('#taskDate').value,
        taskPriority: $('#taskPriority').value,
        taskStatus: $('#taskStatus').value

    };
    taskList.push(singleTask);
    console.log(taskList[0]);
    console.log(taskList[1]);
    console.log(taskList[2]);
    console.log(taskList[3]);
    console.log(taskList[4]);
    clearFields();
    displayTasks(taskList);
  });

  function displayTasks(taskList){
    let taskEnlisted = $('#taskEnlisted');
    taskEnlisted.innerHTML = '';


    taskList.forEach((task)=>{
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <p>Task Name: ${task.taskName}</p>
        <p>Task Assigned to: ${task.taskAssigned}</p>
        <p>Due Date: ${task.taskDate}</p>
        <p>Priority: ${task.taskPriority}</p>
        <p>Status: ${task.taskStatus}</p>
        <input type='button' value='Edit'>
        <input type='button' value='Delete'>
        `;
        taskEnlisted.appendChild(listItem);
    })
  }
});
