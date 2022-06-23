import { ref, computed, watch, Ref, ComputedRef, onMounted } from "vue";

export default function fooSetup(): {
  foo: Ref<number>;
  twiceFoo: ComputedRef<number>;
} {
  const foo = ref(0);

  setInterval(() => {
    foo.value++;
  }, 1000);

  watch(
    () => foo.value + 100,
    (val, oldVal) => {
      console.log("*******watch foo", val, oldVal);
    }
  );

  onMounted(() => {
    console.log("*******onMounted foo");
  });

  const twiceFoo = computed(() => foo.value * 2);
  return { foo, twiceFoo };
}
