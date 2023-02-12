import React from "react";
import { styled } from "../../../stitches.config";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export function Form() {
  return (
    <section>
      <SignIn />
      <SignUp />
    </section>
  );
}
