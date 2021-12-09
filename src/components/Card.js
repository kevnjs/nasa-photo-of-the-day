import React, { useEffect } from "react";
import axios from 'axios';
import CardHeader from "./CardHeader";
import styled from "styled-components";

const Image = styled.img`
width: 90%;
border-radius: 12px;
padding: 1.5% 0;
`
const ImageContainer = styled.div`
display: flex;
justify-content: space-around;
padding-top: 2%;
`
export default function Card (props) {

    return (
        <ImageContainer>
            <Image alt="Eclipse of the sun" src={props.today.hdurl}></Image>
        </ImageContainer>
    )
}