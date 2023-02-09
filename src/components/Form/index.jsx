import { styled } from "../../../stitches.config";

export function Form() {
  return (
    <Card>
      <h1>Hello World!</h1>
    </Card>
  );
}

const Card = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "90vh",
  width: "100vw",
  backgroundColor: "$aquaWhite",
  boxShadow: "8px 8px 8px #cacaca",
  marginBottom: "50px",
});
