function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.innerText = task;

    // Mark complete
    li.onclick = function () {
        li.classList.toggle("completed");
    };

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "X";
    delBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}