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
    ]
}, action) {
    switch (action.type) {
        // case 'MAKE_SAFE':
            // just declaring e = e to temporarily resolve the 'e' is not defined error
            // let e = e
            // {
            // let id = parseInt(action.e.target.id);
            // let p = state.people.find((p) => p.id === id)
            // let updatedP = { ...p, status: "safe" }
            // }
            // return { ...state, people: [...state.people, updatedP] }
            // need to figure out how to add isEveryoneSafe callback

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
            // need to figure out how to add isEveryoneSafe callback
     
        // If everyone is safe or dead, change every safe person to saved
        case 'SAFE_TO_SAVED_CHANGER': {
            // let p = state.people.find((p) => p.status === 'safe')
            // p.status = 'saved'
            state.people.filter((p) => p.status === 'safe').map((p) => p.status = 'saved')
            return { people: [...state.people] } }
            // alert('Congrats - you saved (some of) the world!'))

    default:
        return state
    }
}