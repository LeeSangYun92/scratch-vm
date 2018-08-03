// var PythonShell = require('python-shell');

// var options = {
//     mode: 'text',
//     pythonPath: 'C:/Users/LEESANGYUN/Anaconda3/python',
//     pythonOptions: ['-u'],
//     scriptPath: 'C:/Users/LEESANGYUN/Desktop/luxrobo_node/python-api-develop',
// };
//

// //GET
var request = require('request');
 
// 헤더 부분
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/x-www-form-urlencoded'
}
 
// 요청 세부 내용
var options = {
    url: 'http://localhost:3000/test',
    method: 'GET',
    headers: headers,
    qs: {}
}
 
class req{

    // test = function(){
        
    // }
    static req(){
        request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        })
        // PythonShell.run('main.py', options, function (err, results) {
        //     if (err) console.log('err msg : ', err);

        //     console.log('results: %j', results);
        // });
    }
}
// 요청 시작 받은값은 body


// const request = require("es6-request");

// // sends a GET request to http://api.somewebsite.com/endpoint?this=that&one=two&three=four
// request.get("http://localhost:3000/test")
// .then(([body, res]) => {
//     // ...
// });

module.exports = req;