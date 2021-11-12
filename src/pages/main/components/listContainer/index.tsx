import React,{useState,useEffect} from "react";
import * as _ from 'lodash'
import './_styles.scss'
import ListItem from "../listItem";
const initState: Array<{ [key: string]: any }> = [{}]

const ListContainer = () => {
    const [state, onGetList] = useState(initState)
    useEffect(()=>{
        console.log('init data')
        },[]
    )

    const list = [{name: 'some', id: 'id'}, {name: 'some', id: 'id'}, {name: 'some', id: 'id'}, {
        name: 'some',
        id: 'id'
    }, {name: 'some', id: 'id'}, {name: 'some', id: 'id'}, {name: 'some', id: 'id'},]
    return <>
        <div className="list_container_wrapper">
            {_.map(list, (el: any, i) => {
                console.log(el);
                return (
                    <ListItem key={i} item={el} i={i}/>
                )
            })}
        </div>
    </>
}
export default ListContainer
