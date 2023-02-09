import { styled } from "../../../stitches.config";

export function About(){
    return (
      <Background>
        <Flan>
          <Legend>O banco para você aprender a investir!</Legend>
          <Span>
            Uma opção rentável, segura, confiável, e cheia de oportunidades!
          </Span>
          <Invest>Se cadastrar!</Invest>
        </Flan>
        <img
          width="50%"
          height="600"
          src="../../../src/assets/imgs/aboutReact.svg"
          alt=""
        />
      </Background>
    );
}

const Background = styled('section', {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: "90vh",
  width: "100vw",
  backgroundColor: "$aquaWhite",
  boxShadow: "8px 8px 8px #cacaca",
  marginBottom: '50px'
});

const Flan = styled("div", {
  height: "60%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexDirection: "column",
  textAlign: "center",
});

const Legend = styled("h2", {
  width: '80%',  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: "3rem",
  fontFamily: "$Poppins",
  fontWeight: "bold",
  color: "$lightBlack",
  textShadow: "2px 2px 2px #584dff",
});

const Span = styled("span", {
  width: "70%",
  fontSize: "1.8rem",
  fontFamily: "$Poppins",
  color: "$darkGrey",
});

const Invest = styled("button", {
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