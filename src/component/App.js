import React from "react";
import axios from "axios";
import SearchInput from "./searchinput";
import ImageList from "./imageList";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            image: [] 
        }


        this.onSearchSubmit = this.onSearchSubmit.bind(this)
        }
    async onSearchSubmit(entry) {
     const  respones = await  axios.get(`https://pixabay.com/api/?key=37890019-24b6b83eef8a3cd013e88c96e&q=${entry}&image_type=photo`)
  console.log(respones.data.hits)
  this.setState({image: respones.data.hits})
    }
    render() {
        return (
            <div className="ui container" style={{marginTop:"30px"}}>
               <SearchInput onSearchSubmit={this.onSearchSubmit}/>
             <ImageList image={this.state.image} />
            </div>
        )
    }
}
export default App;