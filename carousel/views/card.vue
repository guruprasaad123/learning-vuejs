<template>

<div class="card text-center" :style="cardstyle">
    <img class="card-img-top img-fluid img-thumbnail"  :src="imagesrc" style="" alt="Card image cap">
    <div class="card-body"  style="color:black;" >
        <h4 class="card-title">{{title}}</h4>
        <p class="card-text" style="color:black;" > <slot></slot> </p>
        <p class="card-footer"><small class="text-muted">{{bottom}}</small></p>
    </div>
</div>

</template>

<script>

module.exports = {
    props: {
        title: {required: true},
        text: {default: "sample Text"},
        bottom:{ default:''},
        imagesrc:{default:''},
       cardstyle:{default:''}
    },
    data(){
      return{

      };
    }
}

</script>
<style >

</style>
