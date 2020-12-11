// Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

const fEmployee = emplyeeArr[1];

const Employee = function(obj){
      Object.assign(this, obj)
    }

const instance = new Employee(fEmployee)

console.log(instance);



