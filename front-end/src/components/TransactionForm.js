import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createAccount } from '../features/accounts/accountSlice'
import { createCategory } from '../features/categories/categorySlice'

function TransactionForm() {
    const [name, setName] = useState('')

    const dispatch = useDispatch()
   
    const onSubmit = e => {
        e.preventDefault()

        dispatch(createAccount({name}))
        setName('')
        dispatch(createCategory({name}))
        setName('')
    }

  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Transactions</label>
            <input type='text' name='name' id='name' value= {name} onChange={(e) => setName(e.target.value)}/>
            </div> 
            <div className='form-group'>
                <button className='btn btn-block' type='submit'>
                    Add Transaction
                </button>
            </div>
        </form>
    </section>
  )
}

export default TransactionForm