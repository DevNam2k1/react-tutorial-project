import React from "react";
import Project from "./Project";
import Form from "./Form";

class Welcome extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500 ' },
            { id: 'abcJob2', title: 'Testers', salary: '400 ' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000 ' }
        ]
    }

    addNewJob = (job) => {
        console.log("Check input", job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }


    render(){
        return (
            <>
        <Form addNewJob={this.addNewJob}/>

        <Project name={this.state.firstName}
                    age={'25'}
                    address={'Ha noi'}
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteJob}
                />
        </>
        )
        

    }

}

export default Welcome;