import * as React from "react";
import { Html, Head, Preview, Body, Container, Section, Text } from "@react-email/components";
import { type ContactEmailProps } from "@/lib/types/contact-email-types";

export default function ContactEmail({ name, email, subject, message }: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio contact form</Preview>
      <Body style={{ backgroundColor: "#f9fafb", fontFamily: "Arial, sans-serif" }}>
        <Container style={{ backgroundColor: "#ffffff", padding: "24px", borderRadius: "8px" }}>
          <Section>
            <Text style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px" }}>
              📩 You received a new message!
            </Text>
            <Text><strong>Name:</strong> {name}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            <Text><strong>Email:</strong> {subject}</Text>
            <Text><strong>Message:</strong> <span style={{whiteSpace: "pre-line"}}>{message}</span></Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
