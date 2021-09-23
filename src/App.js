import './css/App.css';
import {Route} from "react-router-dom";
import {Product, MainPage,Detail} from "./js/pages";

import React from "react";


function App() {
    return (
        <div className="App">

            <Route exact path={'/'} component={MainPage}/>
            <Route path={'/product'} component={Product}/>
            <Route path={'/detail'} component={Detail}/>
        </div>
    );
}

export default App;
