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
    if(!token_novus){
      localStorage.setItem("token_novus", '9d1162a7-7088-4dc8-9b19-d666acc051b1')
      localStorage.setItem("data_p", JSON.stringify({
        "d1": 50,
        "d2": 33,
        "d3": 36,
        "d4": 4,
        "d5":4
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
