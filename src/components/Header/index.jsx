import { border } from '@mui/system';
import { styled } from '../../../stitches.config'

export function Header(){
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
      </Background>
    );
}

const Background = styled("header", {
  display: 'flex',  
  height: "90vh",
  width: "100vw",
  backgroundColor: '$aquaWhite',
});

const Nav = styled("nav", {
    display: 'flex',
    justifyContent: 'space-around',
    height: "10%",
    width: "100%",
    backgroundColor: "$blue400",
    margin: '0',
    padding: '30px'
});

const MenuHam = styled('button', {
    backgroundColor: '$blue400',
    border: 'none',
});

const Texts = styled('div', {
    display: 'flex', 
    flexDirection: 'column', 
    height: '90%'
});

const Title = styled("h2", {
    fontSize: '2.5rem',
    fontFamily: '$Noto',
    color: '$aquaGrey',
    margin: '0'
});

const Desc = styled("span", {
  fontSize: "1.5rem",
  fontFamily: "$Noto",
  color: "$aquaGrey",
});