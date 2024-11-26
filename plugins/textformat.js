export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("textformat", {
    mounted(el, binding) {
      const formatCondition = {
        uppercase: binding.value.toUpperCase(),
        lowercase: binding.value.toLowerCase(),
      }
      el.innerHTML = formatCondition[binding.arg];
    },
  });
});
