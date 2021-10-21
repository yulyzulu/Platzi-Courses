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
  twitter:"juandc"
});

const yuli = new Student({
  name: 'Yuli',
  username: 'yulyzulu',
  email: 'yulyzulu@gmail.com',
  instagram: 'yulyzulu'
});