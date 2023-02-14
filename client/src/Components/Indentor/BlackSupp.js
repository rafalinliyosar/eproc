import React, { Component } from 'react'
import SideBar from '../SideBar';
import history from '../../history';

export default class BlackSupp extends Component {
    render() {
        return (
            <table>
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
                            <table>
                                <tbody>
                                    <tr>
                                        <td colSpan="4" ><p align="center"><strong>Blacklisting the supplier </strong></p>
                                            <p>&nbsp;</p></td>
                                    </tr>
                                  
                                    <tr>
                                        <td height="40" colSpan="4" ><p><strong>Enter the following information about the supplier to blacklist him</strong></p>
                                            <p>&nbsp;</p></td>
                                    </tr>
                                    <tr>
                                        <td height="32">&nbsp;</td>
                                        <td height="32" ><strong>Supplier id </strong></td>
                                        <td colSpan="2"><input name="supp_id" /></td>
                                    </tr>
                                    <tr>
                                        <td colSpan="4" height="42"><div align="center">
                                        <button onClick={this.addnewdept}>B L A C K L I S T </button>
                                           
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button onClick={this.resetform} >R E S E T</button>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button onClick={() => history.goBack()}>BACK</button> 
                                        </div></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td></tr>
                </tbody>
            </table >

        )
    }
}
