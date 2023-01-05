import { Component } from "react";
import {CheckCircleFilled,ArrowRightOutlined} from "@ant-design/icons"
import styles from "../styles/customers.module.scss"

export default class Customers extends Component {

    render() {
        return (
            <div className={styles.container}>
                <img src="https://demo.webtend.net/html/qichen/assets/images/gallery/video-1.jpg" />
                <div className={styles.section}>
                    <div className={styles.about}>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                        <p>WATCH VIDEO</p>
                    </div>
                    <h1>How Can We Made Foods For Customers</h1>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat scelerisque enim ut nulla</p>
                    <div className={styles.arrow}>
                    <CheckCircleFilled style={{color:"orangered"}}/>  <h4>Best Way to Serve Our Foods</h4>
                    </div>
                    <div className={styles.arrow}>
                    <CheckCircleFilled style={{color:"orangered"}}/>   <h4>Low Cost & Onlie Orders</h4>
                    </div>
                    <button>WATCH MORE <ArrowRightOutlined /></button>
                </div>
            </div>
        )
    }

}