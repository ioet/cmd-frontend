import express from "express"

const router = express.Router()

router.get('/get', (req, res) => {
    
    const id = req.query.id;

    const header = req.headers.authorization;
    let token = "";
    if (header) token = header.split(" ")[1];
    
    console.log("Token:" + token)
    console.log("id:" + id)

    res.json({ res: "ok"})
})

export default router;