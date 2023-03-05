import React from "react";
import { styled } from "../../../stitches.config";

export function Footer() {
    return (
      <Card>
        <Title>Ito Bank</Title>
        <img
          className="img"
          height="280"
          src="https://raw.githubusercontent.com/JoaoIto/Ito-Bank/e35fb82d6214849f325c10d5660c59f83819dd17/src/assets/imgs/form.svg"
        />
        <img
          className="img"
          height="280"
          src="https://raw.githubusercontent.com/JoaoIto/Ito-Bank/e35fb82d6214849f325c10d5660c59f83819dd17/src/assets/imgs/ideia.svg"
        />
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