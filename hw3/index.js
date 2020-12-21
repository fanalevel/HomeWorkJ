// Задание 1. Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

const employee = emplyeeArr[6];

const Emploee = function(obj){
      Object.assign(this, obj)

      this.getFullName = function() {        
        return `${this.name} ${this.surname}`;
        }
    }

const employeeObj = new Emploee(employee)

console.log(employeeObj);

console.log(employeeObj.getFullName());

// Задание 2. Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки

// Задание 3.Создать новый массив на основе emplyeeArr в котором будут содержаться те же обьекты, но созданные функцией - конструктором Emploee. Новый массив должен содержать имя emplyeeConstructArr.


let createEmployesFromArr = (arr) => {
    Array.from(Emploee);
    return arr;
};

const emplyeeConstructArr = createEmployesFromArr(emplyeeArr) 

console.log(emplyeeConstructArr)

// Задание 4. Создать функцию которая вернет массив со всеми полными именами каждого employee, содержащегося в emplyeeConstructArr;

const getFullNamesFromArr = (arr) => {
  arr = emplyeeConstructArr.map(Emploee.getFullName())
      return arr;
}

getFullNamesFromArr(emplyeeConstructArr)

console.log(getFullNamesFromArr(emplyeeConstructArr))
