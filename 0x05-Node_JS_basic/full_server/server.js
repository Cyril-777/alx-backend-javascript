import express from 'express';

const app = express();
const RoutesIndex = require('./routes/index');
const port = 1245;

app.listen(port);
app.use('/', RoutesIndex);
app.use('/students', RoutesIndex);
app.use('/students/:major', RoutesIndex);

export default app;