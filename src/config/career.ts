// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
  {
    company: '0xU blockchain club',
    title: 'Builder',
    logo: 'btc',
    start: '2025',
    end: 'Present'
  },
  {
      company: 'Cambridge Consulting Network',
      title: 'Student Consultant',
      logo: 'coffee',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'Financial Technology Society, CUHK',
      title: 'President',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      company: 'Guangzhou Meijian Investment Consulting Service Co. Ltd',
      title: 'Project Officer',
      logo: 'bank',
      start: '2024',
      end: '2024'
    }
  ]