import express from "express"
const router = express.Router()

router.get('/list', (req, res) => {
    res.json({ res: "ok" })
    /*var query = {
        //order the query by the ptj_general field in ascendent order
        $orderby:{ '$asc' :'ptj_general' },
        //limit the result set to 10 rows (enought data for our mock-up)
        $limit: 10
    }
  
    models.instance.restaurant.find(query, {raw: true}, (err, restaurant_list) => {
        //restaurant_list is an array of plain objects satisfying the query conditions above
        if(err) {
            errors.errorDataBaseConnection(res)
            return
        }
        if(!restaurant_list){
            errors.errorIncorrectRestaurant(res)
            return
        }
        res.json({ restaurant_list });    //If everything is ok then returns the restaurant_list
    });
    */
  }
)

export default router;