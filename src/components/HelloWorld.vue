<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    foo:{{ foo }}
    <div>foo*2: {{ twiceFoo }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from "vue";
import fooSetup from "./composables/foo";
import msgSetup from "./composables/msg";

export default defineComponent({
  name: "Helloworld",
  props: { msg: { type: String, default: "" } },
  setup(props) {
    const { msg } = toRefs(props);
    msgSetup(msg);

    const { foo, twiceFoo } = fooSetup();

    onMounted(() => {
      console.log("*******onMounted 1");
    });

    onMounted(() => {
      console.log("*******onMounted 2");
    });

    return { foo, twiceFoo };
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
