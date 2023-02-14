import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'

export default class AddSupp extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;

        this.state = {
            supp_id: "S",
            supp_name: "",
            addr: "",
            phone: "",
            email: "",
            supp_type: "",
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    addnewsupp = async () => {
        this._isMounted = true;

        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        var body = JSON.stringify({ supp_id:this.state.supp_id, supp_name:this.state.supp_name, addr:this.state.addr, phone:this.state.phone, email:this.state.email, supp_type:this.state.supp_type});
        let response = await fetch("http://localhost:8000/api/addsupp", {
            method: "POST",
            headers: myHeaders,
            body: body,
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        alert(result.response);
        console.log("result", result.response);



        this._isMounted && this.setState({
            supp_id: "S",
            supp_name: "",
            addr: "",
            phone: "",
            email: "",
            supp_type: "",
        });
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    resetform = () => {
        this.setState({
            supp_id: "S",
            supp_name: "",
            addr: "",
            phone: "",
            email: "",
            supp_type: "",
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
                                <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}><strong>Add New Supplier Details</strong></div></td>

                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32"><strong>Supplier ID</strong></td>
                                <td colSpan="2"><input type="text" name="supp_id" value={this.state.supp_id} onChange={this.handleChange} /></td>
                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32"><strong>Supplier Name</strong></td>
                                <td colSpan="2"><input type="text" name="supp_name" value={this.state.supp_name} onChange={this.handleChange} /></td>
                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32"><strong>Address</strong></td>
                                <td colSpan="2"><input type="text" name="addr" value={this.state.addr} onChange={this.handleChange} /></td>
                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32"><strong>Phone no</strong></td>
                                <td colSpan="2"><input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} /></td>
                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32"><strong>Email</strong></td>
                                <td colSpan="2"><input type="text" name="email" value={this.state.email} onChange={this.handleChange} /></td>
                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32"><strong>Supplier Type</strong></td>
                                <td colSpan="2"><input type="text" name="supp_type" value={this.state.supp_type} onChange={this.handleChange} /></td>
                            </tr>
                            <tr  >
                                <td height="32">&nbsp;</td>
                                <td height="32">&nbsp;</td>
                                <td colSpan="2"><label></label></td>
                            </tr>
                            <tr  >
                                <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
                                    <button onClick={this.addnewsupp}>ADD ITEM</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={this.resetform} >R E S E T</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => history.goBack()}>BACK</button>   </div></td>

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