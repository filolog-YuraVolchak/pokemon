import React, {} from "react";
import * as _ from 'lodash'
import {DataRow} from "../../../../elements/dataRow";
// import s from ''
import './_styles.scss'

type ListItemT = React.FC<{
    item: any,
    i: number | string


}>

const ListItem: ListItemT = ({item}) => {
    // const {key} = item

    const {base} = item
    let name;
    if(item&&item.name){
        name=item.name.english
    }
    const type = item.type
    const modifier = item.id<10?'00':item.id<100?'0':''
    const imgUrl = `./../../../assets/thumbnails/${modifier}${item.id||0}.png`
    return (
        <div className="item_wrapper" key={item.id}>
            <h3>{name}</h3>
            <div className="item_img">
                <img src={imgUrl} alt="'photo"/>
            </div>
            <div className="item_info_wrapper">
                <DataRow title={'type'} value={type}/>
            </div>

            {_.map(_.keys(base),(prop,i)=>{
                return (
                    <div className="item_info_wrapper" key={i}>
                        <DataRow title={prop} value={base[prop]}/>
                    </div>
                )
            })}

        </div>
    )
}
export default ListItem
