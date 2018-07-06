//引入http
let http = require("http");
//引入fs模块
let fs = require("fs");

//开启服务
http
  .createServer((request, response) => {
    //设施响应头
    response.setHeader("content-type", "text/html;chartset=utf-8");
    //读取文件
    let temFs = fs.readFileSync("./tem/tem.html", "utf-8");
    console.log(temFs);
    //返回
    response.end(temFs);
  })
  .listen(80, "127.0.0.1", () => {
    console.log("success");
  });
