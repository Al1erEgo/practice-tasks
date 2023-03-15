type changeThemeIdACType = {
    type: 'SET_THEME_ID'
    id: number
}

const initState = {
    themeId: 1,
}

export type themeReducerType = typeof initState

export const themeReducer = (state = initState, action: changeThemeIdACType): themeReducerType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdACType => ({ type: 'SET_THEME_ID', id }) // fix any
