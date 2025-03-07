const studentList = [

{ firstName: "Allan", lastName: "Able", scores: [95, 85, 92, 98] },

{ firstName: "Amy", lastName: "Alexander", scores: [80, 88, 100] },

{ firstName: "Betty", lastName: "Barns", scores: [70, 80, 90, 100] },

{ firstName: "Bob", lastName: "Bones", scores: [75, 85, 95, 85] },

{ firstName: "Cindy", lastName: "Chase", scores: [95, 90, 92, 98] },

{ firstName: "Charles", lastName: "Chips", scores: [88, 99, 90] }

];

studentList.forEach(student => {
student.scores = student.scores.map(score => score + 5);
student.scores.push(student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length);

});

console.log("Student Scores (Updated):");
studentList.forEach(({ firstName, lastName, scores }) => {
console.log(`${firstName} ${lastName}: SCORES = [${scores.map(s => s.toFixed(2)).join(", ")}]`);
});