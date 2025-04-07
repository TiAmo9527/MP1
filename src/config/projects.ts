// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = "Awards & Honors"
export const awardsIntro = "Recognition for academic and professional achievements."

export const awards: Array<ActivityItemType> = [
  {
    name: '2nd Runner-up in HKSSF Inter-school Swimming Competition',
    description: '200m breaststroke',
    date: '2022',
    location: 'Hong Kong',
  },
  {
    name: 'Potential Student Leaders Silver award',
    description: '“Reach the Top” Southern District Outstanding Students Award 2021',
    date: '2021',
    location: 'Hong Kong',
  },

]

// Research & Projects
export const projectHeadLine = "Projects & Events"
export const projectIntro = "Academic research and technical projects I've worked on."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Co-organiser',
    description: 'HashTech 2025 @ CUHK - a Fintech Talent Summit',
    link: { href: 'https://www.0xu.club/', label: '0xu.club' },
    tags: ['Fintech', 'Event', 'Collaboration']
  },
  {
    name: 'Co-host',
    description: 'AI and the Venture Capital Industry - CUHK.SIS',
    link: { href: 'https://www.instagram.com/cuhk.sis/', label: 'CUHK SIS' },
    tags: ['Venture Capital', 'Talk', 'Collaboration']
  },
  {
    name: 'Consultant',
    description: 'CCN sem project - Preface',
    link: { href: 'https://www.preface.ai/', label: 'Preface' },
    tags: ['AI', 'Consulting', 'Development']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'MUN Workshop - HKUGAC',
    description:
      'Teaching basic international relations concepts to beginners through workshops hosted in an assembly session in school with over 300 participants.',
    date: '2024-02',
    location: 'Hong Kong',
  },
  {
    name: 'DGSMUN',
    description:
      'Participated in the Diocesan Girls’ School Model United Nations as deleagtion of Italy in DISEC.',
    date: '2024-07-08',
    location: 'Hong Kong',
  },
  {
    name: 'LPCMUN',
    description:
      'Participated in the Li Po Chun United World College Model United Nations as deleagtion of Russia in ECOSOC.',
    date: '2023-10',
    location: 'Hong Kong',
  },
  {
    name: 'Swimming Coach @ ATC Swim',
    description:
      'Helping young students improve their swimming skills by interactive training.',
    date: '2023-2024',
    location: 'Hong Kong',
    link: 'https://www.atcswim.hk/',
  },
]
