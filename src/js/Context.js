import ImageSlider from "./Header/Context/ImageSlider";
import FloatingReview from "./Header/Context/FloatingReview";
import Campaign from "./Header/Context/Campaign";
import FloatingAd from "./Header/Context/FloatingAd";

function Context() {
    return (
        <div className={"context"}>
            <ImageSlider/>
            <div class={'adpic_wideslide2'}>
                <div className={"inner_wrap"}>
                    <FloatingReview/>

                </div>
            </div>
            <Campaign/>
            <FloatingAd/>
        </div>
    );
}

export default Context;