<template>
  <div class="news-add-form">
    <a href="/admin/news">Quản lý tin tức</a>
    <h2>Sửa tin tức</h2>
    <form @submit.prevent="submitNews">
      <div class="form-group">
        <label>Loại bài viết *</label>
        <div class="type-options">
          <label>
            <input type="radio" value="news" v-model="type" /> Tin tức
          </label>
          <label>
            <input type="radio" value="wiki" v-model="type" /> Wiki BĐS
          </label>
        </div>
        <div v-if="type === 'wiki'" class="wiki-note">
          Bài viết sẽ xuất hiện ở mục <b>Wiki BĐS</b>.
        </div>
      </div>
      <div class="form-group">
        <label for="title">Tiêu đề *</label>
        <input v-model="title" id="title" type="text" required />
      </div>
      <div class="form-group">
        <label for="short_intro">Giới thiệu nhanh</label>
        <textarea v-model="short_intro" id="short_intro" rows="2" />
      </div>
      <div class="form-group">
        <label for="image">Ảnh đại diện *</label>
        <input
          id="image"
          type="file"
          accept="image/*"
          @change="onImageChange"
        />
        <div v-if="imagePreview" class="image-preview">
          <img
            :src="imagePreview"
            alt="Preview"
            style="max-width: 200px; margin-top: 8px"
          />
        </div>
        <div
          v-else-if="image && typeof image === 'string'"
          class="image-preview"
        >
          <img
            :src="getImageUrl(image)"
            alt="Ảnh hiện tại"
            style="max-width: 200px; margin-top: 8px"
          />
        </div>
      </div>
      <div class="form-group">
        <label for="content">Nội dung *</label>
        <client-only>
          <QuillEditor v-model="content" />
        </client-only>
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="is_featured" /> Tin nổi bật
        </label>
      </div>
      <button type="submit" :disabled="isLoading">
        {{ isLoading ? "Đang lưu..." : "Lưu thay đổi" }}
      </button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="success" class="success">Cập nhật tin tức thành công!</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNewsStore } from "~/store/useNews";
import QuillEditor from "~/components/QuillEditor.vue";
definePageMeta({
  layout: "admin",
  pageTitle: "Sửa Tin tức",
});
const newsStore = useNewsStore();
const route = useRoute();
const router = useRouter();
const { $env } = useNuxtApp();

const idParam = route.params.id;
let id = idParam;
if (typeof idParam === "string") {
  const match = idParam.match(/^\d+/);
  if (match) id = match[0];
}

const type = ref("news");
const title = ref("");
const short_intro = ref("");
const image = ref(null);
const imagePreview = ref(null);
const content = ref("");
const is_featured = ref(false);
const isLoading = ref(false);
const error = ref(null);
const success = ref(false);

function getImageUrl(img) {
  if (!img) return "";
  if (img.startsWith("http")) return img;
  return `${$env.URL_BE}/uploads/${img}`;
}

onMounted(async () => {
  isLoading.value = true;
  const news = await newsStore.getNewsDetail(id);
  if (news) {
    type.value = news.type || "news";
    title.value = news.title || "";
    short_intro.value = news.short_intro || "";
    image.value = news.image || null;
    content.value = news.content || "";
    is_featured.value = !!news.is_featured;
  } else {
    error.value = "Không tìm thấy tin tức.";
  }
  isLoading.value = false;
});

function onImageChange(e) {
  const file = e.target.files[0];
  if (file) {
    image.value = file;
    const reader = new FileReader();
    reader.onload = (ev) => {
      imagePreview.value = ev.target.result;
    };
    reader.readAsDataURL(file);
  }
}

async function submitNews() {
  isLoading.value = true;
  error.value = null;
  success.value = false;
  if (!title.value || !content.value) {
    error.value = "Vui lòng nhập đầy đủ thông tin bắt buộc.";
    isLoading.value = false;
    return;
  }
  const payload = {
    type: type.value,
    title: title.value,
    short_intro: short_intro.value,
    content: content.value,
    is_featured: is_featured.value ? "true" : "false",
    image: image.value,
  };
  const ok = await newsStore.updateNews(id, payload);
  if (ok) {
    success.value = true;
    setTimeout(() => {
      router.push("/admin/news");
    }, 1200);
  } else {
    error.value = newsStore.error || "Cập nhật thất bại.";
  }
  isLoading.value = false;
}
</script>

<style scoped>
.news-add-form {
  max-width: 1200px;
  margin: 40px auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 32px rgba(0, 0, 0, 0.1);
  padding: 40px 32px 32px 32px;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
}
.news-add-form h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 24px;
}
.news-add-form a {
  color: #007bff;
  text-decoration: underline;
  font-size: 15px;
  margin-bottom: 18px;
  display: inline-block;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  font-weight: 600;
  display: block;
  margin-bottom: 8px;
  color: #333;
  font-size: 15px;
}
.form-group input[type="text"],
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1.5px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
  background: #f9fbfd;
  transition: border 0.2s;
}
.form-group input[type="text"]:focus,
.form-group textarea:focus {
  border: 1.5px solid #007bff;
  outline: none;
  background: #fff;
}
.form-group input[type="file"] {
  margin-top: 4px;
}
button[type="submit"] {
  background: linear-gradient(90deg, #007bff 60%, #0056b3 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.08);
}
button[type="submit"]:hover {
  background: linear-gradient(90deg, #0056b3 60%, #007bff 100%);
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.18);
}
.error {
  color: #d32f2f;
  margin-top: 12px;
  text-align: center;
}
.success {
  color: #388e3c;
  margin-top: 12px;
  text-align: center;
}
.image-preview img {
  border-radius: 8px;
  border: 1.5px solid #eee;
  margin-top: 8px;
  max-width: 220px;
}
.type-options {
  display: flex;
  gap: 24px;
  margin-bottom: 6px;
  font-size: 1.05rem;
}
.type-options label {
  font-weight: 500;
  cursor: pointer;
}
.wiki-note {
  color: #7f53ac;
  font-size: 0.98rem;
  margin-bottom: 4px;
}
@media (max-width: 700px) {
  .news-add-form {
    padding: 12px 2vw;
  }
  .news-add-form h2 {
    font-size: 1.2rem;
  }
  button[type="submit"] {
    font-size: 14px;
    padding: 10px 18px;
  }
}
</style>
