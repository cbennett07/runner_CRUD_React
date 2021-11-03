import axios from "axios";
import {Component} from "react";

class CreateRunner extends Component {
    constructor (props){
        super(props);

        this.state={
            name:'',
            bib:'',
            hours:'',
            minutes:'',
            seconds:'',
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
    handleClickAddRunner(){
        const myRunner = {
            name:this.state.name,
            bib:this.state.bib,
            hours:Number.parseInt(this.state.hours),
            minutes:Number.parseInt(this.state.minutes),
            seconds:Number.parseInt(this.state.seconds),
        }
        const myEmpty = {
            name:'',
            bib:'',
            hours:'',
            minutes:'',
            seconds:'',
        }
        this.setState(myEmpty);
        console.log(myRunner);
        axios.post("http://localhost:3001/runner",myRunner,()=>{})
            .then(this.props.fetchRunners(),()=>{})
            .finally(this.props.fetchRunners(),()=>{})

    }

    render() {
        return (
            <table border={"1"}>
                <tr>
                    <td>
                        <label htmlFor={"txtName"}>Runner Name:</label>
                        <input type="text"
                               value={this.state.name}
                               id={"txtName"}
                               onChange={(e) => this.handleOnNameChange(e)}

                        /></td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor={"txtBib"}>Bib:</label>
                        <input type="text"
                               value={this.state.bib}
                               id={"txtBib"}
                               size={"4"}
                            onChange={(e)=>{this.handleOnBibChange(e)}}

                        /></td>
                </tr>
                <tr>
                    <td>Best Time:</td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor={"txtHours"}>Hours:</label>
                        <input type="text"
                               value={this.state.hours}
                               id={"txtHours"}
                               size={"4"}
                            onChange={(e)=>this.handleOnHoursChange(e)}
                        /> :
                        <label htmlFor={"txtMinutes"}>Minutes:</label>
                        <input type="text"
                               value={this.state.minutes}
                               id={"txtMinutes"}
                               size={"4"}
                            onChange={(e)=>this.handleOnMinutesChange(e)}
                        /> :
                        <label htmlFor={"txtSeconds"}>Seconds:</label>
                        <input type="text"
                               value={this.state.seconds}
                               id={"txtSeconds"}
                               size={"4"}
                            onChange={(e)=>this.handleOnSecondsChange(e)}
                        /></td>
                </tr>
                <tr>
                    <td>
                        <button value={this.state.id}
                                onClick={() => this.handleClickAddRunner()}
                                onChange={() => this.handleClickAddRunner()}
                        >Add Runner
                        </button>
                    </td>
                </tr>
            </table>
        )

    }
}

export default CreateRunner