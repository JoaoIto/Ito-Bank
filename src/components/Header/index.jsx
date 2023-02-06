import { border } from "@mui/system";
import { styled } from "../../../stitches.config";

export function Header() {
  return (
    <Background>
      <Nav>
        <MenuHam>
          <img src="../../../src/assets/icons/menu.svg" alt="" />
        </MenuHam>
        <img
          height="120"
          src="../../../src/assets/imgs/bankPeople.svg"
          alt=""
        />
        <Texts>
          <Title>Ito Bank</Title>
          <Desc>O banco para você enriquecer!</Desc>
        </Texts>
      </Nav>
      <Cover>
        <img height="500" src="../../../src/assets/imgs/home.svg" alt="" />
        <Flan>
            <Legend>
                Nós somos a solução...
            </Legend>
            <Span>
                Para você que pretende sair do zero para o milhão, venha com a gente!
            </Span>
            <Invest>
                Investir Agora!
            </Invest>
        </Flan>
      </Cover>
    </Background>
  );
}

const Background = styled("header", {
  height: "90vh",
  width: "100vw",
  backgroundColor: "$aquaWhite",
});

const Nav = styled("nav", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "10%",
  width: "100%",
  backgroundColor: "$blue400",
  margin: "0",
  padding: "30px",
});

const MenuHam = styled("button", {
  backgroundColor: "$blue400",
  border: "none",
});

const Texts = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const Title = styled("h2", {
  fontSize: "2.5rem",
  fontFamily: "$Noto",
  fontWeight: "bold",
  color: "$aquaGrey",
  textShadow: "3px 3px 3px #6342f7",
});

const Desc = styled("span", {
  fontSize: "1.8rem",
  fontFamily: "$Noto",
  fontWeight: "bold",
  color: "$aquaGrey",
  textShadow: "3px 3px 3px #6342f7",
});

const Cover = styled('div', {
    height: '90%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
});

const Flan = styled('div', {
    height: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: '10px'
});

const Legend = styled('legend', {
  fontSize: "3.2rem",
  fontFamily: "$Poppins",
  fontWeight: "bold",
  color: "$lightBlack",
  textShadow: "2px 2px 2px #584dff",
});

const Span = styled("span", {
  width: '70%',
  fontSize: '1.4rem',
  fontFamily: "$Poppins",
  fontWeight: '700',
  color: '$darkGrey'
});
const Invest = styled('button', {
    fontSize: '1.6rem',
    fontFamily: '$Poppins',
    fontWeight: 'bold',
    height: '60px',
    width: '80%',
    border: 'none',
    borderRadius: '10px',
    backgroundColor: '$blue400',
    color: '#fff',
    boxShadow: '5px 5px 5px #584dff'
});