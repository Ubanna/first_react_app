import React, {Component} from 'react'
import Header from './Header';
import likesStyles from "../styles/likes.module.css";


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
                <h1 className={likesStyles.title}>Welcome to my Likes App</h1>
                <div className={likesStyles.container}>
                <h3>Likes: {this.state.likes}</h3>
                <button className={likesStyles.button} onClick={this.increaseLikes}>Like<i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
                <button className={likesStyles.button} onClick={this.decreaseLikes}>Unlike<i class="fa fa-thumbs-down" aria-hidden="true"></i>
</button>
                <button className={likesStyles.button} onClick={this.resetLikes}>Reset<i class="fa fa-power-off" aria-hidden="true"></i></button>
         
                </div>

            </div>
        )

    }
}
export default Likes;