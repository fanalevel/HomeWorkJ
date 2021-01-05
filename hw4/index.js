// Задание 1
// Задача - создать класс Student который принимает аргументом в конструкторе объект enrollee (абитурент). У экземпляра класса Student должны быть поля:
// id - уникальный идентификатор студента (генерируется при создании экземпляра и начинается с 1);
// name - имя студента (передаем в объекте enrollee);
// surname - фамилия студента (передаем в объекте enrollee);
// ratingPoint - рейтинг студента по результатам вступительных экзаменов (передаем в объекте enrollee);
// schoolPoint - рейтинг студента по результатам ЗНО (передаем в объекте enrollee);
// isSelfPayment - если true, то студент на контракте, если false - на бюджете (генерируется по логике указанной ниже).
// Id генерируется автоматически при создании экземпляра Student. isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, то студент может быть на бюджет, но бюджет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. Студентов которые на бюджете не должно быть больше чем 5 в массиве. То есть если "ratingPoint" больше чем хоть у одного из 5 бюджетников то мы присваиваем isSelfPayment = false. И в этот момент студент из массива который имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бюджетников, с нашим включительно, то ему делаем isSelfPayment = true, то есть переводим этого неудачника на контракт. Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.


const studentArr = [{
        name: 'Сергей',
        surname: 'Войлов',
        ratingPoint: 1000,
        schoolPoint: 1000,
        course: 2,
    },
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 650,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 990,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];


class Student {
  constructor(enrole){
    Object.assign(this, enrole)
    this.id = Student.id++;
    this.sortUdersByRate();
  }

  static id = 1;

  static studentList = [];

  sortUdersByRate(){
    // const budGetStudentList = Student.studentList.filter(student => !student.isSelfPayment)
    // if (budGetStudentList.lenght < 5){
    //   this.isSelfPayment = this.rating < 800;
    //   Student.studentList.push(this);
    //   return;
    // }
    Student.studentList.push(this);
    Student.studentList.sort((a, b) => {
      if (a.ratingPoint > b.ratingPoint) return -1;
      if (a.ratingPoint < b.ratingPoint) return 1;
      if (a.schoolPoint > b.schoolPoint) return -1;
      if (a.schoolPoint > b.schoolPoint) return 1;
      return 0; 
    })
    for (let index in Student.studentList) {
      const student = Student.studentList[index];
      if (student.ratingPoint < 800) {
        student,isSelfPayment = true;
      }
      student.isSelfPayment = index >= 5;
      }
    }

    get budGetStudent() {
      const result = [];
      for (let student of this.studentList) {
        !student.isSelfPayment && result.push(student)
      }
    }
}

// Задание 2

// Реализуйте класс CustomString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

let str = 'qwerty qwerty qwerty'

class CustomString {
  constructor(str) {
    this.str = str;
    this.reverse();
    this.ucFirst();
    this.ucWords();
  }

  reverse(){
    return str.split('').reverse().join('');
  }

  ucFirst(){
    return str[0].toUpperCase() + str.slice(1);
  }
  ucWords(){
    return (str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
);
  }
}

const myString = new CustomString();

myString.reverse('qwerty'); //выведет 'ytrewq'

console.log(myString.reverse('qwerty'))

myString.ucFirst('qwerty'); //выведет 'Qwerty'

console.log(myString.ucFirst('qwerty'))

myString.ucWords('qwerty qwerty qwerty'); //выведет 'Qwerty Qwerty Qwerty

console.log(myString.ucWords('qwerty qwerty qwerty'));


// // Задание 3. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод checkIsEmail() параметром принимает строку и проверяет, является ли она емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод checkIsDomain для проверки домена, метод checkIsDate для проверки даты и метод checkIsPhone для проверки телефона:



class Validator {
  constructor(){
    this.checkIsEmail();
  }

  checkIsEmail(inputText){
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat))
        {
        alert("Valid email address!");
        document.form.email.focus();
        return true;
        }
        else
        {
        alert("You have entered an invalid email address!");
        document.form.email.focus();
        return false;
  }
  }
  }

