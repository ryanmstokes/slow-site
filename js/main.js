// Main application script - The Performance Tanker

console.log("Main app script running...");

// BEST PRACTICE VIOLATION: eval()
try {
    eval("var x = 10; console.log('Dangerous eval run');");
} catch(e) {}

// BEST PRACTICE VIOLATION: Sync XHR
try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', false);
    xhr.send(null);
} catch(e) {}

// PERFORMANCE VIOLATION: Scroll Listener from Hell
// This will tank the "Smoothness" and "Interaction" scores
window.addEventListener('scroll', () => {
    const start = Date.now();
    // Block for 50ms on every scroll event
    while (Date.now() - start < 50) {
        Math.sqrt(Math.random());
    }
    // Force layout reflow
    const bodyHeight = document.body.offsetHeight;
    document.body.style.paddingBottom = (bodyHeight % 2) + "px";
});

// PERFORMANCE VIOLATION: Intentional Layout Shift
setInterval(() => {
    const div = document.createElement('div');
    div.style.height = Math.random() * 100 + "px";
    div.innerHTML = "SURPRISE CONTENT";
    document.body.prepend(div);
    setTimeout(() => div.remove(), 1000);
}, 3000);

// Interaction blocking
function doSomething() {
    const start = Date.now();
    while (Date.now() - start < 500);
    alert("Slow action complete");
}

// Memory bloat
const garbage = [];
for (let i = 0; i < 200000; i++) {
    garbage.push(new Array(100).fill("I am wasting your memory and making the GC work hard " + i));
}

window.addEventListener('load', () => {
    console.log("Forcing massive reflows...");
    const allDivs = document.querySelectorAll('div');
    allDivs.forEach(div => {
        const w = div.offsetWidth;
        div.style.width = (w + 1) + "px";
        const h = div.offsetHeight;
        div.style.height = (h + 1) + "px";
    });
});
