"use strict";
//Classes declaration
class phone {
    constructor(m, np, bp, g = 2) {
        this.model = m;
        this.NettoPrice = np;
        this.BruttoPrice = bp;
        this.guarantee = g;
    }
}
class accessory {
    constructor(n, np, bp) {
        this.name = n;
        this.nettoPrice = np;
        this.bruttoPrice = bp;
    }
}
//Arrays declaration
let samsung = new phone('samsung', 12, 3, 1);
let xaomi = new phone('xaomi', 12, 3, 1);
let offer = [];
offer.push(samsung);
offer.push(xaomi);
console.log(offer);
//Getting user input 
const form = document.querySelector('#inputValueForm');
let userBudget;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.cookie = `budgetValue=${document.getElementById("budget").value}`;
    document.cookie = `testValue=20`;
    window.location.href = "./shopPage.html";
});
