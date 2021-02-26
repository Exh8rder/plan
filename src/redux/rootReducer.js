const initialState = {
    week: []
};
export default function rootReducer(state = initialState, action) {

    switch(action.type) {
        case 'ADD_DAY' :
            return {
                week: [...state.week, []]
            }

        case 'SUB_DAY' :
            return {
                week: state.week.filter((arr, i) => i !== action.dayNumber)
            }

        case 'ADD_EXERCISE' :

            return {
                week: state.week.map(function(item, index) {
                    if(index === action.dayNumber) {
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
                week: state.week.map(function(item, index) {
                    if(index === action.dayNumber) {
                        return item.filter((arr, i) => i !== action.exerciseNumber);
                    } else {
                        return item
                    }
                })
            }

        case 'HANDLE_EXERCISE_CHANGE' :

            return {

                week: state.week.map(function(item, index) {
                    if(index === action.dayNumber) {

                        return item.map(function(exercise, i) {

                            let newObj = JSON.parse(JSON.stringify(exercise));

                            if(i === action.exerciseNumber) {

                                newObj[action.property] = action.value;

                            }
                                return newObj;


                        })

                    } else {
                        return item
                    }
                })
            }

        default:
            return state
    }

}

