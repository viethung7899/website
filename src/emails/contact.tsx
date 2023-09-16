import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Tailwind,
  Preview,
  Link,
  Section,
  Text
} from "@react-email/components"

export default function ContactEmail({
  name = "Alan",
  email = "alan@example.com",
  message = "This site is awesome!!!"
}) {
  return (
    <Html>
      <Head />
      <Preview>
        {name} from {email} sent you a message!
      </Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-8 max-w-md rounded border border-solid border-slate-300 p-6">
            <Section>
              <Link
                href="https://vhng.dev"
                className="font-mono text-2xl font-semibold text-blue-500"
              >
                [vhng]
              </Link>
            </Section>
            <Heading className="text-xl font-semibold leading-10">
              You got message!
            </Heading>
            <Section>
              <Text className="leading-4">Heyo,</Text>
              <Text className="leading-4">
                {name} from <Link href={`mailto:${email}`}>{email}</Link> sent
                you a message.
              </Text>
              <Text className="rounded bg-slate-300 p-4">{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
