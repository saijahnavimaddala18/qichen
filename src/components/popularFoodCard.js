import { Component } from "react";
import styles from "../styles/popularFoodCard.module.scss"
import {ArrowRightOutlined} from "@ant-design/icons";

export default class PopularFoodCard extends Component {
    constructor() {
        super();

    }
    handleClick = (args) => {

        console.log(args)

    }


    render() {

        const { data } = this.props
        console.log(data)

        return (
            <div className={styles.container}>
                <div>
                <img src={data.img} alt="img" />
                <p>{data.text}</p>
                <button onClick={this.handleClick.bind(this,data)}><ArrowRightOutlined /></button>

                </div>
            </div>

        )

    }



}