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
import Paginations from "~/components/Paginations.vue";
import { useProjectStore } from "~/store/useProject";
export default {
  components: { ProjectItem, Paginations },
  data() {
    return {
      realEstateProjects: [],
      page: 1,
      pageSize: 10,
      hasNext: true,
    };
  },
  computed: {
    totalItems() {
      return useProjectStore().totalItems;
    },
  },
  methods: {
    async fetchProjects() {
      const store = useProjectStore();
      await store.fetchProjects(this.page, this.pageSize);
      this.realEstateProjects = store.projects;
      this.hasNext = this.page < this.totalItems / this.pageSize;
    },
    onPageChange(newPage) {
      this.page = newPage;
      this.fetchProjects();
    },
    onPageSizeChange(newSize) {
      this.pageSize = newSize;
      this.page = 1;
      this.fetchProjects();
    },
  },
  async created() {
    await this.fetchProjects();
  },
};
</script>
<style scoped></style>
