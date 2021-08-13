var changeFunction;
var red;
var green;
var blue;
var product;

function rgb(red, green, blue) {
    if (!red) red = 0;
    if (!green) green = 0;
    if (!blue) blue = 0;
    return alert(`RGB( ${red}, ${green}, ${blue})`);
};

function words(product) {
    if (!product) product = 0;
    var value = Math.abs(product) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return alert(`${product} товаров`);
    if (num > 1 && num < 5) return alert(`${product} товара`);
    if (num == 1) return alert(`${product} товар`);
    return alert(`${product} товаров`);
};

changeFunction = confirm('для вызова функции rgb() нажмите (OK), для вызова функции words() нажмите (Отмена)');

if (!changeFunction) {
    product = +prompt(`Введите кол-во товаров --->`);
    words(product);
} else {
    red = +prompt(`Введите значение red -->`); 
    green = +prompt(`Введите значение green 2 -->`); 
    blue = +prompt(`Введите значение blue -->`); 
    rgb (red, green, blue);
};