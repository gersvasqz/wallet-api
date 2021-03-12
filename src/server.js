import express from 'express';
import cors from 'cors';
import router from './router';

const app = express();

app.use(cors());
app.use(router);

app.listen(9000, () => console.info('Server is running'));
