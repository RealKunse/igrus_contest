import React, {useState} from "react";
import '../../css/header.css';
import {Link} from "react-router-dom";


function Header() {
    const MypageMouseOn = () => {
        document.querySelector('#header .gnbwrap .gnb .nav li.mypage div').style.display = 'block';
    };
    const MypageMouseOff = () => {
        document.querySelector('#header .gnbwrap .gnb .nav li.mypage div').style.display = 'none';
    };

    const AllMenuMouseOn = () => {
        document.querySelector('li.menu01 div.all_menu').className = 'all_menu cate_over'
    };

    const AllMenuMouseOff = () => {
        document.querySelector('li.menu01 div.all_menu').className = 'all_menu'
    };

    const AllBrandMouseOn = () => {
        document.querySelector('li.menu02 div.all_brand').className = 'all_brand cate_over'
    };

    const AllBrandMouseOff = () => {
        document.querySelector('li.menu02 div.all_brand').className = 'all_brand'
    };

    const nullPage = (e) => {
        e.preventDefault();
        alert("미구현");
        console.log("미구현")
    };

    const openKakaoTalkAPI = () => {
        window.open(' https://lc-api.lunasoft.co.kr/lunachat/api-connect/@러쉬코리아/main/no_gid', 'lunachat', 'width=1024, height=800');
        alert("어디까지나 임시로 띄우는 상담창입니다!\n진짜로 로그인하지는 마세요!");
    };

    return (
        <div id={"header"}>
            <a onClick={openKakaoTalkAPI}>
                <img src={"images/kakaotalk.png"} className={"kakao_chat"} alt={"카카오톡"}/>
            </a>
            <div className={"gnbwrap"}>
                <div className={"fixed2"}>
                    <div className={"inner_wrap"}>
                        <div id={"logo"} className={" "}>
                            <h1 className={" "}>
                                <Link to={"/"} >
                                    <img src={"images/logo.png"} alt={"lush"} title={"lush"}/>
                                </Link>
                            </h1>
                        </div>
                        <div className={"gnb"}>
                            <ul className={"nav"}>
                                <li>
                                    <a href="" onClick={nullPage} className={"openMask"}>
                                        <img src={"images/icon_top_search.png"}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={""} className={"openMask"}>
                                        <img src={"images/icon_top_cart.png"}/>
                                    </a>
                                    <span>0</span>
                                </li>
                                <li className={"mypage"} onMouseEnter={MypageMouseOn} onMouseLeave={MypageMouseOff}>
                                    <a href={""} onClick={nullPage}>
                                        <img src={"images/icon_top_mypage.png"}/>
                                    </a>
                                    <div className={"pop_mypage"}>
                                        <ul>
                                            <li>
                                                <a href={""} onClick={nullPage}>로그인</a>
                                            </li>
                                            <li>
                                                <a href={""} onClick={nullPage}>회원가입</a>
                                            </li>
                                            <li>
                                                <a href={""} onClick={nullPage}>스카우트</a>
                                            </li>
                                            <li>
                                                <a href={""} onClick={nullPage}>고객센터</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>


                </div>
            </div>
            <div className={"gnb-inner"}>
                <ul className={"top_gnbmenu"}>
                    <li className={"menu01 menu_product"} style={{marginRight: 22}} onMouseEnter={AllMenuMouseOn}
                        onMouseLeave={AllMenuMouseOff}>
                        <a href={"/product"}>제품</a>
                        <div className={"all_menu"}>
                            <div className={"all-category category"}>
                                <div className={"all-category-layer category"}>
                                    <div>
                                        <ul>
                                            <li>
                                                <ul>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>베스트</a>
                                                        <ul>
                                                            <li>
                                                                <a href={""} onClick={nullPage}>주간베스트</a>
                                                            </li>
                                                            <li>
                                                                <a href={""} onClick={nullPage}>별 다섯개 후기</a>
                                                            </li>
                                                            <li>
                                                                <a href={""} onClick={nullPage}>온라인 전용</a>
                                                            </li>
                                                            <li>
                                                                <a href={""} onClick={nullPage}>국내 제조</a>
                                                            </li>
                                                            <li>
                                                                <a href={""} onClick={nullPage}>네이키드</a>
                                                            </li>
                                                            <li>
                                                                <a href={""} onClick={nullPage}>선물 고수 되기</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>신제품</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>퍼퓸 디스커버리 기프트</a></li>
                                                            <li><a href={""} onClick={nullPage}>버블 바 큐레이션</a></li>
                                                            <li><a href={""} onClick={nullPage}>비건 메이크업</a></li>
                                                            <li><a href={""} onClick={nullPage}>기프트</a></li>
                                                            <li><a href={""} onClick={nullPage}>립스틱</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>배쓰</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>배쓰 밤</a></li>
                                                            <li><a href={""} onClick={nullPage}>버블 바</a></li>
                                                            <li><a href={""} onClick={nullPage}>배쓰 오일</a></li>
                                                            <li><a href={""} onClick={nullPage}>펀</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to={"/product"}>샤워</Link>
                                                        <ul>
                                                            <li><Link to={"/product"}>솝(구현)</Link></li>
                                                            <li><a href={""} onClick={nullPage}>샤워 젤&젤리</a></li>
                                                            <li><a href={""} onClick={nullPage}>보디 컨디셔너</a></li>
                                                            <li><a href={""} onClick={nullPage}>샤워 밤</a></li>
                                                            <li><a href={""} onClick={nullPage}>샤워 오일</a></li>
                                                            <li><a href={""} onClick={nullPage}>스크럽 & 버터</a></li>
                                                            <li><a href={""} onClick={nullPage}>펀</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>보디</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>클렌저</a></li>
                                                            <li><a href={""} onClick={nullPage}>로션</a></li>
                                                            <li><a href={""} onClick={nullPage}>핸드 앤 풋</a></li>
                                                            <li><a href={""} onClick={nullPage}>마사지 바</a></li>
                                                            <li><a href={""} onClick={nullPage}>더스팅 파우더</a></li>
                                                            <li><a href={""} onClick={nullPage}>쉐이빙 크림</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>페이스</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>클렌저</a></li>
                                                            <li><a href={""} onClick={nullPage}>페이스 마스크</a></li>
                                                            <li><a href={""} onClick={nullPage}>토너</a></li>
                                                            <li><a href={""} onClick={nullPage}>모이스춰라이저</a></li>
                                                            <li><a href={""} onClick={nullPage}>프라이머</a></li>
                                                            <li><a href={""} onClick={nullPage}>립</a></li>
                                                            <li><a href={""} onClick={nullPage}>쉐이빙 크립</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>헤어</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>샴푸 바</a></li>
                                                            <li><a href={""} onClick={nullPage}>샴푸</a></li>
                                                            <li><a href={""} onClick={nullPage}>컨디셔너</a></li>
                                                            <li><a href={""} onClick={nullPage}>트리트먼트</a></li>
                                                            <li><a href={""} onClick={nullPage}>스타일링</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>메이크업</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>페이스 파우더</a></li>
                                                            <li><a href={""} onClick={nullPage}>아이 메이크업</a></li>
                                                            <li><a href={""} onClick={nullPage}>립</a></li>
                                                            <li><a href={""} onClick={nullPage}>파운데이션</a></li>
                                                            <li><a href={""} onClick={nullPage}>스킨 틴트</a></li>
                                                            <li><a href={""} onClick={nullPage}>비건 브러쉬</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>퍼퓸</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>보디 스프레이</a></li>
                                                            <li><a href={""} onClick={nullPage}>퍼퓸 라이브러리</a></li>
                                                            <li><a href={""} onClick={nullPage}>코어 레인지</a></li>
                                                            <li><a href={""} onClick={nullPage}>솔리드 퍼퓸</a></li>
                                                            <li><a href={""} onClick={nullPage}>워시카드</a></li>
                                                            <li><a href={""} onClick={nullPage}>퍼퓸 낫랩</a></li>
                                                            <li><a href={""} onClick={nullPage}>르네상스 퍼퓸</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>기프트</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>기프트 베스트</a></li>
                                                            <li><a href={""} onClick={nullPage}>1-3만원대</a></li>
                                                            <li><a href={""} onClick={nullPage}>4-6만원대</a></li>
                                                            <li><a href={""} onClick={nullPage}>7만원 이상</a></li>
                                                            <li><a href={""} onClick={nullPage}>낫랩</a></li>
                                                            <li><a href={""} onClick={nullPage}>스웨그</a></li>
                                                            <li><a href={""} onClick={nullPage}>악세사리</a></li>
                                                            <li><a href={""} onClick={nullPage}>북</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href={""} onClick={nullPage}>비건</a>
                                                        <ul>
                                                            <li><a href={""} onClick={nullPage}>배쓰</a></li>
                                                            <li><a href={""} onClick={nullPage}>샤워</a></li>
                                                            <li><a href={""} onClick={nullPage}>보디</a></li>
                                                            <li><a href={""} onClick={nullPage}>페이스</a></li>
                                                            <li><a href={""} onClick={nullPage}>헤어</a></li>
                                                            <li><a href={""} onClick={nullPage}>메이크업</a></li>
                                                            <li><a href={""} onClick={nullPage}>퍼퓸</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <button type={"button"} title={"닫기"}>
                                            <span>닫기</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className={"menu02 menu_brand"} style={{marginRight: 40}} onMouseEnter={AllBrandMouseOn}
                        onMouseLeave={AllBrandMouseOff}>
                        <a href={""}>러쉬 소개</a>
                        <div className={"all_brand"}>
                            <ul>
                                <li>
                                    <a href={""} onClick={nullPage}>러쉬 소개</a>
                                    <ul>
                                        <li><a href={""} onClick={nullPage}>러쉬 역사</a></li>
                                        <li><a href={""} onClick={nullPage}>이념과 가치</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href={""} onClick={nullPage}>러쉬 이야기</a>
                                </li>
                                <li>
                                    <a href={""} onClick={nullPage}>채러티 팟</a>
                                </li>
                                <li>
                                    <a href={""} onClick={nullPage}>커뮤니티</a>
                                    <ul>
                                        <li><a href={""} onClick={nullPage}>젤러쉬</a></li>
                                        <li><a href={""} onClick={nullPage}>덕찌</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href={""} onClick={nullPage}>서명 캠페인</a>
                                </li>
                                <li><a href={""} onClick={nullPage}>기업 선물</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className={"menu03"} style={{marginRight: 20}}>
                        <a href={""} onClick={nullPage}>매장 안내</a>
                    </li>
                    <li className={"menu04"} style={{marginRight: 13}}>
                        <a href={""} onClick={nullPage}>스파</a>
                    </li>
                    <li className={"menu05"}>
                        <a href={""} onClick={nullPage}>이벤트</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;