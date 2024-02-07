//Setting user's budget
const form = document.querySelector('#inputValueForm') as HTMLFormElement;
let userBudget: number;
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    document.cookie = `budgetValue=${(document.getElementById("budget") as HTMLInputElement).value}`;
    window.location.href = "./shopPage.html";
})

