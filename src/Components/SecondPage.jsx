import React from "react";
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


const SecondPage = () => {
  const Images = [
    { title: Image1 },
    { title: Image2 },
    { title: Image3 },
    { title: Image4 },
    { title: Image5 },
  
    { title: Image7 },
    { title: Image8 },
    { title: Image9 },
    { title: Image12 },
    { title: Image13 },
    { title: Image14 },
    { title: Image15 },
    { title: Image16 },
    { title: Image18 },
    { title: Image6 },
  ];
  return (
    <div className=" px-3 py-10  mt-[100vh] ">
      <div className="p-8">
        <div className="columns-4 [&>img:not(:first-child0)]:mt- 8  ">
          {Images.map((val, index) => (
            <img
              className="flex gap-5 mb-5 object-cover rounded-md"
              src={val.title}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center">   <button className=' px-5 py-2   rounded-full border border-[#fc6060] hover:bg-[#fc6060] hover:cursor-pointer hover:text-white text-black font-semibold duration-300 '> View More</button></div>
    </div>
  );
};

export default SecondPage;
