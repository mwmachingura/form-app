"use client"

import React from 'react'

const Button = ({ data, text }) => {
  return (
    <button type='button' onClick={data} 
    className={`${text === "Next" ? 
        "py-3 px-2 bg-Marineblue w-24 rounded-xl text-white text-base font-medium relative" : "text-Coolgray text-base font-medium"}`}>{text}</button>
  )
}

export default Button