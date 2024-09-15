console.log("Hello Cookie");


let stats = { 
    cookieCount: 0, 
    cookiePerSecond: 0 };


let shopUpgrades = [];
const cps =document.getElementById ("cookies-per-seconds");
const cookieCount=document.getElementById ("cookie-count")

const url ="https://cookie-upgrade-api.vercel.app/api/upgrades"

async function getShopUpgrades() {
        const response = await fetch(url);
        shopUpgrades = await response.json();
        renderShopUpgrades();
        console.log("Shop upgrades fetched and rendered:", shopUpgrades);
}

function updateDisplay() {
    const count = document.getElementById("cookies-count");
    const perSecond = document.getElementById("cookies-per-second");
    
    count.textContent = "Cookies count:" + stats.cookieCount;
    perSecond.textContent = "Cookies per second:" + stats.cookiePerSecond;
}
//handle cookie button click
function handleCookieClick() {
    stats.cookieCount++;
    updateDisplay();
    saveToLocalStorage();
}
setInterval(() => {
    stats.cookieCount += stats.cookiePerSecond;
    updateDisplay();
    saveToLocalStorage();
}, 1000);

function saveToLocalStorage() {
    localStorage.setItem("cookieClickerStats", JSON.stringify(stats));
}

function readFromLocalStorage() {
    const savedStats = JSON.parse(localStorage.getItem("cookieClickerStats"));
    if (savedStats) {
        stats = savedStats;
        updateDisplay();
    }
}

//display shop upgrades in the DOM
function renderShopUpgrades() {
    const cookieContainer = document.createElement("div");
    cookieContainer.id = "shop-container";
    document.body.appendChild(cookieContainer);

//create a Loop for each upgrade and add a button for it
    shopUpgrades.forEach((upgrade) => {
        const upgradeButton = document.createElement("button");
        upgradeButton.textContent = upgrade.name + " - Cost: " + upgrade.cost + " cookies";

        upgradeButton.addEventListener("click", () => buyUpgrade(upgrade));
        cookieContainer.appendChild(upgradeButton);
    });
}

//to buy more upgrades
function buyUpgrade(upgrade) {
    if (stats.cookieCount >= upgrade.cost) {
        stats.cookieCount -= upgrade.cost;
        updateDisplay();
        saveToLocalStorage();
    } else {
        alert("Buy more cookies!");
    }
}

document.getElementById("cookie-button").addEventListener("click", handleCookieClick);
document.getElementById("reset-button").addEventListener("click", function() {
    stats = { cookieCount: 0, cookiePerSecond: 0 }; //this should reset stat to zero
    updateDisplay();
    saveToLocalStorage();
});

//Initialize game state on page load
window.onload = function() {
    readFromLocalStorage();
    getShopUpgrades();
};
