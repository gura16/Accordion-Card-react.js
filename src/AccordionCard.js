import "./AccordionCard.css";
import { useState } from "react";

function Accordioncard() {
  const [activAccordionNumber, setactivAccordionNumber] = useState(null);

  return (
    <div className="accordion-card">
      <div
        onClick={() => {
          if (activAccordionNumber === 1) {
            setactivAccordionNumber(null);
          } else {
            setactivAccordionNumber(1);
          }
        }}
      >
        11111111111
        {activAccordionNumber === 1 ? <p>text11111 </p> : null}
      </div>
      <div
        onClick={() => {
          if (activAccordionNumber === 2) {
            setactivAccordionNumber(null);
          } else {
            setactivAccordionNumber(2);
          }
        }}
      >
        2222222222
        {activAccordionNumber === 2 ? <p>text2222 </p> : null}
      </div>
      <div
        onClick={() => {
          if (activAccordionNumber === 3) {
            setactivAccordionNumber(null);
          } else {
            setactivAccordionNumber(3);
          }
        }}
      >
        3333333333
        {activAccordionNumber === 3 ? <p>text33333 </p> : null}
      </div>
      <div
        onClick={() => {
          if (activAccordionNumber === 4) {
            setactivAccordionNumber(null);
          } else {
            setactivAccordionNumber(4);
          }
        }}
      >
        444444444
        {activAccordionNumber === 4 ? <p>text33333 </p> : null}
      </div>
    </div>
  );
}

export default Accordioncard;
