import { Component } from "react";
import styles from "../styles/working.module.scss";

export default class Working extends Component {
    render() {
        return (
            <div className={styles.book}>
                <div>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/contact/contact-1.jpg" />
                </div>
                <div className={styles.res}>
                    <div className={styles.text}>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                        <p>BOOKING TABLE</p>
                    </div>
                    <h1>Make A Reservations</h1>
                    <h6>Sit amet consectetur adipiscing elitsue risus mauris quam adipiscing phasellus aene ante orcirat</h6>

                    <div  className={styles.elits}>
                        <input type={"text"}  placeholder="Person"/>
                        <input type={"date"} />
                        <select>
                            <option>Reservatiuon Time</option>
                            <option>12.00 Am</option>
                            <option>01.00 Am</option>
                            <option>02.00 Am</option>
                            <option>03.00 Am</option>
                            <option>04.00 Am</option>
                            <option>05.00 Am</option>
                            <option>06.00 Am</option>
                        </select>
                        <button>BOOK A TABLE </button>

                    </div>
                </div>
            </div>
        )
    }
}