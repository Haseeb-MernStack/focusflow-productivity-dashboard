// Dark Mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Todo Logic
const taskList = document.getElementById("taskList");

function addTask() {
    const input = document.getElementById("taskInput");
    if (!input.value) return;

    const li = document.createElement("li");
    li.innerHTML = `
    ${input.value}
    <button onclick="this.parentElement.remove(); saveTasks()">❌</button>
  `;

    taskList.appendChild(li);
    input.value = "";
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();

// Pomodoro Timer
let time = 1500;
let interval;

function startTimer() {
    interval = setInterval(() => {
        if (time <= 0) return clearInterval(interval);
        time--;
        updateTimer();
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);
    time = 1500;
    updateTimer();
}

function updateTimer() {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
}

// Daily Goal
function setGoal() {
    const goal = document.getElementById("goalInput").value;
    const tasks = taskList.children.length;
    document.getElementById("progressText").textContent =
        `Progress: ${tasks}/${goal} tasks completed`;
}
