<template>
  <div class="main_top">
    <ImageSlider />
  </div>

  <div id="page" class="wallpaper">
    <div class="container">
      <div class="row">
        <div class="col-md-12"></div>
      </div>
    </div>
  </div>
  <RealEstateProject />
  <News />
</template>

<script setup lang="ts">
import News from "~/components/News.vue";
import ImageSlider from "~/components/ImageSlider.vue";
import RealEstateProject from "~/components/RealEstateProject.vue";
</script>
