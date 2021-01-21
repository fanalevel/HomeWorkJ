// 1
// Создать функцию которая будет удалять людей из массива по индексу, который мы передадим параметром. 

function removeUser(array, index) {
  array.splice(index, 1);
  }


const arr = ['Vasya', 'Petya', 'Alexey']

removeUser(arr, 0);

console.log(arr)


