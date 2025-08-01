<template>
  <div>
    <div class="admin-btn">
      <button @click="goToAdmin">Quản lý dự án</button>
    </div>
    <ProjectForm
      :editMode="true"
      :projectData="projectData"
      @submitEdit="submitEdit"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import ProjectForm from "~/components/ProjectForm.vue";
import { useProjectStore } from "~/store/useProject";
import { useNuxtApp } from "nuxt/app";
definePageMeta({
  layout: "admin",
  pageTitle: "Sửa Dự án",
});
const router = useRouter();
const route = useRoute();
const store = useProjectStore();
const { $env } = useNuxtApp();
const urlBe = $env.URL_BE;

const goToAdmin = () => {
  router.push("/admin/project");
};

const projectData = ref(null);
const loading = ref(false);

const fetchProject = async () => {
  loading.value = true;
  const id = route.params.id;
  await store.fetchProjectById(Number(id));
  projectData.value = store.getProject;
  loading.value = false;
};

const submitEdit = async (data) => {
  try {
    loading.value = true;
    const id = route.params.id;
    // So sánh với projectData.value để chỉ lấy trường thay đổi
    const changed = {};
    if (data.name !== projectData.value.name) changed.name = data.name;
    if (data.area !== projectData.value.area) changed.area = data.area;
    if (data.subArea !== projectData.value.subArea)
      changed.subArea = data.subArea;
    if (data.subSubArea !== projectData.value.subSubArea)
      changed.subSubArea = data.subSubArea;
    if (data.detail !== projectData.value.detail) changed.detail = data.detail;
    if (
      JSON.stringify(data.images) !== JSON.stringify(projectData.value.images)
    )
      changed.images = data.images;
    if (Object.keys(changed).length === 0) {
      alert("Bạn chưa thay đổi thông tin nào!");
      loading.value = false;
      return;
    }
    const response = await fetch(`${urlBe}/api/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(changed),
    });
    if (!response.ok) throw new Error("Cập nhật dự án thất bại!");
    alert("Cập nhật dự án thành công!");
    router.push("/admin/project");
  } catch (err) {
    alert("Có lỗi xảy ra khi cập nhật dự án!");
    console.error(err);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchProject);
</script>

<style scoped>
.admin-btn {
  margin: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
