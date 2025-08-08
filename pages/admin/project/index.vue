<template>
  <div class="container">
    <div class="admin-header">
      <h2>Quản lý Dự án</h2>
      <button class="btn btn-primary" @click="goToAddProject">
        Thêm dự án
      </button>
    </div>
    <div v-if="loading">Đang tải danh sách dự án...</div>
    <div v-else>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên dự án</th>
            <th>Khu vực</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id">
            <td>{{ project.id }}</td>
            <td>{{ project.name }}</td>
            <td>{{ project.areas }}</td>
            <td>
              <button
                class="btn btn-primary btn-sm"
                @click="editProject(project)"
              >
                Edit
              </button>
              <button
                class="btn btn-danger btn-sm"
                @click="deleteProject(project)"
              >
                Xóa
              </button>
              <button
                class="btn btn-success btn-sm"
                @click="copyProjectUrl(project)"
              >
                Copy URL
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Paginations
        :page="page"
        :pageSize="pageSize"
        :hasNext="hasNext"
        :total="totalItems"
        @update:page="onPageChange"
        @update:pageSize="onPageSizeChange"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onActivated, computed } from "vue";
import { useProjectStore } from "~/store/useProject";
import { useNuxtApp } from "nuxt/app";
import { useRouter } from "vue-router";
import Paginations from "~/components/Paginations.vue";

const store = useProjectStore();
const projects = ref([]);
const loading = ref(false);
const router = useRouter();
const page = ref(1);
const pageSize = ref(12);
const hasNext = ref(true);
const totalItems = computed(() => useProjectStore().totalItems);
definePageMeta({
  layout: "admin",
  pageTitle: "Quản lý Dự án",
});
const goToAddProject = () => {
  router.push("/admin/project/create");
};
const fetchProjects = async () => {
  loading.value = true;
  await store.fetchProjects(page.value, pageSize.value);
  projects.value = store.projects;
  hasNext.value = page.value < totalItems.value / pageSize.value;
  loading.value = false;
};

const onPageChange = (newPage) => {
  page.value = newPage;
  fetchProjects();
};
const onPageSizeChange = (newSize) => {
  pageSize.value = newSize;
  page.value = 1;
  fetchProjects();
};

const editProject = (project) => {
  router.push(`/admin/project/edit/${project.id}`);
};

const deleteProject = async (project) => {
  if (confirm(`Bạn có chắc muốn xóa dự án: ${project.name}?`)) {
    try {
      loading.value = true;
      const { $env } = useNuxtApp();
      const urlBe = $env.URL_BE;
      const response = await fetch(`${urlBe}/api/projects/${project.id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Xóa dự án thất bại!");
      }
      alert("Xóa dự án thành công!");
      await fetchProjects();
    } catch (err) {
      alert("Có lỗi xảy ra khi xóa dự án!");
      console.error(err);
    } finally {
      loading.value = false;
    }
  }
};

// Function to copy project URL
const copyProjectUrl = async (project) => {
  try {
    const slug = slugify(project.name || "");
    const { $env } = useNuxtApp();
    const baseUrl = $env.URL_BE || window.location.origin;
    const urlPath = `/chi-tiet/${project.id}-${slug}`;
    const fullUrl = `${baseUrl}${urlPath}`;
    
    // Copy to clipboard using modern API or fallback
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(fullUrl);
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = fullUrl;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }
    
    // Show success message
    alert('Đã copy URL thành công!');
  } catch (error) {
    console.error('Error copying URL:', error);
    alert('Có lỗi xảy ra khi copy URL!');
  }
};

// Hàm slugify
function slugify(text) {
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

onMounted(fetchProjects);
onActivated(fetchProjects);
</script>

<style scoped>
.container {
  margin-top: 32px;
}
.table {
  width: 100%;
  background: #fff;
}
th,
td {
  text-align: left;
  padding: 8px;
}
th {
  background: #f5f5f5;
}
.btn {
  margin-right: 8px;
}
.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  color: white;
}
.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>
<style scoped>
.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
