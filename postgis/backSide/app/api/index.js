
// 1.增
async function createData(database, data) {
    try {
        let count
        await database.create(data).then(res => {
            count = JSON.stringify(res)
        })
        console.log("count", count)
        return "成功添加" + count + "到数据库"
    } catch (error) {
        console.error('添加数据失败', error);
        return "添加失败"
    }
}
// 2.删
async function destroyData(database, whereData) {
    try {
        let count
        await database.destroy(whereData).then(res => {
            count = res
        })
        return "成功删除" + count + "条数据"
    } catch (error) {
        console.error('删除数据失败', error);
    }
}
// 3.改
async function updataData(database, whereData, newData) {
    try {
        let count
        await database.update(newData, whereData).then(res => {
            count = res
        })
        return "成功修改" + count + "条数据"
    } catch (error) {
        console.error('修改添加失败', error);
        return "修改失败"
    }
}
// 4.查
async function getData(database, whereData) {
    try {
        let result = []
        console.log(whereData)
        await database.findAll(whereData).then(items => {
            items.map((item) => {
                result.push(item.dataValues)
            })
        })
        return result
    } catch (error) {
        console.error('数据查询失败', error);
    }
}

module.exports = {
    createData,
    destroyData,
    updataData,
    getData
}