import React from "react";
import Link from "next/link";
import { IoPlayCircleOutline } from "react-icons/io5";

const AboutSection = () => {
  return (
    <div className="custom-container pt-[15vh] pb-[30vh]">
      <div className="flex flex-col items-center justify-between text-center relative">
        <h1 className="text-5xl capitalize font-semibold">tentang anforcom</h1>
        <p className="text-md my-4">
          Ajang teknologi nasional untuk memicu inovasi, kompetisi, <br /> dan
          kolaborasi mahasiswa informatika masa depan.
        </p>
        <Link
          target="_blank"
          className="mb-8 text-md flex items-center gap-2"
          href={``}
        >
          <p>Teaser Video</p> <IoPlayCircleOutline />
        </Link>
        <div className="flex items-center gap-4">
          <button className="btn btn-custom">Event 🗓️</button>
          <button className="btn btn-primary btn-custom">Home 🏠</button>
          <button className="btn btn-custom">Competition 🏆</button>
        </div>
        <div className="bg-red-100 absolute w-[211px] h-[251px] rounded-2xl z-[-10] left-[15%] top-[45%]"></div>
        <div className="bg-red-400 absolute w-[196px] h-[123px] rounded-2xl z-[-10] left-[62%] top-[110%]"></div>
        <div className="bg-red-300 absolute w-[132px] h-[94px] rounded-2xl z-[-30] left-[30%] top-[82.5%]"></div>
        <div className="bg-red-200 absolute w-[170px] h-[168px] rounded-2xl z-[-20] left-[25%] top-[120%]"></div>
      </div>
    </div>
  );
};

export default AboutSection;
