import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import AccountForm from '../components/accountForm'
import AccountItem from '../components/accountItem'
import Spinner from '../components/Spinner'
import {getAccounts} from '../features/accounts/accountSlice'


function Dashboard() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)
  const {accounts, isLoading, isError, message} = useSelector((state) =>
  state.accounts)

  useEffect (() => {
    if(isError) {
      console.log(message);
    }
    if(!user) {
      navigate('/login')
    }
    dispatch(getAccounts())


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
    </>
  )
}

export default Dashboard