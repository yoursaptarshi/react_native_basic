import axios from "axios"

export const register=(name,username,password) =>async(dispatch)=>{
    try {
        dispatch({type:'RegisterRequest'});
        const {data} = await axios.post("/register",{name:name,username:username,password:password});
        console.log(data)
        dispatch({type:'RegisterSuccess',payload:data})
    } catch (error) {
        dispatch({type:'RegisterFailure',payload:error.response.data.message})
    }
}