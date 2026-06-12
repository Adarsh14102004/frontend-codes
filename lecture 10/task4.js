let deptData = {};

for (let emp of employees) {
    if (!deptData[emp.dept]) {
        deptData[emp.dept] = {
            total: 0,
            count: 0
        };
    }

    deptData[emp.dept].total += emp.salary;
    deptData[emp.dept].count++;
}

let highestDept = "";
let highestAvg = 0;

for (let dept in deptData) {
    let avg = deptData[dept].total / deptData[dept].count;

    if (avg > highestAvg) {
        highestAvg = avg;
        highestDept = dept;
    }
}

console.log(highestDept);