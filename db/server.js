const db = require ('./db')



let  getAllgames = (_req, res) => {
    db.query('select * from gamelist', (err, result) => {
        
        if (err)
        console.error(err);
        else
        res.json(result.rows)
    })

    }
module.exports = {
    getAllgames: getAllgames
    }
