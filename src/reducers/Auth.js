export const reducer = (state, action) => {
    switch (action.type) {

        case 'LOGIN':
            localStorage.setItem("access_token", JSON.stringify(action.payload.access_token))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            localStorage.setItem("token_novus", 'a16508e6-8798-461a-8b07-729e03d8b1ef')
            localStorage.setItem("data_p", JSON.stringify({
              "d1": 170,
              "d2": 78,
              "d3": 36,
              "d4": 8,
              "d5":8,
              "d6": 40
            }))


            return {
                ...state,
                isAuthenticated: true,                
                access_token: action.payload.access_token,
                user: action.payload.user
            }

        case 'LOGOUT':
            localStorage.clear()
            return {
                ...state,
                isAuthenticated: false,
                access_token: null,
                user: null
            }
        
        default:
            return state
    }
}
