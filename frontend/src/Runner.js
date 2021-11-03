import App from "./App";
import RunnerList from "./RunnerList";
import {Component} from "react";
import axios from "axios";

class Runner extends Component  {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.runner.id,
            name: this.props.runner.name,
            bib: this.props.runner.bib,
            hours: this.props.runner.hours,
            minutes: this.props.runner.minutes,
            seconds: this.props.runner.seconds,

        }
    }

    handleOnNameChange(e){
        this.setState({name:e.target.value});
    }
    handleOnBibChange(e){
        this.setState({bib:e.target.value});
    }
    handleOnHoursChange(e){
        this.setState({hours:e.target.value});
    }
    handleOnMinutesChange(e){
        this.setState({minutes:e.target.value});
    }
    handleOnSecondsChange(e){
        this.setState({seconds:e.target.value});
    }
    handleClickUpdateRunner(){
        const myRunner = {
            name:this.state.name,
            bib:this.state.bib,
            hours:Number.parseInt(this.state.hours),
            minutes:Number.parseInt(this.state.minutes),
            seconds:Number.parseInt(this.state.seconds),
        }
        console.log(myRunner);
        axios.patch("http://localhost:3001/runner/" + this.state.id,myRunner,()=>{})
            .then(this.props.fetchRunners(),()=>{});
    }
    handleClickDeleteRunner(){
        axios.delete("http://localhost:3001/runner/" + this.state.id,()=>{})
            .then(this.props.fetchRunners(),()=>{});
    }

        render() {
            return (
                <table border={"1"}>id: {this.state.id}
                    <tr><td>
                    <label htmlFor={"txtName" + this.state.id}>Runner Name:</label>
                    <input type="text"
                           value={this.state.name}
                           id={"txtName" + this.state.id}
                            onChange={(e)=>this.handleOnNameChange(e)}

                    /></td></tr>
                    <tr><td>
                    <label htmlFor={"txtBib" + this.state.id}>Bib:</label>
                    <input type="text"
                           value={this.state.bib}
                           id={"txtBib" + this.state.id}
                           size={"4"}
                           onChange={(e)=>{this.handleOnBibChange(e)}}

                    /></td></tr>
                    <tr><td>Best Time:</td></tr>
                    <tr><td>
                    <label htmlFor={"txtHours" + this.state.id}>Hours:</label>
                    <input type="text"
                           value={this.state.hours}
                           id={"txtHours" + this.state.id}
                           size={"4"}
                           onChange={(e)=>this.handleOnHoursChange(e)}
                    /> :
                    <label htmlFor={"txtMinutes" + this.state.id}>Minutes:</label>
                    <input type="text"
                           value={this.state.minutes}
                           id={"txtMinutes" + this.state.id}
                           size={"4"}
                           onChange={(e)=>this.handleOnMinutesChange(e)}
                    /> :
                    <label htmlFor={"txtSeconds" + this.state.id}>Seconds:</label>
                    <input type="text"
                           value={this.state.seconds}
                           id={"txtSeconds" + this.state.id}
                           size={"4"}
                           onChange={(e)=>this.handleOnSecondsChange(e)}
                    /></td></tr>
                    <tr><td>
                        <button value={this.state.id}
                                onClick={()=>this.handleClickUpdateRunner()}
                        >Update Runner</button>

                    </td></tr>
                    <tr><td>
                        <button value={this.state.id}
                                onClick={()=>this.handleClickDeleteRunner()}
                        >Delete Runner</button>
                    </td></tr>

                </table>
            );
        }

}
export default Runner;