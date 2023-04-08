import { MouseSensor, TouchSensor, useDraggable, useSensor } from '@dnd-kit/core';
export default function Window( { id, title, styles} : {id: string, title: string, styles: object} ) {

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id.toString(),
  });
  
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <div ref={setNodeRef} {...attributes} style={{...style, ...styles}} className='flex flex-col absolute w-64 bg-commodore-bg border-black border-2'>
      <button {...listeners} {...attributes} className='w-full h-full bg-white border-b-black border-2'>{title}</button>
      <div {...attributes}>Content</div>
    </div>
  );
}
