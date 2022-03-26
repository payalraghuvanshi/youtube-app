import axios from "axios"

const KEY = 'AIzaSyAMD0UeExA0EyE0u17g5wtLOUmAkgNvlIs'

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY,
        type:'video'
    
    }


})