import AccordionItem from "./AccordionItem"
import { AccordionItems as items } from "@/lib/text"
export default function Accordion (  ){
  return(
    <div className="w-full absolute">
      { items.map( ( {title, text} ) => <AccordionItem title={title} text={text} /> )}
    </div>
  )
}