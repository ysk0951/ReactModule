import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import UserListComponent from '../user/UserListComponent';

const AppRouter = () => {
    return(
        <div>
            <BrowserRouter>
            <div style={style}>
                <Switch>
                    <Route exact path="/" component={UserListComponent}/>
                </Switch>
            </div>
            </BrowserRouter>
        </div>
    );
}

const style = {
    color : 'gray',
    margin : '10px'
}

export default AppRouter;