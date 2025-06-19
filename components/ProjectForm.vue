<template>
  <div>
    <form class="project-form" @submit.prevent="handleSubmit">
      <div class="row-2col">
        <div class="form-group">
          <label for="projectName">Tên dự án</label>
          <input
            id="projectName"
            v-model="projectName"
            type="text"
            placeholder="Nhập tên dự án"
          />
        </div>
        <div class="form-group">
          <label for="projectArea">Khu vực dự án</label>
          <select id="projectArea" v-model="projectArea">
            <option disabled value="">Chọn khu vực</option>
            <option v-for="area in areas" :key="area.id" :value="area.id">
              {{ area.name }}
            </option>
          </select>
        </div>
      </div>
      <div>
        <label for="projectImage">Ảnh dự án</label>
        <input
          id="projectImage"
          type="file"
          @change="onImageChange"
          accept="image/*"
          multiple
        />
        <div v-if="imagePreviews.length" class="image-grid">
          <div
            v-for="(img, idx) in imagePreviews"
            :key="idx"
            class="image-preview-wrapper"
            draggable="true"
            @dragstart="onDragStart(idx)"
            @dragover.prevent
            @drop="onDrop(idx)"
            @dragenter.prevent
          >
            <img :src="img" alt="Ảnh dự án" />
            <button
              type="button"
              class="remove-img-btn"
              @click="removeImage(idx)"
            >
              ×
            </button>
          </div>
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-btn" :disabled="isLoading">
          {{ isLoading ? "Đang xử lý..." : "Tạo dự án" }}
        </button>
      </div>
    </form>
    <QuillEditor v-model="editorContent" ref="quillEditor" />
    <div class="form-actions">
      <button
        type="button"
        class="submit-btn"
        @click="submitProject"
        :disabled="isLoading"
      >
        {{ isLoading ? "Đang gửi..." : "Gửi dự án" }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QuillEditor from "~/components/QuillEditor.vue";
import { useProject } from "~/composables/useProject";

const projectName = ref("");
const projectArea = ref("");
const areas = [
  { id: 1, name: "Sổ tay Dự án" },
  { id: 2, name: "Dự án Hà Nội" },
  { id: 3, name: "Quận Ba Đình" },
  { id: 4, name: "Quận Hoàn Kiếm" },
  { id: 5, name: "Quận Hai Bà Trưng" },
  { id: 6, name: "Quận Đống Đa" },
  { id: 7, name: "Quận Tây Hồ" },
  { id: 8, name: "Quận Cầu Giấy" },
  { id: 9, name: "Quận Thanh Xuân" },
  { id: 10, name: "Quận Hoàng Mai" },
  { id: 11, name: "Quận Long Biên" },
  { id: 12, name: "Quận Nam Từ Liêm" },
  { id: 13, name: "Quận Bắc Từ Liêm" },
  { id: 14, name: "Quận Hà Đông" },
  { id: 15, name: "Huyện Thanh Trì" },
  { id: 16, name: "Huyện Gia Lâm" },
  { id: 17, name: "Huyện Đông Anh" },
  { id: 18, name: "Huyện Sóc Sơn" },
  { id: 19, name: "Thị xã Sơn Tây" },
  { id: 20, name: "Huyện Ba Vì" },
  { id: 21, name: "Huyện Phúc Thọ" },
  { id: 22, name: "Huyện Đan Phượng" },
  { id: 23, name: "Huyện Hoài Đức" },
  { id: 24, name: "Huyện Quốc Oai" },
  { id: 25, name: "Huyện Thạch Thất" },
  { id: 26, name: "Huyện Chương Mỹ" },
  { id: 27, name: "Huyện Thanh Oai" },
  { id: 28, name: "Huyện Thường Tín" },
  { id: 29, name: "Huyện Phú Xuyên" },
  { id: 30, name: "Huyện Ứng Hòa" },
  { id: 31, name: "Huyện Mỹ Đức" },
  { id: 32, name: "Huyện Mê Linh" },
  { id: 33, name: "Dự án Sài Gòn" },
  { id: 34, name: "Quận 1" },
  { id: 35, name: "Quận 2" },
  { id: 36, name: "Quận 3" },
  { id: 37, name: "Quận 4" },
  { id: 38, name: "Quận 5" },
  { id: 39, name: "Quận 6" },
  { id: 40, name: "Quận 7" },
  { id: 41, name: "Quận 8" },
  { id: 42, name: "Quận 9" },
  { id: 43, name: "Quận 10" },
  { id: 44, name: "Quận 11" },
  { id: 45, name: "Quận 12" },
  { id: 46, name: "Quận Bình Tân" },
  { id: 47, name: "Quận Bình Thạnh" },
  { id: 48, name: "Quận Gò Vấp" },
  { id: 49, name: "Quận Phú Nhuận" },
  { id: 50, name: "Quận Tân Bình" },
  { id: 51, name: "Quận Tân Phú" },
  { id: 52, name: "TP Thủ Đức" },
  { id: 53, name: "Huyện Bình Chánh" },
  { id: 54, name: "Huyện Cần Giờ" },
  { id: 55, name: "Huyện Củ Chi" },
  { id: 56, name: "Huyện Hóc Môn" },
  { id: 57, name: "Huyện Nhà Bè" },
  { id: 58, name: "Sổ Tay Nhà Đất" },
  { id: 59, name: "Nhà đất Đông Bắc" },
  { id: 60, name: "Nhà đất Hải Phòng" },
  { id: 61, name: "Nhà đất Quảng Ninh" },
  { id: 62, name: "Nhà đất Bắc Ninh" },
  { id: 63, name: "Nhà đất Bắc Giang" },
  { id: 64, name: "Nhà đất Hải Dương" },
  { id: 65, name: "Nhà đất Thái Nguyên" },
  { id: 66, name: "Nhà đất Vĩnh Phúc" },
  { id: 67, name: "Nhà đất Hà Nam" },
  { id: 68, name: "Nhà đất Phú Thọ" },
  { id: 69, name: "Nhà đất Thái Bình" },
  { id: 70, name: "Nhà đất Nam Định" },
  { id: 71, name: "Nhà đất Ninh Bình" },
  { id: 72, name: "Nhà đất Lạng Sơn" },
  { id: 73, name: "Nhà đất Cao Bằng" },
  { id: 74, name: "Nhà đất Tuyên Quang" },
  { id: 75, name: "Nhà đất Hà Giang" },
  { id: 76, name: "Nhà đất Bắc Kạn" },
  { id: 77, name: "Nhà đất Tây Bắc" },
  { id: 78, name: "Nhà đất Lai Châu" },
  { id: 79, name: "Nhà đất Hòa Bình" },
  { id: 80, name: "Nhà đất Lào Cai" },
  { id: 81, name: "Nhà đất Yên Bái" },
  { id: 82, name: "Nhà đất Sơn La" },
  { id: 83, name: "Nhà đất Điện Biên" },
  { id: 84, name: "Nhà đất Bắc Trung Bộ" },
  { id: 85, name: "Nhà đất Nghệ An" },
  { id: 86, name: "Nhà đất Thanh Hóa" },
  { id: 87, name: "Nhà đất Hà Tĩnh" },
  { id: 88, name: "Nhà đất Quảng Bình" },
  { id: 89, name: "Nhà đất Quảng Trị" },
  { id: 90, name: "Nhà đất Thừa Thiên - Huế" },
  { id: 91, name: "Nhà đất Nam Trung Bộ" },
  { id: 92, name: "Nhà đất Đà Nẵng" },
  { id: 93, name: "Nhà đất Quảng Nam" },
  { id: 94, name: "Nhà đất Quảng Ngãi" },
  { id: 95, name: "Nhà đất Bình Định" },
  { id: 96, name: "Nhà đất Phú Yên" },
  { id: 97, name: "Nhà đất Khánh Hòa" },
  { id: 98, name: "Nhà đất Ninh Thuận" },
  { id: 99, name: "Nhà đất Bình Thuận" },
  { id: 100, name: "Nhà đất Đông Nam Bộ" },
  { id: 101, name: "Nhà đất Bình Dương" },
  { id: 102, name: "Nhà đất Vũng Tàu" },
  { id: 103, name: "Nhà đất Đồng Nai" },
  { id: 104, name: "Nhà đất Bà Rịa" },
  { id: 105, name: "Nhà đất Tây Ninh" },
  { id: 106, name: "Nhà đất Bình Phước" },
  { id: 107, name: "Nhà đất Tây Nam Bộ" },
  { id: 108, name: "Nhà đất Cần Thơ" },
  { id: 109, name: "Nhà đất Tiền Giang" },
  { id: 110, name: "Nhà đất Hậu Giang" },
  { id: 111, name: "Nhà đất Long An" },
  { id: 112, name: "Nhà đất Trà Vinh" },
  { id: 113, name: "Nhà đất Sóc Trăng" },
  { id: 114, name: "Nhà đất Đồng Tháp" },
  { id: 115, name: "Nhà đất Vĩnh Long" },
  { id: 116, name: "Nhà đất Bạc Liêu" },
  { id: 117, name: "Nhà đất Bến Tre" },
  { id: 118, name: "Nhà đất Cà Mau" },
  { id: 119, name: "Nhà đất An Giang" },
  { id: 120, name: "Nhà đất Kiên Giang" },
  { id: 121, name: "Nhà đất Kiên Giang" },
  { id: 122, name: "Nhà đất Tây Nguyên" },
  { id: 123, name: "Nhà đất Kon Tum" },
  { id: 124, name: "Nhà đất Lâm Đồng" },
  { id: 125, name: "Nhà đất Gia Lai" },
  { id: 126, name: "Nhà đất Đắk Lắk" },
  { id: 127, name: "Nhà đất Đắk Nông" },
];
const imagePreviews = ref<string[]>([]);
const imageFiles = ref<File[]>([]);
const dragIndex = ref<number | null>(null);
const editorContent = ref("");
const quillEditor = ref(null);
const { createProject, isLoading, error } = useProject();

function onImageChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length) {
    Array.from(target.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          imagePreviews.value.push(e.target.result);
          imageFiles.value.push(file);
        }
      };
      reader.readAsDataURL(file);
    });
    target.value = "";
  }
}

function removeImage(idx: number) {
  imagePreviews.value.splice(idx, 1);
  imageFiles.value.splice(idx, 1);
}

function onDragStart(idx: number) {
  dragIndex.value = idx;
}

function onDrop(idx: number) {
  if (dragIndex.value === null || dragIndex.value === idx) return;
  const movedPreview = imagePreviews.value.splice(dragIndex.value, 1)[0];
  imagePreviews.value.splice(idx, 0, movedPreview);
  const movedFile = imageFiles.value.splice(dragIndex.value, 1)[0];
  imageFiles.value.splice(idx, 0, movedFile);
  dragIndex.value = null;
}

async function handleSubmit() {
  try {
    if (!projectName.value || !projectArea.value || !imageFiles.value.length) {
      alert("Vui lòng điền đầy đủ thông tin và chọn ít nhất 1 ảnh");
      return;
    }

    const selectedArea = areas.find((a) => a.id === Number(projectArea.value));
    if (!selectedArea) return;

    await createProject(
      projectName.value,
      selectedArea.name,
      content.value, // From QuillEditor
      imageFiles.value
    );

    // Reset form after successful submission
    projectName.value = "";
    projectArea.value = "";
    imagePreviews.value = [];
    imageFiles.value = [];
    content.value = "";

    alert("Tạo dự án thành công!");
  } catch (err) {
    alert("Có lỗi xảy ra khi tạo dự án. Vui lòng thử lại!");
  }
}

async function submitProject() {
  try {
    if (
      !projectName.value ||
      !projectArea.value ||
      !imageFiles.value.length ||
      !editorContent.value
    ) {
      alert(
        "Vui lòng điền đầy đủ thông tin: tên dự án, khu vực, ảnh và nội dung chi tiết"
      );
      return;
    }

    await createProject(
      projectName.value,
      Number(projectArea.value),
      editorContent.value,
      imageFiles.value
    );

    // Reset form sau khi gửi thành công
    projectName.value = "";
    projectArea.value = "";
    imagePreviews.value = [];
    imageFiles.value = [];
    editorContent.value = "";

    alert("Gửi dự án thành công!");
  } catch (err) {
    console.error("Error submitting project:", err);
    alert("Có lỗi xảy ra khi gửi dự án. Vui lòng thử lại!");
  }
}
</script>

<style scoped>
.project-form {
  background: #fff;
  padding: 24px 20px 16px 20px;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: fadeInForm 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.project-form label {
  font-weight: 600;
  margin-bottom: 6px;
  display: block;
  color: #2d3748;
  letter-spacing: 0.5px;
}
.project-form input[type="text"] {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  background: #f9fafb;
}
.project-form input[type="text"]:focus {
  border-color: #3182ce;
  box-shadow: 0 0 0 2px #bee3f8;
  background: #fff;
}
.project-form input[type="file"] {
  margin-top: 6px;
  font-size: 15px;
}
.project-form img {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(49, 130, 206, 0.12);
  border: 1.5px solid #e2e8f0;
  animation: fadeInImg 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.image-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}
.image-preview-wrapper {
  position: relative;
  display: inline-block;
  cursor: grab;
  transition: box-shadow 0.2s;
}
.image-preview-wrapper:active {
  cursor: grabbing;
  box-shadow: 0 0 0 2px #3182ce;
}
.image-preview-wrapper img {
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(49, 130, 206, 0.12);
  border: 1.5px solid #e2e8f0;
  animation: fadeInImg 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  max-width: 120px;
  max-height: 120px;
  object-fit: cover;
}
.remove-img-btn {
  position: absolute;
  top: 2px;
  right: 2px;
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  font-size: 18px;
  color: #e53e3e;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  z-index: 2;
}
.remove-img-btn:hover {
  background: #fed7d7;
  color: #c53030;
}
.project-form select {
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  background: #f9fafb;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  margin-top: 2px;
  color: #222;
}
.project-form select:focus {
  border-color: #3182ce;
  box-shadow: 0 0 0 2px #bee3f8;
  background: #fff;
  color: #222;
}
.project-form select option {
  color: #222 !important;
  background: #fff;
}
@keyframes fadeInForm {
  from {
    opacity: 0;
    transform: translateY(-24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInImg {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.row-2col {
  display: flex;
  gap: 18px;
}
.form-group {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
}
@media (max-width: 700px) {
  .row-2col {
    flex-direction: column;
    gap: 10px;
  }
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.submit-btn {
  background: #3182ce;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-btn:hover {
  background: #2c5282;
}

.submit-btn:disabled {
  background: #a0aec0;
  cursor: not-allowed;
}
</style>
