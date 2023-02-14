import React, { Component } from 'react'
import history from '../../../history';
import SideBar from '../../SideBar';
import { connect } from 'react-redux';

class Repair extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {

            value: 'repair',
            records: []
        }
    }
    async componentDidMount() {
        this.displa();
    }

    displa = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ d_name: this.props.users[0].d_name });
        // console.log(this.props.users[0].d_name)

        let response = await fetch("http://localhost:8000/api/dispitem", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        // console.log("result", result.response);
        this.setState({
            records: result.response,
        });
        return;
    }

    changeStatus = async(code,stat) =>{
        console.log("change",code)
        console.log("change",stat)

        if(stat==='W')
        {
            stat='N';
            console.log("New",stat)

        }
        else{
            stat='W';
            console.log("New",stat)

        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        var body = JSON.stringify({code:code,stat:stat});

        await fetch("http://localhost:8000/api/changework",{
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error",error));

        this.displa();

    }


    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });

    }
    componentDidUpdate() {
        if (this.state.value === "transfer") {
            history.push('/Maintain');
        }
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
                            <br /><br />
                                <b><div style={{ textAlign: 'center' }}>Select Transfer or Repair
                                &nbsp;

                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="transfer">Transfer</option>
                                    <option value="repair">Repair</option>
                                </select>
                                </div> </b>
                               

                                <br />
                               
                                <br />

                                <table  >
                                    <tbody>
                                        <tr>
                                            <th width="80"><div style={{ textAlign: 'left' }}>Item Code	</div></th>
                                            <th width="80"><div style={{ textAlign: 'left' }}>Item Name	</div></th>
                                            <th width="60">Item Price</th>
                                            <th width="80"><div style={{ textAlign: 'center' }}>No of items</div></th>
                                            <th width="120">Item Type</th>
                                            <th width="100"><div style={{ textAlign: 'center' }}>Item Status</div></th>
                                            <th><div style={{ textAlign: 'center' }}>Change working Status</div></th>
                                        </tr>
                                        
                                        {
                                            this.state.records.map((record,key) => {
                                                // {console.log(key)}
                                                return (                                                    
                                                    <tr key={key} >
                                                        <td>{record.item_code}</td>
                                                        <td>{record.item_name}</td>
                                                        <td>{record.price}</td>
                                                        <td><div style={{ textAlign: 'center' }}>{record.no_item}</div></td>
                                                        <td><div style={{ textAlign: 'left' }}>{(record.consum_non==='C')?'Consumable':'Non Consumable'}</div></td>
                                                        <td><div style={{ textAlign: 'center' }}>{(record.work_notwork==='W')?'Working':'Not Working'}</div></td>
                                                        <td><div style={{ textAlign: 'center' }}><button onClick={()=>this.changeStatus(record.item_code,record.work_notwork)}>Change </button></div></td>



                                                    </tr>
                                                );
                                            })}
                                        <tr  >
                                            <td colSpan="7" height="39"><div style={{ textAlign: 'center' }}>
                                                <button onClick={() => history.push('/IndentorLogged')}>BACK</button>   </div>
                                            </td>
                                        </tr>
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

export default connect(mapStateToProps)(Repair);
