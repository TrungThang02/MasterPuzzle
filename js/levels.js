/**
 * Find the Differences - Level Data Definitions
 * 100 Hand-crafted levels across 4 difficulty tiers and 20 distinct world archetypes.
 */

const LEVELS_DATA = [
    {
        "id": 1,
        "name": "Cozy Living Room",
        "theme": "interior",
        "archetype": 1,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 75,
        "description": "Examine the cozy living room with sharp eyes. Discover all 5 subtle differences!",
        "differences": [
            {
                "id": "lvl1_clock",
                "x": 0.5,
                "y": 0.10,
                "r": 0.05,
                "label": "Clock 12 o'clock double marker",
                "type": "shape"
            },
            {
                "id": "lvl1_lamp",
                "x": 0.135,
                "y": 0.46,
                "r": 0.05,
                "label": "Floor lamp brass pull-chain",
                "type": "missing"
            },
            {
                "id": "lvl1_painting",
                "x": 0.81,
                "y": 0.175,
                "r": 0.05,
                "label": "Seagull flying above the sailboat",
                "type": "missing"
            },
            {
                "id": "lvl1_cat",
                "x": 0.29,
                "y": 0.775,
                "r": 0.05,
                "label": "White fluffy tip on sleeping cat's tail",
                "type": "missing"
            },
            {
                "id": "lvl1_cushion",
                "x": 0.645,
                "y": 0.652,
                "r": 0.05,
                "label": "Embroidered center button on cushion",
                "type": "missing"
            }
        ]
    },
    {
        "id": 2,
        "name": "Sunny Meadow Farm",
        "theme": "farm",
        "archetype": 2,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 75,
        "description": "Inspect the sunny countryside farm. Spot all 5 hidden differences!",
        "differences": [
            {
                "id": "lvl2_weathercock",
                "x": 0.281,
                "y": 0.1,
                "r": 0.05,
                "label": "Barn rooftop weathercock direction",
                "type": "shape"
            },
            {
                "id": "lvl2_windmill",
                "x": 0.85,
                "y": 0.115,
                "r": 0.05,
                "label": "Blue weather ribbon on windmill blade",
                "type": "missing"
            },
            {
                "id": "lvl2_cow",
                "x": 0.52,
                "y": 0.715,
                "r": 0.05,
                "label": "Golden brass bell on cow's collar",
                "type": "missing"
            },
            {
                "id": "lvl2_apple",
                "x": 0.14,
                "y": 0.54,
                "r": 0.05,
                "label": "Apple hanging on lower branch",
                "type": "missing"
            },
            {
                "id": "lvl2_sunflower",
                "x": 0.805,
                "y": 0.77,
                "r": 0.05,
                "label": "Honeybee hovering near sunflowers",
                "type": "missing"
            }
        ]
    },
    {
        "id": 3,
        "name": "Tropical Coral Beach",
        "theme": "beach",
        "archetype": 3,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 118,
        "description": "Explore the captivating details of Tropical Coral Beach. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl3_cloud",
                "x": 0.44,
                "y": 0.14,
                "r": 0.085,
                "label": "Heart-shaped sky cloud",
                "type": "shape"
            },
            {
                "id": "lvl3_boat_sail",
                "x": 0.822,
                "y": 0.327,
                "r": 0.085,
                "label": "Sailboat stripe color",
                "type": "color"
            },
            {
                "id": "lvl3_coconut",
                "x": 0.18,
                "y": 0.373,
                "r": 0.08,
                "label": "Coconut cluster count",
                "type": "missing"
            },
            {
                "id": "lvl3_crab",
                "x": 0.26,
                "y": 0.82,
                "r": 0.085,
                "label": "Sand crab sunglasses",
                "type": "extra"
            },
            {
                "id": "lvl3_starfish",
                "x": 0.68,
                "y": 0.86,
                "r": 0.08,
                "label": "Starfish color hue",
                "type": "color"
            }
        ]
    },
    {
        "id": 4,
        "name": "Sweet Pastry Bakery",
        "theme": "bakery",
        "archetype": 4,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 117,
        "description": "Explore the captivating details of Sweet Pastry Bakery. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl4_chef_hat",
                "x": 0.48,
                "y": 0.267,
                "r": 0.085,
                "label": "Baker's hat blue ribbon",
                "type": "extra"
            },
            {
                "id": "lvl4_pretzel",
                "x": 0.74,
                "y": 0.48,
                "r": 0.085,
                "label": "Chocolate glaze pretzel",
                "type": "color"
            },
            {
                "id": "lvl4_cupcake_cherry",
                "x": 0.22,
                "y": 0.56,
                "r": 0.085,
                "label": "Cupcake strawberry topping",
                "type": "shape"
            },
            {
                "id": "lvl4_bread_loaf",
                "x": 0.38,
                "y": 0.72,
                "r": 0.085,
                "label": "Baguette crust cuts",
                "type": "shape"
            },
            {
                "id": "lvl4_coffee_mug",
                "x": 0.84,
                "y": 0.733,
                "r": 0.08,
                "label": "Mug heart steam",
                "type": "missing"
            }
        ]
    },
    {
        "id": 5,
        "name": "Playful Puppy Park",
        "theme": "park",
        "archetype": 5,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 116,
        "description": "Explore the captivating details of Playful Puppy Park. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl5_kite",
                "x": 0.82,
                "y": 0.16,
                "r": 0.085,
                "label": "Flying kite tail bows",
                "type": "extra"
            },
            {
                "id": "lvl5_butterfly",
                "x": 0.24,
                "y": 0.38,
                "r": 0.08,
                "label": "Monarch butterfly color",
                "type": "color"
            },
            {
                "id": "lvl5_collar",
                "x": 0.46,
                "y": 0.643,
                "r": 0.085,
                "label": "Puppy collar tag shape",
                "type": "shape"
            },
            {
                "id": "lvl5_ball",
                "x": 0.78,
                "y": 0.76,
                "r": 0.085,
                "label": "Tennis ball color",
                "type": "color"
            },
            {
                "id": "lvl5_bone",
                "x": 0.15,
                "y": 0.84,
                "r": 0.08,
                "label": "Chew bone beside doghouse",
                "type": "missing"
            }
        ]
    },
    {
        "id": 6,
        "name": "Enchanted Fairy Forest",
        "theme": "fantasy",
        "archetype": 6,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 116,
        "description": "Explore the captivating details of Enchanted Fairy Forest. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl6_owl",
                "x": 0.78,
                "y": 0.26,
                "r": 0.08,
                "label": "Hollow tree owl eyes",
                "type": "shape"
            },
            {
                "id": "lvl6_lantern",
                "x": 0.15,
                "y": 0.362,
                "r": 0.08,
                "label": "Hanging lantern crystal flame",
                "type": "color"
            },
            {
                "id": "lvl6_fairy_wings",
                "x": 0.48,
                "y": 0.44,
                "r": 0.085,
                "label": "Fairy wing glow color",
                "type": "color"
            },
            {
                "id": "lvl6_mushroom",
                "x": 0.24,
                "y": 0.727,
                "r": 0.085,
                "label": "Giant mushroom glowing spots",
                "type": "color"
            },
            {
                "id": "lvl6_flower",
                "x": 0.86,
                "y": 0.74,
                "r": 0.08,
                "label": "Midnight blossom petal shape",
                "type": "shape"
            }
        ]
    },
    {
        "id": 7,
        "name": "Downtown Coffee Haven",
        "theme": "cafe",
        "archetype": 7,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 115,
        "description": "Explore the captivating details of Downtown Coffee Haven. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl7_hanging_plant",
                "x": 0.6,
                "y": 0.16,
                "r": 0.08,
                "label": "Hanging pothos leaves",
                "type": "missing"
            },
            {
                "id": "lvl7_wall_clock",
                "x": 0.18,
                "y": 0.18,
                "r": 0.08,
                "label": "Vintage clock time",
                "type": "shape"
            },
            {
                "id": "lvl7_menu_chalk",
                "x": 0.82,
                "y": 0.28,
                "r": 0.085,
                "label": "Chalkboard specials icon",
                "type": "shape"
            },
            {
                "id": "lvl7_barista_apron",
                "x": 0.3,
                "y": 0.41,
                "r": 0.085,
                "label": "Barista apron pocket logo",
                "type": "shape"
            },
            {
                "id": "lvl7_steam",
                "x": 0.44,
                "y": 0.523,
                "r": 0.08,
                "label": "Espresso cup steam curls",
                "type": "shape"
            }
        ]
    },
    {
        "id": 8,
        "name": "Deep Ocean Odyssey",
        "theme": "ocean",
        "archetype": 8,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 114,
        "description": "Explore the captivating details of Deep Ocean Odyssey. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl8_submarine",
                "x": 0.76,
                "y": 0.22,
                "r": 0.085,
                "label": "Mini-sub spotlight beam",
                "type": "color"
            },
            {
                "id": "lvl8_turtle_shell",
                "x": 0.5,
                "y": 0.36,
                "r": 0.085,
                "label": "Sea turtle carapace pattern",
                "type": "shape"
            },
            {
                "id": "lvl8_clownfish",
                "x": 0.22,
                "y": 0.46,
                "r": 0.08,
                "label": "Anemone fish side stripe",
                "type": "shape"
            },
            {
                "id": "lvl8_jellyfish",
                "x": 0.82,
                "y": 0.56,
                "r": 0.08,
                "label": "Jellyfish neon tint",
                "type": "color"
            },
            {
                "id": "lvl8_anchor_fluke",
                "x": 0.14,
                "y": 0.71,
                "r": 0.08,
                "label": "Rusty anchor chain link",
                "type": "missing"
            }
        ]
    },
    {
        "id": 9,
        "name": "Retro Space Odyssey",
        "theme": "space",
        "archetype": 9,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 113,
        "description": "Explore the captivating details of Retro Space Odyssey. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl9_constellation",
                "x": 0.18,
                "y": 0.18,
                "r": 0.075,
                "label": "Star cluster bright star",
                "type": "missing"
            },
            {
                "id": "lvl9_planet_rings",
                "x": 0.82,
                "y": 0.2,
                "r": 0.085,
                "label": "Ringed gas giant tilt",
                "type": "shape"
            },
            {
                "id": "lvl9_antenna",
                "x": 0.48,
                "y": 0.507,
                "r": 0.085,
                "label": "Lunar base radar dish angle",
                "type": "shape"
            },
            {
                "id": "lvl9_astronaut_visor",
                "x": 0.26,
                "y": 0.513,
                "r": 0.08,
                "label": "Astronaut gold visor tint",
                "type": "color"
            },
            {
                "id": "lvl9_flag_symbol",
                "x": 0.702,
                "y": 0.607,
                "r": 0.08,
                "label": "Mission flag emblem",
                "type": "shape"
            }
        ]
    },
    {
        "id": 10,
        "name": "Golden Autumn Park",
        "theme": "autumn",
        "archetype": 10,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 112,
        "description": "Explore the captivating details of Golden Autumn Park. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl10_balloon",
                "x": 0.78,
                "y": 0.16,
                "r": 0.085,
                "label": "Hot air balloon basket pattern",
                "type": "color"
            },
            {
                "id": "lvl10_lamp_post",
                "x": 0.12,
                "y": 0.36,
                "r": 0.08,
                "label": "Gas streetlamp glowing orb",
                "type": "missing"
            },
            {
                "id": "lvl10_bicycle_basket",
                "x": 0.28,
                "y": 0.52,
                "r": 0.08,
                "label": "Vintage bike basket flowers",
                "type": "color"
            },
            {
                "id": "lvl10_fountain",
                "x": 0.7,
                "y": 0.54,
                "r": 0.085,
                "label": "Stone fountain water tiers",
                "type": "shape"
            },
            {
                "id": "lvl10_bench_cushion",
                "x": 0.44,
                "y": 0.64,
                "r": 0.08,
                "label": "Park bench plaid scarf",
                "type": "color"
            }
        ]
    },
    {
        "id": 11,
        "name": "Medieval Citadel Castle",
        "theme": "medieval",
        "archetype": 11,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 112,
        "description": "Explore the captivating details of Medieval Citadel Castle. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl11_weather_flag",
                "x": 0.66,
                "y": 0.12,
                "r": 0.075,
                "label": "High tower pennant color",
                "type": "color"
            },
            {
                "id": "lvl11_banner",
                "x": 0.32,
                "y": 0.21,
                "r": 0.08,
                "label": "Royal crest heraldic lion banner",
                "type": "shape"
            },
            {
                "id": "lvl11_gargoyle",
                "x": 0.86,
                "y": 0.28,
                "r": 0.08,
                "label": "Stone gargoyle wings",
                "type": "shape"
            },
            {
                "id": "lvl11_torch",
                "x": 0.2,
                "y": 0.46,
                "r": 0.08,
                "label": "Wall sconce torch flame",
                "type": "color"
            },
            {
                "id": "lvl11_spear_tip",
                "x": 0.64,
                "y": 0.48,
                "r": 0.075,
                "label": "Guard halberd tassel",
                "type": "missing"
            }
        ]
    },
    {
        "id": 12,
        "name": "Serene Zen Garden",
        "theme": "japan",
        "archetype": 12,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 111,
        "description": "Explore the captivating details of Serene Zen Garden. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl12_pagoda_finial",
                "x": 0.238,
                "y": 0.14,
                "r": 0.075,
                "label": "Pagoda bronze roof spire",
                "type": "shape"
            },
            {
                "id": "lvl12_cherry_branch",
                "x": 0.54,
                "y": 0.2,
                "r": 0.08,
                "label": "Sakura blossom density",
                "type": "shape"
            },
            {
                "id": "lvl12_lantern_window",
                "x": 0.72,
                "y": 0.44,
                "r": 0.075,
                "label": "Toro stone lantern lattice",
                "type": "shape"
            },
            {
                "id": "lvl12_bridge_post",
                "x": 0.38,
                "y": 0.54,
                "r": 0.075,
                "label": "Red arched bridge post cap",
                "type": "color"
            },
            {
                "id": "lvl12_bamboo_spout",
                "x": 0.14,
                "y": 0.64,
                "r": 0.075,
                "label": "Bamboo water rocker (shishi-odoshi)",
                "type": "shape"
            }
        ]
    },
    {
        "id": 13,
        "name": "Wizard's Secret Lab",
        "theme": "alchemy",
        "archetype": 13,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 110,
        "description": "Explore the captivating details of Wizard's Secret Lab. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl13_telescope",
                "x": 0.68,
                "y": 0.18,
                "r": 0.075,
                "label": "Brass astrolabe dial position",
                "type": "shape"
            },
            {
                "id": "lvl13_raven",
                "x": 0.84,
                "y": 0.2,
                "r": 0.075,
                "label": "Familar raven beak key",
                "type": "missing"
            },
            {
                "id": "lvl13_candle",
                "x": 0.16,
                "y": 0.34,
                "r": 0.075,
                "label": "Floating candle wick sparks",
                "type": "color"
            },
            {
                "id": "lvl13_hourglass",
                "x": 0.36,
                "y": 0.42,
                "r": 0.075,
                "label": "Luminous hourglass sand level",
                "type": "shape"
            },
            {
                "id": "lvl13_orb",
                "x": 0.5,
                "y": 0.46,
                "r": 0.08,
                "label": "Crystal ball plasma aura",
                "type": "color"
            }
        ]
    },
    {
        "id": 14,
        "name": "Pirate's Galleon Cove",
        "theme": "pirate",
        "archetype": 14,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 109,
        "description": "Explore the captivating details of Pirate's Galleon Cove. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl14_jolly_roger",
                "x": 0.478,
                "y": 0.173,
                "r": 0.08,
                "label": "Black mast pirate flag skull eyepatch",
                "type": "shape"
            },
            {
                "id": "lvl14_rope_pulley",
                "x": 0.64,
                "y": 0.3,
                "r": 0.075,
                "label": "Rigging rope wooden pulley",
                "type": "missing"
            },
            {
                "id": "lvl14_figurehead",
                "x": 0.8,
                "y": 0.42,
                "r": 0.08,
                "label": "Mermaid ship figurehead crown",
                "type": "color"
            },
            {
                "id": "lvl14_parrot",
                "x": 0.18,
                "y": 0.44,
                "r": 0.075,
                "label": "Parrot tail feather colors",
                "type": "color"
            },
            {
                "id": "lvl14_cannon",
                "x": 0.3,
                "y": 0.58,
                "r": 0.08,
                "label": "Gun deck bronze cannon angle",
                "type": "shape"
            }
        ]
    },
    {
        "id": 15,
        "name": "Steampunk Clockwork Lab",
        "theme": "steampunk",
        "archetype": 15,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 108,
        "description": "Explore the captivating details of Steampunk Clockwork Lab. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl15_steam_whistle",
                "x": 0.15,
                "y": 0.18,
                "r": 0.075,
                "label": "High pressure copper whistle",
                "type": "missing"
            },
            {
                "id": "lvl15_gear_center",
                "x": 0.48,
                "y": 0.32,
                "r": 0.085,
                "label": "Large master gear spoke count",
                "type": "shape"
            },
            {
                "id": "lvl15_gauge_needle",
                "x": 0.22,
                "y": 0.36,
                "r": 0.075,
                "label": "Steam pressure dial indicator",
                "type": "shape"
            },
            {
                "id": "lvl15_copper_valve",
                "x": 0.78,
                "y": 0.42,
                "r": 0.075,
                "label": "Brass pipe shutoff wheel color",
                "type": "color"
            },
            {
                "id": "lvl15_automaton_eye",
                "x": 0.63,
                "y": 0.593,
                "r": 0.075,
                "label": "Clockwork owl monocle gem",
                "type": "color"
            }
        ]
    },
    {
        "id": 16,
        "name": "Cyberpunk Neon Metropolis",
        "theme": "cyberpunk",
        "archetype": 16,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 108,
        "description": "Explore the captivating details of Cyberpunk Neon Metropolis. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl16_rooftop_antenna",
                "x": 0.6,
                "y": 0.1,
                "r": 0.07,
                "label": "Radio spire blinking beacon",
                "type": "missing"
            },
            {
                "id": "lvl16_neon_kanji",
                "x": 0.22,
                "y": 0.16,
                "r": 0.075,
                "label": "Skyscraper neon sign symbol",
                "type": "shape"
            },
            {
                "id": "lvl16_flyer_lights",
                "x": 0.69,
                "y": 0.18,
                "r": 0.075,
                "label": "Hovercar rear thruster flame",
                "type": "color"
            },
            {
                "id": "lvl16_drone_lens",
                "x": 0.46,
                "y": 0.22,
                "r": 0.07,
                "label": "Surveillance drone sensor ray",
                "type": "color"
            },
            {
                "id": "lvl16_holo_koi",
                "x": 0.84,
                "y": 0.38,
                "r": 0.075,
                "label": "Holographic giant koi fin glow",
                "type": "shape"
            }
        ]
    },
    {
        "id": 17,
        "name": "Pharaoh's Golden Tomb",
        "theme": "egypt",
        "archetype": 17,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 107,
        "description": "Explore the captivating details of Pharaoh's Golden Tomb. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl17_hieroglyph_bird",
                "x": 0.18,
                "y": 0.16,
                "r": 0.07,
                "label": "Wall carving sacred falcon emblem",
                "type": "shape"
            },
            {
                "id": "lvl17_scarab_gem",
                "x": 0.5,
                "y": 0.22,
                "r": 0.075,
                "label": "Winged scarab lapis lazuli jewel",
                "type": "color"
            },
            {
                "id": "lvl17_torch_bracket",
                "x": 0.82,
                "y": 0.26,
                "r": 0.07,
                "label": "Bronze wall torch flame hue",
                "type": "color"
            },
            {
                "id": "lvl17_column_lotus",
                "x": 0.36,
                "y": 0.36,
                "r": 0.07,
                "label": "Temple column lotus capital petal",
                "type": "missing"
            },
            {
                "id": "lvl17_sarcophagus_cobra",
                "x": 0.5,
                "y": 0.45,
                "r": 0.075,
                "label": "Golden pharaoh mask uraeus snake",
                "type": "shape"
            }
        ]
    },
    {
        "id": 18,
        "name": "Midnight Carnival Lights",
        "theme": "carnival",
        "archetype": 18,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 106,
        "description": "Explore the captivating details of Midnight Carnival Lights. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl18_firework_spark",
                "x": 0.52,
                "y": 0.1,
                "r": 0.07,
                "label": "Sky burst firework star trail",
                "type": "missing"
            },
            {
                "id": "lvl18_ferris_spoke",
                "x": 0.32,
                "y": 0.18,
                "r": 0.075,
                "label": "Ferris wheel gondola light star",
                "type": "color"
            },
            {
                "id": "lvl18_tent_pennant",
                "x": 0.72,
                "y": 0.24,
                "r": 0.075,
                "label": "Circus big top peak pennant",
                "type": "color"
            },
            {
                "id": "lvl18_balloon_ribbon",
                "x": 0.86,
                "y": 0.44,
                "r": 0.07,
                "label": "Cluster balloon star emblem",
                "type": "shape"
            },
            {
                "id": "lvl18_carousel_horse",
                "x": 0.52,
                "y": 0.6,
                "r": 0.075,
                "label": "Carousel steed saddle jewel",
                "type": "color"
            }
        ]
    },
    {
        "id": 19,
        "name": "Alpine Winter Chalet",
        "theme": "chalet",
        "archetype": 19,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 105,
        "description": "Explore the captivating details of Alpine Winter Chalet. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl19_chimney_smoke",
                "x": 0.42,
                "y": 0.18,
                "r": 0.07,
                "label": "Chimney smoke drift direction",
                "type": "shape"
            },
            {
                "id": "lvl19_weathercock",
                "x": 0.34,
                "y": 0.22,
                "r": 0.07,
                "label": "Roof ridge brass rooster",
                "type": "missing"
            },
            {
                "id": "lvl19_pine_snowcap",
                "x": 0.86,
                "y": 0.36,
                "r": 0.07,
                "label": "Fir tree heavy snow blanket",
                "type": "shape"
            },
            {
                "id": "lvl19_stag_antlers",
                "x": 0.14,
                "y": 0.387,
                "r": 0.07,
                "label": "Distant stag antler branch tips",
                "type": "shape"
            },
            {
                "id": "lvl19_shutter_carving",
                "x": 0.54,
                "y": 0.44,
                "r": 0.07,
                "label": "Wood shutter carved heart motif",
                "type": "shape"
            }
        ]
    },
    {
        "id": 20,
        "name": "Twilight Coral Fantasy",
        "theme": "deepcoral",
        "archetype": 20,
        "variant": 0,
        "difficulty": "Easy",
        "timeLimit": 104,
        "description": "Explore the captivating details of Twilight Coral Fantasy. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl20_manta_markings",
                "x": 0.36,
                "y": 0.22,
                "r": 0.075,
                "label": "Giant manta wing luminous runes",
                "type": "shape"
            },
            {
                "id": "lvl20_nautilus_shell",
                "x": 0.74,
                "y": 0.32,
                "r": 0.07,
                "label": "Nautilus spiral chamber lines",
                "type": "color"
            },
            {
                "id": "lvl20_angel_fin",
                "x": 0.605,
                "y": 0.433,
                "r": 0.075,
                "label": "Emperor angelfish dorsal streamer",
                "type": "shape"
            },
            {
                "id": "lvl20_submerged_idol",
                "x": 0.16,
                "y": 0.46,
                "r": 0.07,
                "label": "Sunken temple pillar emerald eye",
                "type": "missing"
            },
            {
                "id": "lvl20_seahorse_crown",
                "x": 0.44,
                "y": 0.573,
                "r": 0.07,
                "label": "Pygmy seahorse spiked coronet",
                "type": "shape"
            }
        ]
    },
    {
        "id": 21,
        "name": "Sunlit Artist Loft",
        "theme": "interior",
        "archetype": 1,
        "variant": 1,
        "difficulty": "Easy",
        "timeLimit": 104,
        "description": "Explore the captivating details of Sunlit Artist Loft. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl21_clock",
                "x": 0.5,
                "y": 0.133,
                "r": 0.085,
                "label": "Wall clock hands changed",
                "type": "shape"
            },
            {
                "id": "lvl21_lamp",
                "x": 0.12,
                "y": 0.383,
                "r": 0.085,
                "label": "Floor lamp shade color",
                "type": "color"
            },
            {
                "id": "lvl21_painting",
                "x": 0.819,
                "y": 0.217,
                "r": 0.085,
                "label": "Painting artwork replaced",
                "type": "shape"
            },
            {
                "id": "lvl21_cat",
                "x": 0.244,
                "y": 0.75,
                "r": 0.085,
                "label": "Sleeping cat's bow tie",
                "type": "color"
            },
            {
                "id": "lvl21_cushion",
                "x": 0.645,
                "y": 0.652,
                "r": 0.085,
                "label": "Sofa cushion pattern",
                "type": "shape"
            }
        ]
    },
    {
        "id": 22,
        "name": "Golden Harvest Pasture",
        "theme": "farm",
        "archetype": 2,
        "variant": 1,
        "difficulty": "Easy",
        "timeLimit": 103,
        "description": "Explore the captivating details of Golden Harvest Pasture. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl22_weathercock",
                "x": 0.281,
                "y": 0.1,
                "r": 0.085,
                "label": "Barn rooftop weather vane direction",
                "type": "shape"
            },
            {
                "id": "lvl22_windmill",
                "x": 0.85,
                "y": 0.2,
                "r": 0.085,
                "label": "Windmill blade accent color",
                "type": "color"
            },
            {
                "id": "lvl22_cow",
                "x": 0.585,
                "y": 0.693,
                "r": 0.085,
                "label": "Spotted cow heart patch",
                "type": "shape"
            },
            {
                "id": "lvl22_apple",
                "x": 0.14,
                "y": 0.54,
                "r": 0.08,
                "label": "Golden apple in tree",
                "type": "color"
            },
            {
                "id": "lvl22_sunflower",
                "x": 0.785,
                "y": 0.8,
                "r": 0.085,
                "label": "Extra blooming sunflower",
                "type": "missing"
            }
        ]
    },
    {
        "id": 23,
        "name": "Emerald Lagoon Coast",
        "theme": "beach",
        "archetype": 3,
        "variant": 1,
        "difficulty": "Easy",
        "timeLimit": 102,
        "description": "Explore the captivating details of Emerald Lagoon Coast. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl23_cloud",
                "x": 0.44,
                "y": 0.14,
                "r": 0.085,
                "label": "Heart-shaped sky cloud",
                "type": "shape"
            },
            {
                "id": "lvl23_boat_sail",
                "x": 0.822,
                "y": 0.327,
                "r": 0.085,
                "label": "Sailboat stripe color",
                "type": "color"
            },
            {
                "id": "lvl23_coconut",
                "x": 0.18,
                "y": 0.373,
                "r": 0.08,
                "label": "Coconut cluster count",
                "type": "missing"
            },
            {
                "id": "lvl23_crab",
                "x": 0.26,
                "y": 0.82,
                "r": 0.085,
                "label": "Sand crab sunglasses",
                "type": "extra"
            },
            {
                "id": "lvl23_starfish",
                "x": 0.68,
                "y": 0.86,
                "r": 0.08,
                "label": "Starfish color hue",
                "type": "color"
            }
        ]
    },
    {
        "id": 24,
        "name": "Artisan Croissant Boulangerie",
        "theme": "bakery",
        "archetype": 4,
        "variant": 1,
        "difficulty": "Easy",
        "timeLimit": 101,
        "description": "Explore the captivating details of Artisan Croissant Boulangerie. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl24_chef_hat",
                "x": 0.48,
                "y": 0.267,
                "r": 0.085,
                "label": "Baker's hat blue ribbon",
                "type": "extra"
            },
            {
                "id": "lvl24_pretzel",
                "x": 0.74,
                "y": 0.48,
                "r": 0.085,
                "label": "Chocolate glaze pretzel",
                "type": "color"
            },
            {
                "id": "lvl24_cupcake_cherry",
                "x": 0.22,
                "y": 0.56,
                "r": 0.085,
                "label": "Cupcake strawberry topping",
                "type": "shape"
            },
            {
                "id": "lvl24_bread_loaf",
                "x": 0.38,
                "y": 0.72,
                "r": 0.085,
                "label": "Baguette crust cuts",
                "type": "shape"
            },
            {
                "id": "lvl24_coffee_mug",
                "x": 0.84,
                "y": 0.733,
                "r": 0.08,
                "label": "Mug heart steam",
                "type": "missing"
            }
        ]
    },
    {
        "id": 25,
        "name": "Sunny Canine Meadow",
        "theme": "park",
        "archetype": 5,
        "variant": 1,
        "difficulty": "Easy",
        "timeLimit": 100,
        "description": "Explore the captivating details of Sunny Canine Meadow. Spot all 5 differences!",
        "differences": [
            {
                "id": "lvl25_kite",
                "x": 0.82,
                "y": 0.16,
                "r": 0.085,
                "label": "Flying kite tail bows",
                "type": "extra"
            },
            {
                "id": "lvl25_butterfly",
                "x": 0.24,
                "y": 0.38,
                "r": 0.08,
                "label": "Monarch butterfly color",
                "type": "color"
            },
            {
                "id": "lvl25_collar",
                "x": 0.46,
                "y": 0.643,
                "r": 0.085,
                "label": "Puppy collar tag shape",
                "type": "shape"
            },
            {
                "id": "lvl25_ball",
                "x": 0.78,
                "y": 0.76,
                "r": 0.085,
                "label": "Tennis ball color",
                "type": "color"
            },
            {
                "id": "lvl25_bone",
                "x": 0.15,
                "y": 0.84,
                "r": 0.08,
                "label": "Chew bone beside doghouse",
                "type": "missing"
            }
        ]
    },
    {
        "id": 26,
        "name": "Moonlit Sprite Grove",
        "theme": "fantasy",
        "archetype": 6,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 100,
        "description": "Explore the captivating details of Moonlit Sprite Grove. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl26_owl",
                "x": 0.78,
                "y": 0.26,
                "r": 0.08,
                "label": "Hollow tree owl eyes",
                "type": "shape"
            },
            {
                "id": "lvl26_lantern",
                "x": 0.15,
                "y": 0.362,
                "r": 0.08,
                "label": "Hanging lantern crystal flame",
                "type": "color"
            },
            {
                "id": "lvl26_fairy_wings",
                "x": 0.48,
                "y": 0.44,
                "r": 0.085,
                "label": "Fairy wing glow color",
                "type": "color"
            },
            {
                "id": "lvl26_mushroom",
                "x": 0.24,
                "y": 0.727,
                "r": 0.085,
                "label": "Giant mushroom glowing spots",
                "type": "color"
            },
            {
                "id": "lvl26_flower",
                "x": 0.86,
                "y": 0.74,
                "r": 0.08,
                "label": "Midnight blossom petal shape",
                "type": "shape"
            },
            {
                "id": "lvl26_crystal_cluster",
                "x": 0.38,
                "y": 0.787,
                "r": 0.08,
                "label": "Crystal spire tip",
                "type": "missing"
            }
        ]
    },
    {
        "id": 27,
        "name": "Artisanal Espresso Lounge",
        "theme": "cafe",
        "archetype": 7,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 99,
        "description": "Explore the captivating details of Artisanal Espresso Lounge. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl27_hanging_plant",
                "x": 0.6,
                "y": 0.16,
                "r": 0.08,
                "label": "Hanging pothos leaves",
                "type": "missing"
            },
            {
                "id": "lvl27_wall_clock",
                "x": 0.18,
                "y": 0.18,
                "r": 0.08,
                "label": "Vintage clock time",
                "type": "shape"
            },
            {
                "id": "lvl27_menu_chalk",
                "x": 0.82,
                "y": 0.28,
                "r": 0.085,
                "label": "Chalkboard specials icon",
                "type": "shape"
            },
            {
                "id": "lvl27_barista_apron",
                "x": 0.3,
                "y": 0.41,
                "r": 0.085,
                "label": "Barista apron pocket logo",
                "type": "shape"
            },
            {
                "id": "lvl27_steam",
                "x": 0.44,
                "y": 0.523,
                "r": 0.08,
                "label": "Espresso cup steam curls",
                "type": "shape"
            },
            {
                "id": "lvl27_pastry_bell",
                "x": 0.72,
                "y": 0.6,
                "r": 0.085,
                "label": "Croissant in glass dome",
                "type": "color"
            },
            {
                "id": "lvl27_takeaway_cup",
                "x": 0.88,
                "y": 0.82,
                "r": 0.08,
                "label": "Takeaway cup sleeve band",
                "type": "color"
            }
        ]
    },
    {
        "id": 28,
        "name": "Sunken Coral Wonderland",
        "theme": "ocean",
        "archetype": 8,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 99,
        "description": "Explore the captivating details of Sunken Coral Wonderland. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl28_submarine",
                "x": 0.76,
                "y": 0.22,
                "r": 0.085,
                "label": "Mini-sub spotlight beam",
                "type": "color"
            },
            {
                "id": "lvl28_turtle_shell",
                "x": 0.5,
                "y": 0.36,
                "r": 0.085,
                "label": "Sea turtle carapace pattern",
                "type": "shape"
            },
            {
                "id": "lvl28_clownfish",
                "x": 0.22,
                "y": 0.46,
                "r": 0.08,
                "label": "Anemone fish side stripe",
                "type": "shape"
            },
            {
                "id": "lvl28_jellyfish",
                "x": 0.82,
                "y": 0.56,
                "r": 0.08,
                "label": "Jellyfish neon tint",
                "type": "color"
            },
            {
                "id": "lvl28_anchor_fluke",
                "x": 0.14,
                "y": 0.71,
                "r": 0.08,
                "label": "Rusty anchor chain link",
                "type": "missing"
            },
            {
                "id": "lvl28_chest_gem",
                "x": 0.32,
                "y": 0.833,
                "r": 0.08,
                "label": "Sunken treasure chest ruby",
                "type": "color"
            }
        ]
    },
    {
        "id": 29,
        "name": "Lunar Horizon Outpost",
        "theme": "space",
        "archetype": 9,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 98,
        "description": "Explore the captivating details of Lunar Horizon Outpost. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl29_constellation",
                "x": 0.18,
                "y": 0.18,
                "r": 0.075,
                "label": "Star cluster bright star",
                "type": "missing"
            },
            {
                "id": "lvl29_planet_rings",
                "x": 0.82,
                "y": 0.2,
                "r": 0.085,
                "label": "Ringed gas giant tilt",
                "type": "shape"
            },
            {
                "id": "lvl29_antenna",
                "x": 0.48,
                "y": 0.507,
                "r": 0.085,
                "label": "Lunar base radar dish angle",
                "type": "shape"
            },
            {
                "id": "lvl29_astronaut_visor",
                "x": 0.26,
                "y": 0.513,
                "r": 0.08,
                "label": "Astronaut gold visor tint",
                "type": "color"
            },
            {
                "id": "lvl29_flag_symbol",
                "x": 0.702,
                "y": 0.607,
                "r": 0.08,
                "label": "Mission flag emblem",
                "type": "shape"
            },
            {
                "id": "lvl29_alien_rover",
                "x": 0.85,
                "y": 0.76,
                "r": 0.08,
                "label": "Lunar rover solar panel",
                "type": "color"
            },
            {
                "id": "lvl29_crater_crystal",
                "x": 0.38,
                "y": 0.84,
                "r": 0.08,
                "label": "Glowing space crystal",
                "type": "color"
            }
        ]
    },
    {
        "id": 30,
        "name": "Maple Leaf Boulevard",
        "theme": "autumn",
        "archetype": 10,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 97,
        "description": "Explore the captivating details of Maple Leaf Boulevard. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl30_balloon",
                "x": 0.78,
                "y": 0.16,
                "r": 0.085,
                "label": "Hot air balloon basket pattern",
                "type": "color"
            },
            {
                "id": "lvl30_lamp_post",
                "x": 0.12,
                "y": 0.36,
                "r": 0.08,
                "label": "Gas streetlamp glowing orb",
                "type": "missing"
            },
            {
                "id": "lvl30_bicycle_basket",
                "x": 0.28,
                "y": 0.52,
                "r": 0.08,
                "label": "Vintage bike basket flowers",
                "type": "color"
            },
            {
                "id": "lvl30_fountain",
                "x": 0.7,
                "y": 0.54,
                "r": 0.085,
                "label": "Stone fountain water tiers",
                "type": "shape"
            },
            {
                "id": "lvl30_bench_cushion",
                "x": 0.44,
                "y": 0.64,
                "r": 0.08,
                "label": "Park bench plaid scarf",
                "type": "color"
            },
            {
                "id": "lvl30_squirrel",
                "x": 0.2,
                "y": 0.78,
                "r": 0.08,
                "label": "Squirrel holding golden acorn",
                "type": "missing"
            }
        ]
    },
    {
        "id": 31,
        "name": "High Tower Stronghold",
        "theme": "medieval",
        "archetype": 11,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 97,
        "description": "Explore the captivating details of High Tower Stronghold. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl31_weather_flag",
                "x": 0.66,
                "y": 0.12,
                "r": 0.075,
                "label": "High tower pennant color",
                "type": "color"
            },
            {
                "id": "lvl31_banner",
                "x": 0.32,
                "y": 0.21,
                "r": 0.08,
                "label": "Royal crest heraldic lion banner",
                "type": "shape"
            },
            {
                "id": "lvl31_gargoyle",
                "x": 0.86,
                "y": 0.28,
                "r": 0.08,
                "label": "Stone gargoyle wings",
                "type": "shape"
            },
            {
                "id": "lvl31_torch",
                "x": 0.2,
                "y": 0.46,
                "r": 0.08,
                "label": "Wall sconce torch flame",
                "type": "color"
            },
            {
                "id": "lvl31_spear_tip",
                "x": 0.64,
                "y": 0.48,
                "r": 0.075,
                "label": "Guard halberd tassel",
                "type": "missing"
            },
            {
                "id": "lvl31_portcullis",
                "x": 0.5,
                "y": 0.6,
                "r": 0.085,
                "label": "Iron gate spike spikes",
                "type": "shape"
            },
            {
                "id": "lvl31_knight_shield",
                "x": 0.76,
                "y": 0.64,
                "r": 0.08,
                "label": "Guard shield cross emblem",
                "type": "color"
            }
        ]
    },
    {
        "id": 32,
        "name": "Sakura Blossom Temple",
        "theme": "japan",
        "archetype": 12,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 96,
        "description": "Explore the captivating details of Sakura Blossom Temple. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl32_pagoda_finial",
                "x": 0.238,
                "y": 0.14,
                "r": 0.075,
                "label": "Pagoda bronze roof spire",
                "type": "shape"
            },
            {
                "id": "lvl32_cherry_branch",
                "x": 0.54,
                "y": 0.2,
                "r": 0.08,
                "label": "Sakura blossom density",
                "type": "shape"
            },
            {
                "id": "lvl32_lantern_window",
                "x": 0.72,
                "y": 0.44,
                "r": 0.075,
                "label": "Toro stone lantern lattice",
                "type": "shape"
            },
            {
                "id": "lvl32_bridge_post",
                "x": 0.38,
                "y": 0.54,
                "r": 0.075,
                "label": "Red arched bridge post cap",
                "type": "color"
            },
            {
                "id": "lvl32_bamboo_spout",
                "x": 0.14,
                "y": 0.64,
                "r": 0.075,
                "label": "Bamboo water rocker (shishi-odoshi)",
                "type": "shape"
            },
            {
                "id": "lvl32_bonsai",
                "x": 0.82,
                "y": 0.68,
                "r": 0.08,
                "label": "Bonsai ceramic pot glazing",
                "type": "color"
            }
        ]
    },
    {
        "id": 33,
        "name": "Celestial Alchemist Sanctum",
        "theme": "alchemy",
        "archetype": 13,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 96,
        "description": "Explore the captivating details of Celestial Alchemist Sanctum. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl33_telescope",
                "x": 0.68,
                "y": 0.18,
                "r": 0.075,
                "label": "Brass astrolabe dial position",
                "type": "shape"
            },
            {
                "id": "lvl33_raven",
                "x": 0.84,
                "y": 0.2,
                "r": 0.075,
                "label": "Familar raven beak key",
                "type": "missing"
            },
            {
                "id": "lvl33_candle",
                "x": 0.16,
                "y": 0.34,
                "r": 0.075,
                "label": "Floating candle wick sparks",
                "type": "color"
            },
            {
                "id": "lvl33_hourglass",
                "x": 0.36,
                "y": 0.42,
                "r": 0.075,
                "label": "Luminous hourglass sand level",
                "type": "shape"
            },
            {
                "id": "lvl33_orb",
                "x": 0.5,
                "y": 0.46,
                "r": 0.08,
                "label": "Crystal ball plasma aura",
                "type": "color"
            },
            {
                "id": "lvl33_beaker",
                "x": 0.78,
                "y": 0.52,
                "r": 0.075,
                "label": "Bubbling retort flask liquid",
                "type": "color"
            },
            {
                "id": "lvl33_spellbook",
                "x": 0.24,
                "y": 0.58,
                "r": 0.08,
                "label": "Ancient grimoire rune symbol",
                "type": "shape"
            }
        ]
    },
    {
        "id": 34,
        "name": "Smuggler's Hidden Anchorage",
        "theme": "pirate",
        "archetype": 14,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 95,
        "description": "Explore the captivating details of Smuggler's Hidden Anchorage. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl34_jolly_roger",
                "x": 0.478,
                "y": 0.173,
                "r": 0.08,
                "label": "Black mast pirate flag skull eyepatch",
                "type": "shape"
            },
            {
                "id": "lvl34_rope_pulley",
                "x": 0.64,
                "y": 0.3,
                "r": 0.075,
                "label": "Rigging rope wooden pulley",
                "type": "missing"
            },
            {
                "id": "lvl34_figurehead",
                "x": 0.8,
                "y": 0.42,
                "r": 0.08,
                "label": "Mermaid ship figurehead crown",
                "type": "color"
            },
            {
                "id": "lvl34_parrot",
                "x": 0.18,
                "y": 0.44,
                "r": 0.075,
                "label": "Parrot tail feather colors",
                "type": "color"
            },
            {
                "id": "lvl34_cannon",
                "x": 0.3,
                "y": 0.58,
                "r": 0.08,
                "label": "Gun deck bronze cannon angle",
                "type": "shape"
            },
            {
                "id": "lvl34_treasure_map",
                "x": 0.52,
                "y": 0.72,
                "r": 0.08,
                "label": "Map scroll red X mark",
                "type": "shape"
            }
        ]
    },
    {
        "id": 35,
        "name": "Brass Foundry Workshop",
        "theme": "steampunk",
        "archetype": 15,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 94,
        "description": "Explore the captivating details of Brass Foundry Workshop. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl35_steam_whistle",
                "x": 0.15,
                "y": 0.18,
                "r": 0.075,
                "label": "High pressure copper whistle",
                "type": "missing"
            },
            {
                "id": "lvl35_gear_center",
                "x": 0.48,
                "y": 0.32,
                "r": 0.085,
                "label": "Large master gear spoke count",
                "type": "shape"
            },
            {
                "id": "lvl35_gauge_needle",
                "x": 0.22,
                "y": 0.36,
                "r": 0.075,
                "label": "Steam pressure dial indicator",
                "type": "shape"
            },
            {
                "id": "lvl35_copper_valve",
                "x": 0.78,
                "y": 0.42,
                "r": 0.075,
                "label": "Brass pipe shutoff wheel color",
                "type": "color"
            },
            {
                "id": "lvl35_automaton_eye",
                "x": 0.63,
                "y": 0.593,
                "r": 0.075,
                "label": "Clockwork owl monocle gem",
                "type": "color"
            },
            {
                "id": "lvl35_vacuum_tube",
                "x": 0.34,
                "y": 0.64,
                "r": 0.075,
                "label": "Glowing thermionic tube filament",
                "type": "color"
            },
            {
                "id": "lvl35_wrench",
                "x": 0.86,
                "y": 0.8,
                "r": 0.075,
                "label": "Adjustable spanner wrench size",
                "type": "shape"
            }
        ]
    },
    {
        "id": 36,
        "name": "Neo-Shinjuku Rain Alley",
        "theme": "cyberpunk",
        "archetype": 16,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 94,
        "description": "Explore the captivating details of Neo-Shinjuku Rain Alley. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl36_rooftop_antenna",
                "x": 0.6,
                "y": 0.1,
                "r": 0.07,
                "label": "Radio spire blinking beacon",
                "type": "missing"
            },
            {
                "id": "lvl36_neon_kanji",
                "x": 0.22,
                "y": 0.16,
                "r": 0.075,
                "label": "Skyscraper neon sign symbol",
                "type": "shape"
            },
            {
                "id": "lvl36_flyer_lights",
                "x": 0.69,
                "y": 0.18,
                "r": 0.075,
                "label": "Hovercar rear thruster flame",
                "type": "color"
            },
            {
                "id": "lvl36_drone_lens",
                "x": 0.46,
                "y": 0.22,
                "r": 0.07,
                "label": "Surveillance drone sensor ray",
                "type": "color"
            },
            {
                "id": "lvl36_holo_koi",
                "x": 0.84,
                "y": 0.38,
                "r": 0.075,
                "label": "Holographic giant koi fin glow",
                "type": "shape"
            },
            {
                "id": "lvl36_cyborg_visor",
                "x": 0.3,
                "y": 0.56,
                "r": 0.07,
                "label": "Street samurai cyber-implant tint",
                "type": "color"
            }
        ]
    },
    {
        "id": 37,
        "name": "Anubis Sacred Sanctuary",
        "theme": "egypt",
        "archetype": 17,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 93,
        "description": "Explore the captivating details of Anubis Sacred Sanctuary. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl37_hieroglyph_bird",
                "x": 0.18,
                "y": 0.16,
                "r": 0.07,
                "label": "Wall carving sacred falcon emblem",
                "type": "shape"
            },
            {
                "id": "lvl37_scarab_gem",
                "x": 0.5,
                "y": 0.22,
                "r": 0.075,
                "label": "Winged scarab lapis lazuli jewel",
                "type": "color"
            },
            {
                "id": "lvl37_torch_bracket",
                "x": 0.82,
                "y": 0.26,
                "r": 0.07,
                "label": "Bronze wall torch flame hue",
                "type": "color"
            },
            {
                "id": "lvl37_column_lotus",
                "x": 0.36,
                "y": 0.36,
                "r": 0.07,
                "label": "Temple column lotus capital petal",
                "type": "missing"
            },
            {
                "id": "lvl37_sarcophagus_cobra",
                "x": 0.5,
                "y": 0.45,
                "r": 0.075,
                "label": "Golden pharaoh mask uraeus snake",
                "type": "shape"
            },
            {
                "id": "lvl37_ankh_inlay",
                "x": 0.74,
                "y": 0.62,
                "r": 0.07,
                "label": "Carved ankh cross gemstone",
                "type": "color"
            },
            {
                "id": "lvl37_canopic_jar",
                "x": 0.26,
                "y": 0.647,
                "r": 0.075,
                "label": "Alabaster canopic jar lid carving",
                "type": "shape"
            }
        ]
    },
    {
        "id": 38,
        "name": "Grand Wonder Ferris Pier",
        "theme": "carnival",
        "archetype": 18,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 93,
        "description": "Explore the captivating details of Grand Wonder Ferris Pier. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl38_firework_spark",
                "x": 0.52,
                "y": 0.1,
                "r": 0.07,
                "label": "Sky burst firework star trail",
                "type": "missing"
            },
            {
                "id": "lvl38_ferris_spoke",
                "x": 0.32,
                "y": 0.18,
                "r": 0.075,
                "label": "Ferris wheel gondola light star",
                "type": "color"
            },
            {
                "id": "lvl38_tent_pennant",
                "x": 0.72,
                "y": 0.24,
                "r": 0.075,
                "label": "Circus big top peak pennant",
                "type": "color"
            },
            {
                "id": "lvl38_balloon_ribbon",
                "x": 0.86,
                "y": 0.44,
                "r": 0.07,
                "label": "Cluster balloon star emblem",
                "type": "shape"
            },
            {
                "id": "lvl38_carousel_horse",
                "x": 0.52,
                "y": 0.6,
                "r": 0.075,
                "label": "Carousel steed saddle jewel",
                "type": "color"
            },
            {
                "id": "lvl38_cotton_candy",
                "x": 0.16,
                "y": 0.603,
                "r": 0.07,
                "label": "Cotton candy cart sugar cloud",
                "type": "color"
            }
        ]
    },
    {
        "id": 39,
        "name": "Snowbound Fir Lodge",
        "theme": "chalet",
        "archetype": 19,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 92,
        "description": "Explore the captivating details of Snowbound Fir Lodge. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl39_chimney_smoke",
                "x": 0.42,
                "y": 0.18,
                "r": 0.07,
                "label": "Chimney smoke drift direction",
                "type": "shape"
            },
            {
                "id": "lvl39_weathercock",
                "x": 0.34,
                "y": 0.22,
                "r": 0.07,
                "label": "Roof ridge brass rooster",
                "type": "missing"
            },
            {
                "id": "lvl39_pine_snowcap",
                "x": 0.86,
                "y": 0.36,
                "r": 0.07,
                "label": "Fir tree heavy snow blanket",
                "type": "shape"
            },
            {
                "id": "lvl39_stag_antlers",
                "x": 0.14,
                "y": 0.387,
                "r": 0.07,
                "label": "Distant stag antler branch tips",
                "type": "shape"
            },
            {
                "id": "lvl39_shutter_carving",
                "x": 0.54,
                "y": 0.44,
                "r": 0.07,
                "label": "Wood shutter carved heart motif",
                "type": "shape"
            },
            {
                "id": "lvl39_window_candle",
                "x": 0.4,
                "y": 0.48,
                "r": 0.07,
                "label": "Attic window warm candle flame",
                "type": "missing"
            },
            {
                "id": "lvl39_snowman_scarf",
                "x": 0.78,
                "y": 0.693,
                "r": 0.075,
                "label": "Snowman knitted scarf color",
                "type": "color"
            }
        ]
    },
    {
        "id": 40,
        "name": "Abyssal Pearl Palace",
        "theme": "deepcoral",
        "archetype": 20,
        "variant": 1,
        "difficulty": "Medium",
        "timeLimit": 91,
        "description": "Explore the captivating details of Abyssal Pearl Palace. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl40_manta_markings",
                "x": 0.36,
                "y": 0.22,
                "r": 0.075,
                "label": "Giant manta wing luminous runes",
                "type": "shape"
            },
            {
                "id": "lvl40_nautilus_shell",
                "x": 0.74,
                "y": 0.32,
                "r": 0.07,
                "label": "Nautilus spiral chamber lines",
                "type": "color"
            },
            {
                "id": "lvl40_angel_fin",
                "x": 0.605,
                "y": 0.433,
                "r": 0.075,
                "label": "Emperor angelfish dorsal streamer",
                "type": "shape"
            },
            {
                "id": "lvl40_submerged_idol",
                "x": 0.16,
                "y": 0.46,
                "r": 0.07,
                "label": "Sunken temple pillar emerald eye",
                "type": "missing"
            },
            {
                "id": "lvl40_seahorse_crown",
                "x": 0.44,
                "y": 0.573,
                "r": 0.07,
                "label": "Pygmy seahorse spiked coronet",
                "type": "shape"
            },
            {
                "id": "lvl40_diver_goggles",
                "x": 0.84,
                "y": 0.68,
                "r": 0.07,
                "label": "Deep diver helmet glow color",
                "type": "color"
            }
        ]
    },
    {
        "id": 41,
        "name": "Vintage Victorian Study",
        "theme": "interior",
        "archetype": 1,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 91,
        "description": "Explore the captivating details of Vintage Victorian Study. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl41_clock",
                "x": 0.5,
                "y": 0.133,
                "r": 0.085,
                "label": "Wall clock hands changed",
                "type": "shape"
            },
            {
                "id": "lvl41_lamp",
                "x": 0.12,
                "y": 0.383,
                "r": 0.085,
                "label": "Floor lamp shade color",
                "type": "color"
            },
            {
                "id": "lvl41_painting",
                "x": 0.819,
                "y": 0.217,
                "r": 0.085,
                "label": "Painting artwork replaced",
                "type": "shape"
            },
            {
                "id": "lvl41_cat",
                "x": 0.244,
                "y": 0.75,
                "r": 0.085,
                "label": "Sleeping cat's bow tie",
                "type": "color"
            },
            {
                "id": "lvl41_cushion",
                "x": 0.645,
                "y": 0.652,
                "r": 0.085,
                "label": "Sofa cushion pattern",
                "type": "shape"
            },
            {
                "id": "lvl41_teapot",
                "x": 0.481,
                "y": 0.716,
                "r": 0.075,
                "label": "Coffee table teapot color",
                "type": "color"
            },
            {
                "id": "lvl41_rug_border",
                "x": 0.5,
                "y": 0.85,
                "r": 0.08,
                "label": "Area rug fringe pattern",
                "type": "shape"
            }
        ]
    },
    {
        "id": 42,
        "name": "Morning Windmill Ranch",
        "theme": "farm",
        "archetype": 2,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 90,
        "description": "Explore the captivating details of Morning Windmill Ranch. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl42_weathercock",
                "x": 0.281,
                "y": 0.1,
                "r": 0.085,
                "label": "Barn rooftop weather vane direction",
                "type": "shape"
            },
            {
                "id": "lvl42_windmill",
                "x": 0.85,
                "y": 0.2,
                "r": 0.085,
                "label": "Windmill blade accent color",
                "type": "color"
            },
            {
                "id": "lvl42_cow",
                "x": 0.585,
                "y": 0.693,
                "r": 0.085,
                "label": "Spotted cow heart patch",
                "type": "shape"
            },
            {
                "id": "lvl42_apple",
                "x": 0.14,
                "y": 0.54,
                "r": 0.08,
                "label": "Golden apple in tree",
                "type": "color"
            },
            {
                "id": "lvl42_sunflower",
                "x": 0.785,
                "y": 0.8,
                "r": 0.085,
                "label": "Extra blooming sunflower",
                "type": "missing"
            },
            {
                "id": "lvl42_fence",
                "x": 0.5,
                "y": 0.59,
                "r": 0.075,
                "label": "Wooden fence rail notch",
                "type": "shape"
            }
        ]
    },
    {
        "id": 43,
        "name": "Sunset Paradise Bay",
        "theme": "beach",
        "archetype": 3,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 90,
        "description": "Explore the captivating details of Sunset Paradise Bay. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl43_cloud",
                "x": 0.44,
                "y": 0.14,
                "r": 0.085,
                "label": "Heart-shaped sky cloud",
                "type": "shape"
            },
            {
                "id": "lvl43_boat_sail",
                "x": 0.822,
                "y": 0.327,
                "r": 0.085,
                "label": "Sailboat stripe color",
                "type": "color"
            },
            {
                "id": "lvl43_coconut",
                "x": 0.18,
                "y": 0.373,
                "r": 0.08,
                "label": "Coconut cluster count",
                "type": "missing"
            },
            {
                "id": "lvl43_crab",
                "x": 0.26,
                "y": 0.82,
                "r": 0.085,
                "label": "Sand crab sunglasses",
                "type": "extra"
            },
            {
                "id": "lvl43_starfish",
                "x": 0.68,
                "y": 0.86,
                "r": 0.08,
                "label": "Starfish color hue",
                "type": "color"
            },
            {
                "id": "lvl43_umbrella",
                "x": 0.85,
                "y": 0.7,
                "r": 0.08,
                "label": "Beach umbrella stripe tone",
                "type": "color"
            },
            {
                "id": "lvl43_island",
                "x": 0.675,
                "y": 0.4,
                "r": 0.075,
                "label": "Distant island palm silhouette",
                "type": "missing"
            }
        ]
    },
    {
        "id": 44,
        "name": "Cupcake Wonderland",
        "theme": "bakery",
        "archetype": 4,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 89,
        "description": "Explore the captivating details of Cupcake Wonderland. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl44_chef_hat",
                "x": 0.48,
                "y": 0.267,
                "r": 0.085,
                "label": "Baker's hat blue ribbon",
                "type": "extra"
            },
            {
                "id": "lvl44_pretzel",
                "x": 0.74,
                "y": 0.48,
                "r": 0.085,
                "label": "Chocolate glaze pretzel",
                "type": "color"
            },
            {
                "id": "lvl44_cupcake_cherry",
                "x": 0.22,
                "y": 0.56,
                "r": 0.085,
                "label": "Cupcake strawberry topping",
                "type": "shape"
            },
            {
                "id": "lvl44_bread_loaf",
                "x": 0.38,
                "y": 0.72,
                "r": 0.085,
                "label": "Baguette crust cuts",
                "type": "shape"
            },
            {
                "id": "lvl44_coffee_mug",
                "x": 0.84,
                "y": 0.733,
                "r": 0.08,
                "label": "Mug heart steam",
                "type": "missing"
            },
            {
                "id": "lvl44_croissant",
                "x": 0.6,
                "y": 0.6,
                "r": 0.075,
                "label": "Pastry display glaze hue",
                "type": "color"
            }
        ]
    },
    {
        "id": 45,
        "name": "Pooch Playground Haven",
        "theme": "park",
        "archetype": 5,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 88,
        "description": "Explore the captivating details of Pooch Playground Haven. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl45_kite",
                "x": 0.82,
                "y": 0.16,
                "r": 0.085,
                "label": "Flying kite tail bows",
                "type": "extra"
            },
            {
                "id": "lvl45_butterfly",
                "x": 0.24,
                "y": 0.38,
                "r": 0.08,
                "label": "Monarch butterfly color",
                "type": "color"
            },
            {
                "id": "lvl45_collar",
                "x": 0.46,
                "y": 0.643,
                "r": 0.085,
                "label": "Puppy collar tag shape",
                "type": "shape"
            },
            {
                "id": "lvl45_ball",
                "x": 0.78,
                "y": 0.76,
                "r": 0.085,
                "label": "Tennis ball color",
                "type": "color"
            },
            {
                "id": "lvl45_bone",
                "x": 0.15,
                "y": 0.84,
                "r": 0.08,
                "label": "Chew bone beside doghouse",
                "type": "missing"
            },
            {
                "id": "lvl45_doghouse_roof",
                "x": 0.144,
                "y": 0.58,
                "r": 0.075,
                "label": "Doghouse roof ridge trim",
                "type": "color"
            },
            {
                "id": "lvl45_puppy_tail",
                "x": 0.36,
                "y": 0.55,
                "r": 0.075,
                "label": "Puppy wagging tail tip spot",
                "type": "shape"
            }
        ]
    },
    {
        "id": 46,
        "name": "Crystal Fauna Glade",
        "theme": "fantasy",
        "archetype": 6,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 88,
        "description": "Explore the captivating details of Crystal Fauna Glade. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl46_owl",
                "x": 0.78,
                "y": 0.26,
                "r": 0.08,
                "label": "Hollow tree owl eyes",
                "type": "shape"
            },
            {
                "id": "lvl46_lantern",
                "x": 0.15,
                "y": 0.362,
                "r": 0.08,
                "label": "Hanging lantern crystal flame",
                "type": "color"
            },
            {
                "id": "lvl46_fairy_wings",
                "x": 0.48,
                "y": 0.44,
                "r": 0.085,
                "label": "Fairy wing glow color",
                "type": "color"
            },
            {
                "id": "lvl46_mushroom",
                "x": 0.24,
                "y": 0.727,
                "r": 0.085,
                "label": "Giant mushroom glowing spots",
                "type": "color"
            },
            {
                "id": "lvl46_flower",
                "x": 0.86,
                "y": 0.74,
                "r": 0.08,
                "label": "Midnight blossom petal shape",
                "type": "shape"
            },
            {
                "id": "lvl46_crystal_cluster",
                "x": 0.38,
                "y": 0.787,
                "r": 0.08,
                "label": "Crystal spire tip",
                "type": "missing"
            }
        ]
    },
    {
        "id": 47,
        "name": "Barista Corner Retreat",
        "theme": "cafe",
        "archetype": 7,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 87,
        "description": "Explore the captivating details of Barista Corner Retreat. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl47_hanging_plant",
                "x": 0.6,
                "y": 0.16,
                "r": 0.08,
                "label": "Hanging pothos leaves",
                "type": "missing"
            },
            {
                "id": "lvl47_wall_clock",
                "x": 0.18,
                "y": 0.18,
                "r": 0.08,
                "label": "Vintage clock time",
                "type": "shape"
            },
            {
                "id": "lvl47_menu_chalk",
                "x": 0.82,
                "y": 0.28,
                "r": 0.085,
                "label": "Chalkboard specials icon",
                "type": "shape"
            },
            {
                "id": "lvl47_barista_apron",
                "x": 0.3,
                "y": 0.41,
                "r": 0.085,
                "label": "Barista apron pocket logo",
                "type": "shape"
            },
            {
                "id": "lvl47_steam",
                "x": 0.44,
                "y": 0.523,
                "r": 0.08,
                "label": "Espresso cup steam curls",
                "type": "shape"
            },
            {
                "id": "lvl47_pastry_bell",
                "x": 0.72,
                "y": 0.6,
                "r": 0.085,
                "label": "Croissant in glass dome",
                "type": "color"
            },
            {
                "id": "lvl47_takeaway_cup",
                "x": 0.88,
                "y": 0.82,
                "r": 0.08,
                "label": "Takeaway cup sleeve band",
                "type": "color"
            }
        ]
    },
    {
        "id": 48,
        "name": "Submarine Trench Trek",
        "theme": "ocean",
        "archetype": 8,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 87,
        "description": "Explore the captivating details of Submarine Trench Trek. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl48_submarine",
                "x": 0.76,
                "y": 0.22,
                "r": 0.085,
                "label": "Mini-sub spotlight beam",
                "type": "color"
            },
            {
                "id": "lvl48_turtle_shell",
                "x": 0.5,
                "y": 0.36,
                "r": 0.085,
                "label": "Sea turtle carapace pattern",
                "type": "shape"
            },
            {
                "id": "lvl48_clownfish",
                "x": 0.22,
                "y": 0.46,
                "r": 0.08,
                "label": "Anemone fish side stripe",
                "type": "shape"
            },
            {
                "id": "lvl48_jellyfish",
                "x": 0.82,
                "y": 0.56,
                "r": 0.08,
                "label": "Jellyfish neon tint",
                "type": "color"
            },
            {
                "id": "lvl48_anchor_fluke",
                "x": 0.14,
                "y": 0.71,
                "r": 0.08,
                "label": "Rusty anchor chain link",
                "type": "missing"
            },
            {
                "id": "lvl48_chest_gem",
                "x": 0.32,
                "y": 0.833,
                "r": 0.08,
                "label": "Sunken treasure chest ruby",
                "type": "color"
            }
        ]
    },
    {
        "id": 49,
        "name": "Mars Frontier Base",
        "theme": "space",
        "archetype": 9,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 86,
        "description": "Explore the captivating details of Mars Frontier Base. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl49_constellation",
                "x": 0.18,
                "y": 0.18,
                "r": 0.075,
                "label": "Star cluster bright star",
                "type": "missing"
            },
            {
                "id": "lvl49_planet_rings",
                "x": 0.82,
                "y": 0.2,
                "r": 0.085,
                "label": "Ringed gas giant tilt",
                "type": "shape"
            },
            {
                "id": "lvl49_antenna",
                "x": 0.48,
                "y": 0.507,
                "r": 0.085,
                "label": "Lunar base radar dish angle",
                "type": "shape"
            },
            {
                "id": "lvl49_astronaut_visor",
                "x": 0.26,
                "y": 0.513,
                "r": 0.08,
                "label": "Astronaut gold visor tint",
                "type": "color"
            },
            {
                "id": "lvl49_flag_symbol",
                "x": 0.702,
                "y": 0.607,
                "r": 0.08,
                "label": "Mission flag emblem",
                "type": "shape"
            },
            {
                "id": "lvl49_alien_rover",
                "x": 0.85,
                "y": 0.76,
                "r": 0.08,
                "label": "Lunar rover solar panel",
                "type": "color"
            },
            {
                "id": "lvl49_crater_crystal",
                "x": 0.38,
                "y": 0.84,
                "r": 0.08,
                "label": "Glowing space crystal",
                "type": "color"
            }
        ]
    },
    {
        "id": 50,
        "name": "Amber Harvest Grove",
        "theme": "autumn",
        "archetype": 10,
        "variant": 2,
        "difficulty": "Medium",
        "timeLimit": 85,
        "description": "Explore the captivating details of Amber Harvest Grove. Spot all 6 differences!",
        "differences": [
            {
                "id": "lvl50_balloon",
                "x": 0.78,
                "y": 0.16,
                "r": 0.085,
                "label": "Hot air balloon basket pattern",
                "type": "color"
            },
            {
                "id": "lvl50_lamp_post",
                "x": 0.12,
                "y": 0.36,
                "r": 0.08,
                "label": "Gas streetlamp glowing orb",
                "type": "missing"
            },
            {
                "id": "lvl50_bicycle_basket",
                "x": 0.28,
                "y": 0.52,
                "r": 0.08,
                "label": "Vintage bike basket flowers",
                "type": "color"
            },
            {
                "id": "lvl50_fountain",
                "x": 0.7,
                "y": 0.54,
                "r": 0.085,
                "label": "Stone fountain water tiers",
                "type": "shape"
            },
            {
                "id": "lvl50_bench_cushion",
                "x": 0.44,
                "y": 0.64,
                "r": 0.08,
                "label": "Park bench plaid scarf",
                "type": "color"
            },
            {
                "id": "lvl50_squirrel",
                "x": 0.2,
                "y": 0.78,
                "r": 0.08,
                "label": "Squirrel holding golden acorn",
                "type": "missing"
            }
        ]
    },
    {
        "id": 51,
        "name": "Royal Knight Fortress",
        "theme": "medieval",
        "archetype": 11,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 85,
        "description": "Explore the captivating details of Royal Knight Fortress. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl51_weather_flag",
                "x": 0.66,
                "y": 0.12,
                "r": 0.075,
                "label": "High tower pennant color",
                "type": "color"
            },
            {
                "id": "lvl51_banner",
                "x": 0.32,
                "y": 0.21,
                "r": 0.08,
                "label": "Royal crest heraldic lion banner",
                "type": "shape"
            },
            {
                "id": "lvl51_gargoyle",
                "x": 0.86,
                "y": 0.28,
                "r": 0.08,
                "label": "Stone gargoyle wings",
                "type": "shape"
            },
            {
                "id": "lvl51_torch",
                "x": 0.2,
                "y": 0.46,
                "r": 0.08,
                "label": "Wall sconce torch flame",
                "type": "color"
            },
            {
                "id": "lvl51_spear_tip",
                "x": 0.64,
                "y": 0.48,
                "r": 0.075,
                "label": "Guard halberd tassel",
                "type": "missing"
            },
            {
                "id": "lvl51_portcullis",
                "x": 0.5,
                "y": 0.6,
                "r": 0.085,
                "label": "Iron gate spike spikes",
                "type": "shape"
            },
            {
                "id": "lvl51_knight_shield",
                "x": 0.76,
                "y": 0.64,
                "r": 0.08,
                "label": "Guard shield cross emblem",
                "type": "color"
            }
        ]
    },
    {
        "id": 52,
        "name": "Mount Fuji Tea Sanctuary",
        "theme": "japan",
        "archetype": 12,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 84,
        "description": "Explore the captivating details of Mount Fuji Tea Sanctuary. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl52_pagoda_finial",
                "x": 0.238,
                "y": 0.14,
                "r": 0.075,
                "label": "Pagoda bronze roof spire",
                "type": "shape"
            },
            {
                "id": "lvl52_cherry_branch",
                "x": 0.54,
                "y": 0.2,
                "r": 0.08,
                "label": "Sakura blossom density",
                "type": "shape"
            },
            {
                "id": "lvl52_lantern_window",
                "x": 0.72,
                "y": 0.44,
                "r": 0.075,
                "label": "Toro stone lantern lattice",
                "type": "shape"
            },
            {
                "id": "lvl52_bridge_post",
                "x": 0.38,
                "y": 0.54,
                "r": 0.075,
                "label": "Red arched bridge post cap",
                "type": "color"
            },
            {
                "id": "lvl52_bamboo_spout",
                "x": 0.14,
                "y": 0.64,
                "r": 0.075,
                "label": "Bamboo water rocker (shishi-odoshi)",
                "type": "shape"
            },
            {
                "id": "lvl52_bonsai",
                "x": 0.82,
                "y": 0.68,
                "r": 0.08,
                "label": "Bonsai ceramic pot glazing",
                "type": "color"
            },
            {
                "id": "lvl52_koi",
                "x": 0.46,
                "y": 0.82,
                "r": 0.075,
                "label": "Calico koi fish pattern",
                "type": "color"
            },
            {
                "id": "lvl52_sand_pattern",
                "x": 0.6,
                "y": 0.9,
                "r": 0.08,
                "label": "Raked dry gravel ripple count",
                "type": "shape"
            }
        ]
    },
    {
        "id": 53,
        "name": "Arcane Enchanter Tower",
        "theme": "alchemy",
        "archetype": 13,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 84,
        "description": "Explore the captivating details of Arcane Enchanter Tower. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl53_telescope",
                "x": 0.68,
                "y": 0.18,
                "r": 0.075,
                "label": "Brass astrolabe dial position",
                "type": "shape"
            },
            {
                "id": "lvl53_raven",
                "x": 0.84,
                "y": 0.2,
                "r": 0.075,
                "label": "Familar raven beak key",
                "type": "missing"
            },
            {
                "id": "lvl53_candle",
                "x": 0.16,
                "y": 0.34,
                "r": 0.075,
                "label": "Floating candle wick sparks",
                "type": "color"
            },
            {
                "id": "lvl53_hourglass",
                "x": 0.36,
                "y": 0.42,
                "r": 0.075,
                "label": "Luminous hourglass sand level",
                "type": "shape"
            },
            {
                "id": "lvl53_orb",
                "x": 0.5,
                "y": 0.46,
                "r": 0.08,
                "label": "Crystal ball plasma aura",
                "type": "color"
            },
            {
                "id": "lvl53_beaker",
                "x": 0.78,
                "y": 0.52,
                "r": 0.075,
                "label": "Bubbling retort flask liquid",
                "type": "color"
            },
            {
                "id": "lvl53_spellbook",
                "x": 0.24,
                "y": 0.58,
                "r": 0.08,
                "label": "Ancient grimoire rune symbol",
                "type": "shape"
            },
            {
                "id": "lvl53_skull_gem",
                "x": 0.65,
                "y": 0.76,
                "r": 0.075,
                "label": "Relic skull eye jewel",
                "type": "color"
            }
        ]
    },
    {
        "id": 54,
        "name": "Buccaneer Bay Bastion",
        "theme": "pirate",
        "archetype": 14,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 83,
        "description": "Explore the captivating details of Buccaneer Bay Bastion. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl54_jolly_roger",
                "x": 0.478,
                "y": 0.173,
                "r": 0.08,
                "label": "Black mast pirate flag skull eyepatch",
                "type": "shape"
            },
            {
                "id": "lvl54_rope_pulley",
                "x": 0.64,
                "y": 0.3,
                "r": 0.075,
                "label": "Rigging rope wooden pulley",
                "type": "missing"
            },
            {
                "id": "lvl54_figurehead",
                "x": 0.8,
                "y": 0.42,
                "r": 0.08,
                "label": "Mermaid ship figurehead crown",
                "type": "color"
            },
            {
                "id": "lvl54_parrot",
                "x": 0.18,
                "y": 0.44,
                "r": 0.075,
                "label": "Parrot tail feather colors",
                "type": "color"
            },
            {
                "id": "lvl54_cannon",
                "x": 0.3,
                "y": 0.58,
                "r": 0.08,
                "label": "Gun deck bronze cannon angle",
                "type": "shape"
            },
            {
                "id": "lvl54_treasure_map",
                "x": 0.52,
                "y": 0.72,
                "r": 0.08,
                "label": "Map scroll red X mark",
                "type": "shape"
            },
            {
                "id": "lvl54_barrel_tap",
                "x": 0.74,
                "y": 0.78,
                "r": 0.075,
                "label": "Grog oak barrel spigot",
                "type": "missing"
            }
        ]
    },
    {
        "id": 55,
        "name": "Cogwheel Airship Engine",
        "theme": "steampunk",
        "archetype": 15,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 82,
        "description": "Explore the captivating details of Cogwheel Airship Engine. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl55_steam_whistle",
                "x": 0.15,
                "y": 0.18,
                "r": 0.075,
                "label": "High pressure copper whistle",
                "type": "missing"
            },
            {
                "id": "lvl55_gear_center",
                "x": 0.48,
                "y": 0.32,
                "r": 0.085,
                "label": "Large master gear spoke count",
                "type": "shape"
            },
            {
                "id": "lvl55_gauge_needle",
                "x": 0.22,
                "y": 0.36,
                "r": 0.075,
                "label": "Steam pressure dial indicator",
                "type": "shape"
            },
            {
                "id": "lvl55_copper_valve",
                "x": 0.78,
                "y": 0.42,
                "r": 0.075,
                "label": "Brass pipe shutoff wheel color",
                "type": "color"
            },
            {
                "id": "lvl55_automaton_eye",
                "x": 0.63,
                "y": 0.593,
                "r": 0.075,
                "label": "Clockwork owl monocle gem",
                "type": "color"
            },
            {
                "id": "lvl55_vacuum_tube",
                "x": 0.34,
                "y": 0.64,
                "r": 0.075,
                "label": "Glowing thermionic tube filament",
                "type": "color"
            },
            {
                "id": "lvl55_wrench",
                "x": 0.86,
                "y": 0.8,
                "r": 0.075,
                "label": "Adjustable spanner wrench size",
                "type": "shape"
            },
            {
                "id": "lvl55_blueprint_pin",
                "x": 0.5,
                "y": 0.88,
                "r": 0.075,
                "label": "Drafting board magnetic clip",
                "type": "color"
            }
        ]
    },
    {
        "id": 56,
        "name": "Megacity Skyway Plaza",
        "theme": "cyberpunk",
        "archetype": 16,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 82,
        "description": "Explore the captivating details of Megacity Skyway Plaza. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl56_rooftop_antenna",
                "x": 0.6,
                "y": 0.1,
                "r": 0.07,
                "label": "Radio spire blinking beacon",
                "type": "missing"
            },
            {
                "id": "lvl56_neon_kanji",
                "x": 0.22,
                "y": 0.16,
                "r": 0.075,
                "label": "Skyscraper neon sign symbol",
                "type": "shape"
            },
            {
                "id": "lvl56_flyer_lights",
                "x": 0.69,
                "y": 0.18,
                "r": 0.075,
                "label": "Hovercar rear thruster flame",
                "type": "color"
            },
            {
                "id": "lvl56_drone_lens",
                "x": 0.46,
                "y": 0.22,
                "r": 0.07,
                "label": "Surveillance drone sensor ray",
                "type": "color"
            },
            {
                "id": "lvl56_holo_koi",
                "x": 0.84,
                "y": 0.38,
                "r": 0.075,
                "label": "Holographic giant koi fin glow",
                "type": "shape"
            },
            {
                "id": "lvl56_cyborg_visor",
                "x": 0.3,
                "y": 0.56,
                "r": 0.07,
                "label": "Street samurai cyber-implant tint",
                "type": "color"
            },
            {
                "id": "lvl56_graffiti_tag",
                "x": 0.54,
                "y": 0.66,
                "r": 0.07,
                "label": "Puddle reflection cyber tag",
                "type": "shape"
            },
            {
                "id": "lvl56_vending_can",
                "x": 0.15,
                "y": 0.74,
                "r": 0.075,
                "label": "Neon vending machine beverage",
                "type": "color"
            }
        ]
    },
    {
        "id": 57,
        "name": "Valley of the Kings Vault",
        "theme": "egypt",
        "archetype": 17,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 81,
        "description": "Explore the captivating details of Valley of the Kings Vault. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl57_hieroglyph_bird",
                "x": 0.18,
                "y": 0.16,
                "r": 0.07,
                "label": "Wall carving sacred falcon emblem",
                "type": "shape"
            },
            {
                "id": "lvl57_scarab_gem",
                "x": 0.5,
                "y": 0.22,
                "r": 0.075,
                "label": "Winged scarab lapis lazuli jewel",
                "type": "color"
            },
            {
                "id": "lvl57_torch_bracket",
                "x": 0.82,
                "y": 0.26,
                "r": 0.07,
                "label": "Bronze wall torch flame hue",
                "type": "color"
            },
            {
                "id": "lvl57_column_lotus",
                "x": 0.36,
                "y": 0.36,
                "r": 0.07,
                "label": "Temple column lotus capital petal",
                "type": "missing"
            },
            {
                "id": "lvl57_sarcophagus_cobra",
                "x": 0.5,
                "y": 0.45,
                "r": 0.075,
                "label": "Golden pharaoh mask uraeus snake",
                "type": "shape"
            },
            {
                "id": "lvl57_ankh_inlay",
                "x": 0.74,
                "y": 0.62,
                "r": 0.07,
                "label": "Carved ankh cross gemstone",
                "type": "color"
            },
            {
                "id": "lvl57_canopic_jar",
                "x": 0.26,
                "y": 0.647,
                "r": 0.075,
                "label": "Alabaster canopic jar lid carving",
                "type": "shape"
            }
        ]
    },
    {
        "id": 58,
        "name": "Vintage Big Top Festival",
        "theme": "carnival",
        "archetype": 18,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 81,
        "description": "Explore the captivating details of Vintage Big Top Festival. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl58_firework_spark",
                "x": 0.52,
                "y": 0.1,
                "r": 0.07,
                "label": "Sky burst firework star trail",
                "type": "missing"
            },
            {
                "id": "lvl58_ferris_spoke",
                "x": 0.32,
                "y": 0.18,
                "r": 0.075,
                "label": "Ferris wheel gondola light star",
                "type": "color"
            },
            {
                "id": "lvl58_tent_pennant",
                "x": 0.72,
                "y": 0.24,
                "r": 0.075,
                "label": "Circus big top peak pennant",
                "type": "color"
            },
            {
                "id": "lvl58_balloon_ribbon",
                "x": 0.86,
                "y": 0.44,
                "r": 0.07,
                "label": "Cluster balloon star emblem",
                "type": "shape"
            },
            {
                "id": "lvl58_carousel_horse",
                "x": 0.52,
                "y": 0.6,
                "r": 0.075,
                "label": "Carousel steed saddle jewel",
                "type": "color"
            },
            {
                "id": "lvl58_cotton_candy",
                "x": 0.16,
                "y": 0.603,
                "r": 0.07,
                "label": "Cotton candy cart sugar cloud",
                "type": "color"
            },
            {
                "id": "lvl58_juggler_pin",
                "x": 0.66,
                "y": 0.733,
                "r": 0.07,
                "label": "Juggler's floating bowling pin",
                "type": "missing"
            },
            {
                "id": "lvl58_ticket_booth",
                "x": 0.82,
                "y": 0.763,
                "r": 0.075,
                "label": "Ticket booth awning stripe count",
                "type": "shape"
            }
        ]
    },
    {
        "id": 59,
        "name": "Matterhorn Pine Cabin",
        "theme": "chalet",
        "archetype": 19,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 80,
        "description": "Explore the captivating details of Matterhorn Pine Cabin. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl59_chimney_smoke",
                "x": 0.42,
                "y": 0.18,
                "r": 0.07,
                "label": "Chimney smoke drift direction",
                "type": "shape"
            },
            {
                "id": "lvl59_weathercock",
                "x": 0.34,
                "y": 0.22,
                "r": 0.07,
                "label": "Roof ridge brass rooster",
                "type": "missing"
            },
            {
                "id": "lvl59_pine_snowcap",
                "x": 0.86,
                "y": 0.36,
                "r": 0.07,
                "label": "Fir tree heavy snow blanket",
                "type": "shape"
            },
            {
                "id": "lvl59_stag_antlers",
                "x": 0.14,
                "y": 0.387,
                "r": 0.07,
                "label": "Distant stag antler branch tips",
                "type": "shape"
            },
            {
                "id": "lvl59_shutter_carving",
                "x": 0.54,
                "y": 0.44,
                "r": 0.07,
                "label": "Wood shutter carved heart motif",
                "type": "shape"
            },
            {
                "id": "lvl59_window_candle",
                "x": 0.4,
                "y": 0.48,
                "r": 0.07,
                "label": "Attic window warm candle flame",
                "type": "missing"
            },
            {
                "id": "lvl59_snowman_scarf",
                "x": 0.78,
                "y": 0.693,
                "r": 0.075,
                "label": "Snowman knitted scarf color",
                "type": "color"
            },
            {
                "id": "lvl59_ski_poles",
                "x": 0.229,
                "y": 0.75,
                "r": 0.07,
                "label": "Leaning ski pole basket rings",
                "type": "color"
            }
        ]
    },
    {
        "id": 60,
        "name": "Bioluminescent Sea Trench",
        "theme": "deepcoral",
        "archetype": 20,
        "variant": 2,
        "difficulty": "Hard",
        "timeLimit": 79,
        "description": "Explore the captivating details of Bioluminescent Sea Trench. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl60_manta_markings",
                "x": 0.36,
                "y": 0.22,
                "r": 0.075,
                "label": "Giant manta wing luminous runes",
                "type": "shape"
            },
            {
                "id": "lvl60_nautilus_shell",
                "x": 0.74,
                "y": 0.32,
                "r": 0.07,
                "label": "Nautilus spiral chamber lines",
                "type": "color"
            },
            {
                "id": "lvl60_angel_fin",
                "x": 0.605,
                "y": 0.433,
                "r": 0.075,
                "label": "Emperor angelfish dorsal streamer",
                "type": "shape"
            },
            {
                "id": "lvl60_submerged_idol",
                "x": 0.16,
                "y": 0.46,
                "r": 0.07,
                "label": "Sunken temple pillar emerald eye",
                "type": "missing"
            },
            {
                "id": "lvl60_seahorse_crown",
                "x": 0.44,
                "y": 0.573,
                "r": 0.07,
                "label": "Pygmy seahorse spiked coronet",
                "type": "shape"
            },
            {
                "id": "lvl60_diver_goggles",
                "x": 0.84,
                "y": 0.68,
                "r": 0.07,
                "label": "Deep diver helmet glow color",
                "type": "color"
            },
            {
                "id": "lvl60_anemone_tips",
                "x": 0.22,
                "y": 0.78,
                "r": 0.075,
                "label": "Sea anemone bioluminescent tips",
                "type": "color"
            }
        ]
    },
    {
        "id": 61,
        "name": "Modern Penthouse Lounge",
        "theme": "interior",
        "archetype": 1,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 79,
        "description": "Explore the captivating details of Modern Penthouse Lounge. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl61_clock",
                "x": 0.5,
                "y": 0.133,
                "r": 0.085,
                "label": "Wall clock hands changed",
                "type": "shape"
            },
            {
                "id": "lvl61_lamp",
                "x": 0.12,
                "y": 0.383,
                "r": 0.085,
                "label": "Floor lamp shade color",
                "type": "color"
            },
            {
                "id": "lvl61_painting",
                "x": 0.819,
                "y": 0.217,
                "r": 0.085,
                "label": "Painting artwork replaced",
                "type": "shape"
            },
            {
                "id": "lvl61_cat",
                "x": 0.244,
                "y": 0.75,
                "r": 0.085,
                "label": "Sleeping cat's bow tie",
                "type": "color"
            },
            {
                "id": "lvl61_cushion",
                "x": 0.645,
                "y": 0.652,
                "r": 0.085,
                "label": "Sofa cushion pattern",
                "type": "shape"
            },
            {
                "id": "lvl61_teapot",
                "x": 0.481,
                "y": 0.716,
                "r": 0.075,
                "label": "Coffee table teapot color",
                "type": "color"
            },
            {
                "id": "lvl61_rug_border",
                "x": 0.5,
                "y": 0.85,
                "r": 0.08,
                "label": "Area rug fringe pattern",
                "type": "shape"
            },
            {
                "id": "lvl61_window_sun",
                "x": 0.42,
                "y": 0.2,
                "r": 0.08,
                "label": "Outside sunny cloud shape",
                "type": "shape"
            }
        ]
    },
    {
        "id": 62,
        "name": "Autumn Country Homestead",
        "theme": "farm",
        "archetype": 2,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 78,
        "description": "Explore the captivating details of Autumn Country Homestead. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl62_weathercock",
                "x": 0.281,
                "y": 0.1,
                "r": 0.085,
                "label": "Barn rooftop weather vane direction",
                "type": "shape"
            },
            {
                "id": "lvl62_windmill",
                "x": 0.85,
                "y": 0.2,
                "r": 0.085,
                "label": "Windmill blade accent color",
                "type": "color"
            },
            {
                "id": "lvl62_cow",
                "x": 0.585,
                "y": 0.693,
                "r": 0.085,
                "label": "Spotted cow heart patch",
                "type": "shape"
            },
            {
                "id": "lvl62_apple",
                "x": 0.14,
                "y": 0.54,
                "r": 0.08,
                "label": "Golden apple in tree",
                "type": "color"
            },
            {
                "id": "lvl62_sunflower",
                "x": 0.785,
                "y": 0.8,
                "r": 0.085,
                "label": "Extra blooming sunflower",
                "type": "missing"
            },
            {
                "id": "lvl62_fence",
                "x": 0.5,
                "y": 0.59,
                "r": 0.075,
                "label": "Wooden fence rail notch",
                "type": "shape"
            },
            {
                "id": "lvl62_haystack",
                "x": 0.4,
                "y": 0.68,
                "r": 0.075,
                "label": "Golden haystack ribbon",
                "type": "color"
            },
            {
                "id": "lvl62_cloud",
                "x": 0.56,
                "y": 0.16,
                "r": 0.08,
                "label": "Puffy meadow sky cloud",
                "type": "shape"
            }
        ]
    },
    {
        "id": 63,
        "name": "Azure Surf Haven",
        "theme": "beach",
        "archetype": 3,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 78,
        "description": "Explore the captivating details of Azure Surf Haven. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl63_cloud",
                "x": 0.44,
                "y": 0.14,
                "r": 0.085,
                "label": "Heart-shaped sky cloud",
                "type": "shape"
            },
            {
                "id": "lvl63_boat_sail",
                "x": 0.822,
                "y": 0.327,
                "r": 0.085,
                "label": "Sailboat stripe color",
                "type": "color"
            },
            {
                "id": "lvl63_coconut",
                "x": 0.18,
                "y": 0.373,
                "r": 0.08,
                "label": "Coconut cluster count",
                "type": "missing"
            },
            {
                "id": "lvl63_crab",
                "x": 0.26,
                "y": 0.82,
                "r": 0.085,
                "label": "Sand crab sunglasses",
                "type": "extra"
            },
            {
                "id": "lvl63_starfish",
                "x": 0.68,
                "y": 0.86,
                "r": 0.08,
                "label": "Starfish color hue",
                "type": "color"
            },
            {
                "id": "lvl63_umbrella",
                "x": 0.85,
                "y": 0.7,
                "r": 0.08,
                "label": "Beach umbrella stripe tone",
                "type": "color"
            },
            {
                "id": "lvl63_island",
                "x": 0.675,
                "y": 0.4,
                "r": 0.075,
                "label": "Distant island palm silhouette",
                "type": "missing"
            }
        ]
    },
    {
        "id": 64,
        "name": "Golden Crust Bakery",
        "theme": "bakery",
        "archetype": 4,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 77,
        "description": "Explore the captivating details of Golden Crust Bakery. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl64_chef_hat",
                "x": 0.48,
                "y": 0.267,
                "r": 0.085,
                "label": "Baker's hat blue ribbon",
                "type": "extra"
            },
            {
                "id": "lvl64_pretzel",
                "x": 0.74,
                "y": 0.48,
                "r": 0.085,
                "label": "Chocolate glaze pretzel",
                "type": "color"
            },
            {
                "id": "lvl64_cupcake_cherry",
                "x": 0.22,
                "y": 0.56,
                "r": 0.085,
                "label": "Cupcake strawberry topping",
                "type": "shape"
            },
            {
                "id": "lvl64_bread_loaf",
                "x": 0.38,
                "y": 0.72,
                "r": 0.085,
                "label": "Baguette crust cuts",
                "type": "shape"
            },
            {
                "id": "lvl64_coffee_mug",
                "x": 0.84,
                "y": 0.733,
                "r": 0.08,
                "label": "Mug heart steam",
                "type": "missing"
            },
            {
                "id": "lvl64_croissant",
                "x": 0.6,
                "y": 0.6,
                "r": 0.075,
                "label": "Pastry display glaze hue",
                "type": "color"
            },
            {
                "id": "lvl64_cake_stand",
                "x": 0.15,
                "y": 0.7,
                "r": 0.075,
                "label": "Cake pedestal rim decoration",
                "type": "shape"
            },
            {
                "id": "lvl64_price_tag",
                "x": 0.7,
                "y": 0.4,
                "r": 0.07,
                "label": "Counter price tag numeral",
                "type": "shape"
            }
        ]
    },
    {
        "id": 65,
        "name": "Green Bark Sanctuary",
        "theme": "park",
        "archetype": 5,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 76,
        "description": "Explore the captivating details of Green Bark Sanctuary. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl65_kite",
                "x": 0.82,
                "y": 0.16,
                "r": 0.085,
                "label": "Flying kite tail bows",
                "type": "extra"
            },
            {
                "id": "lvl65_butterfly",
                "x": 0.24,
                "y": 0.38,
                "r": 0.08,
                "label": "Monarch butterfly color",
                "type": "color"
            },
            {
                "id": "lvl65_collar",
                "x": 0.46,
                "y": 0.643,
                "r": 0.085,
                "label": "Puppy collar tag shape",
                "type": "shape"
            },
            {
                "id": "lvl65_ball",
                "x": 0.78,
                "y": 0.76,
                "r": 0.085,
                "label": "Tennis ball color",
                "type": "color"
            },
            {
                "id": "lvl65_bone",
                "x": 0.15,
                "y": 0.84,
                "r": 0.08,
                "label": "Chew bone beside doghouse",
                "type": "missing"
            },
            {
                "id": "lvl65_doghouse_roof",
                "x": 0.144,
                "y": 0.58,
                "r": 0.075,
                "label": "Doghouse roof ridge trim",
                "type": "color"
            },
            {
                "id": "lvl65_puppy_tail",
                "x": 0.36,
                "y": 0.55,
                "r": 0.075,
                "label": "Puppy wagging tail tip spot",
                "type": "shape"
            },
            {
                "id": "lvl65_flower_bed",
                "x": 0.62,
                "y": 0.85,
                "r": 0.075,
                "label": "Lawn daisy petal count",
                "type": "shape"
            }
        ]
    },
    {
        "id": 66,
        "name": "Luminous Elf Hollow",
        "theme": "fantasy",
        "archetype": 6,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 76,
        "description": "Explore the captivating details of Luminous Elf Hollow. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl66_owl",
                "x": 0.78,
                "y": 0.26,
                "r": 0.08,
                "label": "Hollow tree owl eyes",
                "type": "shape"
            },
            {
                "id": "lvl66_lantern",
                "x": 0.15,
                "y": 0.362,
                "r": 0.08,
                "label": "Hanging lantern crystal flame",
                "type": "color"
            },
            {
                "id": "lvl66_fairy_wings",
                "x": 0.48,
                "y": 0.44,
                "r": 0.085,
                "label": "Fairy wing glow color",
                "type": "color"
            },
            {
                "id": "lvl66_mushroom",
                "x": 0.24,
                "y": 0.727,
                "r": 0.085,
                "label": "Giant mushroom glowing spots",
                "type": "color"
            },
            {
                "id": "lvl66_flower",
                "x": 0.86,
                "y": 0.74,
                "r": 0.08,
                "label": "Midnight blossom petal shape",
                "type": "shape"
            },
            {
                "id": "lvl66_crystal_cluster",
                "x": 0.38,
                "y": 0.787,
                "r": 0.08,
                "label": "Crystal spire tip",
                "type": "missing"
            },
            {
                "id": "lvl66_potion",
                "x": 0.62,
                "y": 0.84,
                "r": 0.08,
                "label": "Corked potion vial liquid",
                "type": "color"
            }
        ]
    },
    {
        "id": 67,
        "name": "Cozy Hearth Cafe",
        "theme": "cafe",
        "archetype": 7,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 75,
        "description": "Explore the captivating details of Cozy Hearth Cafe. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl67_hanging_plant",
                "x": 0.6,
                "y": 0.16,
                "r": 0.08,
                "label": "Hanging pothos leaves",
                "type": "missing"
            },
            {
                "id": "lvl67_wall_clock",
                "x": 0.18,
                "y": 0.18,
                "r": 0.08,
                "label": "Vintage clock time",
                "type": "shape"
            },
            {
                "id": "lvl67_menu_chalk",
                "x": 0.82,
                "y": 0.28,
                "r": 0.085,
                "label": "Chalkboard specials icon",
                "type": "shape"
            },
            {
                "id": "lvl67_barista_apron",
                "x": 0.3,
                "y": 0.41,
                "r": 0.085,
                "label": "Barista apron pocket logo",
                "type": "shape"
            },
            {
                "id": "lvl67_steam",
                "x": 0.44,
                "y": 0.523,
                "r": 0.08,
                "label": "Espresso cup steam curls",
                "type": "shape"
            },
            {
                "id": "lvl67_pastry_bell",
                "x": 0.72,
                "y": 0.6,
                "r": 0.085,
                "label": "Croissant in glass dome",
                "type": "color"
            },
            {
                "id": "lvl67_takeaway_cup",
                "x": 0.88,
                "y": 0.82,
                "r": 0.08,
                "label": "Takeaway cup sleeve band",
                "type": "color"
            },
            {
                "id": "lvl67_syrup_bottle",
                "x": 0.2,
                "y": 0.56,
                "r": 0.075,
                "label": "Vanilla syrup pump label",
                "type": "color"
            }
        ]
    },
    {
        "id": 68,
        "name": "Abyssal Reef Sanctuary",
        "theme": "ocean",
        "archetype": 8,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 75,
        "description": "Explore the captivating details of Abyssal Reef Sanctuary. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl68_submarine",
                "x": 0.76,
                "y": 0.22,
                "r": 0.085,
                "label": "Mini-sub spotlight beam",
                "type": "color"
            },
            {
                "id": "lvl68_turtle_shell",
                "x": 0.5,
                "y": 0.36,
                "r": 0.085,
                "label": "Sea turtle carapace pattern",
                "type": "shape"
            },
            {
                "id": "lvl68_clownfish",
                "x": 0.22,
                "y": 0.46,
                "r": 0.08,
                "label": "Anemone fish side stripe",
                "type": "shape"
            },
            {
                "id": "lvl68_jellyfish",
                "x": 0.82,
                "y": 0.56,
                "r": 0.08,
                "label": "Jellyfish neon tint",
                "type": "color"
            },
            {
                "id": "lvl68_anchor_fluke",
                "x": 0.14,
                "y": 0.71,
                "r": 0.08,
                "label": "Rusty anchor chain link",
                "type": "missing"
            },
            {
                "id": "lvl68_chest_gem",
                "x": 0.32,
                "y": 0.833,
                "r": 0.08,
                "label": "Sunken treasure chest ruby",
                "type": "color"
            },
            {
                "id": "lvl68_seashell",
                "x": 0.66,
                "y": 0.86,
                "r": 0.08,
                "label": "Golden spiral seashell",
                "type": "shape"
            },
            {
                "id": "lvl68_diver_bubble",
                "x": 0.4,
                "y": 0.2,
                "r": 0.075,
                "label": "Rising air bubble cluster",
                "type": "missing"
            }
        ]
    },
    {
        "id": 69,
        "name": "Orbital Station Alpha",
        "theme": "space",
        "archetype": 9,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 74,
        "description": "Explore the captivating details of Orbital Station Alpha. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl69_constellation",
                "x": 0.18,
                "y": 0.18,
                "r": 0.075,
                "label": "Star cluster bright star",
                "type": "missing"
            },
            {
                "id": "lvl69_planet_rings",
                "x": 0.82,
                "y": 0.2,
                "r": 0.085,
                "label": "Ringed gas giant tilt",
                "type": "shape"
            },
            {
                "id": "lvl69_antenna",
                "x": 0.48,
                "y": 0.507,
                "r": 0.085,
                "label": "Lunar base radar dish angle",
                "type": "shape"
            },
            {
                "id": "lvl69_astronaut_visor",
                "x": 0.26,
                "y": 0.513,
                "r": 0.08,
                "label": "Astronaut gold visor tint",
                "type": "color"
            },
            {
                "id": "lvl69_flag_symbol",
                "x": 0.702,
                "y": 0.607,
                "r": 0.08,
                "label": "Mission flag emblem",
                "type": "shape"
            },
            {
                "id": "lvl69_alien_rover",
                "x": 0.85,
                "y": 0.76,
                "r": 0.08,
                "label": "Lunar rover solar panel",
                "type": "color"
            },
            {
                "id": "lvl69_crater_crystal",
                "x": 0.38,
                "y": 0.84,
                "r": 0.08,
                "label": "Glowing space crystal",
                "type": "color"
            }
        ]
    },
    {
        "id": 70,
        "name": "Crisp October Promenade",
        "theme": "autumn",
        "archetype": 10,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 73,
        "description": "Explore the captivating details of Crisp October Promenade. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl70_balloon",
                "x": 0.78,
                "y": 0.16,
                "r": 0.085,
                "label": "Hot air balloon basket pattern",
                "type": "color"
            },
            {
                "id": "lvl70_lamp_post",
                "x": 0.12,
                "y": 0.36,
                "r": 0.08,
                "label": "Gas streetlamp glowing orb",
                "type": "missing"
            },
            {
                "id": "lvl70_bicycle_basket",
                "x": 0.28,
                "y": 0.52,
                "r": 0.08,
                "label": "Vintage bike basket flowers",
                "type": "color"
            },
            {
                "id": "lvl70_fountain",
                "x": 0.7,
                "y": 0.54,
                "r": 0.085,
                "label": "Stone fountain water tiers",
                "type": "shape"
            },
            {
                "id": "lvl70_bench_cushion",
                "x": 0.44,
                "y": 0.64,
                "r": 0.08,
                "label": "Park bench plaid scarf",
                "type": "color"
            },
            {
                "id": "lvl70_squirrel",
                "x": 0.2,
                "y": 0.78,
                "r": 0.08,
                "label": "Squirrel holding golden acorn",
                "type": "missing"
            },
            {
                "id": "lvl70_fallen_leaf",
                "x": 0.54,
                "y": 0.86,
                "r": 0.075,
                "label": "Maple leaf color gradient",
                "type": "color"
            },
            {
                "id": "lvl70_tree_foliage",
                "x": 0.88,
                "y": 0.42,
                "r": 0.075,
                "label": "Amber oak branch fullness",
                "type": "shape"
            }
        ]
    },
    {
        "id": 71,
        "name": "Dragonstone Battlements",
        "theme": "medieval",
        "archetype": 11,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 73,
        "description": "Explore the captivating details of Dragonstone Battlements. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl71_weather_flag",
                "x": 0.66,
                "y": 0.12,
                "r": 0.075,
                "label": "High tower pennant color",
                "type": "color"
            },
            {
                "id": "lvl71_banner",
                "x": 0.32,
                "y": 0.21,
                "r": 0.08,
                "label": "Royal crest heraldic lion banner",
                "type": "shape"
            },
            {
                "id": "lvl71_gargoyle",
                "x": 0.86,
                "y": 0.28,
                "r": 0.08,
                "label": "Stone gargoyle wings",
                "type": "shape"
            },
            {
                "id": "lvl71_torch",
                "x": 0.2,
                "y": 0.46,
                "r": 0.08,
                "label": "Wall sconce torch flame",
                "type": "color"
            },
            {
                "id": "lvl71_spear_tip",
                "x": 0.64,
                "y": 0.48,
                "r": 0.075,
                "label": "Guard halberd tassel",
                "type": "missing"
            },
            {
                "id": "lvl71_portcullis",
                "x": 0.5,
                "y": 0.6,
                "r": 0.085,
                "label": "Iron gate spike spikes",
                "type": "shape"
            },
            {
                "id": "lvl71_knight_shield",
                "x": 0.76,
                "y": 0.64,
                "r": 0.08,
                "label": "Guard shield cross emblem",
                "type": "color"
            },
            {
                "id": "lvl71_duck",
                "x": 0.26,
                "y": 0.86,
                "r": 0.075,
                "label": "Moat white swan",
                "type": "shape"
            }
        ]
    },
    {
        "id": 72,
        "name": "Bamboo Stream Pavilion",
        "theme": "japan",
        "archetype": 12,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 72,
        "description": "Explore the captivating details of Bamboo Stream Pavilion. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl72_pagoda_finial",
                "x": 0.238,
                "y": 0.14,
                "r": 0.075,
                "label": "Pagoda bronze roof spire",
                "type": "shape"
            },
            {
                "id": "lvl72_cherry_branch",
                "x": 0.54,
                "y": 0.2,
                "r": 0.08,
                "label": "Sakura blossom density",
                "type": "shape"
            },
            {
                "id": "lvl72_lantern_window",
                "x": 0.72,
                "y": 0.44,
                "r": 0.075,
                "label": "Toro stone lantern lattice",
                "type": "shape"
            },
            {
                "id": "lvl72_bridge_post",
                "x": 0.38,
                "y": 0.54,
                "r": 0.075,
                "label": "Red arched bridge post cap",
                "type": "color"
            },
            {
                "id": "lvl72_bamboo_spout",
                "x": 0.14,
                "y": 0.64,
                "r": 0.075,
                "label": "Bamboo water rocker (shishi-odoshi)",
                "type": "shape"
            },
            {
                "id": "lvl72_bonsai",
                "x": 0.82,
                "y": 0.68,
                "r": 0.08,
                "label": "Bonsai ceramic pot glazing",
                "type": "color"
            },
            {
                "id": "lvl72_koi",
                "x": 0.46,
                "y": 0.82,
                "r": 0.075,
                "label": "Calico koi fish pattern",
                "type": "color"
            }
        ]
    },
    {
        "id": 73,
        "name": "Mystic Relic Laboratory",
        "theme": "alchemy",
        "archetype": 13,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 72,
        "description": "Explore the captivating details of Mystic Relic Laboratory. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl73_telescope",
                "x": 0.68,
                "y": 0.18,
                "r": 0.075,
                "label": "Brass astrolabe dial position",
                "type": "shape"
            },
            {
                "id": "lvl73_raven",
                "x": 0.84,
                "y": 0.2,
                "r": 0.075,
                "label": "Familar raven beak key",
                "type": "missing"
            },
            {
                "id": "lvl73_candle",
                "x": 0.16,
                "y": 0.34,
                "r": 0.075,
                "label": "Floating candle wick sparks",
                "type": "color"
            },
            {
                "id": "lvl73_hourglass",
                "x": 0.36,
                "y": 0.42,
                "r": 0.075,
                "label": "Luminous hourglass sand level",
                "type": "shape"
            },
            {
                "id": "lvl73_orb",
                "x": 0.5,
                "y": 0.46,
                "r": 0.08,
                "label": "Crystal ball plasma aura",
                "type": "color"
            },
            {
                "id": "lvl73_beaker",
                "x": 0.78,
                "y": 0.52,
                "r": 0.075,
                "label": "Bubbling retort flask liquid",
                "type": "color"
            },
            {
                "id": "lvl73_spellbook",
                "x": 0.24,
                "y": 0.58,
                "r": 0.08,
                "label": "Ancient grimoire rune symbol",
                "type": "shape"
            },
            {
                "id": "lvl73_skull_gem",
                "x": 0.65,
                "y": 0.76,
                "r": 0.075,
                "label": "Relic skull eye jewel",
                "type": "color"
            }
        ]
    },
    {
        "id": 74,
        "name": "Black Pearl Harbor",
        "theme": "pirate",
        "archetype": 14,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 71,
        "description": "Explore the captivating details of Black Pearl Harbor. Spot all 8 differences!",
        "differences": [
            {
                "id": "lvl74_jolly_roger",
                "x": 0.478,
                "y": 0.173,
                "r": 0.08,
                "label": "Black mast pirate flag skull eyepatch",
                "type": "shape"
            },
            {
                "id": "lvl74_rope_pulley",
                "x": 0.64,
                "y": 0.3,
                "r": 0.075,
                "label": "Rigging rope wooden pulley",
                "type": "missing"
            },
            {
                "id": "lvl74_figurehead",
                "x": 0.8,
                "y": 0.42,
                "r": 0.08,
                "label": "Mermaid ship figurehead crown",
                "type": "color"
            },
            {
                "id": "lvl74_parrot",
                "x": 0.18,
                "y": 0.44,
                "r": 0.075,
                "label": "Parrot tail feather colors",
                "type": "color"
            },
            {
                "id": "lvl74_cannon",
                "x": 0.3,
                "y": 0.58,
                "r": 0.08,
                "label": "Gun deck bronze cannon angle",
                "type": "shape"
            },
            {
                "id": "lvl74_treasure_map",
                "x": 0.52,
                "y": 0.72,
                "r": 0.08,
                "label": "Map scroll red X mark",
                "type": "shape"
            },
            {
                "id": "lvl74_barrel_tap",
                "x": 0.74,
                "y": 0.78,
                "r": 0.075,
                "label": "Grog oak barrel spigot",
                "type": "missing"
            },
            {
                "id": "lvl74_coin_pile",
                "x": 0.36,
                "y": 0.88,
                "r": 0.075,
                "label": "Gold doubloon shining star",
                "type": "color"
            }
        ]
    },
    {
        "id": 75,
        "name": "Copper Pressure Sanctuary",
        "theme": "steampunk",
        "archetype": 15,
        "variant": 3,
        "difficulty": "Hard",
        "timeLimit": 70,
        "description": "Explore the captivating details of Copper Pressure Sanctuary. Spot all 7 differences!",
        "differences": [
            {
                "id": "lvl75_steam_whistle",
                "x": 0.15,
                "y": 0.18,
                "r": 0.075,
                "label": "High pressure copper whistle",
                "type": "missing"
            },
            {
                "id": "lvl75_gear_center",
                "x": 0.48,
                "y": 0.32,
                "r": 0.085,
                "label": "Large master gear spoke count",
                "type": "shape"
            },
            {
                "id": "lvl75_gauge_needle",
                "x": 0.22,
                "y": 0.36,
                "r": 0.075,
                "label": "Steam pressure dial indicator",
                "type": "shape"
            },
            {
                "id": "lvl75_copper_valve",
                "x": 0.78,
                "y": 0.42,
                "r": 0.075,
                "label": "Brass pipe shutoff wheel color",
                "type": "color"
            },
            {
                "id": "lvl75_automaton_eye",
                "x": 0.63,
                "y": 0.593,
                "r": 0.075,
                "label": "Clockwork owl monocle gem",
                "type": "color"
            },
            {
                "id": "lvl75_vacuum_tube",
                "x": 0.34,
                "y": 0.64,
                "r": 0.075,
                "label": "Glowing thermionic tube filament",
                "type": "color"
            },
            {
                "id": "lvl75_wrench",
                "x": 0.86,
                "y": 0.8,
                "r": 0.075,
                "label": "Adjustable spanner wrench size",
                "type": "shape"
            }
        ]
    },
    {
        "id": 76,
        "name": "Cyber Samurai Rooftop",
        "theme": "cyberpunk",
        "archetype": 16,
        "variant": 3,
        "difficulty": "Expert",
        "timeLimit": 70,
        "description": "Explore the captivating details of Cyber Samurai Rooftop. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl76_rooftop_antenna",
                "x": 0.6,
                "y": 0.1,
                "r": 0.07,
                "label": "Radio spire blinking beacon",
                "type": "missing"
            },
            {
                "id": "lvl76_neon_kanji",
                "x": 0.22,
                "y": 0.16,
                "r": 0.075,
                "label": "Skyscraper neon sign symbol",
                "type": "shape"
            },
            {
                "id": "lvl76_flyer_lights",
                "x": 0.69,
                "y": 0.18,
                "r": 0.075,
                "label": "Hovercar rear thruster flame",
                "type": "color"
            },
            {
                "id": "lvl76_drone_lens",
                "x": 0.46,
                "y": 0.22,
                "r": 0.07,
                "label": "Surveillance drone sensor ray",
                "type": "color"
            },
            {
                "id": "lvl76_holo_koi",
                "x": 0.84,
                "y": 0.38,
                "r": 0.075,
                "label": "Holographic giant koi fin glow",
                "type": "shape"
            },
            {
                "id": "lvl76_cyborg_visor",
                "x": 0.3,
                "y": 0.56,
                "r": 0.07,
                "label": "Street samurai cyber-implant tint",
                "type": "color"
            },
            {
                "id": "lvl76_graffiti_tag",
                "x": 0.54,
                "y": 0.66,
                "r": 0.07,
                "label": "Puddle reflection cyber tag",
                "type": "shape"
            },
            {
                "id": "lvl76_vending_can",
                "x": 0.15,
                "y": 0.74,
                "r": 0.075,
                "label": "Neon vending machine beverage",
                "type": "color"
            },
            {
                "id": "lvl76_power_cable",
                "x": 0.82,
                "y": 0.82,
                "r": 0.07,
                "label": "Overhead fiber conduit coupling",
                "type": "missing"
            }
        ]
    },
    {
        "id": 77,
        "name": "Gilded Sphinx Reliquary",
        "theme": "egypt",
        "archetype": 17,
        "variant": 3,
        "difficulty": "Expert",
        "timeLimit": 69,
        "description": "Explore the captivating details of Gilded Sphinx Reliquary. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl77_hieroglyph_bird",
                "x": 0.18,
                "y": 0.16,
                "r": 0.07,
                "label": "Wall carving sacred falcon emblem",
                "type": "shape"
            },
            {
                "id": "lvl77_scarab_gem",
                "x": 0.5,
                "y": 0.22,
                "r": 0.075,
                "label": "Winged scarab lapis lazuli jewel",
                "type": "color"
            },
            {
                "id": "lvl77_torch_bracket",
                "x": 0.82,
                "y": 0.26,
                "r": 0.07,
                "label": "Bronze wall torch flame hue",
                "type": "color"
            },
            {
                "id": "lvl77_column_lotus",
                "x": 0.36,
                "y": 0.36,
                "r": 0.07,
                "label": "Temple column lotus capital petal",
                "type": "missing"
            },
            {
                "id": "lvl77_sarcophagus_cobra",
                "x": 0.5,
                "y": 0.45,
                "r": 0.075,
                "label": "Golden pharaoh mask uraeus snake",
                "type": "shape"
            },
            {
                "id": "lvl77_ankh_inlay",
                "x": 0.74,
                "y": 0.62,
                "r": 0.07,
                "label": "Carved ankh cross gemstone",
                "type": "color"
            },
            {
                "id": "lvl77_canopic_jar",
                "x": 0.26,
                "y": 0.647,
                "r": 0.075,
                "label": "Alabaster canopic jar lid carving",
                "type": "shape"
            },
            {
                "id": "lvl77_cat_statue",
                "x": 0.84,
                "y": 0.82,
                "r": 0.07,
                "label": "Bastet black obsidian cat collar",
                "type": "shape"
            },
            {
                "id": "lvl77_urn_pattern",
                "x": 0.15,
                "y": 0.84,
                "r": 0.075,
                "label": "Clay amphora zigzag border",
                "type": "color"
            },
            {
                "id": "lvl77_gold_goblet",
                "x": 0.62,
                "y": 0.86,
                "r": 0.07,
                "label": "Offering platter gold chalice",
                "type": "missing"
            }
        ]
    },
    {
        "id": 78,
        "name": "Moonlit Carousel Fair",
        "theme": "carnival",
        "archetype": 18,
        "variant": 3,
        "difficulty": "Expert",
        "timeLimit": 69,
        "description": "Explore the captivating details of Moonlit Carousel Fair. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl78_firework_spark",
                "x": 0.52,
                "y": 0.1,
                "r": 0.07,
                "label": "Sky burst firework star trail",
                "type": "missing"
            },
            {
                "id": "lvl78_ferris_spoke",
                "x": 0.32,
                "y": 0.18,
                "r": 0.075,
                "label": "Ferris wheel gondola light star",
                "type": "color"
            },
            {
                "id": "lvl78_tent_pennant",
                "x": 0.72,
                "y": 0.24,
                "r": 0.075,
                "label": "Circus big top peak pennant",
                "type": "color"
            },
            {
                "id": "lvl78_balloon_ribbon",
                "x": 0.86,
                "y": 0.44,
                "r": 0.07,
                "label": "Cluster balloon star emblem",
                "type": "shape"
            },
            {
                "id": "lvl78_carousel_horse",
                "x": 0.52,
                "y": 0.6,
                "r": 0.075,
                "label": "Carousel steed saddle jewel",
                "type": "color"
            },
            {
                "id": "lvl78_cotton_candy",
                "x": 0.16,
                "y": 0.603,
                "r": 0.07,
                "label": "Cotton candy cart sugar cloud",
                "type": "color"
            },
            {
                "id": "lvl78_juggler_pin",
                "x": 0.66,
                "y": 0.733,
                "r": 0.07,
                "label": "Juggler's floating bowling pin",
                "type": "missing"
            },
            {
                "id": "lvl78_ticket_booth",
                "x": 0.82,
                "y": 0.763,
                "r": 0.075,
                "label": "Ticket booth awning stripe count",
                "type": "shape"
            },
            {
                "id": "lvl78_popcorn_box",
                "x": 0.38,
                "y": 0.82,
                "r": 0.07,
                "label": "Popcorn box red stripes",
                "type": "color"
            }
        ]
    },
    {
        "id": 79,
        "name": "Frosty Hearth Retreat",
        "theme": "chalet",
        "archetype": 19,
        "variant": 3,
        "difficulty": "Expert",
        "timeLimit": 68,
        "description": "Explore the captivating details of Frosty Hearth Retreat. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl79_chimney_smoke",
                "x": 0.42,
                "y": 0.18,
                "r": 0.07,
                "label": "Chimney smoke drift direction",
                "type": "shape"
            },
            {
                "id": "lvl79_weathercock",
                "x": 0.34,
                "y": 0.22,
                "r": 0.07,
                "label": "Roof ridge brass rooster",
                "type": "missing"
            },
            {
                "id": "lvl79_pine_snowcap",
                "x": 0.86,
                "y": 0.36,
                "r": 0.07,
                "label": "Fir tree heavy snow blanket",
                "type": "shape"
            },
            {
                "id": "lvl79_stag_antlers",
                "x": 0.14,
                "y": 0.387,
                "r": 0.07,
                "label": "Distant stag antler branch tips",
                "type": "shape"
            },
            {
                "id": "lvl79_shutter_carving",
                "x": 0.54,
                "y": 0.44,
                "r": 0.07,
                "label": "Wood shutter carved heart motif",
                "type": "shape"
            },
            {
                "id": "lvl79_window_candle",
                "x": 0.4,
                "y": 0.48,
                "r": 0.07,
                "label": "Attic window warm candle flame",
                "type": "missing"
            },
            {
                "id": "lvl79_snowman_scarf",
                "x": 0.78,
                "y": 0.693,
                "r": 0.075,
                "label": "Snowman knitted scarf color",
                "type": "color"
            },
            {
                "id": "lvl79_ski_poles",
                "x": 0.229,
                "y": 0.75,
                "r": 0.07,
                "label": "Leaning ski pole basket rings",
                "type": "color"
            },
            {
                "id": "lvl79_sled_runners",
                "x": 0.6,
                "y": 0.833,
                "r": 0.07,
                "label": "Wooden toboggan cushion pad",
                "type": "color"
            },
            {
                "id": "lvl79_hot_cocoa",
                "x": 0.32,
                "y": 0.88,
                "r": 0.07,
                "label": "Porch mug whipped cream drizzle",
                "type": "shape"
            }
        ]
    },
    {
        "id": 80,
        "name": "Deep Neptune Sanctuary",
        "theme": "deepcoral",
        "archetype": 20,
        "variant": 3,
        "difficulty": "Expert",
        "timeLimit": 67,
        "description": "Explore the captivating details of Deep Neptune Sanctuary. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl80_manta_markings",
                "x": 0.36,
                "y": 0.22,
                "r": 0.075,
                "label": "Giant manta wing luminous runes",
                "type": "shape"
            },
            {
                "id": "lvl80_nautilus_shell",
                "x": 0.74,
                "y": 0.32,
                "r": 0.07,
                "label": "Nautilus spiral chamber lines",
                "type": "color"
            },
            {
                "id": "lvl80_angel_fin",
                "x": 0.605,
                "y": 0.433,
                "r": 0.075,
                "label": "Emperor angelfish dorsal streamer",
                "type": "shape"
            },
            {
                "id": "lvl80_submerged_idol",
                "x": 0.16,
                "y": 0.46,
                "r": 0.07,
                "label": "Sunken temple pillar emerald eye",
                "type": "missing"
            },
            {
                "id": "lvl80_seahorse_crown",
                "x": 0.44,
                "y": 0.573,
                "r": 0.07,
                "label": "Pygmy seahorse spiked coronet",
                "type": "shape"
            },
            {
                "id": "lvl80_diver_goggles",
                "x": 0.84,
                "y": 0.68,
                "r": 0.07,
                "label": "Deep diver helmet glow color",
                "type": "color"
            },
            {
                "id": "lvl80_anemone_tips",
                "x": 0.22,
                "y": 0.78,
                "r": 0.075,
                "label": "Sea anemone bioluminescent tips",
                "type": "color"
            },
            {
                "id": "lvl80_clam_pearl",
                "x": 0.5,
                "y": 0.85,
                "r": 0.075,
                "label": "Giant clam iridescent black pearl",
                "type": "color"
            },
            {
                "id": "lvl80_hydra_polyps",
                "x": 0.78,
                "y": 0.86,
                "r": 0.07,
                "label": "Glowing branch coral polyp bud",
                "type": "missing"
            }
        ]
    },
    {
        "id": 81,
        "name": "Warm Fireplace Cabin",
        "theme": "interior",
        "archetype": 1,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 67,
        "description": "Explore the captivating details of Warm Fireplace Cabin. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl81_clock",
                "x": 0.5,
                "y": 0.133,
                "r": 0.085,
                "label": "Wall clock hands changed",
                "type": "shape"
            },
            {
                "id": "lvl81_lamp",
                "x": 0.12,
                "y": 0.383,
                "r": 0.085,
                "label": "Floor lamp shade color",
                "type": "color"
            },
            {
                "id": "lvl81_painting",
                "x": 0.819,
                "y": 0.217,
                "r": 0.085,
                "label": "Painting artwork replaced",
                "type": "shape"
            },
            {
                "id": "lvl81_cat",
                "x": 0.244,
                "y": 0.75,
                "r": 0.085,
                "label": "Sleeping cat's bow tie",
                "type": "color"
            },
            {
                "id": "lvl81_cushion",
                "x": 0.645,
                "y": 0.652,
                "r": 0.085,
                "label": "Sofa cushion pattern",
                "type": "shape"
            },
            {
                "id": "lvl81_teapot",
                "x": 0.481,
                "y": 0.716,
                "r": 0.075,
                "label": "Coffee table teapot color",
                "type": "color"
            },
            {
                "id": "lvl81_rug_border",
                "x": 0.5,
                "y": 0.85,
                "r": 0.08,
                "label": "Area rug fringe pattern",
                "type": "shape"
            },
            {
                "id": "lvl81_window_sun",
                "x": 0.42,
                "y": 0.2,
                "r": 0.08,
                "label": "Outside sunny cloud shape",
                "type": "shape"
            },
            {
                "id": "lvl81_armrest",
                "x": 0.875,
                "y": 0.67,
                "r": 0.075,
                "label": "Sofa armrest contour",
                "type": "shape"
            },
            {
                "id": "lvl81_book",
                "x": 0.4,
                "y": 0.74,
                "r": 0.07,
                "label": "Tabletop magazine cover",
                "type": "color"
            }
        ]
    },
    {
        "id": 82,
        "name": "Sunset Valley Barn",
        "theme": "farm",
        "archetype": 2,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 66,
        "description": "Explore the captivating details of Sunset Valley Barn. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl82_weathercock",
                "x": 0.281,
                "y": 0.1,
                "r": 0.085,
                "label": "Barn rooftop weather vane direction",
                "type": "shape"
            },
            {
                "id": "lvl82_windmill",
                "x": 0.85,
                "y": 0.2,
                "r": 0.085,
                "label": "Windmill blade accent color",
                "type": "color"
            },
            {
                "id": "lvl82_cow",
                "x": 0.585,
                "y": 0.693,
                "r": 0.085,
                "label": "Spotted cow heart patch",
                "type": "shape"
            },
            {
                "id": "lvl82_apple",
                "x": 0.14,
                "y": 0.54,
                "r": 0.08,
                "label": "Golden apple in tree",
                "type": "color"
            },
            {
                "id": "lvl82_sunflower",
                "x": 0.785,
                "y": 0.8,
                "r": 0.085,
                "label": "Extra blooming sunflower",
                "type": "missing"
            },
            {
                "id": "lvl82_fence",
                "x": 0.5,
                "y": 0.59,
                "r": 0.075,
                "label": "Wooden fence rail notch",
                "type": "shape"
            },
            {
                "id": "lvl82_haystack",
                "x": 0.4,
                "y": 0.68,
                "r": 0.075,
                "label": "Golden haystack ribbon",
                "type": "color"
            },
            {
                "id": "lvl82_cloud",
                "x": 0.56,
                "y": 0.16,
                "r": 0.08,
                "label": "Puffy meadow sky cloud",
                "type": "shape"
            },
            {
                "id": "lvl82_barn_door",
                "x": 0.28,
                "y": 0.4,
                "r": 0.075,
                "label": "Barn door cross beam",
                "type": "shape"
            }
        ]
    },
    {
        "id": 83,
        "name": "Dolphin Cove Sands",
        "theme": "beach",
        "archetype": 3,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 66,
        "description": "Explore the captivating details of Dolphin Cove Sands. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl83_cloud",
                "x": 0.44,
                "y": 0.14,
                "r": 0.085,
                "label": "Heart-shaped sky cloud",
                "type": "shape"
            },
            {
                "id": "lvl83_boat_sail",
                "x": 0.822,
                "y": 0.327,
                "r": 0.085,
                "label": "Sailboat stripe color",
                "type": "color"
            },
            {
                "id": "lvl83_coconut",
                "x": 0.18,
                "y": 0.373,
                "r": 0.08,
                "label": "Coconut cluster count",
                "type": "missing"
            },
            {
                "id": "lvl83_crab",
                "x": 0.26,
                "y": 0.82,
                "r": 0.085,
                "label": "Sand crab sunglasses",
                "type": "extra"
            },
            {
                "id": "lvl83_starfish",
                "x": 0.68,
                "y": 0.86,
                "r": 0.08,
                "label": "Starfish color hue",
                "type": "color"
            },
            {
                "id": "lvl83_umbrella",
                "x": 0.85,
                "y": 0.7,
                "r": 0.08,
                "label": "Beach umbrella stripe tone",
                "type": "color"
            },
            {
                "id": "lvl83_island",
                "x": 0.675,
                "y": 0.4,
                "r": 0.075,
                "label": "Distant island palm silhouette",
                "type": "missing"
            },
            {
                "id": "lvl83_wave_crest",
                "x": 0.5,
                "y": 0.62,
                "r": 0.075,
                "label": "Ocean surf foam curl",
                "type": "shape"
            },
            {
                "id": "lvl83_towel",
                "x": 0.42,
                "y": 0.88,
                "r": 0.07,
                "label": "Beach towel stripe design",
                "type": "color"
            },
            {
                "id": "lvl83_shell",
                "x": 0.12,
                "y": 0.86,
                "r": 0.07,
                "label": "Golden seashell spiral",
                "type": "shape"
            }
        ]
    },
    {
        "id": 84,
        "name": "Village Confectionery",
        "theme": "bakery",
        "archetype": 4,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 65,
        "description": "Explore the captivating details of Village Confectionery. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl84_chef_hat",
                "x": 0.48,
                "y": 0.267,
                "r": 0.085,
                "label": "Baker's hat blue ribbon",
                "type": "extra"
            },
            {
                "id": "lvl84_pretzel",
                "x": 0.74,
                "y": 0.48,
                "r": 0.085,
                "label": "Chocolate glaze pretzel",
                "type": "color"
            },
            {
                "id": "lvl84_cupcake_cherry",
                "x": 0.22,
                "y": 0.56,
                "r": 0.085,
                "label": "Cupcake strawberry topping",
                "type": "shape"
            },
            {
                "id": "lvl84_bread_loaf",
                "x": 0.38,
                "y": 0.72,
                "r": 0.085,
                "label": "Baguette crust cuts",
                "type": "shape"
            },
            {
                "id": "lvl84_coffee_mug",
                "x": 0.84,
                "y": 0.733,
                "r": 0.08,
                "label": "Mug heart steam",
                "type": "missing"
            },
            {
                "id": "lvl84_croissant",
                "x": 0.6,
                "y": 0.6,
                "r": 0.075,
                "label": "Pastry display glaze hue",
                "type": "color"
            },
            {
                "id": "lvl84_cake_stand",
                "x": 0.15,
                "y": 0.7,
                "r": 0.075,
                "label": "Cake pedestal rim decoration",
                "type": "shape"
            },
            {
                "id": "lvl84_price_tag",
                "x": 0.7,
                "y": 0.4,
                "r": 0.07,
                "label": "Counter price tag numeral",
                "type": "shape"
            },
            {
                "id": "lvl84_flour_sack",
                "x": 0.3,
                "y": 0.82,
                "r": 0.07,
                "label": "Flour sack wheat sheaf stamp",
                "type": "shape"
            }
        ]
    },
    {
        "id": 85,
        "name": "Tailwag Spring Park",
        "theme": "park",
        "archetype": 5,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 64,
        "description": "Explore the captivating details of Tailwag Spring Park. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl85_kite",
                "x": 0.82,
                "y": 0.16,
                "r": 0.085,
                "label": "Flying kite tail bows",
                "type": "extra"
            },
            {
                "id": "lvl85_butterfly",
                "x": 0.24,
                "y": 0.38,
                "r": 0.08,
                "label": "Monarch butterfly color",
                "type": "color"
            },
            {
                "id": "lvl85_collar",
                "x": 0.46,
                "y": 0.643,
                "r": 0.085,
                "label": "Puppy collar tag shape",
                "type": "shape"
            },
            {
                "id": "lvl85_ball",
                "x": 0.78,
                "y": 0.76,
                "r": 0.085,
                "label": "Tennis ball color",
                "type": "color"
            },
            {
                "id": "lvl85_bone",
                "x": 0.15,
                "y": 0.84,
                "r": 0.08,
                "label": "Chew bone beside doghouse",
                "type": "missing"
            },
            {
                "id": "lvl85_doghouse_roof",
                "x": 0.144,
                "y": 0.58,
                "r": 0.075,
                "label": "Doghouse roof ridge trim",
                "type": "color"
            },
            {
                "id": "lvl85_puppy_tail",
                "x": 0.36,
                "y": 0.55,
                "r": 0.075,
                "label": "Puppy wagging tail tip spot",
                "type": "shape"
            },
            {
                "id": "lvl85_flower_bed",
                "x": 0.62,
                "y": 0.85,
                "r": 0.075,
                "label": "Lawn daisy petal count",
                "type": "shape"
            },
            {
                "id": "lvl85_tree_branch",
                "x": 0.88,
                "y": 0.4,
                "r": 0.07,
                "label": "Oak tree leaf cluster",
                "type": "color"
            },
            {
                "id": "lvl85_flying_disc",
                "x": 0.5,
                "y": 0.28,
                "r": 0.07,
                "label": "Hovering frisbee hue",
                "type": "color"
            }
        ]
    },
    {
        "id": 86,
        "name": "Twilight Mystic Woods",
        "theme": "fantasy",
        "archetype": 6,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 64,
        "description": "Explore the captivating details of Twilight Mystic Woods. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl86_owl",
                "x": 0.78,
                "y": 0.26,
                "r": 0.08,
                "label": "Hollow tree owl eyes",
                "type": "shape"
            },
            {
                "id": "lvl86_lantern",
                "x": 0.15,
                "y": 0.362,
                "r": 0.08,
                "label": "Hanging lantern crystal flame",
                "type": "color"
            },
            {
                "id": "lvl86_fairy_wings",
                "x": 0.48,
                "y": 0.44,
                "r": 0.085,
                "label": "Fairy wing glow color",
                "type": "color"
            },
            {
                "id": "lvl86_mushroom",
                "x": 0.24,
                "y": 0.727,
                "r": 0.085,
                "label": "Giant mushroom glowing spots",
                "type": "color"
            },
            {
                "id": "lvl86_flower",
                "x": 0.86,
                "y": 0.74,
                "r": 0.08,
                "label": "Midnight blossom petal shape",
                "type": "shape"
            },
            {
                "id": "lvl86_crystal_cluster",
                "x": 0.38,
                "y": 0.787,
                "r": 0.08,
                "label": "Crystal spire tip",
                "type": "missing"
            },
            {
                "id": "lvl86_potion",
                "x": 0.62,
                "y": 0.84,
                "r": 0.08,
                "label": "Corked potion vial liquid",
                "type": "color"
            },
            {
                "id": "lvl86_firefly",
                "x": 0.33,
                "y": 0.3,
                "r": 0.075,
                "label": "Floating firefly orb glow",
                "type": "color"
            },
            {
                "id": "lvl86_tree_root",
                "x": 0.72,
                "y": 0.88,
                "r": 0.075,
                "label": "Ancient tree root moss glow",
                "type": "color"
            }
        ]
    },
    {
        "id": 87,
        "name": "Vintage Bean Roastery",
        "theme": "cafe",
        "archetype": 7,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 63,
        "description": "Explore the captivating details of Vintage Bean Roastery. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl87_hanging_plant",
                "x": 0.6,
                "y": 0.16,
                "r": 0.08,
                "label": "Hanging pothos leaves",
                "type": "missing"
            },
            {
                "id": "lvl87_wall_clock",
                "x": 0.18,
                "y": 0.18,
                "r": 0.08,
                "label": "Vintage clock time",
                "type": "shape"
            },
            {
                "id": "lvl87_menu_chalk",
                "x": 0.82,
                "y": 0.28,
                "r": 0.085,
                "label": "Chalkboard specials icon",
                "type": "shape"
            },
            {
                "id": "lvl87_barista_apron",
                "x": 0.3,
                "y": 0.41,
                "r": 0.085,
                "label": "Barista apron pocket logo",
                "type": "shape"
            },
            {
                "id": "lvl87_steam",
                "x": 0.44,
                "y": 0.523,
                "r": 0.08,
                "label": "Espresso cup steam curls",
                "type": "shape"
            },
            {
                "id": "lvl87_pastry_bell",
                "x": 0.72,
                "y": 0.6,
                "r": 0.085,
                "label": "Croissant in glass dome",
                "type": "color"
            },
            {
                "id": "lvl87_takeaway_cup",
                "x": 0.88,
                "y": 0.82,
                "r": 0.08,
                "label": "Takeaway cup sleeve band",
                "type": "color"
            },
            {
                "id": "lvl87_syrup_bottle",
                "x": 0.2,
                "y": 0.56,
                "r": 0.075,
                "label": "Vanilla syrup pump label",
                "type": "color"
            },
            {
                "id": "lvl87_shelf_jar",
                "x": 0.76,
                "y": 0.14,
                "r": 0.075,
                "label": "Coffee bean glass canister",
                "type": "shape"
            },
            {
                "id": "lvl87_tip_jar",
                "x": 0.52,
                "y": 0.58,
                "r": 0.07,
                "label": "Glass tip jar heart sticker",
                "type": "missing"
            }
        ]
    },
    {
        "id": 88,
        "name": "Mermaid Lagoon Shallows",
        "theme": "ocean",
        "archetype": 8,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 63,
        "description": "Explore the captivating details of Mermaid Lagoon Shallows. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl88_submarine",
                "x": 0.76,
                "y": 0.22,
                "r": 0.085,
                "label": "Mini-sub spotlight beam",
                "type": "color"
            },
            {
                "id": "lvl88_turtle_shell",
                "x": 0.5,
                "y": 0.36,
                "r": 0.085,
                "label": "Sea turtle carapace pattern",
                "type": "shape"
            },
            {
                "id": "lvl88_clownfish",
                "x": 0.22,
                "y": 0.46,
                "r": 0.08,
                "label": "Anemone fish side stripe",
                "type": "shape"
            },
            {
                "id": "lvl88_jellyfish",
                "x": 0.82,
                "y": 0.56,
                "r": 0.08,
                "label": "Jellyfish neon tint",
                "type": "color"
            },
            {
                "id": "lvl88_anchor_fluke",
                "x": 0.14,
                "y": 0.71,
                "r": 0.08,
                "label": "Rusty anchor chain link",
                "type": "missing"
            },
            {
                "id": "lvl88_chest_gem",
                "x": 0.32,
                "y": 0.833,
                "r": 0.08,
                "label": "Sunken treasure chest ruby",
                "type": "color"
            },
            {
                "id": "lvl88_seashell",
                "x": 0.66,
                "y": 0.86,
                "r": 0.08,
                "label": "Golden spiral seashell",
                "type": "shape"
            },
            {
                "id": "lvl88_diver_bubble",
                "x": 0.4,
                "y": 0.2,
                "r": 0.075,
                "label": "Rising air bubble cluster",
                "type": "missing"
            },
            {
                "id": "lvl88_seaweed",
                "x": 0.88,
                "y": 0.8,
                "r": 0.075,
                "label": "Kelp stalk leaf wave",
                "type": "shape"
            }
        ]
    },
    {
        "id": 89,
        "name": "Deep Galaxy Observatory",
        "theme": "space",
        "archetype": 9,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 62,
        "description": "Explore the captivating details of Deep Galaxy Observatory. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl89_constellation",
                "x": 0.18,
                "y": 0.18,
                "r": 0.075,
                "label": "Star cluster bright star",
                "type": "missing"
            },
            {
                "id": "lvl89_planet_rings",
                "x": 0.82,
                "y": 0.2,
                "r": 0.085,
                "label": "Ringed gas giant tilt",
                "type": "shape"
            },
            {
                "id": "lvl89_antenna",
                "x": 0.48,
                "y": 0.507,
                "r": 0.085,
                "label": "Lunar base radar dish angle",
                "type": "shape"
            },
            {
                "id": "lvl89_astronaut_visor",
                "x": 0.26,
                "y": 0.513,
                "r": 0.08,
                "label": "Astronaut gold visor tint",
                "type": "color"
            },
            {
                "id": "lvl89_flag_symbol",
                "x": 0.702,
                "y": 0.607,
                "r": 0.08,
                "label": "Mission flag emblem",
                "type": "shape"
            },
            {
                "id": "lvl89_alien_rover",
                "x": 0.85,
                "y": 0.76,
                "r": 0.08,
                "label": "Lunar rover solar panel",
                "type": "color"
            },
            {
                "id": "lvl89_crater_crystal",
                "x": 0.38,
                "y": 0.84,
                "r": 0.08,
                "label": "Glowing space crystal",
                "type": "color"
            },
            {
                "id": "lvl89_satellite",
                "x": 0.62,
                "y": 0.12,
                "r": 0.075,
                "label": "Distant probe solar wing",
                "type": "missing"
            },
            {
                "id": "lvl89_base_window",
                "x": 0.45,
                "y": 0.6,
                "r": 0.075,
                "label": "Dome observation port hue",
                "type": "color"
            },
            {
                "id": "lvl89_comet",
                "x": 0.32,
                "y": 0.08,
                "r": 0.07,
                "label": "Streaking comet ice trail",
                "type": "shape"
            }
        ]
    },
    {
        "id": 90,
        "name": "Chestnut Valley Trail",
        "theme": "autumn",
        "archetype": 10,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 61,
        "description": "Explore the captivating details of Chestnut Valley Trail. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl90_balloon",
                "x": 0.78,
                "y": 0.16,
                "r": 0.085,
                "label": "Hot air balloon basket pattern",
                "type": "color"
            },
            {
                "id": "lvl90_lamp_post",
                "x": 0.12,
                "y": 0.36,
                "r": 0.08,
                "label": "Gas streetlamp glowing orb",
                "type": "missing"
            },
            {
                "id": "lvl90_bicycle_basket",
                "x": 0.28,
                "y": 0.52,
                "r": 0.08,
                "label": "Vintage bike basket flowers",
                "type": "color"
            },
            {
                "id": "lvl90_fountain",
                "x": 0.7,
                "y": 0.54,
                "r": 0.085,
                "label": "Stone fountain water tiers",
                "type": "shape"
            },
            {
                "id": "lvl90_bench_cushion",
                "x": 0.44,
                "y": 0.64,
                "r": 0.08,
                "label": "Park bench plaid scarf",
                "type": "color"
            },
            {
                "id": "lvl90_squirrel",
                "x": 0.2,
                "y": 0.78,
                "r": 0.08,
                "label": "Squirrel holding golden acorn",
                "type": "missing"
            },
            {
                "id": "lvl90_fallen_leaf",
                "x": 0.54,
                "y": 0.86,
                "r": 0.075,
                "label": "Maple leaf color gradient",
                "type": "color"
            },
            {
                "id": "lvl90_tree_foliage",
                "x": 0.88,
                "y": 0.42,
                "r": 0.075,
                "label": "Amber oak branch fullness",
                "type": "shape"
            },
            {
                "id": "lvl90_path_stone",
                "x": 0.36,
                "y": 0.88,
                "r": 0.07,
                "label": "Gravel path stepping stone",
                "type": "shape"
            }
        ]
    },
    {
        "id": 91,
        "name": "Sunken Moat Citadel",
        "theme": "medieval",
        "archetype": 11,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 61,
        "description": "Explore the captivating details of Sunken Moat Citadel. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl91_weather_flag",
                "x": 0.66,
                "y": 0.12,
                "r": 0.075,
                "label": "High tower pennant color",
                "type": "color"
            },
            {
                "id": "lvl91_banner",
                "x": 0.32,
                "y": 0.21,
                "r": 0.08,
                "label": "Royal crest heraldic lion banner",
                "type": "shape"
            },
            {
                "id": "lvl91_gargoyle",
                "x": 0.86,
                "y": 0.28,
                "r": 0.08,
                "label": "Stone gargoyle wings",
                "type": "shape"
            },
            {
                "id": "lvl91_torch",
                "x": 0.2,
                "y": 0.46,
                "r": 0.08,
                "label": "Wall sconce torch flame",
                "type": "color"
            },
            {
                "id": "lvl91_spear_tip",
                "x": 0.64,
                "y": 0.48,
                "r": 0.075,
                "label": "Guard halberd tassel",
                "type": "missing"
            },
            {
                "id": "lvl91_portcullis",
                "x": 0.5,
                "y": 0.6,
                "r": 0.085,
                "label": "Iron gate spike spikes",
                "type": "shape"
            },
            {
                "id": "lvl91_knight_shield",
                "x": 0.76,
                "y": 0.64,
                "r": 0.08,
                "label": "Guard shield cross emblem",
                "type": "color"
            },
            {
                "id": "lvl91_duck",
                "x": 0.26,
                "y": 0.86,
                "r": 0.075,
                "label": "Moat white swan",
                "type": "shape"
            },
            {
                "id": "lvl91_catapult",
                "x": 0.14,
                "y": 0.72,
                "r": 0.07,
                "label": "Siege engine winching cog",
                "type": "color"
            },
            {
                "id": "lvl91_arch_crest",
                "x": 0.5,
                "y": 0.32,
                "r": 0.07,
                "label": "Keystone crown engraving",
                "type": "shape"
            }
        ]
    },
    {
        "id": 92,
        "name": "Kyoto Moonlit Torii",
        "theme": "japan",
        "archetype": 12,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 60,
        "description": "Explore the captivating details of Kyoto Moonlit Torii. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl92_pagoda_finial",
                "x": 0.238,
                "y": 0.14,
                "r": 0.075,
                "label": "Pagoda bronze roof spire",
                "type": "shape"
            },
            {
                "id": "lvl92_cherry_branch",
                "x": 0.54,
                "y": 0.2,
                "r": 0.08,
                "label": "Sakura blossom density",
                "type": "shape"
            },
            {
                "id": "lvl92_lantern_window",
                "x": 0.72,
                "y": 0.44,
                "r": 0.075,
                "label": "Toro stone lantern lattice",
                "type": "shape"
            },
            {
                "id": "lvl92_bridge_post",
                "x": 0.38,
                "y": 0.54,
                "r": 0.075,
                "label": "Red arched bridge post cap",
                "type": "color"
            },
            {
                "id": "lvl92_bamboo_spout",
                "x": 0.14,
                "y": 0.64,
                "r": 0.075,
                "label": "Bamboo water rocker (shishi-odoshi)",
                "type": "shape"
            },
            {
                "id": "lvl92_bonsai",
                "x": 0.82,
                "y": 0.68,
                "r": 0.08,
                "label": "Bonsai ceramic pot glazing",
                "type": "color"
            },
            {
                "id": "lvl92_koi",
                "x": 0.46,
                "y": 0.82,
                "r": 0.075,
                "label": "Calico koi fish pattern",
                "type": "color"
            },
            {
                "id": "lvl92_sand_pattern",
                "x": 0.6,
                "y": 0.9,
                "r": 0.08,
                "label": "Raked dry gravel ripple count",
                "type": "shape"
            },
            {
                "id": "lvl92_torii_amulet",
                "x": 0.88,
                "y": 0.26,
                "r": 0.07,
                "label": "Torii gate sacred ribbon",
                "type": "color"
            }
        ]
    },
    {
        "id": 93,
        "name": "Sorcerer's Hidden Study",
        "theme": "alchemy",
        "archetype": 13,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 60,
        "description": "Explore the captivating details of Sorcerer's Hidden Study. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl93_telescope",
                "x": 0.68,
                "y": 0.18,
                "r": 0.075,
                "label": "Brass astrolabe dial position",
                "type": "shape"
            },
            {
                "id": "lvl93_raven",
                "x": 0.84,
                "y": 0.2,
                "r": 0.075,
                "label": "Familar raven beak key",
                "type": "missing"
            },
            {
                "id": "lvl93_candle",
                "x": 0.16,
                "y": 0.34,
                "r": 0.075,
                "label": "Floating candle wick sparks",
                "type": "color"
            },
            {
                "id": "lvl93_hourglass",
                "x": 0.36,
                "y": 0.42,
                "r": 0.075,
                "label": "Luminous hourglass sand level",
                "type": "shape"
            },
            {
                "id": "lvl93_orb",
                "x": 0.5,
                "y": 0.46,
                "r": 0.08,
                "label": "Crystal ball plasma aura",
                "type": "color"
            },
            {
                "id": "lvl93_beaker",
                "x": 0.78,
                "y": 0.52,
                "r": 0.075,
                "label": "Bubbling retort flask liquid",
                "type": "color"
            },
            {
                "id": "lvl93_spellbook",
                "x": 0.24,
                "y": 0.58,
                "r": 0.08,
                "label": "Ancient grimoire rune symbol",
                "type": "shape"
            },
            {
                "id": "lvl93_skull_gem",
                "x": 0.65,
                "y": 0.76,
                "r": 0.075,
                "label": "Relic skull eye jewel",
                "type": "color"
            },
            {
                "id": "lvl93_feather_quill",
                "x": 0.32,
                "y": 0.62,
                "r": 0.07,
                "label": "Phoenix feather ink quill",
                "type": "color"
            },
            {
                "id": "lvl93_rune_scroll",
                "x": 0.52,
                "y": 0.88,
                "r": 0.07,
                "label": "Parchment scroll wax seal",
                "type": "shape"
            }
        ]
    },
    {
        "id": 94,
        "name": "Treasure Island Galleon",
        "theme": "pirate",
        "archetype": 14,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 59,
        "description": "Explore the captivating details of Treasure Island Galleon. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl94_jolly_roger",
                "x": 0.478,
                "y": 0.173,
                "r": 0.08,
                "label": "Black mast pirate flag skull eyepatch",
                "type": "shape"
            },
            {
                "id": "lvl94_rope_pulley",
                "x": 0.64,
                "y": 0.3,
                "r": 0.075,
                "label": "Rigging rope wooden pulley",
                "type": "missing"
            },
            {
                "id": "lvl94_figurehead",
                "x": 0.8,
                "y": 0.42,
                "r": 0.08,
                "label": "Mermaid ship figurehead crown",
                "type": "color"
            },
            {
                "id": "lvl94_parrot",
                "x": 0.18,
                "y": 0.44,
                "r": 0.075,
                "label": "Parrot tail feather colors",
                "type": "color"
            },
            {
                "id": "lvl94_cannon",
                "x": 0.3,
                "y": 0.58,
                "r": 0.08,
                "label": "Gun deck bronze cannon angle",
                "type": "shape"
            },
            {
                "id": "lvl94_treasure_map",
                "x": 0.52,
                "y": 0.72,
                "r": 0.08,
                "label": "Map scroll red X mark",
                "type": "shape"
            },
            {
                "id": "lvl94_barrel_tap",
                "x": 0.74,
                "y": 0.78,
                "r": 0.075,
                "label": "Grog oak barrel spigot",
                "type": "missing"
            },
            {
                "id": "lvl94_coin_pile",
                "x": 0.36,
                "y": 0.88,
                "r": 0.075,
                "label": "Gold doubloon shining star",
                "type": "color"
            },
            {
                "id": "lvl94_compass",
                "x": 0.48,
                "y": 0.84,
                "r": 0.07,
                "label": "Brass pocket compass needle",
                "type": "shape"
            }
        ]
    },
    {
        "id": 95,
        "name": "Automaton Inventor Guild",
        "theme": "steampunk",
        "archetype": 15,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 58,
        "description": "Explore the captivating details of Automaton Inventor Guild. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl95_steam_whistle",
                "x": 0.15,
                "y": 0.18,
                "r": 0.075,
                "label": "High pressure copper whistle",
                "type": "missing"
            },
            {
                "id": "lvl95_gear_center",
                "x": 0.48,
                "y": 0.32,
                "r": 0.085,
                "label": "Large master gear spoke count",
                "type": "shape"
            },
            {
                "id": "lvl95_gauge_needle",
                "x": 0.22,
                "y": 0.36,
                "r": 0.075,
                "label": "Steam pressure dial indicator",
                "type": "shape"
            },
            {
                "id": "lvl95_copper_valve",
                "x": 0.78,
                "y": 0.42,
                "r": 0.075,
                "label": "Brass pipe shutoff wheel color",
                "type": "color"
            },
            {
                "id": "lvl95_automaton_eye",
                "x": 0.63,
                "y": 0.593,
                "r": 0.075,
                "label": "Clockwork owl monocle gem",
                "type": "color"
            },
            {
                "id": "lvl95_vacuum_tube",
                "x": 0.34,
                "y": 0.64,
                "r": 0.075,
                "label": "Glowing thermionic tube filament",
                "type": "color"
            },
            {
                "id": "lvl95_wrench",
                "x": 0.86,
                "y": 0.8,
                "r": 0.075,
                "label": "Adjustable spanner wrench size",
                "type": "shape"
            },
            {
                "id": "lvl95_blueprint_pin",
                "x": 0.5,
                "y": 0.88,
                "r": 0.075,
                "label": "Drafting board magnetic clip",
                "type": "color"
            },
            {
                "id": "lvl95_oil_can",
                "x": 0.7,
                "y": 0.82,
                "r": 0.07,
                "label": "Vintage oiler spout angle",
                "type": "shape"
            },
            {
                "id": "lvl95_goggles",
                "x": 0.28,
                "y": 0.76,
                "r": 0.07,
                "label": "Leather brass goggles lens tint",
                "type": "color"
            }
        ]
    },
    {
        "id": 96,
        "name": "Holographic District 9",
        "theme": "cyberpunk",
        "archetype": 16,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 58,
        "description": "Explore the captivating details of Holographic District 9. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl96_rooftop_antenna",
                "x": 0.6,
                "y": 0.1,
                "r": 0.07,
                "label": "Radio spire blinking beacon",
                "type": "missing"
            },
            {
                "id": "lvl96_neon_kanji",
                "x": 0.22,
                "y": 0.16,
                "r": 0.075,
                "label": "Skyscraper neon sign symbol",
                "type": "shape"
            },
            {
                "id": "lvl96_flyer_lights",
                "x": 0.69,
                "y": 0.18,
                "r": 0.075,
                "label": "Hovercar rear thruster flame",
                "type": "color"
            },
            {
                "id": "lvl96_drone_lens",
                "x": 0.46,
                "y": 0.22,
                "r": 0.07,
                "label": "Surveillance drone sensor ray",
                "type": "color"
            },
            {
                "id": "lvl96_holo_koi",
                "x": 0.84,
                "y": 0.38,
                "r": 0.075,
                "label": "Holographic giant koi fin glow",
                "type": "shape"
            },
            {
                "id": "lvl96_cyborg_visor",
                "x": 0.3,
                "y": 0.56,
                "r": 0.07,
                "label": "Street samurai cyber-implant tint",
                "type": "color"
            },
            {
                "id": "lvl96_graffiti_tag",
                "x": 0.54,
                "y": 0.66,
                "r": 0.07,
                "label": "Puddle reflection cyber tag",
                "type": "shape"
            },
            {
                "id": "lvl96_vending_can",
                "x": 0.15,
                "y": 0.74,
                "r": 0.075,
                "label": "Neon vending machine beverage",
                "type": "color"
            },
            {
                "id": "lvl96_power_cable",
                "x": 0.82,
                "y": 0.82,
                "r": 0.07,
                "label": "Overhead fiber conduit coupling",
                "type": "missing"
            }
        ]
    },
    {
        "id": 97,
        "name": "Nile Temple of Osiris",
        "theme": "egypt",
        "archetype": 17,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 57,
        "description": "Explore the captivating details of Nile Temple of Osiris. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl97_hieroglyph_bird",
                "x": 0.18,
                "y": 0.16,
                "r": 0.07,
                "label": "Wall carving sacred falcon emblem",
                "type": "shape"
            },
            {
                "id": "lvl97_scarab_gem",
                "x": 0.5,
                "y": 0.22,
                "r": 0.075,
                "label": "Winged scarab lapis lazuli jewel",
                "type": "color"
            },
            {
                "id": "lvl97_torch_bracket",
                "x": 0.82,
                "y": 0.26,
                "r": 0.07,
                "label": "Bronze wall torch flame hue",
                "type": "color"
            },
            {
                "id": "lvl97_column_lotus",
                "x": 0.36,
                "y": 0.36,
                "r": 0.07,
                "label": "Temple column lotus capital petal",
                "type": "missing"
            },
            {
                "id": "lvl97_sarcophagus_cobra",
                "x": 0.5,
                "y": 0.45,
                "r": 0.075,
                "label": "Golden pharaoh mask uraeus snake",
                "type": "shape"
            },
            {
                "id": "lvl97_ankh_inlay",
                "x": 0.74,
                "y": 0.62,
                "r": 0.07,
                "label": "Carved ankh cross gemstone",
                "type": "color"
            },
            {
                "id": "lvl97_canopic_jar",
                "x": 0.26,
                "y": 0.647,
                "r": 0.075,
                "label": "Alabaster canopic jar lid carving",
                "type": "shape"
            },
            {
                "id": "lvl97_cat_statue",
                "x": 0.84,
                "y": 0.82,
                "r": 0.07,
                "label": "Bastet black obsidian cat collar",
                "type": "shape"
            },
            {
                "id": "lvl97_urn_pattern",
                "x": 0.15,
                "y": 0.84,
                "r": 0.075,
                "label": "Clay amphora zigzag border",
                "type": "color"
            },
            {
                "id": "lvl97_gold_goblet",
                "x": 0.62,
                "y": 0.86,
                "r": 0.07,
                "label": "Offering platter gold chalice",
                "type": "missing"
            }
        ]
    },
    {
        "id": 98,
        "name": "Illusionist Jubilee Arena",
        "theme": "carnival",
        "archetype": 18,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 57,
        "description": "Explore the captivating details of Illusionist Jubilee Arena. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl98_firework_spark",
                "x": 0.52,
                "y": 0.1,
                "r": 0.07,
                "label": "Sky burst firework star trail",
                "type": "missing"
            },
            {
                "id": "lvl98_ferris_spoke",
                "x": 0.32,
                "y": 0.18,
                "r": 0.075,
                "label": "Ferris wheel gondola light star",
                "type": "color"
            },
            {
                "id": "lvl98_tent_pennant",
                "x": 0.72,
                "y": 0.24,
                "r": 0.075,
                "label": "Circus big top peak pennant",
                "type": "color"
            },
            {
                "id": "lvl98_balloon_ribbon",
                "x": 0.86,
                "y": 0.44,
                "r": 0.07,
                "label": "Cluster balloon star emblem",
                "type": "shape"
            },
            {
                "id": "lvl98_carousel_horse",
                "x": 0.52,
                "y": 0.6,
                "r": 0.075,
                "label": "Carousel steed saddle jewel",
                "type": "color"
            },
            {
                "id": "lvl98_cotton_candy",
                "x": 0.16,
                "y": 0.603,
                "r": 0.07,
                "label": "Cotton candy cart sugar cloud",
                "type": "color"
            },
            {
                "id": "lvl98_juggler_pin",
                "x": 0.66,
                "y": 0.733,
                "r": 0.07,
                "label": "Juggler's floating bowling pin",
                "type": "missing"
            },
            {
                "id": "lvl98_ticket_booth",
                "x": 0.82,
                "y": 0.763,
                "r": 0.075,
                "label": "Ticket booth awning stripe count",
                "type": "shape"
            },
            {
                "id": "lvl98_popcorn_box",
                "x": 0.38,
                "y": 0.82,
                "r": 0.07,
                "label": "Popcorn box red stripes",
                "type": "color"
            }
        ]
    },
    {
        "id": 99,
        "name": "Glacier Peak Chalet",
        "theme": "chalet",
        "archetype": 19,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 56,
        "description": "Explore the captivating details of Glacier Peak Chalet. Spot all 10 differences!",
        "differences": [
            {
                "id": "lvl99_chimney_smoke",
                "x": 0.42,
                "y": 0.18,
                "r": 0.07,
                "label": "Chimney smoke drift direction",
                "type": "shape"
            },
            {
                "id": "lvl99_weathercock",
                "x": 0.34,
                "y": 0.22,
                "r": 0.07,
                "label": "Roof ridge brass rooster",
                "type": "missing"
            },
            {
                "id": "lvl99_pine_snowcap",
                "x": 0.86,
                "y": 0.36,
                "r": 0.07,
                "label": "Fir tree heavy snow blanket",
                "type": "shape"
            },
            {
                "id": "lvl99_stag_antlers",
                "x": 0.14,
                "y": 0.387,
                "r": 0.07,
                "label": "Distant stag antler branch tips",
                "type": "shape"
            },
            {
                "id": "lvl99_shutter_carving",
                "x": 0.54,
                "y": 0.44,
                "r": 0.07,
                "label": "Wood shutter carved heart motif",
                "type": "shape"
            },
            {
                "id": "lvl99_window_candle",
                "x": 0.4,
                "y": 0.48,
                "r": 0.07,
                "label": "Attic window warm candle flame",
                "type": "missing"
            },
            {
                "id": "lvl99_snowman_scarf",
                "x": 0.78,
                "y": 0.693,
                "r": 0.075,
                "label": "Snowman knitted scarf color",
                "type": "color"
            },
            {
                "id": "lvl99_ski_poles",
                "x": 0.229,
                "y": 0.75,
                "r": 0.07,
                "label": "Leaning ski pole basket rings",
                "type": "color"
            },
            {
                "id": "lvl99_sled_runners",
                "x": 0.6,
                "y": 0.833,
                "r": 0.07,
                "label": "Wooden toboggan cushion pad",
                "type": "color"
            },
            {
                "id": "lvl99_hot_cocoa",
                "x": 0.32,
                "y": 0.88,
                "r": 0.07,
                "label": "Porch mug whipped cream drizzle",
                "type": "shape"
            }
        ]
    },
    {
        "id": 100,
        "name": "Mermaid Sunken Citadel",
        "theme": "deepcoral",
        "archetype": 20,
        "variant": 4,
        "difficulty": "Expert",
        "timeLimit": 55,
        "description": "Explore the captivating details of Mermaid Sunken Citadel. Spot all 9 differences!",
        "differences": [
            {
                "id": "lvl100_manta_markings",
                "x": 0.36,
                "y": 0.22,
                "r": 0.075,
                "label": "Giant manta wing luminous runes",
                "type": "shape"
            },
            {
                "id": "lvl100_nautilus_shell",
                "x": 0.74,
                "y": 0.32,
                "r": 0.07,
                "label": "Nautilus spiral chamber lines",
                "type": "color"
            },
            {
                "id": "lvl100_angel_fin",
                "x": 0.605,
                "y": 0.433,
                "r": 0.075,
                "label": "Emperor angelfish dorsal streamer",
                "type": "shape"
            },
            {
                "id": "lvl100_submerged_idol",
                "x": 0.16,
                "y": 0.46,
                "r": 0.07,
                "label": "Sunken temple pillar emerald eye",
                "type": "missing"
            },
            {
                "id": "lvl100_seahorse_crown",
                "x": 0.44,
                "y": 0.573,
                "r": 0.07,
                "label": "Pygmy seahorse spiked coronet",
                "type": "shape"
            },
            {
                "id": "lvl100_diver_goggles",
                "x": 0.84,
                "y": 0.68,
                "r": 0.07,
                "label": "Deep diver helmet glow color",
                "type": "color"
            },
            {
                "id": "lvl100_anemone_tips",
                "x": 0.22,
                "y": 0.78,
                "r": 0.075,
                "label": "Sea anemone bioluminescent tips",
                "type": "color"
            },
            {
                "id": "lvl100_clam_pearl",
                "x": 0.5,
                "y": 0.85,
                "r": 0.075,
                "label": "Giant clam iridescent black pearl",
                "type": "color"
            },
            {
                "id": "lvl100_hydra_polyps",
                "x": 0.78,
                "y": 0.86,
                "r": 0.07,
                "label": "Glowing branch coral polyp bud",
                "type": "missing"
            }
        ]
    }
];

window.LEVELS_DATA = LEVELS_DATA;
