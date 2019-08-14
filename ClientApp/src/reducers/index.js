export default (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            const newNote = { id: action.action.id, text: action.action.text };
            return [...(state || []), newNote];
        case "DELETE_NOTE":
            return state.filter(e => e.id != action.action)
        case "CHANGE_NOTE":
            return state.map((note) => {
                if (note.id !== action.id) {
                    return note
                }
                return {
                    ...action
                }
            })

        default:
            return state
    }
}


