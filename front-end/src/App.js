import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import{ ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './containers/Dashboard'
import Register from './containers/Register'
import Login from "./containers/Login"
import Header from './components/Header'
import Transactions from './containers/Transactions'

function App() {
  return (
 <>
 <Router>
  <div className='container'>
   <Header />
   <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/transactions' element={<Transactions />} />
    </Routes> 
  </div>
 </Router>
 <ToastContainer />
 </>
  );
}
  

export default App;
