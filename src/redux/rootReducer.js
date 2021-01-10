const initialState = {
    day: []
};
export default function rootReducer(state = initialState, action) {

    switch(action.type) {
        case 'ADD' :
            return {
                day: [...state.day, []]
            }
        case 'SUB' :
            return {
                state
            }

        default:
            return state
    }


}

