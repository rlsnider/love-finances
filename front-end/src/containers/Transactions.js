import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {getAccounts} from '../features/accounts/accountSlice'
import {getCategories} from '..features/categories/categorySlice'
import Spinner from '../components/Spinner'
import TransactionForm from '../components/TransactionForm'

function Transactions() {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const {user} = useSelector((state) => state.auth)
   const {accounts, isLoading, isError, message}  = useSelector((state) => state.accounts)
   const { categories } = useSelector((state) => state.categories)
   const {transactions} = useSelector((state) => state.transactions)
  useEffect(()=>{
    if(isError) {
      console.log(message);
    }
    if(!user){
      navigate('/login')
    }

    if(!accounts) {
      navigate('/')
    }
    if(!categories) {
      navigate('/')
    }
    dispatch(getAccounts())
    dispatch(getCategories())
  }, [user, navigate, isError, message, dispatch ])  
    
  if(isLoading) {
    return <Spinner />
  }
   
  return (
<>
<section>
    <h1>Transaction Log</h1>

</section>
<TransactionForm />
<section>
    {transactions.length > 0 ? (
     <div></div>
    ): (<h3>You have not created any transactions yet.</h3>)}
</section>
</>
  
    
    )
  }

export default Transactions