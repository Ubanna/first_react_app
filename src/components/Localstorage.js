import React, {Component} from 'react'
import Header from '../components/Header';
import lsStyles from "../styles/ls.module.css";


class LocalStorage extends Component {
    
    render(){
     const person = {
         name: "Ubanna",
         age: "16"
     }
     const personToJSON = JSON.stringify(person)
     localStorage.setItem("newPerson", personToJSON);
     const getPerson = localStorage.getItem("newPerson")
     const personParse = JSON.parse(getPerson)
        return(
          <div>
               <Header title="LocalStorage" />
              <p>The stringified version is: </p>
            <h1 className={lsStyles.text}>{getPerson}</h1>

            <p>The parsed version is:</p>
            <h3 className={lsStyles.text}>{personParse.name} and {personParse.age}</h3>

            </div>
        )

    }

}
export default LocalStorage;