//Express Web 服务器，我们在其中配置 CORS、初始化和运行 Express REST API。

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

const api = require("./app/api");

// 正则匹配,解析参数
const regex = /"([^"]+)":"([^"]+)"/g;
function replacer(match, p1, p2) {
    return `"${p1}":"${p2}"`;
}

// 简单示例接口
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
// 增
app.get("/createData", (req, res) => {
    const newData = req.query.newData
    api.createData(db.ph_bridge, newData).then(data => {
        res.json(data)
    })
});

// 删
app.get("/destroyData", (req, res) => {
    const whereDelData = req.query.whereDelData
    api.destroyData(db.ph_bridge, { where: whereDelData }).then(data => {
        res.json(data)
    })
});

// 查
app.get("/getData", (req, res) => {
    let data = req.query
    const pureObject = {};
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            pureObject[key] = JSON.parse(data[key].replace(regex, replacer));
        }
    }
    const whereData = pureObject.whereData
    api.getData(db.ph_bridge, { where: whereData }).then(data => {
        res.json(data)
    })
});

// 改
app.get("/updataData", (req, res) => {
    const whereData = req.query.whereData
    const newData = req.query.newData
    api.updataData(db.ph_bridge, { where: whereData }, newData).then(data => {
        res.json(data)
    })
});


// set port, listen for requests
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});