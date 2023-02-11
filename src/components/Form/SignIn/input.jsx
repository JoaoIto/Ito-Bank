import React, { useEffect, useRef } from "react";
import { styled } from "../../../../stitches.config";
import { useField } from "@unform/core";
import { fontSize } from "@mui/system";

export function InputField({ name, label,...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <InputLabel
        ref={inputRef}
        {...rest}
      ></InputLabel>
    </>
  );
}

const Label = styled("label", {
  fontSize: "2rem",
  fontFamily: "$Inter",
  fontWeight: "bold",
  color: "#363636",
});

const InputLabel = styled("input", {
  height: "50px",
  width: "80%",
  padding: "10px",
  border: "3px solid #cacaca",
  borderRadius: "10px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  fontFamily: "$Inter",
});
