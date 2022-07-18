import "./Item.css";

const Item = ({nombre, imgItem, extra}) => {

  return (
    <div className="card-container">
      <div className="img-container">
        <img src={imgItem} alt={nombre} className="img-item"/>
      </div>

      <h3 className="">{nombre}</h3>
      {extra && <span>{extra}</span> }
      <button>DETALLE</button>
    </div>
  );
};

export default Item;
