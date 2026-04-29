
console.log("Analytics script starting...");

function block(ms) {
    var start = Date.now();
    while (Date.now() - start < ms);
}

// Block the head for 400ms
console.log("Blocking for 400ms to simulate slow third-party JS...");
block(400);

window.heavyAnalyticsData = [];
for (let i = 0; i < 50000; i++) {
    window.heavyAnalyticsData.push({ event: "init", id: i, time: Date.now() });
}

console.log("Analytics script finished.");
