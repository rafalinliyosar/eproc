import React, { Component } from 'react'
import SideBar from '../SideBar';
import { connect } from 'react-redux';

class FinAppr extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            records: [],
        };
    }

    async componentDidMount() {
        // console.log("finace approve form",this.props.users[0].d_name);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ d_name: this.props.users[0].d_name});


        let response = await fetch("http://localhost:8000/api/indentprdisplay", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        console.log("result", result.response);
        this.setState({
            records: result.response,
        });
    }

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
                            <div>
                                <table border="1" width="527" height="86">
                                    <tbody>
                                        <tr>
                                            <td width="156" align="center" height="42"><strong><font >Form Number </font></strong></td>
                                            <td width="196" height="42"><strong><font >Title Of Project </font></strong></td>
                                            <td width="167"><font ><b>Item Name </b></font></td>
                                            <td width="167"><font ><b>Finance approved</b></font></td>

                                        </tr>

                                        {this.state.records.map((record, key) => {
                                            return (
                                                <tr key={key} >
                                                    <td>{record.form_no}</td>
                                                    <td>{record.title}</td>
                                                    <td>{record.item_name}</td>
                                                    <td>{(record.fin_appr_notappr==='Y')?'Yes':'No'}</td>

                                                     
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>

                            </div>

                        </td></tr>
                </tbody>
            </table >

        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(FinAppr);
