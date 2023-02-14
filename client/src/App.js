import React from 'react';
import Routes from './Routes';
import { Table } from "react-bootstrap";

export default class App extends React.Component {

    render() {
        return (
 <Table width="800" align="center" border="1"  >
                        <tbody >
                            <tr bgcolor="#1d138f">
                                <td colSpan="2" height="15"></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <img src="/IMAGES/header.gif" alt={"sss"} width="266" height="67" border="0" />
                                </td>
                            </tr>
                            <tr>
                                {/* <td width="120" ></td> */}
                                <td>
                                    {/* <img src="images/headpic.gif" alt={"a"} width="640" height="98" /> */}
                            <Routes />
                            </td>

                            </tr>
                            </tbody>
                    </Table>
                      

        );
    }
}


