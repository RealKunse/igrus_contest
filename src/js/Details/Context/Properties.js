import React from "react";
import '../../../css/Details/Properties.css'
import Article from "./Article";

class Properties extends React.Component {
    render() {
        return (
            <div>
                <div id={'external-video'}>
                    {/*<iframe width="1180" height="664" src="https://www.youtube.com/embed/iorrcu39HMM"/>*/}
                </div>
                <div className={'txt-manual'}>
                    <div className={'container'}>
                        <section className={'detail-section section-header'}>
                            <div className={'inner'}>
                                <p className={'category'}>솝</p>
                                <h1 className={'title'}>
                                    <div className="title-kr">허니 아이 워시드 더 키즈</div>
                                    <div className="title-en">Honey I Washed The Kids</div>
                                </h1>
                            </div>
                        </section>
                        <section className={'detail-section early-review is-soup'}>
                            <div className={'inner clearfix'}>
                                <div className={'bg-image'}>
                                    <img src={'images/honeyiwashedthekids_re_review.jpg'} alt={'리뷰배경'}/>
                                </div>
                                <div className={'review-box'}>
                                    <div className={'box-inner'}>
                                        <h2 className="title clearfix">
                                            <span className="title-text">미리 써 본 후기</span>
                                            <div className="stars">
                                                <span className="star-item">★</span>
                                                <span className="star-item">★</span>
                                                <span className="star-item">★</span>
                                                <span className="star-item">★</span>
                                                <span className="star-item">★</span>
                                            </div>
                                        </h2>
                                        <div className="content">
                                            샤워 젤처럼 거품이 풍성하고 <br/> 꿀이 들어 있어서 그런지
                                            사용 후에도 촉촉해요.<br/>
                                            달콤한 향기는 두말할 것도 없죠!
                                        </div>
                                        <span className="author">by.레이</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={'detail-section description'}>
                            <div className={'inner'}>
                                <div className={'text-wrap'}>
                                    <p className="desc">
                                        달콤한 꿀, 오렌지와 베르가못의 상쾌함! <br/>자연에서 얻은 신선한 원재료와 <br/>
                                        질 좋은 에센셜 오일이 듬뿍 담긴 솝(비누)입니다. <br/>
                                        앗, 꿀 항아리에 빠져버렸어요!<br/>
                                        꿀의 달콤함은 물론 피부의 편안함까지 경험해보세요.</p>
                                    <p className="tip">
                                        <strong>TIP
                                            <i>!
                                            </i>
                                        </strong>'허니 아이 워시드 마이 헤어', '스크러비'의 달콤함도 함께 즐겨보세요!</p>
                                </div>
                                <div className={'image-wrap'}>
                                    <img alt={'솝 이미지'} src={'images/honeyiwashedthekids_re_img.jpg'}/>
                                </div>
                            </div>
                        </section>
                        <section className={'detail-section ingredients'}>
                            <div className={'inner clearfix'}>
                                <div className="title-wrap">
                                    <h1 className="section-title">제품 성분</h1>
                                    <span className="desc">원재료의 특성에 한함</span>
                                </div>
                                <div className="image-wrap type-03">
                                    <div className="image-item">
                                        <div className="item-thumb">
                                            <img alt="꿀  " src="http://img.lush.co.kr/product/ingredients/honey.jpg"/>
                                        </div>
                                        <dl className="item-text">
                                            <dt className="text-title">꿀</dt>
                                            <dd className="text-desc"> 건강하고 <br/>촉촉한 피부에 도움
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="image-item">
                                        <div className="item-thumb">
                                            <img alt="오렌지 오일 "
                                                 src="http://img.lush.co.kr/product/ingredients/orange.jpg"/>
                                        </div>
                                        <dl className="item-text">
                                            <dt className="text-title">오렌지 오일</dt>
                                            <dd className="text-desc">깨끗한 세정과 <br/> 건강한 피부에 도움
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="image-item">
                                        <div className="item-thumb">
                                            <img alt="베르가못 오일"
                                                 src="http://img.lush.co.kr/product/ingredients/bergamot.jpg"/>
                                        </div>
                                        <dl className="item-text">
                                            <dt className="text-title">베르가못 오일</dt>
                                            <dd className="text-desc">상큼한 향기
                                            </dd>
                                        </dl>
                                    </div>

                                </div>

                                <div className="ingredients-wrap">
                                    <div className="ingredients-text">
                                        <span className="name">대표성분</span>
                                        <span className="value">꿀 ,오렌지 오일, 베르가못 오일</span>
                                    </div>
                                    <div className="ingredients-text"><span className="name">전 성분 표기</span>
                                        <span className="value">
 	서양유채씨오일,정제수,프로필렌글라이콜, 코코넛야자오일,꿀(9%),향료,오렌지오일, 베르가모트오일,리모넨,리날룰,아밀신남알,시트로넬올, 제라니올,글리세린,소듐하이드록사이드, 소듐클로라이드,티타늄디옥사이드,치자추출물, 케이프알로에잎추출물,소듐바이카보네이트,시트릭애씨드, 이디티에이,테트라소듐에티드로네이트</span>

                                    </div>
                                    <div className="special">
                                        <div className={'is-vegetarian_before'}/>
                                        <div className="special-item is-vegetarian">
 								<span className="text">
 									꿀, 라놀린(양털 추출물)을 제외한<br/> 동물성 원료를 포함하지 않은 <br/>영국 베지테리언 협회 인증 제품	</span>
                                        </div>
                                        <div className={'is-sp_before'}/>
                                        <div className="special-item is-sp">
                                            <span className="text">화학 합성 보존제 없이도 신선함을 유지하는 제품</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="detail-section usage">
                            <div className="inner clearfix">
                                <div className="bg-image">
                                    <img alt="사용방법 배경 이미지"
                                         src=" http://img.lush.co.kr/product/shower/honeyiwashedthekids_re_use.jpg"/>
                                </div>
                                <div className="usage-box">
                                    <div className="box-inner">
                                        <h1 className="title">사용 방법</h1>
                                        <div className="content">
                                            젖은 몸에 직접 문지르거나, 샤워 타월에 묻혀<br/>
                                            거품을 내줍니다. 거품을 이용해 온몸을 마사지한 후<br/>
                                            물로 깨끗이 헹궈주세요.
                                        </div>
                                        <div className="hashtags">
                                            <a>#러쉬비누</a>
                                            <span> #쓰레기없데이</span>
                                            <span> #HoneyIWashedTheKids  </span>
                                            <span> #허니아이워시드더키즈</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={'detail-section faq-section'}>
                            <div className={'inner'}>
                                <div className={'faq-item'}>
                                    <div className={'faq-quest'}>Q. 구매한 비누의 단면이 불규칙해요</div>
                                    <div className="faq-answer">
                                        <span className="icon-lush"/>
                                        <div className="answer-text">
                                            <div className="text-wrap">커다란 틀에 굳혀서 만들어지는 러쉬의 비누는 베이스 성분에 의해서 잘린 단면이 다르거나
                                                무거운 성분이 가라앉을 수 있습니다. 각기 다른 생김새의 비누는 대체 불가한 개성과 아름다움을 품고 있죠!
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Article/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Properties;