const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require('cors');
var asyncEachlimit = require("async.eachlimit");
const util = require('util');
const Database = require('./Database')


// parse application/json
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
		return res.status(200).json({});
	}
	next();
})
//Create Database Connection
const conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "asd",
	database: "eprocurement",
});

var pool = mysql.createPool({ host : 'localhost', 
user : 'root', 
password : 'asd', 
database : 'eprocurement',
connectionLimit : 1 });

conn.connect((err) => {
	if (err) throw err;
	console.log("MySQL connected");
});




//for Login
app.post("/api/login", async (req, res) => {
	let userid = req.body.userid;
	const sqlSelect = "SELECT * from users where userid='" + userid + "'";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		if (result.length == 0) {
			res.send(JSON.stringify({ status: 200, error: null, response: "User Does not Exist" }));

		}
		else {
			let password = req.body.password;
			const sqlSelect1 = "SELECT name,desig,d_name from users where userid= ? && password=?";
			let test1 = conn.query(sqlSelect1, [userid, password], (err1, result1) => {
				if (err1) throw err1;
				if (result1.length == 0) {
					res.send(JSON.stringify({ status: 200, error: null, response: "You have entered the wrong password" }));

				} else {
					res.send(JSON.stringify({ status: 200, error: null, response: result1 }));
				}
			});
		}
	});
});

// for Administrator
app.post("/api/displayuser", async (req, res) => {
	const sqlSelect = "SELECT userid,name,city from users";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// for Administrator
app.get("/api/displayitem", async (req, res) => {
	const sqlSelect = "SELECT * from item";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// for Administrator
app.post("/api/displaysupp", async (req, res) => {
	const sqlSelect = "SELECT * from supplier";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// for Administrator
app.post("/api/displaydept", async (req, res) => {
	const sqlSelect = "SELECT * from dept";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// for Administrator
app.post("/api/deleteu", async (req, res) => {
	let userid = req.body.userid;
	const sqlSelect = "DELETE FROM users WHERE userid = ?";
	const test = conn.query(sqlSelect, [userid], (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "User Deleted" }));

	});

});


// for Administrator
app.post("/api/addsupp", async (req, res) => {
	var values = [req.body.supp_id, req.body.supp_name, req.body.addr, req.body.phone, req.body.email, req.body.supp_type];
	console.log("input values", values);
	const sqlInsert = "INSERT INTO supplier (supp_id,supp_name,addr,phone,email,supp_type) VALUES (?,?,?,?,?,?)";

	const test = conn.query(sqlInsert, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("You have entered duplicate primary key");
				res.send(JSON.stringify({ status: 200, error: null, response: "You have already used the id key" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values entered");
				res.send(JSON.stringify({ status: 200, error: null, response: "null values" }));
				return;
			}
			throw (err);
		}
		else {
			console.log(values);
			res.send(JSON.stringify({ status: 200, error: null, response: "Item Added Sucessfully" }));

		}

	});
});

// for Administrator
app.post("/api/additem", async (req, res) => {
	var values = [req.body.item_code, req.body.item_name, req.body.price, req.body.d_name, req.body.no_item, req.body.consum_non];
	console.log(values);
	const sqlInsert = "INSERT INTO item (item_code,item_name,price,d_name,no_item,consum_non)  VALUES (?,?,?,?,?,?)";

	conn.query(sqlInsert, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("duplicate primary key error");
				res.send(JSON.stringify({ status: 200, error: null, response: "Item Code has been used before" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values")
				res.send(JSON.stringify({ status: 200, error: null, response: "Enter values in text boxes" }));
				return;
			}
			console.log(err);
			throw err;
		}
		else {
			console.log(values);
			res.send(JSON.stringify({ status: 200, error: null, response: "Item Added Sucessfully" }));
		}
	});

});

// for Administrator
app.post("/api/adduser", async (req, res) => {
	var values = [req.body.userid, req.body.password, req.body.name, req.body.email, req.body.phone, req.body.desig, req.body.d_name];
	console.log(values);
	const sqlInsert = "INSERT INTO users (userid,password,name,email,phone,desig,d_name)  VALUES (?,?,?,?,?,?,?)";

	conn.query(sqlInsert, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("duplicate primary key error");
				res.send(JSON.stringify({ status: 200, error: null, response: "User ID has been used before" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values")
				res.send(JSON.stringify({ status: 200, error: null, response: "Enter values in text boxes" }));
				return;
			}
			console.log(err);
			throw err;
		}
		else {
			console.log(values);
			res.send(JSON.stringify({ status: 200, error: null, response: "User Added Sucessfully" }));
		}
	});

});

// for Administrator
app.post("/api/adddept", async (req, res) => {
	var values = [req.body.d_name, req.body.d_head, req.body.d_amt, req.body.d_sanc];
	console.log(values);
	const sqlInsert = "INSERT INTO dept  VALUES (?,?,?,?)";

	conn.query(sqlInsert, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("duplicate primary key error");
				res.send(JSON.stringify({ status: 200, error: null, response: "Department has been used before" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values")
				res.send(JSON.stringify({ status: 200, error: null, response: "Enter values in text boxes" }));
				return;
			}
			console.log(err);
			throw err;
		}
		else {
			console.log(values);
			res.send(JSON.stringify({ status: 200, error: null, response: "Dept Added Sucessfully" }));
		}
	});

});
// for Administrator
app.post("/api/deletedept", async (req, res) => {
	let d_name = req.body.d_name;
	const sqlSelect = "DELETE FROM dept WHERE d_name = ?";
	const test = conn.query(sqlSelect, [d_name], (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: "Department Deleted" }));

	});

});

// for Administrator
app.post("/api/changepass", async (req, res) => {
	let userid = req.body.userid;
	const sqlSelect = "SELECT * from users where userid='" + userid + "'";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		if (result.length == 0) {
			res.send(JSON.stringify({ status: 200, error: null, response: "User Does not Exist" }));

		}
		else {
			let password = req.body.password;
			const sqlSelect1 = "SELECT desig from users where userid= ? && password=?";
			let test1 = conn.query(sqlSelect1, [userid, password], (err1, result1) => {
				if (err1) throw err1;
				if (result1.length == 0) {
					res.send(JSON.stringify({ status: 200, error: null, response: "You have entered the wrong password" }));
				}
				else {
					let values = [req.body.password1, req.body.userid];
					const sqlUpdate = "UPDATE users SET password = ? WHERE userid = ?";
					conn.query(sqlUpdate, values, (err2, result2) => {
						if (err2) throw err2;
						res.send(JSON.stringify({ status: 200, error: null, response: "Password Changed Sucessfully" }));
					});
				}
			});
		}
	});
});

// For Registrar email display
app.post("/api/viewemail", async (req, res) => {
	const sqlSelect = "SELECT name,email,d_name from users";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// For Registrar => pr display 
app.post("/api/prdisplayreg", async (req, res) => {
	const sqlSelect = "SELECT form_no,title,item_name from prform where fin_appr_notappr='Y' and r_appr_not!='Y' and v_appr_not='N' and p_total_cost <=200000";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});


// for Registrar =>  approve prform  
app.post("/api/approvereg", async (req, res) => {
	let id = req.body.id;
	const sqlUpdate = "UPDATE prform set r_appr_not='Y' where form_no=?";
	const test = conn.query(sqlUpdate, [id], (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});

// For Registrar/Finance/Vicechancellor => Display details of PR Form
app.post("/api/prdetails", async (req, res) => {
	let id = req.body.form_no;
	console.log("id", id)
	const sqlSelect = "select * from prform where form_no=?";
	const test = conn.query(sqlSelect, [id], (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});

// For Vice Chancellor => pr display 
app.post("/api/prdisplayvic", async (req, res) => {
	const sqlSelect = "SELECT form_no,title,item_name from prform where fin_appr_notappr='Y' and r_appr_not!='Y' and v_appr_not='N' and p_total_cost >=200000";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// for Vice Chancellor  =>  approve prform  
app.post("/api/approvevic", async (req, res) => {
	let id = req.body.id;
	const sqlUpdate = "UPDATE prform set v_appr_not='Y' where form_no=?";
	const test = conn.query(sqlUpdate, [id], (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});

// For Finance => pr display 
app.post("/api/prdisplay", async (req, res) => {
	const sqlSelect = "SELECT form_no,title,item_name from prform where fin_appr_notappr='N' and q_best='Y' ";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});

// for Finance =>  approve prform  
app.post("/api/approve", async (req, res) => {
	let id = req.body.id;
	const sqlUpdate = "UPDATE prform set fin_appr_notappr='Y' where form_no=?";
	const test = conn.query(sqlUpdate, [id], (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});


//For Indentor => display PRs from particular dept for finance and admin approval
app.post("/api/indentprdisplay", async (req, res) => {
	let ind_dept = req.body.d_name;
	const sqlSelect = "SELECT form_no,title,item_name,fin_appr_notappr,r_appr_not,v_appr_not  from prform where ind_dept='" + ind_dept + "'";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});

});



// For Indentor => add PR form details to database
app.post("/api/addpr", async (req, res) => {
	var values = [req.body.form_no, req.body.ind_name, req.body.ind_dept, req.body.purpose, req.body.title, req.body.sanc_no, req.body.bud_head, req.body.sanc_grant, req.body.balance, req.body.item_name];
	const sqlInsert = "INSERT INTO prform (form_no,ind_name,ind_dept,purpose,title,san_no,bud_head,san_grant,balance,item_name) VALUES (?,?,?,?,?,?,?,?,?,?)";

	conn.query(sqlInsert, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("duplicate primary key error");
				res.send(JSON.stringify({ status: 200, error: null, response: "Primar ke has been used before" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values")
				res.send(JSON.stringify({ status: 200, error: null, response: "Enter values in text boxes" }));
				return;
			}
			console.log(err);
			throw err;
		}
		else {
			console.log(values);
			res.send(JSON.stringify({ status: 200, error: null, response: "PR Form details Added Sucessfully" }));
		}
	});

});

// app.post("/api/quotno", async (req, res) => {
// 	let resss = req.body.form_no;
// 	console.log("ress",resss);

// });





//For Indentor => displa prform => whose rate contract/quotation has to be filled
app.post("/api/prforms11", async (req, res) => {

	
// 	const sqlSelect = "SELECT prform.form_no,prform.title,prform.item_name from prform  where  quotation!='Y' and rate_contract!='Y'";
// const sql2 ="SELECT * from quotation where prform_no=? "


let appData = [];
	const database = new Database();
	database.query("SELECT form_no,title,item_name from prform  where  quotation!='Y' and rate_contract!='Y'")
		.then(rows =>  {

			// create promise list for all sub-queries
			const promise_list = rows.map(row =>  new Promise((resolve, reject) => {
				const new_database = new Database();
				 new_database.query(`SELECT * from quotation where prform_no=?`, row.form_no)
					.then(sub_rows => {
						// let district = row;
						let district =  sub_rows;
						appData.push(district);
						console.log(sub_rows)

						new_database.close();
						resolve(appData);
					}, err => {
						new_database.close().then(() => { throw err; })
					});
			})
			);

            // execute all sub-queries in parallel and wait for them
            Promise.all(promise_list).then(result => {
				console.log(appData)
                res.status(200).json(appData);
                database.close()
            }).catch(err => {
                console.log(err);
                res.status(500).json("Database Error");
            });

        });
	
	//  conn.query(sqlSelect, (err, result) => {
	// 	if (err) throw err;
	// 	res.send(JSON.stringify({ status: 200, error: null, response: result }));
	// 	 // For Indentor => Quotation add => keep track of quotation number
	// 	 var arr = [];

	// 	 var arr1 = 'true';
	// 	 var arr2 = 'false';
	// 	 var arr4 = [];

		 
		  

	// 		 // for (var i in result) {
	// 		 // console.log("arr", i);

	// 		 const sqlSelect = "SELECT * from quotation where prform_no='" + user.form_no + "' ";
	// 		 sqlRequest(sqlSelect, (err, result1) => {
	// 			if (err) throw err;

	// 			 console.log("user", user);
	// 			 console.log("result1", result1);
	// 			 cb();
			
							
	// 		 });
			 
		 
	// });
});




app.post("/api/prforms", async (req, res) => {

	let sqlSelect = `CALL new_procedure()`;
	conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
console.log("arra",result)
	});
});




// For indentor =>prform => select rate contract
app.post("/api/addrate", async (req, res) => {
	var values = [req.body.quotation_no, req.body.form_no, req.body.item_name, req.body.supp_name, req.body.q_cost, req.body.supp_address, req.body.supp_phone, 'N'];
	const sqlInsert = "insert into quotation values (?,?,?,?,?,?,?,?)";
	conn.query(sqlInsert, values, (err, result) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("duplicate primary key error");
				res.send(JSON.stringify({ status: 200, error: null, response: "Primar ke has been used before" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values")
				res.send(JSON.stringify({ status: 200, error: null, response: "Enter values in text boxes" }));
				return;
			}
			console.log(err);
			throw err;
		}
		else {
			var id=req.body.form_no;
			const sqlUpdate = "UPDATE prform set rate_contract='Y' where form_no=?";
			conn.query(sqlUpdate, id, (err, result) => {
			res.send(JSON.stringify({ status: 200, error: null, response: "PR Form details Added Sucessfully" }));
			});
		}

	});

});



// For indentor =>prform => select Quotation
app.post("/api/addquot", async (req, res) => {
	var values = [req.body.quotation_no, req.body.form_no, req.body.item_name, req.body.supp_name, req.body.q_cost, req.body.supp_address, req.body.supp_phone, 'N'];
	const count=req.body.quotation_no;

	const sqlInsert = "insert into quotation values (?,?,?,?,?,?,?,?)";
	conn.query(sqlInsert, values, (err) => {
		if (err) {
			if (err.code === 'ER_DUP_ENTRY') {
				console.log("duplicate primary key error");
				res.send(JSON.stringify({ status: 200, error: null, response: "Duplicate" }));
				return;
			}
			if (err.code === 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD') {
				console.log("Null values")
				res.send(JSON.stringify({ status: 200, error: null, response: "Enter values in text boxes" }));
				return;
			}
			console.log(result);
			throw err;
		}
		else {
			// console.log(result);
			if (count === 3) {
				var id = req.body.form_no;
				const sqlUpdate = "UPDATE prform set quotation='Y' where form_no=?";
				conn.query(sqlUpdate, id, (err) => {
					res.send(JSON.stringify({ status: 200, error: null, response: "PR Form details Added Sucessfully PR Updated" }));
				});
			}
			else
			res.send(JSON.stringify({ status: 200, error: null, response: "PR Form details Added Sucessfully" }));
		}

	});

});



//For Indentor => displa prform => For best Quotation selection
app.post("/api/prformquot", async (req, res) => {
	const sqlSelect = "SELECT * from prform INNER JOIN quotation on form_no=prform_no where  q_select='N' and quotation='Y' ";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));

	});
});

//For Indentor => maintainance =>maintainance/repair displa item
app.post("/api/dispitem", async (req, res) => {
	let dept = req.body.d_name;
	const sqlSelect = "select * from item where d_name='" + dept + "'";
	const test = conn.query(sqlSelect, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});

//For Indentor => maintainance=>transfer=> change dept
app.post("/api/changedept", async (req, res) => {
	let dept = req.body.dept;
	let code = req.body.code;
	const sqlUpdate = "UPDATE item set d_name='" + dept + "' where item_code='" + code + "'";
	const test = conn.query(sqlUpdate, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});

// for indentor => maintainance => repair => change work/not work status
app.post("/api/changework", async (req, res) => {
	let code = req.body.code;
	let stat = req.body.stat;
	const sqlUpdate = "update item set work_notwork='" + stat + "' where item_code='" + code + "'";
	const test = conn.query(sqlUpdate, (err, result) => {
		if (err) throw err;
		res.send(JSON.stringify({ status: 200, error: null, response: result }));
	});
});




//at the bottom of the code
app.listen(8000, () => {
	console.log("server started on port 8000...");
});