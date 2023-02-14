import React, { Component } from 'react'
import SideBar from '../../SideBar';
import history from '../../../history';

export default class ContOrQuotdetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quotation_no:1,
            supp_name:'',
            supp_address:'',
            supp_phone:'',
            q_cost:''
            
        };
    }

    resetform = () => {
        this.setState({
            supp_name:'',
            supp_address:'',
            supp_phone:'',
            q_cost:''
        });

    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }  

    
    addrate = async()=>{
        var myHeaders = new Headers();
        myHeaders.append("Content-type","application/json");
        var body = JSON.stringify({ form_no:this.props.location.form_no,item_name:this.props.location.item_name ,quotation_no:this.state.quotation_no, supp_name:this.state.supp_name, supp_address:this.state.supp_address, supp_phone:this.state.supp_phone, q_cost: this.state.q_cost});

        let response = await fetch("http://localhost:8000/api/addrate",{
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error)=>console.log("error",error));

        const result= await response.json();
        console.log("result",result.response);
        history.goBack();
    }

    async componentDidMount() {
        var myHeaders = new Headers();
        myHeaders.append("Content-type","application/json");
        var body = JSON.stringify({form_no:this.props.location.form_no});


        let response = await fetch("http://localhost:8000/api/quotno",{
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error)=>console.log("error",error));

        const result = await response.json();
        console.log("Count",result.response);

        if(result.response==='count1'){
            // alert("count2");

            this.setState({
                quotation_no: 2
              });

        }
        if(result.response==='count2'){
            // alert("count2");

            this.setState({
                quotation_no: 3
              });

        }
    }


    addquot =async()=>{

       

        var myHeaders = new Headers();
        myHeaders.append("Content-type","application/json");
        var body = JSON.stringify({form_no:this.props.location.form_no,item_name:this.props.location.item_name ,quotation_no:this.state.quotation_no, supp_name:this.state.supp_name, supp_address:this.state.supp_address, supp_phone:this.state.supp_phone, q_cost: this.state.q_cost});

        let response = await fetch("http://localhost:8000/api/addquot",{
            method: "POST",
            headers: myHeaders,
            body: body
        }).catch((error)=>console.log("error",error));

        const result= await response.json();
        console.log("result",result.response); 

        this.setState({
            quotation_no: this.state.quotation_no + 1
          });
       
          this.resetform();

          if(this.state.quotation_no===4)
          {
              alert("you have finished adding 3 quotations");
              history.goBack();
              return;
          }

    }

    render() {
        return (
            <table  >
                <tbody>
                    <tr>
                        <td width="140" ><SideBar /></td>
                        <td><img src="images/unimain.jpg" alt={"a"} width="635" height="100" /></td>
                    </tr>
                    <tr>
                        <td width="140" ></td>
                        <td>
                            <div>
                                <br/>                               
                                <table>
                                    <tbody>
                                        <tr>
                                            <td height="12"><em><strong>Enter the details of supplier quotations:</strong></em></td>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td height="22">Form Number </td>
                                            <td>{this.props.location.form_no}</td>
                                        </tr>
                                        <tr>
                                            <td height="22">Item Name </td>
                                            <td>{this.props.location.item_name}</td>
                                        </tr>
                                        <tr>
                                            <td height="22">Quotation number </td>
                                            <td>{this.state.quotation_no}</td>
                                        </tr>
                                        <tr>
                                            <td height="22">Name of supplier: </td>
                                            <td><input name="supp_name" type="text"  value={this.state.supp_name} onChange={this.handleChange} /></td>
                                        </tr>
                                        <tr>
                                            <td height="12">Address of supplier:</td>
                                            <td><input name="supp_address" type="text" value={this.state.supp_address} onChange={this.handleChange} /></td>
                                        </tr>
                                        <tr>
                                            <td height="22">Phone no of supplier: </td>
                                            <td><input name="supp_phone" type="text" value={this.state.supp_phone} onChange={this.handleChange}  /></td>
                                        </tr>
                                        <tr>
                                            <td height="22">Total Cost:</td>
                                            <td><input name="q_cost" type="text" value={this.state.q_cost} onChange={this.handleChange}  /></td>
                                        </tr>
                                        <tr>
                                            <td height="22">&nbsp;</td>                                            
                                        </tr>
                                      
                                        <tr>
                                        <td colSpan="4" height="22"><div align="center">
                                          {  (this.props.location.value==='rate')?( <button onClick={this.addrate}>ADD Rate Contract</button>):
                                          ( <button onClick={this.addquot}>ADD Quotation</button>) }                                       
                                           
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                          
                                            <button onClick={() => history.goBack()}>BACK</button> 
                                        </div></td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </td></tr>
                </tbody>
            </table>
        )
    }
}
