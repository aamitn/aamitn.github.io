"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xnqlpbvq"); // Formspree form ID

  const [loading, setLoading] = useState(false);

  if (state.succeeded) {
    return (
      <Card className="max-w-lg mx-auto p-6 rounded-xl shadow-md border border-gray-300 dark:border-blue-300/40 bg-white dark:bg-blue-400/20 transition-all duration-300 ease-out hover:shadow-xl hover:border-blue-500/40">
        <CardHeader>
          <CardTitle className="text-xl text-center">Message Sent!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center">Thank you for your message. We will get back to you soon!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto p-6 rounded-xl shadow-md border border-gray-300 dark:border-blue-300/40 bg-white dark:bg-blue-400/20 transition-all duration-300 ease-out hover:shadow-xl hover:border-blue-500/40">
      <CardHeader>
        <CardTitle className="text-xl text-center">No Bots Allowed</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />

          <Textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <Button type="submit" className="w-full flex items-center gap-2" disabled={state.submitting}>
            {state.submitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            {state.submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>

        {/* Check if there are any errors */}
        {state.errors && Object.keys(state.errors).length > 0 && (
          <p className="mt-4 text-center text-sm text-red-600">
            There was an error submitting the form. Please try again.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
