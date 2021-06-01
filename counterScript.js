const increase = document.getElementById("increment-btn");
const saveButton = document.getElementById("save-btn");
const displayCount = document.getElementById("count-el");
const saved = document.getElementById("saveEl");
let count = 0;

increase.addEventListener("click", increment)
saveButton.addEventListener("click", saveCount)

function increment() {
    count = count + 1;
    displayCount.textContent = count;
}

function saveCount() {
    let countStr = count + " - "
    saved.textContent += countStr;
    displayCount.textContent = 0;
    count = 0;
    
}
