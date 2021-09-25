import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Top from "./Context/Top";

class Details extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div id={'container'} className={'goodsv_container'} style={{marginTop:100}}>
                    <div id={'content'}>
                        <div className={'goods-view'}>
                            <Top/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;