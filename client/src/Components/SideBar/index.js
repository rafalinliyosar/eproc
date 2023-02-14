import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";


export default class SideBar extends Component {
    render() {
        return (
            <Container>
               <table>
                   <tbody>
                        <tr  >
                            <td ><Link to="/About">About</Link>
                            </td>

                        </tr>
                        <tr  >
                            <td ><Link to="/ChaItngePass">Item Details</Link>
                            </td>

                        </tr>
                        <tr  >
                            <td ><Link to="/ChangePass">Change Password</Link>
                            </td>

                        </tr>
                        <tr  >
                            <td ><Link to="/Logout">Logout</Link>
                            </td>

                        </tr>
                        </tbody>
                        </table>  
            </Container>
        )
    }
}
