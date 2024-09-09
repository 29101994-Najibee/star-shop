
import { Navigate, Outlet } from 'react-router-dom'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'


function PrivateRoute() {
    const {isLogin} = useShoppingCartContext()
  return (
    <div>
      {
        isLogin ? <Outlet /> : <Navigate to="/login" />
      }
    </div>
  )
}

export default PrivateRoute
