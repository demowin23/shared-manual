<template>
  <div class="container">
    <h2>Quản lý Dự án</h2>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onActivated } from "vue";
import { useProjectStore } from "~/store/useProject";
import { useNuxtApp } from "nuxt/app";
import { useRouter } from "vue-router";

const store = useProjectStore();
const projects = ref([]);
const loading = ref(false);
const router = useRouter();

const fetchProjects = async () => {
  loading.value = true;
  await store.fetchProjects();
  projects.value = store.projects;
  loading.value = false;
};

const editProject = (project) => {
  router.push(`/project/edit/${project.id}`);
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
</style>
