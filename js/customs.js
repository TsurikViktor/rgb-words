var changeFunction;

function rgb(red, green, blue) {
    if (!red) red = 0;
    if (!green) green = 0;
    if (!blue) blue = 0;
    return 'RGB( ' + red +',' + green +',' + blue +')'
};

function words(product) {
    if (!product) product = 0;
    var value = Math.abs(product) % 100;
    var num = value % 10;
    if (value > 10 && value < 20) return alert(`${product} товаров`);
    if (num > 1 && num < 5) return alert(`${product} товара`);
    if (num == 1) return alert(`${product} товар`);
    return `${product} товаров`
};

changeFunction = confirm('для вызова функции rgb() нажмите (OK), для вызова функции words() нажмите (Отмена)');

if (!changeFunction) {
    var productWords = words(+prompt(`Введите кол-во товаров --->`));
    console.log(productWords);
} else {
    var rgbColor = rgb(+prompt(`Введите значение red -->`), +prompt(`Введите значение green  -->`), +prompt(`Введите значение blue -->`));
    console.log(rgbColor);
};