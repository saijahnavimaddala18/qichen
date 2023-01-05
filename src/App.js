import {Component} from "react"
import Header from "./components/header";
import Popular from "./components/popular";
import Banner from "./components/banner";
import Qichen from "./components/qichen";
import Menus from "./components/menus";
import Chef from "./components/chef";
import Customers from "./components/customers";
import Hour from "./components/hour";
import Working from "./components/working";
import Feedback from "./components/feedback";
import Images from "./components/images";
import Footer from "./components/footer";


class App extends Component{
  render(){
    return(
    <div>
      <Header/>
      <Banner/>
      <Popular/>
      <Qichen/>
      <Menus/>
      <Chef/>
      <Customers/>
      <Hour/>
      <Working/>
      <Feedback/>
      <Images/>
      <Footer/>
    </div>
    )
  }
}
export default App;