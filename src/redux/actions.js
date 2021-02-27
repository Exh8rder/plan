import {ADD_DAY, ADD_EXERCISE, HANDLE_EXERCISE_FIELD_CHANGE, SUB_DAY, SUB_EXERCISE} from "./actionTypes";


export function addDayAction() {
    return {
        type: ADD_DAY
    }
}

export function subDayAction(number) {
    return {
        type: SUB_DAY,
        dayNumber: number
    }
}

export function addExerciseAction(number) {
    return {
        type: ADD_EXERCISE,
        dayNumber: number
    }
}

export function subExerciseAction(number, dayNumber) {
    return {
        type: SUB_EXERCISE,
        exerciseNumber: number,
        dayNumber: dayNumber
    }
}

export function handleExerciseChangeAction(prop, number, exerciseNumber, dayNumber) {
    return {
        type: HANDLE_EXERCISE_FIELD_CHANGE,
        property: prop,
        value: number,
        exerciseNumber: exerciseNumber,
        dayNumber: dayNumber
    }
}
