import { fontWeight } from "@mui/system";
import { styled } from "../../../stitches.config";

export function Input(props)  {

    const typing = (event) => {
      props.onChanges(event.target.value);
    };

  return (
    <>
      <Label>{props.label}</Label>
      <InputLabel
        value={props.value}
        onChange={typing}
        required={props.required}
        type={props.type}
        placeholder={props.placeholder}
      ></InputLabel>
    </>
  );
}

const Label = styled('label', {
    fontSize: '2rem', 
    fontFamily: '$Inter',
    fontWeight: 'bold',
})

const InputLabel = styled("input", {
  height: '30px',
  width: '80%',
  padding: '10px',
});