// 1 Создать цикл на 10 итераций. На каждой итерации если i четное, то вывести в консоль слово Fiz, если i не четное, то вывести в консоль слово Buz, если i кротное цифре 3, то вывести FizBuz.

for(i = 0; i <= 9; i++) {
  if(i % 3 == 0) {
    console.log('Buz')
  } else if (i % 2 == 0) {
    console.log('Fiz')
  } else {
    console.log('FizBuz')
  }
}

console.log('---End First Part---')
console.log('---Start Second Part---')

// 2 писать логику нахождения факториала числа.

let factorial = 5;
let num = 1;

for(i = 1; i <= factorial; i++) {
  num = num * i
}

console.log('Факториал' + ' ' + factorial + '! = ' + num);

console.log('---End Second Part---')
console.log('---Start Third Part---')

// 3 В пачке бумаги 500 листов. За неделю в офисе расходуется 1200 листов. Какое наименьшее количество пачек бумаги нужно купить в офис на 8 недель?

const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let result = Math.ceil((weeksAmount * consumptionPerWeek) / sheetsInReamPaper);

// переписать код выше через if и %

console.log(result)

console.log('---End Third Part---')
console.log('---Start Fourth Part---')

// 4* Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры. Этажей у нас 9, квартир на этаже по 3

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 114; 

function ShowNumber () {
  let podezd = Math.trunc((roomNumber - 1) / (floors * roomsOnFloor)) + 1;
  let etag = Math.trunc(((roomNumber - 1) % (floors * roomsOnFloor)) / roomsOnFloor) + 1; 
  return 'Квартира номер ' + roomNumber + ' ' + 'Подъезд ' + podezd  + ' ' + 'Этаж ' + etag;
} 

console.log(ShowNumber());

console.log('---End Fourth Part---')
console.log('---Start Fifth Part---')

// 5** Вывести в консоль пирамиду. Переменная указывает количество строк из которых построится пирамида. Пирамида должна строится в одинаковом визуально виде между собой, но строго учитывая кол-во строк

const medianNumber = 11;

for(let i = 1; i <= medianNumber; i++) {
  let linia = '';
  let reshotka = '';
    for(let j = 0; j < 2 * i - 1; j++) {
      reshotka += '#'
    }  
    for (let j = 0; j < medianNumber - i; j++) {
      linia += '-'
    } 
    console.log(linia + reshotka + linia)
}