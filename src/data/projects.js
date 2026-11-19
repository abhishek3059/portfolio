export const projects = [
  {
    name: 'QA Assistant',
    icon: '🤖',
    featured: true,
    description:
      'RAG extension for VS Code, published as v0.1.0 on the VS Code Marketplace. Local hybrid retrieval (structural chunking, ONNX embeddings, BM25 + cosine with RRF) and provider-agnostic generation with SSE streaming and encrypted key storage.',
    tech: ['TypeScript', 'RAG', 'VS Code Extension', 'ONNX Embeddings', 'BM25 + RRF', 'SSE Streaming'],
    github: 'https://github.com/abhishek3059/Agentic-chat-QA-bot',
    extraLinks: [
      {
        label: 'Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=agentic-developer.agentic-chat-qa-bot',
      },
    ],
    status: 'Live on VS Code Marketplace · v0.1.0',
    metric: '72 unit tests · 21 architecture decision records',
  },
  {
    name: 'DeepResearch AI',
    icon: '🔬',
    description:
      'Multi-agent RAG platform with evaluation. A self-critique agent built with LangGraph (retrieve, generate, critique, revise) routes conditionally on faithfulness and relevancy scores. Hybrid retrieval fuses ChromaDB vector search and BM25 with RRF, plus cross-encoder reranking; Ragas and DeepEval run as offline CI evaluation.',
    tech: ['Python', 'LangGraph', 'ChromaDB', 'BM25 + RRF', 'Cross-Encoder Reranking', 'Ragas', 'DeepEval'],
    github: 'https://github.com/abhishek3059/deep-research.ai',
    status: 'Independent project',
    metric: 'Self-critique loop · offline CI evaluation',
  },
  {
    name: 'MCP Server — Multi-Repo Workspace Orchestrator',
    icon: '🔗',
    description:
      'Python MCP server built as a personal workflow tool: Linear ticket ingestion, RAG-driven cross-repo code search and a code-reviewer agent.',
    tech: ['Python', 'MCP', 'RAG', 'Linear'],
    github: 'https://github.com/abhishek3059/multi-repository-mcp',
    status: 'Personal workflow tool',
    metric: 'Cross-repo search + code-reviewer agent',
  },
  {
    name: 'Ticket Reservation Microservices',
    icon: '🎫',
    description:
      'Event-driven microservices system for train ticket booking with real-time seat management — independent services for search, booking, and inventory behind REST APIs.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'REST API'],
    github: 'https://github.com/abhishek3059/Ticket-Reservation-Microservices',
    status: '⭐ 1 star · Full microservices architecture',
    metric: 'Real-time seat management',
  },
  {
    name: 'ScrollSnap',
    icon: '📵',
    description:
      'The offline doomscrolling enforcer — Android Accessibility Services track Reels/Shorts swipes and local edge AI roasts you into stopping. Zero data collection, everything on-device.',
    tech: ['Android', 'Kotlin', 'Accessibility Services', 'Edge AI', 'Privacy-First'],
    github: 'https://github.com/abhishek3059/ScrollSnap',
    status: 'Early stage',
    metric: 'On-device ML · zero data collection',
  },
];
