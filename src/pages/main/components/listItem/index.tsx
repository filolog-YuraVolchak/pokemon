import React from "react";
import * as _ from 'lodash'


import './_styles.scss'

type ListItemT = React.FC<{
    item: any,
    i: number | string


}>
const ListItem:ListItemT  = ({item,i})=>{

    return <>
        <div className="item_wrapper" key={i}>
            <h3>{item?.name}</h3>
            <div className="item_img">
                <img src={'url'} alt="'photo"/>
            </div>


        </div>

    </>
}
export default ListItem
