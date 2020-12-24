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