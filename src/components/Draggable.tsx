import React from 'react';
import {useDraggable} from '@dnd-kit/core';

export function Draggable(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <button ref={setNodeRef} className='w-32 h-6 bg-white border-black border-2' {...listeners} {...attributes}>
      {props.children}
    </button>
  );
}