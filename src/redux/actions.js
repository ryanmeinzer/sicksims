export const makeSafe = (e) => ({ type: 'MAKE_SAFE', e })
export const makeQuarantined = (e) => ({ type: 'MAKE_QUARANTINED', e })
export const naiveToSickChanger = (naivePersonId) => ({ type: 'NAIVE_TO_SICK_CHANGER', naivePersonId })
export const quarantinedToNaiveChanger = (quarantinedPersonId) => ({ type: 'QUARANTINED_TO_NAIVE_CHANGER', quarantinedPersonId })
export const sickToDeadChanger = (sickPersonId) => ({ type: 'SICK_TO_DEAD_CHANGER', sickPersonId })
export const safeToSavedChanger = () => ({ type: 'SAFE_TO_SAVED_CHANGER' })

export const fetchSuperheros = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_SUPERHEROS' })
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