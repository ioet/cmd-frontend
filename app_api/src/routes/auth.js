import express from "express"
import bcrypt from "bcrypt"
const router = express.Router()
var models = require('express-cassandra')


router.post('/login', (req, res) => {
        
    const { email, password } = req.body.credentials

    models.instance.Users.findOne({ email: email }, (err, user) => {
        if(err) {
            console.log(err)
            res.status(400).json({errors: { global: "Message from server: Error from database connection." } })
            return
        }
        if(!user){
            res.status(400).json({errors: { global: "Message from server: Email incorrect." } })
            return 
        }

        // Compare encrypted password
        bcrypt.compare(password, user.password, (error, response) => {
            if(response){
                res.json({ user: "Message from server: Login with user : " + email });        
                return    
            }else{
                res.status(400).json({errors: { global: "Message from server: Incorrect password." } })
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
            res.status(400).json({errors: { global: "Message from server: Error from database connection." } })
            return
        }
        if(!user){
            res.status(400).json({errors: { global: "Message from server: The email is already registered." } })
            return 
        }
        // Hash the password
        bcrypt.hash(password, 10, (err, encryptedPassword) => {
            if(err) {
                console.log(err)
                res.status(400).json({errors: { global: "Message from server: Error encrypting password." } })
                return
            }
            // Add to database
            // Create a instance model
            var newUser = new models.instance.Users({
                email: email,
                password: encryptedPassword
            });
            newUser.save(function(err){
                if(err) {
                    res.status(400).json({errors: { global: "Message from server: Error saving new register." } })
                    return;
                }
                res.json({ user: "Message from server: Registered user" });        
            });    
        });

    })
})

export default router;