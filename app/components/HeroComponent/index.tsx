"use client"

import Image from "next/image";
import energy from "../../../public/energy.jpg";

export const HeroComponent = () => {
  return (
    <div className="relative w-full py-4"> 
      {/* <video autoPlay muted loop className="absolute top-0 left-0 object-fit-cover object-position-center z-[-1] opacity-90"> 
        <source src={'chip1.mp4'} type="video/mp4" />
      </video> */}

      <div className="w-7/12 mx-auto text-center relative mt-8"> 
        <p className="title">
          Impulsionando construindo um futuro sustentável Tecnologia
        </p>
        <p className="mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil enim maxime corporis cumque
          totam aliquid nam sint inventore optio modi neque laborum officiis necessitatibus
        </p>
      </div>

      <div className="flex justify-center top-[-20px]"> 
        <Image
          src={energy}
          width={700}
          height={500}
          alt="Picture of the author"
        /> 
      </div>
    </div>
  );
};