import express from 'express';
import bcrypt from 'bcrypt';
import mailer from '../components/nodemailer/nodemailer';
import { User } from '../../db/models';

const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
  try {
    const { name, email, pass } = req.body;
    const password = await bcrypt.hash(pass, 5);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        password,
        name,
      },
    });
    if (!created) {
      return res.send('Email is already create');
    }
    const message = {
      to: req.body.email,
      subject: 'Congratulatons! You are successfully registred on your site',
      html: `<h2>Уважаемый(-ая) ${req.body.name}!</h2>
      
      <p>Поздравляем Вас с успешной регистрацией на сайте "Социальная аптека"!</p>
      
      <i>Данные вашей учетной записи:</i>
      <ul>
      <li>login: ${req.body.email}</li>
      <li>password: ${req.body.pass}</li>
      </ul>
      <p>Данное письмо сообщает Вам об успешной регистрациии и не требует от Вас ответа.</p>
      `,
    };
    mailer(message);
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500, '/post/signup');
  }
});

userRouter.post('/signin', async (req, res) => {
  try {
    const { email, pass } = req.body;
    const user = await User.findOne({ where: { email } });
    const compare = await bcrypt.compare(pass, user.password);
    if (compare) {
      req.session.user = user;
    } else {
      console.log('error');
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500, '/post/signin');
  }
});

userRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500, 'logout');
  }
});

export default userRouter;
