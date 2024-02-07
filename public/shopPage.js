"use strict";
//Classes declaration
class Phone {
    constructor(m, np, g = 2) {
        this.model = m;
        this.NettoPrice = np;
        this.BruttoPrice = np * 1.23;
        this.guarantee = g;
    }
}
class Accessory {
    constructor(n, np, bp) {
        this.name = n;
        this.nettoPrice = np;
        this.bruttoPrice = bp;
    }
}
//Array declaration
let offer = [];
let iPhone = new Phone('iPhone', 20);
let samsungGalaxy = new Phone('Samsung Galaxy', 18);
let googlePixel = new Phone('Google Pixel', 7.5);
offer.push(iPhone, samsungGalaxy, googlePixel);
// Function to display phones on the shop page
function displayPhones() {
    const phoneListDiv = document.getElementById('phoneList');
    phoneListDiv.innerHTML = '';
    offer.forEach((phone) => {
        const phoneDiv = document.createElement('div');
        phoneDiv.innerHTML = `
            <p><strong>${phone.model}</strong></p>
            <p>Netto Price: $${phone.NettoPrice}</p>
            <p>Brutto Price: $${phone.BruttoPrice}</p>
            <p>Guarantee: ${phone.guarantee} year(s)</p>
            <button onclick="addToCart('${phone.model}', ${phone.NettoPrice})">Add to Cart</button>
            <hr>
        `;
        phoneListDiv.appendChild(phoneDiv);
    });
}
// Function to add a phone to the cart
function addToCart(model, nettoPrice) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Added ${model} to the cart. Total: $${nettoPrice}`;
}
window.onload = displayPhones;
