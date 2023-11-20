import nodemailer from 'nodemailer';

import { NextResponse } from 'next/server';

export async function POST(req, res) {
  const { name, phone } = req.body;
  console.log(name, phone);
  if (!name || !phone) {
    return NextResponse.json({ error: 'Поля "Имя" и "Телефон" обязательны.' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    // secure: true,
    auth: {
      user: process.env.MAIL_ADR,
      pass: process.env.MAIL_PSWD,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_ADR,
    to: 'hurbatushka@gmail.com',
    subject: 'Новая заявка с сайта',
    html: `
      <!DOCTYPE html>
      <html lang="ru">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
          }
          p {
            color: #666;
          }
          strong {
            color: #000;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Новая заявка с сайта</h1>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Телефон:</strong> ${phone}</p>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Письмо успешно отправлено.' });
  } catch (error) {
    console.error('Ошибка отправки электронного письма:', error);
    return NextResponse.json({ error: 'Ошибка отправки электронного письма.' });
  }
}
