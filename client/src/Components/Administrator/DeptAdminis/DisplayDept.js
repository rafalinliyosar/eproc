import React from 'react';
import { Table,Button } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'


export default class DisplayDept extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;
        this.state = {
            records: [],
        };
    }

    async componentDidMount() {
        this._isMounted = true;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let response = await fetch("http://localhost:8000/api/displaydept", {
			method: "POST",
			headers: myHeaders,
		}).catch((error) => console.log("error", error));
        
        const result = await response.json();
        // console.log("result", result.response);
        this.setState({
            records: result.response,
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    };

    render() {
        return (
            <div>
                   <table  >
                        <tbody>
                            <tr>
                                <td width="140" ><SideBar/></td>
                                <td>
                                    <img src="images/headpic.gif" alt={"a"} width="640" height="98" />
                                </td>
                            </tr>
                       <tr>
                       <td width="140" ></td>               
                       <td>
                <Table striped bordered hover size="sm"  >
                <tbody>
                        <tr>
                            <th width="50">Department Name</th>
                            <th width="140">Department Head</th>
                            <th>Amount <br/>Present(Rs)</th>
                            <th>Amount <br /> Sanctioned(Rs)</th>
                        </tr>
                    
                    
                        {this.state.records.map((record,key) => {
                            return (
                                <tr key={key} >
                                    <td>{record.d_name}</td>
                                    <td>{record.d_head}</td>
                                    <td>{record.d_amt}</td>
                                    <td>{record.d_sanc}</td>

                                     <td>
                                        <Button variant="info" onClick={() => this.editRecord(record.id)}>
                                            Edit
												</Button>
                                    </td>
                                    {/*
                                    <td>
                                        <Button variant="danger" onClick={() => this.deleteRecord(record.id)}>
                                            Delete
												</Button>
                                    </td> */}
                                </tr>
                            );
                        })}
                          <tr  >
                            <td colSpan="7" height="39"><div style={{ textAlign: 'center' }}>
                                <button onClick={() => history.goBack()}>BACK</button>   </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                </td></tr>
                        </tbody>
                    </table>

            </div>
        );
    }
}