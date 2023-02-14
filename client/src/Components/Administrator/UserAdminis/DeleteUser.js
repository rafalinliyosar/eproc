import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'

export default class DeleteUser extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;

        this.state = {
            userid: "U",

        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    deleteuser = async () => {
        this._isMounted = true;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({ userid: this.state.userid  });
        let response = await fetch("http://localhost:8000/api/deleteu", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        alert(result.response);
        console.log("result", result.response);

        this._isMounted && this.setState({
            userid: "U",

        });
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    resetform = () => {
        this.setState({
            userid: "U",

        });

    }
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
                <Table >
                    <tbody >
                        <tr  >
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}><strong>Delete User Details</strong></div></td>

                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>User ID</strong></td>
                            <td colSpan="2"><input type="text" name="userid" value={this.state.userid} onChange={this.handleChange} /></td>
                        </tr>

                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32">&nbsp;</td>
                            <td colSpan="2"><label></label></td>
                        </tr>
                        <tr  >
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
                                <button onClick={this.deleteuser}>DELETE USER</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={this.resetform} >R E S E T</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

