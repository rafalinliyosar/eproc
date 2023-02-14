import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'

export default class AddUser extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;

        this.state = {
            userid: "U",
            password: "",
            name: "",
            email: "",
            phone: "",
            desig: "",
            d_name: "",
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    addnewuser = async () => {
        this._isMounted = true;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({userid:this.state.userid, password:this.state.password, name:this.state.name, email:this.state.email, phone:this.state.phone, desig:this.state.desig, d_name:this.state.d_name });
        let response = await fetch("http://localhost:8000/api/adduser", {
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
            name: "",
            email: "",
            phone: "",
            desig: "",
            d_name: "",
        });
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    resetform = () => {
        this.setState({
            userid: "U",
            password: "",
            name: "",
            email: "",
            phone: "",
            desig: "",
            d_name: "",
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
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}><strong>Add New User Details</strong></div></td>

                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>User ID</strong></td>
                            <td colSpan="2"><input type="text" name="userid" value={this.state.userid} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Password </strong></td>
                            <td colSpan="2"><input type="text" name="password" value={this.state.password} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>User Name</strong></td>
                            <td colSpan="2"><input type="text" name="name" value={this.state.name} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Email</strong></td>
                            <td colSpan="2"><input type="text" name="email" value={this.state.email} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Phone number</strong></td>
                            <td colSpan="2"><input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Designation</strong></td>
                            <td colSpan="2"><input type="text" name="desig" value={this.state.desig} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Department)</strong></td>
                            <td colSpan="2"><input type="text" name="d_name" value={this.state.d_name} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32">&nbsp;</td>
                            <td colSpan="2"><label></label></td>
                        </tr>
                        <tr  >
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
                                <button onClick={this.addnewuser}>ADD USER</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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