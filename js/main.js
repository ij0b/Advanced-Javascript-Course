const products = [
    { id: 1, title: 'Notebook', price: 2000, img: "3x3.jpg" },
    { id: 2, title: 'Mouse', price: 20, img: "3x1.jpg" },
    { id: 3, title: 'Keyboard', price: 200, img: "1x3.jpg" },
    { id: 4, title: 'Gamepad', price: 50, img: "3x3.jpg" },
    { id: 5, title: 'Graphics card', price: 150, img: "3x3.jpg" },
    { id: 6, title: 'Personal computer number 123/200 long name ++++++++++++++++++', price: 500, img: "3x3.jpg" },
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    // Деструктуризация объекта product на переменные title, price, img (парсинг)
    let { title, price, img } = product;
    return `<div class="product-item">
                <a class="product_image-container" href="">
                    <img class="product_image" src="img/${img}" alt="${title}">
                </a>
                <h3 class="product_caption">
                    <a class="product_caption-link" href="">
                        ${title}
                    </a>    
                </h3>
                <div class="product_price-btn-container">
                    <p class="product_price">${price}</p>                    
                    <button class="buy-btn">Купить</button>
                </div>    
            </div>`
};
const renderPage = list => {
    let productsList = list.map(item => renderProduct(item));
    //+++ 1-ый способ удалить запятую через метод join() объединяющий элементы массива в строку
    productsList = productsList.join(' ');
    console.log(productsList);
    //+++ 2-ой способ удалить запятую через добавление в переменную элементов массива
    // let productsListHtml = '';
    // productsList.forEach(item => productsListHtml += item);

    //+++ Запятая появляется потому что map возвращает массив, который для перевода в строку пропускается через toString, который при формировании строки из этого массива разделяет его элементы запятыми.
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);