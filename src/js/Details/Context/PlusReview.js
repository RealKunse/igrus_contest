import React from "react";
import '../../../css/Details/PlusReview.css'

class PlusReview extends React.Component {
    textEvHandler = (param, e) => {
        e.preventDefault();
        alert(param);
    }

    render() {
        return (
            <div className={'plusreview-container'}>
                <div className={'title-container'}>
                    <span className={'text'}>Plus Review</span>
                </div>
                <div className={'summary_new'}>
                    <div className={'photoreview-container'}>
                        <div className={'inner'}>
                            <div className={'title'}>포토리뷰 모아보기</div>
                            <div className={'photo_list'}>
                                <div className={'photo'}>
                                    <img src={'images/review/0.jfif'}/>
                                </div>
                                <div className={'photo'}>
                                    <img src={'images/review/1.jfif'}/>
                                </div>
                                <div className={'photo'}>
                                    <img src={'images/review/2.jfif'}/>
                                </div>
                                <div className={'photo'}>
                                    <img src={'images/review/3.jfif'}/>
                                </div>
                                <div className={'photo'}>
                                    <img src={'images/review/4.jfif'}/>
                                </div>
                                <div className={'photo'}>
                                    <img src={'images/review/5.jfif'}/>
                                </div>
                                <a className={'more'} onClick={(e) => {this.textEvHandler('더보기는 지원하지않습니다 ㅠㅠ',e)}}>
                                    더보기>
                               </a>

                            </div>
                        </div>
                    </div>
                    <div className={'score-container'}>
                        <div className={'inner'}>
                            <div className={'average'}>
                                <div className={'title'}>평가</div>
                                <div className={'score'}>4.6</div>
                                <div className={'star'}>★★★★</div>
                            </div>
                            <div className={'counter'}>
                                <div>
                                    <div className={'title'}>리뷰등록</div>
                                    <div className={'content'}>497 건</div>
                                </div>
                                <div>
                                    <div className={'title'}>포토리뷰</div>
                                    <div className={'content'}>34 건</div>
                                </div>
                                <div>
                                    <div className={'title'}>상품조회수</div>
                                    <div className={'content'}>31495 건</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlusReview;