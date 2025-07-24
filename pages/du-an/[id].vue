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
        </div>
      </div>
    </div>
    <Paginations
      :page="page"
      :pageSize="pageSize"
      :total="totalItems"
      @update:page="onPageChange"
      @update:pageSize="onPageSizeChange"
    />
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import { useProjectStore } from "~/store/useProject";
import { useRoute } from "vue-router";
import Paginations from "~/components/Paginations.vue";

export default {
  components: { ProjectItem, Paginations },
  data() {
    return {
      projectStore: useProjectStore(),
      projects: [],
      page: 1,
      pageSize: 12,
      totalItems: 0,
      areaId: null,
    };
  },
  methods: {
    async fetchProjects(areaId) {
      await this.projectStore.fetchProjectsByArea(
        areaId,
        this.page,
        this.pageSize
      );
      this.projects = this.projectStore.projects;
      this.totalItems = this.projectStore.totalItems;
    },
    onPageChange(newPage) {
      this.page = newPage;
      this.fetchProjects(this.areaId);
    },
    onPageSizeChange(newSize) {
      this.pageSize = newSize;
      this.page = 1;
      this.fetchProjects(this.areaId);
    },
  },
  async created() {
    const route = useRoute();
    let areaId = route.params.id;
    if (typeof areaId === "string") {
      const match = areaId.match(/^\d+/);
      if (match) areaId = match[0];
    }
    this.areaId = areaId;
    await this.fetchProjects(areaId);
  },
};
</script>

<style scoped></style>
