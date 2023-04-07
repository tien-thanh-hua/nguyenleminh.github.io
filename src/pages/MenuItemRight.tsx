export default function MenuItemLeft({content} : {content: string}) {
  return (
    <div suppressHydrationWarning className="inline-flex px-4 py-0.5 bg-violet-200 border-l-black border-l-2">
      {content}
    </div>
  );
}