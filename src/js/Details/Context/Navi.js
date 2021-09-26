import React from "react";
import '../../../css/Details/Navi.css'

class Navi extends React.Component {
    render() {
        return (
            <div >
                <div className={'location'}>
                    <div className={'path'}>
                        <span>홈</span>
                        <div className={'navi'}>
                            <div className={'this'}>
                                <a href={'#'}>러쉬</a>
                                <div>
                                    <a href={'#'}>러쉬</a>
                                    <a href={'#'}>LUSH SPA</a>
                                </div>
                            </div>
                        </div>
                        <div className={'navi'}>
                            <div className={'this'}>
                                <a href={'#'}>샤워</a>
                                <div>
                                    <a href={'#'}>베스트</a>
                                    <a href={'#'}>신제품</a>
                                    <a href={'#'}>배쓰</a>
                                    <a href={'#'}>샤워</a>
                                    <a href={'#'}>보디</a>
                                    <a href={'#'}>페이스</a>
                                    <a href={'#'}>헤어</a>
                                    <a href={'#'}>메이크업</a>
                                    <a href={'#'}>퍼퓸</a>
                                    <a href={'#'}>기프트</a>
                                    <a href={'#'}>비건</a>
                                </div>
                            </div>
                        </div>
                        <div className={'navi'}>
                            <div className={'this'}>
                                <a href={'#'}>솝</a>
                                <div>
                                    <a href={'#'}>솝</a>
                                    <a href={'#'}>샤워 젤 & 젤리</a>
                                    <a href={'#'}>보디 컨디셔너</a>
                                    <a href={'#'}>샤워 밤</a>
                                    <a href={'#'}>샤워 오일</a>
                                    <a href={'#'}>스크럽&버터</a>
                                    <a href={'#'}>펀</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navi;