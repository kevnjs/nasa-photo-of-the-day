import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CardHeader (props){
    return (
        <div>
            <h2>{props.today.title}</h2>
            <span>{props.today.date}</span>
        </div>
    )
}
