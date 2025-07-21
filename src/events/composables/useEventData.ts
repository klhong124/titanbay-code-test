import type { EventDetails, EventAgendaItem, EventSpeaker, EventStats } from '../types/event.types'

export function useEventData() {
    const eventDetails: EventDetails = {
        id: 'dev-meetup-2025',
        title: 'Developer Meetup',
        subtitle: '2025',
        description: 'Join us for an evening of networking, learning, and collaboration with fellow developers',
        date: 'March 15, 2025',
        time: '6:00 PM – 9:00 PM',
        location: {
            name: 'Tech Hub Soho',
            city: 'London',
            country: 'UK'
        },
        duration: '3 hours',
        status: 'open',
        type: 'free'
    }

    const agenda: EventAgendaItem[] = [
        { time: '6:00 PM', title: 'Welcome & Networking' },
        { time: '6:30 PM', title: 'Keynote Talk' },
        { time: '7:30 PM', title: 'Panel Discussion' },
        { time: '8:30 PM', title: 'Closing & Drinks' }
    ]

    const speakers: EventSpeaker[] = [
        {
            name: 'Sarah Chen',
            title: 'CTO',
            company: 'TechCorp'
        },
        {
            name: 'Marcus Johnson',
            title: 'Lead Engineer',
            company: 'StartupXYZ'
        }
    ]

    const stats: EventStats = {
        expectedAttendees: 150,
        companiesCount: 25
    }

    return {
        eventDetails,
        agenda,
        speakers,
        stats
    }
}