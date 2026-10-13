// ==========================================================================
// FWRD EXPANDED LUXURY CATALOG DATASET
// 80 Authentic Designer Runway Items Across 5 Departments:
// Clothing, Shoes, Bags, Accessories, and Dresses
// ==========================================================================

const categoryConfigs = {
  clothing: {
    title: "Designer Clothing",
    breadcrumb: "Clothing",
    description: "Impeccably tailored blazers, second-skin knitwear, architectural outerwear, precision denim, and silk separates curated from international runway collections.",
    pills: [
      { id: "all", label: "All Clothing" },
      { id: "Jackets", label: "Jackets & Blazers" },
      { id: "Tops", label: "Tops & Blouses" },
      { id: "Pants", label: "Pants & Denim" },
      { id: "Knitwear", label: "Cashmere & Knits" },
      { id: "Skirts", label: "Skirts" },
      { id: "Outerwear", label: "Coats & Outerwear" }
    ]
  },
  shoes: {
    title: "Designer Shoes",
    breadcrumb: "Shoes",
    description: "Discover the world's most coveted footwear: architectural stilettos, runway over-the-knee boots, minimalist strappy sandals, and artisanal Italian mules.",
    pills: [
      { id: "all", label: "All Shoes" },
      { id: "Heels", label: "Heels & Pumps" },
      { id: "Boots", label: "Boots & Booties" },
      { id: "Sandals", label: "Strappy Sandals" },
      { id: "Mules", label: "Mules & Slides" },
      { id: "Flats", label: "Loafers & Flats" }
    ]
  },
  bags: {
    title: "Designer Handbags",
    breadcrumb: "Bags",
    description: "Iconic investment handbags: Intrecciato woven leather totes, structured hobo shoulder bags, viral mini bags, and nocturnal evening clutches.",
    pills: [
      { id: "all", label: "All Bags" },
      { id: "Shoulder", label: "Shoulder Bags" },
      { id: "Totes", label: "Totes & Carryalls" },
      { id: "Mini", label: "Mini Bags" },
      { id: "Clutches", label: "Evening Clutches" },
      { id: "Crossbody", label: "Crossbody Bags" }
    ]
  },
  accessories: {
    title: "Designer Accessories",
    breadcrumb: "Accessories",
    description: "The hallmarks of high fashion styling: sculptural acetate eyewear, artisanal Italian calfskin belts, statement runway jewelry, and silk accents.",
    pills: [
      { id: "all", label: "All Accessories" },
      { id: "Eyewear", label: "Sunglasses" },
      { id: "Belts", label: "Leather Belts" },
      { id: "Jewelry", label: "Fine Jewelry" },
      { id: "Hats", label: "Hats & Silks" }
    ]
  },
  dresses: {
    title: "Designer Dresses",
    breadcrumb: "Dresses",
    description: "Explore the curated runway collection. From sculpted evening gowns and avant-garde cocktail silhouettes to lightweight silk midis and cut-out party dresses.",
    pills: [
      { id: "all", label: "All Dresses" },
      { id: "Mini", label: "Mini Dresses" },
      { id: "Midi", label: "Midi Dresses" },
      { id: "Maxi", label: "Maxi & Gowns" },
      { id: "Cocktail", label: "Cocktail & Evening" },
      { id: "Little Black Dress", label: "Little Black Dresses" },
      { id: "Silk & Satin", label: "Silk & Satin" },
      { id: "Cut-Out", label: "Cut-Out & Backless" }
    ]
  },
  all: {
    title: "The Designer Runway Collection",
    breadcrumb: "All Departments",
    description: "Explore the complete luxury portfolio across Ready-to-Wear, Footwear, Handbags, Fine Accessories, and Eveningwear from premier luxury fashion houses.",
    pills: [
      { id: "all", label: "All 80 Pieces" },
      { id: "clothing", label: "Clothing" },
      { id: "shoes", label: "Shoes" },
      { id: "bags", label: "Bags" },
      { id: "accessories", label: "Accessories" },
      { id: "dresses", label: "Dresses" }
    ]
  },
  'whats-new': {
    title: "What's New: Runway Arrivals",
    breadcrumb: "New Arrivals",
    description: "Fresh off the runway: the latest designer drops, seasonal capsule collections, and highly coveted luxury releases.",
    pills: [
      { id: "all", label: "All New Arrivals" },
      { id: "clothing", label: "Clothing" },
      { id: "shoes", label: "Shoes" },
      { id: "bags", label: "Bags" },
      { id: "accessories", label: "Accessories" },
      { id: "dresses", label: "Dresses" }
    ]
  },
  sale: {
    title: "Designer Sale & Reductions",
    breadcrumb: "Sale",
    description: "Exceptional seasonal reductions on iconic designer pieces, runway archival fashion, and luxury essentials.",
    pills: [
      { id: "all", label: "All Sale Items" },
      { id: "clothing", label: "Clothing" },
      { id: "shoes", label: "Shoes" },
      { id: "bags", label: "Bags" },
      { id: "accessories", label: "Accessories" },
      { id: "dresses", label: "Dresses" }
    ]
  }
};

const productsData = [
  {
    "id": 101,
    "mainCategory": "clothing",
    "designer": "SAINT LAURENT",
    "title": "Le Smoking Grain de Poudre Wool Tuxedo Blazer",
    "price": 3690,
    "originalPrice": null,
    "length": "Jackets",
    "subcategories": [
      "Jackets",
      "Outerwear"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Grain de Poudre Virgin Wool, Silk Satin Lapels",
    "origin": "Made in Italy",
    "description": "The quintessential Parisian power piece. Sharp padded shoulders and structured satin peaked lapels.",
    "image1": "images/clothing_101_a.webp",
    "image2": "images/clothing_101_b.webp"
  },
  {
    "id": 102,
    "mainCategory": "clothing",
    "designer": "KHAITE",
    "title": "The Abigail High-Rise Rigid Straight-Leg Jean",
    "price": 480,
    "originalPrice": null,
    "length": "Pants",
    "subcategories": [
      "Pants"
    ],
    "color": "Blue",
    "colorHex": "#3b5998",
    "sizes": [
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Rigid Non-Stretch Cotton Denim",
    "origin": "Made in USA",
    "description": "Cult-favorite denim cut with a flattering high rise and clean straight leg.",
    "image1": "images/clothing_102_a.webp",
    "image2": "images/clothing_102_b.webp"
  },
  {
    "id": 103,
    "mainCategory": "clothing",
    "designer": "BOTTEGA VENETA",
    "title": "Belted Trench Coat in Technical Compact Cotton",
    "price": 4900,
    "originalPrice": null,
    "length": "Outerwear",
    "subcategories": [
      "Jackets",
      "Outerwear"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "IT 38 (US 2)",
      "IT 40 (US 4)",
      "IT 42 (US 6)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Water-repellent Cotton Garbardine with leather collar tab",
    "origin": "Made in Italy",
    "description": "Exaggerated storm flaps, raglan sleeves, and a sculpted waist cinched with a tonal buckle belt.",
    "image1": "images/clothing_103_a.webp",
    "image2": "images/clothing_103_b.webp"
  },
  {
    "id": 104,
    "mainCategory": "clothing",
    "designer": "JACQUEMUS",
    "title": "La Chemise Bahia Draped Plunging Silk Blouse",
    "price": 680,
    "originalPrice": null,
    "length": "Tops",
    "subcategories": [
      "Tops"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Lightweight Mulberry Silk",
    "origin": "Made in Portugal",
    "description": "Knotted twist front, deep plunging neckline, and fluid draped cuffs.",
    "image1": "images/clothing_104_a.webp",
    "image2": "images/clothing_104_b.webp"
  },
  {
    "id": 105,
    "mainCategory": "clothing",
    "designer": "ALAÏA",
    "title": "Architectural Flute Knit High-Waisted Midi Skirt",
    "price": 1850,
    "originalPrice": null,
    "length": "Skirts",
    "subcategories": [
      "Skirts"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": true,
    "fabric": "83% Viscose, 17% Polyester sculptural jacquard knit",
    "origin": "Made in Italy",
    "description": "Sculpts from high waist through hips before blooming into an undulating 3D mermaid hemline.",
    "image1": "images/clothing_105_a.webp",
    "image2": "images/clothing_105_b.webp"
  },
  {
    "id": 106,
    "mainCategory": "clothing",
    "designer": "THE ROW",
    "title": "Marcel Oversized Mongolian Cashmere Crewneck",
    "price": 1950,
    "originalPrice": null,
    "length": "Knitwear",
    "subcategories": [
      "Knitwear",
      "Tops"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": "QUIET LUXURY",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% 7-Gauge Pure Mongolian Cashmere",
    "origin": "Made in Italy",
    "description": "Dropped shoulders, elongated sleeves, and dense featherweight cashmere.",
    "image1": "images/clothing_106_a.webp",
    "image2": "images/clothing_106_b.webp"
  },
  {
    "id": 107,
    "mainCategory": "clothing",
    "designer": "RICK OWENS",
    "title": "Bauhaus Washed Calfskin Zip Biker Jacket",
    "price": 3200,
    "originalPrice": 3600,
    "length": "Jackets",
    "subcategories": [
      "Jackets",
      "Outerwear"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 38 (US 2)",
      "IT 40 (US 4)",
      "IT 42 (US 6)",
      "IT 44 (US 8)"
    ],
    "badge": "AVANT-GARDE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Washed Italian Calf Leather",
    "origin": "Made in Italy",
    "description": "Geometrical front zip pockets with an asymmetric funnel collar.",
    "image1": "images/clothing_107_a.webp",
    "image2": "images/clothing_107_b.webp"
  },
  {
    "id": 108,
    "mainCategory": "clothing",
    "designer": "MUGLER",
    "title": "Optical Spiral Sheer Illusion Tulle Bodysuit",
    "price": 790,
    "originalPrice": null,
    "length": "Tops",
    "subcategories": [
      "Tops"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "FWRD EXCLUSIVE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "78% Polyamide, 22% Elastane",
    "origin": "Made in Portugal",
    "description": "Dynamic diagonal tulle inserts create an unmistakable sculpted silhouette.",
    "image1": "images/clothing_108_a.webp",
    "image2": "images/clothing_108_b.webp"
  },
  {
    "id": 109,
    "mainCategory": "clothing",
    "designer": "COURRÈGES",
    "title": "Vinyl Re-Edition Snap Button Cropped Jacket",
    "price": 1150,
    "originalPrice": null,
    "length": "Jackets",
    "subcategories": [
      "Jackets"
    ],
    "color": "Scarlet Red",
    "colorHex": "#b31b1b",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)"
    ],
    "badge": "ICONIC",
    "isNew": true,
    "isBestseller": true,
    "fabric": "88% Cotton, 10% Polyurethane glossy heritage vinyl finish",
    "origin": "Made in France",
    "description": "High-shine glossy vinyl, stand collar, and central tonal AC logo appliqué.",
    "image1": "images/clothing_109_a.webp",
    "image2": "images/clothing_109_b.webp"
  },
  {
    "id": 110,
    "mainCategory": "clothing",
    "designer": "THE ROW",
    "title": "Gala Fluid Wide-Leg Tailored Silk Crepe Trousers",
    "price": 1490,
    "originalPrice": null,
    "length": "Pants",
    "subcategories": [
      "Pants"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "US 0",
      "US 2",
      "US 4",
      "US 6",
      "US 8"
    ],
    "badge": "QUIET LUXURY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Heavy Silk Crepe with fluid drape",
    "origin": "Made in Italy",
    "description": "Pull-on elasticized waistband with an elongated wide leg.",
    "image1": "images/clothing_110_a.webp",
    "image2": "images/clothing_110_b.webp"
  },
  {
    "id": 111,
    "mainCategory": "clothing",
    "designer": "KHAITE",
    "title": "The Scarlet Heavy Gauge Cashmere Cardigan",
    "price": 1980,
    "originalPrice": null,
    "length": "Knitwear",
    "subcategories": [
      "Knitwear"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Featherweight Mongolian Cashmere rib knit",
    "origin": "Made in Italy",
    "description": "Deep V-neckline, tortoiseshell buttons, and wide bell sleeves.",
    "image1": "images/clothing_111_a.webp",
    "image2": "images/clothing_111_b.webp"
  },
  {
    "id": 112,
    "mainCategory": "clothing",
    "designer": "BALENCIAGA",
    "title": "Hourglass Sculpted Shoulder Wool Flannel Blazer",
    "price": 3150,
    "originalPrice": null,
    "length": "Jackets",
    "subcategories": [
      "Jackets"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Virgin Wool Flannel",
    "origin": "Made in Italy",
    "description": "Extreme concave waist curve with sharp padded shoulders.",
    "image1": "images/clothing_112_a.webp",
    "image2": "images/clothing_112_b.webp"
  },
  {
    "id": 113,
    "mainCategory": "clothing",
    "designer": "BOTTEGA VENETA",
    "title": "Supple Lambskin Straight-Leg Leather Trousers",
    "price": 4200,
    "originalPrice": null,
    "length": "Pants",
    "subcategories": [
      "Pants"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 38 (US 2)",
      "IT 40 (US 4)",
      "IT 42 (US 6)"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% French Nappa Lambskin leather",
    "origin": "Made in Italy",
    "description": "Tailored five-pocket silhouette in butter-soft Italian lambskin.",
    "image1": "images/clothing_113_a.webp",
    "image2": "images/clothing_113_b.webp"
  },
  {
    "id": 114,
    "mainCategory": "clothing",
    "designer": "JACQUEMUS",
    "title": "Le Double Cardigan Brushed Mohair Cropped Knit",
    "price": 520,
    "originalPrice": 620,
    "length": "Knitwear",
    "subcategories": [
      "Knitwear",
      "Tops"
    ],
    "color": "Olive Gold",
    "colorHex": "#606b52",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)"
    ],
    "badge": "NEW ARRIVAL",
    "isNew": true,
    "isBestseller": false,
    "fabric": "50% Mohair, 36% Polyamide, 14% Wool",
    "origin": "Made in Italy",
    "description": "Feather-light mohair with golden branded Jacquemus charm clasp.",
    "image1": "images/clothing_114_a.webp",
    "image2": "images/clothing_114_b.webp"
  },
  {
    "id": 115,
    "mainCategory": "clothing",
    "designer": "SAINT LAURENT",
    "title": "Sheer Silk-Chiffon Lavallière Tie-Neck Blouse",
    "price": 1890,
    "originalPrice": null,
    "length": "Tops",
    "subcategories": [
      "Tops"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "COUTURE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Sheer Silk Chiffon",
    "origin": "Made in France",
    "description": "Translucent airy silk framed with an elongated pussybow neck tie.",
    "image1": "images/clothing_115_a.webp",
    "image2": "images/clothing_115_b.webp"
  },
  {
    "id": 116,
    "mainCategory": "clothing",
    "designer": "GIVENCHY",
    "title": "Shark Lock Grain de Gabardine Tailored Wool Coat",
    "price": 3400,
    "originalPrice": null,
    "length": "Outerwear",
    "subcategories": [
      "Outerwear",
      "Jackets"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Double-Faced Virgin Wool",
    "origin": "Made in Italy",
    "description": "Linear masculine tailoring with removable silver shark tooth padlock.",
    "image1": "images/clothing_116_a.webp",
    "image2": "images/clothing_116_b.webp"
  },
  {
    "id": 201,
    "mainCategory": "shoes",
    "designer": "AMINA MUADDI",
    "title": "Begum Glass Transparent PVC Crystal Slingback 95mm",
    "price": 1190,
    "originalPrice": null,
    "length": "Heels",
    "subcategories": [
      "Heels"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "VIRAL",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Clear PVC, Crystal brooch jewel",
    "origin": "Made in Italy",
    "description": "Art-deco crystal sunburst brooch adorning transparent pointed toes and flared heel.",
    "image1": "images/shoes_201_a.webp",
    "image2": "images/shoes_201_b.webp"
  },
  {
    "id": 202,
    "mainCategory": "shoes",
    "designer": "SAINT LAURENT",
    "title": "Blade Pointed Square-Toe Patent Leather Slingback",
    "price": 1050,
    "originalPrice": null,
    "length": "Heels",
    "subcategories": [
      "Heels",
      "Sandals"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "COUTURE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% High-shine Calf Patent Leather",
    "origin": "Made in Italy",
    "description": "Square toe box, razor-sharp heel stem, and elasticated slingback strap.",
    "image1": "images/shoes_202_a.webp",
    "image2": "images/shoes_202_b.webp"
  },
  {
    "id": 203,
    "mainCategory": "shoes",
    "designer": "BOTTEGA VENETA",
    "title": "Atomic Stretch Lambskin Leather Over-The-Knee Boots",
    "price": 2550,
    "originalPrice": null,
    "length": "Boots",
    "subcategories": [
      "Boots"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Stretch Lambskin",
    "origin": "Made in Italy",
    "description": "Buttery Italian stretch nappa with rounded sculptural toe and comma heel.",
    "image1": "images/shoes_203_a.webp",
    "image2": "images/shoes_203_b.webp"
  },
  {
    "id": 204,
    "mainCategory": "shoes",
    "designer": "THE ROW",
    "title": "Bare Minimalist Strappy Leather Kitten Heel Sandal",
    "price": 920,
    "originalPrice": null,
    "length": "Sandals",
    "subcategories": [
      "Sandals",
      "Heels"
    ],
    "color": "Scarlet Red",
    "colorHex": "#b31b1b",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)"
    ],
    "badge": "QUIET LUXURY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Calfskin Leather",
    "origin": "Made in Italy",
    "description": "Thin thong straps encircle the ankle delicately atop a 65mm kitten heel.",
    "image1": "images/shoes_204_a.webp",
    "image2": "images/shoes_204_b.webp"
  },
  {
    "id": 205,
    "mainCategory": "shoes",
    "designer": "MAISON MARGIELA",
    "title": "Tabi Split-Toe Vintage Treatment Leather Ankle Boots",
    "price": 1350,
    "originalPrice": null,
    "length": "Boots",
    "subcategories": [
      "Boots"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "AVANT-GARDE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Calfskin vintage washed leather",
    "origin": "Made in Italy",
    "description": "The historical split-toe icon with cylindrical block heel.",
    "image1": "images/shoes_205_a.webp",
    "image2": "images/shoes_205_b.webp"
  },
  {
    "id": 206,
    "mainCategory": "shoes",
    "designer": "MANOLO BLAHNIK",
    "title": "Hangisi 105 Jewel Buckle Silk Satin Evening Pump",
    "price": 1295,
    "originalPrice": null,
    "length": "Heels",
    "subcategories": [
      "Heels"
    ],
    "color": "Emerald",
    "colorHex": "#0a3d2c",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "HERITAGE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Silk Viscose Satin, Swarovski crystals",
    "origin": "Made in Italy",
    "description": "Shimmering jewel buckle set against rich silk satin.",
    "image1": "images/shoes_206_a.webp",
    "image2": "images/shoes_206_b.webp"
  },
  {
    "id": 207,
    "mainCategory": "shoes",
    "designer": "ALAÏA",
    "title": "Cabaret Leather Platform Curved Wedge Mules",
    "price": 1750,
    "originalPrice": null,
    "length": "Mules",
    "subcategories": [
      "Mules",
      "Heels"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Calf Leather, sculpted wooden wedge",
    "origin": "Made in Italy",
    "description": "Cantilevered wedge arch supports an open-toe strap in high-gloss calfskin.",
    "image1": "images/shoes_207_a.webp",
    "image2": "images/shoes_207_b.webp"
  },
  {
    "id": 208,
    "mainCategory": "shoes",
    "designer": "JACQUEMUS",
    "title": "Les Doubles Sandales Asymmetric Strap Kitten Heel",
    "price": 840,
    "originalPrice": null,
    "length": "Sandals",
    "subcategories": [
      "Sandals",
      "Mules"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)"
    ],
    "badge": "NEW ARRIVAL",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Suede Leather",
    "origin": "Made in Portugal",
    "description": "Asymmetric crossover straps with easy summer elegance.",
    "image1": "images/shoes_208_a.webp",
    "image2": "images/shoes_208_b.webp"
  },
  {
    "id": 209,
    "mainCategory": "shoes",
    "designer": "THE ROW",
    "title": "Fisherman Hand-Woven Nappa Leather Cage Flat",
    "price": 1390,
    "originalPrice": null,
    "length": "Flats",
    "subcategories": [
      "Flats",
      "Sandals"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "QUIET LUXURY",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% French Nappa Lambskin",
    "origin": "Made in Italy",
    "description": "Hand-woven caged leather straps with adjustable gold side buckle.",
    "image1": "images/shoes_209_a.webp",
    "image2": "images/shoes_209_b.webp"
  },
  {
    "id": 210,
    "mainCategory": "shoes",
    "designer": "BOTTEGA VENETA",
    "title": "Lug Heavy Tread Elasticated Chelsea Ankle Boots",
    "price": 1450,
    "originalPrice": null,
    "length": "Boots",
    "subcategories": [
      "Boots"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Vegetable-tanned Calfskin, lug sole",
    "origin": "Made in Italy",
    "description": "Sleek elongated ankle shaft balanced on a massive tiered treaded rubber platform.",
    "image1": "images/shoes_210_a.webp",
    "image2": "images/shoes_210_b.webp"
  },
  {
    "id": 211,
    "mainCategory": "shoes",
    "designer": "MIU MIU",
    "title": "Satin Crystal Buckle Strap Ballerina Flats",
    "price": 1100,
    "originalPrice": null,
    "length": "Flats",
    "subcategories": [
      "Flats"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)"
    ],
    "badge": "VIRAL",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Duchess Silk Satin",
    "origin": "Made in Italy",
    "description": "Delicate satin ballet slippers with dual leather buckled straps.",
    "image1": "images/shoes_211_a.webp",
    "image2": "images/shoes_211_b.webp"
  },
  {
    "id": 212,
    "mainCategory": "shoes",
    "designer": "AMINA MUADDI",
    "title": "Lupita Glass Holographic Wedge Mules 95mm",
    "price": 920,
    "originalPrice": null,
    "length": "Mules",
    "subcategories": [
      "Mules",
      "Heels"
    ],
    "color": "Emerald",
    "colorHex": "#0a3d2c",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)"
    ],
    "badge": "FWRD EXCLUSIVE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "Tinted PVC strap, sculpted Perspex wedge",
    "origin": "Made in Italy",
    "description": "Clear emerald-tinted vamp strap perched upon Amina's Lucite wedge.",
    "image1": "images/shoes_212_a.webp",
    "image2": "images/shoes_212_b.webp"
  },
  {
    "id": 213,
    "mainCategory": "shoes",
    "designer": "SAINT LAURENT",
    "title": "Tribute 105 Platform Woven Leather Stiletto Sandal",
    "price": 1150,
    "originalPrice": null,
    "length": "Sandals",
    "subcategories": [
      "Sandals",
      "Heels"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Smooth Calfskin Leather",
    "origin": "Made in Italy",
    "description": "Intertwined strappy vamp, adjustable T-strap buckle, and beveled platform.",
    "image1": "images/shoes_213_a.webp",
    "image2": "images/shoes_213_b.webp"
  },
  {
    "id": 214,
    "mainCategory": "shoes",
    "designer": "MAISON MARGIELA",
    "title": "Tabi Soft Calfskin Split-Toe Ballerina Flats",
    "price": 890,
    "originalPrice": null,
    "length": "Flats",
    "subcategories": [
      "Flats"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "AVANT-GARDE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Brushed Lambskin",
    "origin": "Made in Italy",
    "description": "Split-toe cleft with a dainty drawstring ribbon tie at the decolletage.",
    "image1": "images/shoes_214_a.webp",
    "image2": "images/shoes_214_b.webp"
  },
  {
    "id": 215,
    "mainCategory": "shoes",
    "designer": "BALENCIAGA",
    "title": "Cagole 90mm Studded Arena Leather Mules",
    "price": 1250,
    "originalPrice": null,
    "length": "Mules",
    "subcategories": [
      "Mules",
      "Heels"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Crinkled Arena Lambskin, metal dome studs",
    "origin": "Made in Italy",
    "description": "Pointed mule silhouette peppered with aged silver dome studs and buckles.",
    "image1": "images/shoes_215_a.webp",
    "image2": "images/shoes_215_b.webp"
  },
  {
    "id": 216,
    "mainCategory": "shoes",
    "designer": "PRADA",
    "title": "Monolith Brushed Spazzolato Leather Platform Loafers",
    "price": 1250,
    "originalPrice": null,
    "length": "Flats",
    "subcategories": [
      "Flats"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 36 (US 6)",
      "IT 37 (US 7)",
      "IT 38 (US 8)",
      "IT 39 (US 9)",
      "IT 40 (US 10)"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Spazzolato Brushed Leather, triangle logo",
    "origin": "Made in Italy",
    "description": "Glossy calfskin penny loafer mounted onto Prada's Monolith treaded lug outsole.",
    "image1": "images/shoes_216_a.webp",
    "image2": "images/shoes_216_b.webp"
  },
  {
    "id": 301,
    "mainCategory": "bags",
    "designer": "BOTTEGA VENETA",
    "title": "Small Andiamo Intrecciato Leather Top-Handle Bag",
    "price": 4500,
    "originalPrice": null,
    "length": "Totes",
    "subcategories": [
      "Totes",
      "Shoulder"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "One Size (Small)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Intrecciato Hand-Woven Lambskin, Brass Knot Slider",
    "origin": "Made in Italy",
    "description": "Nappa leather hand-woven in Intrecciato weave, fastened with a sculptural metal knot.",
    "image1": "images/bags_301_a.webp",
    "image2": "images/bags_301_b.webp"
  },
  {
    "id": 302,
    "mainCategory": "bags",
    "designer": "SAINT LAURENT",
    "title": "Le 5 à 7 Smooth Calfskin Leather Hobo Shoulder Bag",
    "price": 2450,
    "originalPrice": null,
    "length": "Shoulder",
    "subcategories": [
      "Shoulder"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "One Size"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Smooth Calfskin, Bronze-toned metal YSL clasp",
    "origin": "Made in Italy",
    "description": "Ultra-chic slim hobo secured by the interlocking monogram hook.",
    "image1": "images/bags_302_a.webp",
    "image2": "images/bags_302_b.webp"
  },
  {
    "id": 303,
    "mainCategory": "bags",
    "designer": "BALENCIAGA",
    "title": "Le Cagole XS Arena Lambskin Shoulder Bag with Mirror",
    "price": 2600,
    "originalPrice": null,
    "length": "Shoulder",
    "subcategories": [
      "Shoulder",
      "Crossbody"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "XS"
    ],
    "badge": "ICONIC",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Arena Lambskin, metal dome studs",
    "origin": "Made in Italy",
    "description": "Pleated leather, dome metal studs, and a detachable heart-shaped mirror.",
    "image1": "images/bags_303_a.webp",
    "image2": "images/bags_303_b.webp"
  },
  {
    "id": 304,
    "mainCategory": "bags",
    "designer": "LOEWE",
    "title": "Puzzle Edge Classic Handcrafted Small Crossbody Bag",
    "price": 3850,
    "originalPrice": null,
    "length": "Crossbody",
    "subcategories": [
      "Crossbody",
      "Shoulder"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "Small"
    ],
    "badge": "HERITAGE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Classic Satin Calfskin",
    "origin": "Made in Spain",
    "description": "Cuboid shape and distinctive geometric cutting technique that folds completely flat.",
    "image1": "images/bags_304_a.webp",
    "image2": "images/bags_304_b.webp"
  },
  {
    "id": 305,
    "mainCategory": "bags",
    "designer": "JACQUEMUS",
    "title": "Le Chiquito Moyen Leather Top-Handle Mini Bag",
    "price": 790,
    "originalPrice": null,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Crossbody"
    ],
    "color": "Olive Gold",
    "colorHex": "#606b52",
    "sizes": [
      "Moyen (One Size)"
    ],
    "badge": "VIRAL",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Smooth Cow Leather with gold metal lettering",
    "origin": "Made in Italy",
    "description": "Structured trapezoid body, reinforced top handle, and magnetic flap closure.",
    "image1": "images/bags_305_a.webp",
    "image2": "images/bags_305_b.webp"
  },
  {
    "id": 306,
    "mainCategory": "bags",
    "designer": "KHAITE",
    "title": "The Lotus Sculptural Suede Leather Medium Tote",
    "price": 2900,
    "originalPrice": null,
    "length": "Totes",
    "subcategories": [
      "Totes",
      "Shoulder"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "Medium"
    ],
    "badge": "FWRD EXCLUSIVE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Unlined Heavyweight Italian Calf Suede",
    "origin": "Made in Italy",
    "description": "Continuous ribbons of fluid suede join to create a seamless slouchy silhouette.",
    "image1": "images/bags_306_a.webp",
    "image2": "images/bags_306_b.webp"
  },
  {
    "id": 307,
    "mainCategory": "bags",
    "designer": "ALAÏA",
    "title": "Le Coeur Sculpted Heart Leather Shoulder Bag",
    "price": 1350,
    "originalPrice": null,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Shoulder"
    ],
    "color": "Scarlet Red",
    "colorHex": "#b31b1b",
    "sizes": [
      "One Size"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Rigid Molded Calfskin, dual zip closure",
    "origin": "Made in Italy",
    "description": "Sensual sculpture in accessory form. 3D heart profile with clean seamlines.",
    "image1": "images/bags_307_a.webp",
    "image2": "images/bags_307_b.webp"
  },
  {
    "id": 308,
    "mainCategory": "bags",
    "designer": "BOTTEGA VENETA",
    "title": "Mini Jodie Knotted Handle Intrecciato Leather Hobo",
    "price": 2800,
    "originalPrice": null,
    "length": "Clutches",
    "subcategories": [
      "Clutches",
      "Mini"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "Mini"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Handcrafted Nappa Lambskin Leather",
    "origin": "Made in Italy",
    "description": "Soft rounded hobo profile defined by an artisanal knot tied into the handle.",
    "image1": "images/bags_308_a.webp",
    "image2": "images/bags_308_b.webp"
  },
  {
    "id": 309,
    "mainCategory": "bags",
    "designer": "SAINT LAURENT",
    "title": "Icare Maxi Quilted Lambskin Chain Shopping Tote",
    "price": 4900,
    "originalPrice": null,
    "length": "Totes",
    "subcategories": [
      "Totes"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "Maxi (One Size)"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Quilted Nappa Lambskin, oversized YSL monogram",
    "origin": "Made in Italy",
    "description": "Diamond-lozenge quilting, convertible winged sides, and removable zipped pouch.",
    "image1": "images/bags_309_a.webp",
    "image2": "images/bags_309_b.webp"
  },
  {
    "id": 310,
    "mainCategory": "bags",
    "designer": "THE ROW",
    "title": "Margaux 15 Smooth Saddle Leather Top-Handle Bag",
    "price": 4850,
    "originalPrice": null,
    "length": "Totes",
    "subcategories": [
      "Totes"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "Size 15"
    ],
    "badge": "QUIET LUXURY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Full-Grain Polished Saddle Calfskin",
    "origin": "Made in Italy",
    "description": "Structural doctors bag featuring buckled side gussets and minimalist branding.",
    "image1": "images/bags_310_a.webp",
    "image2": "images/bags_310_b.webp"
  },
  {
    "id": 311,
    "mainCategory": "bags",
    "designer": "JACQUEMUS",
    "title": "Le Bambino Structured Long Leather Shoulder Bag",
    "price": 980,
    "originalPrice": null,
    "length": "Shoulder",
    "subcategories": [
      "Shoulder"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "One Size"
    ],
    "badge": "BESTSELLER",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Smooth Box Calfskin",
    "origin": "Made in Italy",
    "description": "Elongated baguette envelope profile with Jacquemus gold metal plaque.",
    "image1": "images/bags_311_a.webp",
    "image2": "images/bags_311_b.webp"
  },
  {
    "id": 312,
    "mainCategory": "bags",
    "designer": "BOTTEGA VENETA",
    "title": "Padded Cassette Intrecciato Leather Crossbody",
    "price": 3200,
    "originalPrice": null,
    "length": "Crossbody",
    "subcategories": [
      "Crossbody",
      "Shoulder"
    ],
    "color": "Emerald",
    "colorHex": "#0a3d2c",
    "sizes": [
      "One Size"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Padded Nappa Leather, triangular buckle",
    "origin": "Made in Italy",
    "description": "Voluminous maxi Intrecciato with heat-bonded weave and triangular buckle.",
    "image1": "images/bags_312_a.webp",
    "image2": "images/bags_312_b.webp"
  },
  {
    "id": 313,
    "mainCategory": "bags",
    "designer": "LOEWE",
    "title": "Flamenco Knotted Drawstring Soft Nappa Clutch Bag",
    "price": 2850,
    "originalPrice": null,
    "length": "Clutches",
    "subcategories": [
      "Clutches",
      "Crossbody"
    ],
    "color": "Scarlet Red",
    "colorHex": "#b31b1b",
    "sizes": [
      "Medium"
    ],
    "badge": "HERITAGE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Spanish Nappa Calfskin",
    "origin": "Made in Spain",
    "description": "Pulls closed with coiled signature knot drawstrings and magnetic snap.",
    "image1": "images/bags_313_a.webp",
    "image2": "images/bags_313_b.webp"
  },
  {
    "id": 314,
    "mainCategory": "bags",
    "designer": "BALENCIAGA",
    "title": "Hourglass Small Shiny Box Calfskin Handbag",
    "price": 2750,
    "originalPrice": null,
    "length": "Shoulder",
    "subcategories": [
      "Shoulder",
      "Crossbody"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "Small"
    ],
    "badge": "RUNWAY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Shiny Box Calfskin, aged silver B-charm",
    "origin": "Made in Italy",
    "description": "Curvilinear base with suspended B magnet flap closure.",
    "image1": "images/bags_314_a.webp",
    "image2": "images/bags_314_b.webp"
  },
  {
    "id": 315,
    "mainCategory": "bags",
    "designer": "PRADA",
    "title": "Cleo Brushed Spazzolato Leather Flap Shoulder Bag",
    "price": 3100,
    "originalPrice": null,
    "length": "Shoulder",
    "subcategories": [
      "Shoulder"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "One Size"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Spazzolato Brushed Leather, triangle logo",
    "origin": "Made in Italy",
    "description": "Sloping curved lines with rounded bottom and sides emphasizing the hobo profile.",
    "image1": "images/bags_315_a.webp",
    "image2": "images/bags_315_b.webp"
  },
  {
    "id": 316,
    "mainCategory": "bags",
    "designer": "ALAÏA",
    "title": "Mina 20 Laser-Cut Vienne Calfskin Leather Tote",
    "price": 2250,
    "originalPrice": null,
    "length": "Totes",
    "subcategories": [
      "Totes",
      "Mini"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "Mina 20"
    ],
    "badge": "MAISON",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Calfskin with delicate laser-cut lace openwork",
    "origin": "Made in Italy",
    "description": "Signature geometric openwork laser cut into smooth calfskin with side accordion snaps.",
    "image1": "images/bags_316_a.webp",
    "image2": "images/bags_316_b.webp"
  },
  {
    "id": 401,
    "mainCategory": "accessories",
    "designer": "SAINT LAURENT",
    "title": "SL 557 Shade Bold Oval Acetate Sunglasses",
    "price": 510,
    "originalPrice": null,
    "length": "Eyewear",
    "subcategories": [
      "Eyewear"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "One Size"
    ],
    "badge": "ICONIC",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Italian Premium Acetate",
    "origin": "Made in Italy",
    "description": "Thick cat-eye oval silhouette with engraved Saint Laurent lettering.",
    "image1": "images/accessories_401_a.webp",
    "image2": "images/accessories_401_b.webp"
  },
  {
    "id": 402,
    "mainCategory": "accessories",
    "designer": "BOTTEGA VENETA",
    "title": "Knot Buckle Polished Calfskin Leather Belt",
    "price": 890,
    "originalPrice": null,
    "length": "Belts",
    "subcategories": [
      "Belts"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "75cm",
      "80cm",
      "85cm",
      "90cm"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% French Calfskin, Brass Knot Buckle",
    "origin": "Made in Italy",
    "description": "Cinches blazers and dresses with Bottega's signature cast brass knot hardware.",
    "image1": "images/accessories_402_a.webp",
    "image2": "images/accessories_402_b.webp"
  },
  {
    "id": 403,
    "mainCategory": "accessories",
    "designer": "VIVIENNE WESTWOOD",
    "title": "Bas Relief Pearl Drop Choker Necklace",
    "price": 420,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "One Size"
    ],
    "badge": "VIRAL",
    "isNew": true,
    "isBestseller": true,
    "fabric": "Hand-knotted Glass Pearls, Platinum-plated Brass Orb",
    "origin": "Imported",
    "description": "Single strand of luminous glass pearls centered by the regal Orb emblem.",
    "image1": "images/accessories_403_a.webp",
    "image2": "images/accessories_403_b.webp"
  },
  {
    "id": 404,
    "mainCategory": "accessories",
    "designer": "JACQUEMUS",
    "title": "Le Bob Artichaut Fringed Canvas Bucket Hat",
    "price": 180,
    "originalPrice": null,
    "length": "Hats",
    "subcategories": [
      "Hats"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "56cm",
      "58cm",
      "60cm"
    ],
    "badge": "RESORT",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Washed Cotton Canvas with frayed edges",
    "origin": "Made in Portugal",
    "description": "Raw frayed brim, metal Jacquemus lettering, and toggle chin cord.",
    "image1": "images/accessories_404_a.webp",
    "image2": "images/accessories_404_b.webp"
  },
  {
    "id": 405,
    "mainCategory": "accessories",
    "designer": "KHAITE",
    "title": "The Bambi Double-Wrap Italian Leather Waist Belt",
    "price": 620,
    "originalPrice": null,
    "length": "Belts",
    "subcategories": [
      "Belts"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "XS/S",
      "M/L"
    ],
    "badge": "QUIET LUXURY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Full-Grain Calfskin, Chrome Buckle",
    "origin": "Made in Italy",
    "description": "Double wrap around high-waisted denim or oversized knitwear.",
    "image1": "images/accessories_405_a.webp",
    "image2": "images/accessories_405_b.webp"
  },
  {
    "id": 406,
    "mainCategory": "accessories",
    "designer": "ALAÏA",
    "title": "Sculpted Molten Brass Spiral Cuff Bracelet",
    "price": 1150,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "One Size"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% 24K Gold-Plated Solid Brass",
    "origin": "Made in Italy",
    "description": "Architectural torque statement wrapping the wrist like liquid gold.",
    "image1": "images/accessories_406_a.webp",
    "image2": "images/accessories_406_b.webp"
  },
  {
    "id": 407,
    "mainCategory": "accessories",
    "designer": "LOEWE",
    "title": "Anagram Inlaid Palladium & Gold-Tone Brooch",
    "price": 450,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "One Size"
    ],
    "badge": "HERITAGE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "Palladium and Gold dual-tone brass",
    "origin": "Made in Spain",
    "description": "Quadrupled 'L' anagram crafted as an elegant geometric lapel pin.",
    "image1": "images/accessories_407_a.webp",
    "image2": "images/accessories_407_b.webp"
  },
  {
    "id": 408,
    "mainCategory": "accessories",
    "designer": "SAINT LAURENT",
    "title": "Chunky Geometric Gilded Brass Clip Earrings",
    "price": 720,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "One Size"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Gilded Brass with vintage brushing",
    "origin": "Made in France",
    "description": "Substantial faceted geometric studs that catch evening light.",
    "image1": "images/accessories_408_a.webp",
    "image2": "images/accessories_408_b.webp"
  },
  {
    "id": 409,
    "mainCategory": "accessories",
    "designer": "BOTTEGA VENETA",
    "title": "Small Drop Earrings in 18K Yellow Gold Over Silver",
    "price": 1250,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "Small"
    ],
    "badge": "VIRAL",
    "isNew": true,
    "isBestseller": true,
    "fabric": "Solid 925 Sterling Silver dipped in 18K Yellow Gold",
    "origin": "Made in Italy",
    "description": "Tear drop silhouette ergonomically sculpted to curve naturally along the lobe.",
    "image1": "images/accessories_409_a.webp",
    "image2": "images/accessories_409_b.webp"
  },
  {
    "id": 410,
    "mainCategory": "accessories",
    "designer": "CELINE",
    "title": "Triomphe 01 Oval Acetate Frame Sunglasses",
    "price": 520,
    "originalPrice": null,
    "length": "Eyewear",
    "subcategories": [
      "Eyewear"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "One Size"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "Glossy Italian Acetate, Gilded Triomphe logo",
    "origin": "Made in Italy",
    "description": "Retro 90s oval shape featuring the Parisian double-C Triomphe emblem.",
    "image1": "images/accessories_410_a.webp",
    "image2": "images/accessories_410_b.webp"
  },
  {
    "id": 411,
    "mainCategory": "accessories",
    "designer": "THE ROW",
    "title": "Classic Fringed Cashmere & Mulberry Silk Scarf",
    "price": 1450,
    "originalPrice": null,
    "length": "Hats",
    "subcategories": [
      "Hats"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "One Size"
    ],
    "badge": "QUIET LUXURY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "70% Cashmere, 30% Mulberry Silk",
    "origin": "Made in Italy",
    "description": "Spun from gossamer-fine combed cashmere threads with raw eyelash fringe.",
    "image1": "images/accessories_411_a.webp",
    "image2": "images/accessories_411_b.webp"
  },
  {
    "id": 412,
    "mainCategory": "accessories",
    "designer": "SAINT LAURENT",
    "title": "Cassandre Thin Reversible Leather Belt with YSL Loop",
    "price": 575,
    "originalPrice": null,
    "length": "Belts",
    "subcategories": [
      "Belts"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "75cm",
      "80cm",
      "85cm",
      "90cm"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Smooth Calfskin, brushed gold YSL buckle",
    "origin": "Made in Italy",
    "description": "Reversible smooth calf leather held with intertwining Cassandre monogram pin.",
    "image1": "images/accessories_412_a.webp",
    "image2": "images/accessories_412_b.webp"
  },
  {
    "id": 413,
    "mainCategory": "accessories",
    "designer": "JACQUEMUS",
    "title": "Le Porte-Clés Chiquito Miniature Leather Charm",
    "price": 190,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Olive Gold",
    "colorHex": "#606b52",
    "sizes": [
      "One Size"
    ],
    "badge": "VIRAL",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Genuine Cow Leather with gold keyring",
    "origin": "Made in Italy",
    "description": "Miniature replica of the famed Le Chiquito bag to clip onto belt loops or totes.",
    "image1": "images/accessories_413_a.webp",
    "image2": "images/accessories_413_b.webp"
  },
  {
    "id": 414,
    "mainCategory": "accessories",
    "designer": "BALENCIAGA",
    "title": "BB Monogram Wrap-Around Shield Sunglasses",
    "price": 490,
    "originalPrice": null,
    "length": "Eyewear",
    "subcategories": [
      "Eyewear"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "One Size"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Bio-injected nylon frame",
    "origin": "Made in Italy",
    "description": "Aerodynamic mask lens with laser-etched BB insignia on the nasal bridge.",
    "image1": "images/accessories_414_a.webp",
    "image2": "images/accessories_414_b.webp"
  },
  {
    "id": 415,
    "mainCategory": "accessories",
    "designer": "PRADA",
    "title": "Re-Nylon Enameled Triangle Logo Bucket Hat",
    "price": 695,
    "originalPrice": null,
    "length": "Hats",
    "subcategories": [
      "Hats"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "S (56cm)",
      "M (58cm)",
      "L (60cm)"
    ],
    "badge": "MAISON",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Regenerated Econyl Ocean Nylon",
    "origin": "Made in Italy",
    "description": "Sustainable Re-Nylon accented with the triangular enameled crest.",
    "image1": "images/accessories_415_a.webp",
    "image2": "images/accessories_415_b.webp"
  },
  {
    "id": 416,
    "mainCategory": "accessories",
    "designer": "TOM FORD",
    "title": "Soleil Lip & Private Blend Fragrance Luxury Vault",
    "price": 480,
    "originalPrice": null,
    "length": "Jewelry",
    "subcategories": [
      "Jewelry"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "Limited Edition Set"
    ],
    "badge": "EXCLUSIVE",
    "isNew": true,
    "isBestseller": false,
    "fabric": "White and Gold luxury presentation case",
    "origin": "Made in France",
    "description": "Custom ivory lacquer minaudière clutch with gold trim.",
    "image1": "images/accessories_416_a.webp",
    "image2": "images/accessories_416_b.webp"
  },
  {
    "id": 1,
    "mainCategory": "dresses",
    "designer": "JACQUEMUS",
    "title": "La Robe Saudade Draped Asymmetric Gown",
    "price": 940,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Cocktail",
      "Silk & Satin"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Viscose with Silk sheen finish",
    "origin": "Made in Portugal",
    "description": "Asymmetric drape across decolletage, open back with lingerie strap ties, and bias-cut skirt.",
    "image1": "images/dresses_1_a.webp",
    "image2": "images/dresses_1_b.webp"
  },
  {
    "id": 2,
    "mainCategory": "dresses",
    "designer": "KHAITE",
    "title": "The Danielle Off-Shoulder Matte Ribbed Knit Midi",
    "price": 1480,
    "originalPrice": 1650,
    "length": "Midi",
    "subcategories": [
      "Midi",
      "Little Black Dress",
      "Cocktail"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "83% Matte Viscose, 17% Elite Polyester",
    "origin": "Made in Italy",
    "description": "Dense Italian matte-ribbed knit engineered to sculpt the waist into a fluted hemline.",
    "image1": "images/dresses_2_a.webp",
    "image2": "images/dresses_2_b.webp"
  },
  {
    "id": 3,
    "mainCategory": "dresses",
    "designer": "SAINT LAURENT",
    "title": "Hooded Halter Silk-Georgette Column Gown",
    "price": 3450,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Cocktail",
      "Silk & Satin"
    ],
    "color": "Emerald",
    "colorHex": "#0a3d2c",
    "sizes": [
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Sheer Silk Georgette",
    "origin": "Made in France",
    "description": "Flowing sheer silk cascades over the neckline into an ethereal floor-grazing column.",
    "image1": "images/dresses_3_a.webp",
    "image2": "images/dresses_3_b.webp"
  },
  {
    "id": 4,
    "mainCategory": "dresses",
    "designer": "NORMA KAMALI",
    "title": "Diana One-Shoulder Shirred Bodysuit Gown",
    "price": 495,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Cocktail"
    ],
    "color": "Scarlet Red",
    "colorHex": "#b31b1b",
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": "FWRD EXCLUSIVE",
    "isNew": false,
    "isBestseller": true,
    "fabric": "95% Poly, 5% Spandex",
    "origin": "Imported",
    "description": "Internal sculpting bodysuit veiled in asymmetric shirring that hugs every contour.",
    "image1": "images/dresses_4_a.webp",
    "image2": "images/dresses_4_b.webp"
  },
  {
    "id": 5,
    "mainCategory": "dresses",
    "designer": "COPERNI",
    "title": "Tailored Cut-Out Ring Detail Wool Mini Dress",
    "price": 780,
    "originalPrice": 920,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Cut-Out",
      "Little Black Dress"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)"
    ],
    "badge": "NEW ARRIVAL",
    "isNew": true,
    "isBestseller": false,
    "fabric": "78% Virgin Wool, 22% Silk",
    "origin": "Made in Italy",
    "description": "Geometric rib cutouts anchored by custom ruthenium 'C' ring hardware.",
    "image1": "images/dresses_5_a.webp",
    "image2": "images/dresses_5_b.webp"
  },
  {
    "id": 6,
    "mainCategory": "dresses",
    "designer": "RICK OWENS",
    "title": "Lido Liquid Metallic Draped Column Gown",
    "price": 1890,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Cocktail"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "IT 38 (US 2)",
      "IT 40 (US 4)",
      "IT 42 (US 6)",
      "IT 44 (US 8)"
    ],
    "badge": "RUNWAY",
    "isNew": true,
    "isBestseller": true,
    "fabric": "91% Viscose, 9% Elastane metallic foil",
    "origin": "Made in Italy",
    "description": "Architectural neckline with liquid metallic draping and fishtail train.",
    "image1": "images/dresses_6_a.webp",
    "image2": "images/dresses_6_b.webp"
  },
  {
    "id": 7,
    "mainCategory": "dresses",
    "designer": "MUGLER",
    "title": "Illusion Spiral Mesh Inserted Sculpt Midi Dress",
    "price": 1290,
    "originalPrice": null,
    "length": "Midi",
    "subcategories": [
      "Midi",
      "Cut-Out",
      "Little Black Dress"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "ICONIC",
    "isNew": false,
    "isBestseller": true,
    "fabric": "78% Polyamide, 22% Elastane illusion tulle",
    "origin": "Made in Portugal",
    "description": "Spiral optical illusion sheer panelling curving seamlessly around silhouette.",
    "image1": "images/dresses_7_a.webp",
    "image2": "images/dresses_7_b.webp"
  },
  {
    "id": 8,
    "mainCategory": "dresses",
    "designer": "ALAÏA",
    "title": "Archetype Sculpted Skater Mini in Crinoline Knit",
    "price": 2850,
    "originalPrice": null,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Cocktail",
      "Little Black Dress"
    ],
    "color": "Ivory",
    "colorHex": "#fcfbfa",
    "sizes": [
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "MAISON",
    "isNew": false,
    "isBestseller": true,
    "fabric": "82% Viscose, 18% Polyester sculptural jacquard",
    "origin": "Made in Italy",
    "description": "Fitted bodice with 3D architectural pleated crinoline hem.",
    "image1": "images/dresses_8_a.webp",
    "image2": "images/dresses_8_b.webp"
  },
  {
    "id": 9,
    "mainCategory": "dresses",
    "designer": "ZIMMERMANN",
    "title": "Natura Floral Appliqué Linen-Silk Organza Midi",
    "price": 1350,
    "originalPrice": 1590,
    "length": "Midi",
    "subcategories": [
      "Midi",
      "Silk & Satin"
    ],
    "color": "Blush Pink",
    "colorHex": "#f0cfcf",
    "sizes": [
      "0 (US 2)",
      "1 (US 4)",
      "2 (US 6)",
      "3 (US 8)"
    ],
    "badge": "RESORT",
    "isNew": true,
    "isBestseller": true,
    "fabric": "53% Linen, 47% Silk organza with 3D petal embroidery",
    "origin": "Imported",
    "description": "Handcrafted botanical appliqués, sheer balloon sleeves, and corset bodice.",
    "image1": "images/dresses_9_a.webp",
    "image2": "images/dresses_9_b.webp"
  },
  {
    "id": 10,
    "mainCategory": "dresses",
    "designer": "BOTTEGA VENETA",
    "title": "Leather Accented Scoop Neck Compact Wool Gown",
    "price": 3600,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Cocktail",
      "Little Black Dress"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "IT 38 (US 2)",
      "IT 40 (US 4)",
      "IT 42 (US 6)"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Virgin Compact Wool with lambskin trims",
    "origin": "Made in Italy",
    "description": "Clean minimalist tailoring accented by hand-stitched Intrecciato leather trim.",
    "image1": "images/dresses_10_a.webp",
    "image2": "images/dresses_10_b.webp"
  },
  {
    "id": 11,
    "mainCategory": "dresses",
    "designer": "CHRISTOPHER ESBER",
    "title": "Deconstruct Stone-Detail Ruched Silk Maxi Dress",
    "price": 1150,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Cut-Out",
      "Silk & Satin"
    ],
    "color": "Olive Gold",
    "colorHex": "#606b52",
    "sizes": [
      "AU 6 (US 2)",
      "AU 8 (US 4)",
      "AU 10 (US 6)",
      "AU 12 (US 8)"
    ],
    "badge": "NEW ARRIVAL",
    "isNew": true,
    "isBestseller": true,
    "fabric": "100% Heavy Silk Crepe de Chine with natural quartz hardware",
    "origin": "Made in Australia",
    "description": "Handcrafted mineral stone hardware drawing gathered silk jersey toward torso cutouts.",
    "image1": "images/dresses_11_a.webp",
    "image2": "images/dresses_11_b.webp"
  },
  {
    "id": 12,
    "mainCategory": "dresses",
    "designer": "MAGDA BUTRYM",
    "title": "Corseted 3D Silk Flower Sweetheart Mini Dress",
    "price": 1720,
    "originalPrice": 1950,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Cocktail"
    ],
    "color": "Scarlet Red",
    "colorHex": "#b31b1b",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)"
    ],
    "badge": "RUNWAY",
    "isNew": false,
    "isBestseller": true,
    "fabric": "100% Silk faille with handcrafted silk rosettes",
    "origin": "Made in Poland",
    "description": "Structural interior boning underpins hand-crafted sculptural silk rosettes.",
    "image1": "images/dresses_12_a.webp",
    "image2": "images/dresses_12_b.webp"
  },
  {
    "id": 13,
    "mainCategory": "dresses",
    "designer": "KHAITE",
    "title": "The Lotus Draped Silk-Charmeuse Slip Maxi",
    "price": 1980,
    "originalPrice": null,
    "length": "Maxi",
    "subcategories": [
      "Maxi",
      "Silk & Satin"
    ],
    "color": "Champagne",
    "colorHex": "#e3d3b7",
    "sizes": [
      "US 0",
      "US 2",
      "US 4",
      "US 6",
      "US 8"
    ],
    "badge": "EXCLUSIVITY",
    "isNew": true,
    "isBestseller": false,
    "fabric": "100% Heavyweight Silk Charmeuse",
    "origin": "Made in USA",
    "description": "Liquid silk cut on the bias to cascade down the body with a deep V-back.",
    "image1": "images/dresses_13_a.webp",
    "image2": "images/dresses_13_b.webp"
  },
  {
    "id": 14,
    "mainCategory": "dresses",
    "designer": "JACQUEMUS",
    "title": "La Robe Sierra Halter Neck Strap Detail Mini",
    "price": 670,
    "originalPrice": null,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Cut-Out",
      "Little Black Dress"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 34 (US 2)",
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "BESTSELLER",
    "isNew": false,
    "isBestseller": true,
    "fabric": "68% Viscose, 32% Polyamide ribbed knit",
    "origin": "Made in Portugal",
    "description": "Sleek ribbed mini with fine gold-tone brand lettering on dual front strap accent.",
    "image1": "images/dresses_14_a.webp",
    "image2": "images/dresses_14_b.webp"
  },
  {
    "id": 15,
    "mainCategory": "dresses",
    "designer": "NORMA KAMALI",
    "title": "Slinky Turtleneck High-Slit Column Midi Dress",
    "price": 325,
    "originalPrice": null,
    "length": "Midi",
    "subcategories": [
      "Midi",
      "Little Black Dress"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "XXS",
      "XS",
      "S",
      "M",
      "L"
    ],
    "badge": "ESSENTIAL",
    "isNew": false,
    "isBestseller": true,
    "fabric": "95% Poly, 5% Spandex",
    "origin": "Imported",
    "description": "High turtleneck silhouette complemented by an ankle-length hem and thigh-high split.",
    "image1": "images/dresses_15_a.webp",
    "image2": "images/dresses_15_b.webp"
  },
  {
    "id": 16,
    "mainCategory": "dresses",
    "designer": "SAINT LAURENT",
    "title": "Plunging Sweetheart Velvet Evening Cocktail Mini",
    "price": 2990,
    "originalPrice": null,
    "length": "Mini",
    "subcategories": [
      "Mini",
      "Cocktail",
      "Little Black Dress"
    ],
    "color": "Black",
    "colorHex": "#000000",
    "sizes": [
      "FR 36 (US 4)",
      "FR 38 (US 6)",
      "FR 40 (US 8)"
    ],
    "badge": "COUTURE",
    "isNew": true,
    "isBestseller": false,
    "fabric": "65% Viscose, 35% Cupro Italian plush velvet",
    "origin": "Made in France",
    "description": "Sculpted sweetheart décolleté constructed with interior corset and architectural shoulders.",
    "image1": "images/dresses_16_a.webp",
    "image2": "images/dresses_16_b.webp"
  }
];
