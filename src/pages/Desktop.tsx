import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import { restrictToWindowEdges, createSnapModifier } from '@dnd-kit/modifiers';
import Folder from "../components/Folder";
import MenuBar from "../components/MenuBar";
import Window from "../components/Window"
import { useState } from "react";
import { Droppable } from "@/components/Droppable";

const windowsData = [
  {
    id: "about",
    title: "About Me",
    position: {
      x: 0,
      y: 0
    }
  }
];

export default function Desktop() {
  const [isDropped, setDropped] = useState(false);
  const [windows, setWindows] = useState(windowsData);
  
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 50,
      tolerance: 5,
    },
  });

  const sensors = useSensors(
    mouseSensor,
    touchSensor,
  );

  const gridSize = 20; // pixels
  const snapToGridModifier = createSnapModifier(gridSize);
  
  return (
    <>
    
    <div className="w-screen h-screen bg-desktop-bg bg-cover text-gray-800 z-50 overflow-hidden brightness-75">
      <MenuBar />
      <div className="w-screen grid grid-cols-8 gap-y-4 p-4">
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        
          <Droppable>
            <Folder title="About Me" alt="About Me icon"/>
            <Folder title="My Projects" alt="My Projects icon" />
            <Folder title="Contact Me" alt="Contact Me icon"/>
            
            {windows.map((window) => (
              <Window
                styles={{
                  position: "absolute",
                  left: `${window.position.x}px`,
                  top: `${window.position.y}px`
                }}
                key={window.id}
                id={window.id}
                title={window.title}
              />
            ))}
          </Droppable>
        </DndContext>
      </div>
      
      
    </div>
    </>
  );

  function handleDragEnd(event) {
    console.log(windows.find((x) => x.id));
    const window = windows.find((x) => x.id === event.active.id);
    if (window !== undefined) {
      window.position.x += event.delta.x;
      window.position.y += event.delta.y;
      const _windows = windows.map((x) => {
      if (x.id === window.id) return window;
        return x;
      });
      setWindows(_windows);
    } else {
      console.log("Error: the currently selected element's id does not match the Window id");
    }
  }
}