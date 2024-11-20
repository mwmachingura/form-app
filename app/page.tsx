import sidebarimg from "../public/assets/images/bg-sidebar-desktop.svg";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="w-3/5 h-4/5 shadow-lg rounded-2xl flex flex-row bg-white items-center">
        <div className="relative h-19/20 w-2/5 rounded-2xl ml-4 overflow-hidden -mr-6">
          <Image src={sidebarimg} alt="sidebar-bg" className="w-auto h-full  object-cover -z-1 absolute"/>
          <div className="absolute w-full h-full z-1 flex flex-col pt-5 justify-start">
            <div className="flex w-4/5 items-center py-5">
              <div className="rounded-full h-8 aspect-square bg-Lightblue flex justify-evenly items-center mx-4">
                <p className="text-base text-Marineblue font-medium">1</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-normal text-sm">STEP 1</p>
                <h1 className="text-white font-bold">YOUR INFO</h1>
              </div>
            </div>
            <div className="flex w-4/5 items-center py-5">
              <div className="rounded-full h-8 aspect-square border border-white flex justify-evenly items-center mx-4">
                <p className="text-base text-white font-medium">2</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-normal text-sm">STEP 2</p>
                <h1 className="text-white font-bold">SELECT PLAN</h1>
              </div>
            </div>
            <div className="flex w-4/5 items-center py-5">
              <div className="rounded-full h-8 aspect-square border border-white flex justify-evenly items-center mx-4">
                <p className="text-base text-white font-medium">3</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-normal text-sm">STEP 3</p>
                <h1 className="text-white font-bold">ADD-ONS</h1>
              </div>
            </div>
            <div className="flex w-4/5 items-center py-5">
              <div className="rounded-full h-8 aspect-square border border-white flex justify-evenly items-center mx-4">
                <p className="text-base text-white font-medium">4</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white font-normal text-sm">STEP 4</p>
                <h1 className="text-white font-bold">SUMMARY</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="h-19/20 w-3/5 pt-8 px-16">
          <h1 className="text-Marineblue text-3xl font-bold py-2">Personal Info</h1>
          <p className="text-Coolgray text-sm font-normal py-2">Please provide your name, email address, and phone number.</p>
          <form action="" className="flex flex-col pt-6">
            <label htmlFor="Name" className="text-Marineblue text-base font-normal py-1">Name</label>
            <input type="text" name="name" placeholder="John Doe" className="p-2 text-Marineblue border border-Coolgray rounded-xl outline-none mb-4"/>
            <label htmlFor="Email" className="text-Marineblue text-base font-normal py-1">Email Address</label>
            <input type="text" name="email" placeholder="johndoe@example.com" className="p-2 text-Marineblue border border-Coolgray rounded-xl outline-none mb-4"/>
            <label htmlFor="Phone Number" className="text-Marineblue text-base font-normal py-1">Phone Number</label>
            <input type="text" name="phone" placeholder="e.g +1 234 567 890" className="p-2 text-Marineblue border border-Coolgray rounded-xl outline-none mb-4"/>
            <div className="flex items-end w-full justify-end mt-6">
              <button className="py-3 px-2 bg-Marineblue w-30 rounded-xl text-white text-base font-medium relative end-3">Next Step</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
