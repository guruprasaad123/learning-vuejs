<template>
  <div class="card card-block card-inverse card-primary ">
                <blockquote class="card-blockquote">
                  <p><slot></slot></p>
                  <footer>
                    <small>
                     <cite :title="source"> {{source}}</cite>
                    </small>
                  </footer>
                </blockquote>
              </div>

</template>

<script>

module.exports = {
    props: {
      source:{required:true},

    },
    data(){
      return{

      };
    }

}

</script>
<style >

</style>