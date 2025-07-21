export interface EventDetails {
    id: string
    title: string
    subtitle: string
    description: string
    date: string
    time: string
    location: {
        name: string
        city: string
        country: string
    }
    duration: string
    status: 'open' | 'closed' | 'full'
    type: 'free' | 'paid'
}

export interface EventAgendaItem {
    time: string
    title: string
}

export interface EventSpeaker {
    name: string
    title: string
    company: string
    avatar?: string
}

export interface EventStats {
    expectedAttendees: number
    companiesCount: number
}

export interface RegistrationFormData {
    firstName: string
    lastName: string
    email: string
    company: string
    role: string
    experienceLevel: 'student' | 'entry' | 'mid' | 'senior' | 'lead' | 'executive' | ''
    dietaryRestrictions: string
    specialRequirements: string
    interests: string[]
}

export interface FormErrors {
    firstName?: string
    lastName?: string
    email?: string
    company?: string
    role?: string
    experienceLevel?: string
}

export type NetworkingInterest =
    | 'Frontend Development'
    | 'Backend Development'
    | 'DevOps & Cloud'
    | 'Mobile Development'
    | 'Data Science & AI'
    | 'Cybersecurity'
    | 'Product Management'
    | 'UX/UI Design'
    | 'Startup Ecosystem'
    | 'Open Source Projects'