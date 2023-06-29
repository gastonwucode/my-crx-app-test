<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      message: 'Hello World!',
      isRed: true,
      color: 'green'
    }
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed
    },
    toggleColor() {
      this.color = this.color === 'green' ? 'blue' : 'green'
    }
  },
  mounted() {
    // console.log("aaaa1")
  }
}
</script>

<template>
  <div id="app">
    <div >
      <ul style="">
        <li class="bg-red-500">
          <router-link  to="/" >Go to message 7</router-link>
        </li>
      </ul>
    </div>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<style>
ul{
  display:flex;
  flex-direction:column;
  width:50%;
}
li{
  width:500px;
  /*background:gray;*/
  margin:20px;
}
</style>
