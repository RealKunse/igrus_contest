import React from "react";
import '../../../css/Details/Article.css'

class Article extends React.Component {
    render() {
        return (
            <section className="detail-section article">
                <div className="inner clearfix">
                    <div className="bg-image">
                        <img alt="아티클 배경 이미지" src="http://img.lush.co.kr/product/article_zerowaste.jpg"/>
                    </div>
                    <div className="article-box">
                        <div className="box-inner">
                            <p className="section-name">아티클</p>
                            <h1 className="title">지구를 위한 오늘의 욕실</h1>
                            <a className="button"
                               href="https://lush.co.kr/board/view.php?page=1&amp;bdId=article&amp;sno=219">자세히
                                보기</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Article;