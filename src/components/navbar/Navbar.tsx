
import ShoppingCartIcon from "../../assets/ShoppingCartIcon";
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";

function Navbar() {
  const { cartQty, handelLogout} = useShoppingCartContext();
  
  return (
    <div className="h-16 border-b shadow-md bg-white flex items-center">
    <Container>
      <div className="flex justify-between items-center">
        {/* Left section with navigation links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-gray-700 hover:text-blue-500 transition-colors">Home</Link>
          </li>
          <li>
            <Link to="/store" className="text-gray-700 hover:text-blue-500 transition-colors">Winkelen</Link>
          </li>
        </ul>

        {/* Right section with cart and logout */}
        <div className="flex items-center space-x-6">
          <Link to="/cart" className="relative flex items-center">
            <ShoppingCartIcon />
            {cartQty !== 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center transform translate-x-2 -translate-y-2">
                {cartQty}
              </span>
            )}
          </Link>
          <Button variant="primary" onClick={handelLogout}>Logout</Button>
        </div>
      </div>
    </Container>
  </div>
);
}

export default Navbar;