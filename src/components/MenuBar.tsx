'use client';
import { useEffect, useState } from "react";
import MenuItemLeft from "./MenuItemLeft";
import MenuTime from "./MenuTime";
import MenuItemRight from "./MenuItemRight";
import FullScreenButton from "./FullScreenButton";


export default function MenuBar() {
  const [time, setTime] = useState();
  useEffect(
    () => {
      return () => {
        <MenuTime />
      }
    } 
  )
  
  return (
    
      <div className="w-screen h-8 flex flex-row border-b-black border-b-2">
        <MenuItemLeft content={"Nguyen Le Minh"} />
        <MenuItemLeft content={"File"} />
        <div className="grow inline-flex px-4 py-0.5 bg-violet-200"></div>
        <FullScreenButton />
        <MenuTime />
      </div>
  );
}