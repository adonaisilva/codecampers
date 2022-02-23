function getGrade(...grades) {
  // Code here
  const AVR = grades.reduce((a, b) => a + b) / grades.length;
  const LETTERS = [
    [60, "F"],
    [70, "D"],
    [80, "C"],
    [90, "B"],
    [100, "A"],
  ];
  for (const LETTER of LETTERS) {
    if (LETTER[0] > AVR) return LETTER[1];
  }
  return "A";
}

console.log(getGrade(95, 90, 93));
