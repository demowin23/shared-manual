<template>
  <div class="mm-page">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
    <a
      id="back2Top"
      title="Back to top"
      href="#"
      :style="{ display: showBackToTop ? 'block' : 'none' }"
      @click.prevent="scrollToTop"
    >
      <img src="/images/top.png" />
    </a>
    <div
      class="phonering-alo-phone phonering-alo-green phonering-alo-show"
      id="phonering-alo-phoneIcon"
      style="display: block"
    >
      <div class="phonering-alo-ph-circle"></div>
      <div class="phonering-alo-ph-circle-fill"></div>
      <a href="tel: 0967.938.168"></a>
      <div class="phonering-alo-ph-img-circle">
        <a href="tel: 0967.938.168"></a>
        <a href="tel: 0967.938.168" class="pps-btn-img" title="Liên hệ">
          <img
            src="http://i.imgur.com/v8TniL3.png"
            width="50"
            onmouseover="this.src='http://i.imgur.com/v8TniL3.png';"
            onmouseout="this.src='http://i.imgur.com/v8TniL3.png';"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const showBackToTop = ref(false);

// Hàm xử lý scroll
const handleScroll = () => {
  // Hiển thị nút khi scroll xuống 200px
  showBackToTop.value = window.scrollY > 200;
};

// Hàm scroll về đầu trang
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Tạo hiệu ứng scroll mượt
  });
};

// Thêm event listener khi component được mount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

// Cleanup event listener khi component bị unmount
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.mm-page {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.clear {
  clear: both;
}

#back2Top {
  position: fixed;
  index: 99;
  cursor: pointer;
  transition: opacity 0.3s;
}
</style>
