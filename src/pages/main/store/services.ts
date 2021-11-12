import * as _ from "lodash";

export const someService=()=>{
    console.log('my test service')
}
export const filterBy = (data: Array<object>, key: any, secondKey: string, first: string, second: string,) => {

    return _.filter([...data], (el: any) => {
        return _.includes(el[key]['english']?.toString().toLowerCase(), first.toLowerCase())
            && (second ? el[secondKey].includes(second) : true)
    })
}
