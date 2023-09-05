// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.)) or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration

var name = "Shubham  Patil";
var school = "ST.LAWRENCE HIGH SCHOOL";
var grade = 3;
var section = "A";
var rollno = 26;
var english = 80;
var hindi = 92;
var math = 84;

// console.log(name+", " +school+", " +grade+", " +section+", " +rollno+", " +english+", " +hindi+", " +math)

console.log("__________________________________________")
console.log("|                                        |")
console.log("|        "+school+"         |")
console.log("|              Report Card               |")
console.log("|----------------------------------------|")
console.log("|Name-    "+name+"    Grade-   "+grade+"   |")
console.log("|Section- "+section+"                 Roll No- "+rollno+"  |")
console.log("|________________________________________|")
console.log("|Marks in Subjects                       |")
console.log("|*English :                            "+ english+"|")
console.log("|*Hindi   :                            "+hindi+"|")
console.log("|*Math    :                            "+math+"|")
console.log("|________________________________________|")
console.log("|Total Marks:                         "+(80+92+84)+"|")
console.log("|Out of 300*                             |")
console.log("|________________________________________|")