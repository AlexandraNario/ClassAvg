//for the main application logic
//To set up the main.js file to import the necessary functions and modules, add the following lines at the top of the file:


import { renderStudentTable, updateGrade } from "./studentTable.js";
import  calculateClassroomAverage  from "./calculateClassroomAverage.js";
import { students } from "./studentData.js";

document.addEventListener("DOMContentLoaded", function () {
  const tableElement = document.getElementById("student-table");
  renderStudentTable(tableElement, students);
  const classroomAverage = calculateClassroomAverage(students);
  const averageCell = document.getElementById("classroom-average");
  averageCell.innerHTML = classroomAverage.toFixed(2);
  tableElement.addEventListener("change", function (event) {
    if (event.target.tagName === "INPUT") {
      updateGrade(event.target);
      const classroomAverage = calculateClassroomAverage(students);
      averageCell.innerHTML = classroomAverage.toFixed(2);
    }
  });
});
// Select the span element
const classroomAverage = document.querySelector('#classroom-average');

// Add an event listener to each input element
const inputs = document.querySelectorAll('input');
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('input', () => {
    // Call the updateGrade function
    updateGrade(i);

    // Recalculate the classroom average
    const classroomAvg = calculateClassroomAverage(students);

    // Update the classroom average display
    classroomAverage.textContent = `Classroom Average: ${classroomAvg.toFixed(2)}`;
  });
}