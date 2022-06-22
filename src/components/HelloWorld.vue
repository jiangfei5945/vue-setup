<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    {{ foo }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Helloworld",
  props: { msg: { type: String } },
  setup() {
    let foo = ref(0);
    setInterval(() => {
      foo.value++;
    }, 1000);
    onMounted(() => {
      console.log("*******onMounted");
    });
    return { foo };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
