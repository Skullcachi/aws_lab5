const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM movie', (err, movies) =>
        {
            if(err)
            {
                res.json(err);
            }
            console.log(movies);
            res.render('movies', {
                data: movies
            });
        });
    });
};
controller.newMovie = (req, res) => {
    res.render('addMovie');
}; 

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM movie WHERE movieID = ?', [id], (err, movie) =>
        {
            if(err)
            {
                res.json(err);
            }
            console.log(movie);
            res.render('updateMovie', {
                data: movie[0]
            });
        });
    });
}; 
controller.update = (req, res) => {
    const { id } = req.params;
    const editedMovie = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE movie set ? WHERE movieID = ?', [editedMovie, id], (err, movie) =>
        {
            if(err)
            {
                res.json(err);
            }
            console.log(movie);
            res.redirect('/');
        });
    });
}; 
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM movie WHERE movieID = ?', [id], (err, movie) =>
        {
            if(err)
            {
                res.json(err);
            }
            console.log(movie);
            res.redirect('/');
        });
    });
}; 

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO movie set ?', [data], (err, movie) =>
        {
            if(err)
            {
                res.json(err);
            }
            console.log(movie);
            res.redirect('/');
        });
    });
};

module.exports = controller;