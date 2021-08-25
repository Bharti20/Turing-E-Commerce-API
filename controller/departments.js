const knex = require('../databaseConnection/connection')

//get all departments
let departments = (req, res) => {
    knex.from('department').select('*')
    .then((rows) => {
        res.send(rows)
    }).catch((err) => {
        res.send(err)
        console.log(err)
    });
};

// by id
 let departmentById = (req, res) => {
    knex.from('department')
    .where({department_id:req.params.id }).then((data) => {
        res.send(data[0])
        console.log(data[0])
    }).catch((err) => {
        res.send(err)
    });
};


module.exports = {
    departments,
    departmentById
}
