import React, { Component } from "react";
import { Router, Switch, Route  } from "react-router-dom";

import AdminLogged from './Components/Loggedin/AdminLogged';
import IndentorLogged from './Components/Loggedin/IndentorLogged';
import FinanceLogged from './Components/Loggedin/FinanceLogged';
import ViceChancellorLogged from './Components/Loggedin/ViceChancellorLogged';
import RegistrarLogged from './Components/Loggedin/RegistrarLogged';
import Login from './Components/Login';

import history from './history';

import AddUser from './Components/Administrator/UserAdminis/AddUser';
import DisplayUser from './Components/Administrator/UserAdminis/DisplayUser';
import DeleteUser from './Components/Administrator/UserAdminis/DeleteUser';
import ChangePass from './Components/Administrator/UserAdminis/ChangePass';

import DisplayItem from './Components/Administrator/ItemAdminis/DisplayItem';
import AddItem from './Components/Administrator/ItemAdminis/AddItem';

import DisplaySupp from './Components/Administrator/SupplierAdminis/DisplaySupp';
import AddSupp from './Components/Administrator/SupplierAdminis/AddSupp';

import DisplayDept from './Components/Administrator/DeptAdminis/DisplayDept';
import AddDept from './Components/Administrator/DeptAdminis/AddDept';
import DeleteDept from './Components/Administrator/DeptAdminis/DeleteDept';

//Registrar
import ViewEmail from './Components/Registrar/ViewEmail';
import PrDisplay from './Components/Registrar/PrDisplay';
import PrDetail from './Components/Registrar/PrDetail';

//Finance
import PrDisplayFin from './Components/Finance/PrDisplayFin';
import PrDetailFin from './Components/Finance/PrDetailFin';

//Vice Chancellor
import PrDetailVice from './Components/ViceChan/PrDetailVice';
import PrDisplayVice from './Components/ViceChan/PrDisplayVice';



import SideBar from './Components/SideBar';
import About from './Components/SideBar/About';
import ContactUs from './Components/SideBar/ContactUs';

// Indentor
import PrForm from './Components/Indentor/PrForm';
import FinAppr from './Components/Indentor/FinAppr';
import AdminAppr from './Components/Indentor/AdminAppr';
import BlackSupp from './Components/Indentor/BlackSupp';
import Maintain from './Components/Indentor/Maintain';
import Repair from './Components/Indentor/Maintain/Repair';
import ContOrQuot from './Components/Indentor/ContOrQuot';
import ContOrQuotdetails from './Components/Indentor/ContOrQuot/ContOrQuotdetails';
import SelBestQuot from './Components/Indentor/SelBestQuot';





export default class Routes extends Component {
    render() {
        return (
            <Router  history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />

                    {/* indentor */}
                    <Route path="/PrForm" component={PrForm} />   
                    <Route path="/FinAppr" component={FinAppr} /> 
                    <Route path="/AdminAppr" component={AdminAppr} />                       
                    <Route path="/BlackSupp" component={BlackSupp} />
                    <Route path="/Maintain" component={Maintain} />  
                    <Route path="/Repair" component={Repair} />                      
                    <Route path="/ContOrQuot" component={ContOrQuot} />  
                    <Route path="/ContOrQuotdetails" component={ContOrQuotdetails} /> 
                    <Route path="/SelBestQuot" component={SelBestQuot} /> 

                    

                    {/* Registrar */}
                    <Route path="/ViewEmail" component={ViewEmail} />                    
                    <Route path="/PrDisplay" component={PrDisplay} /> 
                    <Route path="/PrDetail" component={PrDetail} /> 

                    {/* Finance */}
                    <Route path="/PrDisplayFin" component={PrDisplayFin} /> 
                    <Route path="/PrDetailFin" component={PrDetailFin} />   

                    {/* Vice Chancellor                  */}
                    <Route path="/PrDetailVice" component={PrDetailVice} />   
                    <Route path="/PrDisplayVice" component={PrDisplayVice} />   

                    

                    {/* Sidebar */}
                    <Route path="/SideBar" component={SideBar} />   
                    <Route path="/About" component={About} />   
                    <Route path="/ContactUs" component={ContactUs} />   


                    <Route path="/AdminLogged" component={AdminLogged} />
                    <Route path="/IndentorLogged" component={IndentorLogged} />
                    <Route path="/FinanceLogged" component={FinanceLogged} />
                    <Route path="/ViceChancellorLogged" component={ViceChancellorLogged} />
                    <Route path="/RegistrarLogged" component={RegistrarLogged} />                    

                    <Route path="/AddUser" component={AddUser} />
                    <Route path="/DisplayUser" component={DisplayUser} />
                    <Route path="/DeleteUser" component={DeleteUser} />
                    <Route path="/ChangePass" component={ChangePass} />  
                    
                    <Route path="/DisplayItem" component={DisplayItem} />
                    <Route path="/AddItem" component={AddItem} />

                    <Route path="/DisplaySupp" component={DisplaySupp} />
                    <Route path="/AddSupp" component={AddSupp} />

                    <Route path="/DisplayDept" component={DisplayDept} />
                    <Route path="/AddDept" component={AddDept} />
                    <Route path="/DeleteDept" component={DeleteDept} /> 

                  
  
                </Switch>
            </Router >




        )
    }
}