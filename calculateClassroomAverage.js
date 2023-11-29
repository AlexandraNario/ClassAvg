//for calculating the classroom avg grade
//create a function named calculateClassroomAverage that takes the studentData as a parameter and returns the average
function calculateClassroomAverage(studentData) {
    let sum = 0;
  
    for (let i = 0; i < studentData.length; i++) {
      sum += studentData[i].averageGrade;
    }
  
    return sum / studentData.length;
  };
  export {calculateClassroomAverage};