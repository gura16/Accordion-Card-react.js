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
        itemNumber={5}
        title="555555555"
        content="text5555"
      />
    </div>
  );
}

export default Accordioncard;
