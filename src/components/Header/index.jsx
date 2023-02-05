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
    alignItems: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
});

const Title = styled("h2", {
    fontSize: '2.5rem',
    fontFamily: '$Noto',
    fontWeight: 'bold',
    color: '$aquaGrey',
    textShadow: '3px 3px 3px #6342f7'
});

const Desc = styled("span", {
  fontSize: "1.8rem",
  fontFamily: "$Noto",
  fontWeight: "bold",
  color: "$aquaGrey",
  textShadow: "3px 3px 3px #6342f7",
});