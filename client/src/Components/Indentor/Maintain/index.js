import React, { Component } from 'react'
import SideBar from '../../SideBar';
import { connect } from 'react-redux';
import history from '../../../history';

class Maintain extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {

            value: 'transfer',
            records: [],
            value1: [],
            dept: [
                { value: '', label: '',key:1 },
                { value: 'MCA', label: 'MCA',key:2 },
                { value: 'Chemistry', label: 'Chemistry',key:3 },
                { value: 'Biology', label: 'Biology',key:4 },
                { value: 'Physics', label: 'Physics',key:5 },
                { value: 'Botany', label: 'Botany',key:6 },
                { value: 'Computer', label: 'Computer',key:7 },
            ]

        };
    }
    async componentDidMount() {
        this.displa();
    }

    displa = async () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var body = JSON.stringify({ d_name: this.props.users[0].d_name });

        let response = await fetch("http://localhost:8000/api/dispitem", {
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        this.setState({
            records: result.response,
        });
        return;
    }

    buttonclick =async(dept,code)=>{
        console.log("val",dept)
        console.log("val1",code)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        var body = JSON.stringify({dept:dept,code:code});

        let response = await fetch("http://localhost:8000/api/changedept",{
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error)=> console.log("error",error));
        const result = await response.json();
        console.log("result", result.response);
        this.displa()
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });

    }

    handleChange1 = (event,idd) => {
        this.state.value1.map((f,key) => {           
            if (idd === parseInt(f.id))
             {
                this.state.value1.splice(key, 1);               
            }
            return f.id;
        })           
        this.setState(
            {
                value1: this.state.value1.concat({id:event.target.id,value:event.target.value} )
            })

    }   

    componentDidUpdate(){
        if (this.state.value === "repair") {
            history.push('/Repair');
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
                        <br /><br />
                                <b><div style={{ textAlign: 'center' }}>Select Transfer or Repair
                                &nbsp;

                                <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="transfer">Transfer</option>
                                    <option value="repair">Repair</option>
                                </select>
                                </div> </b>  
                                <br /><br />
                           <div>
                                <table  >
                                    <tbody>
                                        <tr>
                                            <th width="80"><div style={{ textAlign: 'left' }}>Item Code	</div></th>
                                            <th width="80"><div style={{ textAlign: 'left' }}>Item Name	</div></th>
                                            <th width="40">Item Price</th>
                                            <th><div style={{ textAlign: 'center' }}>No of items</div></th>
                                            <th width="140">Consumable(C)/
                                                Nonconsumable(N)</th>
                                            <th width="100"><div style={{ textAlign: 'center' }}>New Dept</div></th>
                                            <th><div style={{ textAlign: 'left' }}>Transfer</div></th>
                                        </tr>
                                        <tr><td>&nbsp;</td></tr>
                                        {this.state.records.map((record, key) => {
                                                // {console.log(key)}
                                                return (
                                                    <tr key={key} >
                                                        <td>{record.item_code}</td>
                                                        <td>{record.item_name}</td>
                                                        <td>{record.price}</td>
                                                        <td><div style={{ textAlign: 'center' }}>{record.no_item}</div></td>
                                                        <td><div style={{ textAlign: 'center' }}>{record.consum_non}</div></td>
                                                        <td width="80">
                                                            <select id={key} onChange={(e) => this.handleChange1(e, key)}>
                                                                {

                                                                    this.state.dept.filter(x => x.value !== this.props.users[0].d_name).map(f => (<option value={f.value} key={f.key}>{f.label}</option>))
                                                                }
                                                            </select>
                                                        </td>
                                                        <td> {this.state.value1.map(h => {
                                                            {
                                                                if (parseInt(h.id) === key) {
                                                                    return (<div key={key}><button onClick={() => this.buttonclick((h.value), (record.item_code))}>Transfer</button> </div>)
                                                                }
                                                                return null;
                                                            }
                                                        })
                                                        }

                                                        </td>


                                                    </tr>
                                                );
                                            })}
                                        <tr  >
                                            <td colSpan="7" height="39"><div style={{ textAlign: 'center' }}>
                                                <button onClick={() => history.push('/IndentorLogged') }>BACK</button>   </div>
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

export default connect(mapStateToProps)(Maintain);
