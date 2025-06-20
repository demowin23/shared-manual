<template>
  <div class="col-md-4 col-sm-4 col-xs-6">
    <div class="product_box">
      <div class="prbox">
        <a :title="project.name" :href="`/du-an/chi-tiet/${project.id}`">
          <div
            class="img"
            :style="{
              backgroundImage:
                project.images && project.images.length > 0
                  ? `url(${urlBe}/uploads/${project.images[0]})`
                  : `url(${project.imageUrl})`,
            }"
          ></div>
        </a>
        <div class="info">
          <div class="name">
            <a :title="project.name" :href="`/du-an/chi-tiet/${project.id}`">{{
              project.name
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const { $env } = useNuxtApp();
    const urlBe = $env.URL_BE;
    return { urlBe };
  },
};
</script>
