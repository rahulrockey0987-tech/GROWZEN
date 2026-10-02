import { ServiceItem, CaseStudy, InsightArticle } from '../types/agency';

export const AGENCY_SERVICES: ServiceItem[] = [
  {
    id: 'performance-marketing',
    number: '01',
    title: 'Performance Marketing & Paid Media',
    tagline: 'High-intent customer acquisition across search, social, and programmatic channels.',
    description: 'We engineer full-funnel media buying architectures that balance customer acquisition cost (CAC) with customer lifetime value (LTV). Our media buyers operate with statistical significance and algorithmic bidding rigor across Google, Meta, LinkedIn, and programmatic exchanges.',
    deliverables: [
      'Multi-channel account architecture & attribution setup',
      'Meta Advantage+ and custom intent audience segmentation',
      'High-intent Google Search, Performance Max & YouTube campaigns',
      'LinkedIn Account-Based Marketing (ABM) for enterprise B2B',
      'Continuous creative split-testing and bid efficiency pacing',
      'Custom Looker Studio / BigQuery executive performance reporting'
    ],
    toolsAndTech: ['Google Ads', 'Meta Ads Manager', 'LinkedIn Campaign Manager', 'Triple Whale', 'AppsFlyer', 'BigQuery'],
    typicalTimeline: 'Ongoing retainer (min. 3-month strategic sprint)',
    impactMetric: '4.2x Average Portfolio ROAS'
  },
  {
    id: 'brand-strategy',
    number: '02',
    title: 'Brand Strategy & Identity Architecture',
    tagline: 'Positioning ambitious enterprises to command category leadership and premium pricing.',
    description: 'A great brand is not just a logo; it is the commercial moat that lowers customer acquisition costs and builds durable enterprise value. We construct positioning frameworks, voice guidelines, and visual identity systems that resonate with sophisticated buyers.',
    deliverables: [
      'Category positioning & competitive whitespace audit',
      'Value proposition & messaging matrix for core buyer personas',
      'Comprehensive visual identity (typography, color system, layout grid)',
      'Enterprise brand guidelines & digital design token documentation',
      'Investor decks, sales collateral & corporate presentation kits',
      'Brand governance and cross-channel visual roll-out'
    ],
    toolsAndTech: ['Figma', 'Adobe Creative Cloud', 'Miro', 'Typefoundry Licensing', 'Brandfolder'],
    typicalTimeline: '6 to 10 weeks',
    impactMetric: '+85% Increase in Brand Recall'
  },
  {
    id: 'creative-advertising',
    number: '03',
    title: 'Creative Direction & Commercial Advertising',
    tagline: 'Creative engineered specifically to convert in algorithmic feeds and high-impact media.',
    description: 'Creative is the single largest variable in modern media buying. We operate a rapid creative production engine that produces high-converting video ad sets, motion graphics, commercial 3D assets, and interactive landing experiences designed to stop the scroll.',
    deliverables: [
      'Concept development & commercial storytelling scripts',
      'Short-form and high-production social video ad variations',
      'Dynamic product showcases & 3D motion graphic packages',
      'Static editorial display sets & performance carousel units',
      'High-velocity creative testing (15–30 fresh variations/month)',
      'Hook rate, retention rate, and outbound CTR optimization'
    ],
    toolsAndTech: ['DaVinci Resolve', 'After Effects', 'Cinema 4D', 'Blender', 'Figma', 'Motion Design'],
    typicalTimeline: 'Bi-weekly creative sprints',
    impactMetric: '3.1x Hook-to-Action Rate'
  },
  {
    id: 'seo-content',
    number: '04',
    title: 'Search Engine Optimization & Content Strategy',
    tagline: 'Building permanent organic moats through technical rigor and authoritative content.',
    description: 'We treat SEO as a compounding customer acquisition asset, not a checklist of blog posts. We optimize technical architecture for modern crawl budgets and search engines, while constructing authoritative topic clusters that capture high-intent commercial buyers.',
    deliverables: [
      'Technical site audits (Core Web Vitals, schema markup, indexation)',
      'High-intent commercial keyword mapping & competitive gap analysis',
      'Authoritative thought leadership essays & topical cluster hubs',
      'Enterprise digital PR & high-tier editorial backlink acquisition',
      'Search Generative Experience (SGE) & AI answer engine optimization',
      'Conversion rate optimization on organic entry landing pages'
    ],
    toolsAndTech: ['Ahrefs', 'Semrush', 'Screaming Frog', 'Google Search Console', 'Clearscope'],
    typicalTimeline: '6 to 12 months compounding runway',
    impactMetric: '+240% Inbound Organic Pipeline'
  },
  {
    id: 'd2c-growth',
    number: '05',
    title: 'E-Commerce & D2C Growth Engineering',
    tagline: 'Scaling revenue velocity for direct-to-consumer and modern retail brands.',
    description: 'Scaling modern commerce requires synchronized optimization across front-end conversion rate, media efficiency, and customer retention. We optimize the entire post-click journey from landing page friction to automated retention email and SMS flows.',
    deliverables: [
      'Shopify Plus & headless commerce storefront conversion audits',
      'Custom high-converting offer landing pages & checkout flow refinement',
      'Lifecycle email/SMS marketing & customer segmentation in Klaviyo',
      'Average Order Value (AOV) expansion through bundles & post-purchase upsells',
      'Cohort retention analysis & churn mitigation strategies',
      'Blended CAC and MER (Marketing Efficiency Ratio) modeling'
    ],
    toolsAndTech: ['Shopify Plus', 'Klaviyo', 'Postscript', 'Hotjar', 'Google Optimize / VWO', 'Elevar'],
    typicalTimeline: 'Ongoing strategic growth engagement',
    impactMetric: '+44% Repeat Purchase Rate'
  },
  {
    id: 'b2b-demand-gen',
    number: '06',
    title: 'Corporate & B2B Demand Generation',
    tagline: 'Generating qualified enterprise pipeline for high-ACV technology and industrial firms.',
    description: 'For companies with complex sales cycles and high contract values, generic lead generation creates noise, not revenue. We deploy targeted Account-Based Marketing (ABM) and multi-touch nurture programs that deliver sales-ready opportunities directly to your enterprise team.',
    deliverables: [
      'Total Addressable Market (TAM) mapping & Ideal Customer Profile (ICP) tiering',
      'Account-Based Marketing targeting top-tier accounts on LinkedIn & IP display',
      'High-value executive research reports, ROI calculators & whitepapers',
      'Multi-touch email nurture sequences & automated CRM lead routing',
      'Sales and marketing alignment workshops with pipeline attribution modeling',
      'Closed-loop reporting integrating HubSpot / Salesforce CRM data'
    ],
    toolsAndTech: ['HubSpot', 'Salesforce', 'Apollo.io', '6sense', 'LinkedIn Sales Navigator'],
    typicalTimeline: 'Quarterly pipeline sprints',
    impactMetric: '₹38 Cr+ Attributed B2B Pipeline'
  }
];

export const AGENCY_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'neuron-pay',
    client: 'NeuronPay Technologies',
    industry: 'B2B FinTech & Corporate Payments',
    tagline: 'Scaling enterprise pipeline for an automated corporate treasury platform.',
    heroMetric: '+310%',
    metricLabel: 'Qualified Enterprise Pipeline in 9 Months',
    challenge: 'NeuronPay had developed an enterprise treasury orchestration engine but struggled with low-quality inbound leads from generic Google ads and unsustainable acquisition costs on LinkedIn.',
    strategy: [
      'Restructured go-to-market positioning from "corporate payment tool" to "Treasury Automation Operating System".',
      'Mapped top 2,500 enterprise CFOs and Finance Directors in India, deploying personalized Account-Based Marketing (ABM) across LinkedIn and programmatic IP targeting.',
      'Constructed an interactive "Treasury Idle Capital Calculator" landing asset with 28% opt-in conversion.',
      'Synchronized sales development reps with intent signals, reducing lead response time from 36 hours to 18 minutes.'
    ],
    deliverables: [
      'Account-Based Marketing Campaign Architecture',
      'Interactive CFO Treasury Calculator',
      'Enterprise Whitepaper & Executive Thought Leadership',
      'HubSpot CRM Closed-Loop Revenue Attribution'
    ],
    results: [
      { metric: '+310%', label: 'Qualified Sales Pipeline' },
      { metric: '-42%', label: 'Customer Acquisition Cost' },
      { metric: '₹42 Cr', label: 'Contract Pipeline Influenced' },
      { metric: '18 Days', label: 'Average Deal Cycle Reduction' }
    ],
    clientQuote: {
      quote: "GROWZEN transformed our commercial engine. They don't talk in agency jargon; they talk in pipeline value, sales cycle acceleration, and enterprise deal velocity. Their strategic execution is unmatched.",
      author: 'Vikramaditya Rao',
      role: 'Chief Commercial Officer, NeuronPay'
    },
    duration: '9-Month Strategic Retainer'
  },
  {
    id: 'aura-living',
    client: 'Aura Living',
    industry: 'Premium D2C Home & Interior Lifestyle',
    tagline: 'Scaling direct-to-consumer brand from plateau to category prominence.',
    heroMetric: '4.8x',
    metricLabel: 'Blended ROAS Scaled to ₹18 Cr ARR',
    challenge: 'After reaching ₹30 Lakhs in monthly revenue, Aura Living hit an aggressive CAC wall on Meta ads. Blended ROAS had deteriorated from 3.2x to 1.8x, stalling profitable brand growth.',
    strategy: [
      'Built a proprietary high-velocity creative production pipeline delivering 25+ fresh lifestyle and unboxing ad variations monthly.',
      'Rebuilt the Shopify Plus storefront with bespoke product bundling, increasing Average Order Value from ₹3,400 to ₹5,650.',
      'Deployed multi-tiered Klaviyo retention flows (post-purchase care, VIP replenishment, architectural lookbook series), unlocking 34% recurring revenue.',
      'Implemented server-side Conversions API (CAPI) and first-party attribution modeling to counter signal loss.'
    ],
    deliverables: [
      'High-Volume Lifestyle Creative Production',
      'Shopify Plus Checkout & AOV Optimization',
      'Advanced Klaviyo Retention Email/SMS Engine',
      'First-Party Conversion API Attribution'
    ],
    results: [
      { metric: '4.8x', label: 'Blended ROAS at Scale' },
      { metric: '₹18 Cr', label: 'Annualized Revenue Run-Rate' },
      { metric: '+66%', label: 'Average Order Value (AOV)' },
      { metric: '34%', label: 'Revenue from Retention Flows' }
    ],
    clientQuote: {
      quote: 'GROWZEN helped us cross the chasm from an interesting D2C brand into a profitable, category-defining business. Their creative output and media buying precision are world-class.',
      author: 'Meera Chidambaram',
      role: 'Founder & Managing Director, Aura Living'
    },
    duration: '14-Month Scale Partnership'
  },
  {
    id: 'zenith-logistics',
    client: 'Zenith Logistics Infrastructure',
    industry: 'Enterprise Cold-Chain & Supply Chain',
    tagline: 'Driving multi-crore industrial warehousing contracts through strategic demand gen.',
    heroMetric: '₹28 Cr',
    metricLabel: 'Attributed Contract Value Generated',
    challenge: 'Zenith operated premier temperature-controlled warehousing parks in South India, but relied entirely on slow word-of-mouth and broker networks with high sales commissions.',
    strategy: [
      'Repositioned Zenith as the critical infrastructure partner for pharmaceutical and quick-commerce giants expanding in Telangana and Andhra Pradesh.',
      'Produced cinematic architectural drone documentation and interactive 3D virtual park tours for enterprise procurement heads.',
      'Executed hyper-targeted LinkedIn ABM campaigns engaging supply chain directors at top 150 FMCG and pharma corporations.',
      'Created an authority industry report on "Cold-Chain Modernization in South India 2026".'
    ],
    deliverables: [
      'Brand Identity Refresh & Positioning System',
      'Interactive 3D Virtual Facility Tours',
      'Enterprise Procurement Demand Gen Campaigns',
      'State-Level Industrial Research Whitepaper'
    ],
    results: [
      { metric: '₹28 Cr', label: 'Signed Enterprise Contracts' },
      { metric: '4 Months', label: 'Fastest Lease Commitment' },
      { metric: '82%', label: 'Capacity Utilization Reached' },
      { metric: '-65%', label: 'Broker Intermediary Dependency' }
    ],
    clientQuote: {
      quote: 'The commercial impact was immediate. Instead of waiting for brokers, enterprise pharmaceutical leaders were reaching out directly to our executive team through the digital assets GROWZEN created.',
      author: 'Suresh Reddy',
      role: 'Executive Director, Zenith Logistics'
    },
    duration: '12-Month Corporate Mandate'
  },
  {
    id: 'kavach-health',
    client: 'Kavach Health',
    industry: 'Digital Health & Preventive Medicine',
    tagline: 'Accelerating patient acquisition and organic search authority.',
    heroMetric: '140K+',
    metricLabel: 'Verified App Installs & Diagnostic Bookings',
    challenge: 'Kavach needed to scale preventive health checkup subscriptions across urban tier-1 centers while navigating strict medical advertising compliance rules and rising Google CPCs.',
    strategy: [
      'Constructed a 400-article medical authority content engine written and certified by licensed physicians.',
      'Targeted non-branded symptom-to-solution keyword clusters, securing top-3 Google rankings for 320+ high-intent health terms.',
      'Produced physician-led video explanation ad creative addressing chronic lifestyle management.',
      'Optimized mobile web-to-app install journey, achieving a 41% click-to-install rate.'
    ],
    deliverables: [
      'Technical SEO & Core Web Vitals Optimization',
      'Physician-Verified Content Cluster Architecture',
      'Meta & Google App Campaign Strategy',
      'App Store Optimization (ASO) on iOS & Android'
    ],
    results: [
      { metric: '140,000+', label: 'Verified App Downloads' },
      { metric: '+280%', label: 'Organic Search Traffic Growth' },
      { metric: '₹68', label: 'Blended Cost Per Install (CPI)' },
      { metric: '4.8★', label: 'App Store Rating with 12K+ Reviews' }
    ],
    clientQuote: {
      quote: 'In healthcare, trust is everything. GROWZEN understood how to communicate medical rigor while building an acquisition engine that scaled month over month with immaculate unit economics.',
      author: 'Dr. Ananya Varma',
      role: 'Co-Founder & Chief Product Officer, Kavach Health'
    },
    duration: '8-Month Growth Sprints'
  }
];

export const AGENCY_INSIGHTS: InsightArticle[] = [
  {
    id: 'death-of-blended-roas',
    title: 'The Death of Blended ROAS: Why Unit Economics Must Lead Media Buying in 2026',
    readTime: '6 min read',
    category: 'Performance Strategy',
    publishedDate: 'September 2026',
    summary: 'Relying on platform-reported ROAS is leading consumer brands into margin traps. Here is how leading CMOs are restructuring their commercial scorecards around first-party contribution margin.',
    author: {
      name: 'Rohan Deshmukh',
      role: 'Head of Growth Strategy, GROWZEN'
    },
    content: [
      'For years, digital media teams lived in the comforting illusion of platform-reported ROAS. If Meta claimed a 3.5x return and Google reported 4.2x, the monthly marketing review was considered a victory.',
      'Today, that framework is fundamentally broken. Signal degradation, overlapping algorithmic attribution windows, and platform self-attribution have decoupled reported ROAS from net bank deposits. We routinely audit accounts where reported ROAS looks healthy, yet the business is losing money on every marginal order once COGS, fulfillment, payment fees, and return rates are factored in.',
      'At GROWZEN, we mandate a transition to Contribution Margin Marketing (CMM). Instead of managing to ad-platform ROAS, media buyers are evaluated on Net Contribution Margin Dollar Generation after all variable fulfillment costs.',
      'When your media team understands your gross margin by SKU, inventory aging velocity, and cohort repeat rates, ad spend ceases to be a speculative gamble. It becomes a predictable mathematical machine.'
    ]
  },
  {
    id: 'creative-as-targeting',
    title: 'Creative As The New Targeting: How Modern Ad Algorithms Changed Media Buying',
    readTime: '5 min read',
    category: 'Creative Direction',
    publishedDate: 'August 2026',
    summary: 'Manual audience hacks and granular interest targeting are obsolete. Today, the algorithmic feed uses your video hook, visual framing, and messaging to identify and segment your ideal buyer.',
    author: {
      name: 'Pooja Kulkarni',
      role: 'Creative Director, GROWZEN'
    },
    content: [
      'Five years ago, a media buyer spent 80% of their time inside Ads Manager tinkering with lookalikes, custom exclusions, layered interests, and dayparting schedules. The creative was often treated as an afterthought—a static banner resized into seven dimensions.',
      'In 2026, the machine learning models that govern modern ad platforms have inverted this equation entirely. Broad targeting with machine learning consistently outperforms manual audience slicing.',
      'What teaches the algorithm who to serve your ad to? The creative itself. The first three seconds of visual narrative, the audio transcription, the text overlays, and the problem-state articulated in the copy determine which cluster of consumers will pause their scroll.',
      'If your creative speaks to everyone, the algorithm shows it to no one of commercial consequence. At GROWZEN, our creative sprints are structured around specific consumer cognitive biases and purchase objections, turning creative production into our most powerful targeting lever.'
    ]
  },
  {
    id: 'b2b-demand-myth',
    title: 'The B2B Lead Gen Myth: Why Gated E-books Are Poisoning Enterprise Sales Cycles',
    readTime: '7 min read',
    category: 'B2B Enterprise',
    publishedDate: 'July 2026',
    summary: 'Buying lists of emails who downloaded a PDF creates bloated SDR pipelines and burned-out sales reps. Learn how to engineer actual inbound buyer intent through ungated demand generation.',
    author: {
      name: 'Aditya Srinivas',
      role: 'VP Enterprise Practice, GROWZEN'
    },
    content: [
      'There is a persistent fiction in B2B corporate marketing: run ads to a gated 25-page PDF, collect business emails and phone numbers, label them "Marketing Qualified Leads" (MQLs), and immediately task junior SDRs with cold calling them.',
      'The result? SDRs spend 90% of their workday speaking to junior interns or students who just wanted to skim a statistics chart, while true enterprise decision-makers ignore the spam.',
      'Modern B2B buyers do 80% of their vendor research in private dark channels: peer Slack communities, industry podcasts, LinkedIn commentary, and uncensored customer reviews before ever filling out a sales contact form.',
      'To win in this environment, enterprise companies must shift from lead capture to demand creation: ungate your best insights, distribute your commercial thesis freely where buyers already spend time, and make your "Request Demo" form so compelling that qualified executives seek you out with buying intent in hand.'
    ]
  }
];

export const INDUSTRIES_SERVED = [
  {
    name: 'B2B & Enterprise Software',
    description: 'SaaS, enterprise IT services, cloud infrastructure, and developer tools requiring multi-stakeholder consensus and pipeline acceleration.',
    metrics: '₹42 Cr+ Pipeline Influenced'
  },
  {
    name: 'E-Commerce & D2C Brands',
    description: 'Direct-to-consumer apparel, home lifestyle, beauty, wellness, and specialty consumer products scaling through paid media and retention.',
    metrics: '4.8x Blended ROAS'
  },
  {
    name: 'HealthTech & Life Sciences',
    description: 'Diagnostic networks, telemedicine platforms, medical device manufacturers, and specialized clinics navigating regulatory trust.',
    metrics: '140K+ User Acquisitions'
  },
  {
    name: 'Real Estate & Urban Spaces',
    description: 'Commercial developers, luxury residential towers, co-working networks, and logistics industrial parks in key metropolitan hubs.',
    metrics: '₹120 Cr+ Real Estate Bookings'
  },
  {
    name: 'Financial Services & FinTech',
    description: 'Corporate treasury, neo-banking, wealth management, insurance, and lending platforms seeking high-trust qualified borrowers.',
    metrics: '-42% Blended CAC'
  },
  {
    name: 'Modern Manufacturing & Industrial',
    description: 'Precision engineering, chemical manufacturing, packaging, and supply chain enterprises modernizing international customer acquisition.',
    metrics: '68% Shorter Deal Velocity'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Commercial Diagnostic & Audit',
    subtitle: 'Deep data interrogation before a single rupee of media is deployed.',
    details: [
      'Historical ad account telemetry & attribution reconciliation',
      'Cohort retention analysis, unit economics & payback periods',
      'Competitive whitespace, messaging resonance & friction audits',
      'Technical tracking infrastructure verification & CAPI alignment'
    ]
  },
  {
    step: '02',
    title: 'Strategic Growth Architecture',
    subtitle: 'Designing the comprehensive commercial blueprint for scale.',
    details: [
      'Customer persona mapping with quantifiable purchasing triggers',
      'Multi-channel capital allocation model based on marginal CAC',
      'Creative strategy matrix detailing hooks, angles, and formats',
      'Full-funnel offer structuring and conversion journey blueprints'
    ]
  },
  {
    step: '03',
    title: 'Creative & Message Engineering',
    subtitle: 'Producing high-impact assets engineered to convert in competitive feeds.',
    details: [
      'High-velocity video ad production with native platform pacing',
      'Landing page wireframing, copywriting, and bespoke development',
      'Motion design packages, 3D product renders, and static editorial units',
      'Rigorous hook rate and retention curve pre-launch reviews'
    ]
  },
  {
    step: '04',
    title: 'Algorithmic Scaling & Media Buying',
    subtitle: 'Disciplined capital deployment focused on unit contribution margin.',
    details: [
      'Multi-channel execution across Meta, Google, LinkedIn & Programmatic',
      'Continuous creative split-testing (15–30 fresh variations/month)',
      'Algorithmic bid pacing and dayparting to prevent ad fatigue',
      'Dynamic budget reallocation toward highest margin-producing cohorts'
    ]
  },
  {
    step: '05',
    title: 'Attribution, Retention & Compounding',
    subtitle: 'Turning initial customer transactions into durable lifetime value.',
    details: [
      'First-party data modeling and marketing mix modeling (MMM)',
      'Automated email/SMS lifecycle retention flows and VIP segmentation',
      'Weekly executive syncs with real-time financial reporting dashboards',
      'Quarterly strategic roadmap evolution based on market shifts'
    ]
  }
];
