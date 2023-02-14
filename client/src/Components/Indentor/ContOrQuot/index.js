import React, { Component } from 'react';
import history from '../../../history';
import SideBar from '../../SideBar'

export default class ContOrQuot extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state = {
            records: [],
            isset:[],
            cc:-1

        };
    }
    
     componentDidMount() {
       
        this.fetchdata();

        
            
                // console.log("result", this.state.isset)     
           
            
          
        
        // console.log("result", this.state.isset)

                
    }

    fetchdata = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let response = await fetch("http://localhost:8000/api/prforms", {
            method: "POST",
            headers: myHeaders,
        }).catch((error) => console.log("error", error));

        const result = await response.json();
        // console.log("result", result.response);
        this.setState({
            records: result.response,
        });

        var arr1='',arr2='true',arr3=[];
        for (var i in this.state.records) {
            arr3[i]=arr1.concat(arr2);   
            console.log("arr", i);

 
        }
        console.log(arr3);


     }


    buttonset = async() =>{

        console.log("res2",this.state.records);

        var myheaders = new Headers();
        myheaders.append("Content-Type","application/json");

        var body = JSON.stringify({form_no:this.state.records})

        let response = await fetch("http://localhost:8000/api/quotno",{
            method: "POST",
            headers: myheaders,
            body: body
        }).catch((error)=>console.log("error",error));
        

        const result = await response.json()
        console.log(" counttt",result.response);
        // if(result.response==='count1' || result.response==='count2' ){
             
        //     this.setState(
        //         {
        //             isset: this.state.isset.concat({id:this.state.cc + 1,value:true} ),
        //             cc:this.state.cc + 1
        //         }
        //         // , 
                
        //         // () => console.log(this.state.isset)
        //         )    
        //         return this.state.isset;    
        
        // }
        // else if (result.response === 'count0') {
        //     this.setState(
        //         {
        //             isset: this.state.isset.concat({ id: this.state.cc + 1, value: false }),
        //             cc:this.state.cc + 1

        //         }
        //         // , 
                
        //         // () => console.log(this.state.isset)
        //         )
        // }
        // return this.state.isset;
    }


    render() {

        this.buttonset();


        
     
        return (
            <div>
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
                                            <th>Fill Rate Contract Form</th>

                                            <th><div style={{ textAlign: 'left' }}>Fill Quotation forms</div></th>
                                        </tr>
                                        <tr><td>&nbsp;</td></tr>
{/* 
                                        { this.state.isset.map((set, key) => {
console.log(set.id); 

console.log(set.value); 
// if (parseInt(set.id) === key) {
    return (<button disabled={set.value} variant="info" onClick={() => this.props.history.push({
        pathname: '/ContOrQuotdetails',
        
    })}>
        Rate Contract form
    </button>)
// }

})} */}

                                       

                                        {/* {this.state.records.map((record, key) => {

                                            return (
                                                <tr key={key} >
                                                    <td>{record.form_no}</td>
                                                    <td>{record.title}</td>
                                                    <td>{record.item_name}</td>

                                                    { console.log("CCCCC", this.state.cc)}

                                                    {
                                                        console.log("Iteration", count++)

                                                    }
                                                    
                                                    {}
                                                    <td width="140"><div style={{ textAlign: 'center' }}>

                                                  
                                                        
                                                    </div>
                                                    </td>
                                                    <td width="140"><div style={{ textAlign: 'left' }}>
                                                        <button variant="info" onClick={() => this.props.history.push({
                                                            pathname: '/ContOrQuotdetails',
                                                            form_no: record.form_no,
                                                            value: 'quote',
                                                            item_name: record.item_name
                                                        })}>
                                                            Quotation forms
                                                        </button>
                                                    </div>
                                                    </td>
                                                </tr>
                                            );
                                        })} */}
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
            </div>
        )
    }
}
