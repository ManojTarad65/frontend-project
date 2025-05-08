"use client";
import React, { useState } from "react";

const about = () => {
  const [score, setScore] = useState(0);

  const [isButton,setIsButton] = useState(false) 

  // if(score>90){
  //   console.log("grade A")
  // }else if(score>80){
  //   console.log("grade B")
  // }else if(score>70){
  //   console.log("grade C")
  // }else(score>60)
  //   console.log("grade D");

  return (
    <div className="bg-gray-700 h-screen w-screen text-8xl flex justify-center items-center ">
      <div className="flex flex-col justify-center items-center bg-yellow-500 rounded-3xl h-1/2   p-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex-col flex gap-2 "
        >
          <input
            onChange={(e) => {
              setIsButton(false)
             setScore(e.target.value)
            }}
            
            type="number"
            placeholder="Enter your percentage"
            className="border-2  rounded-3xl  text-3xl py-2 px-6"
          />

          <button
          onClick={()=>
           
            setIsButton(true)
          }
            type="submit"
            className="bg-black text-white rounded-3xl py-2 px-3 mt-9 text-sm"
          >
            Submit
          </button>
        </form>
          <div>

            {isButton && <div>{`your percentage is : ${score}`}</div>}
            
            
            </div>
      </div>
    </div>
  );
};

export default about;
