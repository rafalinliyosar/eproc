import React from 'react';
import { Table } from "react-bootstrap";
import history from '../../history';
import SideBar from '../SideBar'

export default class PrDisplayFin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            records: [],
        };
    }
    async componentDidMount() {
        this.fetchdata();
    }

    fetchdata = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let response = await fetch("http://localhost:8000/api/prdisplay", {
            method: "POST",
            headers: myHeaders,
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        this.setState({
            records: result.response,
        });
    }

    approve = async (id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ id: id });
        console.log("id", id);
        await fetch("http://localhost:8000/api/approve", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        this.fetchdata();
    }

    render() {
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
                                <br />
                                <Table striped bordered hover size="sm"  >
                                    <tbody>
                                        <tr>
                                            <th width="120"><div style={{ textAlign: 'left' }}>Form Number	</div></th>
                                            <th width="140"><div style={{ textAlign: 'left' }}>Title Of Project	</div></th>
                                            <th>Item Name</th>
                                            <th>Quick Approve</th>
                                            <th><div style={{ textAlign: 'left' }}>View Details</div></th>
                                        </tr>
                                        <tr><td>&nbsp;</td></tr>
                                        {this.state.records.map((record, key) => {
                                            return (
                                                <tr key={key} >
                                                    <td>{record.form_no}</td>
                                                    <td>{record.title}</td>
                                                    <td>{record.item_name}</td>
                                                    <td width="140"><div style={{ textAlign: 'center' }}>
                                                        <button variant="info" onClick={() => this.approve(record.form_no)}>
                                                            approve
												</button>
                                                    </div>
                                                    </td>
                                                    <td width="140"><div style={{ textAlign: 'left' }}>
                                                        <button variant="info" onClick={() => this.props.history.push({
                                                            pathname: '/PrDetailFin',
                                                            form_no : record.form_no
                                                        })}>
                                                            view details
												</button>
                                                    </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        <tr  >
                                            <td colSpan="7" height="39"><div style={{ textAlign: 'center' }}>
                                                <button onClick={() => history.goBack()}>BACK</button>   </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td></tr>
                    </tbody>
                </table>
        );
    }
}


