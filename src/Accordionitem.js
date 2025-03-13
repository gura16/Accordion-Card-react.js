import path from "./Path 2.png";

function AccordionItem(props) {
  const { activAccordionNumber, handleClick, itemNumber, title, content } =
    props;

  return (
    <div onClick={() => handleClick(itemNumber)}>
      <div className="question-card">
        <h1 className="accordion-title">{title}</h1>
        <img
          className={`path ${
            activAccordionNumber === itemNumber ? "path1" : ""
          }`}
          src={path}
          alt="icon"
        />
      </div>
      {activAccordionNumber === itemNumber && (
        <p className="accordion-content">{content}</p>
      )}
    </div>
  );
}

export default AccordionItem;
