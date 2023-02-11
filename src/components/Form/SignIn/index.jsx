import React from "react";
import { styled } from "../../../../stitches.config";
import { Form } from "@unform/web";
import { InputField } from "./input";

export function SignIn() {
  function handleSubmit(data) { 
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
  }

  return (
    <Card>
      <Form id="form" onSubmit={handleSubmit}>
        <Title>Formulário de Login</Title>
        <InputField
          label="Email: "
          name="email"
          type="email"
          placeholder="emailExample@email.com"
          required
        />
        <InputField
          label="Senha: "
          name="password"
          type="password"
          placeholder="**************"
          required
        />

        <Submit type="submit">Sign in</Submit>
      </Form>
    </Card>
  );
}

const Card = styled('section', {
  width: '100%',
  height: '90vh',
  display: 'flex',
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  backgroundColor: '$aquaWhite',
});

const Title = styled("h2", {
  fontSize: "3.5rem",
  fontFamily: "$Poppins",
  fontWeight: "bold",
  textShadow: "2px 2px 2px #584dff",
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