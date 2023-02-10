import React from "react";
import { styled } from "../../../stitches.config";
import { Form } from "@unform/web";
import { Input } from "./input";

export function SignIn() {
  function handleSubmit(data) {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Insira seu melhor email:"
          name="email"
          type="email"
          placeholder="emailexample@email.com"
          required
        />
        <Input
          label="Insira sua senha:"
          name="password"
          type="password"
          placeholder="********"
          required
        />

        <Submit type="submit">Sign in</Submit>
      </Form>
    </Card>
  );
}

const Card = styled('form', {
  width: '80%',
  height: '90vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '$aquaWhite',
});

Form = styled('form', {
  
});

const Submit = styled("button", {
  fontSize: "1.6rem",
  fontFamily: "$Poppins",
  fontWeight: "bold",
  height: "60px",
  width: "80%",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "$blue400",
  color: "#fff",
  boxShadow: "5px 5px 5px #584dff",
});