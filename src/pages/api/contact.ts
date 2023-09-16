import type { APIRoute } from "astro"
import type { FormSchema } from "@/components/form/ContactForm"
import { render } from "@react-email/render"
import ContactEmail from "@/emails/contact"
import { transporter, contactMailOptions } from "@/emails/mailer"

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const body = (await request.json()) as FormSchema
  const html = render(ContactEmail(body))

  try {
    await transporter.sendMail({
      ...contactMailOptions,
      subject: `New message from ${body.name}`,
      html
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
