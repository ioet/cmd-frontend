import express from 'express'
import path from "path";

const app = express();

app.post('/api/auth', (req, res) => {
    console.log("Llegó")
    // Aquí se debería manejar la petición realizada por el front
    // Se está respondiendo con data de prueba
    res.send({ user: "Prueba"})
})

app.listen(8080, () => console.log("Running on localhost: 8080"))