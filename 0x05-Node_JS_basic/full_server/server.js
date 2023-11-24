import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;
const databasePath = process.argv.length > 2 ? process.argv[2] : './database.csv';

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
