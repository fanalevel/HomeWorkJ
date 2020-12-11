// Задание 1. Создать функцию - конструктор, которая будет иметь внутри все свойства обьекта emplyee из массива emplyeeArr;

const employee = emplyeeArr[6];

const Employee = function(obj){
      Object.assign(this, obj)

      this.getFullName = function() {        
        return `${this.name} ${this.surname}`;
        }
    }

const employeeObj = new Employee(employee)

employeeObj.getFullName()

console.log(employeeObj);

console.log(employeeObj.getFullName());

// Задание 2. Добавить функции - конструктору метод (помним про prototype): getFullName который вернет полное имя начиная с фамилии в виде строки

