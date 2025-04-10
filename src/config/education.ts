
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'The Chinese University of Hong Kong',
      major: 'BEng in Financial Technology',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      school: 'HKUGAC',
      major: 'HKDSE',
      logo: 'college',
      start: '2018',
      end: '2024'
    },
  ]