<script setup>
const { $useLoading } = useNuxtApp();

const pureColor = ref("green");
const gradientColor = ref(
  "linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)"
);

const loadingHandler = $useLoading({
  backgroundColor: "red",
  loader: "dots",
  "is-full-page": false,
});

function openLoading() {
  // 開啟讀取效果
  const loader = loadingHandler.show();
  setTimeout(() => {
    // 關閉讀取效果
    loader.hide();
  }, 1000);
}
</script>

<template>
  <div class="container">
    <h1>Nuxt3 整合 vue3-colorpicker 插件</h1>
    <ClientOnly>
      <ColorPicker
        v-model:pureColor="pureColor"
        v-model:gradientColor="gradientColor"
      />
    </ClientOnly>
  </div>

  <button type="button" @click="openLoading">開啟 Loading 效果</button>
</template>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
</style>
