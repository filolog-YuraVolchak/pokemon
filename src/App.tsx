import React, {} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import './styles.scss';
const App: React.FC = () => {
    return (
        <>
            <Router>
                <div className="App">
                    <div id="page-body">
                        <Switch>
                            <Route path="/" >
                                {/*Main page interface*/}
                            </Route>
                            <Route path="/main" >
                                {/*Main page interface*/}
                            </Route>
                            {/* redirect to main*/}
                            <Redirect to={'/main'}/>

                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    );
}
export default App;
