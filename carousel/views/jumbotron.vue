<template>
<div id="jumbotron " class="jumbotron text-center">
  <div class="container">
  <h1 >{{header}}</h1>
  <p class="lead"><slot></slot></p>
  <div class="col" >

 </div>
  </div>
  
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
#jumbotron{
  display:block;

}
</style>
