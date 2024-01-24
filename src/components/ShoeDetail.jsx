import React from "react";
import { QTY, SIZES } from "./constants";
import Select from "./Select";

export default function ShoDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
      <figure className="flex-1 self-center lg:self-auto bg-gradient-to-br from-pink-500 via-amber-100 to-cyan-100 lg:h-[38rem] lg:-my-36 lg:ml-28 lg:-z-10 animate-">
        <img
          className="animate-float h-full"
          src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com_.png"
          alt=""
        />
      </figure>
      <div className="flex-1 space-y-6 font-sans ">
        <h1 className="text-5xl font-black md:text-8xl">NIKE max air 270</h1>
        <h3 className="font-medium md:text-xl w-80 lg:w-96">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
          tenetur?
        </h3>
        <div className="flex gap-4">
          <h2 className="text-3xl font-extrabold md:text-6xl ">100 $</h2>
          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZES"} options={SIZES} />
        </div>
        <button className="bg-sky-600 px-5 py-2 active:bg-blue-800 hover:bg-blue-700 transition active:scale-75">
          Add to bag
        </button>
        <a
          href="#"
          className=" mx-4 text-xl font-bold underline underline-offset-4"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
