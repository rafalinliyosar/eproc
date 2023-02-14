import React from 'react';
import { Table,Button } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'

export default class DisplayUser extends React.Component {
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

        let response = await fetch("http://localhost:8000/api/displayuser", {
			method: "POST",
			headers: myHeaders,
		}).catch((error) => console.log("error", error));
        
        const result = await response.json();
        console.log("result", result.response);
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
                            <th width="50">id</th>
                            <th width="140">Name</th>
                            <th>Location</th>
                            {/* <th colSpan="2">Actions</th> */}
                        </tr>
                    
                    
                        {this.state.records.map((record,key) => {
                            return (
                                <tr key={key} >
                                    <td>{record.userid}</td>
                                    <td>{record.name}</td>
                                    <td>{record.city}</td>
                                     <td>
                                        <Button variant="info" onClick={() => this.editRecord(record.id)}>
                                            Edit
												</Button>
                                    </td>
                                  
                                </tr>
                            );
                        })}

                        <tr  >
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
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