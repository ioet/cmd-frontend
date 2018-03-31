import express from 'express'
import User from '../models/User'
import * as errors from '../../errors/errors.auth'
const router = express.Router()

router.post('/login', (req, res) => {

    const { email, password } = req.body.credentials

    User.get({ email: email }, (err, user) => {

        if(err) {
            errors.errorDataBaseConnection(res)
            return
        }
        if(!user){
            errors.errorIncorrectEmail(res)
            return
        }
        if(user.comparePassword(password, user.password)){
            res.json({ user: user.authJSON(user) });
            return 
        }
        
        errors.errorIncorrectPassword(res)
        
    })

})

export default router;

/*
var newUser = new User(
    {
        email: 'bandrade@ioet.com', 
        password: '$2a$10$jNLY0g6CSJfHbAEzxqofZuhwsLQ00tPEWz4CcMjViK1nuuINYVFDe',
        role: 'super_admin'
    }
)
newUser.save();
*/