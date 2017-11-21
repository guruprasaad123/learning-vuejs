<template>

 <div class="card text-center" style="width: 20rem;margin-right:150px">
              <div class="card-body">
                <h4 class="card-title" >{{title}}</h4>
                <p class="card-text">
              <slot>
              </slot>   
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>

</template>

<script>

module.exports = {
    props: {
        title: {required: true},
       styling:{default:''}
    },
    methods:{
        anchor(head)
        {
return `<a href="#" >${head}</a>`
        }

    },
    data(){
      return{

      };
    }

}

</script>
<style scoped>
span{
      color:gray;
  font-weight:bolder;
}
</style>
