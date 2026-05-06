export type ServiceType = {
    id: number;
    heading: string;
    paragraph: string;
    direction: string;
}

export const serviceData: ServiceType[] = [
    {
        id: 1,
        heading: 'Interior design',
        paragraph: 'concept, planning, materials, furniture selection.',
        direction: 'learn more ⟶'
    },
    {
        id: 2,
        heading: '3D visualization',
        paragraph: 'photorealistic renders to see the future space.',
        direction: 'learn more ⟶'
    },
    {
        id: 3,
        heading: 'Design documentation',
        paragraph: 'technical plans for builders.',
        direction: 'learn more ⟶'
    },
    {
        id: 4,
        heading: 'Project supervision',
        paragraph: 'author supervision and implementation support.',
        direction: 'learn more ⟶'
    },
    
]