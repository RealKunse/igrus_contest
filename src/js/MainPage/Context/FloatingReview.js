import React from "react";
import '../../../css/Context/Review.css'
import $ from 'jquery';


class FloatingReview extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            curReview: 1,
            deactive: false,
            isMouseDown: false,
            startX: '0',
        }
    }

    moveToLeftImage = () => {
        if (this.state.curReview > 0 && !this.state.deactive) {
            this.setState({curReview: this.state.curReview - 1});
        }
    };

    moveToRightImage = () => {
        if (this.state.curReview < 7 && !this.state.deactive) {
            this.setState({curReview: this.state.curReview + 1});
        }
    };

    useAnimation = () => {
        if (this.state.curReview === 7) {
            document.getElementsByClassName('bx-slider')[0].style.transform = `translate3d(-${this.state.curReview * 280}px,0,0)`;
            setTimeout(() => {
                document.getElementsByClassName('bx-slider')[0].style.transitionDuration = '';
                this.setState({curReview: 1, deactive: true})
            }, 500)
        } else if (this.state.curReview === 0) {
            document.getElementsByClassName('bx-slider')[0].style.transform = `translate3d(-${this.state.curReview * 280}px,0,0)`;
            setTimeout(() => {
                document.getElementsByClassName('bx-slider')[0].style.transitionDuration = '';
                this.setState({curReview: 6, deactive: true})
            }, 500)
        } else {
            console.log(this.state.deactive);

            if (this.state.deactive) {
                document.getElementsByClassName('bx-slider')[0].style.transform = `translate3d(-${this.state.curReview * 280}px,0,0)`;
                setTimeout(() => this.setState({deactive: false}), 500)
            } else {
                document.getElementsByClassName('bx-slider')[0].style.transform = `translate3d(-${this.state.curReview * 280}px,0,0)`;
                document.getElementsByClassName('bx-slider')[0].style.transitionDuration = '0.5s';

            }

        }
    };

    onDragStart = (e) => {
        e.preventDefault();
        let x = e.target.parentElement.parentElement.style.transform.split(',');
        x = x[0].replace('translate3d(', '').replace('px', '')
        // let x = e.target.parentElement.parentElement.style.transform.substr(12, 4);
        x = parseInt(x);
        console.log(x);

        this.setState({
            isMouseDown: true,
            startX: x - e.clientX
        });

    };

    onDragEnd = (e) => {
        if (this.state.isMouseDown) {
            this.setState({
                isMouseDown: false,
            })
            let x = e.target.parentElement.parentElement.style.transform.split(',');
            x = x[0].replace('translate3d(', '').replace('px', '')
            console.log((this.state.startX + e.pageX) / 240);

            if (this.state.curReview < -(this.state.startX + e.pageX) / 240) {
                this.moveToRightImage()
            } else {
                this.moveToLeftImage()
            }


        }
    };


    DragMove = (e) => {
        if (this.state.isMouseDown) {

            let x = e.target.parentElement.parentElement.style.transform.split(',');
            x = x[0].replace('translate3d(', '').replace('px', '')
            // console.log(x);
            // console.log(this.state.startX - e.clientX, this.state.startX);
            e.target.parentElement.parentElement.style.transform =
                `translate3d(${this.state.startX + e.pageX}px, 0px, 0px)`;

            console.log(-x, this.state.startX + e.pageX)
        }


    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.isMouseDown) {
            this.useAnimation();
        }
        clearInterval(this.interval);
        this.interval = setInterval(this.moveToRightImage, 10000)
    }

    componentDidMount() {
        $(window).scroll((e) => {
                $('#review').css('margin-top', window.scrollY / 15 + 'px')
            }
        );

        this.interval = setInterval(this.moveToRightImage, 10000)
    }


    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {


        return (
            <div id={"review"}>
                <div className={'bx-wrapper'}>
                    <div className={'bx-viewport'}>
                        <div className={'bx-slider'} onMouseDown={this.onDragStart} onMouseUp={this.onDragEnd}
                             onMouseMove={this.DragMove} onMouseLeave={this.onDragEnd}>
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
                            {this.state.curReview > 6 ? 1 : this.state.curReview < 1 ? 6 : this.state.curReview} / 6
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