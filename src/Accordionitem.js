function AccordionItem(props) {
  const { activAccordionNumber, handleClick, itemNumber, title, content } =
    props;
  return (
    <div
      onClick={() => {
        handleClick(itemNumber);
      }}
    >
      {title}
      {activAccordionNumber === itemNumber ? <p>{content} </p> : null}
    </div>
  );
}

export default AccordionItem;
