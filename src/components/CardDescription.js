import React from "react";

export default function CardDescription (props) {
    return (
        <div>
            <p>{props.today.explanation}</p>
            <span>{props.today.copyright}</span>
        </div>
    )
}