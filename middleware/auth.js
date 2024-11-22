export default defineNuxtRouteMiddleware(async () => {
  // 在 middleware 發出驗證之前判斷
  // 當程式在客戶端與 nuxtApp.isHydrating ( Hydration 渲染階段 )
  // 不執行中間件
  const nuxtApp = useNuxtApp();
  if (
    import.meta.client &&  
    nuxtApp.isHydrating &&
    nuxtApp.payload.serverRendered 
  ) {
    return;
  }

  // 開始進行身分驗證
  // 檢查 token 是否有值
  const token = useCookie("auth");
  if (!token.value) return navigateTo('/login'); // 沒有值，直接跳轉至登入頁面

  try {
    await $fetch("/user/check", {
      baseURL: "https://nuxr3.zeabur.app/api/v1",
      method: "GET",
        headers: {
          Authorization: token.value,
        },
    })
  } catch (error) {
    token.value = null;
    return navigateTo('/login');
  }
});