import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AccountForm from '../components/AccountForm'
import AccountItem from '../components/AccountItem'
import PayeeForm from '../components/payeeForm'
import PayeeItem from '../components/payeeItem'
import CategoryForm from '../components/CategoryForm'
import CategoryItem from '../components/CategoryItem'
import Spinner from '../components/Spinner'
import {getAccounts} from '../features/accounts/accountSlice'
import {getPayees} from '../features/payees/payeeSlice'
import {getCategories} from '../features/categories/categorySlice'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {accounts, isLoading, isError, message} = useSelector((state) =>
  state.accounts)
  const {payees} = useSelector((state) => state.payees)
  const { categories } = useSelector((state) => state.categories)

  useEffect (() => {
    if(isError) {
      console.log(message);
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getAccounts())
    dispatch(getPayees())
    dispatch(getCategories())
    
  }, [user, navigate, isError, message, dispatch] ) 

if (isLoading) {
  return <Spinner />
}
  return (
    <>
      <section className='Heading'>
        <h1>Welcome {user && user.name}</h1>
        <h2>Accounts</h2>
      </section>
      <AccountForm />
      <section className='content'>
        {accounts.length > 0 ? (
          <div className='account'>
            {accounts.map((account) => (
              <AccountItem key={account._id} account={account}/>
            ) )}
          </div>
        ) : (<h3>You have not created any accounts yet.</h3>)}
      </section> 
       <PayeeForm />
      <section className='content'>
        {payees.length > 0 ? (
          <div className='account'>
            {payees.map((payee) => (
              <PayeeItem key={payee._id} payee={payee}/>
            ) )}
          </div>
        ) : (<h3>You have not created any payees yet.</h3>)}
      </section>
       <CategoryForm />
      <section className='content'>
        {categories.length > 0 ? (
          <div className='account'>
            {categories.map((category) => (
              <CategoryItem key={category._id} category={category}/>
            ) )}
          </div>
        ) : (<h3>You have not created any categories yet.</h3>)}
      </section>
    </>
  )
}

export default Dashboard