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
      subject:
        'Поздравляем! Вы успешно зарегестрированы на сайте "Социальная аптека"',
      html: `
        <table
          cellpadding="0"
          cellspacing="0"
          style="
        overflow: hidden;
        border-radius: 2em;
        width: 50%;
        margin: auto;
        text-align: center;
        border: solid 6px #f9ac67;
      "
        >
          <tr>
            <td width="260" valign="top">
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td>
                    <img
                      src="https://images.unsplash.com/photo-1577368211130-4bbd0181ddf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHByZXNjcmlwdGlvbiUyMGRydWdzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                      alt=""
                      width="100%"
                      height="300"
                      style="display: block; object-fit: cover"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                  padding: 20px 2px 20px 2px;
                  background-color: #fdf9e8;
                  border-top: solid 6px #f9ac67;
                  font-family: Verdana, Geneva, Tahoma, sans-serif;
                "
                  >
                    <h2>Уважаемый(-ая) ${req.body.name}!</h2>

                    <p>
                      Поздравляем Вас с успешной регистрацией на сайте
                      "Социальная аптека"!
                    </p>

                    <i>Данные вашей учетной записи:</i>
                    <ul style="text-align:start">
                      <li>login: ${req.body.email}</li>
                      <li>password: ${req.body.pass}</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td
                    style="
                  padding: 20px 2px 20px 2px;
                  background-color: #fdf9e8;
                  border-top: solid 3px #f9ac67;
                  font-family: Verdana, Geneva, Tahoma, sans-serif;
                "
                  >
                    <p>
                      Данное письмо сообщает Вам об успешной регистрациии и не
                      требует от Вас ответа.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
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
