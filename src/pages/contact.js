import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

import { validEmailRegex } from "../utils/validEmailRegex";
import { media } from "../styles/mixins";
import SEO from "../components/seo";
import { Button } from "../styles/mixins";

const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto 8rem auto;
  padding: 0 2rem;

  ${media.sm`
    margin-top: 2rem;
  `}
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin: 3rem 0;
`;

const Label = styled.label`
  margin-bottom: 3em;
  width: 100%;
`;

const Input = styled.input`
  padding: 0.75rem 1.25rem;
  border-radius: 3px;
  width: 100%;
  border: 3px solid
    ${({ error, theme }) => (error ? theme.colors.danger : "transparent")};
`;

const Message = styled.textarea`
  width: 100%;
  border-radius: 3px;
  padding: 0.75rem 1.25rem;
  border: 3px solid
    ${({ error, theme }) => (error ? theme.colors.danger : "transparent")};
`;

const Submit = styled(Button)`
  max-width: 12em;
`;

const ErrorText = styled.span`
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.danger};
`;

const Contact = ({ location }) => {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data, e) => {
    e.preventDefault();
    const url = e.target.action;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      });

      const res = await response.json();

      if (res.success) {
        e.target.reset();
        setSubmitted(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container>
      <SEO title="Contact" slug={location.pathname} />
      <Heading>Contact</Heading>
      {submitted ? (
        <Text>
          Thank you for reaching out! I will get back to you as soon as
          possible.
        </Text>
      ) : (
        <>
          <Text>
            Have a question, need a responsive web app or looking to work
            together? Feel free to contact me!
          </Text>
          <Form
            name="contact"
            method="post"
            action="https://getform.io/f/62f6d9a0-958e-4fe3-81c1-b0edb9d27639"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Label aria-label="Your email">
              <Input
                name="email"
                type="email"
                placeholder="Email"
                ref={register({
                  validate: {
                    required: (value) => value.length > 0,
                    invalidEmail: (value) => validEmailRegex.test(value),
                  },
                })}
                error={!!errors.email}
              />
              {errors.email && errors.email.type === "required" && (
                <ErrorText>Email is required.</ErrorText>
              )}
              {errors.email && errors.email.type === "invalidEmail" && (
                <ErrorText>Entered email is not valid.</ErrorText>
              )}
            </Label>
            <Label aria-label="Your message">
              <Message
                name="message"
                placeholder="Message"
                rows="10"
                cols="50"
                ref={register({ required: true, minLength: 20 })}
                error={!!errors.message}
              />
              {errors.message && errors.message.type === "required" && (
                <ErrorText>Message is required.</ErrorText>
              )}
              {errors.message && errors.message.type === "minLength" && (
                <ErrorText>
                  Message should have at least 20 characters.
                </ErrorText>
              )}
            </Label>
            <Submit type="submit">Send Message</Submit>
          </Form>
        </>
      )}
    </Container>
  );
};

export default Contact;
