import React from 'react';
import history from '../../history';
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllUsers } from '../../actions/login.action';
import { bindActionCreators } from 'redux';
// import SideBar from '../SideBar'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: "",
            password: "",
        };
    }
    componentDidUpdate() {
        if (this.props.users.length > 0) {
            const desig = this.props.users[0].desig;
            if (desig === "admin") {
                console.log("User logged in", desig);
                history.push('/AdminLogged');
            }
            else if (desig === "indentor") {
                console.log("User logged in", desig);
                history.push('/IndentorLogged');
            }
            else if (desig === "finance") {
                console.log("User logged in", desig);
                history.push('/FinanceLogged');
            }
            else if (desig === "registrar") {
                console.log("User logged in", desig);
                history.push('/RegistrarLogged');
            }
            else if (desig === "vicechancellor") {
                console.log("User logged in", desig);
                history.push('/ViceChancellorLogged');
            }
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }


    loginuser = (evt) => {
        if (evt) evt.preventDefault();
        this.props.getAllUsers(this.state.userid, this.state.password)
        //  this.setState({
        //     userid: "",
        //     password: "",

        // });
    }

    render() {
        return (
                <form onSubmit={this.loginuser}>
                    <table>
                        <tbody>
                            <tr>
                                <td width="140" ></td>
                                <td>
                                    <img src="images/headpic.gif" alt={"a"} width="640" height="98" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                            <Table width="100%" border="0">
                                <tbody>
                                    <tr>
                                        <td > <p align="right"><strong>Login Panel</strong></p></td>
                                    </tr>
                                    <tr>
                                        <td >&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td >&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td width="28%" height="27"></td>
                                        <td width="22%"><strong>User ID</strong></td>
                                        <td><input type="text" name="userid" value={this.state.userid} onChange={this.handleChange} /></td>
                                    </tr>
                                    <tr>
                                        <td height="27"></td>
                                        <td><strong>Password</strong></td>
                                        <td><input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td height="39" colSpan="4" align="center">                                                
                                                <input type="submit" />                                           
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>

                      

                </form>

           



        );

    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {

    return {
        getAllUsers: bindActionCreators(getAllUsers, dispatch)
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Login);