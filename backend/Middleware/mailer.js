const nodemailer = require('nodemailer')
const { google } = require('googleapis')
const OAuth2 = google.auth.OAuth2
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH, MAILING_ACCESS } =
  process.env

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  'https://developers.google.com/oauthplayground' // Redirect URL
)

exports.sendVerifyEmail = async (email, name, url) => {
  try {
    auth.setCredentials({
      refresh_token: MAILING_REFRESH,
      access_token: MAILING_ACCESS,
    })

    const accessToken = await auth.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: EMAIL,
        clientId: MAILING_ID,
        clientSecret: MAILING_SECRET,
        refreshToken: MAILING_REFRESH,
        accessToken: accessToken,
      },
    })

    const mailOptions = {
      from: EMAIL,
      to: email,
      subject: 'Verify Your Email For JU COllege Window',
      html: `
            <h1>Hi ${name},</h1>
            <p>Thanks for registering to our JU College Window website Made By Ayush Pandit Metallurgy. Please click the link below to verify your email address.</p>
            <a href="${url}">Verify Email</a>
        `,
    }

    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    })
  } catch (error) {
    console.log(error)
  }
}
