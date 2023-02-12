import React from "react";
import { styled } from "../../../../stitches.config";
import { Form } from "@unform/web";
import { InputField } from "../input";
import styles from "../index.module.css";

export function SignUp() {

    function handleSubmit(data) {
      console.log(data);
      // { email: 'test@example.com', password: '123456' }
    }

  return (
    <Card>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <Title>
          Cadastro{" "}
          <img height="90" src="../../../../src/assets/imgs/login.svg" />
        </Title>
        <InputField
          label="Digite seu nome  completo: "
          name="name"
          type="text"
          placeholder="Digite seu nome aqui"
          required
        />

        <InputField
          label="Digite seu CPF: "
          name="CPF"
          type="number"
          placeholder="000.000.000-00"
          required
        />

        <InputField
          label="Digite sua data de nascimento: "
          name="date"
          type="date"
          required
        />

        <InputField
          label="Digite seu melhor email aqui: "
          name="email"
          type="email"
          placeholder="emailExample@email.com"
          required
        />

        <InputField
          label="Crie uma senha para sua conta:"
          name="password"
          type="password"
          placeholder="**************"
          required
        />
        <Submit type="submit">Cadastrar-se</Submit>
      </Form>
    </Card>
  );
}

const Card = styled("section", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "$aquaWhite",
  boxShadow: "8px 8px 8px #cacaca",
  marginBottom: "50px",
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