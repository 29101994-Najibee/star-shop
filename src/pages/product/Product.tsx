import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import { getIdProduct } from '../../services/api'
import { IProduct } from '../../types/server'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

function Product() {
  const params = useParams<{ id : string}>();//hier bekenden ik de type van param of type id 
  const[product , setProduct] = useState<IProduct>()
  const {handelIncreaseProductQty ,
    handelDecreaseProductQty ,
    getProductQty ,
    cartItems ,
    handelRemoveProduct
  } = useShoppingCartContext();


useEffect(()=>{
    getIdProduct(params.id as string).then(result =>{
       setProduct(result)
    })

},[])

console.log(cartItems)

  return (
    <div>
  <Container>
    <div className='h-96 shadow mt-4 grid grid-cols-12' >
      <div className='col-span-9 p-5'>
      <h1 className='text-right'>{product?.title}</h1>
      <div>
        <p className='text-right text-xl'>prijs : {product?.price}</p>
        <p className='text-right text-slate-500'>{product?.description}</p>
      </div>
      </div>
      <div className=' col-span-3 p-4 '>
        <img className='rounded w-full' src={product?.image} alt="" />

        {
        getProductQty(parseInt(params.id as string))=== 0 ?  
        <Button className='mt-3 w-full'
        variant ="success"
        onClick={()=>handelIncreaseProductQty(parseInt(params.id as string))}>Add to Cart</Button> 
        : <>
        <div className='grid grid-cols-3 '> 
        <Button className='mt-3 w-full'
        variant ="success"
        onClick={()=>handelIncreaseProductQty(parseInt(params.id as string))}>+</Button> 

        <span className='flex justify-center items-center'>{getProductQty(parseInt(params.id as string))}</span>

        <Button className='mt-3 w-full'
        variant ="success"
        onClick={()=>handelDecreaseProductQty(parseInt(params.id as string))}>-</Button>
        </div>
        <Button className='mt-3 w-full'
        variant ="danger"
        onClick={()=>handelRemoveProduct(parseInt(params.id as string))}>remove</Button>
        </>
        
        }

      </div>
    </div>
  </Container>
    </div>
  )
}

export default Product
