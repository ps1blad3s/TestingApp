import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRouters';
import pool from './config/db';

dotenv.config();

const app = express();
const PORT: string | undefined = process.env.PORT;

app.use(cors());
app.use(express.json());

pool.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных: ', err);
    } else {
        console.log('Подключение к базе данных успешно');
    }
});

app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Сервер работает на http://localhost:${PORT}`);
})