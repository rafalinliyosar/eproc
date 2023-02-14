import React from 'react';
import SideBar from '../SideBar';
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';


class IndentorLogged extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props)
    // }
    render() {
        const desig = this.props.users[0].desig;
        const name = this.props.users[0].name;
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
                                <Table cellSpacing="0" cellPadding="0" width="100%" border="0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p align="center"><strong>Welcome {desig} {name}
                                                    {/* {console.log("pr form user details", this.props.users)} */}

                                                </strong></p>
                                                <p>&nbsp;</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/DisplaySupp">View Suppliers</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/PrForm">Fill PR Form</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/ContOrQuot">Fill Rate contract/Quotation forms</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/FinAppr">Check if finance approval is given</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/AdminAppr"  >Check if admin approval is given</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/SelBestQuot"  >Select the BEST quotation</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/OrderItem"  >Order item</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/BlackSupp"  >Blacklist Supplier</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/ViewEmail"  >Issue item</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/ViewEmail"  >Use Consumable item</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/Maintain"  >Maintenance</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/ViewEmail"  >Reports</Link></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td></tr>
                    </tbody>
                </table>

        );
    }
}
function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(IndentorLogged);