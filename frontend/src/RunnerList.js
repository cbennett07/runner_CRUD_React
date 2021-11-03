import Runner from "./Runner";

const RunnerList = (props)=>{
    const RunnerList = props.runners.map(runner=>{
        return <Runner key={runner.id}
                       runner={runner}
                       fetchRunners={()=>props.fetchRunners}
               />



    })

    return(<table><tr><td>{RunnerList}</td></tr></table>)
}
export default RunnerList