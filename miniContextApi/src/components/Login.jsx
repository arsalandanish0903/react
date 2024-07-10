import React, {useContext, useState} from 'react'
import userContext from '../Context/UserContext'

const Login = () => { 
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(userContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <div>
        <input type="text" placeholder='Enter Username'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}/>
        <input type="text" placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
