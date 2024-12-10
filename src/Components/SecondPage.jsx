import React, {useRef, useEffect } from "react";
import Image1 from "../assets/asset 1.jpeg";
import Image2 from "../assets/asset 2.jpeg";
import Image3 from "../assets/asset 3.jpeg";
import Image4 from "../assets/asset 4.jpeg";
import Image5 from "../assets/asset 5.jpeg";
import Image6 from "../assets/asset 6.jpeg";
import Image7 from "../assets/asset 7.jpeg";
import Image8 from "../assets/asset 8.jpeg";
import Image9 from "../assets/asset 9.jpeg";
import Image12 from "../assets/asset 12.jpeg";
import Image13 from "../assets/asset 13.jpeg";
import Image14 from "../assets/asset 14.jpeg";
import Image15 from "../assets/asset 15.jpeg";
import Image16 from "../assets/asset 16.jpeg";
import Image18 from "../assets/asset 18.jpeg";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const SecondPage = () => {
const imageRef = useRef(null)
useEffect(()=>{
const el = imageRef.current;
gsap.fromTo(el,{opacity:0},  {opacity:1,duration:2, scrollTrigger:{
  trigger:el
}})
},[])
  // useEffect(() => {
  //   gsap.core.globals('ScrollTrigger', ScrollTrigger);
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.from(".hey", {
  //    y:150,
  //    duration:0.2,
  //    delay:0.2,
  //    opacity:0,
  //  ease:"power2.out",
  //     scrollTrigger: {
  //       scroller: "body",
  //       markers:true,
  //       trigger: ".hey",
  //       start: "top 90%",
  //       end: "top -100%",
  //       scrub: 4,
        
  //       // toggleClass: 'active'
  //     }
  //   });
  // }, []);

  const pageItem = [
    {
      title: "All",
      path: "/"
    },
    {
      title: "Human",
      path: '/page'
    },
    {
      title: "Nature",
      path: '/courses'
    },
    {
      title: "Video",
      path: "/instructor"
    }
  ];

  const Images = [
    { title: Image1 },
    { title: Image2 },
    { title: Image3 },
    { title: Image4 },
    { title: Image5 },
    { title: Image6 },
    { title: Image7 },
    { title: Image8 },
    { title: Image9 },
    { title: Image12 },
    { title: Image13 },
    { title: Image14 },
    { title: Image15 },
    { title: Image16 },
    { title: Image18 },
  ];

  return (
    <>
      <div className=" relative px-3 -top-10 py-10  mt-[100vh] ">
        {/* ----------------------Nav Part------------------------------------------- */}
        <div className=" flex justify-center item-center">
          {pageItem.map((item) => (
            <div className=' ml-6 mb-5 bottom-11 text-black hover:text-[#fc6060] hover:underline  hover:underline-offset-4 text-xl ease-in duration-200 font-[700] text-'>{item.title}</div>
          ))}
        </div>
        <div className="p-8 hey">
          <div className="columns-4  [&>img:not(:first-child)]:mt-8">
            {Images.map((val, index) => (
              <img
                className=" flex gap-5 mb-5 object-cover rounded-md"
                src={val.title}
                alt=""
                ref={imageRef}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className=' px-8 py-4   rounded-full border-[#fc6060] border-2 hover:bg-[#fc6060] hover:cursor-pointer hover:text-white text-black font-semibold duration-300 '> View More</button>
        </div>
      </div>
    </>
  );
};

export default SecondPage;