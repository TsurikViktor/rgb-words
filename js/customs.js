var changeFunction;

function rgb(red = 0, green = 0, blue = 0) {
    red = +prompt(`Введите значение red -->`); 
    green = +prompt(`Введите значение green  -->`); 
    blue = +prompt(`Введите значение blue -->`); 
    if (!red) red = 0;
    if (!green) green = 0;
    if (!blue) blue = 0;
    console.log(`RGB( ${red}, ${green}, ${blue})`);
    return `RGB( ${red}, ${green}, ${blue})`;

};

function words(product = 0) {
    product = +prompt(`Введите кол-во товаров --->`);
    if (!product) product = 0;
    var value = Math.abs(product) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return alert(`${product} товаров`);
    if (num > 1 && num < 5) return alert(`${product} товара`);
    if (num == 1) return alert(`${product} товар`);
    console.log(`${product} товаров`);
    return `${product} товаров`;
    
};

changeFunction = confirm('для вызова функции rgb() нажмите (OK), для вызова функции words() нажмите (Отмена)');

if (!changeFunction) {
    words();
} else {
    rgb();
};

