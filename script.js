const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Corrected the method to create a "span" element
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for the multiplication sign
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear input field
    saveData(); // Save tasks to localStorage
}

// Event listener for task actions
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked'); // Toggle checked class
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove task
        saveData();
    }
}, false);

// Save the task list to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load tasks from localStorage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
