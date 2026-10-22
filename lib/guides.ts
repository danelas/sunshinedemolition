import type { IconName } from "@/app/icons";

export type GuideSection = {
  heading: string;
  body?: string[];
  list?: { icon?: IconName; title?: string; text: string }[];
  table?: { head: string[]; rows: string[][]; highlight?: number };
};

export type Guide = {
  slug: string;
  icon: IconName;
  title: string; // the question, used as H1
  metaTitle: string;
  description: string;
  quickAnswer: string;
  formService: string;
  relatedService: string; // slug in lib/services.ts
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  updated: string; // ISO date
  sources?: { label: string; url: string }[];
};

// Cost-guide figures used across the house-demolition guides (national, 2025-2026).
const COST_SOURCES = [
  { label: "Angi: How Much Does It Cost to Demolish a House?", url: "https://www.angi.com/articles/how-much-does-it-cost-demolish-house.htm" },
  { label: "HomeAdvisor: House Demolition Cost", url: "https://www.homeadvisor.com/cost/landscape/house-demolition/" },
  { label: "HomeGuide: Cost to Demolish a House", url: "https://homeguide.com/costs/cost-to-demolish-a-house" },
];
const BROWARD_ASBESTOS = { label: "Broward County Asbestos Compliance Program", url: "https://www.broward.org/Air/AsbestosCompliance/" };

export const guides: Guide[] = [
  {
    slug: "light-demolition",
    icon: "hammer",
    title: "What Is Light Demolition?",
    metaTitle: "What Is Light Demolition? Examples, Permits & Cost Factors",
    description:
      "Light demolition is the removal of non-structural parts of a building or small outdoor structures, done with hand and power tools instead of heavy machinery. Examples, how it differs from full demolition, and what to know before you start.",
    quickAnswer:
      "Light demolition is the removal of non-structural parts of a building, or of small standalone structures, using hand and power tools rather than heavy machinery. Think kitchen and bathroom tear-outs, flooring and drywall removal, interior walls that don't carry load, and outdoor items like sheds, decks, fences and hot tubs. The building itself stays standing; only the parts being replaced come out.",
    formService: "Demolition",
    relatedService: "demolition",
    updated: "2026-10-22",
    sections: [
      {
        heading: "Light demolition in plain terms",
        body: [
          "Demolition comes in two broad sizes. Full or structural demolition takes down an entire building or its load-bearing parts, usually with excavators, engineering plans and a site-wide permit. Light demolition is everything smaller: taking out the pieces of a home or business that are being replaced, while the structure around them stays put.",
          "It is also called selective demolition, interior demolition or soft strip, and it is almost always the first step of a renovation. Before a new kitchen goes in, the old one has to come out. Before new floors go down, the old tile has to come up. That tear-out work, plus hauling every piece of it away, is light demolition.",
        ],
      },
      {
        heading: "Common light demolition jobs",
        list: [
          { icon: "home", title: "Kitchens", text: "Cabinets, countertops, backsplash tile, sinks and old appliances removed down to the walls so the new kitchen can go in." },
          { icon: "home", title: "Bathrooms", text: "Vanities, toilets, tubs, shower surrounds, wall and floor tile taken out ahead of a remodel." },
          { icon: "building", title: "Interior walls and drywall", text: "Non-load-bearing partition walls, damaged drywall, closets and built-ins opened up or removed." },
          { icon: "check", title: "Flooring", text: "Tile, carpet and pad, laminate, vinyl and glued-down or nailed wood floors pulled up to the subfloor or slab." },
          { icon: "hammer", title: "Outdoor structures", text: "Sheds, decks, wood or chain-link fences, gazebos, pergolas, tiki huts and screen enclosures." },
          { icon: "palm", title: "Backyard items", text: "Hot tubs, above-ground pools, play sets, pavers and small concrete pads or walkways." },
        ],
      },
      {
        heading: "Light demolition vs. full demolition",
        table: {
          head: ["", "Light demolition", "Full / structural demolition"],
          highlight: 1,
          rows: [
            ["What comes out", "Finishes, fixtures, non-load-bearing walls, small structures", "Entire buildings or load-bearing elements"],
            ["Equipment", "Hand tools, power tools, a trailer or truck", "Excavators, loaders, roll-off containers"],
            ["Building stays standing", "Yes", "No"],
            ["Typical timeline", "A few hours to a couple of days", "Days to weeks, plus planning"],
            ["Permits", "Often none for finishes and small sheds; varies by city", "Almost always required, often with utility and engineering sign-offs"],
            ["Who usually hires it", "Homeowners, landlords, remodelers, property managers", "Developers, general contractors, municipalities"],
          ],
        },
      },
      {
        heading: "When you need light demolition",
        list: [
          { icon: "clipboard", text: "Before a remodel, so your contractor starts on a clean, empty space instead of billing hours for tear-out." },
          { icon: "home", text: "Before selling or renting a property, to remove a rotting deck, a sagging shed or a dated bathroom." },
          { icon: "palm", text: "After a storm, when fences, screen enclosures, carports or water-damaged drywall and flooring have to go." },
          { icon: "heart-home", text: "When reclaiming space: an unused hot tub, an old play set or a shed nobody opens anymore." },
        ],
      },
      {
        heading: "Permits, utilities and safety",
        body: [
          "Removing finishes like cabinets, flooring and tile, or taking down a small shed or fence, often doesn't need its own demolition permit. Rules differ between Broward cities, though, and anything that touches structure, plumbing, electrical or gas usually does. If the demolition is part of a permitted renovation, it normally falls under your contractor's permit. When in doubt, a quick call to your city's building department settles it, and we'll tell you up front if a job looks like it needs one.",
          "Water, power and gas to anything being removed should be shut off and safely capped before demolition starts. For fixed plumbing, electrical circuits and gas lines, that means a licensed plumber or electrician.",
          "Homes built before the 1980s can contain asbestos in popcorn ceilings, some floor tiles and their adhesive, and older drywall joint compound. If there's any chance of it, have the material tested before anyone disturbs it. Asbestos removal is a specialized licensed trade, and we don't handle it.",
        ],
      },
      {
        heading: "What affects the price",
        body: [
          "Light demolition is usually priced by the job rather than by the hour. The main factors are how much material comes out, how heavy it is (tile and concrete weigh far more than drywall), how easy it is to reach and carry out (a second-floor condo vs. a ground-floor garage), and how much hauling and disposal it creates.",
          "We quote a firm flat price on site before any work begins, and that price includes the tear-out, loading, hauling, disposal fees and a broom-clean sweep at the end.",
        ],
      },
      {
        heading: "How Sunshine Demolition handles it",
        list: [
          { icon: "camera", title: "Send photos or book a walk-through", text: "Text pictures to get a quick price range, then we confirm a firm price on site." },
          { icon: "shield", title: "Protect what stays", text: "Floors, doorways and finished areas next to the work are covered before we start." },
          { icon: "hammer", title: "Tear out", text: "We remove only what's agreed, down to studs, subfloor or slab as needed for the next trade." },
          { icon: "truck", title: "Haul it all away", text: "Debris is loaded the same day. Metal and clean wood are recycled when possible." },
          { icon: "broom", title: "Leave it broom-clean", text: "The space is swept and ready for your contractor or the next step." },
        ],
      },
    ],
    faqs: [
      { q: "Is light demolition the same as interior demolition?", a: "Mostly. Interior demolition is light demolition done inside a building, like kitchen, bathroom, flooring and wall tear-outs. Light demolition also covers small outdoor structures such as sheds, decks and fences." },
      { q: "Can I do light demolition myself?", a: "Small jobs, yes, if you're comfortable with the tools and the lifting. The parts people underestimate are the debris volume, which is often several times what they expect, the weight of tile and concrete, and getting it all disposed of legally. Many homeowners do the tear-out and call us just for the haul-away." },
      { q: "Can you remove a load-bearing wall?", a: "Not as light demolition. Removing a load-bearing wall needs an engineer's plan, a permit and temporary support, and it belongs to a licensed general contractor. We're happy to do the non-structural tear-out around it." },
      { q: "How long does light demolition take?", a: "Most single rooms, sheds and decks are done in a few hours to one day, including haul-away. Whole-house interior tear-outs can take two days or more." },
      { q: "Do you haul away the debris?", a: "Always. Tear-out and haul-away are one price, and we leave the space broom-clean." },
    ],
  },
  {
    slug: "demolition-cleanup",
    icon: "broom",
    title: "What Is Demolition Cleanup?",
    metaTitle: "What Is Demolition Cleanup? What's Included & When You Need It",
    description:
      "Demolition cleanup is the removal, hauling and disposal of the debris left after a demolition, renovation or storm, leaving the site broom-clean. What's included, what's not, and how it compares to renting a dumpster.",
    quickAnswer:
      "Demolition cleanup is the job of clearing everything a demolition or renovation leaves behind: loading the drywall, wood, tile, concrete chunks, old fixtures and packaging, hauling it away, sorting out what can be recycled, disposing of the rest at licensed facilities, and sweeping the area so it's safe and ready for the next step. It's what turns a torn-out room or a knocked-down shed into an empty, usable space again.",
    formService: "Demolition Cleanup",
    relatedService: "junk-removal",
    updated: "2026-10-22",
    sections: [
      {
        heading: "Demolition cleanup in plain terms",
        body: [
          "Tearing something out is usually the fast part. What's left afterward is a pile, often far bigger than expected, of heavy, sharp and awkward material that has to be carried out, loaded, driven somewhere legal and paid for by weight. Demolition cleanup, sometimes called construction cleanup or debris removal, is that whole second half of the job.",
          "It's needed whether the demolition was done by a contractor, by the homeowner on a weekend, or by a storm. The goal is the same each time: a clear, swept space with nothing hazardous left behind.",
        ],
      },
      {
        heading: "What's included",
        list: [
          { icon: "truck", title: "Loading and hauling", text: "Every piece of debris is carried out from wherever it is, loaded and driven away the same day." },
          { icon: "check", title: "Sorting", text: "Metal, clean wood and cardboard are separated for recycling when possible, and usable fixtures are set aside for donation." },
          { icon: "shield", title: "Legal disposal", text: "Everything else goes to licensed Broward County facilities, with disposal fees included in the price." },
          { icon: "broom", title: "Final sweep", text: "Floors, driveways and work areas are swept so the space is safe to walk and ready for the next trade." },
        ],
      },
      {
        heading: "Debris we clean up",
        list: [
          { icon: "building", text: "Drywall, plaster, insulation batts, lumber, studs and trim" },
          { icon: "home", text: "Tile, grout, countertops, cabinets, vanities, tubs and toilets" },
          { icon: "hammer", text: "Concrete chunks, pavers, brick and block from small demos" },
          { icon: "check", text: "Carpet, pad, laminate, vinyl and wood flooring" },
          { icon: "palm", text: "Storm debris: fencing, screen enclosures, branches, roofing remnants" },
          { icon: "fridge", text: "Old appliances, water heaters and fixtures pulled during a remodel" },
        ],
      },
      {
        heading: "What's not included",
        body: [
          "Demolition cleanup covers ordinary construction and renovation debris. It doesn't include hazardous materials: asbestos, lead-paint abatement, chemicals, solvents, fuel, or mold remediation. Those need licensed specialists. If you're unsure whether something qualifies, send a photo and we'll tell you before we arrive.",
        ],
      },
      {
        heading: "When you need it",
        list: [
          { icon: "home", text: "After a DIY tear-out, when the kitchen is out and the pile is in the garage or driveway." },
          { icon: "clipboard", text: "Between renovation phases, so the next trade starts on a clean floor instead of working around debris." },
          { icon: "building", text: "Between tenants or before a listing, when a landlord or agent needs a unit cleared fast." },
          { icon: "palm", text: "After a storm, when fences, enclosures and water-damaged material have to go before repairs can start." },
        ],
      },
      {
        heading: "Demolition cleanup vs. renting a dumpster",
        table: {
          head: ["", "Cleanup crew", "Roll-off dumpster"],
          highlight: 1,
          rows: [
            ["Who loads it", "The crew does all the lifting", "You do"],
            ["How long it sits", "Gone the same day", "Usually days to a week or more on your driveway or street"],
            ["HOA or street rules", "Nothing left on the property", "Some HOAs and cities restrict or require approval for placement"],
            ["Heavy debris", "Priced up front on site", "Weight limits, with overage fees for tile and concrete"],
            ["Cleanup at the end", "Area swept", "You clean up around it"],
            ["Best for", "Most single-room, single-structure and post-storm jobs", "Long projects that create debris over several weeks"],
          ],
        },
      },
      {
        heading: "How to get ready",
        list: [
          { icon: "check", text: "Keep a clear path from the debris to the driveway or street so it can be carried out quickly." },
          { icon: "check", text: "Set aside anything you want to keep: fixtures, hardware, salvage wood." },
          { icon: "check", text: "Point out any nails, sharp edges or unstable piles so the crew can start safely." },
          { icon: "camera", text: "Text a few photos ahead of time for a quick price range." },
        ],
      },
    ],
    faqs: [
      { q: "Is demolition cleanup the same as junk removal?", a: "They overlap. Junk removal usually means household items like furniture and appliances. Demolition cleanup focuses on construction debris such as drywall, tile, wood and concrete, which is heavier and needs different disposal. We do both, often on the same visit." },
      { q: "Do I need to bag or stack the debris?", a: "No. We load it from wherever it is. Stacking it in one place can speed things up, but it isn't required." },
      { q: "Can you clean up after another contractor's demolition?", a: "Yes. Contractors, remodelers and property managers regularly book us just for the cleanup and haul-away while their crews move on to the next phase." },
      { q: "How is demolition cleanup priced?", a: "By volume and weight: how much of the trailer the debris fills and how heavy it is. You get a firm flat price on site before we start, with labor, hauling, disposal fees and the final sweep included." },
      { q: "How fast can you come?", a: "Usually the same day or the next day anywhere in Broward County. Call or text in the morning and we can often be there that afternoon." },
    ],
  },
  {
    slug: "how-much-do-they-pay-for-demolition",
    icon: "tag",
    title: "How Much Do They Pay for Demolition?",
    metaTitle: "How Much Do They Pay for Demolition? Worker Pay & Job Costs",
    description:
      "Demolition pay depends on which side of the job you're on. Demolition laborers earn around $47,000 a year at the national median, while homeowners typically pay a few hundred dollars for a small tear-out and $6,000 to $25,000 to demolish a whole house.",
    quickAnswer:
      "It depends who's asking. Demolition crews are counted by the U.S. Bureau of Labor Statistics as construction laborers, whose national median pay was $47,120 a year in May 2025, about $22.65 an hour. On the customer side, small light-demolition jobs like a shed, deck or bathroom tear-out are usually priced as a flat job, while demolishing an entire house generally runs $4 to $17 per square foot, or roughly $6,000 to $25,000 for a typical home, according to national cost guides.",
    formService: "Demolition",
    relatedService: "demolition",
    updated: "2026-10-22",
    sources: [
      { label: "U.S. Bureau of Labor Statistics: Construction Laborers (SOC 47-2061), May 2025", url: "https://www.bls.gov/oes/2025/may/construction1.htm" },
      ...COST_SOURCES,
    ],
    sections: [
      {
        heading: "What demolition workers get paid",
        body: [
          "The Bureau of Labor Statistics doesn't track demolition as its own occupation. Most demolition crew members are counted as construction laborers, and the May 2025 national figures for that group are below. Hourly figures are the annual numbers divided by a 2,080-hour work year.",
        ],
        table: {
          head: ["Pay level", "Per year", "About per hour"],
          highlight: 2,
          rows: [
            ["Lowest 10%", "$35,090", "$16.87"],
            ["Lowest 25%", "$38,620", "$18.57"],
            ["Median", "$47,120", "$22.65"],
            ["Highest 25%", "$59,740", "$28.72"],
            ["Highest 10%", "$78,090", "$37.54"],
          ],
        },
      },
      {
        heading: "What moves demolition pay up",
        list: [
          { icon: "hammer", title: "Equipment skills", text: "Operators who run excavators, skid steers and hydraulic breakers earn more than general laborers." },
          { icon: "shield", title: "Certifications", text: "Asbestos and lead abatement work requires licensing and training, and pays accordingly." },
          { icon: "building", title: "Commercial and union work", text: "Large commercial and public projects often pay prevailing or union wage rates." },
          { icon: "clock", title: "Overtime and storm work", text: "Post-hurricane cleanup in South Florida brings long days and overtime for crews." },
        ],
      },
      {
        heading: "What homeowners pay for demolition",
        body: [
          "For customers, the price depends mostly on the size of the job and what it's made of. National cost guides from Angi, HomeAdvisor and HomeGuide put whole-house demolition at roughly $4 to $17 per square foot, with most homes landing between $6,000 and $25,000. Asbestos or lead can push it far higher.",
          "Light demolition is a different scale. A shed, a fence run, a deck or a bathroom tear-out is usually priced as one flat job that includes the hauling and disposal, not by the square foot.",
        ],
        table: {
          head: ["Job", "How it's usually priced", "What drives the price"],
          rows: [
            ["Shed, deck, fence, hot tub", "Flat price per job", "Size, material, access, haul volume"],
            ["Kitchen or bathroom tear-out", "Flat price per room", "Tile and countertops (weight), cabinets, floor level"],
            ["Whole-house interior gut", "Per square foot or per project", "Square footage, finishes, debris weight"],
            ["Full house demolition", "$4 to $17 per sq ft (national guides)", "Wood vs. concrete block, foundation, asbestos, permits"],
          ],
        },
      },
      {
        heading: "Does anyone pay you to demolish your house?",
        body: [
          "Occasionally a builder or investor buys a teardown property because they want the land, but nobody normally pays a homeowner for the demolition itself. What can offset the cost is salvage: fixtures, cabinets, doors, metal and some lumber can be donated, sold or recycled, which reduces what goes to the landfill and sometimes the disposal bill.",
        ],
      },
    ],
    faqs: [
      { q: "How much does a demolition laborer make an hour?", a: "Nationally, construction laborers, the category that includes most demolition crew members, had a median of about $22.65 an hour in May 2025 based on BLS annual figures. Pay ranges from around $17 an hour at the low end to more than $37 at the top." },
      { q: "Do demolition jobs pay more than other construction jobs?", a: "Entry-level demolition labor pays about the same as general construction labor. It pays more once you add equipment operation, abatement certifications or supervisory work." },
      { q: "How much does a small demolition job cost?", a: "Small light-demolition jobs like a shed, a section of fence or a bathroom tear-out are usually priced as one flat job that includes hauling and disposal. The fastest way to get a real number is to text photos to a local crew." },
      { q: "Is demolition priced by the hour or by the job?", a: "Most residential demolition is priced by the job or by the square foot, not by the hour, so you know the cost before work starts." },
    ],
  },
  {
    slug: "three-types-of-demolition",
    icon: "building",
    title: "What Are the Three Types of Demolition?",
    metaTitle: "What Are the Three Types of Demolition? Total, Selective & Deconstruction",
    description:
      "The three main types of demolition are total demolition, selective (or interior) demolition, and deconstruction. Here's how each works, when it's used, and how they compare on cost, time and recycling.",
    quickAnswer:
      "The three main types of demolition are total demolition, which takes an entire structure down, usually with heavy machinery; selective demolition, which removes only certain parts like interiors, finishes or an addition while the rest of the building stays; and deconstruction, which takes a building apart piece by piece so materials can be reused or recycled. Implosion, using explosives, is a specialized method used for very large structures, not a common type for homes.",
    formService: "Demolition",
    relatedService: "demolition",
    updated: "2026-10-22",
    sources: [
      { label: "NSW EPA: House deconstruction fact sheet (full demolition vs. selective vs. full deconstruction)", url: "https://www.epa.nsw.gov.au/sites/default/files/100080-house-deconstruction.pdf" },
      COST_SOURCES[2],
    ],
    sections: [
      {
        heading: "1. Total demolition",
        body: [
          "Total or complete demolition removes the whole structure, usually down to the foundation and sometimes including it. On homes this is typically done with an excavator fitted with a bucket or grapple, after utilities are disconnected and any hazardous materials have been dealt with.",
          "It's the fastest way to clear a lot for a new build, and it's usually the cheapest per square foot, but very little of the material gets reused.",
        ],
      },
      {
        heading: "2. Selective demolition",
        body: [
          "Selective demolition, also called partial, interior or light demolition, removes only specific parts of a building while the structure stays standing. Kitchens, bathrooms, flooring, non-load-bearing walls, ceilings, an old addition, a porch or a carport are all common targets.",
          "It's the first step of almost every renovation, and it's what most homeowners actually need. It's done mostly with hand and power tools, and the debris is hauled out as the work goes.",
        ],
      },
      {
        heading: "3. Deconstruction",
        body: [
          "Deconstruction is demolition in reverse: the building is taken apart carefully, roughly in the opposite order it was built, so that lumber, doors, windows, cabinets, fixtures, metal and masonry can be reused or recycled.",
          "It takes longer and costs more in labor. HomeGuide puts it at about $8 to $16 per square foot. Some of that can be offset by the value of salvaged materials or donations.",
        ],
      },
      {
        heading: "How the three types compare",
        table: {
          head: ["", "Total demolition", "Selective demolition", "Deconstruction"],
          rows: [
            ["What's removed", "The entire structure", "Specific parts only", "The entire structure, piece by piece"],
            ["Building stays standing", "No", "Yes", "No"],
            ["Main tools", "Excavators, loaders", "Hand and power tools", "Hand tools, light equipment"],
            ["Speed", "Fastest", "Fast for its scope", "Slowest"],
            ["Reuse and recycling", "Low", "Moderate", "Highest"],
            ["Typical use", "Clearing a lot for a new build", "Renovations, storm repairs, outdoor structures", "Green builds, salvage, historic materials"],
          ],
        },
      },
      {
        heading: "What about implosion?",
        body: [
          "Implosion uses carefully placed explosives to bring a large building down onto its own footprint. It's used for towers, stadiums and big industrial structures, requires specialized engineering firms and extensive permitting, and is never used on houses.",
        ],
      },
      {
        heading: "Which type do you need?",
        list: [
          { icon: "home", text: "Remodeling a kitchen, bathroom or floor, or removing a shed, deck or fence: selective demolition." },
          { icon: "building", text: "Replacing a house entirely with a new one: total demolition, done by a licensed demolition contractor with permits." },
          { icon: "check", text: "Want to salvage materials or reduce landfill waste on a teardown: deconstruction." },
        ],
      },
    ],
    faqs: [
      { q: "What type of demolition is used for renovations?", a: "Selective demolition, also called interior or light demolition. Only the parts being replaced come out, and the rest of the building stays standing." },
      { q: "Is deconstruction more expensive than demolition?", a: "Usually yes in labor, because the building is taken apart by hand. Salvage value, donations and lower disposal costs can offset part of the difference." },
      { q: "What is soft stripping?", a: "Soft stripping is removing non-structural interior items, like fixtures, fittings, flooring, ceilings and partitions, before a larger demolition or renovation. It's a form of selective demolition." },
      { q: "Which type of demolition does Sunshine Demolition do?", a: "Selective, or light, demolition: interior tear-outs, sheds, decks, fences, hot tubs and similar jobs, plus the cleanup and haul-away. We don't do total demolition of houses or implosions." },
    ],
  },
  {
    slug: "cost-to-demolish-3000-sq-ft-house",
    icon: "home",
    title: "How Much to Demolish a 3,000 Sq Ft House?",
    metaTitle: "How Much to Demolish a 3,000 Sq Ft House? 2026 Cost Breakdown",
    description:
      "Demolishing a 3,000-square-foot house typically costs about $12,000 to $30,000 for wood-frame construction, and more for concrete block or if asbestos is present. Here's the math, what drives the price, and what's not included.",
    quickAnswer:
      "Using national cost-guide figures of roughly $4 to $10 per square foot for a typical house, demolishing a 3,000 sq ft home works out to about $12,000 to $30,000. Concrete block or masonry construction, which is common in South Florida, can push it toward $17 per square foot, or around $51,000. Asbestos or lead abatement, permits and foundation removal add more. Only a local, on-site quote gives a real number.",
    formService: "Demolition",
    relatedService: "demolition",
    updated: "2026-10-22",
    sources: [...COST_SOURCES, BROWARD_ASBESTOS],
    sections: [
      {
        heading: "The math for 3,000 square feet",
        body: [
          "These ranges multiply national per-square-foot figures from Angi, HomeAdvisor and HomeGuide by 3,000. They're planning numbers, not quotes. Your price depends on the house, the lot and your city.",
        ],
        table: {
          head: ["Scenario", "Cost per sq ft", "3,000 sq ft total"],
          highlight: 2,
          rows: [
            ["Foundation left in place", "$3 to $7", "$9,000 to $21,000"],
            ["Typical wood-frame house", "$4 to $10", "$12,000 to $30,000"],
            ["Concrete block, brick or masonry", "Up to about $17", "Up to about $51,000"],
            ["With asbestos or lead abatement", "Up to about $25", "Up to about $75,000"],
          ],
        },
      },
      {
        heading: "What drives the price",
        list: [
          { icon: "building", title: "Construction type", text: "Concrete block and stucco, standard in much of Broward County, is heavier and slower to take down than wood frame, and costs more to haul." },
          { icon: "shield", title: "Hazardous materials", text: "Homes built before the 1980s may contain asbestos. A survey is required before demolition, and abatement by licensed specialists can be the single biggest add-on." },
          { icon: "home", title: "Foundation and slab", text: "Removing the slab or foundation adds cost. Leaving it for the new build is cheaper." },
          { icon: "truck", title: "Debris and disposal", text: "A 3,000 sq ft house produces many truckloads of debris, and landfill fees are charged by weight." },
          { icon: "pin", title: "Access and lot", text: "Tight lots, overhead lines, trees and neighbors close by slow the work down." },
          { icon: "clipboard", title: "Permits and utilities", text: "Demolition permits, utility disconnects and county asbestos paperwork all have fees and lead times." },
        ],
      },
      {
        heading: "What's usually not in the base price",
        body: [
          "Most full-demolition quotes cover the teardown and debris removal. Asbestos testing and abatement, permit fees, utility disconnects, removing trees, pools, driveways or septic systems, and final grading are often priced separately. Ask every contractor to itemize so the quotes can be compared fairly.",
        ],
      },
      {
        heading: "Ways to bring the cost down",
        list: [
          { icon: "check", text: "Empty the house completely before the demolition crew arrives, so you're not paying heavy-equipment rates to move furniture." },
          { icon: "check", text: "Salvage or donate cabinets, doors, appliances and fixtures first." },
          { icon: "check", text: "Get the asbestos survey done early, so there are no surprises mid-project." },
          { icon: "check", text: "Get at least three itemized quotes from licensed, insured demolition contractors." },
        ],
      },
      {
        heading: "Where Sunshine Demolition fits",
        body: [
          "We don't knock down whole houses. That's a job for a licensed demolition contractor with heavy equipment. What we do is the work before and around it: emptying a house of furniture, appliances and junk ahead of a teardown, stripping interiors, removing sheds, fences, decks and hot tubs on the lot, and cleaning up debris. Clearing a house first can shorten the demolition crew's time on site.",
        ],
      },
    ],
    faqs: [
      { q: "Is it cheaper to demolish a house or renovate it?", a: "It depends on the condition of the structure. Demolition plus a new build almost always costs more up front than renovation, but when the foundation, framing or roof are failing, rebuilding can make more sense long term. A contractor or engineer can assess the structure." },
      { q: "How long does it take to demolish a 3,000 sq ft house?", a: "The physical teardown is often one to a few days. Permits, utility disconnects, asbestos surveys and any abatement usually take much longer than the demolition itself." },
      { q: "Do I need an asbestos survey before demolishing a house in Broward County?", a: "Broward County's asbestos program requires a survey and notification before demolition of structures subject to its rules, and individual cities set their own permit checklists. Check with your city's building department and the county asbestos program before scheduling." },
      { q: "Can you clear out the house before it's demolished?", a: "Yes. We empty houses of furniture, appliances and junk, and remove outdoor structures, so the demolition crew starts with a clean shell." },
    ],
  },
  {
    slug: "do-you-need-permission-to-demolish",
    icon: "clipboard",
    title: "Do You Need Permission to Demolish?",
    metaTitle: "Do You Need Permission to Demolish? Permits Explained (Broward, FL)",
    description:
      "Demolishing a building almost always needs a permit from your city's building department, and often asbestos paperwork, utility disconnect letters and HOA approval. Smaller light-demolition jobs often don't. Here's how to tell, with a focus on Broward County, Florida.",
    quickAnswer:
      "Usually, yes, if you're tearing down a building or anything structural. Demolishing a house, garage or other structure generally needs a demolition permit from your city's building department, and in Broward County it can also involve county asbestos paperwork, utility disconnect confirmations and sometimes historic or HOA approval. Removing finishes like cabinets, flooring and tile, or taking down a small shed or fence, often doesn't need its own permit, but rules vary by city, so a quick call to your building department is the safest first step.",
    formService: "Demolition",
    relatedService: "demolition",
    updated: "2026-10-22",
    sources: [
      BROWARD_ASBESTOS,
      { label: "City of Fort Lauderdale: Demolition permit package", url: "https://www.fortlauderdale.gov/files/assets/public/v/1/development-services/documents/dsd-documents-amp-forms/demolition-permit-package.pdf" },
      { label: "City of Wilton Manors: Demolition permit requirements", url: "https://wiltonmanors.gov/DocumentCenter/View/8512/Demolition-4224" },
    ],
    sections: [
      {
        heading: "When you usually need a permit",
        list: [
          { icon: "building", text: "Demolishing a house, duplex, commercial building, garage or other enclosed structure." },
          { icon: "hammer", text: "Removing or altering load-bearing walls, roofs or anything structural." },
          { icon: "bolt", text: "Work that disconnects or changes electrical, plumbing or gas systems." },
          { icon: "home", text: "Demolition that's part of a larger permitted renovation, which is usually covered by the contractor's permit." },
        ],
      },
      {
        heading: "When you often don't",
        list: [
          { icon: "check", text: "Pulling out cabinets, countertops, flooring, tile or drywall with no structural, electrical or plumbing changes." },
          { icon: "check", text: "Taking down a small shed, a fence, a deck or a play set, depending on your city's size thresholds." },
          { icon: "check", text: "Removing a hot tub or above-ground pool once it's been safely disconnected." },
        ],
        body: [
          "Thresholds and exemptions differ from one Broward city to the next, so treat this list as a starting point, not a guarantee.",
        ],
      },
      {
        heading: "What Broward County cities commonly ask for",
        body: [
          "Each city runs its own building department and checklist, but demolition permit applications in Broward commonly include some combination of the items below. The county's Asbestos Compliance Program requires an asbestos survey and notice before demolition of structures covered by its rules; some city checklists treat single-family homes differently, so confirm what applies to your property.",
        ],
        list: [
          { icon: "clipboard", title: "Demolition permit application", text: "Filed with the city building department, usually by a licensed contractor." },
          { icon: "shield", title: "Asbestos paperwork", text: "An asbestos survey and Broward County's Statement of Responsibilities Regarding Asbestos where required." },
          { icon: "bolt", title: "Utility disconnect letters", text: "Confirmation that electric (FPL), water and gas service have been disconnected and capped." },
          { icon: "check", title: "Pest control report", text: "Some cities ask for proof the property has been treated for rodents before demolition." },
          { icon: "pin", title: "Site plan or survey", text: "Showing what's being removed and what stays." },
        ],
      },
      {
        heading: "Other permission you might need",
        list: [
          { icon: "home", title: "HOA or condo association", text: "Many associations require written approval before any exterior demolition or before contractors work in a unit." },
          { icon: "building", title: "Historic preservation", text: "Properties in a designated historic district or with historic designation can need board approval before demolition." },
          { icon: "heart-home", title: "Landlord or owner", text: "Tenants need the owner's written permission before removing anything that's part of the property." },
        ],
      },
      {
        heading: "What happens if you skip the permit",
        body: [
          "Unpermitted demolition can bring stop-work orders, fines, required after-the-fact permits at higher fees, and problems when you sell or insure the property. Asbestos rules carry their own penalties. When a job clearly needs a permit, the cost and paperwork are worth handling up front.",
        ],
      },
      {
        heading: "How Sunshine Demolition handles it",
        body: [
          "Most of the light demolition we do, like sheds, fences, decks and interior finish tear-outs, doesn't need its own permit. If a job looks like it does, or touches anything structural, we tell you before we quote, and for permitted renovations we work under your contractor's permit and schedule.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a permit to demolish a shed in Florida?", a: "Often not for a small shed, but it depends on the city and the shed's size and whether it has electrical or plumbing. Check with your city's building department." },
      { q: "Can a homeowner pull their own demolition permit?", a: "Florida has an owner-builder exemption that lets property owners pull some permits for their own home, with conditions. Rules and paperwork vary by city, so ask your building department whether it applies to demolition on your property." },
      { q: "How long does a demolition permit take in Broward County?", a: "It varies by city and by how complete the application is. Asbestos paperwork alone has a required lead time before work starts, so plan for at least a couple of weeks for a full structure demolition." },
      { q: "Do I need a permit to remove a non-load-bearing wall?", a: "Sometimes. Removing a non-structural wall with no electrical or plumbing inside it is often allowed without one, but if wiring, plumbing or HVAC has to be moved, a permit is usually required." },
    ],
  },
  {
    slug: "cost-to-demolish-1500-sq-ft-house",
    icon: "home",
    title: "How Much to Demolish a 1,500 Sq Ft House?",
    metaTitle: "How Much to Demolish a 1,500 Sq Ft House? 2026 Cost Breakdown",
    description:
      "Demolishing a 1,500-square-foot house typically costs about $6,000 to $15,000 for wood-frame construction, with concrete block, asbestos and foundation removal adding more. Here's the math and what changes the price.",
    quickAnswer:
      "Using national cost-guide figures of roughly $4 to $10 per square foot for a typical house, demolishing a 1,500 sq ft home costs about $6,000 to $15,000. Concrete block or masonry construction, common in South Florida, can push it toward $17 per square foot, or about $25,500. Asbestos or lead abatement can raise it further, and permits, utility disconnects and foundation removal are often extra.",
    formService: "Demolition",
    relatedService: "demolition",
    updated: "2026-10-22",
    sources: [...COST_SOURCES, BROWARD_ASBESTOS],
    sections: [
      {
        heading: "The math for 1,500 square feet",
        body: [
          "These ranges multiply national per-square-foot figures from Angi, HomeAdvisor and HomeGuide by 1,500. A 1,500 sq ft house is right around the size where most national averages are measured, which is why so many guides quote totals in the $6,000 to $25,000 range.",
        ],
        table: {
          head: ["Scenario", "Cost per sq ft", "1,500 sq ft total"],
          highlight: 2,
          rows: [
            ["Foundation left in place", "$3 to $7", "$4,500 to $10,500"],
            ["Typical wood-frame house", "$4 to $10", "$6,000 to $15,000"],
            ["Concrete block, brick or masonry", "Up to about $17", "Up to about $25,500"],
            ["With asbestos or lead abatement", "Up to about $25", "Up to about $37,500"],
          ],
        },
      },
      {
        heading: "Why South Florida homes can cost more",
        body: [
          "Much of Broward County's housing, especially homes built from the 1950s onward, is concrete block with stucco. Block is heavier and slower to break down than wood framing, and the extra weight raises disposal costs because landfills charge by the ton. Older homes are also more likely to need asbestos testing, which Broward County requires before demolition of structures covered by its rules.",
        ],
      },
      {
        heading: "What drives the price",
        list: [
          { icon: "building", title: "Construction type", text: "Wood frame is at the low end; concrete block and masonry at the high end." },
          { icon: "shield", title: "Hazardous materials", text: "Asbestos surveys are required before demolition, and abatement is the most common large add-on." },
          { icon: "home", title: "Slab removal", text: "Leaving the slab is cheaper. Removing it adds equipment time and tonnage." },
          { icon: "truck", title: "Disposal", text: "Debris is hauled by the truckload and charged by weight at the landfill." },
          { icon: "clipboard", title: "Permits and utilities", text: "City permit fees, utility disconnect letters and county paperwork all add cost and time." },
          { icon: "palm", title: "Extras on the lot", text: "Pools, sheds, driveways, trees and fences are usually priced separately." },
        ],
      },
      {
        heading: "Ways to save",
        list: [
          { icon: "check", text: "Clear the house of furniture, appliances and junk before the demolition crew's heavy equipment arrives." },
          { icon: "check", text: "Donate or sell usable cabinets, doors, fixtures and appliances first." },
          { icon: "check", text: "Schedule the asbestos survey early so abatement doesn't delay the project." },
          { icon: "check", text: "Compare at least three itemized quotes from licensed, insured contractors." },
        ],
      },
      {
        heading: "Where Sunshine Demolition fits",
        body: [
          "We don't demolish whole houses; that takes a licensed demolition contractor with heavy equipment. We handle the jobs around it: emptying the house before a teardown, interior strip-outs if you're renovating instead, removing sheds, fences, decks and hot tubs, and clearing debris afterward.",
        ],
      },
    ],
    faqs: [
      { q: "Is a 1,500 sq ft house expensive to demolish?", a: "It's a mid-size job. For a typical wood-frame house, national cost guides put it around $6,000 to $15,000. Concrete block construction and asbestos are what push the number higher." },
      { q: "Does the price include removing the slab?", a: "Not always. Many quotes leave the foundation in place unless you ask. Ask each contractor to state clearly whether slab removal is included." },
      { q: "How much does it cost to gut a 1,500 sq ft house instead?", a: "Gutting the interior down to studs while keeping the structure is selective demolition and is priced by scope and debris volume rather than as a full teardown. Text photos to a local crew for a realistic number." },
      { q: "Can you empty the house before demolition?", a: "Yes. We remove furniture, appliances and junk and clear the lot of sheds, fences and other structures so the demolition contractor starts with an empty shell." },
    ],
  },
];

/** Card blurb: the description trimmed to about 150 characters on a word boundary. */
export const guideBlurb = (g: Guide, max = 150) =>
  g.description.length <= max ? g.description : g.description.slice(0, g.description.lastIndexOf(" ", max)).replace(/[,;:.]$/, "") + "…";

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
