'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DEFAULT_DRAFT =
  'Automated outreach saved us six hours a week, now the team wants its playbook.';

const extensionSamples = {
  setup: [
    { label: 'Setup → Punchline', body: 'Automated one outreach loop so well the team asked if I still work here.' },
    { label: 'Setup → Punchline', body: 'Freed six hours a week; now my to-do list looks offended.' },
    { label: 'Setup → Punchline', body: 'Built an AI follow-up buddy—now the humans ask it for coffee chats.' },
  ],
  rule: [
    { label: 'Rule of Three', body: 'Built the zap, tested the flow, broke Slack with the screenshots.' },
    { label: 'Rule of Three', body: 'Draft, edit, publish—only two of those steps involved me.' },
    { label: 'Rule of Three', body: 'Monday was chaos, Tuesday cleanup, Wednesday the brag post.' },
  ],
  satire: [
    { label: 'Corporate Satire · Misdirection', body: '“Circling back” now means chasing the automation that keeps shipping reports.' },
    { label: 'Corporate Satire · Misdirection', body: 'Leadership asked for visibility, so I turned on the logs and dimmed the lights.' },
    { label: 'Corporate Satire · Misdirection', body: 'We said “manual process.” AI heard “schedule invites every minute.”' },
  ],
  escalation: [
    { label: 'Escalation', body: 'Built a tiny script, saved an hour, built a bigger script, now I’m negotiating with the coffee machine.' },
    { label: 'Escalation', body: 'Automated the reminder, then the handoff, then my manager’s job description.' },
    { label: 'Escalation', body: 'Started with one checklist, ended with an automation that asks if I’m hydrated.' },
  ],
} as const;

const extensionStyles = [
  { id: 'setup', label: 'Setup → Punchline' },
  { id: 'rule', label: 'Rule of Three' },
  { id: 'satire', label: 'Corporate Satire · Misdirection' },
  { id: 'escalation', label: 'Escalation' },
] as const;

type ExtensionHook = { label: string; body: string };

const demoStructures = [
  { id: 'setup', label: 'Setup → Punchline', blurb: 'Expectation, twist, done.', sample: 'Automate the boring chore, then brag that your inbox asked for PTO.' },
  { id: 'rule', label: 'Rule of Three', blurb: 'Beat, beat, unexpected beat.', sample: 'Built, tested, bragged—only one of those required caffeine.' },
  { id: 'misdirection', label: 'Misdirection', blurb: 'Lead them one way, swing back.', sample: 'My boss said we needed “hands-on leadership,” so I handed it to automation.' },
  { id: 'comparison', label: 'Comparison / Analogy', blurb: 'X is like Y because Z.', sample: 'Scheduling handoffs was like herding cats, so I gave the cats a calendar.' },
  { id: 'escalation', label: 'Escalation', blurb: 'Keep ratcheting the stakes.', sample: 'Automated one follow-up, then the whole sequence, then my boss’s brag post.' },
  { id: 'reveal', label: 'Comic Reveal', blurb: 'Hide a detail until the end.', sample: 'I said the workflow was hands-off. Forgot to mention those hands now belong to a bot.' },
  { id: 'character', label: 'Character Perspective', blurb: 'Exaggerated POV narrates the joke.', sample: 'My inner ops gremlin automated the draft and now HR wants to hire it.' },
  { id: 'reversal', label: 'Reversal', blurb: 'Flip the hierarchy.', sample: 'Tried to unplug for the weekend. The automation sent me an out-of-office reply.' },
  { id: 'literal', label: 'Absurd Literalism', blurb: 'Take the phrase literally.', sample: 'We needed more touchpoints, so I taught automation to say “poke.”' },
  { id: 'hyperbole', label: 'Exaggeration / Hyperbole', blurb: 'Blow it out of proportion.', sample: 'My inbox is so calm the automation started a meditation podcast.' },
] as const;

const comingSoon = [
  { title: 'Clean rewrite', detail: 'Lean version of your full post' },
  { title: 'Humor riff', detail: 'Light observational wit' },
  { title: 'Full rewrite', detail: 'Structured story arc' },
];

const hookOptionLabels = ['Option A', 'Option B', 'Option C'];

export function DemoExperience() {
  type ExtensionKey = keyof typeof extensionSamples;
  type Structure = (typeof demoStructures)[number];

  const [activeSection, setActiveSection] = useState<'extension' | 'demo'>('demo');
  const [extensionStyle, setExtensionStyle] = useState<ExtensionKey>('setup');
  const [extensionHooks, setExtensionHooks] = useState<ExtensionHook[]>([...extensionSamples.setup]);
  const [extensionCopiedIndex, setExtensionCopiedIndex] = useState<number | null>(null);
  const [isExtensionGenerating, setIsExtensionGenerating] = useState(false);

  const [demoDraft, setDemoDraft] = useState(DEFAULT_DRAFT);
  const [currentStructure, setCurrentStructure] = useState<Structure>(demoStructures[0]);
  const [demoOptions, setDemoOptions] = useState<string[]>([
    'Hook preview will appear here.',
    'Hook preview will appear here.',
    'Hook preview will appear here.',
  ]);
  const [demoCopiedIndex, setDemoCopiedIndex] = useState<number | null>(null);
  const [isDemoGenerating, setIsDemoGenerating] = useState(false);

  useEffect(() => {
    const previousBodyBackground = document.body.style.background;
    const previousBodyColor = document.body.style.color;
    const previousHtmlBackground = document.documentElement.style.background;

    document.body.style.background = '#f3f4f6';
    document.body.style.color = '#111827';
    document.documentElement.style.background = '#f3f4f6';

    return () => {
      document.body.style.background = previousBodyBackground;
      document.body.style.color = previousBodyColor;
      document.documentElement.style.background = previousHtmlBackground;
    };
  }, []);

  function fillExtensionHooks(style: ExtensionKey) {
    setExtensionHooks([...extensionSamples[style]]);
  }

  function handleExtensionStyle(nextStyle: ExtensionKey) {
    setExtensionStyle(nextStyle);
    fillExtensionHooks(nextStyle);
  }

  function handleExtensionGenerate() {
    setIsExtensionGenerating(true);
    setTimeout(() => {
      fillExtensionHooks(extensionStyle);
      setIsExtensionGenerating(false);
    }, 350);
  }

  async function handleExtensionCopy(text: string, index: number) {
    try {
      await navigator.clipboard?.writeText(text);
      setExtensionCopiedIndex(index);
      setTimeout(() => setExtensionCopiedIndex(null), 1200);
    } catch (error) {
      console.warn('Copy failed', error);
    }
  }

  function handleStructureSelect(structureId: Structure['id']) {
    const nextStructure = demoStructures.find((item) => item.id === structureId);
    if (nextStructure) {
      setCurrentStructure(nextStructure);
    }
  }

  function handleDemoGenerate() {
    const source = demoDraft.trim() || DEFAULT_DRAFT;
    const snippet = source.length > 140 ? `${source.slice(0, 137)}…` : source;
    const firstWord = source.split(/\s+/).filter(Boolean)[0] ?? 'it';
    const variants = [
      `${currentStructure.sample} ${snippet}`,
      `${currentStructure.sample} (proof: ${snippet})`,
      `${currentStructure.sample} (CTA: tell me how you'd scale ${firstWord.toLowerCase()})`,
    ];

    setIsDemoGenerating(true);
    setTimeout(() => {
      setDemoOptions(variants);
      setIsDemoGenerating(false);
    }, 550);
  }

  async function handleDemoCopy(text: string, index: number) {
    try {
      await navigator.clipboard?.writeText(text);
      setDemoCopiedIndex(index);
      setTimeout(() => setDemoCopiedIndex(null), 1200);
    } catch (error) {
      console.warn('Copy failed', error);
    }
  }

  return (
    <div className="demo-shell">
      <header>
        <div className="nav-toggle">
          <button
            type="button"
            className={activeSection === 'extension' ? 'active' : ''}
            onClick={() => setActiveSection('extension')}
          >
            Chrome extension
          </button>
          <button
            type="button"
            className={activeSection === 'demo' ? 'active' : ''}
            onClick={() => setActiveSection('demo')}
          >
            Demo walkthrough
          </button>
        </div>
      </header>

      <main>
        <section className={`frame ${activeSection === 'extension' ? 'active' : ''}`} id="extension">
          <h2>Extension popup · MVP view</h2>
          <p>Everything centers on the “Improve hook” moment; future actions are visible but disabled.</p>

          <div className="popup">
            <div className="brand-row">
              <Image src="/voxwit-logo.svg" alt="VoxWit logo" width={40} height={40} className="logo-mark" />
              <div>
                <p className="brand-name">VoxWit Copilot (Beta)</p>
                <p className="brand-tagline">Craft clever posts to #StopTheScroll</p>
              </div>
              <a className="website-link" href="https://www.voxwit.com" target="_blank" rel="noreferrer">
                voxwit.com
              </a>
            </div>

            <div className="status-line">
              <span className="status-chip">Draft detected</span>
              <span className="status-copy">LinkedIn • live capture</span>
            </div>

            <section className="hook-stack">
              <div className="hook-header">
                <div>
                  <p className="hook-title">Improve hook</p>
                  <p className="hook-sub">
                    Pick a <span className="accent">style</span>, generate, copy your fav.
                  </p>
                </div>
                <button
                  type="button"
                  className="capsule primary"
                  onClick={handleExtensionGenerate}
                  disabled={isExtensionGenerating}
                >
                  {isExtensionGenerating ? 'Generating…' : 'Generate'}
                </button>
              </div>

              <div className="style-grid">
                {extensionStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    data-style={style.id}
                    className={extensionStyle === style.id ? 'selected' : ''}
                    onClick={() => handleExtensionStyle(style.id)}
                  >
                    {style.label}
                  </button>
                ))}
              </div>

              <div className="suggestion-list compact">
                {extensionHooks.map((hook, index) => (
                  <div key={`${hook.label}-${index}`} className={`card ${hook ? 'filled' : ''}`}>
                    <div className="card-header">
                      <span>{hookOptionLabels[index]}</span>
                      <button
                        type="button"
                        className="copy-pill"
                        onClick={() => handleExtensionCopy(hook.body, index)}
                      >
                        {extensionCopiedIndex === index ? '✓' : '⧉'}
                      </button>
                    </div>
                    <div className="card-body" data-hook-card>
                      <span className="style-label">{hook.label}</span>
                      <p>{hook.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="future-grid">
              <p className="future-label">Coming soon</p>
              <div className="future-cards">
                {comingSoon.map((item) => (
                  <div key={item.title} className="card disabled">
                    <p>{item.title}</p>
                    <small>{item.detail}</small>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>

        <section className={`frame ${activeSection === 'demo' ? 'active' : ''}`} id="demo">
          <div className="demo-board">
            <div className="demo-canvas">
              <div className="demo-brand">
                <Image src="/voxwit-logo.svg" alt="VoxWit logo" width={40} height={40} className="logo-mark" />
                <div>
                  <p className="demo-brand-name">
                    VoxWit Copilot <span>(Beta)</span>
                  </p>
                  <p className="demo-brand-sub">Live Demo powered by the Room 52 Lab Humor Engine</p>
                </div>
              </div>

              <div className="demo-draft-box">
                <p className="demo-draft-label">Text box</p>
                <textarea
                  className="demo-draft-input"
                  value={demoDraft}
                  onChange={(event) => setDemoDraft(event.target.value)}
                />
              </div>

              <div className="structure-header">
                <p className="structure-title">Improve hook</p>
                <p className="structure-sub">
                  Pick a <span className="accent">style</span>, generate, copy your favorite.
                </p>
              </div>

              <div className="structure-grid">
                {demoStructures.map((structure) => (
                  <button
                    key={structure.id}
                    type="button"
                    data-structure-style={structure.id}
                    className={currentStructure.id === structure.id ? 'active' : ''}
                    onClick={() => handleStructureSelect(structure.id)}
                  >
                    {structure.label}
                  </button>
                ))}
              </div>

              <div className="generate-row">
                <div className="definition-box">
                  <p className="demo-draft-label">Definition box</p>
                  <div className="structure-preview" data-structure-output>
                    <span className="accent">{currentStructure.label}</span>: {currentStructure.blurb}
                  </div>
                </div>
                <button type="button" data-demo-generate onClick={handleDemoGenerate} disabled={isDemoGenerating}>
                  {isDemoGenerating ? 'Generating…' : 'Generate'}
                </button>
              </div>

              <div className="demo-option-grid">
                {demoOptions.map((option, index) => (
                  <div key={hookOptionLabels[index]} className="demo-option-card">
                    <div className="demo-option-header">
                      <div>
                        <p className="demo-option-title">{hookOptionLabels[index]}</p>
                        <p className="demo-option-sub">Ready to paste</p>
                      </div>
                      <button
                        type="button"
                        className="copy-pill"
                        onClick={() => handleDemoCopy(option, index)}
                      >
                        {demoCopiedIndex === index ? '✓' : '⧉'}
                      </button>
                    </div>
                    <div className="demo-option-body" data-demo-option={index}>
                      {option}
                    </div>
                  </div>
                ))}
              </div>

              <div className="demo-future-grid">
                <p className="future-label">Coming soon</p>
                <div className="future-cards">
                  {comingSoon.map((item) => (
                    <div key={item.title} className="card disabled">
                      <p>{item.title}</p>
                      <small>{item.detail}</small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
