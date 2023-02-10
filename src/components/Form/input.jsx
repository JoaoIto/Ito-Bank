import React, { useEffect, useRef } from "react";
import { styled } from "../../../stitches.config";
import { useField } from "@unform/core";
import { fontSize } from "@mui/system";

export function InputField( { name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'  
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input  ref={inputRef} defaultValue={defaultValue} {...rest}></Input>
    </>
  );
}

const Input = styled('input', {
  height: '40px',
  width: '100%',
  padding: '10px',
  border: '3px solid #cacaca',
  borderRadius: '10px',
  margin: '10px',
  fontSize: '1.3rem',
  textAlign: 'center',
});