const fs = require('fs');

export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else if (data) {
        const content = data.toString().split('\n');
        const students = content.filter((item) => item).map((item) => item.split(','));
        const fields = {};
        students.shift();
        students.forEach((student) => {
          if (!fields[student[3]]) {
            fields[student[3]] = [];
          }
          fields[student[3]].push(student[0]);
        });
        resolve(fields);
      }
    });
  });
}
