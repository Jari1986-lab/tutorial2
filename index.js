const express = require('express');
const query = require('./db/server')


const app = express();

const port = 3000;

app.get("/api/games", async  (_req, resp) =>{
    console.log("connect");    
    resp.json(await query.getAllgames);
    })


app.listen(port, () => {{}
    console.log(`server working ${port}`);
})

module.exports = app;
