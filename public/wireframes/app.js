const sectionButtons = document.querySelectorAll('[data-target]');
const sections = document.querySelectorAll('.frame');

sectionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    sectionButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    sections.forEach((section) => {
      section.classList.toggle('active', section.id === button.dataset.target);
    });
  });
});

const DEFAULT_DRAFT = 'Automated outreach saved us six hours a week, now the team wants its playbook.';

// Extension wireframe interactions
const styleSamples = {
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
};

let currentStyle = 'setup';
const hookCards = document.querySelectorAll('[data-hook-card]');
const runButton = document.querySelector('[data-action="simulate-run"]');
const styleButtons = document.querySelectorAll('[data-style]');

function fillHooks(styleKey = currentStyle) {
  const samples = styleSamples[styleKey] || styleSamples.setup;
  hookCards.forEach((card, index) => {
    card.classList.add('filled');
    const sample = samples[index] ?? samples[0];
    card.innerHTML = `<span class="style-label">${sample.label}</span><p>${sample.body}</p>`;
  });
}

if (runButton) {
  runButton.addEventListener('click', () => {
    fillHooks(currentStyle);
  });
}

styleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    styleButtons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
    currentStyle = button.dataset.style ?? 'setup';
    fillHooks(currentStyle);
  });
});

if (styleButtons[0]) {
  styleButtons[0].classList.add('selected');
  fillHooks('setup');
}

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
];

const structureButtons = document.querySelectorAll('[data-structure-style]');
const structureOutput = document.querySelector('[data-structure-output]');
const draftInput = document.querySelector('[data-demo-draft]');
let currentStructure = 'setup';

function setStructurePreview(id) {
  const structure = demoStructures.find((item) => item.id === id) || demoStructures[0];
  currentStructure = structure.id;
  structureButtons.forEach((button) => button.classList.toggle('active', button.dataset.structureStyle === id));
  if (structureOutput) {
    structureOutput.innerHTML = `<span class="accent">${structure.label}</span>: ${structure.blurb}`;
  }
}

structureButtons.forEach((button) => {
  button.addEventListener('click', () => setStructurePreview(button.dataset.structureStyle ?? 'setup'));
});

if (structureButtons.length) {
  setStructurePreview('setup');
}

const generateButton = document.querySelector('[data-demo-generate]');
const demoOptionBodies = document.querySelectorAll('[data-demo-option]');

if (generateButton) {
  generateButton.addEventListener('click', () => {
    const structure = demoStructures.find((item) => item.id === currentStructure) || demoStructures[0];
    const userText = (draftInput && draftInput.value.trim()) || DEFAULT_DRAFT;
    const snippet = userText.length > 140 ? `${userText.slice(0, 137)}…` : userText;
    const variants = [
      `${structure.sample} ${snippet}`,
      `${structure.sample} (proof: ${snippet})`,
      `${structure.sample} (CTA: tell me how you’d scale ${snippet.split(' ')[0] || 'it'})`,
    ];
    demoOptionBodies.forEach((node, index) => {
      node.textContent = variants[index] ?? variants[0];
    });
    generateButton.textContent = 'Generating…';
    setTimeout(() => {
      generateButton.textContent = 'Generate';
    }, 600);
  });
}

