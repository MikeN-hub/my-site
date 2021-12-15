const Cell = ({mark, onClick}) => {
  return <button className="Cell" onClick={onClick}>{mark}</button>;
};

export default Cell;
