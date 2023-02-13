import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AccountForm from '../components/accountForm'
import AccountItem from '../components/accountItem'
import CategoryForm from '../components/CategoryForm'
import CategoryItem from '../components/CategoryItem'
import Spinner from '../components/Spinner'
import {getAccounts} from '../features/accounts/accountSlice'
import {getCategories} from '../features/categories/categorySlice'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {accounts, isLoading, isError, message} = useSelector((state) =>
  state.accounts)
  const { categories } = useSelector((state) => state.categories)

  useEffect (() => {
    if(isError) {
      console.log(message);
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getAccounts())
    dispatch(getCategories())
    
  }, [user, navigate, isError, message, dispatch] ) 

if (isLoading) {
  return <Spinner />
}
  return (
    <>
      <section className='Heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>You are now on your way to taking control of your finances.<br/><br/></p>
        
        <h2>Accounts</h2>
        <p>Below is your list of accounts.<br/> Make one account for each bank account you wish to track.<br/>The names of your accounts must be unique.<br/>It is sugguested to add your name in front of your account. <br/>Example: Matthew's Credit Card, Sarah's Savings or Ramona's Checking</p>
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
        <hr />
        <br />
      </section> 
    <p>Below is a list of your categories. Create categories to track your spending.<br /> Please note that these categories must be unique to your your account, < br/>therefore it is sugguested to add your name before the category.<br /> Example: Matthew's gas, Joe's Rent, Sarah's Electricity.<br/>Be sure to make an opening balance category.</p>
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