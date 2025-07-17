<template>
  <div class="cat-title text-center">
    <p class="cat_name">{{ projectStore.menuPage }}</p>
    <div class="clear"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-9" id="content_page"></div>
      <div class="col-md-3" id="content_right">
        <link rel="stylesheet" type="text/css" href="/css/menu.css" /><link
          rel="stylesheet"
          type="text/css"
          href="/css/styles_menu.css"
        />

        <div class="box-left">
          <div class="head_title4">
            <p>
              DỰ ÁN NỔI BẬT <i class="fa fa-star mr_5" aria-hidden="true"></i>
            </p>
          </div>
          <div class="clear"></div>
          <div class="border_box">
            <div class="pd10">
              <div
                class="row news_right post_hot"
                v-for="project in projects"
                :key="project.id"
              >
                <div class="col-md-12 col-sm-12 col-xs-12 img">
                  <a
                    :title="project.name"
                    :href="`/chi-tiet/${project.id}-${slugify(project.name)}`"
                  >
                    <img
                      class="img-responsive img-hover"
                      :src="`${urlBe}/uploads/${project.images[0]}`"
                  /></a>
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 info">
                  <a
                    :title="project.name"
                    :href="`/chi-tiet/${project.id}-${slugify(project.name)}`"
                    >{{ project.name }}</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="quangcao"></div>
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
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "~/store/useProject";
import Paginations from "~/components/Paginations.vue";

export default {
  components: { ProjectItem, Paginations },
  data() {
    return {
      projectStore: useProjectStore(),
      projects: [],
      page: 1,
      pageSize: 12,
      hasNext: true,
    };
  },
  computed: {
    totalItems() {
      return useProjectStore().totalItems;
    },
  },
  setup() {
    const { $env } = useNuxtApp();
    const urlBe = $env.URL_BE;
    return { urlBe };
  },
  watch: {},
  methods: {
    slugify(text) {
      const from =
        "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ";
      const to =
        "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyydAAAAAAAAAAAAAAAAAEEEEEEEEEEEIIIIIOOOOOOOOOOOOOOOOOUUUUUUUUUUUYYYYYD";
      let slug = text;
      for (let i = 0; i < from.length; i++) {
        slug = slug.replace(new RegExp(from[i], "g"), to[i]);
      }
      return slug
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");
    },
    async fetchProjects() {
      const store = useProjectStore();
      await store.fetchProjects(this.page, this.pageSize);
      this.projects = store.projects;
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
