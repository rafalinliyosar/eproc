import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import { connect } from 'react-redux';
import SideBar from '../SideBar'

class RegistrarLogged extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props)
    // }
    render() {
        const desig = this.props.users[0].desig;
        const name = this.props.users[0].name;

        return (
            <div>
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
                                            <td height="29"><Link to="/PrDisplayFin"  >PR forms</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/DisplaySupp"  >View Suppliers</Link></td>
                                        </tr>
                                        <tr>
                                            <td height="29"><Link to="/DisplayDept"  >Money Present In Department:</Link></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" height="32"><p>Click on the hyperlink to send email to the following:- </p>
                                                <ul type="circle">
                                                    <li>Registrar:-<a href="mailto:registra@unigoa.ac.in">registra@unigoa.ac.in</a></li>
                                                    <li>Finance Officer:-<a href="mailto:registra@unigoa.ac.in">financeoffcier@unigoa.ac.in</a></li>
                                                    <li>Vice Chancellor:-<a href="mailto:registra@unigoa.ac.in">vicechancellor@unigoa.ac.in</a></li>
                                                    <li><Link to="/ViewEmail"  >View Email address of</Link> Indentor to which email is to be sent</li>
                                                </ul></td>
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

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(RegistrarLogged);