let x = ''; //перше вхідне число
let y = ''; //друге вхідне число
let sign = ''; //дія з числами
let finish = false; //нажали = і всьо обрахувалось

const digit = ['0','1','2','3','4','5','6','7','8','9','.']; //цифри
const action = ['/','X','-','+','+/-','%']; //операції над цифрами

//екран
const out = document.querySelector('.screen p');

//Clear All (ac)
document.querySelector('.ac').onclick = function () {
    x = '';
    y = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.buttons').onclick = (event) => { //event - елемент на який нажали в класі 'buttons'
    if (!event.target.classList.contains('btn')) return; //Якщо елемент, на який нажали, не має класу 'btn' то це не кнопка, а поле. Вертаєм нічого.
    if (event.target.classList.contains('ac')) return;

    out.textContent = '';
    //отримую натиснуту кнопку
    const key = event.target.textContent;

    //кнопка 0-9 або .
    if (digit.includes(key)) {
        if (y === '' && sign == '') {
            x += key;
            out.textContent = x;
        }
        else if (x !== '' && y !== '' && finish) {
            y = key;
            finish = false;
            out.textContent = y;
        }
        else {
            y += key;
            out.textContent = y;
        }
        return;
    }

    //кнопка / Х - +
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    //кнопка = виконується обрахунок
    if (key === '=') {
        if (x === '') x = y;
        switch (sign) {
            case '/':
                if (y === '0') {
                    x = '';
                    y = '';
                    sign = '';
                    out.textContent = 'ERROR';
                    return;
                }
                x /= y;
                break;

            case 'X':
                x *= y;
                break;

            case '-':
                x -= y;
                break;

            case '+':
                x = (+x) + (+y);
                break;
            
            case '+/-':
                x *= -1;
                break;

            case '%':
                x = x*y/100;
                break;
        }
        finish = true;
        out.textContent = x;
    }
}

//Кнопки меню
const menu = document.querySelectorAll('.menu')
const btn = document.querySelectorAll('.btn')

document.querySelector('.menus').onclick = function () {
    
}