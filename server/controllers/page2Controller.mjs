import db from "../app.mjs";

const page = {};

page.page2Controller = (req, res)  => {
 
    const { name, email, message } = req.body;


    const query = 'INSERT INTO form (name, email, message) VALUES(?,?,?)';

    db.query(query, [name, email, message]  , (error, results, fields) => {
        if (error) throw error;
        console.log(results);
    })


    return res.send(true);
}

export default page;

