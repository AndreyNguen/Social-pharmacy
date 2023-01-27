import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport(
  {
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: 'piskarev_socialpharm@mail.ru',
      pass: 'EuZubJz0JahW902j8Lyp',
    },
  },
  {
    from: 'Social Pharmacy <piskarev_socialpharm@mail.ru>',
  },
);

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    return console.log('Email sent:', info);
  });
};

export default mailer;
