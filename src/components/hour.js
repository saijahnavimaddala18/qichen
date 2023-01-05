import { Component } from "react"
import styles from "../styles/hour.module.scss"

export default class Hour extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.section}>
                    <div className={styles.hour}>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                        <p>WORKING HOUR</p>
                    </div>
                    <h1>Enjoy Our Foods From 6 Days In a Week</h1>
                    <div className={styles.timings}>

                        <div className={styles.mon}>
                            <p>Monday - Friday</p>
                            <span></span>
                            <p>09am-6pm</p>
                        </div>

                        <div className={styles.mon}>
                            <p>Saturday</p>
                            <span></span>
                            <p>08am-7pm</p>
                        </div>

                        <div className={styles.mon}>
                            <p>Sunday</p>
                            <span></span>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>
                <img src="https://demo.webtend.net/html/qichen/assets/images/bg/hours-bg-1.jpg" />
            </div>
        )
    }
}