import { Component } from "react";
import styles from "../styles/qichen.module.scss"
import {ArrowRightOutlined} from "@ant-design/icons";

export default class Qichen extends Component {
    render() {
        return (
            <div className={styles.ante}>   
                <div className={styles.diame}>
                    <div className={styles.risu}>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                        <p>ABOUT QICHEN</p>
                    </div>
                    <h1>The Best Tasty & Yamee Food and Chief Based on Italiano</h1>
                    <p>Sit amet consectetur adipiscing elitsue risus mauris quam neque adipiscing phasellus aenean ante orcirat scelerisque enim ut nulla vestibulum velvitae ut at elementum mauris, etiam ornare diame</p>

                    <button>LEARN MORE <ArrowRightOutlined /></button>
                </div>

                <div className={styles.quam}>
                    <div><img src="https://demo.webtend.net/html/qichen/assets/images/about/image-1.jpg" /></div>
                    <div><img src="https://demo.webtend.net/html/qichen/assets/images/about/image-2.jpg" /></div>
                </div>
            </div>
        )
    }
}