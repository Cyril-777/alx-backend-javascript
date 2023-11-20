const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err, data) => {
        if (err) reject(Error('Cannot load the database'));
        if (data) {
            let content = data.toString().split('\n');
            let students = content.filter((item) => item).map((item) => item.split(','));
            let fields = {};
            let csStudents = [];
            let sweStudents = [];
            students.shift();
            students.forEach((student) => {
            if (!fields[student[3]]) fields[student[3]] = [];
            fields[student[3]].push(student[0]);
            });
            console.log(`Number of students: ${students.length}`);
            for (const field in fields) {
            if (field === 'CS') {
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
                csStudents = fields[field];
            } else if (field === 'SWE') {
                console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
                sweStudents = fields[field];
            }
            }
            console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
            console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        }
        resolve();
        });
    });
    }

module.exports = countStudents;