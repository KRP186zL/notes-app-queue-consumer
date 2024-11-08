const nodemailer = require('nodemailer');

class MailSender{
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth:{
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  async sendEmail(targetEmail, content){
    const message = {
      from: 'Notes App',
      to: targetEmail,
      subject: 'Ekspor Catatan',
      text: 'Terlampir hasil dari eksport catatan',
      attachments:[
        {
          filename: 'notes.json',
          content
        }
      ]
    };

    return this._transporter.sendMail(message); //this._transporter.sendMail mengembalikan sebuah promise
  }
}

module.exports = MailSender;