import React, { useReducer, useEffect, createContext } from 'react'

import { reducer } from './reducers/Auth.js'

import AuthLayout from "./layouts/Auth/Auth.js"
import AdminLayout from "./layouts/Admin/Admin.js"

export const AuthContext = createContext()


function App(props) {

  const initialState = {
    isAuthenticated: false,
    access_token: null,
    user: null
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    document.body.classList.toggle("white-content");

    const access_token = JSON.parse(localStorage.getItem('access_token') || null)
    const user = JSON.parse(localStorage.getItem('user') || null)
    const token_novus = localStorage.getItem('token_novus')

    if(user && access_token){
      dispatch({
        type: 'LOGIN',
        payload: {
          access_token,
          user,
        }
      })
    }
    if(token_novus){
      localStorage.setItem("token_novus", 'a16508e6-8798-461a-8b07-729e03d8b1ef')
      localStorage.setItem("data_p", JSON.stringify({
        "d1": 170,
        "d2": 78,
        "d3": 36,
        "d4": 8,
        "d5":8,
        "d6": 40
      }))
    }
      }, [])


  return (

    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <div className="App" style={{backgroundColor:'#030852'}}>
        {!state.isAuthenticated ? 
          <AuthLayout {...props} /> : <AdminLayout {...props} />
        }
      </div>

    </AuthContext.Provider>

  )

}

export default App
