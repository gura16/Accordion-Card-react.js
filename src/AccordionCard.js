import "./AccordionCard.css";
import { useState } from "react";

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
      <div
        onClick={() => {
          handleClick(1);
        }}
      >
        11111111111
        {activAccordionNumber === 1 ? <p>text11111 </p> : null}
      </div>
      <div
        onClick={() => {
          handleClick(2);
        }}
      >
        2222222222
        {activAccordionNumber === 2 ? <p>text2222 </p> : null}
      </div>
      <div
        onClick={() => {
          handleClick(3);
        }}
      >
        3333333333
        {activAccordionNumber === 3 ? <p>text33333 </p> : null}
      </div>
      <div
        onClick={() => {
          handleClick(4);
        }}
      >
        444444444
        {activAccordionNumber === 4 ? <p>text444444 </p> : null}
      </div>
    </div>
  );
}

export default Accordioncard;
