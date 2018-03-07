import axios from 'axios'

export default {
    user: {
        login: (credentials) => 
            axios.post('/api/auth', { credentials }).then((res) => {
                console.log("El servidor está respondiendo: " + res.data.user)
                return res.data.user
            })
    }
}