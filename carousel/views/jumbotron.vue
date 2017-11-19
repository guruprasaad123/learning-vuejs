<template>
<div class="jumbotron">
  <h1 class="display-5">{{header}}</h1>
  <p class="lead"><slot></slot></p>

</div>

</template>

<script>

module.exports = {
    props: {
      header:{required:true},

    },
    data(){
      return{

      };
    }

}

</script>
<style >

</style>
