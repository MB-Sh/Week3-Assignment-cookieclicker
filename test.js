console.log("Hello Cookie");

let stats = { 
    cookieCount: 0, 
    cookiePerSecond: 0 };


let shopUpgrades = [];
const cps =document.getElementById ("cookies-per-seconds");
const cookieCount=document.getElementById ("cookie-count");

const url ="https://cookie-upgrade-api.vercel.app/api/upgrades"

// Fetch upgrades from API and render them
async function getShopUpgrades() {
    try {
        const response = await fetch(url);
        shopUpgrades = await response.json();
        renderShopUpgrades();
        console.log("Shop upgrades fetched and rendered:", shopUpgrades);
    } catch (error) {
        console.error("Shop upgrade failed:", error);
    }
}

// Handle cookie button click
function handleCookieClick() {
    stats.cookieCount++;
    updateDisplay();
    saveToLocalStorage();
}

// Update the display for cookie count and cookies per second
function updateDisplay() {
    const count = document.getElementById("cookies-count");
    const perSecond = document.getElementById("cookies-per-second");
    
    count.textContent = `Cookies count: ${stats.cookieCount}`;
    perSecond.textContent = `Cookies per second: ${stats.cookiePerSecond}`;
}


// Automatically increment cookies per second
setInterval(() => {
    stats.cookieCount += stats.cookiePerSecond;
    updateDisplay();
    //updateCookiePerSecond();
    saveToLocalStorage();
}, 1000);

// Save and load game state from local storage
function saveToLocalStorage() {
    localStorage.setItem("cookieClickerStats", JSON.stringify(stats));
}

function loadFromLocalStorage() {
    const savedStats = JSON.parse(localStorage.getItem("cookieClickerStats"));
    if (savedStats) {
        stats = savedStats;
        updateDisplay();
    }
}

// Render shop upgrades in the DOM
function renderShopUpgrades() {
    const cookieContainer = document.createElement("div");
    cookieContainer.id = "shop-container";
    document.body.appendChild(cookieContainer);

    shopUpgrades.forEach((upgrade) => {
        const upgradeButton = document.createElement("button");
        upgradeButton.textContent = `${upgrade.name} - Cost: ${upgrade.cost} cookies`;
        upgradeButton.addEventListener("click", () => purchaseUpgrade(upgrade));
        cookieContainer.appendChild(upgradeButton);
    });
}

// Purchase upgrade
function purchaseUpgrade(upgrade) {
    if (stats.cookieCount >= upgrade.cost) {
        stats.cookieCount -= upgrade.cost;
        stats.cookiePerSecond += upgrade.cps;
        updateDisplay();
        saveToLocalStorage();
    } else {
        alert("Not enough cookies!");
    }
}

// Event listeners for cookie and reset buttons
document.getElementById("cookie-button").addEventListener("click", handleCookieClick);

document.getElementById("reset-button").addEventListener("click", () => {
    stats = { cookieCount: 0, cookiePerSecond: 0 };
    updateDisplay();
    saveToLocalStorage();
});

// Initialize game state on page load
window.onload = function() {
    loadFromLocalStorage();
    getShopUpgrades();
};
