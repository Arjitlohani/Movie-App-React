
import {Routes, Route} from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'
import Error404Page from '../Components/Error/Error404Page'
import ProtectedRoute from './ProtectedRoute'
import OpenRoute from './OpenRoute'


const MainRoutes = () => {
  return (
    <div style={{minHeight:'100vh' , minWidth:'100vw'}}>

    
    <Routes>
        
       

        <Route element={<OpenRoute/>}>
        <Route path='' element={<Authentication/>} />
        </Route>
        <Route path='/Dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        
        <Route path='*' element={<Error404Page/>} />
    </Routes>
    </div>
  )
}

export default MainRoutes
