export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  toolsAndTech: string[];
  typicalTimeline: string;
  impactMetric: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  tagline: string;
  heroMetric: string;
  metricLabel: string;
  challenge: string;
  strategy: string[];
  deliverables: string[];
  results: { metric: string; label: string }[];
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
  };
  duration: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  readTime: string;
  category: string;
  publishedDate: string;
  summary: string;
  author: {
    name: string;
    role: string;
  };
  content: string[];
}

export interface ProjectInquiry {
  fullName: string;
  workEmail: string;
  companyName: string;
  websiteUrl: string;
  phoneNumber: string;
  monthlyBudget: string;
  primaryObjective: string;
  projectScope: string;
}
