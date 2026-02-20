// 1
document.getElementById("header-title").textContent = "My Awesome Page";

// 2
document.querySelectorAll(".product-card").forEach(el => {
    el.style.border = "2px solid red";
});

// 3
document.querySelectorAll(".menu li").forEach(li => {
    li.style.backgroundColor = "lightblue";
});

// 4
let btn = document.createElement("button");
btn.textContent = "Click me!";
document.getElementById("controls").appendChild(btn);

// 5
let item = document.createElement("div");
item.className = "item";
item.innerHTML = `<span>Apple</span> <button>Remove</button>`;
document.getElementById("cart").appendChild(item);

// 6
document.querySelector(".avatar").src =
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d";

// 7
document.querySelectorAll(".article-body > p").forEach(p => {
    document.querySelectorAll(".article-body > p").forEach(p => {
        p.classList.add("highlight");
    });
});

// 8
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark-mode");
};

// 9
document.querySelectorAll('[data-action="delete"]').forEach(btn => {
    btn.onclick = e => e.target.closest(".card").remove();
});

// 10 TODO
document.getElementById("add-todo").onclick = () => {
    let text = document.getElementById("todo-input").value;
    if (!text) return;

    let li = document.createElement("li");
    li.innerHTML = `${text} <button>Delete</button>`;
    li.querySelector("button").onclick = () => li.remove();
    document.getElementById("todo-list").appendChild(li);
};

// 11 Event delegation
document.getElementById("users-list").onclick = e => {
    if (e.target.tagName === "LI") {
        console.log("Clicked user ID:", e.target.dataset.userId);
    }
};

// 12 Counter
let count = 0;
document.getElementById("inc").onclick = () => {
    count++;
    document.getElementById("count").textContent = count;
};
document.getElementById("dec").onclick = () => {
    if (count > 0) count--;
    document.getElementById("count").textContent = count;
};

// 13 Live filter
document.getElementById("search").oninput = e => {
    let val = e.target.value.toLowerCase();
    document.querySelectorAll(".country").forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(val) ?
            "" :
            "none";
    });
};

// 14 Color picker
document.querySelectorAll(".swatch").forEach(sw => {
    sw.onclick = () => {
        document.body.style.backgroundColor = sw.dataset.color;
    };
});

// 15 Drag drop
let dragged;
document.querySelectorAll("#sortable li").forEach(li => {
    li.addEventListener("dragstart", () => (dragged = li));
    li.addEventListener("dragover", e => e.preventDefault());
    li.addEventListener("drop", function() {
        let parent = this.parentNode;
        parent.insertBefore(dragged, this);
    });
});

// 16 Modal
document.getElementById("open-modal").onclick = () => {
    let overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    overlay.innerHTML = `
    <div class="modal">
      <h2>Modal Title</h2>
      <p>This is modal content</p>
      <button id="close-modal">Close</button>
    </div>
  `;

    document.body.appendChild(overlay);

    overlay.onclick = e => {
        if (e.target === overlay || e.target.id === "close-modal") {
            overlay.remove();
        }
    };
};