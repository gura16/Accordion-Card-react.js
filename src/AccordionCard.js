import "./AccordionCard.css";
import { useState } from "react";
import AccordionItem from "./Accordionitem";

function Accordioncard() {
  const [activAccordionNumber, setactivAccordionNumber] = useState(null);

  const handleClick = (accordionNumber) => {
    if (activAccordionNumber === accordionNumber) {
      setactivAccordionNumber(null);
    } else {
      setactivAccordionNumber(accordionNumber);
    }
  };

  return (
    <div className="accordion-card">
      <AccordionItem
        activAccordionNumber={activAccordionNumber}
        handleClick={handleClick}
        itemNumber={1}
        title="accordion 1"
        content="text1111"
      />
      <AccordionItem
        activAccordionNumber={activAccordionNumber}
        handleClick={handleClick}
        itemNumber={2}
        title="accordion 2"
        content="text2222"
      />
      <AccordionItem
        activAccordionNumber={activAccordionNumber}
        handleClick={handleClick}
        itemNumber={3}
        title="accordion 3"
        content="text3333"
      />
      <AccordionItem
        activAccordionNumber={activAccordionNumber}
        handleClick={handleClick}
        itemNumber={4}
        title="accordion 4"
        content="text4444"
      />
      <AccordionItem
        activAccordionNumber={activAccordionNumber}
        handleClick={handleClick}
        itemNumber={5}
        title="accordion 5"
        content="text5555"
      />
    </div>
  );
}

export default Accordioncard;
