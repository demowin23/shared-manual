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
import { useHead } from "nuxt/app";

useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
    { "http-equiv": "content-type", content: "text/html; charset=utf-8" },
    { "http-equiv": "audience", content: "general" },
    { name: "resource-type", content: "document" },
    {
      name: "abstract",
      content: "Thông tin bất động sản toàn quốc – DadiLand.com",
    },
    { name: "classification", content: "Bất động sản Việt Nam" },
    { name: "area", content: "Nhà đất, dự án bất động sản, đầu tư" },
    { name: "placename", content: "Việt Nam" },
    { name: "author", content: "Công ty TNHH Vidco Group" },
    { name: "copyright", content: "©2025 DadiLand.com – Vidco Group" },
    { name: "owner", content: "Công ty TNHH Vidco Group" },
    { name: "generator", content: "DadiLand CMS by Vidco" },
    { name: "distribution", content: "Global" },
    { name: "revisit-after", content: "1 days" },
    { name: "referrer", content: "no-referrer-when-downgrade" },
    { name: "robots", content: "index, follow" },
    {
      name: "keywords",
      content:
        "mua bán nhà đất, bất động sản, dự án căn hộ, đất nền, nhà phố, chung cư, cho thuê bất động sản, đầu tư địa ốc, DadiLand, Vidco Group",
    },
    // Open Graph
  ],
  link: [{ rel: "canonical", href: "https://dadiland.com/" }],
  script: [
    {
      type: "application/ld+json",
      children: `{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "DadiLand",
        "alternateName": "Nhà Đất DadiLand",
        "url": "https://dadiland.com/",
        "logo": "https://dadiland.com/images/logo.png",
        "image": "https://dadiland.com/images/logo.png",
        "description": "DadiLand là nền tảng bất động sản trực tuyến cung cấp thông tin mua bán, cho thuê, đầu tư nhà đất tại Hà Nội. Cầu nối tin cậy giữa người bán và người mua bất động sản.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 Trần Duy Hưng, Phường Thanh Xuân",
          "addressLocality": "Hà Nội",
          "addressCountry": "VN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+84-343018345",
          "contactType": "Customer Service",
          "availableLanguage": ["Vietnamese"]
        },
        "sameAs": [
          "https://solo.to/dadiland",
          "https://snstheme.com/forums/users/dadiland/",
          "https://ucgp.jujuy.edu.ar/profile/dadiland",
          "https://veterinarypracticetransition.com/author/dadiland/",
          "https://library.zortrax.com/members/dadilandcmquk/",
          "https://idol.st/user/64907/dadiland/",
          "https://participa.sostrecivic.coop/profiles/dadiland/activity",
          "https://www.slideserve.com/dadiland",
          "https://www.checkli.com/dadiland",
          "https://telegra.ph/dadiland-07-11",
          "https://demo.userproplugin.com/profile/dadiland/",
          "https://we-xpats.com/en/member/53110/",
          "https://careers.gita.org/profiles/6874867-nha-d-t-dadiland",
          "https://www.40billion.com/profile/106512035",
          "https://challonge.com/dadilandrs",
          "https://photoclub.canadiangeographic.ca/profile/21651556",
          "https://schoolido.lu/user/dadiland/",
          "https://www.gaiaonline.com/profiles/dadiland/50539878/",
          "https://linkmix.co/40595652",
          "https://postheaven.net/2bb2gkroyy",
          "https://backloggery.com/dadiland",
          "https://pumpyoursound.com/u/user/1509261",
          "https://www.gp1.hr/forums/users/dadiland/",
          "https://beatsaver.com/playlists/950688",
          "https://roomstyler.com/users/dadiland",
          "https://www.nintendo-master.com/profil/dadiland",
          "https://simania.co.il/userPage.php?userId=308334",
          "https://clearvoice.com/cv/NhtDadiland",
          "https://www.joindota.com/users/2303355-dadiland",
          "https://www.montessorijobsuk.co.uk/author/dadiland/"
        ]
      }`,
    },
  ],
});

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
