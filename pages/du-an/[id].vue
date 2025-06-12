<template>
  <div class="cat-title text-center">
    <p class="cat_name">Sổ tay Dự án</p>
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

<script setup lang="ts">
import ProjectItem from "~/components/ProjectItem.vue";
import Paginations from "~/components/Paginations.vue";
const route = useRoute();
const project = ref(null);
onMounted(() => {});
const projects = ref([
  {
    id: "728",
    title: "Chung cư Handico Riverside",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Handico-Riverside-01.jpg",
    link: "/du-an/chi-tiet/728-chung-cu-handico-riverside",
  },
  {
    id: "727",
    title: "Chung cư Rice City Long Châu",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-01.jpg",
    link: "/du-an/chi-tiet/727-chung-cu-rice-city-long-chau",
  },
  {
    id: "724",
    title: "Chung cư Ruby Riverside",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Ruby-Riverside-01.jpg",
    link: "/du-an/chi-tiet/724-chung-cu-ruby-riverside",
  },
  {
    id: "722",
    title: "Chung cư Grand Sunlake",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Grand-Sunlake-01.jpg",
    link: "/du-an/chi-tiet/722-chung-cu-grand-sunlake",
  },
  {
    id: "721",
    title: "Chung cư The Charm An Hưng",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-The-Charm-An-Hung-01.jpg",
    link: "/du-an/chi-tiet/721-chung-cu-the-charm-an-hung",
  },
  {
    id: "720",
    title: "Chung cư 393 Lĩnh Nam",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-393-Linh-Nam-01.jpg",
    link: "/du-an/chi-tiet/720-chung-cu-393-linh-nam",
  },
  {
    id: "719",
    title: "Chung cư D22 Định Công",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-D22-Dinh-Cong-01.jpg",
    link: "/du-an/chi-tiet/719-chung-cu-d22-dinh-cong",
  },
  {
    id: "718",
    title: "Chung cư 62B Nguyễn Thị Định",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-62B-Nguyen-Thi-Dinh-01.jpg",
    link: "/du-an/chi-tiet/718-chung-cu-62b-nguyen-thi-dinh",
  },
  {
    id: "717",
    title: "Chung cư Panorama Riverside",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Panorama-Riverside-01.jpg",
    link: "/du-an/chi-tiet/717-chung-cu-panorama-riverside",
  },
  {
    id: "716",
    title: "Chung cư Ngọc Linh Plaza",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Ngoc-Linh-Plaza-01.jpg",
    link: "/du-an/chi-tiet/716-chung-cu-ngoc-linh-plaza",
  },
  {
    id: "715",
    title: "Chung cư Lake Plaza",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Lake-Plaza-01.jpg",
    link: "/du-an/chi-tiet/715-chung-cu-lake-plaza",
  },
  {
    id: "714",
    title: "Chung cư Grande Park",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Grande-Park-01.jpg",
    link: "/du-an/chi-tiet/714-chung-cu-grande-park",
  },
  {
    id: "713",
    title: "Chung cư Hà Nội Orchard Park",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Ha-Noi-Orchard-Park-01.jpg",
    link: "/du-an/chi-tiet/713-chung-cu-ha-noi-orchard-park",
  },
  {
    id: "712",
    title: "Chung cư Chelsea Tower",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Chelsea-Tower-01.jpg",
    link: "/du-an/chi-tiet/712-chung-cu-chelsea-tower",
  },
  {
    id: "711",
    title: "Chung cư Northern Star Complex",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Northern-Star-Complex-01.jpg",
    link: "/du-an/chi-tiet/711-chung-cu-northern-star-complex",
  },
  {
    id: "710",
    title: "Chung cư Vân Canh Residence",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Hud-Van-Canh-01.jpg",
    link: "/du-an/chi-tiet/710-chung-cu-van-canh-residence",
  },
  {
    id: "709",
    title: "Chung cư Hacinco Nguyễn Xiển",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Hacinco-Nguyen-Xien-01.jpg",
    link: "/du-an/chi-tiet/709-chung-cu-hacinco-nguyen-xien",
  },
  {
    id: "708",
    title: "Chung cư Rice City Tố Hữu",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-To-Huu-01.jpg",
    link: "/du-an/chi-tiet/708-chung-cu-rice-city-to-huu",
  },
  {
    id: "707",
    title: "Chung cư Vân Canh Tower",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-THT-Complex-01.jpg",
    link: "/du-an/chi-tiet/707-chung-cu-van-canh-tower",
  },
  {
    id: "706",
    title: "Chung cư Sunset Tower",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Sunset-Tower-01.jpg",
    link: "/du-an/chi-tiet/706-chung-cu-sunset-tower",
  },
  {
    id: "705",
    title: "Chung cư Eurowindow Lake City",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Eurowindow-Lake-City-01.jpg",
    link: "/du-an/chi-tiet/705-chung-cu-eurowindow-lake-city",
  },
  {
    id: "704",
    title: "Chung cư A12 Nguyễn Xiển",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-A12-Nguyen-Xien-01.jpg",
    link: "/du-an/chi-tiet/704-chung-cu-a12-nguyen-xien",
  },
  {
    id: "703",
    title: "Chung cư Hoàng Thành Pearl",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Hoang-Thanh-Pearl-01.jpg",
    link: "/du-an/chi-tiet/703-chung-cu-hoang-thanh-pearl",
  },
  {
    id: "702",
    title: "Chung cư Sunshine Green Iconic",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Sunshine-Green-Iconic-01.jpg",
    link: "/du-an/chi-tiet/702-chung-cu-sunshine-green-iconic",
  },
  {
    id: "701",
    title: "Chung cư Grandeur Palace Phạm Hùng",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Grandeur-Palace-Pham-Hung-01.jpg",
    link: "/du-an/chi-tiet/701-chung-cu-grandeur-palace-pham-hung",
  },
  {
    id: "700",
    title: "Chung cư Linh Đàm Premier City",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Linh-Dam-Premier-City-01.jpg",
    link: "/du-an/chi-tiet/700-chung-cu-linh-dam-premier-city",
  },
  {
    id: "699",
    title: "Chung cư VNT Hạ Đình",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-VNT-Ha-Dinh-01.jpg",
    link: "/du-an/chi-tiet/699-chung-cu-vnt-ha-dinh",
  },
  {
    id: "698",
    title: "Chung cư Hinode Garden City",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Hinode-Garden-City-01.jpg",
    link: "/du-an/chi-tiet/698-chung-cu-hinode-garden-city",
  },
  {
    id: "697",
    title: "Chung cư Trung Văn Residence",
    imageUrl:
      "https://sotaychungcu.com//img/webroot/upload/images/images/Hanoi/Chung-cu-Trung-Van-Residence-01.jpg",
    link: "/du-an/chi-tiet/697-chung-cu-trung-van-residence",
  },
]);
</script>

<style scoped></style>
