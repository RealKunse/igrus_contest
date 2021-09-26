import React from "react";
import ProductImage from "../../Product/Context/ProductImage";

class RealtedGoods extends React.Component{
    render() {
        return (
            <div className={'related-goods'}>
                <div className={'rg_title'}>함께하면 더 좋은 제품</div>
                <div className={'rg_context'}>함께 사용하면 좋습니다.</div>
                <div className={'flex_container'}>
                    <ProductImage id={2}/>
                    <ProductImage id={3}/>
                    <ProductImage id={4}/>
                </div>
            </div>
        );
    }
}

export default RealtedGoods;