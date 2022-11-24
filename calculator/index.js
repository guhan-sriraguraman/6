var cal=require('./cal');
var http=require("http");
var url=require("url");
var querystring=require("querystring");
function OnRequest(req,res)
{
    var path=url.parse(req.url).pathname;
    var query=url.parse(req.url).query;
    var a=querystring.parse(query)['num1'];
    var b=querystring.parse(query)['num2'];
    var sub=querystring.parse(query)['sub']
    if(sub=="+")
    {
        res.write("<h1>Result</h2>"+cal.add(a,b))
    }
    if(sub=="-")
    {
        res.write("<h1>Result</h2>"+cal.sub(a,b))
    }
    if(sub=="*")
    {
        res.write("<h1>Result</h2>"+cal.mul(a,b))
    }
    if(sub=="/")
    {
        res.write("<h1>Result</h2>"+cal.divi(a,b))
    }
    res.end();
};
http.createServer(OnRequest).listen(8080);
console.log("Server runnning");