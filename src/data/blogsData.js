import Blog1Img from "../assets/Blogs/Blog1.png";
import Blog2Img from "../assets/Blogs/blog2.png";
import Blog3Img from "../assets/Blogs/blog3.png";

export const blogCategories = ["All", "Technology", "Sustainability", "Safety"];

export const blogsList = [
  {
    id: 1,
    slug: "how-bim-is-revolutionizing-construction-in-india",
    title: "How BIM is Revolutionizing Construction in India",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "DSS Team",
    authorRole: "BIM & Engineering Specialist",
    image: Blog1Img,
    fallback: Blog1Img,
    excerpt:
      "Discover how Building Information Modeling is reducing project delays and cost overruns...",
    intro:
      "Building Information Modeling (BIM) is transforming the construction industry worldwide, and India is no exception. This digital representation of physical and functional characteristics of a facility is revolutionizing how we plan, design, construct, and manage buildings and infrastructure.",
    industryInsight:
      "According to industry research, BIM can reduce project costs by up to 20% and shorten project timelines by up to 30% through improved multidisciplinary coordination and automated clash detection.",
    keyPointsTitle: "Key Benefits of BIM",
    keyPoints: [
      {
        title: "Clash Detection",
        desc: "BIM automatically identifies conflicts between different systems (e.g., a pipe running through a structural beam) before construction begins, saving millions in rework costs.",
      },
      {
        title: "Cost Estimation",
        desc: "The 3D model automatically generates accurate material quantities, enabling precise cost estimation, itemized BOQ forecasting, and procurement planning.",
      },
      {
        title: "Schedule Optimization",
        desc: "4D BIM (3D + time scheduling) allows teams to visualize construction sequencing in virtual simulations and eliminate on-site bottlenecks.",
      },
      {
        title: "Facility Management",
        desc: "After handover, the BIM digital twin model serves as a live asset database for long-term building operations and predictive maintenance.",
      },
    ],
    sections: [
      {
        title: "BIM Adoption in India",
        desc: "The Indian construction industry is rapidly embracing BIM technology. Major government initiatives like the Smart Cities Mission and mega infrastructure corridors increasingly mandate BIM compliance for large-scale developments.",
      },
      {
        title: "How DSS Infrabuild Leverages BIM",
        desc: "At DSS Infrabuild, we integrate 3D architectural/structural modeling, automated clash detection, 4D timeline scheduling, 5D cost tracking, and interactive 3D client dashboards for precision execution.",
      },
      {
        title: "The Future of Digital Construction",
        desc: "As technology evolves, BIM is integrating with AI generative layout planning, drone site surveillance, and IoT sensor arrays to create living digital twins for smart real estate.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Complex spatial overlaps between MEP lines and RCC structures leading to expensive on-site alterations.",
        solution:
          "Integrated 3D BIM clash detection resolving all pipeline and rebar collisions prior to ground-breaking.",
      },
      {
        challenge:
          "Unforeseen cost escalations caused by manual estimation inaccuracies.",
        solution:
          "Automated real-time 5D BIM quantity take-offs ensuring 100% budget precision and material tracking.",
      },
    ],
    conclusion:
      "The future of construction is digital, and BIM is at the forefront of this transformation. Contractors and developers who embrace BIM today will lead the construction and infrastructure landscape of tomorrow.",
  },
  {
    id: 2,
    slug: "sustainable-building-practices-for-2026",
    title: "Sustainable Building Practices for 2026",
    category: "Sustainability",
    date: "March 8, 2024",
    readTime: "10 min read",
    author: "DSS Team",
    authorRole: "Green Building Consultant",
    image: Blog2Img,
    fallback: Blog2Img,
    excerpt:
      "From green materials to energy-efficient designs, explore the future of eco-construction.",
    intro:
      "The construction industry is at a pivotal moment. As we step into 2026, sustainability is no longer a choice — it's a necessity. Climate change, resource scarcity, and stringent environmental regulations are driving a fundamental shift in how we design, build, and operate buildings.",
    industryInsight:
      "According to the Indian Green Building Council (IGBC), green buildings consume 40-50% less energy and 20-30% less water compared to conventional buildings, cutting operating expenditures by 30-40% over their lifespan.",
    keyPointsTitle: "Top Sustainable Building Practices for 2026",
    keyPoints: [
      {
        title: "Net-Zero Energy Buildings (NZEB)",
        desc: "On-site rooftop solar photovoltaic arrays, micro wind turbines, and geothermal systems powering self-sustaining properties.",
      },
      {
        title: "Green Concrete & Low-Carbon Materials",
        desc: "Fly-ash concrete, recycled demolition aggregates, cross-laminated timber (CLT), and carbon-negative hempcrete composites.",
      },
      {
        title: "Rainwater Harvesting & Water Recycling",
        desc: "Dual-plumbing greywater recycling, permeable pavers for groundwater recharge, and smart acoustic leak detection sensors.",
      },
      {
        title: "Passive Solar Architecture",
        desc: "Orientation optimization, cool roof coatings, low-E double-glazed facades, and natural wind-tunnel ventilation reducing HVAC loads by 40%.",
      },
    ],
    sections: [
      {
        title: "Circular Economy & Waste Management",
        desc: "On-site separation of concrete, steel, and timber combined with pre-cast modular components reduces total construction waste by over 30%.",
      },
      {
        title: "Smart Energy Management & IoT",
        desc: "AI-powered automated HVAC controls, daylight harvesting sensors, and real-time energy dashboards optimizing daily consumption.",
      },
      {
        title: "Green Roofs & Biophilic Living Walls",
        desc: "Vegetated rooftops and living green facades combating the urban heat island effect while significantly improving indoor air quality.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Perceived higher upfront capital expenditure for eco-friendly building materials.",
        solution:
          "Achieving operational breakeven within 3-4 years through massive 40-50% energy and water utility savings.",
      },
      {
        challenge:
          "Ensuring supply chain authenticity for certified green building materials.",
        solution:
          "Partnering exclusively with IGBC/GRIHA-certified vendors and sourcing local high-grade recycled fly-ash aggregates.",
      },
    ],
    conclusion:
      "The buildings we construct today will shape our planet for generations. Sustainable building practices deliver long-term economic value, lower carbon footprints, and healthier spaces for everyone.",
  },
  {
    id: 3,
    slug: "top-10-safety-standards-every-site-must-follow",
    title: "Top 10 Safety Standards Every Site Must Follow",
    category: "Safety",
    date: "February 28, 2024",
    readTime: "8 min read",
    author: "DSS Team",
    authorRole: "HSE Safety Director",
    image: Blog3Img,
    fallback: Blog3Img,
    excerpt:
      "Ensuring worker safety and compliance with OSHA standards on every construction site.",
    intro:
      "Construction sites are dynamic, fast-paced environments with high-risk heavy machinery and scaffolding. With proper safety standards and rigorous implementation, over 70% of on-site accidents are completely preventable. At DSS Infrabuild, safety is our primary foundation.",
    industryInsight:
      "Strict adherence to ISO 45001 and OSHA safety protocols reduces on-site incidents by over 75%, eliminating project downtime and ensuring every worker returns home safely.",
    keyPointsTitle: "Essential Safety Standards Every Site Must Enforce",
    keyPoints: [
      {
        title: "100% Mandatory PPE Compliance",
        desc: "Hard hats, steel-toed boots, high-visibility reflective vests, eye protection, cut-resistant gloves, and hearing defense before entry.",
      },
      {
        title: "100% Tie-Off Fall Protection",
        desc: "Full-body harnesses with shock-absorbing lanyards, perimeter guardrails, safety netting, and secured ladder stations above 6 feet.",
      },
      {
        title: "Certified Scaffolding & Load Audits",
        desc: "Daily scaffolding checks, cross-bracing, base plates, and strict manufacturer load capacity enforcement by competent engineers.",
      },
      {
        title: "Electrical Safety & LOTO Systems",
        desc: "Ground Fault Circuit Interrupters (GFCI), waterproof industrial cabling, and Lockout/Tagout procedures during maintenance.",
      },
    ],
    sections: [
      {
        title: "Heavy Machinery & Crane Operation Protocol",
        desc: "Daily pre-shift machinery inspections, certified operators, designated swing radius barricades, and trained signalers for all hoisting work.",
      },
      {
        title: "Excavation & Trench Shoring",
        desc: "Soil classification testing, trench boxes, and 45-degree angle sloping to prevent soil cave-ins during basement and foundation work.",
      },
      {
        title: "Fire Safety & Emergency Preparedness",
        desc: "Class ABC fire extinguishers, designated assembly points, hot-work permits, and regular on-site evacuation drills.",
      },
    ],
    challengesAndSolutions: [
      {
        challenge:
          "Worker negligence or resistance toward wearing complete safety gear in extreme weather.",
        solution:
          "Zero-tolerance 'No PPE = No Site Entry' policy reinforced by daily morning safety toolbox talks and performance rewards.",
      },
      {
        challenge:
          "High-risk work at elevated heights during high-rise structural erection.",
        solution:
          "Mandatory double-lanyard harnesses, certified edge-protection nets, and continuous wind-speed monitoring.",
      },
    ],
    conclusion:
      "Safety does not happen by accident. It is built through conscious planning, rigorous training, and everyday vigilance. At DSS Infrabuild, our goal is zero harm across every project.",
  },
];
