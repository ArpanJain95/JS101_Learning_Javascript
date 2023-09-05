// ### **Problem-2 Grade Student Marks**

// - Given an object of student grades and their marks in the mentioned below format, print the highest scored student for each grade along with the total

let arr = [
  {
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
];
function findHighestScorer(data) {
  let highest = 0;
  let highestscore = null;

  for(let student of data.students){
    let totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
    
    if(totalMarks > highest){
      highest = totalMarks;
      highestscore = student;
    }
  }
  return {name: highestscore.name, total: highest};
}
function printHighestScorers(arr) {
    for (const grade of arr) {
        let highestscore = findHighestScorer(grade);
        console.log(`${grade.grade}-${highestscore.name}-${highestscore.total}`)
    }
}

printHighestScorers(arr);