export type City = {
  slug: string;
  name: string;
  zips: string[];
  blurb: string;
  local: string;
  nearby: string[];
};

export const cities: City[] = [
  {
    slug: "fort-lauderdale", name: "Fort Lauderdale", zips: ["33301", "33304", "33305", "33308", "33312", "33315", "33316"],
    blurb: "From Victoria Park bungalows to Las Olas condos and Harbor Beach estates, we run multiple loads a day across Fort Lauderdale, fifteen minutes up I-95 from our Hollywood yard.",
    local: "Condo and high-rise jobs are routine for us: we coordinate with building management on elevator reservations and loading-dock windows, and we handle the paperwork most HOAs ask for before a crew comes in. Older Rio Vista and Poinsettia Heights homes keep us busy with kitchen and bathroom tear-outs ahead of renovations.",
    nearby: ["plantation", "hollywood", "pompano-beach", "sunrise"],
  },
  {
    slug: "hollywood", name: "Hollywood", zips: ["33019", "33020", "33021", "33023", "33024"],
    blurb: "Our home base. Our yard is on N 21st Ave, so Hollywood Lakes, Emerald Hills, the beach condos along A1A and the blocks west of I-95 are all minutes away.",
    local: "Hollywood has a lot of 1950s and 60s housing stock changing hands, which means estate cleanouts, garage purges and full interior demos before remodels. We also serve the Hollywood Beach condo corridor, where tight parking and service elevators call for a crew that has done it before.",
    nearby: ["hallandale-beach", "pembroke-pines", "davie", "fort-lauderdale"],
  },
  {
    slug: "pembroke-pines", name: "Pembroke Pines", zips: ["33023", "33024", "33025", "33026", "33027", "33028", "33029"],
    blurb: "Big family homes, big garages, big cleanouts. Pembroke Pines is one of our busiest cities for furniture, appliance and whole-garage junk removal.",
    local: "Many Pembroke Pines communities are gated with HOA rules about dumpsters sitting in driveways. Our trailer-based service means nothing sits on your property overnight. We also do a steady stream of patio, pergola and shed demolitions, and pool-deck tile removal for homeowners who are resurfacing.",
    nearby: ["miramar", "hollywood", "davie", "weston"],
  },
  {
    slug: "miramar", name: "Miramar", zips: ["33023", "33025", "33027", "33029"],
    blurb: "From historic East Miramar to the newer communities out west near the Everglades, we cover all of Miramar with same-day and next-day pickups.",
    local: "Miramar homeowners call us most for move-out cleanouts, hot-tub and above-ground pool removal, and hurricane-season yard debris. The commercial parks along Miramar Parkway bring us office furniture and warehouse cleanouts, usually scheduled after hours to avoid disrupting tenants.",
    nearby: ["pembroke-pines", "hollywood", "hallandale-beach", "weston"],
  },
  {
    slug: "davie", name: "Davie", zips: ["33314", "33324", "33325", "33328", "33330", "33331"],
    blurb: "Acre lots, barns, horse country and the campus corridor. Davie jobs tend to be bigger and more rural than the rest of Broward, and we are set up for that.",
    local: "We take down barns, sheds, chain-link and wood fencing, and old agricultural structures across Davie's larger properties. Student move-outs around Nova Southeastern and Broward College keep us busy every spring and summer with furniture and mattress pickups.",
    nearby: ["plantation", "pembroke-pines", "weston", "hollywood"],
  },
  {
    slug: "plantation", name: "Plantation", zips: ["33313", "33317", "33322", "33323", "33324", "33325"],
    blurb: "Plantation Acres estates, mid-century ranches near Peters Road and the office parks along University Drive. Fast response anywhere in Plantation.",
    local: "Plantation has a lot of 1970s homes getting full renovations, so interior demolition is our most requested service here: kitchens, bathrooms, popcorn ceilings, tile floors and drywall. We separate and recycle metal and clean wood whenever a job allows.",
    nearby: ["sunrise", "davie", "fort-lauderdale", "weston"],
  },
  {
    slug: "sunrise", name: "Sunrise", zips: ["33313", "33322", "33323", "33325", "33351"],
    blurb: "Sawgrass Mills retail, the Amerant Bank Arena district and thousands of townhomes and condos. We serve every corner of Sunrise.",
    local: "Condo and townhome associations in Sunrise regularly bring us in for common-area cleanouts, clubhouse renovations and bulk-pickup overflow. For individual units we handle furniture, appliances and renovation debris, and we know which buildings require certificates of insurance ahead of time.",
    nearby: ["plantation", "coral-springs", "fort-lauderdale", "weston"],
  },
  {
    slug: "pompano-beach", name: "Pompano Beach", zips: ["33060", "33062", "33063", "33064", "33069"],
    blurb: "Beachside condos, the Cresthaven and Kendall Green neighborhoods, and the industrial corridor along Powerline Road. Residential and commercial service across Pompano.",
    local: "Pompano Beach's industrial and warehouse district gives us a lot of commercial cleanouts: racking, pallets, fixtures and tenant-improvement demolition. On the residential side we clear out older ranch homes and waterfront properties being readied for sale.",
    nearby: ["deerfield-beach", "coral-springs", "fort-lauderdale", "sunrise"],
  },
  {
    slug: "coral-springs", name: "Coral Springs", zips: ["33065", "33067", "33071", "33076"],
    blurb: "Planned neighborhoods, strict HOAs and lots of families upgrading their homes. Coral Springs is a steady source of garage, patio and renovation cleanups.",
    local: "Because most Coral Springs communities restrict curbside bulk piles and roll-off dumpsters, our load-and-go trailer service is the practical option. We also remove play sets, trampolines, hot tubs and old patio screens, and we do full kitchen and bathroom demos before remodels.",
    nearby: ["sunrise", "pompano-beach", "deerfield-beach", "plantation"],
  },
  {
    slug: "weston", name: "Weston", zips: ["33326", "33327", "33331", "33332"],
    blurb: "Large homes, manicured communities and high standards. In Weston we show up clean, work quietly and leave the driveway spotless.",
    local: "Weston jobs are typically full-house decluttering ahead of a move, estate cleanouts, and demolition of outdoor kitchens, pergolas and tiki huts. We respect community gate procedures and quiet hours, and we can provide insurance certificates to your HOA before the crew arrives.",
    nearby: ["davie", "pembroke-pines", "sunrise", "plantation"],
  },
  {
    slug: "deerfield-beach", name: "Deerfield Beach", zips: ["33441", "33442"],
    blurb: "The northern edge of Broward. Century Village, beachside condos and the Hillsboro corridor are all in our regular rotation.",
    local: "Deerfield Beach brings us a lot of senior-community and estate cleanouts, where families need a crew that is patient, respectful and fast. We also serve the light-industrial area near Powerline Road and SW 10th Street with warehouse and office cleanouts.",
    nearby: ["pompano-beach", "coral-springs", "fort-lauderdale", "sunrise"],
  },
  {
    slug: "hallandale-beach", name: "Hallandale Beach", zips: ["33009"],
    blurb: "Dense, condo-heavy and right on the Miami-Dade line. We handle Hallandale's high-rise logistics every week.",
    local: "Most Hallandale Beach work is in multi-story buildings: furniture and appliance removal from units, renovation debris hauled out through service elevators, and common-area cleanups for associations. We book elevator time with management so the job goes smoothly on the day.",
    nearby: ["hollywood", "miramar", "pembroke-pines", "fort-lauderdale"],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
