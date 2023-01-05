import { Component } from "react";
import styles from "../styles/chef.module.scss";
import {
    CheckCircleFilled,
    ArrowRightOutlined
} from "@ant-design/icons";

export default class Chef extends Component {
    render() {
        return (
            <div className={styles.master}>




                <div className={styles.chef}>




                    <div className={styles.kind}>
                        <div >
                            <img src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                            <p>BEST FOOD MENU</p>
                        </div>
                        <h5>Meet Our Exclusive & Master Chefs</h5>
                        <div>
                            <p><CheckCircleFilled style={{color: "orangered",fontSize:"1.5rem"}} /></p>
                            <h6>25 Years of Experience in Restaurant Services in USA</h6>
                        </div>
                        <div>
                            <p><CheckCircleFilled style={{color: "orangered",fontSize:"1.5rem"}} /></p>
                            <h6>Any Kind Of Food Made For Customer and So Much Yamee $ Testy</h6>
                        </div>
                        <p>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                        <button>BECOME A CHEF<ArrowRightOutlined /></button>
                    </div>





                    <div className={styles.ser}>
                        <div>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-1.jpg" />
                        </div>
                        <div>
                            <img src="	https://demo.webtend.net/html/qichen/assets/images/team/chef-2.jpg" />
                        </div>
                        <div>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-3.jpg" />
                        </div>
                        <div>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-4.jpg" />
                        </div>
                        <div>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/team/chef-5.jpg" />
                        </div>
                        <div>
                            <img src="	https://demo.webtend.net/html/qichen/assets/images/team/chef-6.jpg" />
                        </div>
                    </div>





                </div>



            </div>
        )
    }
}