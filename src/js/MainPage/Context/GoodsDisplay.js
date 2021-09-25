import React from "react";
import '../../../css/Context/GoodsDisplay.css';
import ProductImage from "../Context/ProductImage";
import $ from 'jquery'

class GoodsDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curPage: 1,
            deactive: false,
            isMouseDown: false,
            startX: '0',
            wrapper: document.getElementsByClassName('bx-wrapper_')[0]
        }
    }

    componentDidMount() {
        document.getElementsByClassName('bx-pager-item')[0].click();
        this.interval = setInterval(this.changeInterval, 10000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.curPage === 0) {
            document.getElementsByClassName('bx-pager-item')[0].style.backgroundColor = '#1e1e1e';
            document.getElementsByClassName('bx-pager-item')[1].style.backgroundColor = '';
            // console.log($('.bestseller_bxslider').css('transform').split(',')[4])
            $('.bestseller_bxslider').css({'transform':'translate3d(0px, 0px, 0px)'})
        } else {
            document.getElementsByClassName('bx-pager-item')[0].style.backgroundColor = '';
            document.getElementsByClassName('bx-pager-item')[1].style.backgroundColor = '#1e1e1e';
            $('.bestseller_bxslider').css({'transform':'translate3d(-900px, 0px, 0px)'})
        }

        clearInterval(this.interval);
        this.interval = setInterval(this.changeInterval, 10000)
    }

    changeInterval = () => {
        if(this.state.curPage === 0) {
            this.setState({curPage:1})
        } else {
            this.setState({curPage:0})
        }
    }

    onClickHandler = (params, e) => {
        e.preventDefault();
        this.setState({curPage: params})
    };




    render() {


        return (

            <div className={"display_list"}>
                <h2>나만 알고 싶은 향기</h2>
                <div className={'bx-wrapper_'} style={{maxWidth: '880px'}} onMouseDown={this.onDragStart}
                     onMouseUp={this.onDragEnd}
                     onMouseMove={this.DragMove} onMouseLeave={this.onDragEnd}>
                    <div className={'bx-viewport'}>
                        <div className={'bestseller_bxslider'}>
                            <ProductImage id={0} view={true}/>
                            <ProductImage id={1} view={true}/>
                            <ProductImage id={2} view={true}/>
                            <ProductImage id={3} view={true}/>
                            <ProductImage id={4} view={true}/>
                        </div>
                    </div>
                    <div className={'bx-pager'}>
                        <div className={'bx-pager-item'} onClick={(e) => {
                            this.onClickHandler(0, e)
                        }}/>
                        <div className={'bx-pager-item'} onClick={(e) => {
                            this.onClickHandler(1, e)
                        }}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoodsDisplay;