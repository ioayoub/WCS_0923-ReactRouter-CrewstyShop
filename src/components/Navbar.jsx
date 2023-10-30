import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-neutral-800 p-4 text-white">
      <span className="block my-auto">MyWebsite_</span>

      <ul className="flex flex-row gap-8">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/products">Produits</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
