import React, {useEffect, useState} from 'react';

import './_styles.scss'
import {Footer} from "../../../commonComponents/footer";
import {Header} from "../../../commonComponents/header/index"
export const MainPageInterface = () => {
    return (<>
        <div className="page_wrapper">
            <Header/>
            <div className="main">
                <h3>hello list component</h3>
            </div>
            <Footer/>
        </div>
    </>)

}
export default MainPageInterface
