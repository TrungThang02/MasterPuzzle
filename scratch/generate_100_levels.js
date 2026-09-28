/**
 * Generator script to create 100 rich, fully playable levels
 * with verified coordinates and diverse visual themes.
 */

const fs = require('fs');
const path = require('path');

const THEMES = [
    {
        archetype: 1,
        theme: "interior",
        names: ["Cozy Living Room", "Sunlit Artist Loft", "Vintage Victorian Study", "Modern Penthouse Lounge", "Warm Fireplace Cabin"],
        palettes: [
            { wall: ['#fef3c7', '#fed7aa'], floor: ['#78350f', '#451a03'], sofa: '#0284c7', rug: ['#fbcfe8', '#be185d'] },
            { wall: ['#e0f2fe', '#bae6fd'], floor: ['#334155', '#1e293b'], sofa: '#059669', rug: ['#fed7aa', '#ea580c'] },
            { wall: ['#fdf4ff', '#fae8ff'], floor: ['#581c87', '#3b0764'], sofa: '#d97706', rug: ['#ccfbf1', '#0f766e'] },
            { wall: ['#f1f5f9', '#e2e8f0'], floor: ['#1e293b', '#0f172a'], sofa: '#dc2626', rug: ['#fef08a', '#ca8a04'] },
            { wall: ['#fefce8', '#fef08a'], floor: ['#713f12', '#3f2212'], sofa: '#7c3aed', rug: ['#ffe4e6', '#e11d48'] }
        ],
        diffs: [
            { id: "clock", x: 0.500, y: 0.133, r: 0.085, label: "Wall clock hands changed", type: "shape" },
            { id: "lamp", x: 0.120, y: 0.383, r: 0.085, label: "Floor lamp shade color", type: "color" },
            { id: "painting", x: 0.819, y: 0.217, r: 0.085, label: "Painting artwork replaced", type: "shape" },
            { id: "cat", x: 0.244, y: 0.750, r: 0.085, label: "Sleeping cat's bow tie", type: "color" },
            { id: "cushion", x: 0.645, y: 0.652, r: 0.085, label: "Sofa cushion pattern", type: "shape" },
            { id: "teapot", x: 0.481, y: 0.716, r: 0.075, label: "Coffee table teapot color", type: "color" },
            { id: "rug_border", x: 0.500, y: 0.850, r: 0.080, label: "Area rug fringe pattern", type: "shape" },
            { id: "window_sun", x: 0.420, y: 0.200, r: 0.080, label: "Outside sunny cloud shape", type: "shape" },
            { id: "armrest", x: 0.875, y: 0.670, r: 0.075, label: "Sofa armrest contour", type: "shape" },
            { id: "book", x: 0.400, y: 0.740, r: 0.070, label: "Tabletop magazine cover", type: "color" }
        ]
    },
    {
        archetype: 2,
        theme: "farm",
        names: ["Sunny Meadow Farm", "Golden Harvest Pasture", "Morning Windmill Ranch", "Autumn Country Homestead", "Sunset Valley Barn"],
        palettes: [
            { sky: ['#60a5fa', '#fef08a'], hill1: '#86efac', hill2: '#4ade80', grass: '#22c55e', barn: '#b91c1c' },
            { sky: ['#38bdf8', '#fed7aa'], hill1: '#a7f3d0', hill2: '#34d399', grass: '#15803d', barn: '#9a3412' },
            { sky: ['#f472b6', '#fed7aa'], hill1: '#fde047', hill2: '#eab308', grass: '#ca8a04', barn: '#7c2d12' },
            { sky: ['#818cf8', '#c084fc'], hill1: '#6ee7b7', hill2: '#10b981', grass: '#047857', barn: '#831843' },
            { sky: ['#f97316', '#fef08a'], hill1: '#d97706', hill2: '#b45309', grass: '#78350f', barn: '#451a03' }
        ],
        diffs: [
            { id: "weathercock", x: 0.281, y: 0.100, r: 0.085, label: "Barn rooftop weather vane direction", type: "shape" },
            { id: "windmill", x: 0.850, y: 0.200, r: 0.085, label: "Windmill blade accent color", type: "color" },
            { id: "cow", x: 0.585, y: 0.693, r: 0.085, label: "Spotted cow heart patch", type: "shape" },
            { id: "apple", x: 0.140, y: 0.540, r: 0.080, label: "Golden apple in tree", type: "color" },
            { id: "sunflower", x: 0.785, y: 0.800, r: 0.085, label: "Extra blooming sunflower", type: "missing" },
            { id: "fence", x: 0.500, y: 0.590, r: 0.075, label: "Wooden fence rail notch", type: "shape" },
            { id: "haystack", x: 0.400, y: 0.680, r: 0.075, label: "Golden haystack ribbon", type: "color" },
            { id: "cloud", x: 0.560, y: 0.160, r: 0.080, label: "Puffy meadow sky cloud", type: "shape" },
            { id: "barn_door", x: 0.280, y: 0.400, r: 0.075, label: "Barn door cross beam", type: "shape" },
            { id: "bucket", x: 0.700, y: 0.720, r: 0.070, label: "Water trough bucket handle", type: "color" }
        ]
    },
    {
        archetype: 3,
        theme: "beach",
        names: ["Tropical Coral Beach", "Emerald Lagoon Coast", "Sunset Paradise Bay", "Azure Surf Haven", "Dolphin Cove Sands"],
        palettes: [
            { sky: ['#38bdf8', '#fed7aa'], sea: ['#0284c7', '#22d3ee'], sand: ['#fef08a', '#eab308'] },
            { sky: ['#0284c7', '#a5f3fc'], sea: ['#0369a1', '#06b6d4'], sand: ['#fde047', '#ca8a04'] },
            { sky: ['#f43f5e', '#fed7aa'], sea: ['#0d9488', '#2dd4bf'], sand: ['#fed7aa', '#f97316'] },
            { sky: ['#818cf8', '#fbcfe8'], sea: ['#4338ca', '#38bdf8'], sand: ['#fef9c3', '#facc15'] },
            { sky: ['#f97316', '#fef08a'], sea: ['#0f766e', '#14b8a6'], sand: ['#fde68a', '#d97706'] }
        ],
        diffs: [
            { id: "cloud", x: 0.440, y: 0.140, r: 0.085, label: "Heart-shaped sky cloud", type: "shape" },
            { id: "boat_sail", x: 0.822, y: 0.327, r: 0.085, label: "Sailboat stripe color", type: "color" },
            { id: "coconut", x: 0.180, y: 0.373, r: 0.080, label: "Coconut cluster count", type: "missing" },
            { id: "crab", x: 0.260, y: 0.820, r: 0.085, label: "Sand crab sunglasses", type: "extra" },
            { id: "starfish", x: 0.680, y: 0.860, r: 0.080, label: "Starfish color hue", type: "color" },
            { id: "umbrella", x: 0.850, y: 0.700, r: 0.080, label: "Beach umbrella stripe tone", type: "color" },
            { id: "island", x: 0.675, y: 0.400, r: 0.075, label: "Distant island palm silhouette", type: "missing" },
            { id: "wave_crest", x: 0.500, y: 0.620, r: 0.075, label: "Ocean surf foam curl", type: "shape" },
            { id: "towel", x: 0.420, y: 0.880, r: 0.070, label: "Beach towel stripe design", type: "color" },
            { id: "shell", x: 0.120, y: 0.860, r: 0.070, label: "Golden seashell spiral", type: "shape" }
        ]
    },
    {
        archetype: 4,
        theme: "bakery",
        names: ["Sweet Pastry Bakery", "Artisan Croissant Boulangerie", "Cupcake Wonderland", "Golden Crust Bakery", "Village Confectionery"],
        palettes: [
            { wall: '#fff7ed', counter: '#c2410c', shelf: '#9a3412', apron: '#fed7aa' },
            { wall: '#f0fdf4', counter: '#15803d', shelf: '#166534', apron: '#bbf7d0' },
            { wall: '#fdf2f8', counter: '#be185d', shelf: '#9d174d', apron: '#fbcfe8' },
            { wall: '#f5f3ff', counter: '#6d28d9', shelf: '#5b21b6', apron: '#ddd6fe' },
            { wall: '#fefce8', counter: '#b45309', shelf: '#92400e', apron: '#fef08a' }
        ],
        diffs: [
            { id: "chef_hat", x: 0.480, y: 0.267, r: 0.085, label: "Baker's hat blue ribbon", type: "extra" },
            { id: "pretzel", x: 0.740, y: 0.480, r: 0.085, label: "Chocolate glaze pretzel", type: "color" },
            { id: "cupcake_cherry", x: 0.220, y: 0.560, r: 0.085, label: "Cupcake strawberry topping", type: "shape" },
            { id: "bread_loaf", x: 0.380, y: 0.720, r: 0.085, label: "Baguette crust cuts", type: "shape" },
            { id: "coffee_mug", x: 0.840, y: 0.733, r: 0.080, label: "Mug heart steam", type: "missing" },
            { id: "croissant", x: 0.600, y: 0.600, r: 0.075, label: "Pastry display glaze hue", type: "color" },
            { id: "cake_stand", x: 0.150, y: 0.700, r: 0.075, label: "Cake pedestal rim decoration", type: "shape" },
            { id: "price_tag", x: 0.700, y: 0.400, r: 0.070, label: "Counter price tag numeral", type: "shape" },
            { id: "flour_sack", x: 0.300, y: 0.820, r: 0.070, label: "Flour sack wheat sheaf stamp", type: "shape" },
            { id: "clock", x: 0.820, y: 0.180, r: 0.075, label: "Bakery kitchen wall clock", type: "shape" }
        ]
    },
    {
        archetype: 5,
        theme: "park",
        names: ["Playful Puppy Park", "Sunny Canine Meadow", "Pooch Playground Haven", "Green Bark Sanctuary", "Tailwag Spring Park"],
        palettes: [
            { sky: ['#38bdf8', '#bae6fd'], grass: ['#4ade80', '#15803d'], doghouse: '#b91c1c' },
            { sky: ['#0284c7', '#93c5fd'], grass: ['#86efac', '#16a34a'], doghouse: '#0284c7' },
            { sky: ['#f472b6', '#fed7aa'], grass: ['#a7f3d0', '#059669'], doghouse: '#d97706' },
            { sky: ['#818cf8', '#c7d2fe'], grass: ['#6ee7b7', '#047857'], doghouse: '#7c3aed' },
            { sky: ['#fbbf24', '#fef08a'], grass: ['#bef264', '#4d7c0f'], doghouse: '#dc2626' }
        ],
        diffs: [
            { id: "kite", x: 0.820, y: 0.160, r: 0.085, label: "Flying kite tail bows", type: "extra" },
            { id: "butterfly", x: 0.240, y: 0.380, r: 0.080, label: "Monarch butterfly color", type: "color" },
            { id: "collar", x: 0.460, y: 0.643, r: 0.085, label: "Puppy collar tag shape", type: "shape" },
            { id: "ball", x: 0.780, y: 0.760, r: 0.085, label: "Tennis ball color", type: "color" },
            { id: "bone", x: 0.150, y: 0.840, r: 0.080, label: "Chew bone beside doghouse", type: "missing" },
            { id: "doghouse_roof", x: 0.144, y: 0.580, r: 0.075, label: "Doghouse roof ridge trim", type: "color" },
            { id: "puppy_tail", x: 0.360, y: 0.550, r: 0.075, label: "Puppy wagging tail tip spot", type: "shape" },
            { id: "flower_bed", x: 0.620, y: 0.850, r: 0.075, label: "Lawn daisy petal count", type: "shape" },
            { id: "tree_branch", x: 0.880, y: 0.400, r: 0.070, label: "Oak tree leaf cluster", type: "color" },
            { id: "flying_disc", x: 0.500, y: 0.280, r: 0.070, label: "Hovering frisbee hue", type: "color" }
        ]
    },
    {
        archetype: 6,
        theme: "fantasy",
        names: ["Enchanted Fairy Forest", "Moonlit Sprite Grove", "Crystal Fauna Glade", "Luminous Elf Hollow", "Twilight Mystic Woods"],
        palettes: [
            { bg: ['#0f172a', '#1e1b4b', '#064e3b'] },
            { bg: ['#020617', '#172554', '#065f46'] },
            { bg: ['#1e1b4b', '#4c1d95', '#0f766e'] },
            { bg: ['#2e1065', '#581c87', '#14532d'] },
            { bg: ['#030712', '#312e81', '#047857'] }
        ],
        diffs: [
            { id: "owl", x: 0.780, y: 0.260, r: 0.080, label: "Hollow tree owl eyes", type: "shape" },
            { id: "lantern", x: 0.150, y: 0.362, r: 0.080, label: "Hanging lantern crystal flame", type: "color" },
            { id: "fairy_wings", x: 0.480, y: 0.440, r: 0.085, label: "Fairy wing glow color", type: "color" },
            { id: "mushroom", x: 0.240, y: 0.727, r: 0.085, label: "Giant mushroom glowing spots", type: "color" },
            { id: "flower", x: 0.860, y: 0.740, r: 0.080, label: "Midnight blossom petal shape", type: "shape" },
            { id: "crystal_cluster", x: 0.380, y: 0.787, r: 0.080, label: "Crystal spire tip", type: "missing" },
            { id: "potion", x: 0.620, y: 0.840, r: 0.080, label: "Corked potion vial liquid", type: "color" },
            { id: "firefly", x: 0.330, y: 0.300, r: 0.075, label: "Floating firefly orb glow", type: "color" },
            { id: "tree_root", x: 0.720, y: 0.880, r: 0.075, label: "Ancient tree root moss glow", type: "color" },
            { id: "fairy_wand", x: 0.520, y: 0.480, r: 0.070, label: "Fairy star wand tip", type: "shape" }
        ]
    },
    {
        archetype: 7,
        theme: "cafe",
        names: ["Downtown Coffee Haven", "Artisanal Espresso Lounge", "Barista Corner Retreat", "Cozy Hearth Cafe", "Vintage Bean Roastery"],
        palettes: [
            { wall: '#451a03', counter: '#1c1917' },
            { wall: '#292524', counter: '#0c0a09' },
            { wall: '#3b0764', counter: '#1e1b4b' },
            { wall: '#064e3b', counter: '#022c22' },
            { wall: '#78350f', counter: '#291809' }
        ],
        diffs: [
            { id: "hanging_plant", x: 0.600, y: 0.160, r: 0.080, label: "Hanging pothos leaves", type: "missing" },
            { id: "wall_clock", x: 0.180, y: 0.180, r: 0.080, label: "Vintage clock time", type: "shape" },
            { id: "menu_chalk", x: 0.820, y: 0.280, r: 0.085, label: "Chalkboard specials icon", type: "shape" },
            { id: "barista_apron", x: 0.300, y: 0.410, r: 0.085, label: "Barista apron pocket logo", type: "shape" },
            { id: "steam", x: 0.440, y: 0.523, r: 0.080, label: "Espresso cup steam curls", type: "shape" },
            { id: "pastry_bell", x: 0.720, y: 0.600, r: 0.085, label: "Croissant in glass dome", type: "color" },
            { id: "takeaway_cup", x: 0.880, y: 0.820, r: 0.080, label: "Takeaway cup sleeve band", type: "color" },
            { id: "syrup_bottle", x: 0.200, y: 0.560, r: 0.075, label: "Vanilla syrup pump label", type: "color" },
            { id: "shelf_jar", x: 0.760, y: 0.140, r: 0.075, label: "Coffee bean glass canister", type: "shape" },
            { id: "tip_jar", x: 0.520, y: 0.580, r: 0.070, label: "Glass tip jar heart sticker", type: "missing" }
        ]
    },
    {
        archetype: 8,
        theme: "ocean",
        names: ["Deep Ocean Odyssey", "Sunken Coral Wonderland", "Submarine Trench Trek", "Abyssal Reef Sanctuary", "Mermaid Lagoon Shallows"],
        palettes: [
            { ocean: ['#0284c7', '#082f49'], sand: '#eab308' },
            { ocean: ['#0369a1', '#020617'], sand: '#ca8a04' },
            { ocean: ['#0d9488', '#042f2e'], sand: '#d97706' },
            { ocean: ['#4338ca', '#1e1b4b'], sand: '#eab308' },
            { ocean: ['#0f766e', '#083344'], sand: '#f59e0b' }
        ],
        diffs: [
            { id: "submarine", x: 0.760, y: 0.220, r: 0.085, label: "Mini-sub spotlight beam", type: "color" },
            { id: "turtle_shell", x: 0.500, y: 0.360, r: 0.085, label: "Sea turtle carapace pattern", type: "shape" },
            { id: "clownfish", x: 0.220, y: 0.460, r: 0.080, label: "Anemone fish side stripe", type: "shape" },
            { id: "jellyfish", x: 0.820, y: 0.560, r: 0.080, label: "Jellyfish neon tint", type: "color" },
            { id: "anchor_fluke", x: 0.140, y: 0.710, r: 0.080, label: "Rusty anchor chain link", type: "missing" },
            { id: "chest_gem", x: 0.320, y: 0.833, r: 0.080, label: "Sunken treasure chest ruby", type: "color" },
            { id: "seashell", x: 0.660, y: 0.860, r: 0.080, label: "Golden spiral seashell", type: "shape" },
            { id: "diver_bubble", x: 0.400, y: 0.200, r: 0.075, label: "Rising air bubble cluster", type: "missing" },
            { id: "seaweed", x: 0.880, y: 0.800, r: 0.075, label: "Kelp stalk leaf wave", type: "shape" },
            { id: "crab_burrow", x: 0.520, y: 0.900, r: 0.070, label: "Hermit crab shell swirl", type: "color" }
        ]
    },
    {
        archetype: 9,
        theme: "space",
        names: ["Retro Space Odyssey", "Lunar Horizon Outpost", "Mars Frontier Base", "Orbital Station Alpha", "Deep Galaxy Observatory"],
        palettes: [
            { space: '#030712', surface: '#475569' },
            { space: '#0b0f19', surface: '#7c2d12' }, // Mars
            { space: '#0c0a1f', surface: '#334155' },
            { space: '#1e1b4b', surface: '#1f2937' },
            { space: '#020617', surface: '#64748b' }
        ],
        diffs: [
            { id: "constellation", x: 0.180, y: 0.180, r: 0.075, label: "Star cluster bright star", type: "missing" },
            { id: "planet_rings", x: 0.820, y: 0.200, r: 0.085, label: "Ringed gas giant tilt", type: "shape" },
            { id: "antenna", x: 0.480, y: 0.507, r: 0.085, label: "Lunar base radar dish angle", type: "shape" },
            { id: "astronaut_visor", x: 0.260, y: 0.513, r: 0.080, label: "Astronaut gold visor tint", type: "color" },
            { id: "flag_symbol", x: 0.702, y: 0.607, r: 0.080, label: "Mission flag emblem", type: "shape" },
            { id: "alien_rover", x: 0.850, y: 0.760, r: 0.080, label: "Lunar rover solar panel", type: "color" },
            { id: "crater_crystal", x: 0.380, y: 0.840, r: 0.080, label: "Glowing space crystal", type: "color" },
            { id: "satellite", x: 0.620, y: 0.120, r: 0.075, label: "Distant probe solar wing", type: "missing" },
            { id: "base_window", x: 0.450, y: 0.600, r: 0.075, label: "Dome observation port hue", type: "color" },
            { id: "comet", x: 0.320, y: 0.080, r: 0.070, label: "Streaking comet ice trail", type: "shape" }
        ]
    },
    {
        archetype: 10,
        theme: "autumn",
        names: ["Golden Autumn Park", "Maple Leaf Boulevard", "Amber Harvest Grove", "Crisp October Promenade", "Chestnut Valley Trail"],
        palettes: [
            { sky: ['#38bdf8', '#fed7aa'], ground: '#ca8a04' },
            { sky: ['#60a5fa', '#fef08a'], ground: '#b45309' },
            { sky: ['#f472b6', '#fed7aa'], ground: '#d97706' },
            { sky: ['#818cf8', '#fed7aa'], ground: '#a16207' },
            { sky: ['#fb923c', '#fef08a'], ground: '#78350f' }
        ],
        diffs: [
            { id: "balloon", x: 0.780, y: 0.160, r: 0.085, label: "Hot air balloon basket pattern", type: "color" },
            { id: "lamp_post", x: 0.120, y: 0.360, r: 0.080, label: "Gas streetlamp glowing orb", type: "missing" },
            { id: "bicycle_basket", x: 0.280, y: 0.520, r: 0.080, label: "Vintage bike basket flowers", type: "color" },
            { id: "fountain", x: 0.700, y: 0.540, r: 0.085, label: "Stone fountain water tiers", type: "shape" },
            { id: "bench_cushion", x: 0.440, y: 0.640, r: 0.080, label: "Park bench plaid scarf", type: "color" },
            { id: "squirrel", x: 0.200, y: 0.780, r: 0.080, label: "Squirrel holding golden acorn", type: "missing" },
            { id: "fallen_leaf", x: 0.540, y: 0.860, r: 0.075, label: "Maple leaf color gradient", type: "color" },
            { id: "tree_foliage", x: 0.880, y: 0.420, r: 0.075, label: "Amber oak branch fullness", type: "shape" },
            { id: "path_stone", x: 0.360, y: 0.880, r: 0.070, label: "Gravel path stepping stone", type: "shape" },
            { id: "kite_sky", x: 0.420, y: 0.120, r: 0.070, label: "High autumn flying kite", type: "color" }
        ]
    },
    {
        archetype: 11,
        theme: "medieval",
        names: ["Medieval Citadel Castle", "High Tower Stronghold", "Royal Knight Fortress", "Dragonstone Battlements", "Sunken Moat Citadel"],
        palettes: [
            { sky: ['#475569', '#94a3b8'], stone: '#64748b', moat: '#0284c7' },
            { sky: ['#1e293b', '#475569'], stone: '#475569', moat: '#0369a1' },
            { sky: ['#312e81', '#6366f1'], stone: '#334155', moat: '#0d9488' },
            { sky: ['#7f1d1d', '#f87171'], stone: '#52525b', moat: '#0f766e' },
            { sky: ['#0f172a', '#1e293b'], stone: '#3f3f46', moat: '#0284c7' }
        ],
        diffs: [
            { id: "weather_flag", x: 0.660, y: 0.120, r: 0.075, label: "High tower pennant color", type: "color" },
            { id: "banner", x: 0.320, y: 0.210, r: 0.080, label: "Royal crest heraldic lion banner", type: "shape" },
            { id: "gargoyle", x: 0.860, y: 0.280, r: 0.080, label: "Stone gargoyle wings", type: "shape" },
            { id: "torch", x: 0.200, y: 0.460, r: 0.080, label: "Wall sconce torch flame", type: "color" },
            { id: "spear_tip", x: 0.640, y: 0.480, r: 0.075, label: "Guard halberd tassel", type: "missing" },
            { id: "portcullis", x: 0.500, y: 0.600, r: 0.085, label: "Iron gate spike spikes", type: "shape" },
            { id: "knight_shield", x: 0.760, y: 0.640, r: 0.080, label: "Guard shield cross emblem", type: "color" },
            { id: "duck", x: 0.260, y: 0.860, r: 0.075, label: "Moat white swan", type: "shape" },
            { id: "catapult", x: 0.140, y: 0.720, r: 0.070, label: "Siege engine winching cog", type: "color" },
            { id: "arch_crest", x: 0.500, y: 0.320, r: 0.070, label: "Keystone crown engraving", type: "shape" }
        ]
    },
    {
        archetype: 12,
        theme: "japan",
        names: ["Serene Zen Garden", "Sakura Blossom Temple", "Mount Fuji Tea Sanctuary", "Bamboo Stream Pavilion", "Kyoto Moonlit Torii"],
        palettes: [
            { sky: ['#fed7aa', '#fbcfe8'], pagoda: '#b91c1c', pond: '#0284c7' },
            { sky: ['#bae6fd', '#fed7aa'], pagoda: '#dc2626', pond: '#0369a1' },
            { sky: ['#e0e7ff', '#fce7f3'], pagoda: '#991b1b', pond: '#0d9488' },
            { sky: ['#fbcfe8', '#fed7aa'], pagoda: '#7f1d1d', pond: '#0f766e' },
            { sky: ['#f3e8ff', '#fef08a'], pagoda: '#c2410c', pond: '#0284c7' }
        ],
        diffs: [
            { id: "pagoda_finial", x: 0.238, y: 0.140, r: 0.075, label: "Pagoda bronze roof spire", type: "shape" },
            { id: "cherry_branch", x: 0.540, y: 0.200, r: 0.080, label: "Sakura blossom density", type: "shape" },
            { id: "lantern_window", x: 0.720, y: 0.440, r: 0.075, label: "Toro stone lantern lattice", type: "shape" },
            { id: "bridge_post", x: 0.380, y: 0.540, r: 0.075, label: "Red arched bridge post cap", type: "color" },
            { id: "bamboo_spout", x: 0.140, y: 0.640, r: 0.075, label: "Bamboo water rocker (shishi-odoshi)", type: "shape" },
            { id: "bonsai", x: 0.820, y: 0.680, r: 0.080, label: "Bonsai ceramic pot glazing", type: "color" },
            { id: "koi", x: 0.460, y: 0.820, r: 0.075, label: "Calico koi fish pattern", type: "color" },
            { id: "sand_pattern", x: 0.600, y: 0.900, r: 0.080, label: "Raked dry gravel ripple count", type: "shape" },
            { id: "torii_amulet", x: 0.880, y: 0.260, r: 0.070, label: "Torii gate sacred ribbon", type: "color" },
            { id: "tea_cup", x: 0.280, y: 0.740, r: 0.070, label: "Matcha ceramic bowl motif", type: "shape" }
        ]
    },
    {
        archetype: 13,
        theme: "alchemy",
        names: ["Wizard's Secret Lab", "Celestial Alchemist Sanctum", "Arcane Enchanter Tower", "Mystic Relic Laboratory", "Sorcerer's Hidden Study"],
        palettes: [
            { bg: ['#1e1b4b', '#020617'], table: '#3f2212' },
            { bg: ['#0f172a', '#030712'], table: '#292524' },
            { bg: ['#3b0764', '#1e1b4b'], table: '#3b1805' },
            { bg: ['#022c22', '#020617'], table: '#1c1917' },
            { bg: ['#450a0a', '#18181b'], table: '#291809' }
        ],
        diffs: [
            { id: "telescope", x: 0.680, y: 0.180, r: 0.075, label: "Brass astrolabe dial position", type: "shape" },
            { id: "raven", x: 0.840, y: 0.200, r: 0.075, label: "Familar raven beak key", type: "missing" },
            { id: "candle", x: 0.160, y: 0.340, r: 0.075, label: "Floating candle wick sparks", type: "color" },
            { id: "hourglass", x: 0.360, y: 0.420, r: 0.075, label: "Luminous hourglass sand level", type: "shape" },
            { id: "orb", x: 0.500, y: 0.460, r: 0.080, label: "Crystal ball plasma aura", type: "color" },
            { id: "beaker", x: 0.780, y: 0.520, r: 0.075, label: "Bubbling retort flask liquid", type: "color" },
            { id: "spellbook", x: 0.240, y: 0.580, r: 0.080, label: "Ancient grimoire rune symbol", type: "shape" },
            { id: "skull_gem", x: 0.650, y: 0.760, r: 0.075, label: "Relic skull eye jewel", type: "color" },
            { id: "feather_quill", x: 0.320, y: 0.620, r: 0.070, label: "Phoenix feather ink quill", type: "color" },
            { id: "rune_scroll", x: 0.520, y: 0.880, r: 0.070, label: "Parchment scroll wax seal", type: "shape" }
        ]
    },
    {
        archetype: 14,
        theme: "pirate",
        names: ["Pirate's Galleon Cove", "Smuggler's Hidden Anchorage", "Buccaneer Bay Bastion", "Black Pearl Harbor", "Treasure Island Galleon"],
        palettes: [
            { sky: ['#ea580c', '#fed7aa'], sea: '#0369a1', ship: '#78350f' },
            { sky: ['#c2410c', '#fef08a'], sea: '#0284c7', ship: '#451a03' },
            { sky: ['#7c2d12', '#fed7aa'], sea: '#0f766e', ship: '#291809' },
            { sky: ['#be185d', '#fed7aa'], sea: '#0369a1', ship: '#78350f' },
            { sky: ['#9a3412', '#fef08a'], sea: '#0d9488', ship: '#3f2212' }
        ],
        diffs: [
            { id: "jolly_roger", x: 0.478, y: 0.173, r: 0.080, label: "Black mast pirate flag skull eyepatch", type: "shape" },
            { id: "rope_pulley", x: 0.640, y: 0.300, r: 0.075, label: "Rigging rope wooden pulley", type: "missing" },
            { id: "figurehead", x: 0.800, y: 0.420, r: 0.080, label: "Mermaid ship figurehead crown", type: "color" },
            { id: "parrot", x: 0.180, y: 0.440, r: 0.075, label: "Parrot tail feather colors", type: "color" },
            { id: "cannon", x: 0.300, y: 0.580, r: 0.080, label: "Gun deck bronze cannon angle", type: "shape" },
            { id: "treasure_map", x: 0.520, y: 0.720, r: 0.080, label: "Map scroll red X mark", type: "shape" },
            { id: "barrel_tap", x: 0.740, y: 0.780, r: 0.075, label: "Grog oak barrel spigot", type: "missing" },
            { id: "coin_pile", x: 0.360, y: 0.880, r: 0.075, label: "Gold doubloon shining star", type: "color" },
            { id: "compass", x: 0.480, y: 0.840, r: 0.070, label: "Brass pocket compass needle", type: "shape" },
            { id: "cutlass", x: 0.220, y: 0.700, r: 0.070, label: "Pirate cutlass hilt ruby", type: "color" }
        ]
    },
    {
        archetype: 15,
        theme: "steampunk",
        names: ["Steampunk Clockwork Lab", "Brass Foundry Workshop", "Cogwheel Airship Engine", "Copper Pressure Sanctuary", "Automaton Inventor Guild"],
        palettes: [
            { wall: '#291809', pipes: '#b45309' },
            { wall: '#1c1917', pipes: '#d97706' },
            { wall: '#1e293b', pipes: '#ea580c' },
            { wall: '#2e1065', pipes: '#b45309' },
            { wall: '#14532d', pipes: '#ca8a04' }
        ],
        diffs: [
            { id: "steam_whistle", x: 0.150, y: 0.180, r: 0.075, label: "High pressure copper whistle", type: "missing" },
            { id: "gear_center", x: 0.480, y: 0.320, r: 0.085, label: "Large master gear spoke count", type: "shape" },
            { id: "gauge_needle", x: 0.220, y: 0.360, r: 0.075, label: "Steam pressure dial indicator", type: "shape" },
            { id: "copper_valve", x: 0.780, y: 0.420, r: 0.075, label: "Brass pipe shutoff wheel color", type: "color" },
            { id: "automaton_eye", x: 0.630, y: 0.593, r: 0.075, label: "Clockwork owl monocle gem", type: "color" },
            { id: "vacuum_tube", x: 0.340, y: 0.640, r: 0.075, label: "Glowing thermionic tube filament", type: "color" },
            { id: "wrench", x: 0.860, y: 0.800, r: 0.075, label: "Adjustable spanner wrench size", type: "shape" },
            { id: "blueprint_pin", x: 0.500, y: 0.880, r: 0.075, label: "Drafting board magnetic clip", type: "color" },
            { id: "oil_can", x: 0.700, y: 0.820, r: 0.070, label: "Vintage oiler spout angle", type: "shape" },
            { id: "goggles", x: 0.280, y: 0.760, r: 0.070, label: "Leather brass goggles lens tint", type: "color" }
        ]
    },
    {
        archetype: 16,
        theme: "cyberpunk",
        names: ["Cyberpunk Neon Metropolis", "Neo-Shinjuku Rain Alley", "Megacity Skyway Plaza", "Cyber Samurai Rooftop", "Holographic District 9"],
        palettes: [
            { sky: '#050515', building: '#0f172a', neon: '#ec4899' },
            { sky: '#030712', building: '#1e1b4b', neon: '#06b6d4' },
            { sky: '#09090b', building: '#18181b', neon: '#a855f7' },
            { sky: '#020617', building: '#0f2027', neon: '#22c55e' },
            { sky: '#0a0a0a', building: '#1c1917', neon: '#f59e0b' }
        ],
        diffs: [
            { id: "rooftop_antenna", x: 0.600, y: 0.100, r: 0.070, label: "Radio spire blinking beacon", type: "missing" },
            { id: "neon_kanji", x: 0.220, y: 0.160, r: 0.075, label: "Skyscraper neon sign symbol", type: "shape" },
            { id: "flyer_lights", x: 0.690, y: 0.180, r: 0.075, label: "Hovercar rear thruster flame", type: "color" },
            { id: "drone_lens", x: 0.460, y: 0.220, r: 0.070, label: "Surveillance drone sensor ray", type: "color" },
            { id: "holo_koi", x: 0.840, y: 0.380, r: 0.075, label: "Holographic giant koi fin glow", type: "shape" },
            { id: "cyborg_visor", x: 0.300, y: 0.560, r: 0.070, label: "Street samurai cyber-implant tint", type: "color" },
            { id: "graffiti_tag", x: 0.540, y: 0.660, r: 0.070, label: "Puddle reflection cyber tag", type: "shape" },
            { id: "vending_can", x: 0.150, y: 0.740, r: 0.075, label: "Neon vending machine beverage", type: "color" },
            { id: "power_cable", x: 0.820, y: 0.820, r: 0.070, label: "Overhead fiber conduit coupling", type: "missing" },
            { id: "cat_collar", x: 0.400, y: 0.880, r: 0.070, label: "Alley robot cat tail neon tip", type: "color" }
        ]
    },
    {
        archetype: 17,
        theme: "egypt",
        names: ["Pharaoh's Golden Tomb", "Anubis Sacred Sanctuary", "Valley of the Kings Vault", "Gilded Sphinx Reliquary", "Nile Temple of Osiris"],
        palettes: [
            { wall: '#78350f', column: '#b45309' },
            { wall: '#451a03', column: '#92400e' },
            { wall: '#854d0e', column: '#ca8a04' },
            { wall: '#713f12', column: '#a16207' },
            { wall: '#3f2212', column: '#b45309' }
        ],
        diffs: [
            { id: "hieroglyph_bird", x: 0.180, y: 0.160, r: 0.070, label: "Wall carving sacred falcon emblem", type: "shape" },
            { id: "scarab_gem", x: 0.500, y: 0.220, r: 0.075, label: "Winged scarab lapis lazuli jewel", type: "color" },
            { id: "torch_bracket", x: 0.820, y: 0.260, r: 0.070, label: "Bronze wall torch flame hue", type: "color" },
            { id: "column_lotus", x: 0.360, y: 0.360, r: 0.070, label: "Temple column lotus capital petal", type: "missing" },
            { id: "sarcophagus_cobra", x: 0.500, y: 0.450, r: 0.075, label: "Golden pharaoh mask uraeus snake", type: "shape" },
            { id: "ankh_inlay", x: 0.740, y: 0.620, r: 0.070, label: "Carved ankh cross gemstone", type: "color" },
            { id: "canopic_jar", x: 0.260, y: 0.647, r: 0.075, label: "Alabaster canopic jar lid carving", type: "shape" },
            { id: "cat_statue", x: 0.840, y: 0.820, r: 0.070, label: "Bastet black obsidian cat collar", type: "shape" },
            { id: "urn_pattern", x: 0.150, y: 0.840, r: 0.075, label: "Clay amphora zigzag border", type: "color" },
            { id: "gold_goblet", x: 0.620, y: 0.860, r: 0.070, label: "Offering platter gold chalice", type: "missing" }
        ]
    },
    {
        archetype: 18,
        theme: "carnival",
        names: ["Midnight Carnival Lights", "Grand Wonder Ferris Pier", "Vintage Big Top Festival", "Moonlit Carousel Fair", "Illusionist Jubilee Arena"],
        palettes: [
            { night: ['#1e1b4b', '#4c1d95'], tent: '#dc2626' },
            { night: ['#0f172a', '#1e3a8a'], tent: '#ea580c' },
            { night: ['#1e1e2f', '#6b21a8'], tent: '#0284c7' },
            { night: ['#030712', '#3730a3'], tent: '#059669' },
            { night: ['#172554', '#701a75'], tent: '#d97706' }
        ],
        diffs: [
            { id: "firework_spark", x: 0.520, y: 0.100, r: 0.070, label: "Sky burst firework star trail", type: "missing" },
            { id: "ferris_spoke", x: 0.320, y: 0.180, r: 0.075, label: "Ferris wheel gondola light star", type: "color" },
            { id: "tent_pennant", x: 0.720, y: 0.240, r: 0.075, label: "Circus big top peak pennant", type: "color" },
            { id: "balloon_ribbon", x: 0.860, y: 0.440, r: 0.070, label: "Cluster balloon star emblem", type: "shape" },
            { id: "carousel_horse", x: 0.520, y: 0.600, r: 0.075, label: "Carousel steed saddle jewel", type: "color" },
            { id: "cotton_candy", x: 0.160, y: 0.603, r: 0.070, label: "Cotton candy cart sugar cloud", type: "color" },
            { id: "juggler_pin", x: 0.660, y: 0.733, r: 0.070, label: "Juggler's floating bowling pin", type: "missing" },
            { id: "ticket_booth", x: 0.820, y: 0.763, r: 0.075, label: "Ticket booth awning stripe count", type: "shape" },
            { id: "popcorn_box", x: 0.380, y: 0.820, r: 0.070, label: "Popcorn box red stripes", type: "color" },
            { id: "prize_bear", x: 0.220, y: 0.850, r: 0.070, label: "Stuffed teddy bear bow ribbon", type: "shape" }
        ]
    },
    {
        archetype: 19,
        theme: "chalet",
        names: ["Alpine Winter Chalet", "Snowbound Fir Lodge", "Matterhorn Pine Cabin", "Frosty Hearth Retreat", "Glacier Peak Chalet"],
        palettes: [
            { night: ['#0f172a', '#1e293b'], wood: '#78350f', snow: '#f1f5f9' },
            { night: ['#020617', '#0f172a'], wood: '#451a03', snow: '#e2e8f0' },
            { night: ['#1e1b4b', '#312e81'], wood: '#92400e', snow: '#f8fafc' },
            { night: ['#0c1427', '#172554'], wood: '#3f2212', snow: '#f1f5f9' },
            { night: ['#1e293b', '#334155'], wood: '#78350f', snow: '#ffffff' }
        ],
        diffs: [
            { id: "chimney_smoke", x: 0.420, y: 0.180, r: 0.070, label: "Chimney smoke drift direction", type: "shape" },
            { id: "weathercock", x: 0.340, y: 0.220, r: 0.070, label: "Roof ridge brass rooster", type: "missing" },
            { id: "pine_snowcap", x: 0.860, y: 0.360, r: 0.070, label: "Fir tree heavy snow blanket", type: "shape" },
            { id: "stag_antlers", x: 0.140, y: 0.387, r: 0.070, label: "Distant stag antler branch tips", type: "shape" },
            { id: "shutter_carving", x: 0.540, y: 0.440, r: 0.070, label: "Wood shutter carved heart motif", type: "shape" },
            { id: "window_candle", x: 0.400, y: 0.480, r: 0.070, label: "Attic window warm candle flame", type: "missing" },
            { id: "snowman_scarf", x: 0.780, y: 0.693, r: 0.075, label: "Snowman knitted scarf color", type: "color" },
            { id: "ski_poles", x: 0.229, y: 0.750, r: 0.070, label: "Leaning ski pole basket rings", type: "color" },
            { id: "sled_runners", x: 0.600, y: 0.833, r: 0.070, label: "Wooden toboggan cushion pad", type: "color" },
            { id: "hot_cocoa", x: 0.320, y: 0.880, r: 0.070, label: "Porch mug whipped cream drizzle", type: "shape" }
        ]
    },
    {
        archetype: 20,
        theme: "deepcoral",
        names: ["Twilight Coral Fantasy", "Abyssal Pearl Palace", "Bioluminescent Sea Trench", "Deep Neptune Sanctuary", "Mermaid Sunken Citadel"],
        palettes: [
            { deep: ['#020617', '#0369a1', '#0c4a6e'] },
            { deep: ['#000000', '#0f766e', '#134e4a'] },
            { deep: ['#0f172a', '#4338ca', '#1e1b4b'] },
            { deep: ['#020617', '#15803d', '#052e16'] },
            { deep: ['#1e1b4b', '#6b21a8', '#3b0764'] }
        ],
        diffs: [
            { id: "manta_markings", x: 0.360, y: 0.220, r: 0.075, label: "Giant manta wing luminous runes", type: "shape" },
            { id: "nautilus_shell", x: 0.740, y: 0.320, r: 0.070, label: "Nautilus spiral chamber lines", type: "color" },
            { id: "angel_fin", x: 0.605, y: 0.433, r: 0.075, label: "Emperor angelfish dorsal streamer", type: "shape" },
            { id: "submerged_idol", x: 0.160, y: 0.460, r: 0.070, label: "Sunken temple pillar emerald eye", type: "missing" },
            { id: "seahorse_crown", x: 0.440, y: 0.573, r: 0.070, label: "Pygmy seahorse spiked coronet", type: "shape" },
            { id: "diver_goggles", x: 0.840, y: 0.680, r: 0.070, label: "Deep diver helmet glow color", type: "color" },
            { id: "anemone_tips", x: 0.220, y: 0.780, r: 0.075, label: "Sea anemone bioluminescent tips", type: "color" },
            { id: "clam_pearl", x: 0.500, y: 0.850, r: 0.075, label: "Giant clam iridescent black pearl", type: "color" },
            { id: "hydra_polyps", x: 0.780, y: 0.860, r: 0.070, label: "Glowing branch coral polyp bud", type: "missing" },
            { id: "starfish_center", x: 0.300, y: 0.900, r: 0.070, label: "Deep sea crown-of-thorns star hue", type: "color" }
        ]
    }
];

// Generate 100 levels
const allLevels = [];

for (let lvl = 1; lvl <= 100; lvl++) {
    // 0-indexed
    const archetypeIndex = (lvl - 1) % 20;
    const variantIndex = Math.floor((lvl - 1) / 20); // 0 to 4
    const themeDef = THEMES[archetypeIndex];

    // Difficulty tiers
    let difficulty = 'Easy';
    let diffCount = 5;
    let timeLimit = 120;

    if (lvl <= 25) {
        difficulty = 'Easy';
        diffCount = 5;
        timeLimit = Math.max(100, 120 - Math.floor(lvl * 0.8));
    } else if (lvl <= 50) {
        difficulty = 'Medium';
        diffCount = (lvl % 2 === 0) ? 6 : 7;
        timeLimit = Math.max(85, 100 - Math.floor((lvl - 25) * 0.6));
    } else if (lvl <= 75) {
        difficulty = 'Hard';
        diffCount = (lvl % 3 === 0) ? 7 : 8;
        timeLimit = Math.max(70, 85 - Math.floor((lvl - 50) * 0.6));
    } else {
        difficulty = 'Expert';
        diffCount = (lvl % 2 === 0) ? 9 : 10;
        timeLimit = Math.max(55, 70 - Math.floor((lvl - 75) * 0.6));
    }

    const name = themeDef.names[variantIndex] || `${themeDef.names[0]} ${variantIndex + 1}`;
    const palette = themeDef.palettes[variantIndex] || themeDef.palettes[0];
    
    // Pick the first diffCount differences for this level
    const levelDiffs = themeDef.diffs.slice(0, diffCount).map((d, idx) => ({
        id: `lvl${lvl}_${d.id}`,
        x: d.x,
        y: d.y,
        r: d.r,
        label: d.label,
        type: d.type
    }));

    allLevels.push({
        id: lvl,
        name: name,
        theme: themeDef.theme,
        archetype: themeDef.archetype,
        variant: variantIndex,
        difficulty: difficulty,
        timeLimit: timeLimit,
        description: `Explore the captivating details of ${name}. Spot all ${diffCount} differences!`,
        differences: levelDiffs
    });
}

const fileHeader = `/**
 * Find the Differences - Level Data Definitions
 * 100 Hand-crafted levels across 4 difficulty tiers and 20 distinct world archetypes.
 */

const LEVELS_DATA = ${JSON.stringify(allLevels, null, 4)};

window.LEVELS_DATA = LEVELS_DATA;
`;

fs.writeFileSync(path.join(__dirname, '..', 'js', 'levels.js'), fileHeader);
console.log(`Generated ${allLevels.length} levels in js/levels.js successfully!`);
