import React, { Component } from 'react'
import SideBar from '../SideBar';
import history from '../../history';

export default class PrForm extends Component {
    constructor(props) {
        super(props);
        // console.log(props)

        this.state = {
            form_no: "PR",
            ind_name: "",
            ind_dept: "",
            purpose: "",
            title: "",
            sanc_no: "",
            bud_head: "",
            sanc_grant: "",
            balance: "",
            item_name: "",
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    resetform = () => {
        this.setState({
            form_no: "PR",
            ind_name: "",
            ind_dept: "",
            purpose: "",
            title: "",
            sanc_no: "",
            bud_head: "",
            sanc_grant: "",
            balance: "",
            item_name: "",
        });

    }



    addprdetails = async() => {
        var myHeaders = new Headers();
        myHeaders.append("Content-type","application/json");
        var body = JSON.stringify({  form_no: this.state.form_no, ind_name: this.state.ind_name, ind_dept: this.state.ind_dept, purpose: this.state.purpose, title: this.state.title, sanc_no: this.state.sanc_no, bud_head: this.state.bud_head, sanc_grant: this.state.sanc_grant, balance: this.state.balance, item_name: this.state.item_name});

        let response = await fetch("http://localhost:8000/api/addpr",{
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error)=> console.log("error",error));

        const result = await response.json();
        console.log("result", result.response);
        // alert(result.response);
       
        // this.props.history.push({
        //     pathname: 'ContOrQuot',
        //     form_no: this.state.form_no,
        //     item_name: this.state.item_name
        // })
        // history.push('/ContOrQuot');
    }


    render() {
        return (
            <table  >
                <tbody>
                    <tr>
                        <td width="140" ><SideBar /></td>
                        <td><img src="images/unimain.jpg" alt={"a"} width="635" height="100" /></td>
                    </tr>
                    <tr>
                        <td width="140" ></td>
                        <td>
                            <table  align="center" width="590" height="299">
                                <tbody>
                                    <tr align="left"><td align="left"><p align="left"><strong>PURCHASE REQUISITION </strong></p><p>&nbsp;</p></td></tr>
                                    <tr><td height="12">Form No:</td>
                                    <td><input name="form_no" value={this.state.form_no} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Name of indentor:</td>
                                    <td><input name="ind_name" value={this.state.ind_name} onChange={this.handleChange}  /></td></tr>
                                    <tr><td height="12">Department Name:</td>
                                    <td><input name="ind_dept" value={this.state.ind_dept} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Purpose of purchase:</td>
                                    <td><input name="purpose" value={this.state.purpose} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Title of project:</td>
                                    <td><input name="title" value={this.state.title} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Sanction no:</td>
                                    <td><input name="sanc_no" value={this.state.sanc_no} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Budget head:</td>
                                    <td><input name="bud_head" value={this.state.bud_head} onChange={this.handleChange}  /></td></tr>
                                    <tr><td height="12">Sanction Grant:	</td>
                                    <td><input name="sanc_grant" value={this.state.sanc_grant} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Balance as on date:	</td>
                                    <td><input name="balance" value={this.state.balance} onChange={this.handleChange} /></td></tr>
                                    <tr><td height="12">Names of Items to be purchased:	</td>
                                    <td><input name="item_name" value={this.state.item_name} onChange={this.handleChange} /></td></tr>
                                    <tr><td style={{ textAlign: 'center' }}>  <button onClick={this.addprdetails}>submit</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={this.resetform} >R E S E T</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={() => history.goBack()}>BACK</button>  </td></tr>
                                </tbody>
                            </table>
                            <br/>
                         
                            
                        </td></tr>
                </tbody>
            </table>
        )
    }
}
