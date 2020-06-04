const db = require('../db-connection');

const controllers = {
  getAll: (req, res) => {

    const sql = `SELECT * FROM genres`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  getOne: (req, res) => {
    
    const id = req.params.id;

    const sql = `SELECT * FROM genres where GenreId = '${id}'`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(rows)
    });
  },
  create: (req, res) => {
    
    const Name = req.body.name;
    
        
    const sql = `INSERT INTO genres (Name)
VALUES( "${Name}" )`;


    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.send(rows)
    });
    
  },
  update: (req, res) => {
    // read row data from body
    const Name = req.body.name;
    const id = parseInt(req.params.id);
    
        
    const sql = `UPDATE genres
        SET Name = "${Name}"
            
        WHERE
              GenreId = ${id}`;


    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.send(`your changes have been saved`)
    });
  },
  delete: (req, res) => {
    const id = req.params.id;

    const sql = `DELETE FROM genres WHERE GenreId = "${id}"`;

    db.all(sql, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }

      res.json(`it's deleted`)
    });
   }
}

module.exports = controllers;
