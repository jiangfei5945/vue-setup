<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
    <van-button type="primary" @click="changeMsg">改变</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
    let msg = ref("hello");
    const changeMsg = () => {
      msg.value += " 12";
    };
    return { changeMsg, msg };
  },
});
</script>
