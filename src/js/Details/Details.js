import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navi from "./Context/Navi";
import Goods from './Context/Goods'
import '../../css/Details/Navi.css';
import '../../css/Details/Details.css'
import PlusReview from "./Context/PlusReview";
import Properties from "./Context/Properties";
import AddReview from './Context/AddReview';
import Delivery from "./Context/Delivery";
import $ from 'jquery'

class Details extends React.Component {
    moveToDetail = (e) => {
        e.preventDefault();
        const scrollPosition = $('#detail').offset().top;
        $("html").animate({
            scrollTop: scrollPosition
        }, 500)
    }

    moveToReview = (e) => {
        e.preventDefault();
        const scrollPosition = $('#reviews').offset().top;
        $("html").animate({
            scrollTop: scrollPosition
        }, 500)
    }

    moveToDelivery = (e) => {
        e.preventDefault();
        const scrollPosition = $('#delivery').offset().top;
        $("html").animate({
            scrollTop: scrollPosition
        }, 500)
    }

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
                                        <a onClick={this.moveToDetail} className={'on'}>상품상세정보</a>
                                        <a onClick={this.moveToReview}>상품후기 (497)</a>
                                        <a onClick={this.moveToDelivery}>배송/교환 및 반품안내</a>
                                    </div>
                                </div>
                                <Properties/>
                            </div>
                            <div id={'reviews'}>
                                <div className={'in_width_wrap'}>
                                    <div className={'tab'}>
                                        <a onClick={this.moveToDetail}>상품상세정보</a>
                                        <a onClick={this.moveToReview} className={'on'}>상품후기 (497)</a>
                                        <a onClick={this.moveToDelivery}>배송/교환 및 반품안내</a>
                                    </div>
                                </div>
                                <AddReview/>
                            </div>
                            <div id={'delivery'}>
                                <div className={'in_width_wrap'}>
                                    <div className={'tab'}>
                                        <a onClick={this.moveToDetail}>상품상세정보</a>
                                        <a onClick={this.moveToReview}>상품후기 (497)</a>
                                        <a onClick={this.moveToDelivery} className={'on'}>배송/교환 및 반품안내</a>
                                    </div>
                                </div>
                                <Delivery/>
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