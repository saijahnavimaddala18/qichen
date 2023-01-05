import {Component} from "react"
import PopularFoodCard from "./popularFoodCard";
import styles from "../styles/popular.module.scss";


const data = [
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-1.png",
        text: "Pizza"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-2.png",
        text: "Burger"
    },

    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-3.png",
        text: "Bread"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-4.png",
        text: "Sea Food"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-5.png",
        text: "Coffe"
    },
    {
        img: "https://demo.webtend.net/html/qichen/assets/images/icon/icon-6.png",
        text: "Chicken"
    }
]


class Popular extends Component {
    constructor() {
        super();
        this.state = {
            value: data

        }

    }
    render() {

        return (
            <div className={styles.container}>
                <div className={styles.our}>
                    <img src="https://demo.webtend.net/html/qichen/assets/images/white-prev-arrow.png" />
                <p>OUR POPULAR FOOD</p>
                <img src="https://demo.webtend.net/html/qichen/assets/images/white-next-arrow.png"/>
                </div>
                <h1>Best Category Foods Menu</h1>
                <div className={styles.foodCourt}>
                {this.state.value.map(e => 
                {
                    return(

                    <PopularFoodCard data={e}/>

                )})}
                </div>
                <div className={styles.para}>
                    <p>Need any Special Food or Any Birthday Cakes? Order Now</p>
                </div>
            </div >

        )

    }



}

export default Popular