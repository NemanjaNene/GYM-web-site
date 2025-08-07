require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { username, email, password, weight, biografija } = req.body;

  // 1. Učitaj HTML šablon
  let template;
  try {
    const templatePath = path.join(__dirname, 'eMailTemplate.html');
    template = fs.readFileSync(templatePath, 'utf-8');
  } catch (err) {
    console.error("Greška prilikom čitanja eMailTemplate.html:", err);
    return res.status(500).json({ message: 'Greška sa email šablonom.' });
  }

  // 2. Zameni {{username}} sa stvarnim imenom
  const personalizedHtml = template.replace('{{username}}', username);

  // 3. Konfiguriši transporter za slanje mejla
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // 4. Postavke mejla
  const mailOptions = {
    from: `"GymTime" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: 'Thanks for your subscription to GymTime!',
    html: personalizedHtml
  };

  // 5. Pošalji mejl
  try {
    await transporter.sendMail(mailOptions);
    console.log('📧 Email uspešno poslat!');
    res.status(200).json({ message: 'Email uspešno poslat!' });
  } catch (error) {
    console.error('❌ Greška prilikom slanja emaila:', error);
    res.status(500).json({ message: 'Greška pri slanju emaila.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server radi na http://localhost:${PORT}`);
});
