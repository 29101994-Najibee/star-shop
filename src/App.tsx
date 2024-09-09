import {Route ,Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Store from "./pages/store/Store"
import Layout from "./components/layout/Layout"
import Product from "./pages/product/Product"
import Cart from "./pages/cart/Cart"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import PrivateRoute from "./components/private/PrivateRoute"
import Login from "./pages/login/Login"





function App() {
 
//const[cartItems, setCartItems] = useState([])///met deze usestate je kan gewoon de value van cartItems in hele app gebruik maken en versreiden.
//deze manier is niet zo handig het is beter is in contex dat je hebt gemaakt geewoon een layout component maken 

  return (
    <>
    <ShoppingCartProvider>
    {/* nu kan je gewoon van de layoutcomponent dat je hebt gemaakt in shoppingCartContext file gebruik maken. */}
    {/* <ShoppingCartContext.Provider value={{cartItems}}> (zo gebruiken de noob mensen) */}
    <Layout>
      {/* als je project wordt geroot en uitgebreid het is handeg om van Layout gebruik maken */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/store" element={<Store/>}/>
      <Route path="/product/:id" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route element={ <PrivateRoute/>}> 
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    </Routes>
    </Layout>
    {/* </ShoppingCartContext.Provider> */}
    </ShoppingCartProvider>
    </>
  )
}

export default App
