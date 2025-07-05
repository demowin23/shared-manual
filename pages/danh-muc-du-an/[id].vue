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
              TIN TỨC MỚI CẬP NHẬT
              <i class="fa fa-star mr_5" aria-hidden="true"></i>
            </p>
          </div>
          <div class="clear"></div>
          <div class="border_box">
            <div class="pd10">
              <div class="row news_right">
                <div class="col-md-4 col-sm-6 col-xs-6 img">
                  <a
                    title="Dịch vụ ký gửi Bất động sản"
                    href="https://sotaychungcu.com/chi-tiet/29-dich-vu-ky-gui-bat-dong-san"
                  >
                    <img
                      class="img-responsive img-hover"
                      src="/img/upload/images/files/Tintuc/Ky-gui-nha-dat.jpg"
                  /></a>
                </div>
                <div class="col-md-8 col-sm-6 col-xs-6 info">
                  <a
                    title="Dịch vụ ký gửi Bất động sản"
                    href="https://sotaychungcu.com/chi-tiet/29-dich-vu-ky-gui-bat-dong-san"
                    >Dịch vụ ký gửi Bất động sản</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="clear"></div>
        </div>

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
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "~/store/useProject";

export default {
  components: { ProjectItem },
  data() {
    return {
      projectStore: useProjectStore(),
      projects: [],
    };
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
  },
  async created() {
    const store = useProjectStore();
    await store.fetchProjects();
    this.projects = store.projects;
  },
};
</script>
