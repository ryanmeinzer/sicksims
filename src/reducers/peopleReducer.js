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
        //     let id = parseInt(e.target.id);
        //     let p = this.state.people.find((p) => p.id === id)
        //     let updatedP = { ...p, status: "safe" }
        //     return { ...state, people: [...state.people, updatedP] }
            // need to figure out how to add isEveryoneSafe callback
    default:
        return state
    }
}