import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

export function Input({ props, name, ...rest }) {
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
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </>
  );
}
