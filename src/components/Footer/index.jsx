import React from "react";
import { styled } from "../../../stitches.config";

export function Footer() {
    return(
        <Card>
            <Title>Ito Bank</Title>
        </Card>
    )
}

const Card = styled('footer', {
    height: '90vh',
    width: '100%',
    display: 'flex',
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