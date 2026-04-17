import Header from "./Header.jsx";
import CardPizza from "./CardPizza";

function Home() {
  return (
    <>
      <Header />
      <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">

        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://www.giallozafferano.es/images/3-364/Pizza-napolitana_1200x800.jpg"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://sultanalpaso.cl/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-24-at-4.23.42-PM-11.jpeg"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"
        />

      </div>
    </>
  );
}

export default Home;