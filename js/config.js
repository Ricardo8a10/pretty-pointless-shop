/* =====================================================================
   STORE CONFIG: edit this file to change the store name, WhatsApp
   number, and products and prices. No build step needed: save and refresh.
   ===================================================================== */
window.CONFIG = {
  storeName: "Pretty Pointless Shop",
  tagline: "Totally pointless. Absolutely pretty. 3D printed in the UAE.",

  // WhatsApp number in wa.me format: digits only, country code first, no "+" or spaces.
  whatsappNumber: "971525516208",
  // How the number is shown on the page.
  whatsappDisplay: "+971 52 551 6208",

  currency: "AED",
  deliveryNote: "Delivery across the UAE. Made to order in 3–5 days.",
  paymentNote: "Cash on delivery or bank transfer (details shared on WhatsApp).",

  // License credit (required by the INFINITY 3D PRINTS commercial license).
  // Do not remove.
  licensor: {
    name: "INFINITY 3D PRINTS",
    patreon: "https://www.patreon.com/Infinity3DPrints_",
    makerworld: "https://makerworld.com/en/@Infinity3DPrint"
  },

  // Prefilled WhatsApp messages. {product}, {price}, {currency} are replaced.
  orderMessage: "Hi! I'd like to order: {product} ({currency} {price}). Color: ___",
  generalMessage: "Hi Pretty Pointless Shop! I have a question about your 3D prints."
};

/* Filter chips, shown in this order. */
window.CATEGORIES = ["Halloween", "Christmas", "Home Bits"];
/* Other tags used on cards (not filter chips): "Soap & Candle Holders", "Figures", "Home Decor" */

/* =====================================================================
   PRODUCTS
   - price: number in AED
   - categories: any of the CATEGORIES above
   - badge: optional sticker text ("NEW", "Spooky", "Holiday", "Add-on", ...)
   - colors: shown as swatches. "Custom colors on request" is always added.
   - imageFit: optional, "contain" for cut-outs (transparent PNG/WebP).
   - noLicenseCredit: optional, true for designs NOT by INFINITY 3D PRINTS (hides the
            "Licensed design by" line on that card).
   - image: optional. Put YOUR OWN photo in assets/products/ and set e.g.
            image: "assets/products/santa-head.jpg". Leave "" for the placeholder.
            Never use the designer's photos or renders (license rule).
   - Never put "Bath & Body Works" or "BBW" in a product NAME.
   ===================================================================== */
window.PRODUCTS = [
  /* ---------------- HALLOWEEN ---------------- */
  {
    id: "spooky-hands-candle",
    name: "Spooky Hands Candle Holder",
    price: 220,
    categories: ["Halloween"],
    badge: "NEW",
    description: "Two spooky hands raise a glowing candle on a swirly black base with a carved pumpkin. A showstopper for your Halloween table. Fits Bath & Body Works 3-wick candles (tested).",
    colors: ["As shown", "Custom on request"],
    image: "assets/hero-candle.webp",
    imageFit: "contain"   // "contain" for cut-out images on a transparent background; omit for normal photos
  },
  {
    id: "grim-sprite-soap",
    name: "Grim Sprite Foaming Soap Holder",
    price: 85,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A cute little reaper keeps watch over your sink. More adorable than scary, promise. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Black", "Lilac", "White"],
    image: "assets/products/grim-sprite-soap.webp"
  },
  {
    id: "boss-sprite-soap",
    name: "Boss Sprite Foaming Soap Holder",
    price: 85,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "The sprite in charge of the bathroom. Bold, cheeky, and ready for spooky season. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Orange", "Black", "Mint"],
    image: "assets/products/boss-sprite-soap.webp"
  },
  {
    id: "scarecrow-soap",
    name: "Scarecrow Foaming Soap Holder",
    price: 90,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A friendly harvest scarecrow with patchwork charm, just right for cosy autumn vibes. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Wheat", "Orange", "Brown"],
    image: "assets/products/scarecrow-soap.webp"
  },
  {
    id: "spicy-gus-soap",
    name: "Spicy Gus the Ghost Soap Holder",
    price: 75,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "Everyone's favourite spicy ghost, now guarding your soap. Fits Bath & Body Works foaming soap bottles.",
    colors: ["White", "Lilac", "Black"],
    image: "assets/products/spicy-gus-soap.webp"
  },
  {
    id: "boobees-house-decor",
    name: "Boobees Halloween House Decor",
    price: 90,
    categories: ["Halloween", "Home Decor"],
    badge: "Spooky",
    description: "A buzzing little haunted house of ghostly bees. Playful Halloween decor for a mantel or entryway.",
    colors: ["Yellow & Black", "Lilac", "White"],
    image: "assets/products/boobees-house-decor.webp"
  },
  {
    id: "ghoul-candy-holder",
    name: "Ghoul Life-Size Candy Holder",
    price: 220,
    categories: ["Halloween", "Home Decor"],
    badge: "Big one",
    description: "A seriously big ghoul that holds the treats at your door. The statement piece your Halloween party needs.",
    colors: ["Bone White", "Black", "Mint"],
    image: "assets/products/ghoul-candy-holder.webp"
  },
  {  // source: Patreon post 164769627: THE GRIM REAPER BBW FOAMING SOAP HOLDER
    id: "grim-reaper-soap",
    name: "Grim Reaper Soap Holder",
    price: 90,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A cute hooded reaper with his scythe, standing guard over your sink. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/grim-reaper-soap.webp",
    imageAlt: "Hooded reaper soap holder with scythe"
  },
  {  // source: Patreon post 165080331: CHUCKY BBW FOAMING SOAP HOLDER
    id: "killer-doll-soap",
    name: "Killer Doll Soap Holder",
    price: 100,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A freckled doll in denim overalls who is definitely up to no good. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/killer-doll-soap.webp",
    imageAlt: "Freckled doll in overalls soap holder"
  },
  {  // source: Patreon post 163830203: JASON BBW FOAMING SOAP HOLDER
    id: "hockey-mask-slasher-soap",
    name: "Hockey Mask Slasher Soap Holder",
    price: 110,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A chibi slasher in a hockey mask. Friday the 13th has never looked this cute. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/hockey-mask-slasher-soap.webp",
    imageAlt: "Chibi hockey mask slasher soap holder"
  },
  {  // source: Patreon post 163273130: MICHAEL MYERS BBW FOAMING SOAP HOLDER
    id: "masked-stalker-soap",
    name: "Masked Stalker Soap Holder",
    price: 110,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A silent pale-masked stalker in blue overalls, quietly watching over your soap. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/masked-stalker-soap.webp",
    imageAlt: "Pale masked figure in blue overalls soap holder"
  },
  {  // source: Patreon post 164218508: FREDDY BBW FOAMING SOAP HOLDER
    id: "dream-stalker-soap",
    name: "Dream Stalker Soap Holder",
    price: 100,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "Striped sweater, battered hat and a wicked grin. Sweet dreams at the sink. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/dream-stalker-soap.webp",
    imageAlt: "Chibi figure in striped sweater and hat soap holder"
  },
  {  // source: Patreon post 162971201: GHOST FACE BBW FOAMING SOAP HOLDER
    id: "screaming-mask-soap",
    name: "Screaming Mask Soap Holder",
    price: 100,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "The famous screaming ghost mask in a black robe, now on sink duty. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/screaming-mask-soap.webp",
    imageAlt: "Screaming ghost mask soap holder"
  },
  {  // source: Patreon post 165598550: ART THE CLOWN BBW FOAMING SOAP HOLDER
    id: "creepy-clown-soap",
    name: "Creepy Clown Soap Holder",
    price: 95,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A black-and-white clown with a sinister smile. Not for the faint-hearted. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/creepy-clown-soap.webp",
    imageAlt: "Black and white creepy clown soap holder"
  },
  {  // source: Patreon post 170022361: BILLY THE PUPPET BBW FOAMING SOAP HOLDER
    id: "creepy-puppet-soap",
    name: "Creepy Puppet Soap Holder",
    price: 105,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A pale puppet with spiral cheeks and a little red bow tie who wants to play a game. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/creepy-puppet-soap.webp",
    imageAlt: "Pale puppet with red cheeks soap holder"
  },
  {  // source: Patreon post 169929573: WEDNESDAY ADDAMS BBW FOAMING SOAP HOLDER
    id: "gothic-girl-soap",
    name: "Gothic Schoolgirl Soap Holder",
    price: 105,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "NEW",
    description: "A deadpan girl with black braids standing beside a tiny tombstone. Gloomy never looked so cute. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/gothic-girl-soap.webp",
    imageAlt: "Girl with black braids beside a tombstone soap holder"
  },
  {  // source: Patreon post 168064552: SAM BBW FOAMING SOAP HOLDER
    id: "sack-head-trick-or-treater-soap",
    name: "Sack Head Trick-or-Treater Soap Holder",
    price: 110,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A little trick-or-treater with a stitched sack head and a lollipop. Always follow the rules. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/sack-head-trick-or-treater-soap.webp",
    imageAlt: "Trick-or-treater with sack head and lollipop soap holder"
  },
  {  // source: Patreon post 167402628: ZERO BBW FOAMING SOAP HOLDER
    id: "ghost-pup-soap",
    name: "Ghost Pup Soap Holder",
    price: 130,
    categories: ["Halloween", "Soap & Candle Holders"],
    badge: "Spooky",
    description: "A floaty ghost puppy with a glowing nose in front of a spooky little house. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/ghost-pup-soap.webp",
    imageAlt: "Ghost puppy soap holder with a spooky house"
  },
  
  
  {  // source: Patreon post 168614619: THE SHRUNKEN HEAD HOUSE DECOR
    id: "shrunken-head-decor",
    name: "Shrunken Head House Decor",
    price: 95,
    categories: ["Halloween", "Home Decor"],
    badge: "NEW",
    description: "A stitched-lip shrunken head with wild hair. Creepy-cute decor for your haunted house.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/shrunken-head-decor.webp",
    imageAlt: "Teal shrunken head decoration with stitched mouth"
  },
  /* ---------------- CHRISTMAS ---------------- */
  {
    id: "green-grump-santa-soap",
    name: "Grumpy Green Santa Soap Dispenser",
    price: 125,
    categories: ["Christmas", "Soap & Candle Holders"],
    badge: "NEW",
    description: "A mischievous green grump in a fluffy Santa suit, standing guard next to his big red gift sack. The sack holds your hand soap, so every wash feels festive. Fits Bath & Body Works foaming soap bottles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/green-grump-santa-soap.webp",
    imageAlt: "Grumpy green Santa figure beside a red gift sack soap dispenser"
  },
  {
    id: "santa-head-soap",
    name: "Santa Head Foaming Soap Holder",
    price: 65,
    categories: ["Christmas", "Soap & Candle Holders"],
    badge: "Holiday",
    description: "A jolly Santa face that turns your hand soap into holiday decor, just slide the bottle in. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Red & White", "Pastel Pink", "White"],
    image: "assets/products/santa-head-soap.webp"
  },
  {
    id: "santa-sleigh-soap",
    name: "Santa's Sleigh Foaming Soap Holder",
    price: 90,
    categories: ["Christmas", "Soap & Candle Holders"],
    badge: "Holiday",
    description: "Your soap bottle rides shotgun in Santa's sleigh. A festive centrepiece for the sink all season long. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Red", "Gold", "Mint"],
    image: "assets/products/santa-sleigh-soap.webp"
  },
  {
    id: "bad-to-the-bone-santa-soap",
    name: "Bad to the Bone Santa Soap Holder",
    price: 110,
    categories: ["Christmas", "Soap & Candle Holders"],
    badge: "NEW",
    description: "Santa with a bit of attitude, for anyone whose Christmas spirit comes with an edge. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Red & Black", "White", "Lilac"],
    image: "assets/products/bad-to-the-bone-santa-soap.webp"
  },
  {  // source: Patreon post 170563991: RALPHIE CANDLE HOLDER
    id: "bunny-suit-kid-candle",
    name: "Pink Bunny Suit Candle Holder",
    price: 110,
    categories: ["Christmas", "Soap & Candle Holders"],
    badge: "NEW",
    description: "A kid in the fluffiest pink bunny pyjamas, proudly holding up your candle. Fits Bath & Body Works 3-wick candles.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/bunny-suit-kid-candle.webp",
    imageAlt: "Kid in a pink bunny suit holding a candle"
  },
  /* ---------------- HOME BITS ---------------- */
  {  // source: MakerWorld: Monstera coaster Plant by Super_Laserkatz (1557600), not an Infinity design
    id: "monstera-leaf-coaster-plant",
    name: "Monstera Leaf Coaster Plant",
    price: 145,
    categories: ["Home Bits", "Home Decor"],
    badge: "NEW",
    description: "A potted monstera whose leaves are magnetic coasters. Pluck one for your drink, snap it back and it is a plant again.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/monstera-leaf-coaster-plant.webp",
    imageAlt: "Potted monstera plant with leaf-shaped magnetic coasters",
    noLicenseCredit: true   // not an INFINITY 3D PRINTS design: card hides the license credit
  }
];

/* =====================================================================
   PARKED FOR LATER: not shown on the site right now (Halloween + Christmas
   focus). To restore one, move its { ... } block back into PRODUCTS above.
   If you bring back non-seasonal items, restore the extra CATEGORIES too.
   ===================================================================== */
window.PRODUCTS_LATER = [
  {
    id: "astronaut-soap",
    name: "Astronaut Foaming Soap Holder",
    price: 65,
    categories: ["Soap & Candle Holders"],
    badge: "",
    description: "One small wash for hands, one giant leap for sink style. A year-round pick for space fans of any age. Fits Bath & Body Works foaming soap bottles.",
    colors: ["White", "Silver", "Periwinkle"],
    image: ""
  },
  {
    id: "chloe-cat-figure",
    name: "Chloe the Cat Figure",
    price: 80,
    categories: ["Figures", "Home Decor"],
    badge: "NEW",
    description: "Chloe is a sweet, sassy cat figure who looks right at home on a desk, shelf, or bedside table.",
    colors: ["Black", "Pastel Pink", "Lilac", "White"],
    image: ""
  },
  {
    id: "chloe-cat-soap",
    name: "Chloe the Cat Soap Holder",
    price: 65,
    categories: ["Soap & Candle Holders"],
    badge: "",
    description: "The cat that finally made handwashing fun. A purr-fect everyday soap holder for cat people. Fits Bath & Body Works foaming soap bottles.",
    colors: ["Black", "Pastel Pink", "White"],
    image: ""
  },
  {
    id: "longhorn-candle-holder",
    name: "Lone Star Longhorn Candle Holder",
    price: 75,
    categories: ["Home Decor", "Soap & Candle Holders"],
    badge: "",
    description: "Western vibes with a longhorn silhouette to frame your favourite candle. Rustic, bold, and easy to gift.",
    colors: ["Sand", "Black", "White"],
    image: ""
  },
  {
    id: "soap-to-candle-adapter",
    name: "Soap Holder to Candle Holder Adapter",
    price: 25,
    categories: ["Soap & Candle Holders"],
    badge: "Add-on",
    description: "Turns any of our soap holders into a candle holder, so one design works two ways. Add it to any soap holder order.",
    colors: ["White", "Black", "Gold"],
    image: ""
  },
  {  // source: Patreon post 167944419: CHUCKY FULL FIGURE
    id: "killer-doll-figure",
    name: "Killer Doll Figure",
    price: 90,
    categories: ["Halloween", "Figures"],
    badge: "Spooky",
    description: "The freckled troublemaker doll as a full figure, knife and all. A horror-fan favourite.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/killer-doll-figure.webp",
    imageAlt: "Freckled doll figure in overalls"
  },
  {  // source: Patreon post 166717144: JASON FULL FIGURE
    id: "hockey-mask-slasher-figure",
    name: "Hockey Mask Slasher Figure",
    price: 90,
    categories: ["Halloween", "Figures"],
    badge: "Spooky",
    description: "The hockey-masked camp counsellor's worst nightmare, in adorable full-figure form.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/hockey-mask-slasher-figure.webp",
    imageAlt: "Chibi hockey mask slasher figure"
  },
  {  // source: Patreon post 165770940: MICHAEL MYERS FULL FIGURE
    id: "masked-stalker-figure",
    name: "Masked Stalker Figure",
    price: 90,
    categories: ["Halloween", "Figures"],
    badge: "Spooky",
    description: "The pale-masked stalker as a chibi full figure. Spooky season essential.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/masked-stalker-figure.webp",
    imageAlt: "Pale masked stalker chibi figure"
  },
  {  // source: Patreon post 167394613: FREDDY FULL FIGURE
    id: "dream-stalker-figure",
    name: "Dream Stalker Figure",
    price: 90,
    categories: ["Halloween", "Figures"],
    badge: "Spooky",
    description: "The striped-sweater nightmare man as a chibi full figure.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/dream-stalker-figure.webp",
    imageAlt: "Chibi figure in striped sweater and hat"
  },
  {  // source: Patreon post 165189379: FULL FIGURE (ghost mask)
    id: "screaming-mask-figure",
    name: "Screaming Mask Figure",
    price: 90,
    categories: ["Halloween", "Figures"],
    badge: "Spooky",
    description: "The screaming ghost mask as a chibi full figure. Answer the phone at your own risk.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/screaming-mask-figure.webp",
    imageAlt: "Chibi screaming ghost mask figure"
  },
  {  // source: Patreon post 169563867: ART THE CLOWN FULL FIGURE
    id: "creepy-clown-figure",
    name: "Creepy Clown Figure",
    price: 95,
    categories: ["Halloween", "Figures"],
    badge: "Spooky",
    description: "The black-and-white creepy clown as a full figure, saw in hand. Maximum horror, minimum size.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/creepy-clown-figure.webp",
    imageAlt: "Black and white creepy clown figure"
  },
  {  // source: Patreon post 169664740: WEDNESDAY ADDAMS FULL FIGURE
    id: "gothic-girl-figure",
    name: "Gothic Schoolgirl Figure",
    price: 90,
    categories: ["Halloween", "Figures"],
    badge: "NEW",
    description: "The deadpan girl with black braids as a full figure. Perfect for fans of all things dark.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/gothic-girl-figure.webp",
    imageAlt: "Girl with black braids figure"
  },
  {  // source: Patreon post 169009507: THE GRINCH FULL FIGURE
    id: "grumpy-green-santa-figure",
    name: "Grumpy Green Santa Figure",
    price: 95,
    categories: ["Christmas", "Figures"],
    badge: "NEW",
    description: "The mischievous green grump in his fluffy Santa suit, as a full figure for your mantel.",
    colors: ["As shown", "Custom on request"],
    image: "assets/products/grumpy-green-santa-figure.webp",
    imageAlt: "Green grump figure in a Santa suit"
  }
];
