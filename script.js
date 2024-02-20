let equation = document.getElementById('equation');
let str = '';

var blink_speed = 1000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('line');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, blink_speed);

// Box 1 Buttons
let expElement = document.getElementById('exp');
expElement.addEventListener('click', function () {
    str = str + 'E';
    equation.innerText = equation.innerText + 'E';
    console.log(str);
});

let powElement = document.getElementById('pow');
powElement.addEventListener('click', function () {
    str = str + '^';
    equation.innerText = equation.innerText + '^';
    console.log(str);
});

let logElement = document.getElementById('log');
logElement.addEventListener('click', function () {
    str = str + 'log10(';
    equation.innerText = equation.innerText + 'log(';
    console.log(str);
});

let lnElement = document.getElementById('ln');
lnElement.addEventListener('click', function () {
    str = str + 'ln(';
    equation.innerText = equation.innerText + 'ln(';
    console.log(str);
});

let lnvElement = document.getElementById('lnv');
lnvElement.addEventListener('click', function () {
    str = str + 'Inv(';
    equation.innerText = equation.innerText + 'Inv(';
    console.log(str);
});

let piElement = document.getElementById('pi');
piElement.addEventListener('click', function () {
    str = str + 'pi';
    equation.innerText = equation.innerText + 'π';
    console.log(str);
});

let tanElement = document.getElementById('tan');
tanElement.addEventListener('click', function () {
    str = str + 'tan(';
    equation.innerText = equation.innerText + 'tan(';
    console.log(str);
});

let cosElement = document.getElementById('cos');
cosElement.addEventListener('click', function () {
    str = str + 'cos(';
    equation.innerText = equation.innerText + 'cos(';
    console.log(str);
});

let sinElement = document.getElementById('sin');
sinElement.addEventListener('click', function () {
    str = str + 'sin(';
    equation.innerText = equation.innerText + 'sin(';
    console.log(str);
});

let degElement = document.getElementById('deg');
degElement.addEventListener('click', function () {
    str = str + ' deg)';
    equation.innerText = equation.innerText +'deg)';
    console.log(str);
});

let eElement = document.getElementById('e');
eElement.addEventListener('click', function () {
    str = str + 'e';
    equation.innerText = equation.innerText + 'e';
    console.log(str);
});

let onebyxElement = document.getElementById('onebyx');
onebyxElement.addEventListener('click', function () {
    str = str + '1/x';
    equation.innerText = equation.innerText + '1/x';
    console.log(str);
});

let underrootElement = document.getElementById('underroot');
underrootElement.addEventListener('click', function () {
    str = str + '√';
    equation.innerText = equation.innerText + '√';
    console.log(str);
});

let modElement = document.getElementById('mod');
modElement.addEventListener('click', function () {
    str = str + '%';
    equation.innerText = equation.innerText + '%';
    console.log(str);
});

let factElement = document.getElementById('fact');
factElement.addEventListener('click', function () {
    str = str + 'x!';
    equation.innerText = equation.innerText + 'x!';
    console.log(str);
});

// Box 2 Buttons
let n0Element = document.getElementById('n0');
n0Element.addEventListener('click', function () {
    str = str + '0';
    equation.innerText = equation.innerText + '0';
    console.log(str);
});

let n1Element = document.getElementById('n1');
n1Element.addEventListener('click', function () {
    str = str + '1';
    equation.innerText = equation.innerText + '1';
    console.log(str);
});

let n2Element = document.getElementById('n2');
n2Element.addEventListener('click', function () {
    str = str + '2';
    equation.innerText = equation.innerText + '2';
    console.log(str);
});

let n3Element = document.getElementById('n3');
n3Element.addEventListener('click', function () {
    str = str + '3';
    equation.innerText = equation.innerText + '3';
    console.log(str);
});

let n4Element = document.getElementById('n4');
n4Element.addEventListener('click', function () {
    str = str + '4';
    equation.innerText = equation.innerText + '4';
    console.log(str);
});

let n5Element = document.getElementById('n5');
n5Element.addEventListener('click', function () {
    str = str + '5';
    equation.innerText = equation.innerText + '5';
    console.log(str);
});

let n6Element = document.getElementById('n6');
n6Element.addEventListener('click', function () {
    str = str + '6';
    equation.innerText = equation.innerText + '6';
    console.log(str);
});

let n7Element = document.getElementById('n7');
n7Element.addEventListener('click', function () {
    str = str + '7';
    equation.innerText = equation.innerText + '7';
    console.log(str);
});

let n8Element = document.getElementById('n8');
n8Element.addEventListener('click', function () {
    str = str + '8';
    equation.innerText = equation.innerText + '8';
    console.log(str);
});

let n9Element = document.getElementById('n9');
n9Element.addEventListener('click', function () {
    str = str + '9';
    equation.innerText = equation.innerText + '9';
    console.log(str);
});

let openElement = document.getElementById('open');
openElement.addEventListener('click', function () {
    str = str + '(';
    equation.innerText = equation.innerText + '(';
    console.log(str);
});

let closeElement = document.getElementById('close');
closeElement.addEventListener('click', function () {
    str = str + ')';
    equation.innerText = equation.innerText + ')';
    console.log(str);
});

let dotElement = document.getElementById('dot');
dotElement.addEventListener('click', function () {
    str = str + '.';
    equation.innerText = equation.innerText + '.';
    console.log(str);
});

// let expression = '(3 ** 2 * 2/8)';
// let result = eval(expression);

let equalElement = document.getElementById('equal');
equalElement.addEventListener('click', function () {
    // Handle equal button logic
    try {
        str = math.evaluate(str);
        equation.innerText = str;
        // console.log('Equal button clicked');
    } catch (error) {
        str="";
        equation.innerText="";
        alert("Error");
    }
});

let clearElement = document.getElementById('clear');
clearElement.addEventListener('click', function () {
    str = '';
    equation.innerText = '';
    console.log('Clear button clicked');
});

let plusElement = document.getElementById('plus');
plusElement.addEventListener('click', function () {
    str = str + '+';
    equation.innerText = equation.innerText + '+';
    console.log(str);
});

let minusElement = document.getElementById('minus');
minusElement.addEventListener('click', function () {
    str = str + '-';
    equation.innerText = equation.innerText + '-';
    console.log(str);
});

let mulElement = document.getElementById('mul');
mulElement.addEventListener('click', function () {
    str = str + '*';
    equation.innerText = equation.innerText + '*';
    console.log(str);
});

let divideElement = document.getElementById('divide');
divideElement.addEventListener('click', function () {
    str = str + '/';
    equation.innerText = equation.innerText + '/';
    console.log(str);
});

let backElement = document.getElementById('back');
backElement.addEventListener('click', function () {
    str = str.slice(0, -1);
    equation.innerText = equation.innerText.slice(0, -1);
    console.log(str);
});