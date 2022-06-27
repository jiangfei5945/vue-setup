<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
    <van-button type="primary" @click="changeMsg">改变</van-button>
    <van-button type="default" @click="goAbout">跳转About</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: { HelloWorld },
  setup() {
    console.log("********$route", getCurrentInstance());
    let msg = ref("hello");
    const changeMsg = () => {
      msg.value += " 12";
    };
    const goAbout = () => {
      // router.push("/about");
    };
    return { changeMsg, msg, goAbout };
  },
});
</script>
