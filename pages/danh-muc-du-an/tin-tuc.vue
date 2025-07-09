<template>
  <div class="news-category-page">
    <div class="header-row">
      <h2>Tin tức</h2>
    </div>
    <div v-if="isLoading" class="loading">Đang tải tin tức...</div>
    <div v-else>
      <div v-if="error" class="error">{{ error }}</div>
      <div v-else>
        <div class="main-content-layout">
          <div class="main-news">
            <!-- Bài viết đầu tiên nổi bật -->
            <div
              v-if="news.length"
              class="featured-news"
              @click="goToNewsDetail(news[0])"
            >
              <img
                v-if="news[0].image"
                :src="urlBe + '/uploads/' + news[0].image"
                alt="Ảnh tin nổi bật"
                class="featured-news-img"
              />
              <div class="featured-news-content">
                <div class="featured-news-title">{{ news[0].title }}</div>
                <div class="featured-news-intro">{{ news[0].short_intro }}</div>
              </div>
            </div>
            <!-- Danh sách các bài còn lại -->
            <div class="news-list">
              <div
                v-for="item in news.slice(1)"
                :key="item.id"
                class="news-row-card"
                @click="goToNewsDetail(item)"
                style="cursor: pointer"
              >
                <img
                  v-if="item.image"
                  :src="urlBe + '/uploads/' + item.image"
                  alt="Ảnh tin"
                  class="news-row-img"
                />
                <div class="news-row-content">
                  <div class="news-row-title">{{ item.title }}</div>
                  <div class="news-row-meta">
                    <span class="news-row-date">
                      <i class="fa fa-calendar"></i>
                      {{
                        item.created_at
                          ? new Date(item.created_at).toLocaleDateString(
                              "vi-VN"
                            )
                          : ""
                      }}
                    </span>
                    <span class="news-row-views">
                      <i class="fa fa-eye"></i>
                      {{ item.views || 0 }} Lượt xem
                    </span>
                  </div>
                  <div class="news-row-intro">{{ item.short_intro }}</div>
                  <a
                    :to="`/tin-tuc/${item.id}-${slugify(item.title)}`"
                    class="news-row-readmore"
                  >
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
            <div class="pagination">
              <button @click="changePage(page - 1)" :disabled="page === 1">
                &lt;
              </button>
              <span>Trang {{ page }} / {{ totalPages }}</span>
              <button
                @click="changePage(page + 1)"
                :disabled="page === totalPages"
              >
                &gt;
              </button>
            </div>
          </div>
          <aside class="sidebar-latest-news">
            <h3 class="sidebar-title">Tin tức mới nhất</h3>
            <div v-if="latestLoading" class="loading">Đang tải...</div>
            <div v-else>
              <div
                v-for="item in latestNews"
                :key="item.id"
                class="latest-news-item"
              >
                <img
                  v-if="item.image"
                  :src="urlBe + '/uploads/' + item.image"
                  alt="Ảnh tin mới"
                  class="latest-news-img"
                />
                <div class="latest-news-content">
                  <nuxt-link
                    :to="`/tin-tuc/${item.id}-${slugify(item.title)}`"
                    class="latest-news-title"
                  >
                    {{ item.title }}
                  </nuxt-link>
                  <div v-if="item.short_intro" class="latest-news-intro">
                    {{ item.short_intro }}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useNewsStore } from "~/store/useNews";
import { useRouter } from "vue-router";
const router = useRouter();
const newsStore = useNewsStore();
const { $env } = useNuxtApp() as any;
const urlBe = $env.URL_BE;
const page = ref(1);
const pageSize = ref(8);
const news = ref([]);
const isLoading = computed(() => newsStore.isLoading);
const error = computed(() => newsStore.error);
const totalPages = computed(
  () => Math.ceil(newsStore.total / pageSize.value) || 1
);

// Sidebar: Tin mới nhất
const latestNews = ref([]);
const latestLoading = ref(false);
async function fetchLatestNews() {
  latestLoading.value = true;
  try {
    // Gọi API với is_featured=true, pageSize=6
    const params = new URLSearchParams({
      page: "1",
      pageSize: "6",
      is_featured: "true",
    });
    const response = await fetch(`${urlBe}/api/news?${params.toString()}`);
    const data = await response.json();
    latestNews.value = data;
  } finally {
    latestLoading.value = false;
  }
}

async function fetchNews() {
  news.value = await newsStore.getNewsList(page.value, pageSize.value);
}

onMounted(() => {
  fetchNews();
  fetchLatestNews();
});

async function changePage(newPage) {
  if (newPage < 1 || newPage > totalPages.value) return;
  page.value = newPage;
  await fetchNews();
}
function slugify(text: string) {
  const from =
    "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ";
  const to =
    "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD";
  let slug = text;
  for (let i = 0; i < from.length; i++) {
    slug = slug.replace(new RegExp(from[i], "g"), to[i]);
  }
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
function goToNewsDetail(news: any) {
  const slug = slugify(news.title || "");
  router.push(`/tin-tuc/${news.id}-${slug}`);
}
</script>

<style scoped>
.news-category-page {
  max-width: 1200px;
  margin: 40px auto;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
  font-size: 1.08rem;
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
.main-content-layout {
  display: flex;
  gap: 32px;
}
.main-news {
  flex: 2 1 0%;
  min-width: 0;
}
.sidebar-latest-news {
  flex: 1 1 0%;
  min-width: 260px;
  max-width: 340px;
  background: #f7fafd;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 24px 18px 18px 18px;
  height: fit-content;
}
.sidebar-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1a237e;
  margin-bottom: 18px;
  margin-top: 0;
}
.latest-news-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}
.latest-news-img {
  width: 60px;
  height: 48px;
  object-fit: cover;
  border-radius: 6px;
  background: #e3e8ee;
}
.latest-news-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.latest-news-title {
  color: #007bff;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  line-height: 1.3;
  transition: color 0.2s;
}
.latest-news-title:hover {
  color: #0056b3;
  text-decoration: underline;
}
.latest-news-intro {
  color: #555;
  font-size: 13px;
  margin-top: 2px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
@media (max-width: 900px) {
  .main-content-layout {
    flex-direction: column;
    gap: 0;
  }
  .sidebar-latest-news {
    max-width: 100%;
    margin-top: 32px;
    padding: 18px 8px 12px 8px;
  }
}
.news-list {
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 32px;
}
.news-row-card {
  display: flex;
  background: #fafbfc;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  align-items: stretch;
}
.news-row-img {
  width: 240px;
  height: 160px;
  object-fit: cover;
  flex-shrink: 0;
  background: #e3e8ee;
  display: block;
}
.news-row-content {
  flex: 1;
  padding: 18px 24px 18px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.news-row-category {
  color: #2196f3;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
}
.news-row-title {
  font-size: 1.35rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 8px;
  line-height: 1.3;
}
.news-row-meta {
  font-size: 0.98rem;
  color: #888;
  margin-bottom: 8px;
  display: flex;
  gap: 18px;
  align-items: center;
}
.news-row-meta i {
  margin-right: 4px;
}
.news-row-intro {
  color: #444;
  font-size: 1rem;
  margin-bottom: 10px;
  line-height: 1.5;
}
.news-row-readmore {
  color: #1976d2;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: auto;
  transition: color 0.2s;
}
.news-row-readmore:hover {
  color: #0d47a1;
  text-decoration: underline;
}
@media (max-width: 900px) {
  .news-row-card {
    flex-direction: column;
  }
  .news-row-img {
    width: 100%;
    height: 180px;
  }
  .news-row-content {
    padding: 14px 8vw 14px 8vw;
  }
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
  transition: background 0.2s, color 0.2s;
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
  font-size: 18px;
  margin: 40px 0;
}
.error {
  color: #d32f2f;
  margin-top: 18px;
  text-align: center;
  font-size: 17px;
}
.featured-news {
  display: block;
  margin-bottom: 44px;
  background: linear-gradient(90deg, #e3f0ff 0%, #f5f8fd 100%);
  border-radius: 18px;
  box-shadow: 0 6px 32px rgba(0, 0, 0, 0.1);
  padding: 0 0 32px 0;
  overflow: hidden;
}
.featured-news-img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 18px 18px 0 0;
  background: #e3e8ee;
  box-shadow: 0 2px 16px rgba(0, 123, 255, 0.1);
  display: block;
}
.featured-news-content {
  padding: 24px 32px 0 32px;
}
.featured-news-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #222;
  margin-bottom: 16px;
  line-height: 1.25;
}
.featured-news-intro {
  color: #333;
  font-size: 1.08rem;
  line-height: 1.6;
}
@media (max-width: 900px) {
  .featured-news-img {
    height: 180px;
    border-radius: 12px 12px 0 0;
  }
  .featured-news-content {
    padding: 14px 8vw 0 8vw;
  }
  .featured-news-title {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
}
@media (max-width: 700px) {
  .news-category-page {
    padding: 12px 2vw;
  }
  .header-row h2 {
    font-size: 1.2rem;
  }
  .news-list {
    gap: 14px;
  }
}
body {
  font-size: 1.08rem;
}
</style>
