import { getAssetUrl } from '../utils/assetHelper';

const rawPRODUCTS = [
  {
    id: "noir-72",
    name: "NOIR 72",
    tagline: "Dark Chocolate · 72% Cocoa",
    type: "Single Origin Dark",
    cocoaPercent: 72,
    origin: "Ecuador (Esmeraldas)",
    weight: "85g / 3.0oz",
    image: "/assets/images/1.png",
    featured: true,
    shortDesc: "Pure Ecuadorian dark chocolate with velvety structure and lingering notes of roasted cacao nibs and dark caramel.",
    tastingNotes: ["Deep Cocoa", "Roasted Hazelnut", "Espresso", "Dark Caramel"],
    texture: "Crisp snap breaking into a dense, melt-in-mouth emulsion.",
    aroma: "Rich roasted cacao bean, light tobacco leaf, smoked honey.",
    finish: "Subtle espresso bitterness giving way to a warm molasses sweetness.",
    ingredients: "Organic Ecuadorian Cocoa Mass, Organic Cane Sugar, Cocoa Butter, Organic Vanilla Pod.",
    pairing: "Single malt whisky or double espresso."
  },
  {
    id: "velvet-hazelnut",
    name: "VELVET",
    tagline: "Milk Chocolate · Hazelnut Praline",
    type: "Praline & Milk",
    cocoaPercent: 45,
    origin: "Piedmont & Ghana",
    weight: "90g / 3.17oz",
    image: "/assets/images/velvet.jpg",
    featured: true,
    shortDesc: "Silky milk chocolate casing embracing slow-roasted Piedmont IGP hazelnut praline creme.",
    tastingNotes: ["Toasted Hazelnut", "Warm Milk", "Golden Butter", "Vanilla Bean"],
    texture: "Sumptuously smooth with fine crunchy micro-praline crystals.",
    aroma: "Freshly toasted nuts, caramelized butter, sweet cream.",
    finish: "Comforting, long nuttiness with gentle cocoa warmth.",
    ingredients: "Cocoa Butter, Whole Milk Powder, Roasted Piedmont Hazelnuts (30%), Cane Sugar, Cocoa Mass.",
    pairing: "Aged Port or Cappuccino."
  },
  {
    id: "sea-salt",
    name: "SALT",
    tagline: "Dark Chocolate · Sea Salt",
    type: "Infused Dark",
    cocoaPercent: 68,
    origin: "Madagascar & Maldon",
    weight: "85g / 3.0oz",
    image: "/assets/images/seasalt.jpg",
    featured: true,
    shortDesc: "Bright Madagascan cocoa enlivened with hand-harvested Maldon flake sea salt.",
    tastingNotes: ["Bright Citrus", "Flaky Sea Salt", "Toasted Caramel", "Red Berries"],
    texture: "Smooth dark chocolate punctuated by delicate crunchy salt flakes.",
    aroma: "Tart red berry preserve, ocean mineral breeze, roasted cacao.",
    finish: "Vibrant contrast of salinity cutting through dark cocoa richness.",
    ingredients: "Organic Madagascan Cocoa Mass, Cane Sugar, Cocoa Butter, Flaky Sea Salt (1.5%).",
    pairing: "Pinot Noir or Earl Grey Tea."
  },
  {
    id: "amber-caramel",
    name: "AMBER",
    tagline: "Caramel · Dark Chocolate",
    type: "Filled Bonbon & Bar",
    cocoaPercent: 64,
    origin: "Ghana & Normandy",
    weight: "80g / 2.82oz",
    image: "/assets/images/amber.jpg",
    featured: true,
    shortDesc: "Slow-cooked burnt salted butter caramel encapsulated in a glossy dark chocolate shell.",
    tastingNotes: ["Burnt Butter", "Golden Caramel", "Dark Chocolate", "Vanilla"],
    texture: "Crisp dark shell yielding to a flowing, molten golden core.",
    aroma: "Caramelized sugar, toasted butter, dark roast cocoa.",
    finish: "Deep buttery indulgence balanced by structured cocoa acidity.",
    ingredients: "Cocoa Mass, Cane Sugar, Normandy Butter, Heavy Cream, Sea Salt, Cocoa Butter.",
    pairing: "Bourbon or Spiced Chai."
  },
  {
    id: "noir-85",
    name: "NOIR 85",
    tagline: "Single Origin Dark · 85% Cocoa",
    type: "Single Origin Dark",
    cocoaPercent: 85,
    origin: "Madagascar (Sambirano Valley)",
    weight: "85g / 3.0oz",
    image: "/assets/images/2.png",
    featured: false,
    shortDesc: "An unadulterated expression of high-percentage cocoa with bold fruitiness and earthy depth.",
    tastingNotes: ["Black Currant", "Earthy Timber", "Smoked Plum", "Raw Cacao"],
    texture: "Firm, clean fracture with slow, luxurious dissolution.",
    aroma: "Wild berries, damp forest earth, roasted oak.",
    finish: "Tannic elegance with zero bitterness and deep berry resonance.",
    ingredients: "Organic Madagascan Cocoa Beans, Organic Cocoa Butter, Raw Cane Sugar (15%).",
    pairing: "Cabernet Sauvignon or Peaty Islay Whisky."
  },
  {
    id: "almond-praline",
    name: "ALMOND PRALINE",
    tagline: "Dark Chocolate · Whole Roasted Almonds",
    type: "Praline & Nuts",
    cocoaPercent: 65,
    origin: "Spain & Ecuador",
    weight: "95g / 3.35oz",
    image: "/assets/images/almond.jpg",
    featured: false,
    shortDesc: "Golden Marcona almonds roasted with cocoa butter embedded inside intense Ecuadorian dark chocolate.",
    tastingNotes: ["Toasted Almond", "Dark Honey", "Toffee", "Smoked Cocoa"],
    texture: "Hearty crunchy nuts swathed in velvety dark cocoa coating.",
    aroma: "Roast nut oils, dark cane syrup, warm cacao.",
    finish: "Satisfying nut crunch with dark roasted finish.",
    ingredients: "Ecuadorian Cocoa Mass, Roasted Marcona Almonds (35%), Cane Sugar, Cocoa Butter.",
    pairing: "Amaretto or Cognac."
  },
  {
    id: "pistachio-bonbon",
    name: "PISTACHIO EMERALD",
    tagline: "Dark Bonbon · Sicilian Pistachio",
    type: "Praline & Nuts",
    cocoaPercent: 70,
    origin: "Bronte (Sicily) & Ghana",
    weight: "75g / 2.64oz",
    image: "/assets/images/pistachio.jpg",
    featured: false,
    shortDesc: "Hand-moulded dark chocolate shell housing a silky Sicilian green pistachio praline paste.",
    tastingNotes: ["Green Pistachio", "Sweet Almond", "White Floral", "Dark Cocoa"],
    texture: "Lush creamy green interior enclosed in a high-shine shell.",
    aroma: "Fresh roasted pistachio, almond flower, dark cocoa butter.",
    finish: "Subtle nutty elegance with aromatic floral undertones.",
    ingredients: "Cocoa Mass, Bronte Pistachio Cream (30%), Cocoa Butter, Sugar, Natural Spirulina Extract (color).",
    pairing: "Champagne or Matcha Latte."
  },
  {
    id: "cocoa-nib",
    name: "COCOA NIB CRUNCH",
    tagline: "Dark Chocolate · Caramelized Nibs",
    type: "Infused Dark",
    cocoaPercent: 75,
    origin: "Ghana (Ashanti Region)",
    weight: "85g / 3.0oz",
    image: "/assets/images/5.png",
    featured: false,
    shortDesc: "Single-origin dark chocolate studded with slow-roasted caramelized cocoa nibs for raw texture.",
    tastingNotes: ["Raw Nibs", "Espresso Crunch", "Molasses", "Woody Spice"],
    texture: "Smooth dark matrix with energetic burst of crunchy roasted nibs.",
    aroma: "Freshly ground coffee beans, raw cocoa pods, cedar wood.",
    finish: "Rhythmic crunch followed by long, dry cocoa complexity.",
    ingredients: "Ghanaian Cocoa Mass, Roasted Cocoa Nibs (12%), Cane Sugar, Cocoa Butter.",
    pairing: "Cold Brew Coffee or Stout Beer."
  },
  {
    id: "signature-truffles",
    name: "SIGNATURE TRUFFLE COLLECTION",
    tagline: "Artisan Box · 9 Handcrafted Truffles",
    type: "Luxury Gift Sets",
    cocoaPercent: 70,
    origin: "Blend of Origins",
    weight: "180g / 6.35oz",
    image: "/assets/images/8.png",
    featured: false,
    shortDesc: "A curated ensemble of our master chocolatier's finest handcrafted ganache and praline truffles.",
    tastingNotes: ["Champagne Ganache", "Smoked Vanilla", "Pistachio Praline", "Salted Caramel"],
    texture: "A symphony of silky, crispy, and liquid interiors.",
    aroma: "Rich cocoa hall aromatics, cognac, warm spices.",
    finish: "Multifaceted sensory progression across 9 unique recipes.",
    ingredients: "Selected Cocoa Masses, Fresh Cream, Butter, Hazelnuts, Pistachios, Maldon Salt, Edible Gold Leaf.",
    pairing: "Celebratory Champagne or Vintage Sherry."
  },
  {
    id: "dark-gift-box",
    name: "THE GRAND COCOA CHEST",
    tagline: "Luxury Gift Box · Bars & Bonbons",
    type: "Luxury Gift Sets",
    cocoaPercent: 72,
    origin: "Multi-Origin Heritage",
    weight: "350g / 12.3oz",
    image: "/assets/images/15.png",
    featured: false,
    shortDesc: "Our flagship wooden and foil-stamped presentation chest housing 4 full bars and 12 bonbons.",
    tastingNotes: ["Ecuador Floral", "Madagascar Berry", "Ghana Cocoa", "Caramel Gold"],
    texture: "Diverse tasting journey spanning crisp bars and molten bonbons.",
    aroma: "Pure chocolate factory olfactory bliss.",
    finish: "Unforgettable luxury gifting experience.",
    ingredients: "Full spectrum of CHOCOCRAFT single-origin chocolates and artisan pralines.",
    pairing: "The ultimate tasting party centerpiece."
  },
  {
    id: "les-petits-fours",
    name: "LES PETITS FOURS BONBONS",
    tagline: "Artisan Box · 16 Hand-Painted Ganaches",
    type: "Luxury Gift Sets",
    cocoaPercent: 74,
    origin: "Zürich Atelier Speciality",
    weight: "240g / 8.46oz",
    image: "/assets/images/12.png",
    featured: true,
    shortDesc: "A jewel-like collection of 16 hand-painted dark chocolate bonbons infused with Tahitian vanilla, passionfruit caramel, and single-origin ganache.",
    tastingNotes: ["Tahitian Vanilla", "Passionfruit", "Single Origin", "24k Gold Leaf"],
    texture: "Thin glossy chocolate shell snapping into silky, molten liquid ganache.",
    aroma: "Tropical passionfruit, floral orchid vanilla, dark roast cocoa butter.",
    finish: "Sophisticated fruit acidity melting into luxurious dark chocolate elegance.",
    ingredients: "Ecuadorian & Madagascan Cocoa Mass, Fresh Swiss Cream, Butter, Passionfruit Puree, Tahitian Vanilla, 24k Edible Gold Leaf.",
    pairing: "Vintage Champagne or Espresso Martini."
  },
  {
    id: "or-noir-caramel",
    name: "OR NOIR CARAMEL",
    tagline: "Infused Dark · Fleur de Sel Caramel",
    type: "Infused & Salt",
    cocoaPercent: 70,
    origin: "Brittany & Ghana",
    weight: "90g / 3.17oz",
    image: "/assets/images/14.png",
    featured: true,
    shortDesc: "Deep Ghanaian dark chocolate bar infused with slow-cooked Normandy caramel ribbons and hand-harvested Fleur de Sel.",
    tastingNotes: ["Fleur de Sel", "Burnt Butter", "Ghana Cocoa", "Toasted Vanilla"],
    texture: "Crisp dark chocolate snap with luscious gooey caramel rivers.",
    aroma: "Warm toasted sugar, salted butter, smoked cacao.",
    finish: "Balanced contrast of savoury sea salt and sweet buttery dark chocolate.",
    ingredients: "Ghanaian Cocoa Mass, Cane Sugar, Normandy Butter, Heavy Cream, Guérande Fleur de Sel, Cocoa Butter.",
    pairing: "Highland Single Malt or Cold Brew."
  },
  {
    id: "noir-90",
    name: "NOIR 90 GRAND CRU",
    tagline: "Single Origin Dark · 90% Cocoa",
    type: "Single Origin Dark",
    cocoaPercent: 90,
    origin: "Ecuador (Gran Couva)",
    weight: "85g / 3.0oz",
    image: "/assets/images/2.png",
    featured: true,
    shortDesc: "An intense 90% single-origin dark chocolate bar with deep espresso aromas, smoky timber notes, and a long velvet finish.",
    tastingNotes: ["Smoked Timber", "Dark Espresso", "Roasted Cacao", "Black Plum"],
    texture: "Firm acoustic fracture melting into a rich cocoa emulsion.",
    aroma: "Smoked wood, dark cocoa bean, roasted coffee.",
    finish: "Noble cocoa intensity with zero harshness.",
    ingredients: "Organic Ecuadorian Cocoa Beans, Organic Cocoa Butter, Raw Cane Sugar (10%).",
    pairing: "Peaty Islay Whisky or Double Ristretto."
  },
  {
    id: "praline-royale",
    name: "PRALINE ROYALE CHEST",
    tagline: "Luxury Gift Box · 12 Roasted Nut Bonbons",
    type: "Luxury Gift Sets",
    cocoaPercent: 68,
    origin: "Piedmont & Bronte",
    weight: "220g / 7.76oz",
    image: "/assets/images/15.png",
    featured: true,
    shortDesc: "Hand-crafted gift box featuring roasted Piedmont hazelnut, Marcona almond, and Sicilian pistachio pralines wrapped in dark cocoa.",
    tastingNotes: ["Piedmont Hazelnut", "Bronte Pistachio", "Roasted Almond", "Gold Dust"],
    texture: "Crisp dark chocolate shell with velvet nut praline centers.",
    aroma: "Toasted nuts, warm butter, dark cocoa.",
    finish: "Lingering nutty sweetness with dark chocolate warmth.",
    ingredients: "Cocoa Mass, Hazelnuts, Almonds, Pistachios, Cocoa Butter, Sugar, Sea Salt.",
    pairing: "Vintage Port or Cappuccino."
  },
  {
    id: "chili-fleur",
    name: "CHILI FLEUR DE CACAO",
    tagline: "Infused Dark · Ancho Chili & Cocoa",
    type: "Infused & Salt",
    cocoaPercent: 72,
    origin: "Oaxaca & Ghana",
    weight: "85g / 3.0oz",
    image: "/assets/images/13.png",
    featured: false,
    shortDesc: "Deep dark chocolate infused with smoky Mexican Ancho chili warmth and subtle Ceylon cinnamon spice.",
    tastingNotes: ["Ancho Chili", "Smoked Spice", "Dark Cocoa", "Cinnamon"],
    texture: "Velvety dark chocolate melt with lingering warmth.",
    aroma: "Smoked chili, cinnamon bark, roasted cocoa.",
    finish: "Gentle spicy warmth balancing dark cocoa richness.",
    ingredients: "Ghanaian Cocoa Mass, Cane Sugar, Cocoa Butter, Ancho Chili Powder, Ceylon Cinnamon.",
    pairing: "Mezcal or Spiced Hot Chocolate."
  },
  {
    id: "gianduja-gold",
    name: "GIANDUJA GOLD TABLET",
    tagline: "Praline & Nuts · Golden Hazelnut",
    type: "Praline & Nuts",
    cocoaPercent: 55,
    origin: "Turin & Ecuador",
    weight: "90g / 3.17oz",
    image: "/assets/images/almond.jpg",
    featured: false,
    shortDesc: "Ultra-smooth Swiss gianduja chocolate crafted with 40% slow-roasted hazelnut paste and Ecuadorian cocoa.",
    tastingNotes: ["Smooth Gianduja", "Roasted Nut", "Creamy Butter", "Vanilla"],
    texture: "Mouth-melting silky cream texture with zero grit.",
    aroma: "Warm gianduja, roasted hazelnut oil, sweet cream.",
    finish: "Luxurious creamy hazelnut finish.",
    ingredients: "Roasted Hazelnuts (40%), Cocoa Mass, Cocoa Butter, Cane Sugar, Whole Milk Powder.",
    pairing: "Espresso or Dessert Wine."
  }
];

const rawPROCESS_STEPS = [
  {
    step: "01",
    title: "COCOA POD",
    subtitle: "Harvesting & Pod Selection",
    desc: "Every bar starts high in the tropical canopy. We harvest only fully ripened pods by hand, inspecting each pod for pulp moisture and seed vitality.",
    image: "/assets/images/cocoapod.jpg"
  },
  {
    step: "02",
    title: "FERMENT",
    subtitle: "Flavor Precursor Awakening",
    desc: "Enclosed in wooden cascade boxes under banana leaves, natural yeasts ferment the sweet pulp for 6 days, unlocking deep aromatic cocoa precursors.",
    image: "/assets/images/3.png"
  },
  {
    step: "03",
    title: "DRY",
    subtitle: "Equatorial Sun Curing",
    desc: "Beans are spread across elevated wooden tables under tropical sunlight, turned constantly to achieve ideal 7% moisture and preserve delicate fruit notes.",
    image: "/assets/images/drying.jpg"
  },
  {
    step: "04",
    title: "ROAST",
    subtitle: "Precision Thermal Profiling",
    desc: "In small 30kg batches, we gently roast the nibs using low-temperature custom profiles tailored to each origin's unique volatile aromatics.",
    image: "/assets/images/roasting.jpg"
  },
  {
    step: "05",
    title: "GRIND",
    subtitle: "Granite Stone Refining",
    desc: "Heavy granite wheels grind cocoa nibs for up to 72 hours until particles drop below 15 microns — imperceptible to the human tongue.",
    image: "/assets/images/6.png"
  },
  {
    step: "06",
    title: "TEMPER",
    subtitle: "Form V Crystal Alignment",
    desc: "Liquid chocolate is agitated over cold marble, aligning cocoa butter crystals to deliver that signature glossy sheen and crisp, satisfying snap.",
    image: "/assets/images/liquid.jpg"
  },
  {
    step: "07",
    title: "CHOCOLATE",
    subtitle: "The Finished Masterpiece",
    desc: "Poured into custom debossed moulds, cooled under strict humidity control, and wrapped by hand in foil and heavy textured card stock.",
    image: "/assets/images/truffles.jpg"
  }
];

const rawORIGINS = [
  {
    id: "ecuador",
    country: "ECUADOR",
    region: "Esmeraldas Province",
    profile: "Floral · Fruity · Complex",
    desc: "Sourced from native Arriba Nacional cacao trees growing in the mist-shrouded river basins of Esmeraldas. Noted for its rare jasmine floral fragrance and subtle green olive finish.",
    notes: ["Jasmine Flower", "Green Olive", "Dark Honey", "Toasted Wood"],
    elevation: "250m - 500m",
    harvest: "May - December",
    coordinates: "0.9592° N, 79.6560° W",
    image: "/assets/images/9.png"
  },
  {
    id: "ghana",
    country: "GHANA",
    region: "Ashanti High Plateau",
    profile: "Deep Cocoa · Nutty · Robust",
    desc: "Classic West African Forastero cacao cultivated by smallholder family farms. Delivers the legendary, deep-toned classic chocolate foundation with toasted nut notes.",
    notes: ["Fudge Cocoa", "Roasted Peanut", "Warm Cinnamon", "Brown Sugar"],
    elevation: "300m - 600m",
    harvest: "October - February",
    coordinates: "6.6885° N, 1.6244° W",
    image: "/assets/images/10.png"
  },
  {
    id: "madagascar",
    country: "MADAGASCAR",
    region: "Sambirano Valley",
    profile: "Bright · Fruity · Elegant",
    desc: "Nurtured by volcanic soils and tropical rains in northwest Madagascar. Celebrated globally for its electric red berry acidity, citrus brightness, and natural pink peppercorn notes.",
    notes: ["Raspberry", "Citrus Zest", "Pink Peppercorn", "Red Wine"],
    elevation: "50m - 200m",
    harvest: "May - November",
    coordinates: "13.8829° S, 48.4729° E",
    image: "/assets/images/11.png"
  }
];

const rawCRAFT_SECTIONS = [
  {
    id: "roast",
    title: "ROAST WITH INTENTION.",
    subtitle: "SECTION 01 — THE ROAST",
    heading: "Fire, time, and volatile aromatics.",
    copy: "Roasting is where raw cocoa beans reveal their soul. We reject harsh industrial high-heat roasting in favor of low-temperature, extended roasting profiles. Each origin requires a custom thermal curve to preserve delicate fruit esters while developing deep, rounded chocolate notes.",
    image: "/assets/images/5.png",
    quote: "Degrees matter. A two-degree variation alters the balance between bright acidity and rich cacao butter notes."
  },
  {
    id: "grind",
    title: "TEXTURE BEGINS HERE.",
    subtitle: "SECTION 02 — THE GRIND & CONCH",
    heading: "Stone wheel refining to sub-micron perfection.",
    copy: "Using traditional granite melangeurs, raw cocoa nibs are slowly ground for 72 continuous hours. Air and friction naturally evaporate harsh volatile acids while aeration smooths out liquid chocolate to an unmatchable velvety texture.",
    image: "/assets/images/6.png",
    quote: "Patience creates silk. We never rush the conching phase."
  },
  {
    id: "temper",
    title: "SHINE. SNAP. FINISH.",
    subtitle: "SECTION 03 — THE TEMPER",
    heading: "The physics of Form V cocoa butter crystal alignment.",
    copy: "Tempering is the pinnacle of chocolate science. By heating, cooling, and gently working molten chocolate over solid marble counters, we force cocoa butter molecules into stable Form V Beta crystals. This yields a brilliant mirror-like gloss and a sharp acoustic snap.",
    image: "/assets/images/7.png",
    quote: "A true chocolate snap is music to a chocolatier's ears."
  },
  {
    id: "hand-finish",
    title: "THE HUMAN TOUCH.",
    subtitle: "SECTION 04 — HAND FINISHING",
    heading: "Artisan hands, delicate gold leaf, and individual inspection.",
    copy: "While machines provide precise thermal control, every truffle, bonbon shell, and bar wrapping is completed by human hands. Every bonbon is individually painted, hand-dusted with raw cocoa powder, and inspected under directional studio light before being placed into rigid presentation boxes.",
    image: "/assets/images/8.png",
    quote: "No two artisan bars are identical; each carries the subtle signature of the craftsman."
  }
];

export const TASTING_GUIDE = {
  ritual: [
    {
      step: "01",
      name: "LOOK",
      action: "Examine Under Directional Light",
      desc: "Observe the surface finish. True luxury tempered chocolate displays a smooth, satin gloss without dull streaks or sugar bloom."
    },
    {
      step: "02",
      name: "SMELL",
      action: "Cup & Inhale Aromatic Top Notes",
      desc: "Lightly rub the surface with your thumb to warm the cocoa butter. Cup the chocolate near your nose and inhale deeply to capture floral and fruity volatiles."
    },
    {
      step: "03",
      name: "BREAK",
      action: "Listen For The Acoustic Snap",
      desc: "Snap a square near your ear. A clean, crisp acoustic sound indicates perfect Form V tempering and high cocoa butter integrity."
    },
    {
      step: "04",
      name: "TASTE",
      action: "Allow To Melt On The Tongue",
      desc: "Do not chew immediately. Place a small piece on the middle of your tongue, close your eyes, and let body temperature naturally melt the cocoa butter."
    },
    {
      step: "05",
      name: "FINISH",
      action: "Savor The Aftertaste",
      desc: "Note how long the flavor lingers after swallowing. Great chocolate leaves a warm, clean, multi-layered finish without sticky cloying sweetness."
    }
  ],
  categories: [
    {
      title: "AROMA",
      notes: ["Raw Cocoa Pod", "Roasted Hazelnut", "Vanilla Bean", "Espresso Beans", "Jasmine Floral", "Smoked Wood", "Red Currant"]
    },
    {
      title: "TEXTURE",
      notes: ["Velvety Silky", "Dense Creamy", "Crisp Acoustic Snap", "Molten Flowing Core", "Micro-Praline Crunch"]
    },
    {
      title: "FINISH",
      notes: ["Burnt Caramel", "Dark Espresso", "Deep Cocoa Resin", "Flaky Sea Salt", "Toasted Oak"]
    }
  ]
};

export const PRODUCTS = rawPRODUCTS.map(item => ({ ...item, image: getAssetUrl(item.image) }));
export const PROCESS_STEPS = rawPROCESS_STEPS.map(item => ({ ...item, image: getAssetUrl(item.image) }));
export const ORIGINS = rawORIGINS.map(item => ({ ...item, image: getAssetUrl(item.image) }));
export const CRAFT_SECTIONS = rawCRAFT_SECTIONS.map(item => ({ ...item, image: getAssetUrl(item.image) }));

