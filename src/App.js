import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color: "red", fontSize: "48px", textTransform: "uppercase"}
  const style = {};
  return (
    <header className="header">
      <h1 style={style} className="header">
        {" "}
        fast React Pizza co.
      </h1>
      ;
    </header>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          {" "}
          we're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open from {openHour}:00 to until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className="btn">order</button>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;

  const numPizzas = pizzas.length;
  return (
    <>
      <main className="menu">
        <h2>our menu</h2>

        {numPizzas > 0 ? (
          <>
            {" "}
            <p>
              Authentic Italian cuisine. 6 creative dishes to choose from, All
              from our stone oven, all organic, all delicious.
            </p>
            <ul className="pizzas">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>we're still working on our menu please come back later</p>
        )}

        {/* <Pizza
          name="Pizza Salamino"
          ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
          photoName="pizzas/spinaci.jpg"
          price={10}
        />
        <Pizza
          name="Pizza funghi"
          ingredient="Tomato, mushrooms"
          photoName="pizzas/funghi.jpg"
          price={13}
        /> */}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj .soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObj.photoName} alt="pizaa" />
      <div>
        {" "}
        <h3> {pizzaObj.name}</h3>
        <p>{pizzaObj.ingredient}</p>
        <span>{pizzaObj.soldOut ? "Sold out" :   pizzaObj.price}</span>
      </div>
    </li>
  );
}

export default App;
