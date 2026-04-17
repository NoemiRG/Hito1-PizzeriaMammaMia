import Button from 'react-bootstrap/Button';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>

        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul>
          <p>🍕{ingredients.join(", ")}</p>
        </ul>

        <h6>Precio: ${price}</h6>
      </div>
      <div className="d-flex justify-content-around mb-3">
        <Button variant="secondary" >Ver más 👀</Button>
        <Button   variant="dark">Añadir 🛒</Button >
      </div>
      
    </div>
  );
}

export default CardPizza;