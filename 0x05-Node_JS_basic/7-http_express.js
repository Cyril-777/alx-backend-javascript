const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const path = process.argv.length > 2 ? process.argv[2] : '';

// import countStudents from './3-read_file_async'
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else if (data) {
        const content = data.toString().split('\n');
        const students = content.filter((item) => item).map((item) => item.split(','));
        const fields = {
          CS: {
            count: 0,
            list: [],
            csCount: 0,  // Initialize csCount here
          },
          SWE: {
            count: 0,
            list: [],
            sweCount: 0,  // Initialize sweCount here
          },
        };
        students.shift();
        students.forEach((student) => {
          if (!fields[student[3]]) {
            fields[student[3]] = {
              count: 0,
              list: [],
            };
          }
          fields[student[3]].count += 1;
          fields[student[3]].list.push(student[0]);
          if (student[3] === 'CS') {
            fields[student[3]].csCount += 1;
          } else if (student[3] === 'SWE') {
            fields[student[3]].sweCount += 1;
          }
        });

        const result = {
          totalStudents: students.length,
          fields: fields,
        };

        resolve(result);
      }
    });
  });
}

// Define route for the root path '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define route for the '/students' path
app.get('/students', (req, res) => {
  countStudents(path)
    .then((result) => {
      res.write(`This is the list of our students\n`);
      res.write(`Number of students: ${result.totalStudents}\n`);
      for (const field in result.fields) {
        if (Object.prototype.hasOwnProperty.call(result.fields, field)) {
          const fieldInfo = result.fields[field];
          res.write(`Number of students in ${field}: ${fieldInfo.count}. List: ${fieldInfo.list.join(', ')}\n`);
        }
      }
      res.end();
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the app variable
module.exports = app;
