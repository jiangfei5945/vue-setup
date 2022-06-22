<template>
  <div>
    <van-button type="primary" @click="showPopup">展示弹出层</van-button>
    <van-popup position="bottom" :style="{ height: '20%' }" v-model="show">
      内容
    </van-popup>
  </div>
</template>
<script lang="ts">
import { defineComponent, h, ref } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    let show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    return { show, showPopup };
  },
});
</script>
