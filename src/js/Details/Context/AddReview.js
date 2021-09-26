import React from "react";
import '../../../css/Details/AddReview.css'
import ReviewPart from "./ReviewPart";

class addReview extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isChecked:false,
        }
    }

    imageChange = () => {
        this.setState({isChecked: !this.state.isChecked});
        if(this.state.isChecked) {
            document.querySelector('.agree label').classList.add('on')
            document.querySelector('.agree label').classList.remove('hover')
        } else {
            document.querySelector('.agree label').classList.remove('on')
            document.querySelector('.agree label').classList.add('hover')
        }
    }

    requireLogin = (e) => {
        if(e.target.className === 'reviewText') {
            e.target.blur();
        }

        alert('로그인이 필요합니다.')
    }

    render() {
        return (
            <div>
                <div className="top-reviews">
                    <div className="tit">
                        <h3>Product Reviews
                            <span className="star">★★★★</span>
                            <span className="reviewCount">
							497
							</span>
                        </h3>
                        <p>나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!</p>
                    </div>
                </div>
                <div>
                    <div className={'section-body'}>
                        <div className="plusreview-add">
                            <dl>
                                <dt>평가</dt>
                                <dd>
                                    <ul className={'choice-rating'}>
                                        <li>
                                            <label>
                                                <input type={'radio'} name={'goodsPt'} value={5}
                                                       className={'radio goodsPt'} id={'rating5'}/>
                                                <span className={'rating'}>★★★★★</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type={'radio'} name={'goodsPt'} value={4}
                                                       className={'radio goodsPt'} id={'rating4'}/>
                                                <span className={'rating'}>★★★★☆</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type={'radio'} name={'goodsPt'} value={3}
                                                       className={'radio goodsPt'} id={'rating3'}/>
                                                <span className={'rating'}>★★★☆☆</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type={'radio'} name={'goodsPt'} value={2}
                                                       className={'radio goodsPt'} id={'rating2'}/>
                                                <span className={'rating'}>★★☆☆☆</span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type={'radio'} name={'goodsPt'} value={1}
                                                       className={'radio goodsPt'} id={'rating1'}/>
                                                <span className={'rating'}>★☆☆☆☆</span>
                                            </label>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className={'plusreview-container'}>
                            <div className={'write-form'}>
                                <div className={'textarea'}>
                                    <textarea name={"contents"} className={"reviewText"} onClick={this.requireLogin} required/>
                                </div>
                                <div className={'private-container'}>
                                    <div>
                                        <div className="title">
                                            <span><strong>비회원 개인정보 수집동의</strong></span><span
                                            className="showall"><a href="http://lush.co.kr/service/private.php"
                                                                   target="_blank">전체보기</a></span></div>
                                        <div className="agreement">- 수집항목: 이름, 휴대전화번호, 작성 비밀번호
                                            - 수집/이용목적: 게시글 접수 및 결과 회신
                                            - 이용기간: 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                                            단, 관계법령의 규정에 의하여 보전할 필요가 있는 경우 일정기간 동안 개인정보를 보관할 수 있습니다.
                                            위와 같이 수집하는 개인정보에 대해, 동의하지 않거나 거부할 수 있습니다. 다만, 동의하지 않거나 거부할 경우 회원에게 제공되는 서비스가
                                            제한될 수
                                            있습니다.
                                            그 밖의 사항은 (주)러쉬코리아 개인정보처리방침을 준수합니다.
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'baseline'
                                    }}>
                                        <div className="personal-information">
                                            <span>작성자</span>
                                            <span><input type="text" className="username" name="writerNm" required=""
                                                         aria-required="true"/></span>
                                            <span>비밀번호</span>
                                            <span><input type="password" className="password" name="writerPw"
                                                         required=""
                                                         aria-required="true"/></span>
                                        </div>
                                        <div className="agree" onClick={this.imageChange}>
                                            <input type="checkbox" className="checkbox require"
                                                                      id="termsAgree" name="agreeFl"/>
                                            <label className={'hover'}>위 내용에 동의 합니다.</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="attach-container">
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <div className="filelist">
                                            <div className="file">
                                                <button className="image-upload-button"/>
                                                <input type="file" className="image-upload"/></div>
                                            <div className="js-pr-attach-list">
                                            </div>
                                            <div className="clear-both"/>
                                        </div>
                                        <div className="buttons">
                                            <button onClick={this.requireLogin} className="button" type="submit">후기작성</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={'plusreview-container-list'}>
                            <div className={'title-container'}/>
                            <div className={'pr-list'}>
                                <ReviewPart txt={'리뷰가 너무 많아 적당히 씁니다'} rat={5} highlight/>
                                <ReviewPart txt={'향은 좋고 피부도 좋아지는 느낌이에요'} rat={3}/>
                                <ReviewPart txt={ '색이 원래 이런가요?' +
                                '비누도 물러서 뭔가 떨어져나오고 칙칙하게 갈변된 색이 와서 당황스럽네요 이름처럼 ...' +
                                '색이 원래 이런가요?' +
                                '비누도 물러서 뭔가 떨어져나오고 칙칙하게 갈변된 색이 와서 당황스럽네요 이름처럼 아이에게 쓸 수는 있는 건지 모르겠습니다.\n' +
                                '차라리 직접 매장가서 사는 게 낫겠네요.'} rat={1} highlight/>
                                <ReviewPart txt={'빠른 배송 감사합니다'} rat={5}/>
                                <ReviewPart txt={'향기 무장 좋아용ㅠㅠ'} rat={5} highlight/>
                                <ReviewPart txt={'배송빠르고좋아요.. 씻을때마다냄새가너무좋아요'} rat={4}/>
                                <ReviewPart txt={'향기좋고 촉촉하지만 둘이서 열흘정도쓰니 없넨요'} rat={5} highlight/>
                                <ReviewPart txt={'배송도 빠르고 실제로 받아보니 냄새가 좋네요\n화장실 방향제겸 쓸려고 했는데 괜찮은것 같습니다'} rat={5} />
                                <ReviewPart txt={'선물용으로 구입했어요!!'} rat={5} highlight/>
                                <ReviewPart txt={'달콤달콤 냄새좋아요~ 근데 생각보다 사이즈는 작아요 ㅋㅋㅋ'} rat={5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default addReview