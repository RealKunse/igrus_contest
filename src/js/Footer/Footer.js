import React from 'react';
import '../../css/Footer/Footer.css'
import {Link} from "react-router-dom";
import $ from 'jquery';

let EmailList = [];

class Footer extends React.Component {

    render() {

        const nullPage = (e) => {
            e.preventDefault();
            alert("미구현");
            console.log("미구현")
        };

        const openBiz = () => {
            window.open('https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2018177964&apv_perm_no=', 'a', 'width=600, height=800')
        };

        const newsPopRdFirstOpen = (check) => {
            var exptext2 = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
            //var exptext2 = /[^a-z0-9@._]/gim;
            //console.log($.trim($('#receiveNewsEmail').val()));
            if (check == "banner") {
                console.log(exptext2);
                if (exptext2.test($.trim($('#receiveNewsEmail').val())) == false) {
                    alert('이메일 형식이 올바르지 않습니다.');
                } else {
                    $("#newsPopRd").fadeIn();
                    $("input[name=newsAgreeCheckBox2]").val("banner");
                }
            } else {

                if (exptext2.test($.trim($('#receiveNewsEmail2').val())) == false) {
                    alert('이메일 형식이 올바르지 않습니다.');
                } else {
                    if (!EmailList.includes($('#receiveNewsEmail2').val())) {
                        EmailList.push($('#receiveNewsEmail2').val());
                        $("#newsPopRd").fadeIn();
                        $('#receiveNewsEmail2').val("");
                        $("input[name=newsAgreeCheckBox2]").val("");
                        alert('구독신청 완료(진짜 아님)')
                    } else {
                        alert("이미 구독중입니다.")
                    }

                }
            }

            $("input[name=newsAgreeCheckBox]").val("0");

        };

        return (
            <div id={'footer'}>
                <div className={"f-icons"}>
                    <div className={"f-icons__padding"}>
                        <ul className={"f-icons__inline"}>
                            <li><span className={'f-icons__1v'}/></li>
                            <li><span className={'f-icons__eb'}/></li>
                            <li><span className={'f-icons__fat'}/></li>
                            <li><span className={'f-icons__fco'}/></li>
                            <li><span className={'f-icons__h'}/></li>
                            <li><span className={'f-icons__n'}/></li>
                        </ul>
                    </div>
                </div>

                <div className={"footer"}>
                    <div className={"inner_wrap"}>
                        <div className={"servicewrap"}>
                            <div className={"subwrap"}>
                                <div className={"subinfo"}>
                                    <div className={"flogo"}>
                                        <Link to={"/"}>
                                            <img src={"images/skin/flogo.png"} alt={"lush"} title={"lush"}/>
                                        </Link></div>
                                    <dl>
                                        <dt>고객센터 <span>1644-2357</span></dt>
                                        <dd className={"email"}>
                                            <a href={"mailto:webmaster@lush.co.kr"}>webmaster@lush.co.kr</a>
                                        </dd>
                                        <dd>상담전화 7-12~10/4 <br/>
                                            <span style={{display: 'inline-block', marginLeft: '52px'}}>유선응대 임시중단</span><br/>
                                            상담톡 10:00~16:00(평일)
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>기업선물 <span>070-4713-8543</span></dt>

                                        <dd className={"email"}>
                                            <a href={"mailto:order@lush.co.kr"}>order@lush.co.kr</a>
                                        </dd>
                                    </dl>
                                    <div className={"f-sns__wrap"}>
                                        <div className={"f-sns"}>
                                            <a href={"http://www.facebook.com/lushkorea"}>
                                                <img src={"images/skin/facebook.gif"} alt={'페이스북'} title={'페이스북'}/>
                                            </a>
                                            <a href={"https://www.instagram.com/lushkorea/"}>
                                                <img src={"images/skin/insta.gif"} alt={'인스타그램'} title={'인스타그램'}/>
                                            </a>
                                            <a href={"https://www.youtube.com/user/LUSHKOREA1"}>
                                                <img src={"images/skin/youtube.gif"} alt={'유튜브'} title={'유튜브'}/>
                                            </a>
                                            <a href={"https://pf.kakao.com/_VEbUM"}>
                                                <img src={"images/skin/plus.gif"} alt={'카카오플러스친구'} title={'카카오플러스친구'}/>
                                            </a>
                                            <a href={"https://m.post.naver.com/lushkr1"}>
                                                <img src={"images/skin/naverpost.gif"} alt={'네이버 포스트'}
                                                     title={'네이버 포스트'}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"subwrapR"}>
                                <div className={"subinfo"}>
                                    <ul className={"foot_menu"}>
                                        <li><a onClick={nullPage}>스카우트</a></li>
                                        <li><a onClick={nullPage}>회사소개</a></li>
                                        <li className={"policy"}><a onClick={nullPage}>개인정보처리방침</a></li>
                                        <li><a onClick={nullPage}>영상정보관리지침</a></li>
                                        <li><a onClick={nullPage}>이용약관</a></li>
                                        <li><a onClick={nullPage}>고객센터</a></li>
                                    </ul>
                                    <div className={"newsletter"}>
                                        <dl>
                                            <dd>
                                                <input type={"text"} id={'receiveNewsEmail2'}  placeholder={"이메일 주소를 입력해 주세요."}
                                                       maxLength={30}/>
                                                <a className={"btnicon"}onClick={newsPopRdFirstOpen}>구독하기</a>
                                            </dd>
                                            <dt>매주 금요일 오후, 구독자님을 위한 제품과 브랜드 이야기를 전해드립니다.</dt>
                                            <dt>구독은 언제든지 해지하실 수 있습니다. <a onClick={nullPage}>미리보기</a></dt>
                                        </dl>
                                    </div>
                                    <div className={'copyright'}>
                                        <p>서울특별시 서초구 서운로 138 (서초동아타워) 6층
                                            | 사이트 운영자 : 주식회사 러쉬코리아
                                            | 대표이사 : 우미령</p>
                                        <p>
                                            사업자 등록번호 : 201-81-77964
                                            <a onClick={openBiz}>사업자정보확인</a>
                                            | 통신판매업 신고번호 : 2012-서울서초-0647
                                            | 개인정보보호책임자 : 우승용
                                        </p>
                                        <div className={"copy"}>COPYRIGHT © LUSHKOREA CO. LTD. ALL RIGHTS RESERVED.</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;

