function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if("marks" in this && Array.isArray(this.marks)) {
  	this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if("marks" in this && Array.isArray(this.marks) && this.marks.length !== 0) {
  	return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
  } else {
  	return 0;
  }
}

Student.prototype.exclude = function (reason) {
  this.excluded = reason;
  delete this.marks;
}