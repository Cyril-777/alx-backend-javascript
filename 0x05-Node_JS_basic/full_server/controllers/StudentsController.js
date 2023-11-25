import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase('./database.csv');
      res.status(200).send('This is the list of our students\n');
      Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((field) => {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      });
      res.end();
    } catch (error) {
      res.status(500).send(`This is the list of our students\n${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase('./database.csv');
      const studentsInMajor = fields[major] || [];
      res.status(200).send(`List: ${studentsInMajor.join(', ')}\n`);
    } catch (error) {
      res.status(500).send(`Cannot load the database\n${error.message}`);
    }
  }
}

export default StudentsController;
