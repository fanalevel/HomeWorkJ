// 1
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 

function removeUser(array, index) {
  array.splice(index, 1);
  }


const arr = ['Vasya', 'Petya', 'Alexey']

removeUser(arr, 0);

console.log(arr)


// 2
// Создать функцию которая вернет все ключи обьекта переданного параметром


function getAllKeys (object){
  return Object.keys(object);
  }



const obj = {
  name: 'Vasya', 
  age: 1,
  surname: 'Vasiliev'
}

getAllKeys(obj)

console.log(getAllKeys(obj))


