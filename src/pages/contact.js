import React, { useState } from "react";
import styled from "styled-components";

import SEO from "../components/seo";
import { Button } from "../styles/mixins";

const Container = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Heading = styled.h2`
  font-size: 3rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  margin-top: 3rem;
`;

const Input = styled.input`
  padding: 0.75rem 1.25rem;
  margin-bottom: 3em;
  border-radius: 3px;
  border: none;
`;

const Message = styled.textarea`
  border: none;
  border-radius: 3px;
  padding: 0.75rem 1.25rem;
  margin-bottom: 3em;
`;

const Submit = styled(Button)`
  max-width: 12em;
`;

const Contact = () => (
  <Container>
    <SEO title="Contact" />
    <Heading>Contact</Heading>
    <Text>
      Have a question or looking to work together?Feel free to contact me!
    </Text>
    <Form
      name="contact"
      method="post"
      action="/thanks"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />
      <Input name="email" type="email" placeholder="Email" required />
      <Message
        name="message"
        placeholder="Message"
        rows="10"
        cols="50"
        minLength="30"
        required
      />
      <Submit type="submit">Send Message</Submit>
    </Form>
  </Container>
);

export default Contact;
