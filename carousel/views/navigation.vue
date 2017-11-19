<template>


  <a class="nav-item nav-link" :href="reference">

    <slot></slot>
  </a>




</template>

<script>

module.exports = {
    props: {
      reference:{required:true},


    },
    data(){
      return{

      };
    }

}

</script>
<style >

</style>
