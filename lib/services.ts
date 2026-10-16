export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  items: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "junk-removal",
    title: "Junk Removal",
    short: "Furniture, appliances, mattresses, electronics, construction debris. We load it, haul it, and sweep up.",
    intro: "Point at it and it is gone. Our two-person crews do all the lifting, carry items from anywhere on the property, load the trailer, and sweep the area before leaving. You pay a flat price based on how much space your junk takes up, confirmed before we start.",
    items: ["Couches, sectionals, recliners and mattresses", "Refrigerators, washers, dryers, stoves and A/C units", "TVs, computers and electronics", "Carpet, tile, drywall and renovation debris", "Exercise equipment, pianos and safes", "Garage, attic and storage-unit contents"],
    faqs: [
      { q: "How is junk removal priced?", a: "By volume: how much of the trailer your items fill. We give you a firm price on site before touching anything, and the price includes labor, hauling, disposal fees and cleanup." },
      { q: "Do I need to move everything to the curb?", a: "No. We carry items from wherever they are: upstairs bedrooms, backyards, garages, storage units or condo units." },
      { q: "What happens to my stuff?", a: "Usable furniture and appliances go to donation partners when possible. Metal, cardboard and clean wood are recycled. The rest goes to licensed Broward County disposal facilities." },
    ],
  },
  {
    slug: "demolition",
    title: "Demolition",
    short: "Sheds, decks, fences, kitchens, bathrooms, interior walls, pool decks, tile and flooring tear-outs.",
    intro: "Light demolition done right: cleanly, safely and with everything hauled away the same day. We handle interior tear-outs ahead of renovations and the removal of outdoor structures that have outlived their usefulness.",
    items: ["Kitchen and bathroom demolition (cabinets, counters, tile, fixtures)", "Sheds, barns, gazebos, pergolas and tiki huts", "Decks, fences and wood or chain-link fencing", "Interior non-load-bearing walls and drywall", "Tile, laminate and wood flooring removal", "Pool decks, pavers and small concrete pads", "Above-ground pools and hot tubs"],
    faqs: [
      { q: "Do you handle permits?", a: "Most light demolition we do (sheds, fences, interior finishes) does not require a permit in Broward County. When a job does, such as structural work or anything tied to a renovation permit, we will tell you up front and work with your contractor." },
      { q: "Do you remove the debris too?", a: "Always. Demolition and haul-away are one price. You will not be left with a pile." },
      { q: "Can you work around a contractor's schedule?", a: "Yes. We regularly do the tear-out the day before a remodeling crew starts so the space is clean and ready." },
    ],
  },
  {
    slug: "appliance-furniture-removal",
    title: "Appliance & Furniture Removal",
    short: "Refrigerators, A/C units, washers, dryers, couches and more, disposed of responsibly.",
    intro: "Big, heavy and awkward is our specialty. We remove single items or a whole house worth of furniture and appliances, including from upper floors and condo units, and we dispose of appliances with refrigerant the legal way.",
    items: ["Refrigerators and freezers", "Washers, dryers and dishwashers", "Stoves, ovens and microwaves", "Window and central A/C units", "Sofas, beds, dressers and dining sets", "Office furniture and cubicles"],
    faqs: [
      { q: "Will you take a single item?", a: "Yes. A single-item pickup is our minimum charge, and we often fit it in same day." },
      { q: "Can you take appliances with Freon?", a: "Yes. Refrigerators, freezers and A/C units are taken to facilities that recover the refrigerant properly." },
    ],
  },
  {
    slug: "yard-storm-debris",
    title: "Yard & Storm Debris Removal",
    short: "Branches, palm fronds, leaves, fencing and anything a storm leaves behind.",
    intro: "South Florida yards generate a lot of debris, and hurricane season generates a lot more. We clear branches, fronds, downed fencing, old landscaping and storm damage, and haul it off so you are not waiting weeks for a bulk pickup.",
    items: ["Tree limbs, palm fronds and brush", "Downed or rotted fencing", "Old pavers, rocks, soil and mulch", "Sheds and screen enclosures damaged by storms", "Pool-screen debris and aluminum", "Leftover materials from landscaping projects"],
    faqs: [
      { q: "Do you cut trees down?", a: "We are not a tree service, but once limbs or trees are on the ground we cut them to size and haul everything away." },
      { q: "How fast can you come after a storm?", a: "We prioritize storm calls and run extra crews after major weather. Call early and we will get you on the list." },
    ],
  },
  {
    slug: "cleanouts",
    title: "Home, Office & Warehouse Cleanouts",
    short: "Estate cleanouts, move-outs, evictions, retail and commercial properties.",
    intro: "When an entire space needs to be emptied, we send a crew that can do it in a day. Estates, rentals between tenants, foreclosures, offices closing or relocating, retail shops and warehouses. You tell us what stays and we remove everything else.",
    items: ["Estate and probate cleanouts", "Move-out and tenant-turnover cleanouts", "Eviction and foreclosure cleanouts", "Office, retail and restaurant cleanouts", "Warehouse racking, pallets and inventory disposal", "Storage-unit cleanouts"],
    faqs: [
      { q: "Can you work with a realtor or property manager instead of me?", a: "Yes. We regularly coordinate directly with agents, property managers and attorneys and can invoice the estate or company." },
      { q: "Do you sort for valuables or documents?", a: "If you ask us to, we set aside anything that looks personal or valuable (photos, documents, jewelry, cash) for you to review before it goes." },
    ],
  },
  {
    slug: "hoarder-cleanouts",
    title: "Hoarder Cleanouts",
    short: "Discreet, judgment-free, done in a day whenever possible.",
    intro: "We help families and property owners take back a home that has gotten out of hand. Our crews are respectful, discreet and experienced with the realities of these jobs: tight paths, heavy accumulation, sanitation concerns and emotional stress. We work at the pace you set.",
    items: ["Whole-home and single-room cleanouts", "Unmarked trucks and trailers on request", "Sorting of keepsakes, documents and valuables", "Removal of spoiled food and biohazard-adjacent waste", "Coordination with family, caseworkers or landlords", "Follow-up visits as needed"],
    faqs: [
      { q: "Will the neighbors know?", a: "Not from us. We can arrive in unmarked vehicles and we do not discuss jobs with anyone but the person who hired us." },
      { q: "How long does it take?", a: "Most homes take one to two days with a full crew. We give you a time estimate along with the price after a quick walkthrough." },
    ],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
