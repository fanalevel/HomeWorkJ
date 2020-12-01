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

for (let key in citiesAndCountries) {
      console.log(key + ' это ' + citiesAndCountries[key]);
}

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
