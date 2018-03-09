import express from "express"
import bcrypt from "bcrypt"
import * as errors from "../errors/errors.auth"

const router = express.Router()
var models = require('express-cassandra')

router.post('/login', (req, res) => {
        
    const { email, password } = req.body.credentials

    models.instance.Users.findOne({ email: email }, (err, user) => {
        if(err) {
            console.log(err)
            errors.errorDataBaseConnection(res)
            return
        }
        if(!user){
            errors.errorIncorrectEmail(res)
            return 
        }

        // Compare encrypted password
        bcrypt.compare(password, user.password, (error, response) => {
            if(response){
                res.json({ user: "Message from server: Login with user : " + email });        
                return    
            }else{
                errors.errorIncorrectPassword(res)
                return    
            }
        })
        
    });

})

router.post('/register', (req, res) => {

    const { email, password } = req.body.credentials

    models.instance.Users.findOne({ email: email }, (err, user) => {
        if(err) {
            console.log(err)
            errors.errorDataBaseConnection(res)
            return
        }
        if(!user){
            error.errorEmailIsRegistered(res)
            return 
        }
        // Hash the password
        bcrypt.hash(password, 10, (err, encryptedPassword) => {
            if(err) {
                error.errorEncriptingPassword(res)
                return
            }
            // Add to database
            // Create a model instance 
            var newUser = new models.instance.Users({
                email: email,
                password: encryptedPassword
            });
            // Save new user
            newUser.save(function(err){
                if(err) {
                    error.errorSavingUser(res)
                    return;
                }
                res.json({ user: "Message from server: Registered user" });        
            });    
        });

    })
})

export default router;