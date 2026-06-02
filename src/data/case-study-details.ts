export const caseStudyDetails: Record<
  string,
  {
    challenge: string;
    approach: string;
    outcome: string;
    assetSlots: {
      assetId: string;
      title: string;
      description: string;
      crop: "portrait" | "systems" | "chrome" | "covers" | "headers";
    }[];
  }
> = {
  "home-depot": {
    challenge:
      "HomeDepot.com had to support highly customizable home improvement projects inside a massive retail catalog. Customers needed more than individual products; they needed guided inputs, material lists, and omnichannel paths to pickup or delivery.",
    approach:
      "Gibson helped lead UX designers and researchers creating reusable, validated project-shopping patterns for calculators, configurators, mobile flows, input types, and design-system-aligned layouts.",
    outcome:
      "The work helped teams shift project experiences from product-by-product browsing toward guided material selection and more consistent reusable patterns across the Home Depot digital ecosystem.",
    assetSlots: [
      {
        assetId: "home-depot-project-calculator-public-screenshot",
        title: "Project-shopping pattern screenshot",
        description: "A public-safe screen or reconstructed mockup showing guided project inputs, calculators, or configurator flow.",
        crop: "systems"
      },
      {
        assetId: "home-depot-materials-handoff-artifact",
        title: "Materials list / cart handoff",
        description: "A visual showing how customer inputs become a complete list, cart, pickup, or delivery path.",
        crop: "headers"
      },
      {
        assetId: "home-depot-workshop-artifact",
        title: "Workshop or system artifact",
        description: "A diagram, pattern-library frame, sticky-note wall, or anonymized process artifact from the UX system work.",
        crop: "systems"
      }
    ]
  },
  carmax: {
    challenge:
      "Selling a car online is a high-stakes decision with a long form flow, complex offer comprehension, and online or in-store next steps. The journey needs to feel simple enough for customers to finish.",
    approach:
      "Gibson helps lead design for the sell-your-car journey, including landing page testing, a 20+ question funnel, offer delivery, next-step clarity, and AI-driven design and research practices.",
    outcome:
      "The work supports a high-traffic funnel receiving over one million monthly visitors and helps customers move from sell intent to an understandable offer and clearer next step.",
    assetSlots: [
      {
        assetId: "carmax-sell-my-car-public-screenshot",
        title: "Sell landing page screenshot",
        description: "A public CarMax.com screenshot showing the entry point into the sell-your-car journey.",
        crop: "covers"
      },
      {
        assetId: "carmax-form-funnel-artifact",
        title: "Form funnel example",
        description: "A public-safe or recreated view of the 20+ question flow, input patterns, and decision moments.",
        crop: "systems"
      },
      {
        assetId: "carmax-offer-delivery-artifact",
        title: "Offer delivery / next step",
        description: "A screenshot or anonymized mockup showing how the offer and online or in-store next steps are explained.",
        crop: "headers"
      }
    ]
  },
  "mini-murals": {
    challenge:
      "Mini Murals created public art across Houston, but the distributed nature of the work made discovery, storytelling, and organization difficult without a strong digital layer.",
    approach:
      "Gibson helped as CTO with the logo, website, WordPress updates, interactive mural maps, neighborhood/artist/theme browsing, campaigns, marketing materials, and operational systems.",
    outcome:
      "The project made 250+ murals by 40+ artists easier to discover and helped bring public art into Houston neighborhoods, art districts, and areas with limited public art access.",
    assetSlots: [
      {
        assetId: "mini-murals-mural-photo",
        title: "Mural photography",
        description: "A strong photo of a finished traffic-control-cabinet mural in context on a Houston street.",
        crop: "covers"
      },
      {
        assetId: "mini-murals-map-screenshot",
        title: "Interactive map screenshot",
        description: "A screen showing mural browsing by neighborhood, artist, or theme.",
        crop: "systems"
      },
      {
        assetId: "mini-murals-brand-campaign",
        title: "Brand / campaign artifact",
        description: "Logo, email, marketing material, or WordPress page capture that shows the operating system around the project.",
        crop: "headers"
      }
    ]
  },
  straterra: {
    challenge:
      "A serial entrepreneur had a commercial-property platform concept that needed naming, brand clarity, website credibility, lead generation, and product UX before it could move toward launch.",
    approach:
      "Gibson helped with concept translation, naming, surveys and reports, brand guidelines, art direction, a B2B SaaS-like website, lead generation, platform UX/UI, and ongoing advising.",
    outcome:
      "The concept became a more launch-ready brand, public website, inquiry funnel, and private platform foundation, with confidential property data kept out of public-facing materials.",
    assetSlots: [
      {
        assetId: "straterra-public-website-concept",
        title: "Public website screenshot",
        description: "A launch-safe public-facing page showing the brand, B2B positioning, and inquiry path.",
        crop: "headers"
      },
      {
        assetId: "straterra-brand-guideline",
        title: "Brand guideline artifact",
        description: "Naming, type, color, or art-direction frame from the brand system.",
        crop: "systems"
      },
      {
        assetId: "straterra-platform-mockup",
        title: "Anonymized platform mockup",
        description: "A blurred or fake-data listing interface showing the private product shape without exposing real property data.",
        crop: "covers"
      }
    ]
  }
};
