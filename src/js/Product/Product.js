import React from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HeadLine from "./Context/HeadLine";
import ProductTable from "./Context/ProductTable";
import $ from "jquery";

let productSelected = true; // true : 솝, false : 전체

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
        }
    }


    componentDidMount() {
        document.title = '러쉬코리아 솝'
    }

    render() {
        const PopupSortType = (e) => {
            let list = e.target.className.split(" ");
            if (list.includes("sort_click")) {
                if (this.state.popup) {
                    $('.chosen-drop').css('display', 'none');
                    this.setState({popup: !this.state.popup})
                } else {
                    $('.chosen-drop').css('display', 'block');
                    this.setState({popup: !this.state.popup})
                }
            } else if (this.state.popup) {
                $('.chosen-drop').css('display', 'none');
                this.setState({popup: false})
            }
        };

        return (
            <div id={'ProductPage'} onClick={PopupSortType}>
                <Header/>
                <div style={{marginTop: 100}}>

                    <HeadLine/>

                    <ProductTable/>

                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Product;