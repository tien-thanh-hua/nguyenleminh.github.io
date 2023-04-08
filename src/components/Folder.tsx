import Image from "next/image"
import { useState } from "react";





export default function Folder( {title, alt} : {title: string, alt: string} ) {
  
  const [isSelected, setSelected] = useState(false);

  function openFolder() {
    setSelected(false);
  }

  function highlightFolder() {
    if (isSelected == false) {
      setSelected(true);
    }
  }

  if (isSelected)
    return (
      <div className="flex flex-col justify-self-center justify-center content-center bg-gray-700 bg-opacity-60">
        <button title={title} onClick={highlightFolder} onDoubleClick={openFolder} className="w-32 h-full p-4">
          <Image 
            src={"/bg.jpg"}
            alt="80s-styled synthwave grid background image"
            width={70}
            height={0}
          />
          <p className="text-white  pt-4">{title}</p>
        </button>
        
      </div>
    );
  else 
  return (
    <div className="flex flex-col justify-self-center">
      <button title={title} onClick={highlightFolder} onDoubleClick={openFolder} className="w-32 h-full p-4">
        <Image 
          src={"/bg.jpg"}
          alt={alt}
          width={70}
          height={0}
        />
        <p className="text-white  pt-4">{title}</p>
      </button>
      
    </div>
  );
}