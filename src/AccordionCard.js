import "./AccordionCard.css";
import "./App.css";
import { useState } from "react";
import AccordionItem from "./Accordionitem";
import image1 from "./mention_isometric 2.png";
import image from "./Group.png";

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
      <div className="image-card">
        <img src={image1} />
        <img className="image2" src={image} />
      </div>
      <div className="text-card">
        <h1 className="accordion-faq">FAQ</h1>
        <AccordionItem
          activAccordionNumber={activAccordionNumber}
          handleClick={handleClick}
          itemNumber={1}
          title="How many team members can I invite?"
          content="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
        />
        <AccordionItem
          activAccordionNumber={activAccordionNumber}
          handleClick={handleClick}
          itemNumber={2}
          title="What is the maximum file upload size?"
          content="No more than 2GB. All files in your account must fit your allotted storage space."
        />
        <AccordionItem
          activAccordionNumber={activAccordionNumber}
          handleClick={handleClick}
          itemNumber={3}
          title="How do I reset my password?"
          content="Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
        />
        <AccordionItem
          activAccordionNumber={activAccordionNumber}
          handleClick={handleClick}
          itemNumber={4}
          title="Can I cancel my subscription?"
          content="Yes! Send us a message and we’ll process your request no questions asked."
        />
        <AccordionItem
          activAccordionNumber={activAccordionNumber}
          handleClick={handleClick}
          itemNumber={5}
          title="Do you provide additional support?"
          content="Chat and email support is available 24/7. Phone lines are open during normal business hours."
        />
      </div>
    </div>
  );
}

export default Accordioncard;
