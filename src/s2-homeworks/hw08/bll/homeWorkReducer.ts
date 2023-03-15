import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

const sortByName = (u1: UserType, u2: UserType) => u1.name.toLowerCase() > u2.name.toLowerCase() ? 1 :
        u1.name.toLowerCase() < u2.name.toLowerCase() ? -1 : 0

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            action.payload === 'up' ? newState.sort(sortByName) : newState.sort(sortByName).reverse()
            return newState
        }
        case 'check': {
            return state.filter(u=>u.age >= 18)
        }
        default:
            return state
    }
}
