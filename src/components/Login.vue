<template>
    <div>
        <input type="button" value="test" @click="testPost"/>
        <el-button type="primary" @click="testPost">test</el-button>
    </div>
</template>

<script>
    import test from  '../api/test.js'

    export default {
        name: "Login",
        methods:{
            testPost(){
                test.hello();
            }
        }
    }
</script>

<style scoped>

</style>