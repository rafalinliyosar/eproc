import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'

export default class ChangePass extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;

        this.state = {
            userid: "U",
            password: "",
            password1: "",
            password2: "",
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    changepassw = async () => {
        this._isMounted = true;

        if (this.state.password1 !== this.state.password2) {
            console.log("pass");
            alert("new password does not match");
            return;
        }

        else {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var body = JSON.stringify({ userid: this.state.userid,password: this.state.password, password1: this.state.password1 });
            let response = await fetch("http://localhost:8000/api/changepass", {
                method: "POST",
                headers: myHeaders,
                body: body
            }).catch((error) => console.log("error", error));

            const result = await response.json();
            alert(result.response);
            console.log("result", result.response);

            this._isMounted && this.setState({
                userid: "U",
                password: "",
                password1: "",
                password2: "",
            });
        }
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    resetform = () => {
        this.setState({
            userid: "U",
            password: "",
            password1: "",
            password2: "",
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
                            <td height="32"><strong>Type your User id	</strong></td>
                            <td colSpan="4">
                                <div style={{ textAlign: 'right' }}>
                                    <input type="text" name="userid" value={this.state.userid} onChange={this.handleChange} />
                                </div></td>
                        </tr>

                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Type your current password	</strong></td>
                            <td colSpan="4">
                                <div style={{ textAlign: 'right' }}>
                                    <input type="text" name="password" value={this.state.password} onChange={this.handleChange} />
                                </div></td>
                        </tr>

                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Type a new password	</strong></td>
                            <td colSpan="4">
                                <div style={{ textAlign: 'right' }}>
                                    <input type="text" name="password1" value={this.state.password1} onChange={this.handleChange} />
                                </div></td>
                        </tr>

                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Type the password again to confirm</strong></td>
                            <td colSpan="4">
                                <div style={{ textAlign: 'right' }}>
                                    <input type="text" name="password2" value={this.state.password2} onChange={this.handleChange} />
                                </div>
                            </td>
                        </tr>

                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32">&nbsp;</td>
                            <td colSpan="2"><label></label></td>
                        </tr>
                        <tr  >
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
                                <button onClick={this.changepassw}>Change Password</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

