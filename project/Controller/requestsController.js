const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const refundRequests = require("../Models/RefundRequests");
const reports = require("../Models/reports");
const requestAccess = require("../Models/RequestAccess");

exports.createRefundRequest = asyncHandler(async (req, res) => {
    refundRequests.create(req.body);
    res.send("Refund Request Sent");
  });

exports.createReport = asyncHandler(async (req, res) => {
    reports.create(req.body);
    res.send("Report Created");
  });

exports.createRequestAccess = asyncHandler(async (req, res) => {
    requestAccess.create(req.body);
    res.send("Access Request sent");
  });



exports.deleteRefundRequest = asyncHandler(async (req, res) => {
    refundRequests.findOneAndDelete({
        _id : req.params.id
      }).exec(function(err,user){
        if(err){
          response.send("Can not delete request");
        }
        else{
          response.send("Request done and deleted");
        }
      })
  });

exports.deleteReport = asyncHandler(async (req, res) => {
    reports.findOneAndDelete({
        _id : req.params.id
      }).exec(function(err,user){
        if(err){
          response.send("Can not delete report");
        }
        else{
          response.send("report resolved and deleted");
        }
      })  });

exports.deleteRequestAccess = asyncHandler(async (req, res) => {
    requestAccess.findOneAndDelete({
        _id : req.params.id
      }).exec(function(err,user){
        if(err){
          response.send("Can not delete request");
        }
        else{
          response.send("Request done and deleted");
        }
      })  
    });


exports.getRefundRequest = asyncHandler(async (req, res) => {
    const refReq = await refundRequests.findById(req.params.id);
    res.send(refReq);
  });

exports.getReport = asyncHandler(async (req, res) => {
    const reported = await reports.findById(req.params.id);
    res.send(reported);
  });

exports.getRequestAccess = asyncHandler(async (req, res) => {
    const reqAcc = await requestAccess.findById(req.params.id);
    res.send(reqAcc);
  });


exports.getClientReport = asyncHandler(async(req,res) => {
  const clientId = req.params.clientId;
  console.log(clientId);
  const yourReports = await reports.find({client : clientId}
  )
  if(yourReports.length == 0){
    res.send("You Do Not Have Any Reports");
    return;
  }

  res.send(yourReports);
})


exports.getAllRefundRequest = asyncHandler(async (req, res) => {
    const refReq = await refundRequests.find();
    res.send(refReq);
  });

exports.getAllReport = asyncHandler(async (req, res) => {
    const reported = await reports.find();
    res.send(reported);
  });

exports.getAllRequestAccess = asyncHandler(async (req, res) => {
    const reqAcc = await requestAccess.find();
    res.send(reqAcc);
  });


exports.changeReportStatus = asyncHandler(async (req, res) => {
    
    await reports.findByIdAndUpdate(req.params.id, {
        status: req.body.status,
      });
    res.send("Status Updated");
});



