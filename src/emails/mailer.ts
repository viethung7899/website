import { createTransport } from "nodemailer"

const EMAIL = import.meta.env.EMAIL
const EMAIL_PASSWORD = import.meta.env.EMAIL_PASSWORD
const RECEIVER_EMAIL = import.meta.env.RECEIVER_EMAIL

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD
  }
})

export const contactMailOptions = {
  from: EMAIL,
  to: RECEIVER_EMAIL
}
