import axios from 'axios'


const rootInstance=axios.create({
    baseURL:'https://beershop20180711.firebaseio.com/'
})

export default rootInstance;