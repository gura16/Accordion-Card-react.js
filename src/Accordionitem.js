function AccordionItem(props) {
  const { activAccordionNumber, handleClick, itemNumber, title, content } =
    props;
  return (
    <div
      onClick={() => {
        handleClick(itemNumber);
      }}
    >
      <h1 className="accordion-title">{title}</h1>
      {activAccordionNumber === itemNumber ? (
        <p className="accordion-content">{content} </p>
      ) : null}
    </div>
  );
}

export default AccordionItem;
