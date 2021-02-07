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
                day: [...state.day].filter((arr, i) => i !== action.payload)
            }

        case 'ADD_EXERCISE' :
            return {

                day: [...state.day].map(function(item, index, array) {
                    if(index === action.payload) {
                        // console.log(item)
                        return [...item, [action.payload]];
                    } else {
                        return [...item]
                    }
                })
            }

        case 'SUB_EXERCISE' :
            return {

                day: [...state.day].map(function(item, index, array) {
                    if(index === action.dayPayload) {
                        // console.log(item);
                        return [...item].filter((arr, i) => i !== action.payload);
                    } else {
                        return [...item]
                    }
                })
            }

        default:
            return state
    }

}

