import React from "react";
import { styled } from "../../../stitches.config";

export function Footer() {
    return (
      <Card>
        <Title>Ito Bank</Title>
        <img height="280" src="../../../src/assets/imgs/form.svg" />
        <img height="280" src="../../../src/assets/imgs/ideia.svg" />
      </Card>
    );
}

const Card = styled('footer', {
    height: '90vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '$blue400',
    border: '5px solid #cacaca'
});

const Title = styled("h2", {
  fontSize: "2.5rem",
  fontFamily: "$Noto",
  fontWeight: "bold",
  color: "$aquaGrey",
  textShadow: "3px 3px 3px #6342f7",
});