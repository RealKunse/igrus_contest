import React from 'react';
import '../../../css/Context/NewGood.css'
import $ from "jquery";
import {Link} from "react-router-dom";

class NewGood extends React.Component {
    componentDidMount() {
        $(window).scroll((e) => {
                $('.main_wrap04 p.img').css('margin-top',window.scrollY / -15  + 'px')
            }
        )
    }

    render() {
        return (
            <div className={"main_wrap04"}>
                <div className={"inner_wrap"}>
                    <dl>
                        <dt>NEW 탱글드 헤어 트리트먼트</dt>
                        <dd>전통 악기에서 영감을 받은
                            두피 트리트먼트로,
                            기분 좋은 낮잠에 빠져들듯
                            부드럽고 편안한 시간을 선사합니다.</dd>
                    </dl>
                    <p className={'img spa-bn-slide slick-initialized'}>
                        <div>
                            <div className={"slick-track"}>
                                <Link to={"/"}>
                                    <img src={"images/NewGoods.gif"} alt={"NEW 탱글드 헤어"}/>
                                </Link>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        );
    }
}

export default NewGood