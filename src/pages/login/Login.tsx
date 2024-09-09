
import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'

function Login() {
    const {handelLogin} = useShoppingCartContext()
  return (
    <div>
      <Container>
        <div className='bg-green-200 p-12 rounded flex flex-col justify-center items-center mt-28'>
          <input className="m-2 p-3 rounded" type='text' placeholder='Username'/>
          <input className="m-2 p-3 rounded" type='password' placeholder='Password'/>
          <Button variant='primary'onClick={handelLogin}>Login</Button>
        </div>
      </Container>
    </div>
  )
}

export default Login
