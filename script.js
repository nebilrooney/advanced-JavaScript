const student = {
    name: "taylor",
    age: 25,
    enrolled: true,
    courses: ["Programming", "Design", "Networking"],
    displayInfo: function () {
      return `${this.name} is ${this.age} years old and enrolled in ${this.courses.length} courses.`;
    }
  };
  
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Student Info:", student.displayInfo());
  
  const jsonString = JSON.stringify(student);
  console.log("JSON String:", jsonString);
  
  const parsedStudent = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedStudent);
  
  const { name:studentName, courses } = student;
  console.log("Destructured Name:", studentName);
  console.log("Destructured Courses:", courses);
  
  const scores = [80, 94, 72, 96];
  const [firstScore, secondScore] = scores;
  console.log("First Score:", firstScore);
  console.log("Second Score:", secondScore);
  
  const clonedStudent = { ...student };
  clonedStudent.graduationYear = 2025;
  console.log("Cloned Student with Graduation Year:", clonedStudent);
  
  const newCourses = ["Structures", "Java"];
  const mergedCourses = [...student.courses, ...newCourses];
  console.log("Merged Courses:", mergedCourses);
  
  student.addCourse = function (courseName) {
    this.courses.push(courseName);
  };
  
  student.totalCourses = function () {
    return this.courses.length;
  };
  
  student.addCourse("Machine Learning");
  console.log("Courses after adding:", student.courses);
  console.log("Total number of courses:", student.totalCourses());
  