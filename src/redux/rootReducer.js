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
                day: state.day.filter((arr, i) => i !== action.payload)
            }

        case 'ADD_EXERCISE' :

            return {
                day: state.day.map(function(item, index, array) {
                    // console.log(item);
                    if(index === action.payload) {
                        // console.log(item)
                        return [...item, {
                            exercise: "squat",
                            max: "100",
                            reps: "1",
                            feature: "light",
                            adjustment: "0.5",
                        }];
                    } else {
                        return [...item]
                    }
                })
            }

        case 'SUB_EXERCISE' :
            return {

                day: [...state.day].map(function(item, index, array) {
                    if(index === action.dayPayload) {
                        return [...item].filter((arr, i) => i !== action.payload);
                    } else {
                        return [...item]
                    }
                })
            }

        case 'HANDLE_DAY_CHANGE' :

            console.log(state.day);

            return {

                day: state.day.map(function(item, index, array) {
                    if(index === action.dayNumber) {

                        return [...item].map(function(ex, i) {

                            let newObj = JSON.parse(JSON.stringify(ex));

                            if(i === action.exNumber) {

                                console.log(newObj);
                               newObj[action.property] = action.payload;


                            }
                                return newObj;


                        })

                    } else {
                        return [...item]
                    }
                })

            }

        default:
            return state
    }

}

