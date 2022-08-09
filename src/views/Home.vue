<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
    <van-button type="primary" @click="changeMsg">改变</van-button>
    <van-button type="default" @click="goAbout">跳转About</van-button>
    <div>counterStore: {{ count }}</div>
    <van-button type="primary" @click="increase">增加</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, getCurrentInstance, computed } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useCounterStore } from "@/pinia/index";

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
    const counterStore = useCounterStore();

    const count = computed(() => {
      return counterStore.count;
    });

    const increase = () => {
      counterStore.increment();
    };

    return { changeMsg, msg, goAbout, count, increase };
  },
});
</script>
