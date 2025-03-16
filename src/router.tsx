import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'
import IndexPage from './views/IndexPage'
import Login from './views/Login'
import SignUp from './views/SignUp'

export default function Approuter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<IndexPage/>} index/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
