import type { ReactNode } from "react";
import Link from "next/link";
import type { FaqItem } from "@/components/Faq";

// Region pages. Each region has its own page and lists the neighbourhoods and
// smaller cities we serve there, with the most established areas first.
//
// "We serve" is a service-area statement. Never state or imply a completed
// project in a place where we have not built one. Completed and active work is
// named only on the North York page, where it is.
//
// Municipal facts on the York Region and Etobicoke pages come from each
// city's own published pages, read in November 2026. Recheck them when editing.

export interface Area {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  headline: string;
  intro: ReactNode;
  placesHeading: string;
  places: string[];
  sections: { heading: string; body: ReactNode }[];
  faqs: FaqItem[];
}

const FIRST_STEP: FaqItem = {
  q: "What is the first step?",
  a: "A phone call. Leave your details and we'll call you to talk through what you have in mind. From there you can see our finished homes in person or walk our active site, and you leave with a direction, a timeline and a rough estimate. Committing to anything comes later.",
};

const External = ({ href, children }: { href: string; children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export const areas: Area[] = [
  {
    slug: "toronto",
    name: "Toronto",
    title: "Custom Home Builder in Central Toronto | Fatahi Building",
    description:
      "Design-build custom homes, additions and whole-home renovations in Toronto, serving Rosedale, Forest Hill, Lawrence Park, Yorkville and Midtown.",
    h1: "Custom Home Builder in Toronto",
    headline: "Toronto",
    intro: (
      <p>
        We serve central Toronto and Midtown, designing and building custom
        homes, additions and whole-home transformations on some of the
        city&apos;s most established streets, from Rosedale and Forest Hill to
        Lawrence Park.
      </p>
    ),
    placesHeading: "Toronto neighbourhoods we serve",
    places: [
      "Rosedale",
      "Forest Hill",
      "Lawrence Park",
      "Yorkville",
      "Summerhill",
      "Moore Park",
      "Deer Park",
      "Chaplin Estates",
      "Lytton Park",
      "Casa Loma",
      "The Annex",
      "Midtown",
      "Bedford Park",
      "North Toronto",
      "Davisville",
      "High Park",
      "Bloor West Village",
      "The Beaches",
      "Riverdale",
      "Cabbagetown",
      "Downtown Toronto",
    ],
    sections: [
      {
        heading: "Building on established Toronto streets",
        body: (
          <>
            <p>
              On an established street, the house has to fit both the lot and
              the rules written for it. A design that makes the most of a
              property often needs at least one minor variance, which is
              decided by the{" "}
              <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link>{" "}
              and adds two to four months before a building permit is in
              play. We design with the zoning by-law in front of us, so we
              know which variances a design needs before the drawings are
              final.
            </p>
            <p>
              From a first conversation to permits in hand is{" "}
              <Link href="/insights/custom-home-timeline-toronto-before-you-build">about five to six months on average</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Renovate, add on, or build new",
        body: (
          <p>
            Not every project starts with knocking a house down. Some homes
            need a few walls opened up and new finishes, some need an
            addition, and some call for a new build. We take on all three:{" "}
            <Link href="/services/custom-homes">custom homes</Link>,{" "}
            <Link href="/services/additions">additions</Link> and{" "}
            <Link href="/services/transformations">whole-home transformations</Link>.
            How to choose between them is in{" "}
            <Link href="/insights/renovate-or-rebuild">Is It Worth Renovating or Should You Rebuild?</Link>
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Rosedale, Forest Hill and Lawrence Park?",
        a: "Yes. We serve central Toronto and Midtown, including Rosedale, Forest Hill, Lawrence Park, Yorkville, Summerhill and Moore Park, with custom homes, additions and whole-home transformations.",
      },
      {
        q: "Will my Toronto project need a minor variance?",
        a: "Often, yes. A design that fits its lot frequently needs at least one variance, and each one is decided at a Committee of Adjustment hearing, which adds two to four months at minimum. We identify the variances a design needs before the drawings are final.",
        href: "/insights/committee-of-adjustment-toronto",
        linkLabel: "How the Committee of Adjustment works.",
      },
      FIRST_STEP,
    ],
  },
  {
    slug: "north-york",
    name: "North York",
    title: "Custom Home Builder in North York | Fatahi Building",
    description:
      "Design-build custom homes, additions and renovations in North York, from The Bridle Path and York Mills to Willowdale, by a team building here now.",
    h1: "Custom Home Builder in North York",
    headline: "North York",
    intro: (
      <p>
        North York is where most of our work is. Betty Ann, Farrell and
        Terrace are in Willowdale West, Poyntz is near Yonge and Sheppard, and
        we are building a new custom home on Old Yonge Street in York Mills
        now. We design and build custom homes, additions and whole-home
        transformations here.
      </p>
    ),
    placesHeading: "North York neighbourhoods we serve",
    places: [
      "The Bridle Path",
      "Hoggs Hollow",
      "York Mills",
      "St. Andrew-Windfields",
      "Bayview Village",
      "Willowdale",
      "Armour Heights",
      "Ledbury Park",
      "Don Mills",
      "Banbury",
      "Bayview Woods",
      "Lansing",
      "Newtonbrook",
      "Bathurst Manor",
      "Glen Park",
      "Downsview",
    ],
    sections: [
      {
        heading: "Our work in North York",
        body: (
          <ul>
            <li>
              <strong>Old Yonge, York Mills.</strong> A new custom home with
              more than 8,000 square feet of living space, under
              construction.{" "}
              <Link href="/projects/225-old-yonge">Follow the build</Link>.
            </li>
            <li>
              <strong>Betty Ann and Farrell, Willowdale West.</strong> Two
              custom homes.
            </li>
            <li>
              <strong>Poyntz (2023).</strong> A modern custom home near Yonge
              and Sheppard.{" "}
              <Link href="/projects/131-poyntz-ave">See the project</Link>.
            </li>
            <li>
              <strong>Terrace (2021).</strong> A custom home in Willowdale
              West.{" "}
              <Link href="/projects/23-terrace">See the project</Link>.
            </li>
          </ul>
        ),
      },
      {
        heading: "What North York lots give you, and what they ask",
        body: (
          <>
            <p>
              Wide frontages and real depth. On a wide lot you get choices
              back: where the main stair sits, whether the kitchen looks onto
              the garden or the street, how many directions daylight enters a
              room from. Those decisions are why{" "}
              <Link href="/insights/why-layout-matters-more-than-finishes">layout matters more than finishes</Link>.
            </p>
            <p>
              Established streets also mean the{" "}
              <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link>,
              which adds two to four months, and neighbours close by, which
              shapes how a site is run. From a first conversation to permits
              in hand is{" "}
              <Link href="/insights/custom-home-timeline-toronto-before-you-build">about five to six months on average</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Why building repeatedly in one area helps",
        body: (
          <p>
            By the second house here, we had a working sense of what the
            Committee of Adjustment would approve in this area, what it
            wouldn&apos;t, and how long the answer takes. So when we give a
            client a timeline in North York, we are not guessing at it. The
            longer version is in{" "}
            <Link href="/insights/building-custom-homes-north-york">What It&apos;s Actually Like to Build a Custom Home in North York</Link>.
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Are you building in North York now?",
        a: "Yes. We are building a new custom home with more than 8,000 square feet of living space on Old Yonge Street in York Mills. The footings are poured and the foundation walls are going up.",
        href: "/projects/225-old-yonge",
        linkLabel: "Follow the build.",
      },
      {
        q: "Will a new custom home in North York need a minor variance?",
        a: "Often, yes. A design that fits its lot frequently needs at least one variance, and each one is decided at a Committee of Adjustment hearing, which adds two to four months at minimum. On Old Yonge, the variances were approved on the first application.",
      },
      {
        q: "Should I renovate my North York bungalow or rebuild?",
        a: "It depends on the structure and the zoning. If the foundation, the framing and the mechanical systems can carry the home you want, a renovation or an addition is a real option. On a wide North York lot, current zoning sometimes allows a larger home than the one standing there, and that can tip it toward building new.",
        href: "/insights/renovate-or-rebuild",
        linkLabel: "How to think through renovating or rebuilding.",
      },
      {
        q: "Can I see one of your homes in North York?",
        a: "Yes. Leave your details and we'll call you to arrange a visit to one of our finished homes or a walk through our active site on Old Yonge.",
      },
    ],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    title: "Custom Home Builder in Etobicoke | Fatahi Building",
    description:
      "Design-build custom homes, additions and whole-home renovations in Etobicoke, serving The Kingsway, Humber Valley Village and Princess Anne Manor.",
    h1: "Custom Home Builder in Etobicoke",
    headline: "Etobicoke",
    intro: (
      <p>
        We serve Etobicoke, designing and building custom homes, additions
        and whole-home transformations, from The Kingsway and Humber Valley
        Village to the lakeshore.
      </p>
    ),
    placesHeading: "Etobicoke neighbourhoods we serve",
    places: [
      "The Kingsway",
      "Humber Valley Village",
      "Princess Anne Manor",
      "Thorncrest Village",
      "Sunnylea",
      "Markland Wood",
      "Islington",
      "Richview",
      "Humber Bay Shores",
      "Mimico",
      "Long Branch",
      "New Toronto",
      "Alderwood",
    ],
    sections: [
      {
        heading: "Zoning and approvals in Etobicoke",
        body: (
          <>
            <p>
              Etobicoke is part of the City of Toronto, so Toronto&apos;s
              rules apply, with one local difference. Zoning By-law 569-2013
              applies city-wide, but the City notes that some properties are
              still subject to the former municipal zoning by-laws, so the
              first step on an Etobicoke lot is confirming which one governs
              it.{" "}
              <External href="https://www.toronto.ca/city-government/planning-development/zoning-by-law-preliminary-zoning-reviews/zoning-by-law-569-2013-2/">City of Toronto: Zoning By-law 569-2013</External>.
            </p>
            <p>
              Minor variance applications go to the Etobicoke York district of
              the Committee of Adjustment, with hearings at the Etobicoke
              Civic Centre. In our experience the step adds two to four
              months. How it works is in{" "}
              <Link href="/insights/committee-of-adjustment-toronto">our guide to the Committee of Adjustment</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "What we build here",
        body: (
          <p>
            <Link href="/services/custom-homes">Custom homes</Link>,{" "}
            <Link href="/services/additions">additions</Link> and{" "}
            <Link href="/services/transformations">whole-home transformations</Link>,
            designed and built by one team for{" "}
            <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>.
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Etobicoke?",
        a: "Yes. We serve Etobicoke, including The Kingsway, Humber Valley Village, Princess Anne Manor and Thorncrest Village, with custom homes, additions and whole-home transformations.",
      },
      {
        q: "Does the Etobicoke Zoning Code still apply?",
        a: "Toronto's Zoning By-law 569-2013 applies city-wide, but the City notes that some properties are still subject to the former municipal zoning by-laws. Which one governs a specific lot is confirmed before design begins.",
      },
      FIRST_STEP,
    ],
  },
  {
    slug: "east-york",
    name: "East York",
    title: "Custom Home Builder in East York & Leaside | Fatahi Building",
    description:
      "Design-build custom homes, additions and whole-home renovations in East York, serving Leaside, Bennington Heights and Governor's Bridge.",
    h1: "Custom Home Builder in East York",
    headline: "East York",
    intro: (
      <p>
        We serve East York, designing and building custom homes, additions
        and whole-home transformations, from Leaside and Bennington Heights
        to the Danforth.
      </p>
    ),
    placesHeading: "East York neighbourhoods we serve",
    places: [
      "Leaside",
      "Bennington Heights",
      "Governor's Bridge",
      "Parkview Hills",
      "Woodbine Gardens",
      "O'Connor-Parkview",
      "Pape Village",
      "Danforth Village",
      "Thorncliffe Park",
    ],
    sections: [
      {
        heading: "Renovate, add on, or build new",
        body: (
          <p>
            Some homes need a few walls opened up and new finishes, some need
            an addition to make room for how you live now, and some call for
            a new build. Which one fits depends on the structure and the
            zoning, and we look at both on the first walk. We take on{" "}
            <Link href="/services/transformations">whole-home transformations</Link>,{" "}
            <Link href="/services/additions">additions</Link> and{" "}
            <Link href="/services/custom-homes">custom homes</Link>. The
            decision is laid out in{" "}
            <Link href="/insights/renovate-or-rebuild">Is It Worth Renovating or Should You Rebuild?</Link>
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build in Leaside and East York?",
        a: "Yes. We serve East York, including Leaside, Bennington Heights and Governor's Bridge, with custom homes, additions and whole-home transformations.",
      },
      {
        q: "Can a second storey be added to my house?",
        a: "The first thing we check is whether the existing structure can carry it. Often the first-floor structure needs reinforcing or replacing to take the new load, and that is worked out at the design stage, before anything is priced.",
        href: "/services/additions",
        linkLabel: "How we approach additions.",
      },
      FIRST_STEP,
    ],
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    title: "Custom Home Builder in Scarborough | Fatahi Building",
    description:
      "Design-build custom homes, additions and whole-home renovations in Scarborough, serving The Bluffs, Guildwood, Birch Cliff and Highland Creek.",
    h1: "Custom Home Builder in Scarborough",
    headline: "Scarborough",
    intro: (
      <p>
        We serve Scarborough, designing and building custom homes, additions
        and whole-home transformations, from The Bluffs and Guildwood to
        Highland Creek.
      </p>
    ),
    placesHeading: "Scarborough neighbourhoods we serve",
    places: [
      "The Bluffs",
      "Guildwood",
      "Birch Cliff",
      "Cliffside",
      "Cliffcrest",
      "Highland Creek",
      "West Rouge",
      "Port Union",
      "Agincourt",
      "Wexford",
      "Bendale",
      "West Hill",
    ],
    sections: [
      {
        heading: "One team, from design to keys",
        body: (
          <p>
            We handle design, engineering, approvals and construction as one
            team, and we work off{" "}
            <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>{" "}
            for an agreed scope. We take on{" "}
            <Link href="/services/custom-homes">custom homes</Link>,{" "}
            <Link href="/services/additions">additions</Link> and{" "}
            <Link href="/services/transformations">whole-home transformations</Link>.
            What the months before construction involve is in{" "}
            <Link href="/insights/custom-home-timeline-toronto-before-you-build">our custom home timeline</Link>.
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Scarborough?",
        a: "Yes. We serve Scarborough, including The Bluffs, Guildwood, Birch Cliff and Highland Creek, with custom homes, additions and whole-home transformations.",
      },
      {
        q: "How do you price a custom home?",
        a: "We work off a fixed price. We settle the scope first, build an accurate budget and a real schedule around it, and then the number stops moving. The price holds for the scope you agreed on.",
        href: "/insights/fixed-price-vs-cost-plus-custom-home",
        linkLabel: "Fixed price and cost plus, compared.",
      },
      FIRST_STEP,
    ],
  },
  {
    slug: "york-region",
    name: "York Region",
    title: "Custom Home Builder in Vaughan & York Region | Fatahi Building",
    description:
      "Design-build custom homes, additions and renovations in York Region: King City, Kleinburg, Thornhill, Vaughan, Richmond Hill, Markham and Aurora.",
    h1: "Custom Home Builder in York Region: Vaughan, Richmond Hill & Markham",
    headline: "York Region",
    intro: (
      <p>
        We serve York Region, designing and building custom homes, additions
        and whole-home transformations in Vaughan, Richmond Hill, Markham,
        King, Aurora, Newmarket and the communities between them.
      </p>
    ),
    placesHeading: "York Region communities we serve",
    places: [
      "King City",
      "Kleinburg",
      "Thornhill",
      "South Richvale",
      "Bayview Hill",
      "Unionville",
      "Woodland Acres",
      "Vaughan",
      "Richmond Hill",
      "Markham",
      "Woodbridge",
      "Aurora",
      "Newmarket",
      "Maple",
      "Nobleton",
      "Oak Ridges",
      "Stouffville",
      "Schomberg",
      "East Gwillimbury",
    ],
    sections: [
      {
        heading: "Custom homes in Vaughan",
        body: (
          <p>
            The City of Vaughan describes itself as five communities: Concord,
            Kleinburg, Maple, Thornhill and Woodbridge. Its Comprehensive
            Zoning By-law 001-2021 has been in effect since October 20, 2021.
            For a new home on an existing lot, the City requires a grading
            permit before a building permit application can be made, and in
            its four Heritage Conservation Districts (Kleinburg-Nashville,
            Maple, Thornhill and Woodbridge) exterior changes need a heritage
            permit.{" "}
            <External href="https://www.vaughan.ca/residential/building-and-construction/building-permits/building-permits-homes/residential-infill-construction">City of Vaughan: Residential Infill Construction</External>.
          </p>
        ),
      },
      {
        heading: "Custom homes in Richmond Hill",
        body: (
          <p>
            Richmond Hill passed Comprehensive Zoning By-law 93-25 in
            September 2025, replacing more than 40 older by-laws, and the
            City says it is now in force for the majority of lands in the
            city. A minor variance application typically takes two to three
            months from submission to the hearing date. New infill homes and
            most additions need a site alteration permit, and the northern
            half of the city sits on the Oak Ridges Moraine, where building
            can need an extra review.{" "}
            <External href="https://www.richmondhill.ca/en/zone-richmond-hill.aspx">City of Richmond Hill: Zone Richmond Hill</External>.
          </p>
        ),
      },
      {
        heading: "Markham, King, Aurora, Newmarket and beyond",
        body: (
          <>
            <p>
              Each municipality in York Region has its own zoning by-law and
              its own Committee of Adjustment. The four tests for a minor
              variance are set by Ontario&apos;s Planning Act, so they are
              the same everywhere, and outside Toronto a decision can be
              appealed to the Ontario Land Tribunal. We confirm the rules for
              your lot before a design is final. The process itself is
              covered in{" "}
              <Link href="/insights/committee-of-adjustment-toronto">our guide to the Committee of Adjustment</Link>.
            </p>
            <p>
              We take on{" "}
              <Link href="/services/custom-homes">custom homes</Link>,{" "}
              <Link href="/services/additions">additions</Link> and{" "}
              <Link href="/services/transformations">whole-home transformations</Link>,
              for{" "}
              <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Vaughan and Richmond Hill?",
        a: "Yes. We serve York Region, including Vaughan, Richmond Hill, Markham, King City, Kleinburg, Thornhill, Aurora and Newmarket, with custom homes, additions and whole-home transformations.",
      },
      {
        q: "What comes before a building permit for a new home in Vaughan?",
        a: "For a new home on an existing lot, the City of Vaughan requires a grading permit before a building permit application can be made. Depending on the lot, a minor variance, a heritage permit or a conservation authority permit may also come first.",
      },
      {
        q: "How long does a minor variance take in Richmond Hill?",
        a: "The City of Richmond Hill says a minor variance application typically takes two to three months from submission to the hearing date. Decisions can be appealed to the Ontario Land Tribunal within 20 days.",
      },
      FIRST_STEP,
    ],
  },
  {
    slug: "peel-halton-durham",
    name: "Peel, Halton & Durham",
    title: "Custom Homes in Mississauga, Oakville & Durham | Fatahi Building",
    description:
      "Design-build custom homes, additions and whole-home renovations across the wider GTA, serving Oakville, Lorne Park, Mineola, Mississauga and Pickering.",
    h1: "Custom Home Builder in Mississauga, Oakville & the Wider GTA",
    headline: "Peel, Halton & Durham",
    intro: (
      <p>
        We serve the wider Greater Toronto Area, designing and building
        custom homes, additions and whole-home transformations west through
        Mississauga and Oakville and east through Pickering and Ajax.
      </p>
    ),
    placesHeading: "Communities we serve across the wider GTA",
    places: [
      "Oakville",
      "Lorne Park",
      "Mineola",
      "Port Credit",
      "Mississauga",
      "Burlington",
      "Caledon",
      "Brampton",
      "Pickering",
      "Ajax",
      "Whitby",
    ],
    sections: [
      {
        heading: "How we work, wherever you are building",
        body: (
          <p>
            Each municipality has its own zoning by-law and approvals, and we
            confirm the rules for your lot before a design is final. Design,
            engineering, approvals and construction are handled by one team,
            for{" "}
            <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>.
            We take on{" "}
            <Link href="/services/custom-homes">custom homes</Link>,{" "}
            <Link href="/services/additions">additions</Link> and{" "}
            <Link href="/services/transformations">whole-home transformations</Link>.
          </p>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Mississauga and Oakville?",
        a: "Yes. We serve the wider Greater Toronto Area, including Oakville, Lorne Park, Mineola, Port Credit, Mississauga, Burlington, Pickering and Ajax, with custom homes, additions and whole-home transformations.",
      },
      {
        q: "How do you price a custom home?",
        a: "We work off a fixed price. We settle the scope first, build an accurate budget and a real schedule around it, and then the number stops moving. The price holds for the scope you agreed on.",
        href: "/insights/fixed-price-vs-cost-plus-custom-home",
        linkLabel: "Fixed price and cost plus, compared.",
      },
      FIRST_STEP,
    ],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);
