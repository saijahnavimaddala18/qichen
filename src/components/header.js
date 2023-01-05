import { Component } from "react";
import { PhoneOutlined, DownOutlined, SearchOutlined } from "@ant-design/icons";
import styles from "../styles/header.module.scss";


class Header extends Component {
    render() {
        return (
           <div className={styles.contai}>
             <div className={styles.container}>
                <div >
                    <img className={styles.image} src="https://demo.webtend.net/html/qichen/assets/images/logo/logo-white.png" />
                    <ul type="none">
                        <li>Home <DownOutlined /></li>
                        <li>Menu <DownOutlined /></li>
                        <li>About <DownOutlined /></li>
                        <li>Shop <DownOutlined /></li>
                        <li>Blog <DownOutlined /></li>
                        <li>Pages <DownOutlined /></li>
                        <li><SearchOutlined /></li>


                    </ul>
                </div>
                <div>
                    <p> <PhoneOutlined />  000 (123) 456 89</p>
                    <button>Book A  Table</button>
                </div>
            </div>
     
           </div>
            )
    }
}
export default Header;