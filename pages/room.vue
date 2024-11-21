<script setup>
const router = useRouter();
const authCookie = useCookie("auth");
const { $swal } = useNuxtApp();

const signOut = () => {
  authCookie.value = null;
  $swal.fire({
      position: "center",
      icon: "success",
      title: "已登出",
      showConfirmButton: false,
      timer: 1500,
    });
  router.push('/login');
};

onMounted(() => {
  if(!authCookie.value) {
    $swal.fire({
      position: "center",
      title: "請先登入",
      showConfirmButton: false,
      timer: 1500,
    });
    router.push('/login');
  };
});
</script>

<template>
  <h1>目前為登入狀態</h1>
  <button type="button" class="btn btn-primary" @click="signOut">點我登出</button>
</template>

<style scoped></style>
