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
    tags: ['Fintech', 'Event', 'collaboration']
  },
  {
    name: 'Co-host',
    description: 'AI and the Venture Capital Industry - CUHK.SIS',
    link: { href: 'https://www.instagram.com/cuhk.sis/', label: 'CUHK SIS' },
    tags: ['Venture Capital', 'Talk', 'collaboration']
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "Hobbies & Volunteer"
export const activitiesIntro = "Personal interests and community contributions."

export const activities: Array<ActivityItemType> = [
  {
    name: 'Python Workshop',
    description:
      'Teaching basic Python programming concepts to beginners. Covering variables, control flow, and functions.',
    date: '2024-02-24',
    location: 'Shanghai',
    link: 'https://example.com/python-workshop',
  },
  {
    name: 'AI Ethics Discussion',
    description:
      'A group discussion about the ethical implications of AI development and its impact on society.',
    date: '2024-03-01',
    location: 'Shanghai',
    link: 'https://example.com/ai-ethics',
  },
  {
    name: 'Code Review Session',
    description:
      'Helping students improve their coding skills through peer code review and best practices sharing.',
    date: '2024-03-15',
    location: 'Shanghai',
  },
]
