import React from "react";
import '../../../css/Context/Review.css'
import $ from 'jquery';


class FloatingReview extends React.Component {
    componentDidMount() {
        $(window).scroll((e) => {
                $('#review').css('margin-top', window.scrollY / 15 + 'px')
            }
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            curReview: 1,
        }
    }

    moveToLeftImage = () => {
        if(this.state.curReview !== 1) {
            this.setState({curReview: this.state.curReview - 1});
        } else {
            this.setState({curReview : 6});
        }
        this.useAnimation()
    };

    moveToRightImage = () => {
        if(this.state.curReview !== 6){
            this.setState({curReview: this.state.curReview + 1});
        } else {
            this.setState({curReview : 1});
        }
        this.useAnimation()
    };

    useAnimation = () => {
        document.getElementsByClassName('bx-slider')[0].style.transform = `translate3d(-${this.state.curReview * 280}px,0,0)`
        document.getElementsByClassName('bx-slider')[0].style.transitionDuration = '0.5s'
    }

    disableStyleAnimation = () => {

    };

    activateStyleAnimaation = () => {

    }


    render() {
        return (
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
                                <img src={"images/ReviewImages/Dirty.jpg"}/>
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
                    <div className={'bx-control-box'}>
                        <a className={'bx-prev'} onClick={this.moveToLeftImage}>
                            <img src={'images/skin/review_prev.png'} alt={'prev'}/>
                        </a>
                        <span>
                            {this.state.curReview} / 6
                        </span>
                        <a className={'bx-next'} onClick={this.moveToRightImage}>
                            <img src={'images/skin/review_next.png'} alt={'next'}/>
                        </a>
                    </div>
                </div>

            </div>
        );
    }
}

export default FloatingReview;