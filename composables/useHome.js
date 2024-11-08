import axios from 'axios';

export const useHome = () => {
  const newsList = ref([]);
  const isLoading = ref(false);

  // API 路徑 : https://nuxr3.zeabur.app/api/v1/home/news/
  // 使用 ES6 fetch() 或是 axios.get() 串接 API
  // 切換 isLoading 狀態

  const getData = async () => {
    isLoading.value = true;
    try {
      const res = await axios.get('https://nuxr3.zeabur.app/api/v1/home/news/')
      newsList.value = res.data.result;
    } catch(error) {
      console.log(error);
    }finally {
      isLoading.value = false;
    }
  };

  return {
    newsList, isLoading, getData
  };
};
