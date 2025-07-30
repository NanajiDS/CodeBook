import { Route, Routes } from 'react-router-dom'
import {HomePage,ProductsList,ProductDetail,Login,Register,CartPage,OrderPage,DashbaordPage, PageNotFound} from '../pages'
import { ProtectedRoute } from './ProtectedRoute'



const ALLROUTES = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Products' element={<ProductsList/>}/>
        <Route path='/Products/:id' element={<ProductDetail/>}/>
        <Route path='/Login' element ={<Login/>}/>
        <Route path='/Register' element={<Register/>}/> 
        <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
        <Route path='/order-summary' element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
        <Route path='/dashboard' element={<ProtectedRoute><DashbaordPage/></ProtectedRoute>}/>
        <Route path='*' element={<PageNotFound/>}/>
        
    </Routes>
  )
}

export default ALLROUTES
