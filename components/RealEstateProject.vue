<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="head_title2 text-center">
          <p>Dự án bất động sản</p>
        </div>
        <div class="home_product">
          <div class="box_cathome">
            <ProjectItem
              v-for="project in realEstateProjects"
              :key="project.id"
              :project="project"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProjectItem from "~/components/ProjectItem.vue";
import { useProjectStore } from "~/store/useProject";
export default {
  components: { ProjectItem },
  data() {
    return {
      realEstateProjects: [],
    };
  },
  async created() {
    const store = useProjectStore();
    await store.fetchProjects();
    this.realEstateProjects = store.projects;
  },
};
</script>
<style scoped></style>
