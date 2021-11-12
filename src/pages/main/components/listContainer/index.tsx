import React, {useState, useEffect} from "react";
import './_styles.scss'


import * as _ from 'lodash'

import pokedex from '../../store/pokedex.json';
import types from '../../store/types.json'
import ListItem from "../listItem";
import FiltersPanel from "../filterPanel";
import {filterBy} from '../../store/services'

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
    const [typesList, setTypesList] = useState(types.map(el => el.english))
    /**
     * selected type
     */
    const [typeFilter, setTypeFilter] = useState('')

    /**
     * filter data methods and states
     * @param event
     */
    const [filteredLIst, setFilteredList] = useState(initState)
    const [search, setSearch] = useState('')

    useEffect(() => {
        setFilteredList(state)
    }, [state])

    useEffect(() => {
        setFilteredList(filterBy(state, 'name', 'type', search, typeFilter))
    }, [typeFilter, search])


    const filterByType = (event: any) => {
        const {value} = event.target
        setTypeFilter(value)
    }


    const onFielterBysearch = (event: any) => {
        const {value} = event.target
        setSearch(value || '')
    }
    const onResetFilters = () => {
        setSearch('')
        setTypeFilter('')

    }

    return <>
        <FiltersPanel onResetFilter={onResetFilters} listTypes={typesList || []} typeSelected={typeFilter}
                      onSearch={onFielterBysearch}
                      onSelectType={filterByType}/>
        <div className="list_container_wrapper">
            {_.map(filteredLIst, (el: any, i) => {
                return (
                    <ListItem i={i} item={el} key={i}/>
                )
            })}
        </div>
    </>
}
export default ListContainer
