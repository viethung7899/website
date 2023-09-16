import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const MAX_MESSAGE_LENGTH = 280

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name should be at least 2 characters."
    })
    .max(100, {
      message: "Email should be at most 100 characters"
    }),
  email: z.string().email({
    message: "Invalid email"
  }),
  message: z
    .string()
    .min(1, {
      message: "Required"
    })
    .max(MAX_MESSAGE_LENGTH, {
      message: `Message should be at most ${MAX_MESSAGE_LENGTH} characters`
    })
})

type FormSchema = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<FormSchema>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const onSubmit = (data: FormSchema) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form className="flex-1 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Who are you?"
                  className="border-foreground/60 bg-secondary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="How can I contact you?"
                  className="border-foreground/60 bg-secondary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-right" />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder="Should be no more than 280 characters"
                  className="border-foreground/60 bg-secondary"
                  {...field}
                />
              </FormControl>
              <span className="flex justify-between">
                <FormDescription className="text-right">
                  {form.watch("message").length} / {MAX_MESSAGE_LENGTH}
                </FormDescription>
                <FormMessage />
              </span>
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
