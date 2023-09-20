const GOOGLE_DOCUMENT_ID = import.meta.env.GOOGLE_DOCUMENT_ID

export const prerender = false

export async function GET() {
  const URL = `https://docs.google.com/document/d/${GOOGLE_DOCUMENT_ID}/export?format=pdf`
  const response = await fetch(URL)
  return new Response(response.body, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline;filename="resume.pdf"'
    }
  })
}
