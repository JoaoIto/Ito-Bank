import { styled } from "../../../stitches.config";
import { Input } from '../Form/input'

export function Form() {
  return (
    <Background>
      <Card>
        <Title>Cadastre-se: </Title>
        <Input 
        type="text"
        />
      </Card>
    </Background>
  );
}

const Background = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  height: "90vh",
  width: "100vw",
  backgroundColor: "$aquaWhite",
  boxShadow: "8px 8px 8px #cacaca",
  marginBottom: "50px",
});

const Card = styled("div", {
  height: "90%",
  width: "70%",
  borderRadius: "10px",
  boxShadow: "-8px 8px 8px 8px #6278F7",
  border: "5px solid #96a5fd",
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "#fff",
});

const Title = styled("h2", {
  fontSize: "2.7rem",
  fontFamily: "$Poppins",
  fontWeight: "bold",
  color: "$lightBlack",
  textShadow: "3px 3px 3px #a7a7a7",
});