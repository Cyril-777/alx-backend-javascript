const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const rows = data.split('\n').filter(line => line.trim() !== '');

    const counts = {};
    const lists = {};

    const [, ...dataRows] = rows;

    dataRows.forEach(row => {
      const [firstname, lastname, age, field] = row.split(',');

      if (!counts[field]) {
        counts[field] = 0;
        lists[field] = [];
      }

      counts[field]++;
      lists[field].push(firstname);
    });

    console.log(`Number of students: ${dataRows.length}`);

    Object.keys(counts).forEach(field => {
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${lists[field].join(', ')}`);
    });

  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
