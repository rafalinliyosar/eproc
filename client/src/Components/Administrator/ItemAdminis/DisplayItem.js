import React from 'react';
import { Table, Button } from "react-bootstrap";
import history from '../../../history';
import SideBar from '../../SideBar'


export default class DisplayItem extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._isMounted = false;
        this.state = {
            records: [],
        };
    }

    async componentDidMount() {
        this._isMounted = true;
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let response = await fetch("http://localhost:8000/api/displayitem", {
            method: "GET",
            headers: myHeaders,
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        console.log("result", result.response);
        this.setState({
            records: result.response,
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    };

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
                <Table striped bordered hover size="sm"  >
                    <tbody>
                        <tr>
                            <th width="70">id</th>
                            <th width="80">Name</th>
                            <th>Price</th>
                            <th>Department Name</th>
                            <th>No. of Items</th>
                            <th>Consumable(C)/
                                Nonconsumable(N)</th>
                            <th>Working(W)/
                                Not Working(N)</th>

                            {/* <th colSpan="2">Actions</th> */}
                        </tr>


                        {this.state.records.map((record, key) => {
                            return (
                                <tr key={key} >
                                    <td>{record.item_code}</td>
                                    <td>{record.item_name}</td>
                                    <td>{record.price}</td>
                                    <td style={{ textAlign: 'center' }}>{record.d_name}</td>
                                    <td style={{ textAlign: 'center' }}>{record.no_item}</td>
                                    <td style={{ textAlign: 'center' }}>{record.consum_non}</td>
                                    <td style={{ textAlign: 'center' }}>{record.work_notwork}</td>
                                    <td>
                                        <Button variant="info" onClick={() => this.editRecord(record.id)}>
                                            Edit
												</Button>
                                    </td>
                                    {/*
                                    <td>
                                        <Button variant="danger" onClick={() => this.deleteRecord(record.id)}>
                                            Delete
												</Button>
                                    </td> */}
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

            </div>
        );
    }
}