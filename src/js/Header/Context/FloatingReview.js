import React from "react";
import '../../../css/Review.css'
import $ from 'jquery';


class FloatingReview extends React.Component {
    componentDidMount() {
        $(window).scroll((e) => {
            $('#review').css('margin-top',window.scrollY /12  + 'px')
            }
        )
    }

    render(){
        return(
            <div id={"review"}>
                <div className={'bx-wrapper'}>
                    <div className={'bx-viewport'}>
                        <div className={'bx-slider'}>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/MaskOfMagnaminty.jpg"}/>
                            </div>
                            <div className={'bx-slide bx_active_slide'}>
                                <img src={"images/ReviewImages/CatastrophyCosmetic.jpg"}/>
                            </div>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/DirtySpray.jpg"}/>
                            </div>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/Sleepy.jpg"}/>
                            </div>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/TheOliveBranch.jpg"}/>
                            </div>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/TheRetroSpective.jpg"}/>
                            </div>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/MaskOfMagnaminty.jpg"}/>
                            </div>
                            <div className={'bx-slide'}>
                                <img src={"images/ReviewImages/CatastrophyCosmetic.jpg"}/>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default FloatingReview;