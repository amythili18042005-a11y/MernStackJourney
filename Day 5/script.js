const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");
const search = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

const themeBtn = document.getElementById("themeToggle");
const clearBtn = document.getElementById("clearCompleted");

const modal = document.getElementById("modalOverlay");
const confirmClear = document.getElementById("confirmClear");
const cancelClear = document.getElementById("cancelClear");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.draggable = true;
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
      <span>${task.text}</span>
      <div class="task-actions">
        <button class="toggle">✓</button>
        <button class="delete">✕</button>
      </div>
    `;

        li.querySelector(".toggle").onclick = () => {
            task.completed = !task.completed;
            save();
            render();
        };

        li.querySelector(".delete").onclick = () => {
            tasks.splice(index, 1);
            save();
            render();
        };

        // drag
        li.addEventListener("dragstart", () => li.classList.add("dragging"));
        li.addEventListener("dragend", () => {
            li.classList.remove("dragging");
            save();
        });

        list.appendChild(li);
    });

    emptyState.style.display = tasks.length ? "none" : "block";
}

form.onsubmit = e => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    tasks.push({ text, completed: false });
    input.value = "";
    save();
    render();
};

search.oninput = e => {
    const val = e.target.value.toLowerCase();
    document.querySelectorAll("#todoList li").forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(val) ?
            "" :
            "none";
    });
};

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent =
        document.body.classList.contains("dark") ? "☀ Light" : "🌙 Dark";
};

clearBtn.onclick = () => modal.classList.remove("hidden");

confirmClear.onclick = () => {
    tasks = tasks.filter(t => !t.completed);
    modal.classList.add("hidden");
    save();
    render();
};

cancelClear.onclick = () => modal.classList.add("hidden");

modal.onclick = e => {
    if (e.target === modal) modal.classList.add("hidden");
};

// drag reorder
list.addEventListener("dragover", e => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const after = [...list.children].find(li =>
        e.clientY <= li.offsetTop + li.offsetHeight / 2
    );
    list.insertBefore(dragging, after);
    updateOrder();
});

function updateOrder() {
    const newTasks = [];
    [...list.children].forEach(li => {
        const text = li.querySelector("span").textContent;
        const task = tasks.find(t => t.text === text);
        newTasks.push(task);
    });
    tasks = newTasks;
    save();
}

render();