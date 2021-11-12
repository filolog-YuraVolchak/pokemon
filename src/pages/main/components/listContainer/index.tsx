import React, {useState, useEffect} from "react";
import './_styles.scss'


import * as _ from 'lodash'

import pokedex from '../../store/pokedex.json';
import types from '../../store/types.json'
import ListItem from "../listItem";
import FiltersPanel from "../filterPanel";

const initState: Array<{ [key: string]: any }> = [{}]

const ListContainer = () => {
    /**
     * items shown on page
     */
    const perPage: number = 100;

    const [state, onGetList] = useState(initState)
    /**
     * init data in component
     */
    useEffect(() => {
        onGetList(pokedex.splice(0, perPage))
    }, [])
    /**
     * list of types
     */
    const [typesList, setTypesList] = useState(types.map(el=>el.english))
    /**
     * selected type
     */
    const [typeFilter, setTypeFilter] = useState('')

    /**
     * filter data mathods
     * @param event
     */
    const onFielterBysearch = (event: any) => {
        const {value} = event.target
    }
    const filterByType = (event: any) => {
        const {value} = event.target

    }
    const onResetFilters = () => {
    }
    return <>
        <FiltersPanel onResetFilter={onResetFilters} listTypes={typesList || []} typeSelected={typeFilter}
                      onSearch={onFielterBysearch}
                      onSelectType={filterByType}/>
        <div className="list_container_wrapper">
            {_.map(state, (el: any, i) => {
                return (
                    <ListItem i={i} item={el} key={i}/>
                )
            })}
        </div>
    </>
}
export default ListContainer
