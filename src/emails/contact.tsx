import {
  Heading,
  Link,
  Section,
  Text,
} from "@react-email/components"
import EmailLayout from "./layout"

export default function ContactEmail({
  name = "Alan",
  email = "alan@example.com",
  message = "This site is awesome!!!"
}) {
  return (
    <EmailLayout preview={`${name} sent you a message`}>
      <Heading className="text-xl font-semibold leading-10">
        You got message!
      </Heading>
      <Section>
        <Text className="leading-4">Hi,</Text>
        <Text className="leading-4">
          {name} from <Link href={`mailto:${email}`}>{email}</Link> sent you a
          message.
        </Text>
        <Text className="rounded bg-slate-300 p-4">{message}</Text>
      </Section>
    </EmailLayout>
  )
}
