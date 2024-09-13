console.log ("Hello Cookie");

//add 2 global values:cookie count and cookie per second

let cookieCount =0;
let cookiePerSecond =0;
 //!OR this
let stats = {
    cookieCount :0,
    cookiePerSecond : 0,
};

let shopUpgrades= [];
const url ="https://cookie-upgrade-api.vercel.app/api/upgrades"


async function getShopUpgrades() {
        const response = await fetch (url);
        const data =await response.json();
        console.log("shop upgrade fetched and render:",shopUpgradesupgrade);
        return data;
    }
    

    shopUpgrades=data;
    function updateShopUpgrades (data){
        shopUpgrades.length= 0;
        data.forEach(upgrade=> shopUpgrades.push(upgrade));
    }


// // Handle cookie button click
// function handleCookieClick() {
//     stats.cookieCount++;
//     updateCookieCount();
//     saveToLocalStorage();
// }
// //Dom  manipulation
// //select the DOM elements ( buttons, img, p, ..)


// //a way to store the shop upgrades that come from the API
// //let shopUpgrades = [];

// //fetch the items from the API --> https://cookie-upgrade-api.vercel.app/api/upgrades
// //function getShopUpgrades() {
//   //fetch the data
//   //translate it into JSON
//   //PUSH the items into the shopUpgrades array above
// //}

// //an event listener to click on the cookie button
// //select the cookie img or button
// //write your event handler and event listener
// function handleCookieClick() {
//   //when I click on the cookie, the value of cookieCount goes up by one
// }

// addEventListener("click", handleCookieClick);

// //we need a timer that increases the cookieCount value by one every second
// setInterval(function () {
//   //I want to increase the value of cookieCount by one every second
//   //I want to update the value displayed on the page (this task can also be a separate function, for example, updateCookieCount(), and you would call this function inside the setInterval function)
//   //   updateCookieCount();
//   //I want to store this value in local storage (this task can also be a separate function, for example, storeLocalStorage(), and you would call this function inside the setInterval function)
//   //   storeLocalStorage()
// }, 1000);

// // function updateCookieCount() {
// //I update the cookieCount value (this is just one option)
// // }

// // function storeLocalStorage(){
// // I store the values in local storage (this is just one option)
// // }

// //==============================================
// //extra function blocks to give you other ideas
// //these building blocks are just possible solutions to probles you might find

// function renderShopUpgrades() {
//   //create DOM elements
//   //you will use a loop or array method
//   shopUpgrades.forEach(function (upgrade) {
//     //for each item in the array, assign the value to a DOM element
//     //append the element to the DOM
//   });
// }

// function saveLocalStorage() {
//   //a method that turns your data into string soup
//   //a method to set the data into key and values in local storage
// }
