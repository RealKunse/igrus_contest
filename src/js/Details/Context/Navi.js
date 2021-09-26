import React from "react";
import '../../../css/Details/Navi.css'

class Navi extends React.Component {
    openFolder = (param ,e) => {
        document.querySelectorAll('.this > div')[param].style.display = 'block';
    }

    foldFolder = (param, e) =>{
        document.querySelectorAll('.this > div')[param].style.display = 'none';
    }

    openEventHandler = (param, e) => {
        e.preventDefault();
        this.openFolder(param, e)
    }

    closeEventHandler = (param, e) => {
        e.preventDefault();
        this.foldFolder(param, e)
    }

    onClickEventHandler = (param, e) => {
        e.preventDefault();
        this.closeEventHandler(param,e)
        document.querySelectorAll('.this > a')[param].innerText = e.target.innerText;
    }

    render() {
        return (
            <div >
                <div className={'location'}>
                    <div className={'path'}>
                        <span>홈</span>
                        <div className={'navi'}
                             onMouseEnter={(e) => this.openEventHandler(0,e)}
                             onMouseLeave={(e) => this.closeEventHandler(0,e)}>
                            <div className={'this'}>
                                <a href={'#'}>러쉬</a>
                                <div>
                                    <a onClick={(e) => this.onClickEventHandler(0,e)}>러쉬</a>
                                    <a onClick={(e) => this.onClickEventHandler(0,e)}>LUSH SPA</a>
                                </div>
                            </div>
                        </div>
                        <div className={'navi'}
                             onMouseEnter={(e) => this.openEventHandler(1,e)}
                             onMouseLeave={(e) => this.closeEventHandler(1,e)}>
                            <div className={'this'}>
                                <a href={'#'}>샤워</a>
                                <div>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>베스트</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>신제품</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>배쓰</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>샤워</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>보디</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>페이스</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>헤어</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>메이크업</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>퍼퓸</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>기프트</a>
                                    <a onClick={(e) => this.onClickEventHandler(1,e)}>비건</a>
                                </div>
                            </div>
                        </div>
                        <div className={'navi'}
                             onMouseEnter={(e) => this.openEventHandler(2,e)}
                             onMouseLeave={(e) => this.closeEventHandler(2,e)}>
                            <div className={'this'}>
                                <a href={'#'}>솝</a>
                                <div>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>솝</a>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>샤워 젤 & 젤리</a>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>보디 컨디셔너</a>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>샤워 밤</a>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>샤워 오일</a>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>스크럽&버터</a>
                                    <a onClick={(e) => this.onClickEventHandler(2,e)}>펀</a>
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