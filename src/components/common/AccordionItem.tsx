import { useState } from "react"

interface AccordionProps extends React.ComponentPropsWithoutRef<"article">{
  title:string;
  text?:string;
}

function RightArrow( props?:any ){
  return(
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="44" 
      height="44" 
      viewBox="0 0 24 24" 
      strokeWidth="1.5" 
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" strokeWidth="0" fill="currentColor" />
    </svg>
  )
}

export default function AccordionItem ( props: AccordionProps){

  const [ active, setActive ] = useState<boolean>(false)
  const { title, text } = props
  
  return(
    <article className="w-1/2 text-primary">
      <header onClick={ () => setActive(!active) } 
        className="flex items-center  hover:cursor-pointer">
        <h3 className="text-2xl font-semibold bg-secondary z-10">{title}</h3>
        <RightArrow className={!active ? 'size-8 transition-all' : 'transition-all size-8 rotate-90'}/>
      </header>
      <main className={
          !active 
          ? 'transition-all h-0 overflow-y-hidden -tranlate-y-20' 
          : 'transition-all duration-400 py-2 h-fit translate-y-0'}>
        {text}
      </main>
    </article>
  )
}