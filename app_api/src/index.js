import express from 'express'
import path from "path";

const app = express();

app.post('/api/auth', (req, res) => {
    // Aquí se debería manejar la petición realizada por el front
    // Se está respondiendo con data de prueba
    res.status(400).json({errors: { global: "Message from server: Cassandra Database is not implemented yet." } })
})

app.listen(8080, () => console.log("Running on localhost: 8080"))