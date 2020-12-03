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