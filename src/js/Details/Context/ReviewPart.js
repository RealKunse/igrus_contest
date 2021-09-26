import React, {Component} from "react";

class ReviewPart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        let a = []
        for (let i = 0; i < this.props.rat; i++) {
            a.push('★')
        }

        this.setState({text: a.join('')})
        this.render()
    }

    checkHighlight = () => {
        return !!this.props.highlight;
    }

    render() {
        return (
            <div>
                {this.checkHighlight() ? <div className={'article pr-row highlight'}>
                    <div className={'summary'}>
                        <div className="star">{this.state.text}</div>
                        <div className="date">2021.09.23</div>
                        <div>네이버페이 구매자</div>
                    </div>
                    <div className={'content-container'}>
                        <div className="goods-info"/>
                        <div className="text-container  js-pr-contents-short">
                            {this.props.txt}
                        </div>
                        <div className="bottom-container">
                            <a className="js-pr-btn-comment">
                                                <span className="reply-count">
                                                    <span className="js-pr-comment-cnt">0</span>개</span>
                                <span className="reply-info">의 댓글이 있습니다.</span>
                            </a>
                            <span className="like">추천: <span className="js-pr-recommend-cnt">0</span></span>
                            <span><button className="like-button js-pr-btn-recommend"
                                          type="button">추천하기</button></span>
                        </div>
                    </div>
                </div> : <div className={'article pr-row'}>
                    <div className={'summary'}>
                        <div className="star">{this.state.text}</div>
                        <div className="date">2021.09.23</div>
                        <div>네이버페이 구매자</div>
                    </div>
                    <div className={'content-container'}>
                        <div className="goods-info"/>
                        <div className="text-container  js-pr-contents-short">
                            {this.props.txt}
                        </div>
                        <div className="bottom-container">
                            <a className="js-pr-btn-comment">
                    <span className="reply-count">
                    <span className="js-pr-comment-cnt">0</span>개</span>
                                <span className="reply-info">의 댓글이 있습니다.</span>
                            </a>
                            <span className="like">추천: <span className="js-pr-recommend-cnt">0</span></span>
                            <span><button className="like-button js-pr-btn-recommend"
                                          type="button">추천하기</button></span>
                        </div>
                    </div>
                </div>
                }
            </div>

        );
    }
}

export default ReviewPart;