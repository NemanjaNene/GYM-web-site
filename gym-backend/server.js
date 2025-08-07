require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', async (req, res) => {
  const { username, email, password, weight, biografija } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Nedostaju obavezna polja" });
  }

  console.log('Primljeni podaci:', req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // koristi SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: `"GymTime" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: 'Nova registracija sa sajta',
    text: `
Novi korisnik se registrovao:
-------------------------------
Korisničko ime: ${username}
Email: ${email}
Lozinka: ${password}
Težina: ${weight}
Biografija: ${biografija}
`,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Podaci uspešno poslati na email!' });
  } catch (error) {
    console.error('Greška pri slanju emaila:', error);
    res.status(500).json({ message: 'Greška pri slanju mejla', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server radi na http://localhost:${PORT}`);
});
