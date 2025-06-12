<template>
  <div class="col-md-4 col-sm-4 col-xs-6">
    <div class="product_box">
      <div class="prbox">
        <a :title="project.title" :href="project.link"
          ><div
            class="img"
            id="bg_728"
            :style="{ backgroundImage: `url(${project.imageUrl})` }"
          ></div
        ></a>
        <div class="info">
          <div class="name">
            <a :title="project.title" :href="project.link">{{
              project.title
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
