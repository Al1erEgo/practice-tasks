
const initState = {
    isLoading: false,
}

type loadingReducerActionsType = LoadingActionType
export type LoadingStateType = typeof initState

export const loadingReducer = (state = initState, action: loadingReducerActionsType): LoadingStateType  => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING' :
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
