export const makeSafe = (id) => ({ type: 'MAKE_SAFE', id })
export const makeQuarantined = (id) => ({ type: 'MAKE_QUARANTINED', id })
export const naiveToSickChanger = (naivePersonId) => ({ type: 'NAIVE_TO_SICK_CHANGER', naivePersonId })
export const quarantinedToNaiveChanger = (quarantinedPersonId) => ({ type: 'QUARANTINED_TO_NAIVE_CHANGER', quarantinedPersonId })
export const sickToDeadChanger = (sickPersonId) => ({ type: 'SICK_TO_DEAD_CHANGER', sickPersonId })
export const safeToSavedChanger = () => ({ type: 'SAFE_TO_SAVED_CHANGER' })
// export const addSuperhero = (superhero) => ({ type: 'ADD_SUPERHERO', superhero })

export const fetchSuperheros = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SUPERHEROS' })
        // fetch('https://sicksims-backend.herokuapp.com/superheros')
        fetch('http://localhost:3000/superheros')
            .then(response => {
                return response.json()
            })
            .then(json => {
                // dispatch({ type: 'ADD_SUPERHEROS', superheros: json.superheros })
                // can I destructure?
                dispatch({ type: 'ADD_SUPERHEROS', json })
            })
    }
}

export const addSuperhero = (superhero) => {
    return (dispatch) => {
        // can't figure out how to get this loading bit to work
        // dispatch({ type: 'ADDING_SUPERHERO' })
        // fetch('https://sicksims-backend.herokuapp.com/superheros')
        return fetch('http://localhost:3000/superheros', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({  
                superhero: {
                    name: superhero.name,
                    score: 10
                }
            })
        })
            .then(response => {
                return response.json()
            })
            .then(superhero => {
                dispatch({ type: 'ADD_SUPERHERO', superhero })
            })
    }
}