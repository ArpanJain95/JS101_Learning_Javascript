// Problem
// Create an object with the following functionality
// //Ability to add 3 students details and their marks in 3 subjects
// //Method to find the student with the least total.
// //Method to find the student with the highest total.

let createObject = {
  data : [],
  addStudents : function(name, english, science, maths)
  {
    let obj = {
      name : name,
      english : english,
      science : science,
      maths : maths,
    }
    this.data.push(obj);
  },
  print : function()
  {
    console.log(this.data)
  },
  leastTotal : function()
    {
      let min = Infinity;
      let minStudent;
      for(let i=0; i<this.data.length; i++){
      let total = this.data[i].english+this.data[i].science+this.data[i].maths
      if(total<min)
        {
          min = total;
          minStudent = this.data[i].name
        }
      }
console.log(minStudent, min)
    },
  highestTotal : function()
    {
      let max = -Infinity;
      let maxStudent;
      for(let i=0; i<this.data.length; i++){
      let total = this.data[i].english+this.data[i].science+this.data[i].maths
      if(total>max)
        {
          max = total;
          maxStudent = this.data[i].name
        }
      }
console.log(maxStudent, max)
    }
}

createObject.addStudents("Shubham", 60, 90, 55);
createObject.addStudents("Darshan", 85, 70, 50);
createObject.addStudents("Niraj", 45, 70, 65);
createObject.print()
createObject.leastTotal()
createObject.highestTotal()