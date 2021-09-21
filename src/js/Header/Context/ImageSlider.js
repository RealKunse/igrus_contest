import '../../../css/Context/ImageSlider.css'
import React from "react";

class ImageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: document.getElementsByClassName("slick-slide"),
            button: document.getElementsByClassName("slbtn"),
            curSlider: 0,
        }
    }

    changeSlider = () => {
        const slider = this.state.slider;
        const curSlider = this.state.curSlider;
        const button = this.state.button;
        slider[curSlider].className = `item${curSlider} slick-slide`;
        button[curSlider].className = "slbtn";

        if (curSlider + 1 === slider.length) {
            slider[0].className = `item0 slick-slide slide-active`
            button[0].className = "slbtn slick-active"
            this.setState({curSlider: 0});
            console.log("if", curSlider)
        } else {
            slider[curSlider + 1].className = `item${curSlider + 1} slick-slide slide-active`
            button[curSlider + 1].className = "slbtn slick-active"
            this.setState({curSlider: curSlider + 1});
            console.log("else", curSlider)

        }
    }

    onClickSlider = (event) => {
        if (!isNaN(event.target.parentElement.id.charAt(9))) {
            const slider = this.state.slider;
            const curSlider = this.state.curSlider;
            const button = this.state.button;

            const num = parseInt(event.target.parentElement.id.charAt(9))

            slider[curSlider].className = `item${curSlider} slick-slide`;
            button[curSlider].className = "slbtn";

            this.setState({curSlider: num})
            slider[num].className = `item${num} slick-slide slide-active`
            button[num].className = "slbtn slick-active"
        }
    }


    componentDidMount() {
        this.interval = setInterval(this.changeSlider, 5000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        clearInterval(this.interval)
        this.interval = setInterval(this.changeSlider, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }


    render() {

        return (
            <div className={"ad_slider"}>
                <div className={"slider-wrap"}>
                    <div className={"item0 slick-slide slide-active"}>

                    </div>
                    <div className={"item1 slick-slide"}>

                    </div>
                    <div className={"item2 slick-slide"}>

                    </div>
                    <div className={"item3 slick-slide"}>

                    </div>
                    <div className={"item4 slick-slide"}>

                    </div>
                    <div className={"item5 slick-slide"}>

                    </div>

                </div>
                <div className={"slick-dot-wrap"}>
                    <ul className={"slick-dots"}>
                        <li id={"slick-dot0"} className={"slbtn slick-active"} onClick={this.onClickSlider}>
                            <button type={"button"} tabIndex={0}/>
                        </li>
                        <li id={"slick-dot1"} className={"slbtn"} onClick={this.onClickSlider}>
                            <button type={"button"} tabIndex={0}/>
                        </li>
                        <li id={"slick-dot2"} className={"slbtn"} onClick={this.onClickSlider}>
                            <button type={"button"} tabIndex={0}/>
                        </li>
                        <li id={"slick-dot3"} className={"slbtn"} onClick={this.onClickSlider}>
                            <button type={"button"} tabIndex={0}/>
                        </li>
                        <li id={"slick-dot4"} className={"slbtn"} onClick={this.onClickSlider}>
                            <button type={"button"} tabIndex={0}/>
                        </li>
                        <li id={"slick-dot5"} className={"slbtn"} onClick={this.onClickSlider}>
                            <button type={"button"} tabIndex={0}/>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ImageSlider;