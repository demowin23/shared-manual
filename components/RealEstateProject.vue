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
<script setup lang="ts">
import ProjectItem from "~/components/ProjectItem.vue";
const realEstateProjects = [
  {
    id: 722,
    title: "Chung cư Grand Sunlake",
    link: "/du-an/chi-tiet/722-chung-cu-grand-sunlake",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Grand-Sunlake-01.jpg",
  },
  {
    id: 665,
    title: "Chung cư Anland Lake View",
    link: "/du-an/chi-tiet/665-chung-cu-anland-lake-view",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Anland-Lake-View-01.jpg",
  },
  {
    id: 622,
    title: "Chung cư Rice City Thượng Thanh",
    link: "/du-an/chi-tiet/622-chung-cu-rice-city-thuong-thanh",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Thuong-Thanh-01.jpg",
  },
  {
    id: 610,
    title: "Chung cư Him Lam Thượng Thanh",
    link: "/du-an/chi-tiet/610-chung-cu-him-lam-thuong-thanh",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Him-Lam-Thuong-Thanh-01.jpg",
  },
  {
    id: 599,
    title: "Chung cư Hinode City",
    link: "/du-an/chi-tiet/599-chung-cu-hinode-city",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Hinode-City-01.jpg",
  },
  {
    id: 569,
    title: "Chung cư 6th Element",
    link: "/du-an/chi-tiet/569-chung-cu-6th-element",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-6th-Element-01.jpg",
  },
  {
    id: 558,
    title: "Chung cư Rose Town",
    link: "/du-an/chi-tiet/558-chung-cu-rose-town",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Rose-Town-01.jpg",
  },
  {
    id: 546,
    title: "Chung cư Hà Nội Homeland",
    link: "/du-an/chi-tiet/546-chung-cu-ha-noi-homeland",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Ha-Noi-Homeland-01.jpg",
  },
  {
    id: 498,
    title: "Chung cư Roman Plaza",
    link: "/du-an/chi-tiet/498-chung-cu-roman-plaza",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Roman-Plaza-01.jpg",
  },
  {
    id: 491,
    title: "Chung cư Sky Central",
    link: "/du-an/chi-tiet/491-chung-cu-sky-central",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Sky-Central-01.jpg",
  },
  {
    id: 484,
    title: "Chung cư Imperia Sky Garden",
    link: "/du-an/chi-tiet/484-chung-cu-imperia-sky-garden",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Imperia-Sky-Garden-01.jpg",
  },
  {
    id: 428,
    title: "Chung cư An Bình City",
    link: "/du-an/chi-tiet/428-chung-cu-an-binh-city",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-An-Binh-City-01.jpg",
  },
  {
    id: 390,
    title: "Chung cư Imperial Plaza",
    link: "/du-an/chi-tiet/390-chung-cu-imperial-plaza",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Imperial-Plaza-01.jpg",
  },
  {
    id: 364,
    title: "Chung cư Hà Nội Paragon",
    link: "/du-an/chi-tiet/364-chung-cu-ha-noi-paragon",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Ha-Noi-Paragon-01.jpg",
  },
  {
    id: 350,
    title: "Chung cư Udic Westlake",
    link: "/du-an/chi-tiet/350-chung-cu-udic-westlake",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Udic-Westlake-01.jpg",
  },
  {
    id: 327,
    title: "Chung cư Mipec Rubik 360",
    link: "/du-an/chi-tiet/327-chung-cu-mipec-rubik-360",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Mipec-Rubik-01.jpg",
  },
  {
    id: 316,
    title: "Chung cư Rivera Park Hà Nội",
    link: "/du-an/chi-tiet/316-chung-cu-rivera-park-ha-noi",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Rivera-Park-Ha-Noi-01.jpg",
  },
  {
    id: 300,
    title: "Chung cư Feliz Homes",
    link: "/du-an/chi-tiet/300-chung-cu-feliz-homes",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Feliz-Homes-01.jpg",
  },
];
</script>
<style scoped></style>
