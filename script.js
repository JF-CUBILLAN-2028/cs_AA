const shirt = document.getElementById("shirt");
const pants = document.getElementById("pants");
const changeShirtButton = document.getElementById("changeShirtButton");
const changePantsButton = document.getElementById("changePantsButton");

// CATALOGUE
const shirts = ["shirt1.png", "shirt2.png", "shirt3.png"];
const pantsList = ["pants1.png", "pants2.png", "pants3.png"];
let currentShirt = 0;
let currentPants = 0;

// BUTTON TO CHANGE SHIRT
changeShirtButton.addEventListener("click", () => {
    currentShirt = Math.floor(Math.random() * shirts.length);
    shirt.src = shirts[currentShirt];
});

// BUTTON TO CHANGE PANTS (Fixed Syntax Error)
changePantsButton.addEventListener("click", () => {
    currentPants = Math.floor(Math.random() * pantsList.length);
    pants.src = pantsList[currentPants];
});

// DRAGGING OF CLOTHING
shirt.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("clothing", "shirt");
});

pants.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("clothing", "pants");
});

const characterBox = document.querySelector(".box");

characterBox.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allow dragging
});

characterBox.addEventListener("drop", (event) => {
    event.preventDefault();
    const rect = characterBox.getBoundingClientRect();
    const itemType = event.dataTransfer.getData("clothing");

    let item = itemType === "shirt" ? shirt : itemType === "pants" ? pants : null;

    if (item) {
        // Ensure the clothing moves properly within characterBox
        const x = Math.max(0, Math.min(event.clientX - rect.left - item.width / 2, rect.width - item.width));
        const y = Math.max(0, Math.min(event.clientY - rect.top - item.height / 2, rect.height - item.height));

        item.style.position = "absolute"; // Fixes dragging issue
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
    }
});
