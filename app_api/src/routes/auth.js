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
            res.status(400).json({errors: { global: "Message from server: Error en conexión con la base." } })
            return;
        }
        if(user.length === 0){
            res.status(400).json({errors: { global: "Message from server: No hay registros." } })
        }else{
            res.json({ user: "Usuario logueado: " + email });
        }
    });

})

export default router;