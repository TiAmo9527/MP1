export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Alex Leung'
export const headline = 'Student at the Chinese University of Hong Kong'
export const introduction =
  "Kia Ora! My name is Alex Leung. I'm from Hong Kong and currently majoring in Fintech at the Chinese University of Hong Kong. I am also a competitive swimmer and ametuer skier."
export const email = 'aleungx@link.cuhk.edu.hk'
export const githubUsername = 'TiAmo9527'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Kia Ora! My name is Alex Leung. I'm from Hong Kong and currently majoring in Fintech at the Chinese University of Hong Kong. I am also a competitive swimmer and ametuer skier.",
  'Currently I am the president of the Financial Technology Society and also a student consultant at the Cambridge Consulting Network.',
  "I started this blog to share the insights I learn every day. Perhaps also some updates of what I'm doing or did recently",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I am sharing about AI, programming and my life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/_.aleungx._/',
  },
  {
    name: 'Twitter',
    icon: 'x',
    href: 'https://x.com/0xLeungChing',
  },
  {
    name: 'Linkedin',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/alex-man-fung-leung-355450256',
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/TiAmo9527',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'whatsapp',
  'python',
]
