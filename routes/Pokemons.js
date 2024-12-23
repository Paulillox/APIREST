import express from "express";
import mongoose from "mongoose";
import Pokemon from "../models/Pokemons.js"

mongoose.connect(process.env.URI_MONGO)
const router = express.Router(); 


router.use(function(req, res, next) {
   
    console.log('Something is happening.');
    next();
});

router.get('/', function(req, res) {
	res.json({ message: 'welcome to our api!' });   
});

router.route('/pokemons')

    .post(function(req, res) {

        const pokemon = new Pokemon();
        pokemon.name = req.body.name; 
        pokemon.save(function(error) {
			if (error)
 				res.send(error);

			res.json({ message: 'Pokemon created!' });
		});
        
	})

    .get(function(req, res) {
        Pokemon.find(function(error, pokemons) {
            if (error)
                res.send(error);

            res.json(pokemons);
        });
    });


router.route('/pokemons/:pokemon_id')

    .get(function(req, res) {
        Pokemon.findById(req.params.pokemon_id, function(error, pokemon) {
            if (error)
                res.send(error);
            res.json(pokemon);
        });
    })

    .put(function(req, res) {

       
        Pokemon.findById(req.params.pokemon_id, function(error, pokemon) {

            if (error)
                res.send(error);

            pokemon.name = req.body.name; 

            pokemon.save(function(error) {
                if (error)
                    res.send(error);

                res.json({ message: 'Pokemon updated!' });
            });

        });
    })


    .delete(function(req, res) {
        Pokemon.remove({
            _id: req.params.pokemon_id
        }, function(error, pokemon) {
            if (error)
                res.send(error);

            res.json({ message: 'Pokemon successfully deleted' });
        });
    });

module.exports = router;