import React, { useEffect } from "react";
import axios from 'axios';
import CardHeader from "./CardHeader";

export default function Card (props) {

    return (
        <div>
            <img alt="Eclipse of the sun" src={props.today.hdurl}></img>
        </div>
    )
}