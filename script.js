document.addEventListener('DOMContentLoaded', function () {

    console.log("Hello World~!");

    document.getElementById('add-task').addEventListener('click', function (event) {
        event.preventDefault()
        console.log(event);
        var taskValue = document.getElementById('new-task').value;

        console.log("TASK VALUE", taskValue);

        if (taskValue) {
            addTask(taskValue);
        }

    });

    //Unique number for each task created
    var taskNumber = 0;

    //Add task
    function addTask(taskValue) {
        var li = document.createElement('li');
        li.setAttribute("id", `task-${taskNumber}`);


        // Create div for task text value
        var taskDiv = document.createElement('div');
        taskDiv.textContent = taskValue;
        taskDiv.setAttribute("id", `task-label-${taskNumber}`)
        taskDiv.classList.add("task-label");
        li.appendChild(taskDiv);


        //Create class for task actions
        var actions = document.createElement('div');
        actions.classList.add("task-actions");


        // Create delete button
        createDeleteButton(li, actions);


        //Create edit button
        createEditButton(li, actions, taskValue);


        //Edit and Delete Buttons appear
        li.appendChild(actions);


        // Complete task
        //li.addEventListener('click', function () {
        //    completeTask(li);
        //});


        // Add new task to list
        document.getElementById('task-list').appendChild(li);


        // Add number to task label id
        taskNumber++;
    }

    //Delete Button Code
    function createDeleteButton(li, actions) {

        var deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete"
        deleteButton.type = "button";
        deleteButton.onclick = function (event) {
            li.parentNode.removeChild(li);
            console.log("See you later!")
        }
        actions.replaceChildren(deleteButton);

    }

    //Edit Button Code
    function createEditButton(li, actions, taskValue) {

        var editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.type = "button";
        editButton.onclick = function (event) {
            editTask(li, taskValue);
        };
        actions.appendChild(editButton);

    }

    //Cancel Task Edit
    function cancelTask(li, taskValue) {
        var label = li.querySelector(".task-label");

        label.textContent = taskValue;

        var actions = li.querySelector(".task-actions");


        // Create delete button
        createDeleteButton(li, actions);


        //Create edit button
        createEditButton(li, actions, taskValue);


    }

    //Complete class toggle with click
    function completeTask(li) {
        li.classList.toggle('completed');
    }

    //Save Task Edit
    function saveTask(li, taskValue) {
        console.log("All brand new!");
        var label = li.querySelector('.task-label');

        label.textContent = taskValue;

        var actions = li.querySelector(".task-actions");


        // Create delete button
        createDeleteButton(li, actions);


        //Create edit button
        createEditButton(li, actions, taskValue);


    }

    //Edit Input
    function editTask(li, taskValue) {
        var label = li.querySelector(".task-label");
        var actions = li.querySelector(".task-actions");
        var editInput = document.createElement('textarea');
        editInput.value = taskValue;
        label.replaceChildren(editInput);


        // Create cancel button
        var cancelButton = document.createElement('button');
        cancelButton.textContent = "Cancel"
        cancelButton.type = "button";
        cancelButton.onclick = function (event) {
            cancelTask(li, taskValue);
            console.log("Maybe not...")
        }
        actions.replaceChildren(cancelButton);


        //Create save button
        var saveButton = document.createElement('button');
        saveButton.textContent = "Save";
        saveButton.type = "button";
        saveButton.onclick = function (event) {
            var newTaskValue = editInput.value;
            saveTask(li, newTaskValue);
        };
        actions.appendChild(saveButton);
    }


});