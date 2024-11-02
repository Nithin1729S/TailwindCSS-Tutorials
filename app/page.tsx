import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-black underline">
      Hello World 
      </h1>
      <br />
      <button type='button' className="bg-sky-500 hover:bg-sky-700">
        CLick me
      </button>
    </>
    
  );
}
