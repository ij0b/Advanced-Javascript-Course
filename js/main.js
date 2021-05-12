class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _sumPrices() {
        let sumPrices = 0;
        for (let product of this.goods) {
            sumPrices += product.price;
        }
        console.log("+++2.\n Сумма всех товаров: " + sumPrices + "\n");
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000, img: "img/3x3.jpg" },
            { id: 2, title: 'Mouse', price: 20, img: "img/3x1.jpg" },
            { id: 3, title: 'Keyboard', price: 200, img: "img/1x3.jpg" },
            { id: 4, title: 'Gamepad', price: 50 },
            { id: 5, title: 'Graphics card', price: 150, img: "img/3x3.jpg" },
            { id: 6, title: 'Personal computer number 123/200 long name ++++++++++++++++++', price: 500, img: "img/3x3.jpg" },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
            //            block.innerHTML += productObj.render();
        }
    }

}


class ProductItem {
    constructor(product) {
        let { title, price, id, img } = product;
        if (img == undefined) {
            img = img = 'https://via.placeholder.com/200x150';
        }
        this.title = title;
        this.price = price;
        this.id = id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <a class="product_image-container" href="">
                    <img class="product_image" src="${this.img}" alt="${this.title}">
                </a>
                <h3 class="product_caption">
                    <a class="product_caption-link" href="">
                        ${this.title}
                    </a>    
                </h3>
                <div class="product_price-btn-container">
                    <p class="product_price">${this.price}</p>                    
                    <button class="buy-btn">Купить</button>
                </div>    
            </div>`
    }
}

let list = new ProductsList();
list.render();
list._sumPrices();

class ListBasketGoods {
    constructor() {

    }

    show() {

    }

    hide() {

    }

    sort() {

    }

    filter() {

    }

    delete() {

    }
}

class BasketProduct {
    constructor() {

    }

    add() {

    }

    delete() {

    }

    showDetailPage() {

    }

    changeQuantity() {

    }
}


/*
    +++3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
    ### Маленький (50 рублей, 20 калорий).
    ### Большой (100 рублей, 40 калорий).
    Гамбургер может быть с одним из нескольких видов начинок (обязательно):
    С сыром (+10 рублей, +20 калорий).
    С салатом (+20 рублей, +5 калорий).
    С картофелем (+15 рублей, +10 калорий).
    Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
    Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.
*/

class Hamburger {
    constructor() {
        this.listHamburgers = [
            { name: "маленький", price: 50, calories: 20 },
            { name: "большой", price: 100, calories: 40 }
        ]
        this.listFillings = [
            { name: "сыр", price: 10, calories: 20 },
            { name: "салат", price: 20, calories: 5 },
            { name: "картофель", price: 15, calories: 10 },
        ]
        this.listAdditionalFillings = [
            { name: "приправа", price: 15, calories: 0 },
            { name: "майонез", price: 20, calories: 5 },
        ]
    }

    calculationСostAndCalorieAllHamburgers() {
        console.log("+++3.\n");
        for (let hamburger of this.listHamburgers) {
            for (let filling of this.listFillings) {
                let completedHamburger = `
                    Гамбургер ${hamburger.name}, ${filling.name} \n
                    Цена: ${hamburger.price + filling.price}. Каллорийность: ${hamburger.calories + filling.calories} \n
                `;
                console.log(completedHamburger);
                for (let additionalFilling of this.listAdditionalFillings) {
                    completedHamburger = `
                        Гамбургер ${hamburger.name}, ${filling.name}, ${additionalFilling.name} \n
                        Цена: ${hamburger.price + filling.price + additionalFilling.price}. Каллорийность: ${hamburger.calories + filling.calories + additionalFilling.calories} \n
                    `;
                    console.log(completedHamburger);
                }
            }
        }
    }
}

let objHamburger = new Hamburger();
objHamburger.calculationСostAndCalorieAllHamburgers();

/*
    ---3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
*/






