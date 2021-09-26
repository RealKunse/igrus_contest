import React from 'react';
import '../../../css/Details/Goods.css'

class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SNSShare: false,
            tooltip: false,
            cnt: 1,
            price: 9000,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.SNSShare) {
            document.getElementsByClassName('sns-share-layer')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('sns-share-layer')[0].style.display = 'none';
        }
        this.state.tooltip ? document.getElementsByClassName('toggle_content')[0].style.display = 'block' : document.getElementsByClassName('toggle_content')[0].style.display = 'none'
        document.getElementById('text').value = this.state.cnt;
    }

    toggleSNSShare = () => {
        this.setState({SNSShare: !this.state.SNSShare})
    }

    toggleTooltip = () => {
        this.setState({tooltip: !this.state.tooltip})
    }

    cntUp = () => {
        if (this.state.cnt >= 1) {
            this.setState({cnt: this.state.cnt + 1})
        }
    }

    cntDown = () => {
        if (this.state.cnt > 1) {
            this.setState({cnt: this.state.cnt - 1})
        }
    }

    getPrice = () => {
        console.log(this.state.cnt * this.state.price)
        return '￦' + (this.state.cnt * this.state.price).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    needLogin = () => {
        alert('로그인 후 이용하실 수 있습니다.')
    }

    textEvHandler = (param, e) => {
        e.preventDefault();
        alert(param);
    }
    makeCopy = () => {
        const text = document.getElementsByClassName('field-b')[0];
        text.select();
        document.execCommand('copy')
    }

    render() {
        return (
            <div className={'goods'}>
                <div className={'image'}>
                    <div className={'thumbnail'}>
                        <a className={'zoom-layer'} id={'mainImage'}>
                            <img src={'images/product/0.jpg'} alt={'product'}/>
                        </a>
                    </div>

                    <div className={'more-thumbnail'}>
                        <div className={'slide'}>
                            <div className={'slider-wrap cycle slider-image-thumbnamil slick-initialized slick-slider'}>
                                <div className={'slick-list'}>
                                    <div className={'slick-track'}>
                                        <a>
                                            <img src={'images/product/0.jpg'} alt={'product'}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={'prev slider-image-thumbnail-prev slick-arrow slick-hidden'} tabIndex={-1}/>
                            <div className={'next slider-image-thumbnail-next slick-arrow slick-hidden'} tabIndex={-1}/>
                        </div>
                    </div>
                </div>
                <div className={'info'}>
                    <div className={'info_wrap'}>
                        <div className={'goods-header'}>
                            <div className={'top'}>
                                <div className={'tit'}>
                                    <h2>허니 아이 워시드 더 키즈</h2>
                                </div>
                                <div className={'hashtag'}>#솝 #달콤한꿀이뚝뚝</div>
                            </div>
                            <div className={'sns'} onClick={this.toggleSNSShare}>
                            </div>
                            <div className={'sns-share-layer'}>
                                <div className={'wrap'}>
                                    <strong>SNS 공유하기</strong>
                                    <div>
                                        <ul>
                                            <li>
                                                <a href={'https://www.facebook.com/sharer/sharer.php?display=popup&redirect_uri=http%3A%2F%2Fwww.facebook.com&u=https%3A%2F%2Flush.co.kr%3A443%2Fgoods%2Fgoods_view.php%3FgoodsNo%3D5&t=%ED%97%88%EB%8B%88+%EC%95%84%EC%9D%B4+%EC%9B%8C%EC%8B%9C%EB%93%9C+%EB%8D%94+%ED%82%A4%EC%A6%88%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94.+%ED%94%84%EB%A0%88%EC%89%AC+%ED%95%B8%EB%93%9C%EB%A9%94%EC%9D%B4%EB%93%9C+%EC%BD%94%EC%8A%A4%EB%A9%94%ED%8B%B1+%EB%9F%AC%EC%89%AC%EC%BD%94%EB%A6%AC%EC%95%84%EC%9E%85%EB%8B%88%EB%8B%A4.'}>
                                                    <img src={'images/skin/sns-facebook.png'}/><br/>
                                                    <span>페이스북</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://twitter.com/intent/tweet?text=%ED%97%88%EB%8B%88+%EC%95%84%EC%9D%B4+%EC%9B%8C%EC%8B%9C%EB%93%9C+%EB%8D%94+%ED%82%A4%EC%A6%88%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94.+%ED%94%84%EB%A0%88%EC%89%AC+%ED%95%B8%EB%93%9C%EB%A9%94%EC%9D%B4%EB%93%9C+%EC%BD%94%EC%8A%A4%EB%A9%94%ED%8B%B1+%EB%9F%AC%EC%89%AC%EC%BD%94%EB%A6%AC%EC%95%84%EC%9E%85%EB%8B%88%EB%8B%A4.&url=https%3A%2F%2Flush.co.kr%3A443%2Fgoods%2Fgoods_view.php%3FgoodsNo%3D5'}>
                                                    <img src={'images/skin/sns-twitter.png'}/><br/>
                                                    <span>트위터</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Flush.co.kr%3A443%2Fgoods%2Fgoods_view.php%3FgoodsNo%3D5&description=%5B%EB%9F%AC%EC%89%AC%EC%BD%94%EB%A6%AC%EC%95%84%5D+%ED%97%88%EB%8B%88+%EC%95%84%EC%9D%B4+%EC%9B%8C%EC%8B%9C%EB%93%9C+%EB%8D%94+%ED%82%A4%EC%A6%88FRESH+HANDMADE+COSMETIC+LUSH+KOREA&media=https%3A%2F%2Flush.co.kr%3A443%2F%2Fdata%2Fgoods%2F11%2F01%2F19%2F5%2F5_detail_057.jpg'}>
                                                    <img src={'images/skin/sns-pinterest.png'}/><br/>
                                                    <span>핀터레스트</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={'https://lush.co.kr/data/skin/front/howling/img/btn/sns-kakaostory.png'}>
                                                    <img src={'images/skin/sns-kakaostory.png'}/><br/>
                                                    <span>카카오스토리</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className={'copyurl'}>
                                            <input type={"text"}
                                                   value={"https://lush.co.kr:443/goods/goods_view.php?goodsNo=5"}
                                                   className={"text field-b"}/>
                                            <button type="button" className="gd_clipboard skinbtn point2"
                                                    onClick={this.makeCopy} title="상품주소">
                                                <em className="h28">URL복사</em>
                                            </button>
                                        </div>
                                    </div>
                                    <button type={"button"} className={'close target-sns-share'} title={'닫기'}
                                            onClick={this.toggleSNSShare}>닫기
                                    </button>
                                </div>
                            </div>
                            <a id={'wishBtn'} className={'top_zzim btn-add-wish'} onClick={this.needLogin}/>

                        </div>
                        <div className={'item'}>
                            <div>
                                <a className={'scrollto'}>
                                    <span className={"review_underline"}>497</span>
                                    <span>개의 후기보기</span>
                                </a>
                            </div>
                            <div className={"mt10"}>
                                Good to Know
                                <span className={'toggle_w'}>
                                    <span className={'toggle_btn'} onClick={this.toggleTooltip}/>
                                    <div className={'toggle_content'}>
                                        <a className={'toggle_close'} onClick={this.toggleTooltip}/>
                                        <div className={'inner'}>
                                            <div className={'goodToKnow'}>
                                                <table style={{width: '100%', borderCollapse: 'collapse'}}>
                                                    <tbody>
                                                    <tr>
                                                        <td className={'goodToKnowImg'}>
                                                            <img src={'images/skin/vegan_92x60.png'}/>
                                                        </td>
                                                        <td>비건(Vegan)<br/>동물성 원료를 전혀 포함하지 않은 영국 비건협회 인증된 제품입니다.</td>
                                                    </tr>
                                                    <tr>
													<td className="goodToKnowImg">
														<img
                                                            src={"images/skin/vegetarian2_92x60.png"}
                                                            alt="베지터리언(Vegetarian)"/>
													</td>
													<td>
														베지테리언(Vegetarian)<br/>
														<span>우유, 달걀, 꿀을 제외한 동물성 원료를 포함하지 않은 영국 베지테리언 협회 인증 제품입니다.</span>
													</td>
												</tr>
                                                    <tr>
													<td className="goodToKnowImg">
														<img
                                                            src="images/skin/special-suitable_vegan_92x60.png"
                                                            alt="비건/베지터리언에게 적합한 제품(Suitable for Vegans / Suitable for Vegetarian)"/>
													</td>
													<td>
														비건/베지테리언에게 적합한 제품(Suitable for Vegans / Suitable for Vegetarians)<br/>
														<span>동물성 원료를 포함하지 않은 제품입니다.</span>
													</td>
												</tr>
                                                    <tr>
													<td className="goodToKnowImg">
														<img
                                                            src="images/skin/selfpreserving_92x60.png"
                                                            alt="셀프-프리저빙(Self-Preserving)"/>
													</td>
													<td>
														셀프-프리저빙(Self-Preserving)<br/>
														<span>자연에서 얻은 원재료로 스스로 보존 가능한 제품입니다.</span>
													</td>
												</tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                            </div>
                            <ul>
                                <li className={'price'}>
                                    <strong>판매가</strong>
                                    <div><strong>￦9,000</strong></div>
                                </li>
                                <li>
                                    <strong>상품무게</strong>
                                    <div><span>100g</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className={'order-goods option_display_area'}>
                            <div id={'option_display_item_0'}>
                                <div className={'check optionKey_0'}>
                                    <span className={'name'}>구매수량</span>
                                    <div className={'price'}>
                                        <span className={'count'}>
                                            <button type={'button'} className={'down goods-cnt'} onClick={this.cntDown}>
                                                -
                                            </button>
                                            <input type={'text'} id={'text'} className={'text goodsCount_0 js-number'}
                                                   defaultValue={1}/>
                                            <button type={'button'} className={'up goods-cnt'} onClick={this.cntUp}>
                                                +
                                            </button>
                                        </span>
                                        <em>
                                            <strong className={'option_price_display_0'}>{this.getPrice()}</strong>
                                        </em>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'end-price'}>
                            <ul>
                                <li className={'price'}>
                                    <span>총 제품 금액</span>
                                    <strong className={'goods_total_price'}>{this.getPrice()}</strong>
                                </li>
                                <li className={'total'}>
                                    <span>총 합계 금액</span>
                                    <strong className={'total_price'}>{this.getPrice()}</strong>
                                </li>
                            </ul>
                        </div>
                        <div className={'btn'}>
                            <a href={'#'} id={'cartBtn'} className={'skinbtn point1 btn-add-cart'}>
                                <h3>장바구니</h3>
                            </a>
                            <a href={'#'} className={'skinbtn point2 btn-add-order'}>
                                <h3>주문하기</h3>
                            </a>
                        </div>
                        <div className={'easy-payment'}>
                            <div id={'naverpay'}>
                                <div className={'npay_text'}/>
                                <div className={'npay_btn btn_green'} onClick={(e) => {
                                    this.textEvHandler('결제 안대염', e)
                                }}/>
                                <div className={'npay_btn wish_btn'} onClick={(e) => {
                                    this.textEvHandler('찜도 안대염', e)
                                }}/>
                                <div className={'npay_btn talk_btn'} onClick={(e) => {
                                    this.textEvHandler('톡도 안대염', e)
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Goods;