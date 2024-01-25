//Classes declaration
class phone {
    model: string;
    NettoPrice: number;
    BruttoPrice: number;
    guarantee: number;

    constructor(m: string, np: number, bp: number, g: number = 2) {
        this.model = m;
        this.NettoPrice = np;
        this.BruttoPrice = bp;
        this.guarantee = g;
    }
}


class accessory {
    name: string;
    nettoPrice: number;
    bruttoPrice: number;

    constructor(n: string, np: number, bp: number) {
        this.name = n;
        this.nettoPrice = np;
        this.bruttoPrice = bp;
    }
}

//Arrays declaration

let samsung = new phone('samsung', 12, 3, 1);
let xaomi = new phone('xaomi', 12, 3, 1);
let offer: phone[] = [];

offer.push(samsung);
offer.push(xaomi);
console.log(offer);


//Getting user input 

const form = document.querySelector('#inputValueForm') as HTMLFormElement;
let userBudget: number;
form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    document.cookie = `budgetValue=${(document.getElementById("budget") as HTMLInputElement).value}`;
    document.cookie = `testValue=20`;
    console.log(budget)
    window.location.href = "./shopPage.html";
})

