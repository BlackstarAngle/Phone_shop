"use strict";
//Setting user's budget
const form = document.querySelector('#inputValueForm');
let userBudget;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.cookie = `budgetValue=${document.getElementById("budget").value}`;
    window.location.href = "./shopPage.html";
});
