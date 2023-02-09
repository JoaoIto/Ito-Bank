import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";
import { styled } from "../../../stitches.config";

export const Input = ({ name, ...rest }) => {

  const inputRef = useRef();
  useEffect(() => {}, []);
  const { fieldName, defaultValue, registerField } = useField(name);
  const typing = (event) => {
    props.onChanges(event.target.value);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label>{label}</Label>
      <InputLabel
        name={name}
        ref={inputRef}
        type="text"
        placeholder="Type your username"
        {...rest}
      ></InputLabel>
    </>
  );
};

const Label = styled("label", {
  fontSize: "2rem",
  fontFamily: "$Inter",
  fontWeight: "bold",
});

const InputLabel = styled("input", {
  height: "30px",
  width: "80%",
  padding: "10px",
  border: "5px solid rgba(0, 0, 0, 0.3)",
});
