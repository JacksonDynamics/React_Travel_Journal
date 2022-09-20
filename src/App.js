import Header from "./components/Header"
import Card from "./components/Card"
import data from "./components/data"


function App() {
  const cards = data.map(item => {
    return(
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
