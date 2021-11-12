import { GET } from './config'

const getData = async(variable, start_date, end_date) =>{
   try {
        const request = await GET(`?variable=${variable}&start_date=2021-11-01`)
        console.log(request)
        return request.data        
   } catch(err) {
       console.log(err)
   }
}


const api_novus = {
    data: getData,
}


export default api_novus
