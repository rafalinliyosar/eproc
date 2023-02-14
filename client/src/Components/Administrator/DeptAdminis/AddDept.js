import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'


export default class AddDept extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;

        this.state = {

            d_name: "",
            d_head: "",
            d_amt: "",
            d_sanc: "",
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    addnewdept = async () => {
        this._isMounted = true;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({ d_name: this.state.d_name, d_head: this.state.d_head, d_amt: this.state.d_amt, d_sanc: this.state.d_sanc });
        let response = await fetch("http://localhost:8000/api/adddept", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        alert(result.response);
        console.log("result", result.response);

        this._isMounted && this.setState({
            d_name: "",
            d_head: "",
            d_amt: "",
            d_sanc: "",
        });
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    resetform = () => {
        this.setState({
            d_name: "",
            d_head: "",
            d_amt: "",
            d_sanc: "",
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
                                    <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}><strong>Add New Item</strong></div></td>

                                </tr>
                                <tr  >
                                    <td height="32">&nbsp;</td>
                                    <td height="32"><strong>Department Name	</strong></td>
                                    <td colSpan="2"><input type="text" name="d_name" value={this.state.d_name} onChange={this.handleChange} /></td>
                                </tr>
                                <tr  >
                                    <td height="32">&nbsp;</td>
                                    <td height="32"><strong>Department Head</strong></td>
                                    <td colSpan="2"><input type="text" name="d_head" value={this.state.d_head} onChange={this.handleChange} /></td>
                                </tr>
                                <tr  >
                                    <td height="32">&nbsp;</td>
                                    <td height="32"><strong>Amount Present(Rs.)	</strong></td>
                                    <td colSpan="2"><input type="text" name="d_amt" value={this.state.d_amt} onChange={this.handleChange} /></td>
                                </tr>
                                <tr  >
                                    <td height="32">&nbsp;</td>
                                    <td height="32"><strong>Amount Sanctioned(Rs.)	</strong></td>
                                    <td colSpan="2"><input type="text" name="d_sanc" value={this.state.d_sanc} onChange={this.handleChange} /></td>
                                </tr>
                                <tr  >
                                    <td height="32">&nbsp;</td>
                                    <td height="32">&nbsp;</td>
                                    <td colSpan="2"><label></label></td>
                                </tr>
                                <tr  >
                                    <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
                                        <button onClick={this.addnewdept}>ADD </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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