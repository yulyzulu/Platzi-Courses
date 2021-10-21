//Abstracción
// Abstraer los datos de un objeto para crear su moldecito, su clase, su prototipo.
class Course {
  constructor({
    name,
    classes = [],
    comments = [],
  }) {
    this.name = name;
    this.classes = classes;
    this.comments = comments;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});

const cursoPracticoHTML = new Course({
  name: "Curso Práctico de HTML y CSS",
});

class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de VideoJuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
});

class Student {
  constructor ({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter:"juandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ]
});

const yuli = new Student({
  name: 'Yuli',
  username: 'yulyzulu',
  email: 'yulyzulu@gmail.com',
  instagram: 'yulyzulu',
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});