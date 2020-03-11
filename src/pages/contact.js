import React, { useState } from "react";
import { navigate } from 'gatsby';
import styled from "styled-components";

import SEO from '../components/seo';
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

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const Contact = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Container>
      <SEO title="Contact">
      <Heading>Contact</Heading>
      <Text>
        Have a question or looking to work together?Feel free to contact me!
      </Text>
      <Form name="contact" method="POST" action="thanks" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <Message
          onChange={handleChange}
          name="message"
          placeholder="Message"
          rows="10"
          cols="50"
          minLength="30"
          required
        />
        <Submit type="submit" onSubmit={handleSubmit}>
          Send Message
        </Submit>
      </Form>
    </Container>
  );
};

export default Contact;
