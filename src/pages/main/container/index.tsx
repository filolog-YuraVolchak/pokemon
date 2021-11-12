import React, {useEffect, useState} from 'react';

import './_styles.scss'
import ListContainer from '../components/listContainer'
import Footer from "../../../commonComponents/footer";
import Header from '../../../commonComponents/header'
export const MainPageInterface = () => {
    return (<>
        <div className="page_wrapper">
            {/*<Header/>*/}
            <ListContainer/>
            {/*<Footer/>*/}
        </div>
    </>)

}
export default MainPageInterface
