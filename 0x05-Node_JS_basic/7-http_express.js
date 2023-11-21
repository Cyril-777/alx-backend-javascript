const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;


// import countStudents from './3-read_file_async'
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

// Define route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define route for the '/students' path
app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(() => {
      res.send('This is the list of our students\n');
    })
    .catch(error => {
      res.status(500).send('Cannot load the database');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
