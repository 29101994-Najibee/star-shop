import { useEffect, useState } from 'react'
import Button from '../button/Button'
import { getIdProduct } from '../../services/api';
import { IProduct } from '../../types/server';
import {  useShoppingCartContext } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

interface ICartItem {
  id :number;
  qty: number;
}
function CartItem({id , qty}: ICartItem) {
  const[product , setProduct] = useState<IProduct>()
  
  const{ handelDecreaseProductQty,
    handelIncreaseProductQty ,
    handelRemoveProduct} = useShoppingCartContext()
  useEffect(()=>{
    getIdProduct(id ).then((result) =>{
      setProduct(result)
    })

},[])


  return (
    <div className='flex flex-row-reverse my-5'>
   <Link to={`/product/${id}`}>
   <img className='rounded w-28' src={product?.image} alt="" />
   </Link>
     
     <div className='mr-5'>
  
     <div className='mt-4'>
     <h3 className='my-4'>{product?.title}</h3>
     <Button className='mr-2' variant='danger' onClick={()=>handelRemoveProduct(id)}>remove</Button>
     <Button variant='primary' onClick={()=>handelIncreaseProductQty(id)}>+</Button>
     <span className='mx-3'>{qty}</span>
     <Button variant='primary'onClick={()=>handelDecreaseProductQty(id)}>-</Button>
     </div>
     
     </div>
    </div>
  )
}

export default CartItem
