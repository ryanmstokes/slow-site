// Main application script

console.log("Main app script running...");

function doSomething() {
    console.log("User clicked something, blocking for 300ms...");
    const start = Date.now();
    while (Date.now() - start < 300);
    alert("Task complete (eventually)");
}

// Inefficient DOM manipulation on load
window.addEventListener('load', () => {
    console.log("Window loaded, performing expensive layout calculations...");
    
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        // Force reflow/layout in a loop - classic performance bottleneck
        const h = card.offsetHeight;
        card.style.height = (h + 10) + "px";
        console.log("Calculated height for card:", h);
    });
});

// Large memory consumption
const cache = {};
for (let i = 0; i < 100000; i++) {
    cache['key_' + i] = "Some very long string value that takes up a lot of memory in the browser's heap to trigger memory warnings and slow down garbage collection " + i;
}
