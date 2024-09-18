import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Dashboard from './Compnonets/Dashboard'
import Card from './Compnonets/Card'
import SignIn from './Compnonets/SignIn'
import Premium from './Compnonets/Premium'
import SignUp from './Compnonets/SingUp'
export default function App() {
  return (
    <>
      {/* <SignUp/> */}

<BrowserRouter><Routes>
  <Route path='/signin' element={<SignIn/>}>

  </Route>
  <Route path="/price" element={<Premium/>}></Route>
<Route path='/dashboard' element={<Dashboard/>}></Route>
</Routes>
</BrowserRouter>
  </>
  )
}