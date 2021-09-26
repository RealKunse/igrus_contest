import React from "react";
import '../../../css/Context/GoodsDisplay.css';
import ProductImage from "../Context/ProductImage";
import $ from 'jquery';
import * as _ from 'underscore';

class GoodsDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curPage: 0,
            deactive: false,
            isMouseDown: false,
            startX: 0,
            wrapper: document.getElementsByClassName('bx-wrapper_')[0]
        }
        this.handleInputThrottled = _.throttle(this.DragMove, 20)
    }

    componentDidMount() {
        document.getElementsByClassName('bx-pager-item')[0].classList.add('click');
        // this.interval = setInterval(this.changeInterval, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    moveToLeftImage = () => {
        if (this.state.curPage > -1 && !this.state.deactive) {
            this.setState({curPage: this.state.curPage - 1});
        }
    };

    moveToRightImage = () => {
        if (this.state.curPage < 2 && !this.state.deactive) {
            this.setState({curPage: this.state.curPage + 1});
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!this.state.isMouseDown) {
            this.useAnimation();
        }
        if (this.state.curPage === 0) {
            document.getElementsByClassName('bx-pager-item')[0].classList.add('click');
            document.getElementsByClassName('bx-pager-item')[1].classList.remove('click');
            // console.log($('.bestseller_bxslider').css('transform').split(',')[4])
            // $('.bestseller_bxslider').css({'transform': 'translate3d(-900px, 0px, 0px)'})
        } else {
            document.getElementsByClassName('bx-pager-item')[0].classList.remove('click')
            document.getElementsByClassName('bx-pager-item')[1].classList.add('click');
            // $('.bestseller_bxslider').css({'transform': 'translate3d(-1800px, 0px, 0px)'})
        }

    }

    useAnimation = () => {
        if (this.state.curPage === 2) {
            // let x = document.getElementsByClassName('bestseller_bxslider')[0].style.transform.split(',');
            // x = x[0].replace('translate3d(', '').replace('px', '')
            // x = parseInt(x);
            document.getElementsByClassName('bestseller_bxslider')[0].style.transform = `translate3d(-${2700}px,0,0)`;
            setTimeout(() => {
                document.getElementsByClassName('bestseller_bxslider')[0].style.transitionDuration = '';
                this.setState({curPage: 0, deactive: true})
            }, 500)
        } else if (this.state.curPage === -1) {

            setTimeout(() => {
                document.getElementsByClassName('bestseller_bxslider')[0].style.transitionDuration = '';
                document.getElementsByClassName('bestseller_bxslider')[0].style.transform = `translate3d(-${1800}px,0,0)`;

                this.setState({curPage: 1, deactive: true})
            }, 500)
        } else {
            if (this.state.deactive) {
                document.getElementsByClassName('bestseller_bxslider')[0].style.transform = `translate3d(-${this.state.curPage*(900) + 900}px,0,0)`;
                setTimeout(() => this.setState({deactive: false}), 500)
            } else {
                document.getElementsByClassName('bestseller_bxslider')[0].style.transform = `translate3d(-${this.state.curPage*(900) + 900}px,0,0)`;
                document.getElementsByClassName('bestseller_bxslider')[0].style.transitionDuration = '0.5s';

            }
        }
        console.log(this.state.curPage)
    };

    onClickHandler = (params, e) => {
        e.preventDefault();
        this.setState({curPage: params})
    };

    onDragStart = (e) => {
        e.preventDefault();
        let x = document.getElementsByClassName('bestseller_bxslider')[0].style.transform.split(',');
        x = x[0].replace('translate3d(', '').replace('px', '')
        x = parseInt(x);
        document.getElementsByClassName('bestseller_bxslider')[0].style.transitionDuration = ''
        // console.log(x);

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
            console.log(-(this.state.startX + e.pageX) / 900);
            console.log(Number(this.state.startX + e.pageX).toFixed(0.01))
            console.log(this.state.curPage + 1)


            if (this.state.curPage + 1 > (-(this.state.startX + e.pageX) / 900)){
                this.moveToLeftImage()
            } else if (this.state.curPage === -(this.state.startX + e.pageX) / 900) {

            } else if (isNaN((this.state.startX + e.pageX) / 900)) {

            } else if (this.state.curPage + 1 < (-(this.state.startX + e.pageX) / 900)) {
                this.moveToRightImage()
            }
        }
    };

    DragMove = (e) => {
        if (this.state.isMouseDown) {

            // let x = document.getElementsByClassName('bestseller_bxslider')[0].style.transform.split(',');
            // x = x[0].replace('translate3d(', '').replace('px', '')
            // console.log(x);
            // console.log(this.state.startX - e.clientX, this.state.startX);
            document.getElementsByClassName('bestseller_bxslider')[0].style.transform =
                `translate3d(${this.state.startX + e.pageX}px, 0px, 0px)`;

            // console.log(-x, this.state.startX + e.pageX)
        }
    };



    render() {


        return (

            <div className={"display_list"}>
                <h2>나만 알고 싶은 향기</h2>
                <div className={'bx-wrapper_'} style={{maxWidth: '880px'}} onMouseDown={this.onDragStart}
                     onMouseUp={this.onDragEnd}
                     onMouseMove={this.handleInputThrottled} onMouseLeave={this.onDragEnd}>
                    <div className={'bx-viewport'}>
                        <div className={'bestseller_bxslider'}>
                                <div>
                                    <ProductImage id={3} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={4} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={5} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={0} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={1} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={2} view={true} drag={this.state.isMouseDown}/>

                                    <ProductImage id={3} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={4} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={5} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={0} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={1} view={true} drag={this.state.isMouseDown}/>
                                    <ProductImage id={2} view={true} drag={this.state.isMouseDown}/>
                                </div>
                        </div>

                    </div>
                </div>
                <div className={'bx-pager'}>
                    <div className={'bx-pager-item'} onClick={(e) => {
                        this.onClickHandler(0, e)
                    }}/>
                    <div className={'bx-pager-item'} onClick={(e) => {
                        this.onClickHandler(1, e)
                    }}/>
                    {/*<button onClick={this.moveToLeftImage}>left</button>*/}
                    {/*<button onClick={this.moveToRightImage}>right</button>*/}

                </div>
            </div>

        )
            ;
    }
}

export default GoodsDisplay;