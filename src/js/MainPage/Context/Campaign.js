import React from "react";
import '../../../css/Context/Campaign.css'
import {Link} from "react-router-dom";

const Campaign = () => {
    return (
        <div className={"main_wrap03"}>
            <div className={'left'}>
                <Link to={"/"}>
                    <img src={'images/AnimalExperiment.jpg'} alt={'동물대체시험법 서명 캠페인'} title={'동물대체시험법 서명캠페인'}/>
                </Link>
            </div>
            <div className={'right'}>
                <div className={'right1'}>
                    <Link to={"/"}>
                        <img src={'images/SoftSaltRoll.gif'} alt={'스크럽'} title={'스크럽'}/>
                    </Link>
                </div>
                <div className={'right2'}>
                    <p>
                        <Link to={"/"}>
                            <img src={'images/SeptemberReview.jpg'} alt={'스크럽'} title={'스크럽'}/>
                        </Link>
                    </p>
                    <p>
                        <Link to={"/"}>
                            <img src={'images/Corona19.jpg'} alt={'스크럽'} title={'스크럽'}/>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Campaign;