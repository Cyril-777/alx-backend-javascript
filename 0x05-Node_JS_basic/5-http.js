const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 1245;

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
            csCount: 0, // Initialize csCount here
          },
          SWE: {
            count: 0,
            list: [],
            sweCount: 0, // Initialize sweCount here
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
          fields,
        };

        resolve(result);
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const path = process.argv[2];
    countStudents(path)
      .then((result) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
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
        res.writeHead(500);
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.writeHead(404);
    res.end('Route not found');
  }
});

app.listen(port, host, () => {
  console.log(`HTTP server is running on port ${port}`);
});

module.exports = app;
