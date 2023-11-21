const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      if (data) {
        const content = data.toString().split('\n');
        const students = content.filter((item) => item).map((item) => item.split(','));
        const fields = {};
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

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, host, () => {});

module.exports = app;
