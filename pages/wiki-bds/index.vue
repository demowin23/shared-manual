<template>
  <div class="cat-title text-center">
    <p class="cat_name">{{ projectStore.menuPage }}</p>
    <div class="clear"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-9" id="content_page">
        <!-- PHẦN GIỚI THIỆU WIKI BẤT ĐỘNG SẢN -->
        <div class="wiki-intro">
          <h1 class="wiki-title">Wiki Bất động sản</h1>
          <p class="wiki-desc">
            Nơi tổng hợp kiến thức, kinh nghiệm, quy định pháp luật và các thông
            tin hữu ích về bất động sản tại Việt Nam. Dành cho người mới, nhà
            đầu tư, môi giới và tất cả ai quan tâm đến lĩnh vực này.
          </p>
          <img
            src="/images/nhung-cau-nen-hoi-moi-gioi-truoc-khi-mua-nha.png"
            alt="Wiki Bất động sản"
            class="wiki-banner"
          />
        </div>

        <!-- NỘI DUNG NỔI BẬT (BÀI VIẾT NỔI BẬT) -->
        <div class="wiki-featured">
          <h2 class="section-title">Nội dung nổi bật</h2>
          <div class="featured-list">
            <div
              v-for="article in featuredArticles"
              :key="article.id"
              class="featured-card"
            >
              <img
                v-if="article.image"
                :src="getImageUrl(article.image)"
                class="featured-img"
                :alt="article.title"
              />
              <div class="featured-content">
                <h3 class="featured-title">{{ article.title }}</h3>
                <p class="featured-desc">
                  {{ article.short_intro || article.description }}
                </p>
                <a
                  :href="
                    '/wiki-bds/' + article.id + '-' + slugify(article.title)
                  "
                  class="featured-link"
                  >Đọc chi tiết</a
                >
              </div>
            </div>
          </div>
        </div>

        <!-- DANH SÁCH BÀI VIẾT (MOCK DATA) -->
        <div class="wiki-list">
          <h2 class="section-title">Danh sách bài viết</h2>
          <div v-if="isLoading" class="wiki-loading">Đang tải...</div>
          <div v-else-if="articles.length === 0" class="wiki-empty">
            Chưa có bài viết wiki nào.
          </div>
          <div v-else>
            <div
              v-for="article in articles"
              :key="article.id"
              class="wiki-article-card"
            >
              <img
                v-if="article.image"
                :src="getImageUrl(article.image)"
                class="wiki-article-img"
                alt="Ảnh bài viết"
              />
              <div class="wiki-article-content">
                <h3 class="wiki-article-title">{{ article.title }}</h3>
                <div class="wiki-article-meta">
                  <span v-if="article.author"
                    ><i class="fa fa-user"></i> {{ article.author }}</span
                  >
                  <span v-if="article.date"
                    ><i class="fa fa-calendar"></i>
                    {{ formatDate(article.date) }}</span
                  >
                </div>
                <div class="wiki-article-desc">
                  {{ article.short_intro || article.description }}
                </div>
                <a
                  :href="
                    '/wiki-bds/' + article.id + '-' + slugify(article.title)
                  "
                  class="wiki-article-link"
                  >Xem chi tiết</a
                >
              </div>
            </div>
            <div v-if="totalPages > 1" class="wiki-pagination">
              <button :disabled="page === 1" @click="changePage(page - 1)">
                &lt;
              </button>
              <span>Trang {{ page }} / {{ totalPages }}</span>
              <button
                :disabled="page === totalPages"
                @click="changePage(page + 1)"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3" id="content_right">
        <link rel="stylesheet" type="text/css" href="/css/menu.css" /><link
          rel="stylesheet"
          type="text/css"
          href="/css/styles_menu.css"
        />

        <div class="box-left">
          <div class="head_title4">
            <p>
              DỰ ÁN NỔI BẬT <i class="fa fa-star mr_5" aria-hidden="true"></i>
            </p>
          </div>
          <div class="clear"></div>
          <div class="border_box">
            <div class="pd10">
              <div
                class="row news_right post_hot"
                v-for="project in projects"
                :key="project.id"
              >
                <div class="col-md-12 col-sm-12 col-xs-12 img">
                  <a
                    :title="project.name"
                    :href="`/chi-tiet/${project.id}-${slugify(project.name)}`"
                  >
                    <img
                      class="img-responsive img-hover"
                      :src="`${urlBe}/uploads/${project.images[0]}`"
                  /></a>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 info">
                  <a
                    :title="project.name"
                    :href="`/chi-tiet/${project.id}-${slugify(project.name)}`"
                    >{{ project.name }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "~/store/useProject";
import { useNewsStore } from "~/store/useNews";

export default {
  components: { ProjectItem },
  data() {
    return {
      projectStore: useProjectStore(),
      newsStore: useNewsStore(),
      projects: [],
      articles: [],
      featuredArticles: [],
      page: 1,
      pageSize: 10,
      total: 0,
      isLoading: false,
      isLoadingFeatured: false,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize) || 1;
    },
  },
  setup() {
    const { $env } = useNuxtApp();
    const urlBe = $env.URL_BE;
    return { urlBe };
  },
  watch: {},
  methods: {
    slugify(text) {
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
    },
    formatDate(dateStr) {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      return d.toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
    },
    getImageUrl(image) {
      if (!image) return "";
      if (image.startsWith("http")) return image;
      const { $env } = useNuxtApp();
      const urlBe = $env.URL_BE;
      return `${urlBe}/uploads/${image}`;
    },
    async fetchWikiArticles(page = 1) {
      this.isLoading = true;
      this.articles = await this.newsStore.getNewsList(
        page,
        this.pageSize,
        "wiki"
      );
      this.isLoading = false;
    },
    async fetchFeaturedWiki() {
      this.isLoadingFeatured = true;
      try {
        const params = new URLSearchParams({
          page: "1",
          pageSize: "5", // lấy tối đa 5 bài nổi bật
          is_featured: "true",
          type: "wiki",
        });
        const { $env } = useNuxtApp();
        const urlBe = $env.URL_BE;
        const response = await fetch(`${urlBe}/api/news?${params.toString()}`);
        const data = await response.json();
        console.log(data);
        this.featuredArticles = data;
      } finally {
        this.isLoadingFeatured = false;
      }
    },
    async changePage(newPage) {
      if (newPage < 1 || newPage > this.totalPages) return;
      this.page = newPage;
      await this.fetchWikiArticles(this.page);
    },
    async fetchProjects() {
      const store = useProjectStore();
      await store.fetchProjects(1, 5);
      this.projects = store.projects;
    },
  },
  async created() {
    await this.fetchProjects();
    await this.fetchWikiArticles(1);
    await this.fetchFeaturedWiki();
  },
};
</script>

<style scoped>
.wiki-intro {
  padding: 32px 24px 24px 24px;
  margin-bottom: 32px;
  text-align: center;
}
.wiki-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #7f53ac;
  margin-bottom: 12px;
}
.wiki-desc {
  font-size: 1.5rem;
  color: #444;
  margin-bottom: 18px;
}
.wiki-banner {
  width: 100%;
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 2px 8px rgba(127, 83, 172, 0.08);
}
.wiki-featured {
  margin-bottom: 36px;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #7f53ac;
  margin-bottom: 18px;
}
.featured-list {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.featured-card {
  background: #fff7e6;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(255, 193, 7, 0.08);
  padding: 8px 6px 6px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  min-width: 0;
}
.featured-img {
  width: 100%;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(127, 83, 172, 0.08);
  margin-bottom: 8px;
}
.featured-content {
  flex: 1;
}
.featured-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #d48806;
  margin-bottom: 4px;
  text-align: center;
}
.featured-desc {
  color: #444;
  font-size: 1.3rem;
  margin-bottom: 6px;
  text-align: center;
}
.featured-link {
  color: #7f53ac;
  font-weight: 600;
  text-decoration: underline;
  font-size: 1.3rem;
}
.wiki-list {
  margin-top: 18px;
}
.wiki-article-card {
  display: flex;
  align-items: flex-start;
  background: #f9fbfd;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.04);
  padding: 18px 14px 14px 14px;
  margin-bottom: 22px;
  gap: 18px;
  transition: box-shadow 0.18s;
}
.wiki-article-card:hover {
  box-shadow: 0 4px 16px rgba(127, 83, 172, 0.13);
}
.wiki-article-img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(127, 83, 172, 0.08);
}
.wiki-article-content {
  flex: 1;
}
.wiki-article-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #7f53ac;
  margin-bottom: 4px;
}
.wiki-article-meta {
  font-size: 1.3rem;
  color: #888;
  margin-bottom: 6px;
  display: flex;
  gap: 14px;
  align-items: center;
}
.wiki-article-desc {
  font-size: 1.3rem;
  color: #444;
  margin-bottom: 0;
  margin-top: 2px;
}
.wiki-article-link {
  color: #0056b3;
  font-weight: 600;
  text-decoration: underline;
  font-size: 1.3rem;
  margin-top: 6px;
  display: inline-block;
}
.wiki-pagination {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
  margin-top: 18px;
}
.wiki-pagination button {
  background: #f1f5fa;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  color: #7f53ac;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}
.wiki-pagination button:disabled {
  color: #aaa;
  background: #f3f3f3;
  cursor: not-allowed;
}
.wiki-pagination button:not(:disabled):hover {
  background: #eaf3ff;
  color: #0056b3;
}
.wiki-loading {
  text-align: center;
  color: #888;
  font-size: 1.3rem;
  margin: 32px 0;
}
.wiki-empty {
  text-align: center;
  color: #b71c1c;
  font-size: 1.3rem;
  margin: 32px 0;
}
@media (max-width: 991px) {
  .wiki-intro,
  .wiki-featured,
  .wiki-list {
    padding: 8px 2vw;
  }
  .wiki-title {
    font-size: 1.3rem;
  }
  .featured-list {
    flex-direction: column;
    gap: 10px;
  }
  .featured-card {
    width: 100%;
    align-items: stretch;
  }
  .wiki-banner,
  .featured-img,
  .wiki-article-img {
    max-width: 100%;
    width: 100%;
    height: auto;
  }
}
</style>
