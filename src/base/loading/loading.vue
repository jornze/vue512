<template>
  <div class="loading">
    <img width="40" height="40" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped>
  .loading {
    width: 100%;
    text-align: center;
  }
  .loading  .desc {
    line-height: 20px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
  }

</style>
