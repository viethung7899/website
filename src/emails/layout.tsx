import type { ReactNode } from "react"
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text
} from "@react-email/components"

type LayoutProps = {
  preview: string
  children?: ReactNode
}

export default function EmailLayout({ children, preview }: LayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-8 max-w-md rounded border border-solid border-slate-300 p-6">
            <Section className="inline-flex">
              <Link
                href="https://vhng.dev"
                className="font-mono text-lg font-semibold text-blue-500"
              >
                vhng.dev
              </Link>
            </Section>
            {children}
            <Hr className="border-slate-300" />
            <Text className="opacity-80">
              This email is automatically generated
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
