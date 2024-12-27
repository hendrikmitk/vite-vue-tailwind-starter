import { readonly, ref } from 'vue';

/* Global state */
const count = ref<number>(0);

export const useCountState = () => {
  /* Local state */
  const incrementCount = (): void => {
    count.value += 1;
  };

  const resetCount = (): void => {
    count.value = 0;
  };

  return {
    count: readonly(count),
    incrementCount,
    resetCount,
  };
};
