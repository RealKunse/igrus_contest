import React from 'react';
import '../../../css/Product/ProductTable.css';
import $ from 'jquery';
import ProductImage from "./ProductImage";
import SoapDB from "./SoapDB"

let PrdList = [];
for (let i = 0; i < 16; i++) {
    PrdList.push(i)
}

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SortList: document.getElementsByClassName('active-result'),
            curSort: 0,
            dataset: '',
            isAll: props.isAll ? true : false,
            CurSortList: [],
            popularList: [],
            price_asc: [],
            price_desc: [],
            reviewList: [],
            dateList: []
        }


    }

    bubbleSort = (array) => {
        for (let i = 0; i < array.length; i++) {
            let swap;
            for (let j = 0; j < array.length - 1 - i; j++) {
                if (array[j][0] > array[j + 1][0]) {
                    swap = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = swap;
                }
            }
            if (!swap) {
                break
            }
        }
        array = array.map(t => {
            return t[1]
        });
        console.log(array);
        return array;
    };

    SetIsAll = (e) => {
        for (let i = 0; i < 2; i++) {
            document.getElementsByClassName('lower-category')[0].children[i].children[0].children[0].className=  '';
        }
        if (e.target.innerText !== '전체(16)') {
            this.setState({isAll: false})
        } else {
            this.setState({isAll: true})
        }
        e.target.className = 'lc_selected';
    }

    componentDidMount() {
        let popularList = [];
        let priceList = [];
        let reviewList = [];
        let dateList = [];
        for (let i = 0; i < 16; i++) {
            popularList.push([SoapDB[i]['popular'], i]);
            priceList.push([SoapDB[i]['price'], i]);
            reviewList.push([SoapDB[i]['review'], i]);
            dateList.push([SoapDB[i]['date'], i]);
        }

        this.setState({
            popularList: this.bubbleSort(popularList),
            price_asc: this.bubbleSort(priceList),
            price_desc: this.bubbleSort(priceList).reverse(),
            reviewList: this.bubbleSort(reviewList),
            dateList: this.bubbleSort(dateList),
            CurSortList: PrdList
        });

        if(!this.state.isAll){
            document.getElementsByClassName('lower-category')[0].children[0].children[0].children[0].className = 'lc_selected';
        } else {
            document.getElementsByClassName('lower-category')[0].children[1].children[0].children[0].className = 'lc_selected';
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state.curSort)
    }

    render() {
        const SortTypeOnClick = (e) => {
            for (let i = 0; i < this.state.SortList.length; i++) {
                if (e.target === this.state.SortList[i]) {
                    this.setState({curSort: i});
                    $('.sort_var').text(this.state.SortList[i].innerText);

                    switch (i) {
                        case 0:
                            this.setState({CurSortList: PrdList});
                            break;
                        case 1:
                            this.setState({CurSortList: this.state.popularList});
                            break;
                        case 2:
                            this.setState({CurSortList: this.state.price_asc});
                            break;
                        case 3:
                            this.setState({CurSortList: this.state.price_desc});
                            break;
                        case 4:
                            this.setState({CurSortList: this.state.reviewList});
                            break;
                        case 5:
                            this.setState({CurSortList: this.state.dateList});
                            break;
                    }
                }
            }

        };


        return (
            <div className={"contents"}>
                <div className={"view"}>
                    <div className={"cg-main"}>
                        <div className={"list_hd_bx"} style={{marginTop: '77px'}}>
                            <h2>솝</h2>
                            <div className={"goods-list"}>
                                <fieldset>
                                    <div className={'align'}>
                                        <div className={"choice"}>
                                            <div>
                                                <div
                                                    className={"chosen-container chosen-container-single chosen-container-single-nosearch chosen-with-drop chosen-container-active"}>
                                                    <a className={'chosen-single chosen-sch sort_click'}
                                                       tabIndex={-1}><span className={"sort_click sort_var"}>추천순</span>
                                                        <div className={"sort_click"}><b className={"sort_click"}/>
                                                        </div>
                                                    </a>
                                                    <div className={"chosen-drop"}>
                                                        <ul className={'chosen-results'}>
                                                            <li className={"active-result result-selected"}
                                                                onClick={SortTypeOnClick}>추천순
                                                            </li>
                                                            <li className={"active-result"}
                                                                onClick={SortTypeOnClick}>판매인기순
                                                            </li>
                                                            <li className={"active-result"}
                                                                onClick={SortTypeOnClick}>낮은가격순
                                                            </li>
                                                            <li className={"active-result"}
                                                                onClick={SortTypeOnClick}>높은가격순
                                                            </li>
                                                            <li className={"active-result"}
                                                                onClick={SortTypeOnClick}>리뷰많은순
                                                            </li>
                                                            <li className={"active-result"}
                                                                onClick={SortTypeOnClick}>신제품순
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <ul className={'lower-category'}>
                            <li>
                                <span>
                                    <a onClick={this.SetIsAll}>전체(16)</a>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <a onClick={this.SetIsAll}>솝(16)</a>
                               </span>
                            </li>
                        </ul>
                        <div>
                            <div className={'item-display type-gallery type-gallery_'}>
                                <div className={'list'}>
                                    <ul className={'prdList'}>
                                        {this.state.CurSortList.map(t => {
                                            return <ProductImage key={t} id={t}/>
                                        })}


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTable;
