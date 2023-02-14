import React, { Component } from 'react'
import SideBar from '../SideBar';
import history from '../../history';

export default class PrDetail extends Component {
    constructor(props) {
        super(props);
        console.log("props", props);
        this.state = {
            records: [],
            isButtonDisabled: false
        };
    }

    async componentDidMount() {


        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ form_no: this.props.location.form_no });
        console.log("prop val", this.props.location.form_no)
        let response = await fetch("http://localhost:8000/api/prdetails", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        // console.log("result", result.response);

        this.setState({
            records: result.response
        });
    }

    approve = async (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ id: id });
        console.log("id", id);
        let response = await fetch("http://localhost:8000/api/approvereg", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        console.log("result", result.response);
        this.setState({
            isButtonDisabled: true
          });

        // alert("done");


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
                        <td width="140" >&nbsp;</td>
                        <td>
                            <div>
                                <br />
                                {this.state.records.map((record, key) => {
                                    return (
                                        <table key={key} width="85%" border="1">
                                        <tbody>
                                            <tr>
                                                <td colSpan="5" height="39"><div align="center"><b>Following records are selected from the 'PRFORM' table.</b></div></td>
                                            </tr>
                                            <tr> 
                                                <td width="64%">Form No:</td>
                                                <td width="64%">{record.form_no}</td>
                                            </tr>
                                            <tr> 
                                                <td>Title of project:</td>
                                                <td>{record.title}</td>
                                            </tr>
                                            <tr> 
                                                <td>Item Name:</td>
                                                <td>{record.item_name}</td>
                                            </tr>
                                            <tr> 
                                                <td>Name of indentor:</td>
                                                <td>{record.ind_name}</td>
                                            </tr>
                                            <tr> 
                                                <td>Department Name:</td>
                                                <td>{record.ind_dept}</td>
                                            </tr>
                                            <tr> 
                                                <td>Purpose of purchase:</td>
                                                <td>{record.purpose}</td>
                                            </tr>
                                            <tr> 
                                                <td>Budget head:</td>
                                                <td>{record.bud_head}</td>
                                            </tr>
                                            <tr> 
                                                <td>Sanction Grant:</td>
                                                <td>{record.san_grant}</td>
                                            </tr>
                                            <tr> 
                                                <td>Balance as on date:</td>
                                                <td>{record.balance}</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr colSpan="2">
                                                <td><em><strong>Party to whom order is to be placed:</strong></em></td>
                                                <td>&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td>Quotation Number </td>
                                                <td>{record.quotation_no}</td>
                                            </tr>
                                            <tr>
                                                <td>Name:</td>
                                                <td>{record.p_name}</td>
                                            </tr>
                                            <tr>
                                                <td>Address:</td>
                                                <td>{record.p_address}</td>
                                            </tr>
                                            <tr>
                                                <td>Phone no: </td>
                                                <td>{record.p_phone}</td>
                                            </tr>

                                            <tr>
                                                <td>Packing and forwarding:</td>
                                                <td>{record.pac_for}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Cost:</td>
                                                <td>{record.p_total_cost}</td>
                                            </tr>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    );
                                })}
                                <br />
                                <button  disabled={this.state.isButtonDisabled} variant="info" onClick={() => this.approve(this.props.location.form_no)}>approve</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => history.goBack()}>BACK</button>


                            </div>
                        </td></tr>
                </tbody>
            </table>
        )
    }
}
