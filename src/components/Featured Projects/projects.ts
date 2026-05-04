import projectOne from '../../assets/first-project.jpg'
import projectTwo from '../../assets/second-project.jpg'
import projectThree from '../../assets/third-project.jpg'

type Project = {
    image: string;
    heading: string;
    paragraph: string;
}

type ProjectWithId = Project & {
    id: number;
  };

const projects: Project[] = [
    {
        image: projectOne,
        heading: 'Modern Apartment',
        paragraph: 'minimalist inerior with clean lines and warm accents.'
    },
    {
        image: projectTwo,
        heading: 'Private House',
        paragraph: 'a calm, functional interior designed for everyday living.' 
    },
    {
        image: projectThree,
        heading: 'Commercial Space',
        paragraph: 'minimal design for business — clean, modern and inviting.' 
    }
]

export const projectsData: ProjectWithId[] = projects.map((project, index) => (
    {
        id: index + 1,
        ...project
    }
))