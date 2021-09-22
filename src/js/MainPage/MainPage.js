import Header from "../Header/Header";
import Context from "../MainPage/Context";
import React from "react";
import Footer from "../Footer/Footer";

class MainPage extends React.Component {
    componentDidMount() {
        document.title  = '러쉬코리아(LUSH KOREA)'
    }
    render() {
        return (
            <div className="App">
                <Header/>
                <Context/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;
