<template>
  <div>
    <div class="admin-btn">
      <button @click="goToAdmin">Quản lý dự án</button>
    </div>
    <ProjectForm />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import ProjectForm from "~/components/ProjectForm.vue";
const router = useRouter();
const goToAdmin = () => {
  router.push("/project/admin");
};
</script>
<style scoped>
.admin-btn {
  margin: 20px;
  display: flex;
  justify-content: flex-end;
}
</style>
