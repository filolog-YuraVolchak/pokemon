import React from "react";
import './_styles.scss'

type DataRowT = React.FC<{
    title: string,
    value: string|any,
}>
export const DataRow: DataRowT = ({title, value}) => {
    return <div className="data_row">
        <span className={"data_row_title"}>{title}: </span>
        <span className={"data_row_value"}> {value}</span>
    </div>
}

