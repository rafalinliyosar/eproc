import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../history';
import SideBar from '../SideBar'


export default class ViewEmail extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            records: [],
        };
    }

    async componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let response = await fetch("http://localhost:8000/api/viewemail", {
			method: "POST",
			headers: myHeaders,
		}).catch((error) => console.log("error", error));
        
        const result = await response.json();
        // console.log("result", result.response);
        this.setState({
            records: result.response,
        });
    }

   

    render() {
        return (
              <table  >
                    <tbody>
                        <tr>
                            <td width="140" ><SideBar /></td>
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
                            <th width="140"><div style={{ textAlign: 'left' }}>Name</div></th>
                            <th width="230"><div style={{ textAlign: 'left' }}>Email Address</div></th>
                            <th>Department Name</th>
                            
                        </tr>
                    
                    
                        {this.state.records.map((record,key) => {
                            return (
                                <tr key={key} >
                                    <td>{record.name}</td>
                                    <td>{record.email}</td>
                                    <td>{record.d_name}</td>

                                    
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
        );
    }
}