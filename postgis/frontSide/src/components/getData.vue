<template>
    <div>{{ result }}</div>
    <button @click="getData">查询数据</button>
    <button @click="updateData">修改数据</button>
    <button @click="destroyData">删除数据</button>
    <button @click="createData">增加数据</button>
</template>
<script>
import axios from 'axios'
export default {
    name: "getData",
    data() {
        return {
            result: "我是默认内容"
        }
    },
    methods: {
        createData() {
            axios.get('http://localhost:8080/createData', {
                params: {
                    newData: {
                        名称: '我是前端增加的数据',
                    }
                }
            }).then(response => {
                this.result = response.data
            })
        },
        destroyData() {
            axios.get('http://localhost:8080/destroyData', {
                params: {
                    whereDelData: {
                        名称: '我是前端',
                    }
                }
            }).then(response => {
                this.result = response.data
            })
        },
        getData() {
            axios.get('http://localhost:8081/getData', {
                params: {
                    newData: {
                        名称: '我是前端',
                    },
                    whereData: {
                        类别: "桥涵码头",
                        名称: '我是前端'
                    }
                }
            }).then(response => {
                this.result = response.data
            })
        },
        updateData() {
            // const queryString = new URLSearchParams(params).toString();
            axios.get('http://localhost:8080/updataData', {
                params: {
                    newData: {
                        名称: '我是前端',
                    },
                    whereData: {
                        名称: "叫什么名字好呢222",
                    }
                }
            }).then(response => {
                this.result = response.data
            })
        }
    }
}
</script>
  
<style></style>
  
  