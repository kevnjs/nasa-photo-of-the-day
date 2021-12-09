import React from "react"; 
import styled from "styled-components";

const StyledIcon = styled.div`
transform: scale(0.2);
width: 100%;
display:flex;
text-align: center;

&:Hover {
    transform: scale(0.26);
}
`

export default function Icon() {
    return (
        <>
        <StyledIcon>
            <img alt="Logo" src="https://www.pngall.com/wp-content/uploads/5/NASA-Logo-PNG-Image.png"/>
        </StyledIcon>
        <span>PHOTO OF THE DAY: </span>
        </>

    )
}