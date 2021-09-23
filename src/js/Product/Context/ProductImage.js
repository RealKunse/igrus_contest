import React from "react";
import '../../../css/Product/ProductTable.css';
import SoapDB from "./SoapDB"
import {Link} from "react-router-dom";

class ProductImage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            description: props.description,

        }
    }

    componentDidMount() {

    };

    mouseEntered = () => {
        this.setState({isHover: true})
    };

    mouseLeaved = () => {
        this.setState({isHover: false})
    };

    HeartOnClick = () => {
        alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.\n(근데 로그인을 미구현)')
    };

    CartOnClick = () => {
        alert('로그인하셔야 본 서비스를 이용하실 수 있습니다.\n(근데 로그인을 미구현)')
    };

    NullPage = () => {
        if (!SoapDB[this.props.id]['real']) {
            alert('미구현')
        }
    }

    render() {
        return (
            <li onMouseEnter={this.mouseEntered} onMouseLeave={this.mouseLeaved} onClick={this.NullPage} style={{width: '25%'}}>
                <div className={'space'}>
                    <div className={"box"}>
                        <div className={"thumbnail"}>

                            <Link to={SoapDB[this.props.id]['real'] ? `/detail` : '/product'}>
                                <span className={'prdimg'}>
                                    <img src={`images/product/${this.props.id}.jpg`}
                                         alt={SoapDB[this.props.id]['name']}/>
                                </span>
                            </Link>
                            {this.state.isHover ? <div id={"hoverfloat"}>
                                <img src={'images/skin/btn_wish.png'} alt={'찜하기'} onClick={this.HeartOnClick}/>
                                <img src={'images/skin/btn_cart.png'} alt={'장바구니'} onClick={this.CartOnClick}/>
                            </div> : null}
                        </div>
                        <div className={"prdinfo"}>
                            <div className={'conditions'}>
                                <span className={'hot'}>
                                    {SoapDB[this.props.id]['real'] ?
                                        <img src={'images/skin/icon_realize.png'} alt={'구현'}/> : null}
                                    {SoapDB[this.props.id]['isnew'] ?
                                        <img src={'images/skin/icon_new.png'} alt={'신상'}/> : null}
                                    {SoapDB[this.props.id]['vegan'] ?
                                        <img src={'images/skin/icon_vegan.png'} alt={'비건'}/> : null}
                                    {SoapDB[this.props.id]['soldout'] ?
                                        <img src={'images/skin/icon_soldout.png'} alt={'품절'}/> : null}
                                </span>
                            </div>
                            <div className={'txt'}>
                                <span className={"prdName"}>{SoapDB[this.props.id]['name']}</span>
                                <span className={"shortdesc"}>{SoapDB[this.props.id]['description'].map(t => {
                                    return ' #' + t
                                })}</span>
                            </div>
                            <div className={'price gd-default'}>
                                <span className={'cost'}>
                                    <strong>￦{SoapDB[this.props.id]['price'].toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ProductImage;