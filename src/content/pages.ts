export interface DetailPage {
  path: string;
  title: string;
  description: string;
  sections: Array<{
    heading?: string;
    paragraphs?: string[];
    links?: Array<{ label: string; href: string }>;
  }>;
}

export const detailPages: DetailPage[] = [
  {
    path: '/projects/veridity',
    title: 'Veridity',
    description: 'An open-source ontology platform designed to connect public information and help researchers trace relationships back to their sources.',
    sections: [
      {
        heading: 'Purpose',
        paragraphs: [
          'Veridity grew out of concerns about executive pressure on press freedom, including the Trump administration’s treatment of news organizations, alongside frustration with partisan framing in legacy media.',
          'The project aims to make public information easier to investigate independently. By connecting records and preserving the evidence behind each claim, Veridity is designed to help journalists, researchers, and the public examine sources, compare conflicting accounts, and draw their own conclusions.',
        ],
      },
      {
        heading: 'Following the evidence',
        paragraphs: [
          'An ontology describes the people and organizations in a body of information, along with the relationships between them. Veridity’s goal is to bring public records and reporting into that shared structure, so a researcher can follow connections across sources rather than treating each document in isolation.',
          'The design puts provenance beside each statement: where it came from and how it was derived. Conflicting accounts can coexist, and corrections retain the history of what changed. Source material and inferred conclusions are kept distinct so the evidence remains open to scrutiny.',
          'Veridity Live was a subdivision focused on fact-checking political livestreams. The broader Veridity platform is centered on research across public information.',
        ],
        links: [{ label: 'Visit Veridity', href: 'https://veridity.org' }],
      },
    ],
  },
  {
    path: '/projects/gusty-laboratories',
    title: 'Gusty Laboratories',
    description: 'Powered exoskeletons and personal flight systems, with the goal of extending human mobility on the ground and in the air.',
    sections: [
      {
        paragraphs: [
          'Founded by Bennett Schwartz, Gusty Laboratories is focused on wearable systems intended to assist walking and strength, alongside personal flight.',
        ],
      },
    ],
  },
  {
    path: '/competitions',
    title: 'Competitions & recognition',
    description: 'Competition results and the projects behind them.',
    sections: [
      {
        heading: '2026 Presidential AI Challenge',
        paragraphs: [
          'New Jersey State Champion.',
          'APW-DTE, the Adaptive Public Works Dispatch & Triage Engine, combines machine learning with route optimization to prioritize municipal service requests and assign maintenance crews.',
        ],
        links: [
          { label: 'Official state champions', href: 'https://orise.orau.gov/ai-challenge/winners/2026/state.html' },
          { label: 'APW-DTE on GitHub', href: 'https://github.com/BennettSchwartz/APW-DTE' },
        ],
      },
      {
        heading: 'AI 4 Alzheimer’s',
        paragraphs: [
          'Third Place, Lower Division (ages 13–18).',
          'Early Prediction of Dementia Decline with Smart Sensors explores how machine learning can use passive smart-home sensor data to identify patterns associated with adverse health events in people living with dementia.',
        ],
        links: [
          { label: 'Project and award on Devpost', href: 'https://devpost.com/software/early-prediction-of-dementia-decline-with-smart-sensors' },
          { label: 'AI 4 Alzheimer’s competition', href: 'https://ai4alzheimers.devpost.com' },
        ],
      },
    ],
  },
  {
    path: '/writing',
    title: 'Writing & research',
    description: 'Publications and research by Bennett Schwartz.',
    sections: [
      {
        heading: 'Substack',
        paragraphs: ['Bennett’s personal publication.'],
        links: [{ label: 'Read on Substack', href: 'https://gustycube.substack.com' }],
      },
      {
        heading: 'Research',
        paragraphs: ['Research papers and surveys.'],
        links: [{ label: 'Browse research', href: 'https://research.gustycube.com' }],
      },
    ],
  },
];
