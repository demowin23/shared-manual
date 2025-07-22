import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useNuxtApp } from 'nuxt/app';

export const useNewsStore = defineStore('news', () => {
  const news = ref([]);
  const total = ref(0);
  const isLoading = ref(false);
  const error = ref(null);
  const { $env } = useNuxtApp() as any;
  const urlBe = $env.URL_BE;

  async function getNewsList(page = 1, pageSize = 10,type = "news") {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${urlBe}/api/news?type=${type}&page=${page}&pageSize=${pageSize}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      news.value = data.items || data.data || [];
      total.value = data.total || data.count || 0;
      return data;
    } catch (err: any) {
      error.value = err?.message || 'Không thể tải danh sách tin tức.';
    } finally {
      isLoading.value = false;
    }
  }

  async function getNewsDetail(id: number|string) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${urlBe}/api/news/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (err: any) {
      error.value = err?.message || 'Không thể tải chi tiết tin tức.';
      return null;
    } finally {
      isLoading.value = false;
    }
  }

  async function createNews(payload: Record<string, any>) {
    isLoading.value = true;
    error.value = null;
    try {
      const formData = new FormData();
      for (const key in payload) {
        formData.append(key, payload[key]);
      }
      const response = await fetch(`${urlBe}/api/news`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return true;
    } catch (err: any) {
      error.value = err?.message || 'Có lỗi khi thêm tin tức.';
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  async function updateNews(id: number|string, payload: Record<string, any>) {
    isLoading.value = true;
    error.value = null;
    try {
      const formData = new FormData();
      for (const key in payload) {
        formData.append(key, payload[key]);
      }
      const response = await fetch(`${urlBe}/api/news/${id}`, {
        method: 'PUT',
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return true;
    } catch (err: any) {
      error.value = err?.message || 'Có lỗi khi cập nhật tin tức.';
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  async function deleteNews(id: number|string) {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${urlBe}/api/news/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return true;
    } catch (err: any) {
      error.value = err?.message || 'Xóa thất bại.';
      return false;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    news,
    total,
    isLoading,
    error,
    getNewsList,
    getNewsDetail,
    createNews,
    updateNews,
    deleteNews,
  };
}); 