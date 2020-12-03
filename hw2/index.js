// Stage 1

const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};

let tetx = []

for (let key in citiesAndCountries) {
      tetx.push(key + ' это ' + citiesAndCountries[key]);
}

console.log (tetx);

// _________________

// Stage 2

function getArray(){
    const amount = 12;
    const arrA = [];
    let k = 0;
    for (let i = 0; i < (amount / 3); i++) {
      arrA[i] = [];      
      for (let j = 0; j < 3; j++) {
        k = k + 1;               
        arrA[i][j] = k;
      }
    }
    return arrA;
}

console.log (getArray());

// _________________

// Stage 3

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда','Четверг', 'Пятница', 'Суббота', 'Воскресенье', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(){
    let lang = 'ru';
    let day = 5;
    if(lang == 'en'){
        console.log(namesOfDays.en[(day-1)])
    }
    if(lang == 'ru'){
        console.log(namesOfDays.ru[day-1])
    }
}

getNameOfDay()

// _________________

// Stage 4

const arr = [12, -898, 899, -900, 300, 400, - 12, 56, 5.7];

function SumMinPlus () {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
        arr.splice(i, 1);
    }
    if (arr[i] - Math.trunc(arr[i]) !=0) {
      arr.splice(i, 1);
    }
} arr.sort(function(a,b){ 
    return a - b;
  })
  console.log(arr[0] + arr[1]);
}

SumMinPlus ();


// _________________

// Stage 5

const number = [1, 0, 1, 1, 0, 1, 0, 1];

console.log(parseInt(number.join(''), 2));