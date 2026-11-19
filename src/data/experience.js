export const experience = [
  {
    company: 'Amiti Software Technologies',
    role: 'Software Developer — Java Full Stack',
    timeline: 'Jan 2025 — Jun 2026',
    location: 'Bangalore, India · client: OpenLane (US B2B automotive marketplace)',
    bullets: [
      'Developed and maintained 15+ REST APIs with Spring Boot and Oracle SQL supporting core transaction processing for 50,000+ daily transactions.',
      'Diagnosed legacy N+1 query patterns through Hibernate profiling, cutting average response time by 40% on core endpoints.',
      'Redesigned the Server-Driven UI architecture into JSON schema-based microservices, improving frontend iteration time by 25% across Angular and React.js.',
      'Containerized services with Docker on Kubernetes and maintained Azure DevOps CI/CD pipelines with zero deployment failures during tenure.',
    ],
    projects: [
      {
        name: 'Volkswagen US B2B Platform',
        timeline: 'May 2025 — Mar 2026',
        bullets: [
          'Delivered the end-to-end leased vehicle turn-in workflow for dealerships as part of a cross-functional team building a new US-region platform.',
          'Designed Spring Boot APIs for complex vehicle data and built an automated document generation service with Jasper Reports for vehicle return receipts.',
          'Implemented a full-stack payment module: backend transactional APIs and responsive UI components for dealer-customer purchases.',
        ],
        tech: ['Spring Boot', 'Jasper Reports', 'Oracle SQL', 'Angular', 'React.js'],
      },
      {
        name: 'Special Time Sale Auction',
        timeline: 'Mar 2026 — Jun 2026',
        bullets: [
          'Built a configurable 2-hour special auction feature for premium vehicles as a multi-tenant solution for Volkswagen US and other private labels.',
          'Implemented manual resume of the original auction from the dealer portal: halts the special sale, logs transaction state and restarts the standard auction cycle.',
        ],
        tech: ['Spring Boot', 'Oracle SQL', 'Angular', 'React.js'],
      },
    ],
  },
  {
    company: 'Capgemini',
    role: 'Software Developer Trainee',
    timeline: 'Jul 2024 — Oct 2024',
    location: 'Mumbai, India',
    bullets: ['Enterprise Java training covering Spring Boot and Hibernate microservice development.'],
    projects: [],
  },
];
