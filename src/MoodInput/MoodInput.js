// imports
import { Component } from 'react';
import MoodList from '../MoodList/MoodList';

// class
class MoodInput extends Component{
    state = {
        currentMood: '',
        moods: []
    }//end state

    addMood = () => {
        this.setState({
            moods: [...this.state.moods, this.state.currentMood]
        })
    }//end addMood

    handleChangeFor = (event) => {
        this.setState({
            currentMood: event.target.value
        })
    }//end handleChangeFor

    render(){
        return(
            <div>
                <h2>Change Mood?</h2>
                <input type="text" placeholder="current mood" onChange={(event)=> this.handleChangeFor(event)}></input>
                <button onClick={this.addMood}>Apply Mood</button>
                <p>{JSON.stringify(this.state)}</p>
                <MoodList moods={this.state.moods}/>
            </div>
        ) // end return
    } // end render
} // end class
// export 
export default MoodInput;