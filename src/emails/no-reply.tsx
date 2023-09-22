import EmailLayout from "./layout"
import { Heading, Text } from "@react-email/components"

export default function NoReplyEmail({
  name = "Alan",
  message = "Hello there!"
}) {
  return (
    <EmailLayout preview="Thank you for your message">
      <Heading className="text-xl font-semibold leading-10">
        Thanks for your message.
      </Heading>
      <Text className="leading-4">Hi {name},</Text>
      <Text className="leading-4">
        Thank you for sending message from my personal site.
      </Text>
      <Text className="leading-4">Here's the message you've sent to me.</Text>
      <Text className="rounded bg-slate-300 p-4">{message}</Text>
    </EmailLayout>
  )
}
