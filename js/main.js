// Main application script

console.log("Main app script running...");

function heavyLoop() {
    const start = Date.now();
    while (Date.now() - start < 10) {
        Math.sqrt(Math.random());
    }
    requestAnimationFrame(heavyLoop);
}
heavyLoop();

document.addEventListener('click', (e) => {
    console.log("Interaction detected, blocking main thread...");
    const start = Date.now();
    while (Date.now() - start < 600) {
        // CPU Heavy work
        Math.sqrt(Math.random() * 1000);
    }
}, true); // Use capture to ensure it runs first

setTimeout(() => {
    const heroContainer = document.querySelector('.hero-placeholder');
    if (heroContainer) {
        const img = new Image();
        // A truly massive raw image
        img.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=100&w=8000";
        img.style.width = "100%";
        img.style.height = "auto";
        img.setAttribute('fetchpriority', 'low'); // Tell the browser it's not important
        heroContainer.appendChild(img);
        console.log("LCP Image injection started after 4s delay");
    }
}, 4000);

setTimeout(() => {
    const banner = document.createElement('div');
    banner.style.height = "400px";
    banner.style.background = "red";
    banner.style.color = "white";
    banner.style.fontSize = "50px";
    banner.style.display = "flex";
    banner.style.alignItems = "center";
    banner.style.justifyContent = "center";
    banner.innerHTML = "LATE LOADING ANNOYING BANNER (CLS!)";
    document.body.prepend(banner);
}, 6000);

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

setInterval(() => {
    const div = document.createElement('div');
    div.style.height = Math.random() * 100 + "px";
    div.innerHTML = "SURPRISE CONTENT";
    document.body.prepend(div);
    setTimeout(() => div.remove(), 1000);
}, 3000);

function doSomething() {
    const start = Date.now();
    while (Date.now() - start < 500);
    alert("Slow action complete");
}

const someArray = [];
for (let i = 0; i < 200000; i++) {
    someArray.push(new Array(100).fill("Abracadabra " + i));
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
