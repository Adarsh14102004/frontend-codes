const students = [
    { name: "John", marks: [80, 90, 85] },
    { name: "Emma", marks: [95, 92, 98] },
    { name: "Alex", marks: [60, 70, 65] }
];

let result = [];

for (let student of students) {
    let sum = 0;

    for (let mark of student.marks) {
        sum += mark;
    }

    let avg = sum / student.marks.length;

    if (avg >= 85) {
        result.push({
            name: student.name,
            average: avg
        });
    }
}

result.sort((a, b) => b.average - a.average);

let names = [];

for (let student of result) {
    names.push(student.name);
}

console.log(names);