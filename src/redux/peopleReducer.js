export default function peopleReducer(state = {
    people: [
        { id: 1, status: "naive" },
        { id: 2, status: "sick" },
        { id: 3, status: "naive" },
        { id: 4, status: "naive" },
        { id: 5, status: "safe" },
        { id: 6, status: "quarantined" },
        { id: 7, status: "sick" },
        { id: 8, status: "naive" },
        { id: 9, status: "safe" },
        { id: 10, status: "sick" }
    ], 
    superheros: [], 
    loading: false
}, action) {
    switch (action.type) {

        // Loading message upon superheros load
        case 'LOADING_SUPERHEROS':
            return { ...state, superheros: [...state.superheros], loading: true }

        // Add superheros from GET fetch to state/store/array
        case 'ADD_SUPERHEROS':
            return { ...state, superheros: action.json, loading: false }

        // Loading message for adding superhero
        // case 'ADDING_SUPERHERO':
        //     return { ...state, superheros: [...state.superheros], loading: true }

        // Add superhero and score from POST input to state/store/array
        case 'ADD_SUPERHERO':
            const superhero = {
                name: action.superhero.name,
                score: action.superhero.score
            }
            return { ...state, superheros: [...state.superheros, superhero] }

        // Click to make naive person safe
        case 'MAKE_SAFE':
            return { ...state, people: state.people.map(person => person.id === action.id ? { ...person, status: 'safe' } : person) }

        // Click to make a sick person quarantined
        case 'MAKE_QUARANTINED': 
            return { ...state, people: state.people.map(person => person.id === action.id ? { ...person, status: 'quarantined' } : person) }

        // Automatically make a naive person sick after set interval
        case 'NAIVE_TO_SICK_CHANGER': 
            return { ...state, people: state.people.map(person => person.id === action.naivePersonId ? { ...person, status: 'sick' } : person) }

        // Automatically return a quarantined person back to naive in public after set interval
        case 'QUARANTINED_TO_NAIVE_CHANGER': 
            return { ...state, people: state.people.map(person => person.id === action.quarantinedPersonId ? { ...person, status: 'naive' } : person) }

        // Automatically make a sick person dead after set interval
        case 'SICK_TO_DEAD_CHANGER': 
            return { ...state, people: state.people.map(person => person.id === action.sickPersonId ? { ...person, status: 'dead' } : person) }
     
        // If everyone is safe or dead, change every safe person to saved
        case 'SAFE_TO_SAVED_CHANGER': 
            return { ...state, people: state.people.map(person => person.status === 'safe' ? { ...person, status: 'saved' } : person) }

    default:
        return state
    }
}