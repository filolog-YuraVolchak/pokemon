import React, {useEffect, useState} from 'react';

import './_styles.scss';
import * as _ from 'lodash';

type FiltersPanelT = React.FC<{
    listTypes?: Array<string>,
    onSearch?: object | any,
    onSelectType?: object | any | null,
    onResetFilter?: object | any | null,
    typeSelected?: string,
}>
export const FiltersPanel: FiltersPanelT = ({
                                                listTypes,
                                                onSearch,
                                                onSelectType,
                                                typeSelected,
                                                onResetFilter
                                            }) => {
    return (
        <div className="panel_wrapper">
            <input type="text" className={'search_filed'} placeholder={'🔍...search by name'} onChange={onSearch}/>
            <select name="types" value={typeSelected} className={'type_select'} id="typeSelector"
                    onChange={onSelectType}>
                <option value={''} disabled> sort by type</option>
                <option value={''}> show all</option>

                {_.map(listTypes, (type, i) => {
                    return (
                        <option key={i} value={type}>{type}</option>
                    )
                })
                }
            </select>
            <button onClick={onResetFilter} type={'button'}>Reset</button>
        </div>
    )

}
export default FiltersPanel
