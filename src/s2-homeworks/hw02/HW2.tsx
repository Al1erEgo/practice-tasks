import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'

/*
* 1 - описать типы AffairPriorityType, AffairType - ok
* 2 - указать нужный тип для defaultAffairs - ok
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами - ok
* 4 - выполнить пункт 3 для функции deleteAffair - ok
* 5 - указать нужный тип в useState с affairs - ok
* 6 - дописать тип и логику функции deleteAffairCallback - ok?
* 7 - в файле Affairs.tsx дописать типизацию пропсов -ok?
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow - ok?
* 9 - в файле Affair.tsx дописать типизацию пропсов - ok?
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать - ok?
* 11 - в файле Affair.tsx отобразить приходящие данные - ok?
* */

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => {
    if (filter === 'all') return affairs;
    affairs = affairs.filter( affair => affair.priority === filter);
    return affairs
}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => {
    affairs = affairs.filter( affair => affair._id !== _id);
    return affairs
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => {
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
