import type { APIRoute } from "astro"
import type { FormSchema } from "@/components/form/ContactForm"
import { render } from "@react-email/render"
import ContactEmail from "@/emails/contact"
import { createTransport } from "nodemailer"
import NoReplyEmail from "@/emails/no-reply"

const EMAIL = import.meta.env.EMAIL
const EMAIL_PASSWORD = import.meta.env.EMAIL_PASSWORD
const RECEIVER_EMAIL = import.meta.env.RECEIVER_EMAIL

export const prerender = false

export const transporter = createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD
  }
})

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json()) as FormSchema

  try {
    // Send no-reply email
    await transporter.sendMail({
      from: {
        name: "Viet-Hung Nguyen",
        address: EMAIL
      },
      to: {
        name: body.name,
        address: body.email
      },
      subject: "Thanks for you message",
      html: render(NoReplyEmail(body))
    })

    // Send confirmation email
    await transporter.sendMail({
      from: EMAIL,
      to: RECEIVER_EMAIL,
      subject: `New message from ${body.name}`,
      html: render(ContactEmail(body))
    })
  } catch (_error) {
    return new Response(
      JSON.stringify({ message: "An error has occurred, please try again" }),
      {
        headers: { "content-type": "application/json" },
        status: 500
      }
    )
  }

  return new Response(JSON.stringify({ message: "Message sent!" }), {
    headers: { "content-type": "application/json" },
    status: 200
  })
}
