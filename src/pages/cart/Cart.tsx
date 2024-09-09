//import { useContext } from 'react'
import Container from '../../components/container/Container'
import CartItem from '../../components/cartItem/CartItem'
import Button from '../../components/button/Button'
import {  useShoppingCartContext } from '../../context/ShoppingCartContext'

function Cart() {
    //de onderstande useContext gebruik je in meerdere keer het is beter en neter om van deze een custom hooks maken en dan roep je de hooks makelijk overal.
//const {cartItems} = useContext(ShoppingCartContext)//je moet ook hier een type verkrad maken voor context 
const {cartItems} = useShoppingCartContext();

  return (
    <div>
        <Container>
            <div>
                {cartItems.map(item=>(<CartItem {...item}/>
                )) 
                }
          
            
            </div>
           
            <div className='bg-gray-200 p-5'>
                <p>Total bedrag: 23¢</p>
                <p>korting: 2¢</p>
                <p>betalen: 21¢</p>
                <Button className="my-4" variant='success'>Afrekenen</Button>
            </div>
            
        </Container>
      
    </div>
  )
}

export default Cart
