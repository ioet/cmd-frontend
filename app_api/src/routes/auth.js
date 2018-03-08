import express from "express";
const router = express.Router();
var models = require('express-cassandra');

router.post('/', (req, res) => {
        
    const { email, password } = req.body.credentials

    models.instance.Users.find({
        email: email,
        password: password
    }, {raw:true, allow_filtering: true} , (err, user) => {
        if(err) {
            console.log(err)
            res.status(400).json({errors: { global: "Message from server: Error from database connection." } })
            return;
        }
        if(user.length === 0){
            res.status(400).json({errors: { global: "Message from server: No records." } })
        }else{
            res.json({ user: "Message from server: found user : " + email });
        }
    });

})

export default router;