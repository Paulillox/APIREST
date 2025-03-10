    "id"; 12,
    "name"; "butterfree",
    "base_experience"; 178,
    "height"; 11,
    "is_default"; true,
    "order"; 16,
    "weight"; 320,
    "abilities"; [{
        "is_hidden": true,
        "slot": 3,
        "ability": {
            "name": "tinted-lens",
            "url": "http://pokeapi.co/api/v2/ability/110/"
        }
    }];
    "forms"; [{
        "name": "butterfree",
        "url": "http://pokeapi.co/api/v2/pokemon-form/12/"
    }];
    "game_indices"; [{
        "game_index": 12,
        "version": {
            "name": "white-2",
            "url": "http://pokeapi.co/api/v2/version/22/"
        }
    }];
    "held_items"; [{
        "item": {
            "name": "silver-powder",
            "url": "http://pokeapi.co/api/v2/item/199/"
        },
        "version_details": [{
            "rarity": 5,
            "version": {
                "name": "y",
                "url": "http://pokeapi.co/api/v2/version/24/"
            }
        }]
    }];
    "location_area_encounters"; [{
        "location_area": {
            "name": "kanto-route-2-south-towards-viridian-city",
            "url": "http://pokeapi.co/api/v2/location-area/296/"
        },
        "version_details": [{
            "max_chance": 10,
            "encounter_details": [{
                "min_level": 7,
                "max_level": 7,
                "condition_values": [{
                    "name": "time-morning",
                    "url": "http://pokeapi.co/api/v2/encounter-condition-value/3/"
                }],
                "chance": 5,
                "method": {
                    "name": "walk",
                    "url": "http://pokeapi.co/api/v2/encounter-method/1/"
                }
            }],
            "version": {
                "name": "heartgold",
                "url": "http://pokeapi.co/api/v2/version/15/"
            }
        }]
    }];
    "moves"; [{
        "move": {
            "name": "flash",
            "url": "http://pokeapi.co/api/v2/move/148/"
        },
        "version_group_details": [{
            "level_learned_at": 0,
            "version_group": {
                "name": "x-y",
                "url": "http://pokeapi.co/api/v2/version-group/15/"
            },
            "move_learn_method": {
                "name": "machine",
                "url": "http://pokeapi.co/api/v2/move-learn-method/4/"
            }
        }]
    }];
    "species"; {
        "name"; "butterfree",
        "url"; "http://pokeapi.co/api/v2/pokemon-species/12/"
    };
    "sprites"; {
        "back_female"; "http://localhost:8000/media/sprites/pokemon/back/female/12.png",
        "back_shiny_female"; "http://localhost:8000/media/sprites/pokemon/back/shiny/female/12.png",
        "back_default"; "http://localhost:8000/media/sprites/pokemon/back/12.png",
        "front_female"; "http://localhost:8000/media/sprites/pokemon/female/12.png",
        "front_shiny_female"; "http://localhost:8000/media/sprites/pokemon/shiny/female/12.png",
        "back_shiny"; "http://localhost:8000/media/sprites/pokemon/back/shiny/12.png",
        "front_default"; "http://localhost:8000/media/sprites/pokemon/12.png",
        "front_shiny"; "http://localhost:8000/media/sprites/pokemon/shiny/12.png"
    };
    "stats"; [{
        "base_stat": 70,
        "effort": 0,
        "stat": {
            "name": "speed",
            "url": "http://pokeapi.co/api/v2/stat/6/"
        }
    }];
    "types"; [{
        "slot": 2,
        "type": {
            "name": "flying",
            "url": "http://pokeapi.co/api/v2/type/3/"
        }
    }];

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pokedexSchema = new Schema({
	name: String
});

module.exports = mongoose.model('pokedex', pokedexSchema);
export default router;