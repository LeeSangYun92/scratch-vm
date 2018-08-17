
var request = require('request');
// // 헤더 부분
// var headers = {
//     'User-Agent':       'Super Agent/0.0.1',
//     'Content-Type':     'application/x-www-form-urlencoded'
// }
 
// // 요청 세부 내용
// var options = {
//     url: 'http://localhost:3000/test',
//     method: 'POST',
//     headers: headers,
// }

class req{

    static ledOn(num){
        request({url : 'http://localhost:3000/led/on',
        method : 'POST',
        form : {
            NUM : num
        }
         
    }, function(error, response, body){
        console.log(body);
    });
    }
    static ledOff(num){
        request({
            url : 'http://localhost:3000/led/off',
            method : 'POST',
            form : {
                NUM : num
            }
    }, function(error, response, body){
        console.log(body);
    });
    }
    static ledRGB(num,r,g,b){
        request({
            url : 'http://localhost:3000/led/rgb',
            method : 'POST',
            form : {
                NUM : num,
                R : r,
                G : g,
                B : b
            }
        }, function(error, response, body){
            console.log(body);
        });
    }
    // static buttonPressed(){
    //     request({
    //         url : 'http://localhost:3000/button/pressed',
    //         method : 'POST'

    //     }, function(error, response, body){
    //         body *= 1;
    //         return body;
    //     });
    // }
    static speakerOn(num,volume){
        request({
            url : 'http://localhost:3000/speaker/on',
            method : 'POST',
            form : {
                NUM : num,
                VOLUME : volume
            }
        }, function(error, response, body){
            console.log(body);
        });
    }
    static speakerOff(num){
        request({
            url : 'http://localhost:3000/speaker/off',
            method : 'POST',
            form : {
                NUM : num
            }
    }, function(error, response, body){
        console.log(body);
    });
    }
    static displayText(num,msg){
        request({
            url : 'http://localhost:3000/display/text',
            method : 'POST',
            form : {
                NUM : num,
                MSG : msg
            }
        }, function(error, response, body){
            console.log(body);
        });
    }
    static motorSpeed(num,up_speed,down_speed)
    {
        request({
            url : 'http://localhost:3000/motor/speed',
            method : 'POST',
            form : {
                NUM : num,
                UP_SPEED : up_speed,
                DOWN_SPEED : down_speed
            }
        }, function(error, response, body){
            console.log(body);
        });
    }
}

module.exports = req;