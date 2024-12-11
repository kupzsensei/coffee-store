import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center w-full p-3 sticky top-0 left-0 bg-white">
      <div className="flex justify-between items-center gap-5 w-full max-w-[1280px]">
        <div className="flex gap-5">
          <img
            src="https://coffeeproject.com/cdn/shop/files/coffeeproject-logo_BeanBannerNewLarge_transparent.png?v=1644553817&width=300"
            alt=""
          />
        </div>
        <div className="flex gap-5 font-medium ">
          <Link to={"/"}>Home</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/branches"}>Branches</Link>
          <Link to={"/contacts"}>Contacts</Link>
        </div>
        <div className="flex gap-5">
          <h1>X</h1>
          <h1>Y</h1>
          <h1>Z</h1>
        </div>
      </div>
    </nav>
  );
}
