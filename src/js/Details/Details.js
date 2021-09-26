import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navi from "./Context/Navi";
import Goods from './Context/Goods'
import '../../css/Details/Navi.css';
import '../../css/Details/Details.css'
import PlusReview from "./Context/PlusReview";
import Properties from "./Context/Properties";
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
                            <div id={'detail'}>
                                <div className={'in_width_wrap'}>
                                    <div className={'tab'}>
                                        <a href={'#detail'} className={'on'}>상품상세정보</a>
                                        <a href={'#reviews'}>상품후기 (497)</a>
                                        <a href={'#delivery'} >배송/교환 및 반품안내</a>
                                    </div>
                                </div>
                                <Properties/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Details;