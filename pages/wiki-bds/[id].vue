<template>
  <div>
    <div class="cat-title text-center">
      <p class="cat_name">Wiki Bất động sản</p>
      <div class="clear"></div>
    </div>
    <div class="container">
      <div class="box_content row">
        <div class="col-md-12">
          <div class="clear h15"></div>
          <div class="row">
            <div class="col-md-9 col-sm-12">
              <div
                class="detail_new bg-white p-4 rounded-3 shadow-lg mb-4 border"
              >
                <h1 class="mb-3 text-3xl font-bold text-primary title-detail">
                  {{ newsDetail?.title }}
                </h1>
                <div
                  class="mb-3 text-gray-500 flex items-center gap-3 meta-detail"
                >
                  <span>
                    <i class="fa fa-calendar"></i>
                    {{ formatDate(newsDetail?.created_at) }}
                  </span>
                  <span v-if="newsDetail?.author">
                    <i class="fa fa-user"></i> {{ newsDetail?.author }}
                  </span>
                </div>
                <img
                  v-if="newsDetail?.image"
                  :src="getImageUrl(newsDetail?.image)"
                  alt="Ảnh đại diện"
                  class="img-fluid rounded-3 mb-4 shadow-sm main-news-img"
                  style="
                    object-fit: cover;
                    width: 100%;
                    max-height: 420px;
                    background: #f8f8f8;
                  "
                />
                <p
                  class="lead text-lg text-gray-700 mb-4 short-intro-detail text-justify"
                  v-if="newsDetail?.short_intro"
                >
                  {{ newsDetail?.short_intro }}
                </p>

                <div class="content content-detail">
                  <div class="custom-quill-editor ql-container ql-snow">
                    <div
                      class="ql-editor html-output"
                      data-gramm="false"
                      contenteditable="true"
                    >
                      <div
                        class="html-preview"
                        v-html="newsDetail?.content"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-12">
              <!-- Sidebar: Có thể thêm tin liên quan, quảng cáo, ... -->
              <div class="bg-white p-3 rounded shadow-sm mb-4">
                <h3 class="text-lg font-semibold mb-3">Tin liên quan</h3>
                <div>
                  <div
                    v-for="item in newsList"
                    :key="item.id"
                    class="latest-news-item"
                  >
                    <img
                      v-if="item.image"
                      :src="getImageUrl(item.image)"
                      alt="Ảnh tin mới"
                      class="latest-news-img"
                    />
                    <div class="latest-news-content">
                      <nuxt-link
                        :to="`/wiki-bds/${item.id}-${slugify(item.title)}`"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useNewsStore } from "~/store/useNews";
import { useNuxtApp } from "nuxt/app";
import { useHead } from "nuxt/app";

const route = useRoute();
let idParam = route.params.id;
let id = idParam;
if (typeof idParam === "string") {
  const match = idParam.match(/^\d+/);
  if (match) id = match[0];
}
const newsStore = useNewsStore();
const { $env } = useNuxtApp();
let newsDetail = ref(null);
let newsList = ref(null);

function getImageUrl(image: string) {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `${$env.URL_BE}/uploads/${image}`;
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
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
  slug = slug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  slug = slug.replace(/-+/g, "-");
  slug = slug.replace(/^-+|-+$/g, "");
  return slug;
}

onMounted(async () => {
  newsDetail.value = await newsStore.getNewsDetail(id);
  newsList.value = await newsStore.getNewsList(1, 5);
  // --- Meta tags for SEO & social sharing ---
  const title =
    newsDetail.value && newsDetail.value.title
      ? newsDetail.value.title
      : "Chi tiết tin tức";
  let description =
    newsDetail.value && newsDetail.value.short_intro
      ? newsDetail.value.short_intro
      : newsDetail.value && newsDetail.value.content
        ? newsDetail.value.content.replace(/<[^>]+>/g, "").slice(0, 160)
        : "Tin tức bất động sản, thị trường, chính sách mới nhất.";
  const image =
    newsDetail.value && newsDetail.value.image
      ? getImageUrl(newsDetail.value.image)
      : "/images/logo.png";
  useHead({
    title,
    meta: [
      { hid: "description", name: "description", content: description },
      { hid: "og:title", property: "og:title", content: title },
      {
        hid: "og:description",
        property: "og:description",
        content: description,
      },
      { hid: "og:image", property: "og:image", content: image },
      { hid: "og:type", property: "og:type", content: "article" },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image",
      },
      { hid: "twitter:title", name: "twitter:title", content: title },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: description,
      },
      { hid: "twitter:image", name: "twitter:image", content: image },
    ],
  });
});
</script>

<style scoped>
.html-preview {
  font-size: 16px;
  line-height: 21px;
  text-align: justify;
}
.cat-title {
  margin-top: 24px;
  margin-bottom: 16px;
}
.cat_name {
  font-size: 2rem;
  font-weight: 700;
  color: #ffff;
  margin-bottom: 0;
}
.detail_new {
  background: #fff;
  border-radius: 18px;
  box-shadow:
    0 6px 32px rgba(127, 83, 172, 0.08),
    0 1.5px 8px rgba(0, 0, 0, 0.04);
  padding: 40px 36px 32px 36px;
  border: 1.5px solid #f3f0fa;
  margin-bottom: 32px;
}
.title-detail {
  font-size: 2.2rem;
  font-weight: 800;
  color: #7f53ac;
  margin-bottom: 18px;
  line-height: 1.2;
}
.meta-detail {
  font-size: 1.05rem;
  color: #888;
  gap: 18px;
  margin-bottom: 18px;
}
.main-news-img {
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(127, 83, 172, 0.1);
  margin-bottom: 28px;
  background: #f8f8f8;
}
.short-intro-detail {
  font-size: 1.6rem;
  color: #555;
  margin-bottom: 22px;
  font-style: italic;
}
.content-detail {
  font-size: 1.13rem;
  line-height: 1.8;
  color: #222;
  margin-bottom: 0;
  min-height: 180px;
  word-break: break-word;
}
.latest-news-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 18px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
}
.latest-news-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}
.latest-news-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(127, 83, 172, 0.08);
  background: #f8f8f8;
}
.latest-news-content {
  flex: 1;
  min-width: 0;
}
.latest-news-title {
  font-size: 1rem;
  font-weight: 600;
  color: #7f53ac;
  text-decoration: none;
  display: block;
  margin-bottom: 2px;
  transition: color 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.latest-news-title:hover {
  color: #0056b3;
  text-decoration: underline;
}
.latest-news-intro {
  font-size: 0.92rem;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (max-width: 991px) {
  .col-md-9,
  .col-md-3 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .detail_new {
    padding: 20px 8px;
  }
  .content-detail {
    padding: 16px 6px;
    font-size: 1.01rem;
  }
  .title-detail {
    font-size: 1.3rem;
  }
  .latest-news-item {
    gap: 8px;
    margin-bottom: 12px;
    padding-bottom: 8px;
  }
  .latest-news-img {
    width: 48px;
    height: 48px;
  }
  .latest-news-title {
    font-size: 0.98rem;
  }
}
</style>
