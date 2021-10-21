// Prototipos con la sintaxis de clases

class Student {
  constructor(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguel = new Student(
  "Miguel",
  28,
  [
    "Curso de Análisis de Negocios para Ciencia de Datos",
    "Curso de Principios de visualización de Datos"
  ]
);

// Existe otra forma de crear el objeto cuando tenemos muchos datos y no recordamos los nombres, para eso mandamos el objeto cuando instanciamos la clase:
// Con esto no importa el orden en el que lo mandamos
// También le podemos mandar valores por defecto.

// class Student {
//   constructor({
//     name,
//     age,
//     email,
//     cursosAprobados = []}) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.cursosAprobados = cursosAprobados;
//   }

//   aprobarCurso(nuevoCursito) {
//     this.cursosAprobados.push(nuevoCursito);
//   }
// }

// const miguel = new Student({
//   name: "Miguel",
//   age: 28,
//   cursosAprobados: [
//     "Curso de Análisis de Negocios para Ciencia de Datos",
//     "Curso de Principios de visualización de Datos"
//   ]
// });