import './css/App.css';
import {Route} from "react-router-dom";
import {Product, MainPage} from "./js/pages";

import React from "react";


function App() {
    return (
        <div className="App">

            <Route exact path={'/'} component={MainPage}/>
            <Route path={'/product'} component={Product}/>
        </div>
    );
}

export default App;
