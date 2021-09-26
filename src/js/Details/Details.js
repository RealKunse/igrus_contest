import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navi from "./Context/Navi";
import Goods from './Context/Goods'
import '../../css/Details/Navi.css'
import PlusReview from "./Context/PlusReview";
class Details extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div id={'container'} className={'goodsv_container'}>
                    <div id={'content'}>
                        <div className={'goods-view'}>
                            <Navi/>
                            <Goods/>
                            <PlusReview/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;