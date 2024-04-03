const itemsList = document.querySelector(".items-list");

const items = [
    { "name": "X-Burguer", "price": "12.90", "image": "x-burguer.jpg" },
    { "name": "Double-X", "price": "15.90", "image": "double-x.jpeg" },
    { "name": "O Burguer-X", "price": "14.90", "image": "o-burguer-x.jpg" },
    { "name": "X-Bacon", "price": "18.90", "image": "x-bacon.jpg" },
    { "name": "X-Futuro", "price": "20.90", "image": "x-futuro.jpg" },
    { "name": "X-Salada", "price": "12.90", "image": "x-salada.jpg" },
];

document.addEventListener("DOMContentLoaded", () => {

    let output = '';

    items.forEach(({ name, price, image }) => {

        output += `<div class="item-card">

        <img class="item-image" src="assets/images/${image}" alt="">

        <div class="card-content">

            <h2>${name}</h2>

            <p class="item-price"><span class="less-price">R$</span>${price}</p>

            <div class="item-raiting">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>
            </div>

            <div class="item-option">
                <a href="item-details.html?name=${name}&price=${price}&image=${image}" class="option-detail"> Ver Detalhes </a>

                <div class="icon-option">
                    <i class='bx bx-chat'></i>
                </div>

                <div class="icon-option">
                    <i class='bx bx-heart'></i>
                </div>

            </div>

        </div>

    </div>`;

    });

    itemsList.innerHTML += output;

});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
}