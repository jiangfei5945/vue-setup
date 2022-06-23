import { watch, Ref } from "vue";

export default function msgSetup(msg: Ref<string>): void {
  watch(msg, (val, oldVal) => {
    console.log("*******watch msg", val, oldVal);
  });
}
