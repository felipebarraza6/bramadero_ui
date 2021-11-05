import { GET } from './config'

const getData = async(variable) =>{
   try {
        const request = await GET(`?variable=${variable}`)
        return request.data
   } catch(err) {
       console.log(err)
   }
}


const api_novus = {
    data: getData,
}


export default api_novus
