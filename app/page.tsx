"use client"

import { useState } from "react";
import sidebarimg from "../public/assets/images/bg-sidebar-desktop.svg";
import arcade from "../public/assets/images/icon-arcade.svg";
import pro from "../public/assets/images/icon-pro.svg";
import advanced from "../public/assets/images/icon-advanced.svg";
import Image from 'next/image';
import Button from "./components/button";
import NavItem from "./components/navitem";

const steps = [
  { id : "STEP 1", name : "YOUR INFO"},
  { id : "STEP 2", name : "SELECT PLAN"},
  { id : "STEP 3", name : "ADD-ONS"},
  { id : "STEP 4", name : "SUMMARY"},
]

export default function Home() {

  const [ currentStep, setCurrentStep ] = useState(0)

  const [ currentPlan, setCurrentPlan ] = useState("monthly")

    const next = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(step => step + 1)
        }
    }

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(step => step - 1)    
        }
    }

    const changePlan = () => {
      if (currentPlan === "monthly") {
        setCurrentPlan("yearly")
      }
      else setCurrentPlan("monthly")
    }

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="w-3/5 h-4/5 shadow-lg rounded-2xl flex flex-row bg-white items-center">
        <div className="relative h-19/20 w-2/5 rounded-2xl ml-4 overflow-hidden -mr-6">
          <Image src={sidebarimg} alt="sidebar-bg" className="w-auto h-full object-cover -z-1 absolute"/>
          <div className="absolute w-full h-1/3 z-1 flex flex-col py-5 justify-start">
            {steps.map((step, index) => (
              <NavItem key={index} data={ step } raw={index} active={currentStep} />
            ))}
          </div>
        </div>
        <div className="h-19/20 w-3/5 pt-6 px-12">
          <form action="" className="flex flex-col relative h-full w-full">
            {currentStep === 0 && (
              <>
                <h1 className="text-Marineblue text-3xl font-bold py-2">Personal Info</h1>
                <p className="text-Coolgray text-sm font-normal py-2">Please provide your name, email address, and phone number.</p>
                <label htmlFor="Name" className="text-Marineblue text-base font-normal py-1">Name</label>
                <input type="text" name="name" placeholder="John Doe" className="p-2 text-Marineblue border border-Coolgray rounded-xl outline-none mb-4"/>
                <label htmlFor="Email" className="text-Marineblue text-base font-normal py-1">Email Address</label>
                <input type="text" name="email" placeholder="johndoe@example.com" className="p-2 text-Marineblue border border-Coolgray rounded-xl outline-none mb-4"/>
                <label htmlFor="Phone Number" className="text-Marineblue text-base font-normal py-1">Phone Number</label>
                <input type="text" name="phone" placeholder="e.g +1 234 567 890" className="p-2 text-Marineblue border border-Coolgray rounded-xl outline-none mb-4"/>
                <div className="flex w-full justify-between items-center absolute bottom-4">
                  <Button data={prev} text={`Go Back`} raw={currentStep} />
                  <Button data={next} text={`Next Step`}  raw={currentStep} />
                </div>
              </>
            )}
            {currentStep === 1 && (
              <>
                <h1 className="text-Marineblue text-3xl font-bold py-2">Select your plan</h1>
                <p className="text-Coolgray text-sm font-normal py-2">You have the option of monthly or yearly billing.</p>
                <div className="h-48 w-full flex justify-between items-center py-6">
                  <div className="w-32 h-full rounded-lg border border-Lightblue p-4 flex flex-col justify-between">
                    <Image src={arcade} alt="arcade-icon" className="w-8 h-auto" />
                    <div className="">
                      <h1 className="text-Marineblue font-medium">Arcade</h1>
                      <p className="text-base text-Coolgray font-normal">$9/mo</p>
                    </div>
                  </div>
                  <div className="w-32 h-full rounded-lg border border-Lightblue p-4 flex flex-col justify-between">
                    <Image src={advanced} alt="arcade-icon" className="w-8 h-auto" />
                    <div className="w-full">
                      <h1 className="text-Marineblue font-medium">Advanced</h1>
                      <p className="text-base text-Coolgray font-normal">$12/mo</p>
                    </div>
                  </div>
                  <div className="w-32 h-full rounded-lg border border-Lightblue p-4 flex flex-col justify-between">
                    <Image src={pro} alt="arcade-icon" className="w-8 h-auto" />
                    <div className="">
                      <h1 className="text-Marineblue font-medium">Pro</h1>
                      <p className="text-base text-Coolgray font-normal">$15/mo</p>
                    </div>
                  </div>
                </div>
                <div className="w-full h-10  flex justify-center items-center bg-Magnolia">
                  <div className="w-2/3 flex items-center justify-center">
                    <p className="px-1">Monthly</p>
                    <div className="relative w-12 h-6 flex items-center rounded-full p-1 mx-4 bg-Marineblue">
                      <div 
                      className={`absolute bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 cursor-pointer ${currentPlan === "monthly" ? "left-1" : "right-1"}`}
                      onClick={changePlan}></div>
                    </div>
                    <p className="px-1">Yearly</p>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center mt-6 -mr-2 absolute bottom-4">
                  <Button data={ prev } text={`Go Back`} raw={currentStep}/>
                  <Button data={ next } text={`Next Step`}  raw={currentStep}/>
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <h1 className="text-Marineblue text-3xl font-bold py-2">Pick add-ons</h1>
                <p className="text-Coolgray text-sm font-normal py-2">Add-ons help enhance your gaming experience.</p>
                <div className="w-full flex flex-col justify-evenly h-3/5 py-2">
                  <div className="w-full border border-Purplishblue shadow-md rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center w-3/4">
                      <input type="checkbox" className="mx-2 p-2" />
                      <div className="mx-2">
                        <h1 className="text-Marineblue text-base font-medium">Online service</h1>
                        <p className="text-Coolgray text-base">Access to multiplayer games</p>
                      </div>
                    </div>
                    <p className="text-Coolgray text-base text-Purplishblue">+$1/mo</p>
                  </div>
                  <div className="w-full border border-Purplishblue shadow-md rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center w-3/4">
                      <input type="checkbox" className="mx-2 p-2" />
                      <div className="mx-2">
                        <h1 className="text-Marineblue text-base font-medium">Larger storage</h1>
                        <p className="text-Coolgray text-base">Extra 1TB of cloud save</p>
                      </div>
                    </div>
                    <p className="text-Coolgray text-base text-Purplishblue">+$2/mo</p>
                  </div>
                  <div className="w-full border border-Purplishblue shadow-md rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center w-3/4">
                      <input type="checkbox" className="mx-2 p-2" />
                      <div className="mx-2">
                        <h1 className="text-Marineblue text-base font-medium">Customizable profile</h1>
                        <p className="text-Coolgray text-base">Custom theme on your profile</p>
                      </div>
                    </div>
                    <p className="text-Coolgray text-base text-Purplishblue">+$2/mo</p>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center mt-6 -mr-2 absolute bottom-4">
                  <Button data={ prev } text={`Go Back`} raw={currentStep} />
                  <Button data={ next } text={`Next Step`} raw={currentStep} />
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <h1 className="text-Marineblue text-3xl font-bold py-2">Finishing up</h1>
                <p className="text-Coolgray text-sm font-normal py-2">Double-check everything looks OK before confirming</p>
                <div className="w-full h-2/3 py-4">
                  <div className="w-full bg-Alabaster h-3/5 rounded-lg pb-6">
                    <div className="w-full flex justify-between p-4">
                      <div className="flex justify-between items-start flex-col">
                        <p className="font-medium text-Marineblue text-base">Arcade (Monthly)</p>
                        <p className="text-Purplishblue text-base underline">Change</p>
                      </div>
                      <p className="font-bold text-Marineblue text-base">$9/mo</p>
                    </div>
                    <div className="px-4 w-full">
                      <hr></hr>
                    </div>
                    <div className="flex flex-col justify-evenly items-start p-4">
                      <div className="flex justify-between items-center w-full py-2">
                        <p className="text-base font-light text-Coolgray">Online service</p>
                        <p className="text-base font-light text-Marineblue">+$1/mo</p>
                      </div>
                      <div className="flex justify-between items-center w-full py-2">
                        <p className="text-base font-light text-Coolgray">Larger storage</p>
                        <p className="text-base font-light text-Marineblue">+$2/mo</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full px-4 pt-6">
                    <p className="text-base font-light text-Coolgray">Total (per month)</p>
                    <p className="text-base font-bold text-Purplishblue">+$12/mo</p>
                  </div>
                </div>
                <div className="flex w-full justify-between items-center mt-6 -mr-2 absolute bottom-4">
                  <Button data={ prev } text={`Go Back`} raw={currentStep} />
                  <Button data={ next } text={`Next Step`}  raw={currentStep} />
                </div>
              </>
            )}            
          </form>
        </div>
      </div>
    </main>
  );
}
