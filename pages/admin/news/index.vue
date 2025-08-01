<template>
  <div class="news-list-page">
    <div class="header-row">
      <h2>Quản lý bài viết</h2>
      <nuxt-link to="/admin/news/add" class="add-btn"
        >+ Thêm bài viết</nuxt-link
      >
    </div>
    <div class="options">
      <select name="type" id="type" v-model="type" class="type-select">
        <option value="news">Tin tức</option>
        <option value="wiki">Wiki</option>
      </select>
    </div>
    <div>
      <table class="news-table">
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Giới thiệu</th>
            <th>Ảnh</th>
            <th>Nổi bật</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in news"
            :key="item.id"
            @click="goToNewsDetail(item)"
            style="cursor: pointer"
          >
            <td>{{ item.title }}</td>
            <td>{{ item.short_intro }}</td>
            <td>
              <img
                v-if="item.image"
                :src="urlBe + '/uploads/' + item.image"
                alt="Ảnh"
                style="max-width: 80px"
              />
            </td>
            <td>
              <span v-if="item.is_featured">✔</span>
            </td>
            <td>
              <button @click.stop="openEditModal(item)" class="edit-btn">
                Sửa
              </button>
              <button @click.stop="deleteNews(item.id)" class="delete-btn">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pagination">
        <button @click="changePage(page - 1)" :disabled="page === 1">
          &lt;
        </button>
        <span>Trang {{ page }} / {{ totalPages }}</span>
        <button @click="changePage(page + 1)" :disabled="page === totalPages">
          &gt;
        </button>
      </div>
    </div>
    <div v-if="newsStore.error" class="error">{{ newsStore.error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { useNewsStore } from "~/store/useNews";
import { useRouter } from "vue-router";

// Set page title for admin layout
definePageMeta({
  layout: "admin",
  pageTitle: "Quản lý Tin tức",
});

const newsStore = useNewsStore();
const { $env } = useNuxtApp() as any;
const urlBe = $env.URL_BE;
const page = ref(1);
const pageSize = ref(10);
const totalPages = computed(
  () => Math.ceil(newsStore.total / pageSize.value) || 1
);
let news = ref([]);
const type = ref("news");

onMounted(() => {
  // Load news data
  loadNews();
});

const loadNews = async () => {
  try {
    news.value = await newsStore.getNewsList(
      page.value,
      pageSize.value,
      type.value
    );
  } catch (error) {
    console.error("Error loading news:", error);
  }
};

watch(
  type,
  () => {
    newsStore
      .getNewsList(page.value, pageSize.value, type.value)
      .then((res) => {
        news.value = res;
      });
  },
  {
    immediate: true,
  }
);

function openEditModal(item) {
  // Chuyển hướng sang trang chỉnh sửa thay vì mở modal
  router.push(`/admin/news/edit/${item.id}`);
}

async function deleteNews(id) {
  if (!confirm("Bạn có chắc muốn xóa tin này?")) return;
  const ok = await newsStore.deleteNews(id);
  if (ok) {
    await newsStore.getNewsList(page.value, pageSize.value);
  }
}

async function changePage(newPage) {
  if (newPage < 1 || newPage > totalPages.value) return;
  page.value = newPage;
  await newsStore.getNewsList(page.value, pageSize.value);
}

// Hàm slugify lấy từ ProjectItem.vue
function slugify(text: string) {
  const from =
    "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ";
  const to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD";
  let slug = text;
  for (let i = 0; i < from.length; i++) {
    slug = slug.replace(new RegExp(from[i], "g"), to[i]);
  }
  slug = slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  slug = slug.replace(/-+/g, "-");
  slug = slug.replace(/^-+|-+$/g, "");
  return slug;
}

const router = useRouter();

function goToNewsDetail(news: any) {
  const slug = slugify(news.title || "");
  router.push(`/admin/news/${news.id}-${slug}`);
}
</script>

<style scoped>
.news-list-page {
  max-width: 1100px;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  padding: 40px 32px 32px 32px;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.header-row h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin: 0;
}

.add-btn {
  background: linear-gradient(90deg, #007bff 60%, #0056b3 100%);
  color: #fff;
  border-radius: 8px;
  padding: 10px 26px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.08);
  border: none;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  outline: none;
}

.add-btn:hover {
  background: linear-gradient(90deg, #0056b3 60%, #007bff 100%);
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.18);
}

.news-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-bottom: 24px;
  background: #f9fbfd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
}

.news-table th,
.news-table td {
  border-bottom: 1px solid #e3e8ee;
  padding: 12px 14px;
  text-align: left;
  font-size: 15px;
}

.news-table th {
  background: #f1f5fa;
  font-weight: 600;
  color: #333;
  font-size: 16px;
}

.news-table tr:last-child td {
  border-bottom: none;
}

.news-table tbody tr {
  transition: background 0.18s;
}

.news-table tbody tr:hover {
  background: #e6f0fa;
  cursor: pointer;
}

.edit-btn {
  color: #fff;
  background: linear-gradient(90deg, #007bff 60%, #0056b3 100%);
  border: none;
  border-radius: 6px;
  padding: 7px 18px;
  font-size: 15px;
  font-weight: 500;
  margin-right: 8px;
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(0, 123, 255, 0.08);
}

.edit-btn:hover {
  background: linear-gradient(90deg, #0056b3 60%, #007bff 100%);
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.18);
}

.delete-btn {
  color: #fff;
  background: linear-gradient(90deg, #d32f2f 60%, #b71c1c 100%);
  border: none;
  border-radius: 6px;
  padding: 7px 18px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 1px 4px rgba(211, 47, 47, 0.08);
}

.delete-btn:hover {
  background: linear-gradient(90deg, #b71c1c 60%, #d32f2f 100%);
  box-shadow: 0 2px 8px rgba(211, 47, 47, 0.18);
}

.pagination {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
}

.pagination button {
  background: #f1f5fa;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  color: #007bff;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.pagination button:disabled {
  color: #aaa;
  background: #f3f3f3;
  cursor: not-allowed;
}

.pagination button:not(:disabled):hover {
  background: #eaf3ff;
  color: #0056b3;
}

.loading {
  text-align: center;
  color: #888;
}

.error {
  color: #d32f2f;
  margin-top: 12px;
  text-align: center;
}

.options {
  margin: 20px 0;
}

.type-select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
  background-color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  max-width: 150px;
}

.type-select:hover {
  border-color: #7f53ac;
}

.type-select:focus {
  outline: none;
  border-color: #7f53ac;
  box-shadow: 0 0 0 2px rgba(127, 83, 172, 0.2);
}

@media (max-width: 768px) {
  .news-list-page {
    padding: 12px 2vw;
  }

  .news-table th,
  .news-table td {
    padding: 8px 4px;
    font-size: 14px;
  }

  .header-row h2 {
    font-size: 1.2rem;
  }

  .add-btn {
    font-size: 13px;
    padding: 7px 12px;
  }
}
</style>
