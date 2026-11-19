export const building = {
  name: 'super-agent',
  status: 'In design + early build',
  repo: 'https://github.com/abhishek3059/super-agent',
  pitch:
    'A Jarvis-like personal assistant with native voice-to-voice conversation, hands-free use during an active session, and bounded background task delegation. Privacy-first: on the local path nothing leaves the machine.',
  capabilities: [
    'Runnable local voice scaffold: fake streaming adapter by default, Gemini Live adapter behind a seam, opt-in fully local voice adapter merged.',
    'Read-only file, calendar, notes and mail tools plus local memory and reminders, currently in open pull requests.',
    'Design-first: PRD, architecture, ADR decision register, security assessment and an independent design review.',
  ],
  pillars: [
    { icon: '🎙️', title: 'Voice-to-voice', text: 'Native spoken conversation, hands-free while a session is active.' },
    { icon: '🔒', title: 'Local-first privacy', text: 'Nothing leaves the machine on the local path.' },
    { icon: '🧩', title: 'Background delegation', text: 'Bounded tasks handed off while you keep talking.' },
    { icon: '📐', title: 'Design-first', text: 'ADRs, security assessment and independent review up front.' },
  ],
};
