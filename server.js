var express=require("express"),
	app=express(),
	  mongojs=require("mongojs"),
    db=mongojs("requestDetail",["employeedetails"]),
	bodyParser = require("body-parser");



app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get("/requestDetail", function (request, response) {
    db.requestDetail.find(function (err, data) {
        console.log(data);
        response.json(data);
    });
}); 

app.post("/requestDetail", function (req, res) {
    // console.log(req.body);
    db.requestDetail.insert(req.body, function (err, data) {
        res.json(data);
    })
});
app.get('/requestDetail/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    //findOne(..)- code to find one specific employee details from the database
    db.requestDetail.findOne({
        _id: mongojs.ObjectId(id)
    }, function (err, docs) {
        res.json(docs);
    });
});
app.put("/requestDetail/:id", function (req, res) {
    var id = req.params.id;
    // console.log(req.body.name);
    db.requestDetail.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: {
                designation: req.body.designation,
                position: req.body.position,
                no: req.body.numbers,
                competency: req.body.competency,
                location: req.body.location
            }
        },
        new: true
    }, function (err, data) {
        res.json(data);
    });
});
// ---- ---------------------------------
app.get("/employeedetails",function(request,response) {
    


    db.employeedetails.find(function(err,data) {
        console.log(data);
        response.json(data);
    });
});
app.post("/employeedetails" , function(req , res) {
    console.log(req.body);
    db.employeedetails.insert(req.body, function(err , data) {
        res.json(data);
    })
});
// app.get('/employeedetails/:id', function(req, res) {
//     var id = req.params.id;
//     console.log(id);
//     db.employeedetails.findOne({
//         _id: mongojs.ObjectId(id)
//     }, function(err, docs) {
//         res.json(docs);
//     });
// }); 
app.get('/employeedetails/:id', function(req, res){
    var id = req.params.id;
    console.log(id); 
    //findOne(..)- code to find one specific employee details from the database
    db.employeedetails.findOne({_id: mongojs.ObjectId(id)}, function(err, docs){
        res.json(docs);
    });
});

app.put("/employeedetails/:id" , function(req , res) {
    var id = req.params.id;
    // console.log(req.body.name);
    db.employeedetails.findAndModify({query : {_id : mongojs.ObjectId(id)},
        update : {$set : {empid : req.body.phoneNumber , empname : req.body.firstName , title : req.body.userSelect, position :req.body.position,competency :req.body.competencySelect}},
        new : true} ,function(err,data) {
            res.json(data);
        }
    );
});


app.listen(3000,function() {
	console.log("Server running on port 3000");
})