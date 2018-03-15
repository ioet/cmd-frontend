import axios from 'axios'

export default {
    user: {
        login: (credentials) => 
            axios.post('/api/auth/login', { credentials }).then((res) => res.data.user)
    },
    restaurant_public: {
        getRestaurants: () => 
            axios.get('/api/public/restaurant/list').then((res) => {
                console.log(res.data)
            })
    }
}