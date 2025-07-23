<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <h3>Sửa tin tức</h3>
      <form @submit.prevent="submitEdit">
        <div class="form-group">
          <label for="title">Tiêu đề *</label>
          <input v-model="form.title" id="title" type="text" required />
        </div>
        <div class="form-group">
          <label for="short_intro">Giới thiệu nhanh</label>
          <textarea v-model="form.short_intro" id="short_intro" rows="2" />
        </div>
        <div class="form-group">
          <label for="image">Ảnh đại diện</label>
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
            v-else-if="form.image && typeof form.image === 'string'"
            class="image-preview"
          >
            <img
              :src="urlBe + '/uploads/' + form.image"
              alt="Ảnh hiện tại"
              style="max-width: 200px; margin-top: 8px"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="content">Nội dung *</label>
          <client-only>
            <QuillEditor v-model="form.content" />
          </client-only>
        </div>
        <div class="form-group">
          <label>
            <input type="checkbox" v-model="form.is_featured" /> Tin nổi bật
          </label>
        </div>
        <div class="modal-actions">
          <button type="button" @click="$emit('cancel')">Hủy</button>
          <button type="submit" :disabled="isLoading">
            {{ isLoading ? "Đang lưu..." : "Lưu" }}
          </button>
        </div>
      </form>
      <div v-if="error" class="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import QuillEditor from "~/components/QuillEditor.vue";
import { useNuxtApp } from "nuxt/app";

const props = defineProps({
  visible: Boolean,
  news: Object,
});
const emit = defineEmits(["save", "cancel"]);
const { $env } = useNuxtApp();
const urlBe = $env.URL_BE;
const isLoading = ref(false);
const error = ref(null);
const form = ref({
  title: "",
  short_intro: "",
  image: "",
  content: "",
  is_featured: false,
});
const imagePreview = ref(null);

watch(
  () => props.news,
  (val) => {
    if (val) {
      form.value = {
        title: val.title || "",
        short_intro: val.short_intro || "",
        image: val.image || "",
        content: val.content || "",
        is_featured: !!val.is_featured,
      };
      imagePreview.value = null;
    }
  },
  { immediate: true }
);

function onImageChange(e) {
  const file = e.target.files[0];
  if (file) {
    form.value.image = file;
    const reader = new FileReader();
    reader.onload = (ev) => {
      imagePreview.value = ev.target.result;
    };
    reader.readAsDataURL(file);
  }
}

async function submitEdit() {
  isLoading.value = true;
  error.value = null;
  if (!form.value.title || !form.value.content) {
    error.value = "Vui lòng nhập đầy đủ thông tin bắt buộc.";
    isLoading.value = false;
    return;
  }
  emit("save", { ...form.value });
  isLoading.value = false;
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90vh;
  background: rgba(30, 41, 59, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
}
.modal-content {
  background: #fff;
  border-radius: 18px;
  padding: 40px 32px 32px 32px;
  min-width: 400px;
  max-width: 90vw;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
  position: relative;
  font-family: "Segoe UI", "Roboto", Arial, sans-serif;
}
.modal-content h3 {
  font-size: 1.6rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 24px;
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
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
}
.modal-actions button {
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
}
.modal-actions button[type="button"] {
  background: #f1f5fa;
  color: #333;
}
.modal-actions button[type="button"]:hover {
  background: #eaf3ff;
}
.modal-actions button[type="submit"] {
  background: linear-gradient(90deg, #007bff 60%, #0056b3 100%);
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 123, 255, 0.08);
}
.modal-actions button[type="submit"]:hover {
  background: linear-gradient(90deg, #0056b3 60%, #007bff 100%);
  box-shadow: 0 4px 16px rgba(0, 123, 255, 0.18);
}
.error {
  color: #d32f2f;
  margin-top: 12px;
  text-align: center;
}
.image-preview img {
  border-radius: 8px;
  border: 1.5px solid #eee;
  margin-top: 8px;
  max-width: 220px;
}
@media (max-width: 700px) {
  .modal-content {
    padding: 12px 2vw;
    min-width: unset;
  }
  .modal-content h3 {
    font-size: 1.1rem;
  }
  .modal-actions button {
    font-size: 13px;
    padding: 8px 12px;
  }
}
</style>
