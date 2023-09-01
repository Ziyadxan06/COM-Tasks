import {Header, Rentalcards, Salescards, Search, Footer} from './components';
const salesData = [
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020"
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020"
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020"
  },
  {
    price: "290.000 $",
    title: "Apartment for sale",
    location: "London, Oxford St.",
    date: "26 November 2020"
  }
]
const rentalData = [
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020"
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020"
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020"
  },
  {
    price: "3.000 $",
    title: "Apartment for rent",
    location: "London, John Ruskin St.",
    date: "20 November 2020"
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Salescards salescard={salesData}/>
      <Rentalcards rentalcard={rentalData}/>
      <Search />
      <Footer />
    </div>
  );
}



export default App;
