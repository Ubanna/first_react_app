import React, {Component} from 'react'
import Header from './Header';


class Likes extends Component {
    state = {
        likes: 0,
        
    }
    increaseLikes =()=> {
        this.setState((prevState) => {
            return {
                likes:prevState.likes + 1
            }
        })
    }

    decreaseLikes =()=> {
        this.setState((prevState) => {
            if (prevState.likes >= 1) {
            return {
                likes:prevState.likes - 1
            }} else {
                return false
            }
        })
    }

    resetLikes =()=> {
        this.setState({likes:0})} 

    render(){
        return(
            <div>
                <Header title="MY LIKES APP"/>
                <h1>Welcome to my Likes App</h1>
                <h3>Likes: {this.state.likes}</h3>
                <button onClick={this.increaseLikes}>Like</button>
                <button onClick={this.decreaseLikes}>Unlike</button>
                <button onClick={this.resetLikes}>Reset</button>

            </div>
        )

    }
}
export default Likes;