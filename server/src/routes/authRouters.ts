import { Router } from "express";
import { login, register } from '../controllers/authController';
import { Request, Response } from "express";
const router = Router();

router.post('/register', register);
router.post('/login', login);

router.get('/', (req: Request, res: Response) => {
    res.send('Добро пожаловать в API аутентификации. Используйте /register для регистрации и /login для входа.');
});


export default router;