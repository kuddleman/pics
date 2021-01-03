import axios from 'axios'

// create a customized instance of axios:
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 24y5Z4vaLfMz5w56aFQCUFjBpJOF7-NzT8MM2ysY0Ow'
    }
})