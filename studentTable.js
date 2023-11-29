//creating and updating the student table
//Import the student data from studentData.js
import {students} from "./studentData.js";

//create a function named renderStudentTable that takes two parameters:
//*table (a reference to the HTML table where the data will be displayed).
//*data (the student data from studentData.js).
function renderStudentTable(table, data) {
    for (let i = 0; i < data.length; i++) {
      const row = table.insertRow();
      const idCell = row.insertCell();
      const nameCell = row.insertCell();
      const addressCell = row.insertCell();
      const gradeCell = row.insertCell();
  
      idCell.innerHTML = data[i].id;
      nameCell.innerHTML = data[i].name;
      addressCell.innerHTML = data[i].address;
  
      const gradeInput = document.createElement("input");
      gradeInput.type = "number";
      gradeInput.value = data[i].averageGrade;
      gradeInput.dataset.studentId = data[i].id;
      gradeInput.addEventListener("change", function (event) {
        updateGrade(event.target);
      });
  
      gradeCell.appendChild(gradeInput);
    }
  }
  
  function updateGrade(inputElement) {
    const studentId = inputElement.dataset.studentId;
    const newGrade = Number(inputElement.value);
  
    for (let i = 0; i < students.length; i++) {
      if (students[i].id === Number(studentId)) {
        students[i].averageGrade = newGrade;
        break;
      }
    }
  
    const classroomAverage = calculateClassroomAverage(students);
    const averageCell = document.getElementById("classroom-average");
    averageCell.innerHTML = classroomAverage.toFixed(2);
  };

  export { renderStudentTable, updateGrade }; 