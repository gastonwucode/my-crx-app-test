<script>
export default{
  data() {
    return {
      message: 'Hello World!',
      isRed: true,
      color: 'green'
    }
  },
  mounted() {

    console.log("mounted.console.log 1234567 ");
  },
  methods: {
    toggleRed() {
      this.isRed = !this.isRed
    },
    toggleColor() {
      this.color = this.color === 'green' ? 'blue' : 'green'
    }
  }
}
</script>
<template>
  <div class="messageDiv" @click="toggleColor" >message {{color}}</div>
</template>
<style>
.messageDiv{
  color:red;
}
</style>
