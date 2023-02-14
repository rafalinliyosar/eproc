import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap";
import SideBar from '../SideBar'


export default class AdminLogged extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props)
    // }
    render() {
        return (
            
                <Table  >
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
                                <Table cellSpacing="0" cellPadding="0" width="100%" border="0" align="right">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p align="center"><strong>Welcome Administrator </strong></p>
                                                <p>&nbsp;</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td height="19" colSpan="4">
                                                <strong>User Administration</strong>
                                                <ul>
                                                    <li><div ><Link to="/AddUser"  >Add User</Link></div></li>
                                                    <li><Link to="/ChangePass">Change Password</Link></li>
                                                    <li><Link to="/DisplayUser" >Display User</Link></li>
                                                    <li><Link to="/DeleteUser">Delete User</Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" height="21">
                                                <strong>Item Administration</strong>
                                                <ul>
                                                    {/* <li><div onClick={() => history.push('/AddItem')}><Link to="/AddItem">Add Item</Link></div></li> */}
                                                    <li><Link to="/AddItem">Add Item</Link></li>
                                                    <li><Link to="/DisplayItem">Display Item</Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" height="21">
                                                <strong>Supplier Administration</strong>
                                                <ul>
                                                    <li><Link to="/AddSupp">Add Supplier</Link></li>
                                                    <li><Link to="/DisplaySupp">Display Supplier</Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" height="21">
                                                <strong>Department Administration</strong>
                                                <ul>
                                                    <li><Link to="/AddDept">Add Department</Link></li>
                                                    <li><Link to="/DisplayDept">Display Department</Link></li>
                                                    <li><Link to="/DeleteDept">Delete Department</Link></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td></tr>
                    </tbody>
                </Table>


           
        );
    }
}