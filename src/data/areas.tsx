import type { ReactNode } from "react";
import Link from "next/link";
import type { FaqItem } from "@/components/Faq";

// Area pages. Every page says we serve the area. Two kinds of content:
//  - "built": pages written from our own completed or active work there.
//  - "served": pages that summarise that municipality's own published rules.
// "We serve" is a service-area statement. Never state or imply a completed
// project in an area where we have not built one.

export interface Area {
  slug: string;
  name: string;
  kind: "built" | "served";
  title: string;
  description: string;
  h1: string;
  headline: string;
  intro: ReactNode;
  sections: { heading: string; body: ReactNode }[];
  faqs: FaqItem[];
}

export const areas: Area[] = [
  {
    slug: "willowdale",
    name: "Willowdale",
    kind: "built",
    title: "Custom Home Builder in Willowdale, North York | Fatahi Building",
    description:
      "Design-build custom homes, additions and whole-home renovations in Willowdale, North York, from a team with three homes in Willowdale West.",
    h1: "Custom Home Builder in Willowdale",
    headline: "Building in Willowdale",
    intro: (
      <>
        <p>
          Willowdale West is where most of our recent work sits. Our Betty Ann
          and Farrell homes are both here, and so is Terrace, which we
          completed in 2021. We design and build custom homes, additions and
          whole-home transformations on these streets, and we know them at the
          level of specific lots, specific approvals and specific trees.
        </p>
      </>
    ),
    sections: [
      {
        heading: "What Willowdale lots give you",
        body: (
          <>
            <p>
              Wide frontages, real depth, and trees that were planted when the
              streets were first laid out. In much of Willowdale that means a
              canopy that has had generations to fill in.
            </p>
            <p>
              That changes what can be drawn. On a wide lot you get choices
              back: where the main stair sits, whether the kitchen looks onto
              the garden or the street, how many directions daylight enters a
              room from. Those are the decisions that determine whether a
              house is comfortable to live in, and they are why{" "}
              <Link href="/insights/why-layout-matters-more-than-finishes">layout matters more than finishes</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "What they ask of you before a shovel moves",
        body: (
          <>
            <ul>
              <li>
                <strong>Mature trees mean protection zones.</strong> A tree on
                or near the lot brings an arborist report and a protected
                radius where nothing can be dug, compacted or stored for the
                whole build. See{" "}
                <Link href="/insights/tree-protection-zones-toronto">how a tree protection zone works</Link>.
              </li>
              <li>
                <strong>Established streets mean the Committee of Adjustment.</strong>{" "}
                A design that fits its lot often needs at least one minor
                variance, which adds{" "}
                <Link href="/insights/committee-of-adjustment-toronto">two to four months</Link>{" "}
                before a building permit is in play.
              </li>
              <li>
                <strong>Infill means neighbours.</strong> You are building
                beside people who live there today, which shapes site access,
                storage, deliveries and working hours.
              </li>
            </ul>
            <p>
              None of that is a problem if it is planned for. From a first
              conversation to permits in hand is{" "}
              <Link href="/insights/custom-home-timeline-toronto-before-you-build">about five to six months on average</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Why building repeatedly in one area helps",
        body: (
          <>
            <p>
              By the second house here, we had a working sense of what the
              Committee of Adjustment would approve in this area, what it
              wouldn&apos;t, and how long the answer takes. We knew which lots
              were likely to carry tree issues. So when we give a client a
              timeline in Willowdale, we are not guessing at it. The longer
              version is in{" "}
              <Link href="/insights/building-custom-homes-north-york">What It&apos;s Actually Like to Build a Custom Home in North York</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Our work in and around Willowdale",
        body: (
          <>
            <ul>
              <li>
                <strong>Betty Ann and Farrell,</strong> two custom homes in
                Willowdale West.
              </li>
              <li>
                <strong>Terrace (2021),</strong> a custom home in Willowdale
                West.{" "}
                <Link href="/projects/23-terrace">See the project</Link>.
              </li>
              <li>
                <strong>Poyntz (2023),</strong> a modern custom home near
                Yonge and Sheppard.{" "}
                <Link href="/projects/131-poyntz-ave">See the project</Link>.
              </li>
              <li>
                <strong>Old Yonge,</strong> a new custom home under
                construction in York Mills.{" "}
                <Link href="/projects/225-old-yonge">Follow the build</Link>.
              </li>
            </ul>
            <p>
              We take on{" "}
              <Link href="/services/custom-homes">custom homes</Link>,{" "}
              <Link href="/services/additions">additions</Link> and{" "}
              <Link href="/services/transformations">whole-home transformations</Link>{" "}
              here.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: "Will a new custom home in Willowdale need a minor variance?",
        a: "Often, yes. A design that fits its lot frequently needs at least one variance, and each one is decided at a Committee of Adjustment hearing, which adds two to four months at minimum. We design with the zoning by-law in front of us, so we know which variances a design needs before the drawings are final.",
      },
      {
        q: "Should I renovate my Willowdale bungalow or rebuild?",
        a: "It depends on the structure and the zoning. If the foundation, the framing and the mechanical systems can carry the home you want, a renovation or an addition is a real option. On a wide North York lot, current zoning sometimes allows a larger home than the one standing there, and that can tip it toward building new.",
        href: "/insights/renovate-or-rebuild",
        linkLabel: "How to think through renovating or rebuilding.",
      },
      {
        q: "How do the mature trees on my lot affect the design?",
        a: "A protected tree comes with a protection zone measured from the trunk, and nothing can be dug, stored or driven on inside it for the whole build. It can change where the house sits, where the driveway runs and how the site is staged, so it is settled before design is final.",
      },
      {
        q: "Can I see one of your homes in Willowdale?",
        a: "Yes. Leave your details and we'll call you to arrange a visit to one of our finished homes or to our active site on Old Yonge.",
      },
    ],
  },
  {
    slug: "york-mills",
    name: "York Mills",
    kind: "built",
    title: "Custom Home Builder in York Mills, Toronto | Fatahi Building",
    description:
      "Design-build custom homes in York Mills, Toronto. We are building a custom home of more than 8,000 sq ft on Old Yonge Street now.",
    h1: "Custom Home Builder in York Mills",
    headline: "Building in York Mills",
    intro: (
      <>
        <p>
          We are building in York Mills right now. Our current project is a
          new custom home with more than 8,000 square feet of living space on
          Old Yonge Street, near Yonge and the 401. Everything on this page
          comes from that lot.
        </p>
      </>
    ),
    sections: [
      {
        heading: "What this lot taught us about building here",
        body: (
          <>
            <p>
              The old house sat high relative to the street, which gave the
              driveway a steep slope, and the back of the lot climbs up toward
              the property line. Neither shows in a photograph, and both
              changed how much digging the house needed. It is the reason{" "}
              <Link href="/insights/fixed-price-vs-cost-plus-custom-home">we don&apos;t put a price on a property we haven&apos;t stood on</Link>.
            </p>
            <p>
              The design turned the slope into an advantage. The driveway was
              brought down and flattened, the garage sits underneath the main
              floor and above the basement, and because height limits are
              measured from the established grade, the main and second floors
              get significantly higher ceilings.
            </p>
          </>
        ),
      },
      {
        heading: "Trees and approvals",
        body: (
          <>
            <p>
              The first thing that went up on this site was tree protection.
              One protection zone at the front carries two kinds of fence,
              because it crosses the property line. We wrote about it in{" "}
              <Link href="/insights/tree-protection-zones-toronto">You Can Kill a Tree on a Construction Site Without Ever Touching It</Link>.
            </p>
            <p>
              The design needed some variances, so it went to the{" "}
              <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link>,
              where it was approved on the first application. From our first
              meeting to permits in hand was five to six months. The whole
              sequence is in{" "}
              <Link href="/insights/custom-home-timeline-toronto-before-you-build">For Six Months You Could Have Driven Past This Lot</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "What is being built",
        body: (
          <>
            <p>
              A modern home with grand open spaces and tall ceilings, warmed
              by natural materials and millwork. It has a three-car garage, a
              heated driveway and an elevator, and a basement with 11-foot
              ceilings, radiant heated floors and a walkout at the back. The
              foundation walls run full height in concrete.
            </p>
            <p>
              <Link href="/projects/225-old-yonge">Follow the Old Yonge build</Link>,
              or read about{" "}
              <Link href="/insights/custom-home-foundation-north-york">its foundation</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "What we build in York Mills",
        body: (
          <>
            <p>
              <Link href="/services/custom-homes">Custom homes</Link>,{" "}
              <Link href="/services/additions">additions</Link> and{" "}
              <Link href="/services/transformations">whole-home transformations</Link>,
              designed and built by one team. Our completed homes are to the
              north, in{" "}
              <Link href="/areas/willowdale">Willowdale</Link>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: "Are you building in York Mills now?",
        a: "Yes. We are building a new custom home with more than 8,000 square feet of living space on Old Yonge Street. The footings are poured and the foundation walls are going up.",
        href: "/projects/225-old-yonge",
        linkLabel: "Follow the build.",
      },
      {
        q: "How long did approvals take on your York Mills project?",
        a: "Design began in the spring of 2026, the Committee of Adjustment approved the variances on the first application at the end of July, and the permits came through at the end of September. From our first meeting to permits in hand was five to six months.",
      },
      {
        q: "Can a sloped lot be built on without losing space?",
        a: "On Old Yonge the slope became an advantage. Lowering and flattening the driveway made it more usable, and because height limits are measured from the established grade, starting the house lower in the ground gave the main and second floors higher ceilings.",
      },
      {
        q: "Can I walk the Old Yonge site?",
        a: "Yes. Leave your details and we'll call you to arrange a walk through the site while it's under construction.",
      },
    ],
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    kind: "served",
    title: "Custom Home Builder Serving Richmond Hill | Fatahi Building",
    description:
      "What building a custom home, addition or renovation in Richmond Hill involves, from the City's own rules: zoning, variances, trees and grading.",
    h1: "Custom Home Builder Serving Richmond Hill",
    headline: "Building in Richmond Hill",
    intro: (
      <>
        <p>
          We serve Richmond Hill, designing and building custom homes,
          additions and whole-home transformations. Here is what building
          there involves, taken from the City of Richmond Hill&apos;s own
          published rules as of November 2026.
        </p>
      </>
    ),
    sections: [
      {
        heading: "A new zoning by-law",
        body: (
          <>
            <p>
              Richmond Hill passed Comprehensive Zoning By-law 93-25 on
              September 24, 2025. The City says it consolidates more than 40
              zoning by-laws dating back to the 1960s, and that it is now in
              force for the majority of lands in the city, with some site and
              area specific appeals still outstanding. So the first step on
              any lot is confirming which rules apply to it.{" "}
              <a href="https://www.richmondhill.ca/en/zone-richmond-hill.aspx" target="_blank" rel="noopener noreferrer">City of Richmond Hill: Zone Richmond Hill</a>.
            </p>
          </>
        ),
      },
      {
        heading: "Minor variances",
        body: (
          <>
            <p>
              When a design goes past a zoning limit, it needs a minor
              variance from the Committee of Adjustment. In Richmond Hill,
              applications are filed online and hearings are held in person
              on Thursday evenings. The City says a minor variance application
              typically takes two to three months from submission to the
              hearing date, and decisions can be appealed to the Ontario Land
              Tribunal within 20 days.{" "}
              <a href="https://www.richmondhill.ca/en/learn-more/committee-of-adjustment.aspx" target="_blank" rel="noopener noreferrer">City of Richmond Hill: Committee of Adjustment</a>.
            </p>
            <p>
              The four tests a Committee applies are set by Ontario&apos;s
              Planning Act, so they are the same ones we describe in{" "}
              <Link href="/insights/committee-of-adjustment-toronto">our guide to the Committee of Adjustment</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Trees",
        body: (
          <>
            <p>
              Richmond Hill&apos;s Tree Preservation By-law No. 19-25 requires
              a permit before removing or injuring any tree with a diameter at
              breast height of 15 centimetres or more. An arborist report is
              part of the application, and replacement trees are required.
              On a lot with mature trees, that shapes where a house or an
              addition can sit, so it belongs at the start of design.{" "}
              <a href="https://www.richmondhill.ca/en/learn-more/Tree-Cutting-Permit.aspx" target="_blank" rel="noopener noreferrer">City of Richmond Hill: Tree Cutting Permit</a>.
            </p>
          </>
        ),
      },
      {
        heading: "Grading, the moraine and conservation lands",
        body: (
          <>
            <ul>
              <li>
                <strong>Site alteration permit.</strong> New infill homes and
                most additions need one, with a grading plan prepared by a
                professional engineer or an Ontario land surveyor.
              </li>
              <li>
                <strong>Oak Ridges Moraine.</strong> The City describes the
                northern half of Richmond Hill as sitting on the moraine,
                where building can require an extra review with planning
                staff.
              </li>
              <li>
                <strong>Conservation authority.</strong> On regulated lands, a
                Toronto and Region Conservation Authority permit comes before
                the building permit.
              </li>
              <li>
                <strong>Heritage.</strong> Designated properties need the
                City&apos;s approval for alterations.
              </li>
            </ul>
            <p>
              Building permits themselves are applied for online.{" "}
              <a href="https://www.richmondhill.ca/en/online-services/Residential-Permits.aspx" target="_blank" rel="noopener noreferrer">City of Richmond Hill: Residential Permits</a>.
            </p>
          </>
        ),
      },
      {
        heading: "How we approach a project in Richmond Hill",
        body: (
          <>
            <p>
              The same way we approach every home. We stand on the property
              before we talk about price, we check the zoning, the trees and
              the grading before a design is final, and we work off{" "}
              <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>{" "}
              for an agreed scope. You are welcome to see our homes in{" "}
              <Link href="/areas/willowdale">Willowdale</Link> and our active
              site in <Link href="/areas/york-mills">York Mills</Link> in
              person.
            </p>
            <p>
              We take on{" "}
              <Link href="/services/custom-homes">custom homes</Link>,{" "}
              <Link href="/services/additions">additions</Link> and{" "}
              <Link href="/services/transformations">whole-home transformations</Link>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Richmond Hill?",
        a: "Yes. We serve Richmond Hill, with custom homes, additions and whole-home transformations. We are glad to show you our finished homes and our active site in person.",
      },
      {
        q: "How long does a minor variance take in Richmond Hill?",
        a: "The City of Richmond Hill says a minor variance application typically takes two to three months from submission to the hearing date. Decisions can be appealed to the Ontario Land Tribunal within 20 days.",
      },
      {
        q: "Do I need a permit to remove a tree on my lot in Richmond Hill?",
        a: "Under Tree Preservation By-law No. 19-25, a permit is required before removing or injuring any tree with a diameter at breast height of 15 centimetres or more. An arborist report is part of the application.",
      },
      {
        q: "Which zoning by-law applies to my Richmond Hill lot?",
        a: "Comprehensive Zoning By-law 93-25, passed in September 2025, is in force for the majority of lands in the city. Some site and area specific appeals are still outstanding, so the rules for a specific lot should be confirmed with the City before design begins.",
      },
    ],
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    kind: "served",
    title: "Custom Home Builder Serving Vaughan | Fatahi Building",
    description:
      "What building a custom home, addition or renovation in Vaughan involves, from the City's own rules: zoning, variances, trees, grading and heritage.",
    h1: "Custom Home Builder Serving Vaughan",
    headline: "Building in Vaughan",
    intro: (
      <>
        <p>
          We serve Vaughan, designing and building custom homes, additions
          and whole-home transformations. Here is what building there
          involves, taken from the City of Vaughan&apos;s own published rules
          as of November 2026.
        </p>
        <p>
          The City describes Vaughan as five communities: Concord, Kleinburg,
          Maple, Thornhill and Woodbridge.
        </p>
      </>
    ),
    sections: [
      {
        heading: "Zoning",
        body: (
          <>
            <p>
              Vaughan&apos;s Comprehensive Zoning By-law 001-2021 has been in
              effect since October 20, 2021, replacing the older By-law 1-88.
              The City notes that some lands and sections remain under
              appeal, so the first step on any lot is confirming which rules
              apply to it.{" "}
              <a href="https://www.vaughan.ca/residential/building-and-construction/vaughans-planning-process/citys-comprehensive-zoning-by-law-001-2021" target="_blank" rel="noopener noreferrer">City of Vaughan: Comprehensive Zoning By-law 001-2021</a>.
            </p>
          </>
        ),
      },
      {
        heading: "Minor variances",
        body: (
          <>
            <p>
              When a design goes past a zoning limit, it needs a minor
              variance from Vaughan&apos;s Committee of Adjustment.
              Applications are filed online, and the City gives an applicant
              a tentative hearing date once the application has been through
              a zoning review. Under Ontario&apos;s Planning Act, a decision
              can be appealed to the Ontario Land Tribunal within 20 days.{" "}
              <a href="https://www.vaughan.ca/council/committees-boards-and-task-forces/committee-adjustment" target="_blank" rel="noopener noreferrer">City of Vaughan: Committee of Adjustment</a>.
            </p>
            <p>
              The four tests a Committee applies are set by the Planning Act,
              so they are the same ones we describe in{" "}
              <Link href="/insights/committee-of-adjustment-toronto">our guide to the Committee of Adjustment</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Trees",
        body: (
          <>
            <p>
              Under Vaughan&apos;s Tree Protection By-law 177-2025, a tree
              with a diameter of 20 centimetres or more cannot be injured,
              destroyed or removed without a permit. Construction-related
              work needs its own permit, with an arborist report and, where
              it applies, a replanting plan. The City gives its standard
              initial response time for tree permit requests as 30 business
              days, which is a reason to deal with trees at the start of
              design.{" "}
              <a href="https://www.vaughan.ca/residential/parks-and-trees/forestry-operations/tree-removal-permits-and-protection" target="_blank" rel="noopener noreferrer">City of Vaughan: Tree Removal Permits and Protection</a>.
            </p>
          </>
        ),
      },
      {
        heading: "Grading, heritage and conservation lands",
        body: (
          <>
            <ul>
              <li>
                <strong>Grading permit first.</strong> For a new home on an
                existing lot, and for additions, the City requires a grading
                permit before a building permit application can be made.
              </li>
              <li>
                <strong>Heritage.</strong> Vaughan has four Heritage
                Conservation Districts: Kleinburg-Nashville, Maple, Thornhill
                and Woodbridge. Exterior changes there need a heritage
                permit, and a demolition permit needs approval from the
                City&apos;s Cultural Heritage division first.
              </li>
              <li>
                <strong>Conservation authority.</strong> On regulated lands, a
                Toronto and Region Conservation Authority permit comes before
                the building permit.
              </li>
            </ul>
            <p>
              Building permits themselves are applied for online.{" "}
              <a href="https://www.vaughan.ca/residential/building-and-construction/building-permits/building-permits-homes/residential-infill-construction" target="_blank" rel="noopener noreferrer">City of Vaughan: Residential Infill Construction</a>.
            </p>
          </>
        ),
      },
      {
        heading: "How we approach a project in Vaughan",
        body: (
          <>
            <p>
              The same way we approach every home. We stand on the property
              before we talk about price, we check the zoning, the trees and
              the grading before a design is final, and we work off{" "}
              <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>{" "}
              for an agreed scope. You are welcome to see our homes in{" "}
              <Link href="/areas/willowdale">Willowdale</Link> and our active
              site in <Link href="/areas/york-mills">York Mills</Link> in
              person.
            </p>
            <p>
              We take on{" "}
              <Link href="/services/custom-homes">custom homes</Link>,{" "}
              <Link href="/services/additions">additions</Link> and{" "}
              <Link href="/services/transformations">whole-home transformations</Link>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Vaughan?",
        a: "Yes. We serve Vaughan, with custom homes, additions and whole-home transformations. We are glad to show you our finished homes and our active site in person.",
      },
      {
        q: "Do I need a permit to remove a tree on my lot in Vaughan?",
        a: "Under Tree Protection By-law 177-2025, a tree with a diameter of 20 centimetres or more cannot be injured, destroyed or removed without a permit. Construction-related work needs its own permit, with an arborist report.",
      },
      {
        q: "What comes before a building permit for a new home in Vaughan?",
        a: "For a new home on an existing lot, the City of Vaughan requires a grading permit before a building permit application can be made. Depending on the lot, a minor variance, a tree permit, a heritage permit or a conservation authority permit may also come first.",
      },
      {
        q: "Which zoning by-law applies in Vaughan?",
        a: "Comprehensive Zoning By-law 001-2021 has been in effect since October 20, 2021. Some lands and sections remain under appeal, so the rules for a specific lot should be confirmed with the City before design begins.",
      },
    ],
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    kind: "served",
    title: "Custom Home Builder Serving Etobicoke | Fatahi Building",
    description:
      "What building a custom home, addition or renovation in Etobicoke involves, from the City of Toronto's own rules: zoning, variances, trees and ravines.",
    h1: "Custom Home Builder Serving Etobicoke",
    headline: "Building in Etobicoke",
    intro: (
      <>
        <p>
          We serve Etobicoke, designing and building custom homes, additions
          and whole-home transformations. Etobicoke is part of the City of
          Toronto, so Toronto&apos;s rules apply, with a few local differences
          worth knowing. What follows is taken from the City&apos;s own
          published rules as of November 2026.
        </p>
      </>
    ),
    sections: [
      {
        heading: "Zoning: confirm which by-law covers the lot",
        body: (
          <>
            <p>
              Toronto&apos;s Zoning By-law 569-2013 applies city-wide, but the
              City notes that some properties are still subject to the former
              municipal zoning by-laws, and it still publishes information on
              the Etobicoke Zoning Code. So the first step on an Etobicoke lot
              is confirming which one governs it.{" "}
              <a href="https://www.toronto.ca/city-government/planning-development/zoning-by-law-preliminary-zoning-reviews/zoning-by-law-569-2013-2/" target="_blank" rel="noopener noreferrer">City of Toronto: Zoning By-law 569-2013</a>.
            </p>
          </>
        ),
      },
      {
        heading: "Minor variances",
        body: (
          <>
            <p>
              Etobicoke applications go to the Etobicoke York district of the
              Committee of Adjustment, with hearings at the Etobicoke Civic
              Centre. Applications are filed digitally. A notice sign is
              posted on the property for 10 days before the hearing, and the
              appeal period for a minor variance is 20 days from the
              decision, with appeals heard by the Toronto Local Appeal Body.{" "}
              <a href="https://www.toronto.ca/city-government/planning-development/committee-of-adjustment/" target="_blank" rel="noopener noreferrer">City of Toronto: Committee of Adjustment</a>.
            </p>
            <p>
              In our experience the whole step adds two to four months. We
              explain how it works in{" "}
              <Link href="/insights/committee-of-adjustment-toronto">our guide to the Committee of Adjustment</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "Trees and ravines",
        body: (
          <>
            <p>
              On private property in Toronto, a tree of 30 centimetres or
              more in diameter cannot be injured or removed without a permit.
              City Council has endorsed reducing that to 20 centimetres, which
              is not yet in force.{" "}
              <a href="https://www.toronto.ca/services-payments/building-construction/tree-ravine-protection-permits/when-to-apply-for-a-tree-or-ravine-permit/" target="_blank" rel="noopener noreferrer">City of Toronto: When to Apply for a Tree or Ravine Permit</a>.
            </p>
            <p>
              Lots in a ravine and natural feature protected area carry more.
              There, a permit is needed to harm or remove any tree regardless
              of size, to change the grade, or to build new structures or
              retaining walls. The Humber, Mimico Creek and Etobicoke Creek
              watersheds are also within the Toronto and Region Conservation
              Authority&apos;s jurisdiction, and on regulated lands its permit
              comes before the building permit. What a protection zone means
              on site is in{" "}
              <Link href="/insights/tree-protection-zones-toronto">our article on tree protection zones</Link>.
            </p>
          </>
        ),
      },
      {
        heading: "How we approach a project in Etobicoke",
        body: (
          <>
            <p>
              The same way we approach every home. We stand on the property
              before we talk about price, we check the zoning, the trees and
              any ravine or conservation limits before a design is final, and
              we work off{" "}
              <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>{" "}
              for an agreed scope. You are welcome to see our homes in{" "}
              <Link href="/areas/willowdale">Willowdale</Link> and our active
              site in <Link href="/areas/york-mills">York Mills</Link> in
              person.
            </p>
            <p>
              We take on{" "}
              <Link href="/services/custom-homes">custom homes</Link>,{" "}
              <Link href="/services/additions">additions</Link> and{" "}
              <Link href="/services/transformations">whole-home transformations</Link>.
            </p>
          </>
        ),
      },
    ],
    faqs: [
      {
        q: "Do you build custom homes in Etobicoke?",
        a: "Yes. We serve Etobicoke, with custom homes, additions and whole-home transformations. We are glad to show you our finished homes and our active site in person.",
      },
      {
        q: "Where are minor variance hearings held for Etobicoke?",
        a: "Etobicoke applications go to the Etobicoke York district of Toronto's Committee of Adjustment, with hearings at the Etobicoke Civic Centre. The appeal period for a minor variance is 20 days from the decision, and appeals are heard by the Toronto Local Appeal Body.",
      },
      {
        q: "Which trees are protected on an Etobicoke lot?",
        a: "On private property in Toronto, a tree of 30 centimetres or more in diameter cannot be injured or removed without a permit. In a ravine and natural feature protected area, a permit is needed to harm or remove any tree regardless of size.",
      },
      {
        q: "Does the Etobicoke Zoning Code still apply?",
        a: "Toronto's Zoning By-law 569-2013 applies city-wide, but the City notes that some properties are still subject to the former municipal zoning by-laws. Which one governs a specific lot should be confirmed with the City before design begins.",
      },
    ],
  },
];

export const getArea = (slug: string) => areas.find((a) => a.slug === slug);

// The full service list shown on /areas. A name with a slug links to its own page.
export const serviceRegions: { region: string; note?: string; places: { name: string; slug?: string }[] }[] = [
  {
    region: "Central Toronto & Midtown",
    places: [
      { name: "Rosedale" },
      { name: "Forest Hill" },
      { name: "Lawrence Park" },
      { name: "Midtown" },
      { name: "Yorkville" },
      { name: "Summerhill" },
      { name: "Moore Park" },
      { name: "Deer Park" },
      { name: "The Annex" },
      { name: "Leaside" },
      { name: "Davisville" },
      { name: "Lytton Park" },
      { name: "Bedford Park" },
      { name: "North Toronto" },
      { name: "Downtown Toronto" },
    ],
  },
  {
    region: "North York",
    places: [
      { name: "The Bridle Path" },
      { name: "York Mills", slug: "york-mills" },
      { name: "Hoggs Hollow" },
      { name: "St. Andrew-Windfields" },
      { name: "Willowdale", slug: "willowdale" },
      { name: "Bayview Village" },
      { name: "Lansing" },
      { name: "Don Mills" },
      { name: "Banbury" },
      { name: "Newtonbrook" },
    ],
  },
  {
    region: "Etobicoke, East York & Scarborough",
    places: [
      { name: "Etobicoke", slug: "etobicoke" },
      { name: "The Kingsway" },
      { name: "Edenbridge-Humber Valley" },
      { name: "Princess-Rosethorn" },
      { name: "Markland Wood" },
      { name: "Mimico" },
      { name: "East York" },
      { name: "The Beaches" },
      { name: "Scarborough" },
      { name: "Guildwood" },
    ],
  },
  {
    region: "York Region",
    places: [
      { name: "Vaughan", slug: "vaughan" },
      { name: "Kleinburg" },
      { name: "Woodbridge" },
      { name: "Thornhill" },
      { name: "Maple" },
      { name: "Richmond Hill", slug: "richmond-hill" },
      { name: "Markham" },
      { name: "Unionville" },
      { name: "King City" },
      { name: "Nobleton" },
      { name: "Aurora" },
      { name: "Newmarket" },
      { name: "Stouffville" },
    ],
  },
  {
    region: "Peel, Halton & Durham",
    places: [
      { name: "Mississauga" },
      { name: "Lorne Park" },
      { name: "Mineola" },
      { name: "Port Credit" },
      { name: "Oakville" },
      { name: "Burlington" },
      { name: "Brampton" },
      { name: "Caledon" },
      { name: "Pickering" },
      { name: "Ajax" },
      { name: "Whitby" },
    ],
  },
];
