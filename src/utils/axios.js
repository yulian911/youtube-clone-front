import axios from "axios";


axios.defaults.withCredentials = true

const  $host =axios.create({
    baseURL:"http://localhost:4000/api/v1",
    
})


export {
    $host
}