const studentList = [
  {
    firstName: "Allan",
    lastName: "Able",
    scores: [95, 85, 92, 98]
  },
  {
    firstName: "Amy",
    lastName: "Alexander",
    scores: [80, 88, 100]
  },
  {
    firstName: "Betty",
    lastName: "Barns",
    scores: [70, 80, 90, 100]
  },
  {
    firstName: "Bob",
    lastName: "Bones",
    scores: [75, 85, 95, 85]
  },
  {
    firstName: "Cindy",
    lastName: "Chase",
    scores: [95, 90, 92, 98]
  },
  {
    firstName: "Charles",
    lastName: "Chips",
    scores: [88, 99, 90]
  },
];

const cLastNameResults = studentList

  .filter(({ lastName }) => lastName.startsWith("C"))
  .map(({ firstName, lastName, scores }) => {
    const minScore = scores.reduce((min, score) => (score < min ? score : min), scores[0]);
    const maxScore = scores.reduce((max, score) => (score > max ? score : max), scores[0]);
    const avgScore = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
    return { firstName, lastName, minScore, maxScore, avgScore };
  });

console.log("Students with last name starting with 'C':", cLastNameResults);

studentList.forEach(student => {

  student.scores = student.scores.map(score => score + 5);
  const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;
  student.scores.push(avgScore);
});

console.log("Updated Student List:", studentList);