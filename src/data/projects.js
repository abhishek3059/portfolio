export const projects = [
  {
    name: 'QA Assistant',
    icon: '🤖',
    featured: true,
    description:
      'Universal scoped RAG Q&A console for AI agent responses. Capture any reply and interrogate it in an isolated sandbox — local ONNX embeddings, hybrid BM25 + dense retrieval fused with RRF, real-time SSE streaming, and 5 OpenAI-compatible providers. Live on the VS Code Marketplace; also runs on Antigravity, Cursor, and Windsurf.',
    tech: ['TypeScript', 'RAG', 'VS Code Extension', 'ONNX Embeddings', 'SSE Streaming'],
    github: 'https://github.com/abhishek3059/Agentic-chat-QA-bot',
    extraLinks: [
      {
        label: 'Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=agentic-developer.agentic-chat-qa-bot',
      },
    ],
    status: 'Live on VS Code Marketplace · v0.1.0',
    metric: 'Local hybrid RAG · zero telemetry · 72 unit tests',
  },
  {
    name: 'deep-research.ai',
    icon: '🔬',
    description:
      'Multi-agent research platform with a persistent knowledge base — orchestrated specialists that plan, retrieve, verify, and accumulate knowledge across sessions.',
    tech: ['Python', 'LangGraph', 'CrewAI', 'Guardrails AI', 'Ragas', 'DeepEval'],
    github: 'https://github.com/abhishek3059/deep-research.ai',
    status: 'In active development',
    metric: 'Multi-agent orchestration with persistent knowledge',
  },
  {
    name: 'Multi-Repository MCP Server',
    icon: '🔗',
    description:
      'Python MCP server for multi-repo AI workflows — shared workspaces, cross-repo search, workflow persistence, Git operations, and generated context/RAG artifacts like indexes, retrieval chunks, and architecture maps.',
    tech: ['Python', 'MCP', 'OpenAI', 'Git', 'RAG Artifacts', 'Linear'],
    github: 'https://github.com/abhishek3059/multi-repository-mcp',
    status: 'Personal tool · ⭐ 1 star',
    metric: 'Cut developer context-switching by ~50%',
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
