<template>
    <div>
    <button @click='createOrder'>创建订单</button>
  </div>
</template>

<script>
import api from "~/api"
export default {
  components: {},
  data() {
    return {
     
    };
  },
  methods: {
    createOrder() {
      let data = {
        itemId: 1,
        num: 1,
        price: 111
      }
      api.postCreatOrder(data)
        .then(res => {
          console.log(res,'resres')
        })
        .catch(error => {

        });
    }
  },
  mounted() {
    console.log(qs)
  }
};
</script>

<style>
button {
  border-radius: 10px;
  border: 1px solid #666;
}
</style>
