import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'

export default class AddItem extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;

        this.state = {
            item_code: "GU-",
            item_name: "",
            price: "",
            d_name: "",
            no_item: "",
            consum_non: "",
        };
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        });
    };

    addnewitem = async () => {
        this._isMounted = true;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var body = JSON.stringify({ item_code: this.state.item_code, item_name: this.state.item_name, price: this.state.price, d_name: this.state.d_name, no_item: this.state.no_item, consum_non: this.state.consum_non });
        let response = await fetch("http://localhost:8000/api/additem", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        alert(result.response);
        console.log("result", result.response);

        this._isMounted && this.setState({
            item_code: "GU-",
            item_name: "",
            price: "",
            d_name: "",
            no_item: "",
            consum_non: "",
        });
    };

    componentWillUnmount() {
        this._isMounted = false;
    };

    resetform = () => {
        this.setState({
            item_code: "GU-",
            item_name: "",
            price: "",
            d_name: "",
            no_item: "",
            consum_non: "",
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
                            <td height="32"><strong>Item Code</strong></td>
                            <td colSpan="2"><input type="text" name="item_code" value={this.state.item_code} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Item Name</strong></td>
                            <td colSpan="2"><input type="text" name="item_name" value={this.state.item_name} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Price</strong></td>
                            <td colSpan="2"><input type="text" name="price" value={this.state.price} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Department Name</strong></td>
                            <td colSpan="2"><input type="text" name="d_name" value={this.state.d_name} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Number of Items</strong></td>
                            <td colSpan="2"><input type="text" name="no_item" value={this.state.no_item} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32"><strong>Enter C(consumable),N(nonconsumable)</strong></td>
                            <td colSpan="2"><input type="text" name="consum_non" value={this.state.consum_non} onChange={this.handleChange} /></td>
                        </tr>
                        <tr  >
                            <td height="32">&nbsp;</td>
                            <td height="32">&nbsp;</td>
                            <td colSpan="2"><label></label></td>
                        </tr>
                        <tr  >
                            <td colSpan="4" height="39"><div style={{ textAlign: 'center' }}>
                                <button onClick={this.addnewitem}>ADD ITEM</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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