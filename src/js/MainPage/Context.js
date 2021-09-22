import ImageSlider from "./Context/ImageSlider";
import FloatingReview from "./Context/FloatingReview";
import Campaign from "./Context/Campaign";
import NewGood from "./Context/NewGood";
import GoodsDisplay from "./Context/GoodsDisplay";
import React from "react";

function Context() {
    return (
        <div className={"context"}>
            <ImageSlider/>
            <div className={'adpic_wideslide2'}>

                <div className={"inner_wrap"}>
                    <GoodsDisplay/>
                    <FloatingReview/>
                </div>
            </div>

            <Campaign/>
            <NewGood/>

        </div>
    );
}

export default Context;