import React from "react";
import '../../../css/Product/ProductTable.css';
import SoapDB from "./SoapDB"

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

    }


    render() {
        return (
            <li style={{width: '25%'}}>
                <div className={'space'}>
                    <div className={"box"}>
                        <div className={"thumbnail"}>
                            <a href={'#'}>
                                <span className={'prdimg'}>
                                    <img src={`images/product/${this.props.id}.jpg`} alt={SoapDB[this.props.id]['name']}/>
                                </span>
                            </a>
                        </div>
                        <div className={"prdinfo"}>
                            <div className={'conditions'}>
                                <span className={'hot'}>
                                    {SoapDB[this.props.id]['isnew'] ? <img src={'images/skin/icon_new.png'}/> : null}
                                    {SoapDB[this.props.id]['vegan'] ? <img src={'images/skin/icon_vegan.png'}/> : null}
                                    {SoapDB[this.props.id]['soldout'] ?
                                        <img src={'images/skin/icon_soldout.png'}/> : null}
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