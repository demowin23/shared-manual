<template>
  <div class="cat-title text-center">
    <p class="cat_name">{{ projectStore.menuPage }}</p>
    <div class="clear"></div>
  </div>
  <div class="container">
    <div class="box_content row">
      <div class="col-md-12">
        <div class="clear h15"></div>
        <div class="row">
          <div class="col-md-12">
            <div class="box_cathome">
              <ProjectItem
                v-for="project in projects"
                :key="project.id"
                :project="project"
              />
            </div>
          </div>
          <Paginations />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import Paginations from "~/components/Paginations.vue";
import { useProjectStore } from "~/store/useProject";
import { useRoute } from "vue-router";

export default {
  components: { ProjectItem, Paginations },
  data() {
    return {
      projectStore: useProjectStore(),
      projects: [],
    };
  },
  async created() {
    const route = useRoute();
    let areaId = route.params.id;
    if (typeof areaId === "string") {
      const match = areaId.match(/^\d+/);
      if (match) areaId = match[0];
    }
    await this.projectStore.fetchProjectsByArea(areaId);
    this.projects = this.projectStore.projects;
  },
};
</script>

<style scoped></style>
