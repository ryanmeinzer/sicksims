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
            return {
                ...state,
                // is this correct? Cannot figure out how to inspect
                superheros: [...state.superheros],
                loading: true
            }

        // Add superheros to state/store/array
        case 'ADD_SUPERHEROS':
            return {
                ...state,
                superheros: action.json,
                loading: false
            }

        // Click to make naive person safe
        case 'MAKE_SAFE': {
            let p = state.people.find((p) => p.id === parseInt(action.e.target.id))
            p.status = 'safe'
            return { people: [...state.people] } }

        // Click to make a sick person quarantined
        case 'MAKE_QUARANTINED': {
            let p = state.people.find((p) => p.id === parseInt(action.e.target.id))
            p.status = 'quarantined'
            return { people: [...state.people] } }

        // Automatically make a naive person sick after set interval
        case 'NAIVE_TO_SICK_CHANGER': {
            let p = state.people.find((p) => p.id === action.naivePersonId)
            p.status = 'sick'
            return { people: [...state.people] } }
            // use this if/once you add leaderboard to state:
            // return { ...state, people: [...state.people] }

        // Automatically return a quarantined person back to naive in public after set interval
        case 'QUARANTINED_TO_NAIVE_CHANGER': {
            let p = state.people.find((p) => p.id === action.quarantinedPersonId)
            p.status = 'naive'
            return { people: [...state.people] } }

        // Automatically make a sick person dead after set interval
        case 'SICK_TO_DEAD_CHANGER': {
            let p = state.people.find((p) => p.id === action.sickPersonId)
            p.status = 'dead'
            return { people: [...state.people] } }
     
        // If everyone is safe or dead, change every safe person to saved
        case 'SAFE_TO_SAVED_CHANGER': {
            state.people.filter((p) => p.status === 'safe').map((p) => p.status = 'saved')
            return { people: [...state.people] } }

    default:
        return state
    }
}