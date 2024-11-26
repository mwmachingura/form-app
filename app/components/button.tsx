"use client"

import React from "react"


const Button = ({ data, text, raw }) => {

    let hidden = ""
    let buttonText = ""

    if (raw === 0 && text === "Go Back") {
        hidden = "invisible text-Coolgray text-base font-medium"
    }
    else if ( text === "Next Step" ) {
        hidden = "py-3 px-5 bg-Marineblue w-30 rounded-xl text-white text-base font-medium"
    }
    else {
        hidden = "text-Coolgray text-base font-medium py-3 px-5 w-30 rounded-xl"
    }

    if (raw === 3 && text === "Next") {
        buttonText = "Confirm"
    }

    else {
        buttonText = text
    }
    
    return (
        <button type='button' onClick={data} className={hidden}>{buttonText}</button>
    )
}

export default Button