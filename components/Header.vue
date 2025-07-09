<template>
  <header>
    <!-- Mobile Nav -->
    <div id="nav-mobile" class="nav-mobile">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 text-center">
            <div class="icon_pr_mb" @click="toggleMobileMenu">
              <a href="#" title="Menu sản phẩm" @click.prevent>
                <i :class="{ active: isMobileMenuOpen }">
                  <span></span><span></span><span></span>
                </i>
              </a>
            </div>
            <img
              class="img-responsive"
              src="/images/logo.png"
              alt="Logo Sổ tay chung cư"
              width="200"
              height="50"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div
      class="menu-overlay"
      :class="{ active: isMobileMenuOpen }"
      @click="closeMobileMenu"
    ></div>

    <!-- Mobile Menu -->
    <div
      class="mobile-menu"
      :class="{ active: isMobileMenuOpen }"
      aria-label="Menu di động"
    >
      <div class="mobile-menu-container">
        <ul class="menu-list">
          <!-- Trang chủ -->
          <li class="active">
            <a href="/" @click="closeMobileMenu"> Trang chủ </a>
          </li>

          <!-- Sổ tay Dự án -->
          <li class="has-submenu" v-for="area in areas" :key="area.id">
            <div class="menu-item">
              <a
                :href="`/du-an/${area.id}-${slugify(area.name)}`"
                @click.prevent="handleMenuClick(area.id, area.name)"
              >
                <h2>{{ area.name }}</h2>
              </a>
              <span
                class="arrow"
                @click="toggleSubmenu($event)"
                aria-expanded="false"
                aria-label="Mở rộng menu con"
              ></span>
            </div>
            <ul class="submenu">
              <!-- Dự án Hà Nội -->
              <li
                class="has-submenu"
                v-for="subArea in area.children"
                :key="subArea.id"
              >
                <div class="menu-item">
                  <a
                    :href="`/du-an/${subArea.id}`"
                    @click.prevent="handleMenuClick(subArea.id, subArea.name)"
                    >{{ subArea.name }}</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li
                    v-for="subSubArea in subArea.children"
                    :key="subSubArea.id"
                  >
                    <a
                      :href="`/du-an/${subSubArea.id}-${slugify(
                        subSubArea.name
                      )}`"
                      @click.prevent="
                        handleMenuClick(subSubArea.id, subSubArea.name)
                      "
                      >{{ subSubArea.name }}</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Nhà đất bán -->
          <li class="has-sub">
            <a title="Nhà đất bán" href="/du-an/465-nha-dat-ban">
              <h2>Nhà đất bán</h2>
            </a>
          </li>

          <!-- Nhà đất cho thuê -->
          <li class="has-sub">
            <a title="Nhà đất cho thuê" href="/du-an/466-nha-dat-cho-thue">
              <h2>Nhà đất cho thuê</h2>
            </a>
          </li>

          <li class="has-sub">
            <a title="Tin tức" href="/du-an/467-tin-tuc">
              <h2>Tin tức</h2>
            </a>
          </li>

          <!-- Liên hệ -->
          <li class="active">
            <a href="/contact">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- PC Nav -->
    <nav
      id="nav_menu"
      :class="{ sticky: isSticky }"
      ref="headerNav"
      aria-label="Menu chính"
    >
      <div class="container">
        <div class="row">
          <div id="header-wrapper">
            <div class="col-md-12 col-sm-12">
              <div id="cssmenu">
                <a
                  href="/"
                  class="logo-bg"
                  style="
                    background: none;
                    border-radius: 0;
                    display: flex;
                    align-items: center;
                    padding: 0;
                    vertical-align: middle;
                  "
                >
                  <img
                    class="img-responsive"
                    src="/images/logo.png"
                    alt="Logo Sổ tay chung cư"
                    width="110"
                    height="32"
                    loading="lazy"
                    style="
                      background: transparent;
                      margin: 0;
                      padding: 0;
                      vertical-align: middle;
                    "
                  />
                </a>
                <ul class="maunen">
                  <li class="has-sub">
                    <a href="/" title="Trang chủ">Trang chủ</a>
                  </li>

                  <li class="has-sub" v-for="area in areas" :key="area.id">
                    <a
                      :title="area.name"
                      :href="`/du-an/${area.id}-${slugify(area.name)}`"
                      @click.prevent="handleMenuClick(area.id, area.name)"
                    >
                      <h2>{{ area.name }}</h2>
                    </a>
                    <ul>
                      <li
                        class="has-sub"
                        v-for="subArea in area.children"
                        :key="subArea.id"
                      >
                        <a
                          :title="subArea.name"
                          :href="`/du-an/${subArea.id}-${slugify(
                            subArea.name
                          )}`"
                          @click.prevent="
                            handleMenuClick(subArea.id, subArea.name)
                          "
                          >{{ subArea.name }}
                        </a>
                        <ul>
                          <li
                            class="has-sub"
                            v-for="subSubArea in subArea.children"
                            :key="subSubArea.id"
                          >
                            <a
                              :title="subSubArea.name"
                              :href="`/du-an/${subSubArea.id}-${slugify(
                                subSubArea.name
                              )}`"
                              @click.prevent="
                                handleMenuClick(subSubArea.id, subSubArea.name)
                              "
                              >{{ subSubArea.name }}</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="has-sub">
                    <a
                      title="Nhà đất bán"
                      @click.prevent="
                        handleMenuClick(0, 'Nhà đất bán', 'nha-dat-ban')
                      "
                      href="/danh-muc-du-an/nha-dat-ban"
                    >
                      <h2>Nhà đất bán</h2>
                    </a>
                  </li>

                  <li class="has-sub">
                    <a
                      title="Nhà đất cho thuê"
                      @click.prevent="
                        handleMenuClick(
                          0,
                          'Nhà đất cho thuê',
                          'nha-dat-cho-thue'
                        )
                      "
                      href="/danh-muc-du-an/nha-dat-cho-thue"
                    >
                      <h2>Nhà đất cho thuê</h2>
                    </a>
                  </li>

                  <li class="has-sub">
                    <a
                      title="Tin tức"
                      @click.prevent="handleMenuClick(0, 'Tin tức', 'tin-tuc')"
                      href="/danh-muc-du-an/tin-tuc"
                    >
                      <h2>Tin tức</h2>
                    </a>
                  </li>
                  <li class="has-sub">
                    <a href="/contact" title="Liên hệ">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="clear"></div>
  </header>
</template>

<script>
import { useProjectStore } from "~/store/useProject";
import { useRouter } from "vue-router";

export default {
  data() {
    return {
      isSticky: false,
      isMobileMenuOpen: false,
      areas: [
        {
          id: 1,
          name: "Sổ tay Dự án",
          children: [
            {
              id: 2,
              name: "Dự án Hà Nội",
              children: [
                { id: 3, name: "Quận Ba Đình" },
                { id: 4, name: "Quận Hoàn Kiếm" },
                { id: 5, name: "Quận Hai Bà Trưng" },
                { id: 6, name: "Quận Đống Đa" },
                { id: 7, name: "Quận Tây Hồ" },
                { id: 8, name: "Quận Cầu Giấy" },
                { id: 9, name: "Quận Thanh Xuân" },
                { id: 10, name: "Quận Hoàng Mai" },
                { id: 11, name: "Quận Long Biên" },
                { id: 12, name: "Quận Nam Từ Liêm" },
                { id: 13, name: "Quận Bắc Từ Liêm" },
                { id: 14, name: "Quận Hà Đông" },
                { id: 15, name: "Huyện Thanh Trì" },
                { id: 16, name: "Huyện Gia Lâm" },
                { id: 17, name: "Huyện Đông Anh" },
                { id: 18, name: "Huyện Sóc Sơn" },
                { id: 19, name: "Thị xã Sơn Tây" },
                { id: 20, name: "Huyện Ba Vì" },
                { id: 21, name: "Huyện Phúc Thọ" },
                { id: 22, name: "Huyện Đan Phượng" },
                { id: 23, name: "Huyện Hoài Đức" },
                { id: 24, name: "Huyện Quốc Oai" },
                { id: 25, name: "Huyện Thạch Thất" },
                { id: 26, name: "Huyện Chương Mỹ" },
                { id: 27, name: "Huyện Thanh Oai" },
                { id: 28, name: "Huyện Thường Tín" },
                { id: 29, name: "Huyện Phú Xuyên" },
                { id: 30, name: "Huyện Ứng Hòa" },
                { id: 31, name: "Huyện Mỹ Đức" },
                { id: 32, name: "Huyện Mê Linh" },
              ],
            },
            {
              id: 33,
              name: "Dự án Sài Gòn",
              children: [
                { id: 34, name: "Quận 1" },
                { id: 35, name: "Quận 2" },
                { id: 36, name: "Quận 3" },
                { id: 37, name: "Quận 4" },
                { id: 38, name: "Quận 5" },
                { id: 39, name: "Quận 6" },
                { id: 40, name: "Quận 7" },
                { id: 41, name: "Quận 8" },
                { id: 42, name: "Quận 9" },
                { id: 43, name: "Quận 10" },
                { id: 44, name: "Quận 11" },
                { id: 45, name: "Quận 12" },
                { id: 46, name: "Quận Bình Tân" },
                { id: 47, name: "Quận Bình Thạnh" },
                { id: 48, name: "Quận Gò Vấp" },
                { id: 49, name: "Quận Phú Nhuận" },
                { id: 50, name: "Quận Tân Bình" },
                { id: 51, name: "Quận Tân Phú" },
                { id: 52, name: "TP Thủ Đức" },
                { id: 53, name: "Huyện Bình Chánh" },
                { id: 54, name: "Huyện Cần Giờ" },
                { id: 55, name: "Huyện Củ Chi" },
                { id: 56, name: "Huyện Hóc Môn" },
                { id: 57, name: "Huyện Nhà Bè" },
              ],
            },
          ],
        },
        {
          id: 58,
          name: "Sổ Tay Nhà Đất",
          children: [
            {
              id: 59,
              name: "Nhà đất Đông Bắc",
              children: [
                { id: 60, name: "Nhà đất Hải Phòng" },
                { id: 61, name: "Nhà đất Quảng Ninh" },
                { id: 62, name: "Nhà đất Bắc Ninh" },
                { id: 63, name: "Nhà đất Bắc Giang" },
                { id: 64, name: "Nhà đất Hải Dương" },
                { id: 65, name: "Nhà đất Thái Nguyên" },
                { id: 66, name: "Nhà đất Vĩnh Phúc" },
                { id: 67, name: "Nhà đất Hà Nam" },
                { id: 68, name: "Nhà đất Phú Thọ" },
                { id: 69, name: "Nhà đất Thái Bình" },
                { id: 70, name: "Nhà đất Nam Định" },
                { id: 71, name: "Nhà đất Ninh Bình" },
                { id: 72, name: "Nhà đất Lạng Sơn" },
                { id: 73, name: "Nhà đất Cao Bằng" },
                { id: 74, name: "Nhà đất Tuyên Quang" },
                { id: 75, name: "Nhà đất Hà Giang" },
                { id: 76, name: "Nhà đất Bắc Kạn" },
              ],
            },
            {
              id: 77,
              name: "Nhà đất Tây Bắc",
              children: [
                { id: 78, name: "Nhà đất Lai Châu" },
                { id: 79, name: "Nhà đất Hòa Bình" },
                { id: 80, name: "Nhà đất Lào Cai" },
                { id: 81, name: "Nhà đất Yên Bái" },
                { id: 82, name: "Nhà đất Sơn La" },
                { id: 83, name: "Nhà đất Điện Biên" },
              ],
            },
            {
              id: 84,
              name: "Nhà đất Bắc Trung Bộ",
              children: [
                { id: 85, name: "Nhà đất Nghệ An" },
                { id: 86, name: "Nhà đất Thanh Hóa" },
                { id: 87, name: "Nhà đất Hà Tĩnh" },
                { id: 88, name: "Nhà đất Quảng Bình" },
                { id: 89, name: "Nhà đất Quảng Trị" },
                { id: 90, name: "Nhà đất Thừa Thiên - Huế" },
              ],
            },
            {
              id: 91,
              name: "Nhà đất Nam Trung Bộ",
              children: [
                { id: 92, name: "Nhà đất Đà Nẵng" },
                { id: 93, name: "Nhà đất Quảng Nam" },
                { id: 94, name: "Nhà đất Quảng Ngãi" },
                { id: 95, name: "Nhà đất Bình Định" },
                { id: 96, name: "Nhà đất Phú Yên" },
                { id: 97, name: "Nhà đất Khánh Hòa" },
                { id: 98, name: "Nhà đất Ninh Thuận" },
                { id: 99, name: "Nhà đất Bình Thuận" },
              ],
            },
            {
              id: 100,
              name: "Nhà đất Đông Nam Bộ",
              children: [
                { id: 101, name: "Nhà đất Bình Dương" },
                { id: 102, name: "Nhà đất Vũng Tàu" },
                { id: 103, name: "Nhà đất Đồng Nai" },
                { id: 104, name: "Nhà đất Bà Rịa" },
                { id: 105, name: "Nhà đất Tây Ninh" },
                { id: 106, name: "Nhà đất Bình Phước" },
              ],
            },
            {
              id: 107,
              name: "Nhà đất Tây Nam Bộ",
              children: [
                { id: 108, name: "Nhà đất Cần Thơ" },
                { id: 109, name: "Nhà đất Tiền Giang" },
                { id: 110, name: "Nhà đất Hậu Giang" },
                { id: 111, name: "Nhà đất Long An" },
                { id: 112, name: "Nhà đất Trà Vinh" },
                { id: 113, name: "Nhà đất Sóc Trăng" },
                { id: 114, name: "Nhà đất Đồng Tháp" },
                { id: 115, name: "Nhà đất Vĩnh Long" },
                { id: 116, name: "Nhà đất Bạc Liêu" },
                { id: 117, name: "Nhà đất Bến Tre" },
                { id: 118, name: "Nhà đất Cà Mau" },
                { id: 119, name: "Nhà đất An Giang" },
                { id: 120, name: "Nhà đất Kiên Giang" },
                { id: 121, name: "Nhà đất Kiên Giang" },
              ],
            },
            {
              id: 122,
              name: "Nhà đất Tây Nguyên",
              children: [
                { id: 123, name: "Nhà đất Kon Tum" },
                { id: 124, name: "Nhà đất Lâm Đồng" },
                { id: 125, name: "Nhà đất Gia Lai" },
                { id: 126, name: "Nhà đất Đắk Lắk" },
                { id: 127, name: "Nhà đất Đắk Nông" },
              ],
            },
          ],
        },
      ],
    };
  },
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
    handleMenuClick(index, text = "", path = "") {
      if (!!index) {
        this.$router.push(`/du-an/${index}-${this.slugify(text)}`);
      } else {
        this.$router.push(`/danh-muc-du-an/${path}`);
      }
      useProjectStore().setMenuPage(text);
    },
    checkSticky() {
      const headerNav = this.$refs.headerNav;
      if (!headerNav) return;
      const sticky = headerNav.offsetTop;
      this.isSticky = window.pageYOffset > sticky;
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "";
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = "";
    },
    toggleSubmenu(event) {
      event.stopPropagation();
      const arrow = event.target;
      const menuItem = arrow.closest(".menu-item");
      const submenu = menuItem?.nextElementSibling;
      if (submenu) {
        const parent = submenu.parentElement?.parentElement;
        if (parent) {
          const allSubmenus = parent.querySelectorAll(".submenu");
          allSubmenus.forEach((sub) => {
            if (sub !== submenu) {
              sub.classList.remove("active");
              sub.previousElementSibling
                ?.querySelector(".arrow")
                ?.classList.remove("active");
            }
          });
        }
        submenu.classList.toggle("active");
        arrow.classList.toggle("active");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.checkSticky);
  },
  unmounted() {
    window.removeEventListener("scroll", this.checkSticky);
  },
};
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#header-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 4px 24px 0 rgba(127, 83, 172, 0.1),
    0 1.5px 6px 0 rgba(95, 251, 241, 0.08);
  padding: 0 16px;
  min-height: 64px;
}

.logo-bg {
  padding: 0;
  display: flex;
  align-items: center;
  background: none;
  border-radius: 0;
  height: 48px;
}

.logo-bg img {
  height: 56px;
  width: auto;
  max-width: 120px;
  margin: 0;
  padding: 0;
  vertical-align: middle;
}

#cssmenu {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
}

#cssmenu ul.maunen {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
}

#cssmenu ul.maunen > li {
  margin: 0 6px;
}

@media (max-width: 1200px) {
  #header-wrapper {
    padding: 0 4px;
    min-height: 56px;
  }
  .logo-bg {
    height: 40px;
  }
  .logo-bg img {
    height: 46px;
    max-width: 90px;
  }
  #cssmenu ul.maunen > li {
    margin: 0;
  }
}

@media (max-width: 992px) {
  #header-wrapper {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2px;
    min-height: 48px;
  }
  .logo-bg {
    margin: 0 0 8px 0 !important;
    height: 36px;
  }
  #cssmenu ul.maunen {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  #cssmenu ul.maunen > li {
    margin: 0 2px 4px 2px;
  }
}

@media (max-width: 768px) {
  #header-wrapper {
    display: block;
    border-radius: 0;
    box-shadow: none;
    background: none;
    min-height: unset;
    padding: 0;
  }
  .logo-bg {
    display: none;
  }
  #cssmenu {
    display: none;
  }
}

.nav-mobile {
  display: none;
  padding: 10px 0;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.icon_pr_mb {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.icon_pr_mb i {
  display: block;
  width: 25px;
  height: 20px;
  position: relative;
}

.icon_pr_mb i span {
  display: block;
  width: 100%;
  height: 2px;
  background: #333;
  position: absolute;
  transition: all 0.3s;
}

.icon_pr_mb i span:nth-child(1) {
  top: 0;
}
.icon_pr_mb i span:nth-child(2) {
  top: 9px;
}
.icon_pr_mb i span:nth-child(3) {
  bottom: 0;
}

.icon_pr_mb i.active span:nth-child(1) {
  transform: rotate(45deg);
  top: 9px;
}

.icon_pr_mb i.active span:nth-child(2) {
  opacity: 0;
}

.icon_pr_mb i.active span:nth-child(3) {
  transform: rotate(-45deg);
  bottom: 9px;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -300px;
  width: 300px;
  height: 100vh;
  background: #fff;
  z-index: 1001;
  overflow-y: auto;
  transition: left 0.3s ease;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  -webkit-overflow-scrolling: touch;
}

.mobile-menu.active {
  left: 0;
}

.mobile-menu-container {
  padding: 10px 0;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  border-bottom: 1px solid #eee;
}

.menu-list li a {
  display: block;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  font-size: 13px;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
}

.menu-item a {
  flex: 1;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  font-size: 13px;
}

.arrow {
  width: 6px;
  height: 6px;
  border-right: 1px solid #666;
  border-bottom: 1px solid #666;
  transform: rotate(45deg);
  transition: transform 0.3s;
  margin-right: 15px;
  cursor: pointer;
  padding: 6px;
}

.arrow.active {
  transform: rotate(-135deg);
  margin-top: 3px;
}

.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  background: #f8f8f8;
}

.submenu.active {
  max-height: none;
}

.submenu .submenu {
  background: #f1f1f1;
}

.submenu li a {
  padding-left: 25px;
  font-size: 12px;
}

.submenu .submenu li a {
  padding-left: 35px;
}

/* Custom styles */
.menu-list h2 {
  margin: 0;
  font-size: 13px;
  font-weight: normal;
  display: inline;
}

.menu-list img {
  vertical-align: middle;
  margin-right: 5px;
  width: 11px;
  height: 11px;
}

/* Scrollbar styles */
.mobile-menu::-webkit-scrollbar {
  width: 3px;
}

.mobile-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.mobile-menu::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
}

.menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-mobile {
    display: block;
  }

  #nav_menu {
    display: none;
  }
}
</style>
