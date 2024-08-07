
import {Routes, Route} from 'react-router-dom'
import Authentication from '../Pages/Authentication'
import Dashboard from '../Pages/Dashboard'
import Error404Page from '../Components/Error/Error404Page'

const MainRoutes = () => {
  return (
    <div style={{minHeight:'100vh' , minWidth:'100vw'}}>

    
    <Routes>
        <Route path='' element={<Authentication/>} />
        <Route path='/Dashboard' element={<Dashboard/>} />
        <Route path='*' element={<Error404Page/>} />
    </Routes>
    </div>
  )
}

export default MainRoutes
