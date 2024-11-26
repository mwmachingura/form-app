"use client"

import { useState } from 'react'

const steps = [
    { id : "Step 1", name : "YOUR INFO"},
    { id : "Step 2", name : "SELECT PLAN"},
    { id : "Step 3", name : "ADD-ONS"},
    { id : "Step 4", name : "SUMMARY"},
]

export default function Form() {
    const [ currentStep, setCurrentStep ] = useState(0)

    const next = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep => currentStep + 1)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep => currentStep - 1)    
        }
    }
}