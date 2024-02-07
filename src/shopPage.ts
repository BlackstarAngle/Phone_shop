//Classes declaration
class Phone {
    model: string;
    NettoPrice: number;
    BruttoPrice: number;
    guarantee: number;

    constructor(m: string, np: number, g: number = 2) {
        this.model = m;
        this.NettoPrice = np;
        this.BruttoPrice = np * 1.23;
        this.guarantee = g;
    }
}

class Accessory {
    name: string;
    nettoPrice: number;
    bruttoPrice: number;

    constructor(n: string, np: number, bp: number) {
        this.name = n;
        this.nettoPrice = np;
        this.bruttoPrice = bp;
    }
}

//Array declaration
let offer: Phone[] = [];


let iPhone = new Phone('iPhone', 20,);
let samsungGalaxy = new Phone('Samsung Galaxy', 18,);
let googlePixel = new Phone('Google Pixel', 7.5,);


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
function addToCart(model: string, nettoPrice: number) {

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Added ${model} to the cart. Total: $${nettoPrice}`;
}

window.onload = displayPhones;