import React, { Component } from 'react';
import history from '../../history';
import SideBar from '../SideBar'

export default class SelBestQuot extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
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

        let response = await fetch("http://localhost:8000/api/prformquot", {
            method: "POST",
            headers: myHeaders,
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        console.log("result", result.response);
        this.setState({
            records: result.response,
        });
        
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
                        <table   >
                            <tbody>
                                <tr>
                                    <th width="120"><div style={{ textAlign: 'left' }}>Form Number	</div></th>
                                    <th width="140"><div style={{ textAlign: 'left' }}>Title Of Project	</div></th>
                                    <th>Item Name</th>

                                    <th><div style={{ textAlign: 'left' }}>View Quotation forms</div></th>
                                </tr>
                                <tr><td>&nbsp;</td></tr>
                                {this.state.records.filter(x=>x.quotation_no===1).map((record, key) => {
                                    return (
                                        <tr key={key} >
                                            <td>{record.prform_no}</td>
                                            <td>{record.title}</td>
                                            <td>{record.item_name}</td>

                                            <td width="140"><div style={{ textAlign: 'center' }}>

                                            <button variant="info" onClick={() => this.props.history.push({
                                                    pathname: '/ContOrQuotdetails',
                                                    form_no : record.form_no                                                   
                                                })}>
                                                View Forms											
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
                        </table>

                    </td></tr>
            </tbody>
        </table>
        )
    }
}
