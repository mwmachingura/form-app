import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="w-3/4 h-5/6 shadow-lg rounded-2xl flex flex-row bg-white items-center">
        <div className="h-19/20 w-1/3 rounded-2xl bg-blue-300 m-4">
          <p className="text-sm">Kindly note this is ubuntu 16</p>
        </div>
        <div className="bg-green-300 h-19/20 w-2/3 m-4"></div>
      </div>
    </main>
  );
}
