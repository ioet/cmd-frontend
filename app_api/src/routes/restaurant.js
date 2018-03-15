import express from "express"

const passportJWT = require("passport-jwt");
const router = express.Router()

router.get('/get', (req, res) => {
    res.json({ res: "ok"})
})

export default router;