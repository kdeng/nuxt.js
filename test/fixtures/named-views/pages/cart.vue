<template lang="html">
  <div class="main">
    <h1>Hello there</h1>
    <p>This is an example of a named views</p>

    <hr>
    <div>
      <div class="left">
        Left :
        <NuxtChild name="left" />
      </div>
      <div class="content">
        Footer:
        <NuxtChild name="footer" />
      </div>
    </div>
    <hr />
    THis is cart
  </div>
</template>

<script>
export default {
  name: 'Stage'
}
</script>

<style scoped>
  .main {
    margin: auto;
    max-width: 420px;
    padding: 10px;
  }

  .left {
    max-width: 150px;
    display: inline-block;
    vertical-align: top;
    border: 1px;
  }

  .left:empty {
    display: none;
  }

  .content {
    display: inline-block;
    background: green;
  }

</style>
