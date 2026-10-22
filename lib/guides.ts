import type { IconName } from "@/app/icons";

export type GuideSection = {
  heading: string;
  body?: string[];
  list?: { icon?: IconName; title?: string; text: string }[];
  table?: { head: string[]; rows: string[][] };
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
};

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
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
