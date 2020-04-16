/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if(initUnit === "no unit") {
        res.status(200).send({
          initNum : initNum,
          initUnit : initUnit,
          
        })
      } else if(initNum === "invalid number") {
        res.status(200).send({
          initNum : initNum,
          initUnit : initUnit,
          
        })

      } else if(initUnit === "invalid unit") {
        res.status(200).send({

          initNum : parseFloat(initNum),
          initUnit : initUnit,
          
        })

      } else if(initUnit === "invalid unit" && initNum === "invalid number") {
        res.status(200).send({

          initNum : initNum,
          initUnit : initUnit,
          
        })

      } else {
        res.status(200).json({
          initNum : parseFloat(initNum),
          initUnit : initUnit,
          returnNum : parseFloat(returnNum),
          returnUnit : returnUnit,
          string : toString
        })
      }

      
    });
    
};
