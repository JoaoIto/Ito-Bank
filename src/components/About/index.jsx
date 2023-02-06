import { styled } from "../../../stitches.config";

export function About(){
    return(
        <Background>
            <Flan>
                <h1>hello World</h1>
            </Flan>
        <img width="40%" height="600" src="../../../src/assets/imgs/aboutReact.svg" alt="" />
        </Background>
    )
}

const Background = styled('section', {
  display: "flex",
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: "70vh",
  width: "100vw",
  backgroundColor: "$aquaWhite",
  boxShadow: "8px 8px 8px #cacaca",
});

const Flan = styled('div', {

});