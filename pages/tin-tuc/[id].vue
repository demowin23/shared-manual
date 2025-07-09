<template>
  <div>
    <div class="cat-title text-center">
      <p class="cat_name">Tin tức</p>
      <div class="clear"></div>
    </div>
    <div class="container">
      <div class="box_content row">
        <div class="col-md-12">
          <div class="clear h15"></div>
          <div class="row">
            <div class="col-md-9 col-sm-12">
              <div class="detail_new bg-white p-4 rounded shadow-sm mb-4">
                <h1 class="mb-3 text-2xl font-bold text-primary">
                  {{ newsDetail?.title }}
                </h1>
                <div class="mb-3 text-gray-500 flex items-center gap-3">
                  <span
                    ><i class="fa fa-calendar"></i>
                    {{ formatDate(newsDetail?.created_at) }}</span
                  >
                  <span v-if="newsDetail?.author"
                    ><i class="fa fa-user"></i> {{ newsDetail?.author }}</span
                  >
                </div>
                <img
                  v-if="newsDetail?.image"
                  :src="getImageUrl(newsDetail?.image)"
                  alt="Ảnh đại diện"
                  class="img-fluid rounded mb-4"
                  style="object-fit: cover; width: 100%"
                />
                <p
                  class="lead text-lg text-gray-700 mb-4"
                  v-if="newsDetail?.short_intro"
                >
                  {{ newsDetail?.short_intro }}
                </p>
                <div class="content" v-html="newsDetail?.content"></div>
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
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9\\s-]/g, "")
    .trim()
    .replace(/\\s+/g, "-");
}
onMounted(async () => {
  newsDetail.value = await newsStore.getNewsDetail(id);
  newsList.value = await newsStore.getNewsList(1, 5);
});
</script>

<style scoped>
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
.detail_new h1 {
  color: var(--primary-color, #7f53ac);
}
.content {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #333;
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
