import { Component } from "react";
import styles from "../styles/menus.module.scss";
import { StarFilled } from "@ant-design/icons";


export default class menus extends Component {
    render() {
        return (
            <div >
                <div className={styles.bestmenu} >
                    <div>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/prev-arrow.png" />
                        <p>BEST FOOD MENU</p>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/next-arrow.png" />
                    </div>
                    <p>Choose Your Best Menus</p>
                </div>
                <div className={styles.menu}>
                    <div>
                        <img src="https://demo.webtend.net/html/qichen/assets/images/menu/menu-single-1.jpg" />
                    </div>


                    <div>
                        <div className={styles.roast}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-1.png" />
                            <div>
                                <div>
                                    <p>Hamburger</p>
                                    <span></span>
                                    <p>$25</p>
                                </div>
                                <h5>Roasted langoustine, consommé</h5>
                                <h6><StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />  (5k Reviews)</h6>
                            </div>
                        </div>


                        <div className={styles.roast}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-2.png" />
                            <div>
                                <div>
                                    <p>Pizza</p>
                                    <span></span>
                                    <p>$25</p>
                                </div>
                                <h5>Roasted langoustine, consommé</h5>
                                <h6><StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />  (5k Reviews)</h6>
                            </div>
                        </div>


                        <div className={styles.roast}>
                            <img src="	https://demo.webtend.net/html/qichen/assets/images/menu/thumb-3.png" />
                            <div>
                                <div>
                                    <p>Baked Chicken Wings</p>
                                    <span></span>
                                    <p>$25</p>
                                </div>
                                <h5>Roasted langoustine, consommé</h5>
                                <h6><StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />  (5k Reviews)</h6>
                            </div>
                        </div>


                        <div className={styles.roast}>
                            <img src="https://demo.webtend.net/html/qichen/assets/images/menu/thumb-4.png" />
                            <div>
                                <div>
                                    <p>Seafood Pizza</p>
                                    <span></span>
                                    <p>$25</p>
                                </div>
                                <h5>Roasted langoustine, consommé</h5>
                                <h6><StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />
                                    <StarFilled style={{ color: "orangered" }} />  (5k Reviews)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}