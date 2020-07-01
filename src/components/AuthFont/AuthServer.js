import axios from 'axios'


export function Login(data){
    return dispatch =>{
        
   return  axios.post( "http://localhost:8000/user/login",LoginUser).then( res => {
        const token = req.data.token
        localStorage.setItem("x-access-token",token)
    })
    }
}