import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
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

export type FormSchema = z.infer<typeof formSchema>

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
  const [result, setResult] = useState({
    message: "",
    error: false
  })

  const onSubmit = async (data: FormSchema) => {
    try {
      await fetch("/api/contact", {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      })
      setResult({
        message: "Message sent!",
        error: false
      })
    } catch (error) {
      setResult({
        message: "An error has occurred. Please try again",
        error: true
      })
    }
  }

  return (
    <Form {...form}>
      <form className="flex-1 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="name"
          control={form.control}
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel className="after:text-destructive after:content-['*']">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Who are you?"
                  className="border-foreground/60 bg-transparent"
                  {...field}
                  disabled={formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel className="after:text-destructive after:content-['*']">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="How can I contact you?"
                  className="border-foreground/60 bg-transparent"
                  {...field}
                  disabled={formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          control={form.control}
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel className="after:text-destructive after:content-['*']">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  maxLength={MAX_MESSAGE_LENGTH}
                  placeholder="Should be no more than 280 characters"
                  className="border-foreground/60 bg-transparent"
                  {...field}
                  disabled={formState.isSubmitting}
                />
              </FormControl>
              <span className="flex">
                <FormMessage />
                <FormDescription className="ml-auto">
                  {form.watch("message").length} / {MAX_MESSAGE_LENGTH}
                </FormDescription>
              </span>
            </FormItem>
          )}
        />
        <div className="flex items-center">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Submit
          </Button>
          {result.message ? (
            <span
              className={cn(
                result.error ? "text-destructive" : undefined,
                "ml-4"
              )}
            >
              {result.message}
            </span>
          ) : null}
        </div>
      </form>
    </Form>
  )
}
