import './App.css';
import RunnerList from "./RunnerList";
import {Component} from "react";
import axios from "axios";
import CreateRunner from "./CreateRunner";

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            runners: [],
        }
    }
    componentDidMount() {
        this.fetchRunners();
    }

    fetchRunners(){
        return axios.get("http://localhost:3001/runner",()=>{})
            .then(response=>this.setState({runners:response.data}));
    }

    render() {
        return (
            <div className="App">
                <table>
                    <tr>
                        <td>RUNNER LIST
                            <RunnerList runners={this.state.runners}
                                        fetchRunners={()=>this.fetchRunners()}
                    /></td>
                        <td>
                            CREATE NEW RUNNER
                            <CreateRunner fetchRunners={()=>this.fetchRunners()}/>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default App;
