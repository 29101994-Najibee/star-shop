import {  createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { login } from "../services/api";
import {  useNavigate } from "react-router-dom";

interface ShoppingCartProvider{
    children :React.ReactNode;
}

interface CartItem{
    id :number,
    qty :number
    }
//je moet in typescript hier verklaren de typ van cartItems en ook shoppingCartContext omdatzijn typen niet hetzlfde is.
interface ShoppingCartContext{
cartItems : CartItem[];
handelIncreaseProductQty: (id: number)=> void
handelDecreaseProductQty: (id: number)=> void
getProductQty: (id: number)=> number
handelRemoveProduct: (id: number)=> void
cartQty : number
isLogin : boolean
handelLogin : ()=>void
handelLogout: ()=>void
}

///createContext is een aangemaakte function in react je kan gebruiken voor als je nieuw context gaan maken.
//als je wilt de niuew contect gebruik je in hele app het is beter op importeren of zet gewoon in App.tsx
export const ShoppingCartContext = createContext({
    //hier heb ik de eerste value verklaard en dat is een lege array. en je kan nog adere manier ook verkelaard de type van cartItems
    //eerste manier gewoon al type is een lege array 
    //cartItems: []
    //tweede en betere manier is dat {}als object krijg deze type of context dat ik heb verkraald ShoppingCartContext

} as ShoppingCartContext);
//hier maak ik een custom hooks(net als function in php )voor useContext(ShoppingCartContext)
//niet vergeten in het eerste van elke custom hook moet use zetten.
 export const useShoppingCartContext = () =>{
    return useContext(ShoppingCartContext);
 }


// deze function maakt alleen je code schooner en netter en provid gewoon je shoppingCartContext.
export function ShoppingCartProvider({children}: ShoppingCartProvider){
    //omdat heb ik een custom hook of een function gemaakt om data in localStorage op te slaan en dus je kan gewoon hier implaats van useState gewoon useLocalStorage gebruiken.
//const [cartItems , setCartItems] =useState<CartItem[]>([])//cartItems wil staraks wilkelwagen van app zijn.

const [cartItems , setCartItems] =useLocalStorage<CartItem[]>("cartItems",[])

const handelIncreaseProductQty = (id:number) =>{
  
    setCartItems((currentItems) => {
   let selectedItem = currentItems.find(item=>item.id == id)
   if (selectedItem == null){
    return[...currentItems, {id: id, qty:1}]
   }else{
      return currentItems.map(item=>{
        if(item.id == id){
           return{...item , qty: item.qty + 1}
        }else{
            return item
        }
    })
   }
})
}

const handelDecreaseProductQty = (id: number)=>{
    setCartItems((currentItems)=>{
        let SelectedItem = currentItems.find(item=>item.id == id);
        if(SelectedItem?.qty === 1){
            return currentItems.filter(item =>item.id !== id)
        }else{
            return currentItems.map(item=>{
              if(item.id == id){
                 return{...item , qty: item.qty - 1}
              }else{
                  return item;
                }
            })
           }
        })
        }

const getProductQty=(id:number)=>{
   return cartItems.find(item =>item.id == id)?.qty || 0

}

const handelRemoveProduct=(id:number)=>{
    setCartItems(currentItems => currentItems.filter(item => item.id != id))
}


const cartQty = cartItems.reduce((totalQty , item) => totalQty + item.qty , 0 );


const [isLogin , setIsLogin] = useState(false)
//const [isLogout , setIsLogout] = useState(false)
const navigate = useNavigate();
const handelLogin = ()=>{
    //omdat hier gebruik ik van een fake data en laten app werken implaats van then most finally gebruiken
   login("Admin" , "Admin123").finally(()=>{
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg4NDAyMDI3LCJqdGkiOiI2OGM4MTI2MjVjNWQ0YzU3YTk4NWIxOWRlM2I2NjY5NyIsInVzZXJuYW1lIjoiYWRtaW4iLCJ1c2VyX2lkIjoxfQ.mJJsuHivamdmnZu1jbT7QgjLKLdyarzHSJoYvZYRHyo";
    localStorage.setItem("token" ,token)
    setIsLogin(true);
    navigate("/")

   })
  
}
const handelLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setIsLogin(false);  
};


   useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token){
       setIsLogin(true);
    }
   },[])

    return(
       
         <ShoppingCartContext.Provider value={{
            cartItems ,
            handelIncreaseProductQty ,
            handelDecreaseProductQty , 
            getProductQty ,
            handelRemoveProduct ,
            cartQty ,
            isLogin ,
            handelLogin ,
            handelLogout }}> {/*wat geeft je hier als value je moet zijn type verklaren. nu kan je cartItems overal in app gebruiken*/}
      { children}
        </ShoppingCartContext.Provider>
    )

}