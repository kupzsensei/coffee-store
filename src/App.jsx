import { Outlet } from "react-router-dom";
import Navbar from "./components/nav-bar";

export const mockData = [
  {
    category: "Newest Arrivals and Restocks",
    description: "all coffee is unroasted",
    products: [
      {
        id: 1,
        img: "https://coffeeproject.com/cdn/shop/products/Special_Prep_e9570d42-17f6-440a-898c-5922bd4b31b7.jpg?v=1574370799&width=360",
        name: "joshua marthis state",
        price: "$ 8.00 USD",
      },
      {
        id: 2,
        img: "https://coffeeproject.com/cdn/shop/files/kenya3.jpg?v=1727146259&width=360",
        name: "Kenya AA CP Select",
        price: "$ 8.75 USD",
      },
      {
        id: 3,
        img: "https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360",
        name: "Ethiopia Honey Process Grade 1",
        price: "$ 9.75 USD",
      },
      {
        id: 4,
        img: "https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360",
        name: "Ethiopia Honey Process Grade 1",
        price: "$ 9.75 USD",
      },
      {
        id: 5,
        img: "https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360",
        name: "Ethiopia Honey Process Grade 1",
        price: "$ 9.75 USD",
      },
    ],
  },
  {
    category: "Featured Favorites",
    description: "",
    products: [
      {
        id: 1,
        img: "https://coffeeproject.com/cdn/shop/products/Special_Prep_e9570d42-17f6-440a-898c-5922bd4b31b7.jpg?v=1574370799&width=360",
        name: "joshua marthis state",
        price: "$ 8.00 USD",
      },
      {
        id: 2,
        img: "https://coffeeproject.com/cdn/shop/files/kenya3.jpg?v=1727146259&width=360",
        name: "Kenya AA CP Select",
        price: "$ 8.75 USD",
      },
      {
        id: 3,
        img: "https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360",
        name: "Ethiopia Honey Process Grade 1",
        price: "$ 9.75 USD",
      },
      {
        id: 4,
        img: "https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360",
        name: "Ethiopia Honey Process Grade 1",
        price: "$ 9.75 USD",
      },
      {
        id: 5,
        img: "https://coffeeproject.com/cdn/shop/files/ethiopia2.jpg?v=1727147797&width=360",
        name: "Ethiopia Honey Process Grade 1",
        price: "$ 9.75 USD",
      },
    ],
  },
];

function App() {
  return (
    <main className="w-screen h-screen flex flex-col ">
      <Navbar />
      <Outlet />
    </main>
  );
}

export default App;
