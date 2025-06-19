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
              src="https://sotaychungcu.com//img/upload/images/files/Slideshow/sotaychungcu.png"
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
            <a href="/" @click="closeMobileMenu">
              <img
                src="~/assets/icon/home.png"
                alt="Icon trang chủ"
                width="11"
                height="11"
                loading="lazy"
              />
              Trang chủ
            </a>
          </li>

          <!-- Sổ tay Dự án -->
          <li class="has-submenu">
            <div class="menu-item">
              <a
                href="/du-an/431-so-tay-du-an"
                @click.prevent="handleMenuClick(1, 'Sổ tay Dự án')"
              >
                <h2>Sổ tay Dự án</h2>
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
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/127-du-an-ha-noi"
                    @click.prevent="handleMenuClick(2, 'Dự án Hà Nội')"
                    >Dự án Hà Nội</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/429-quan-ba-dinh"
                      @click.prevent="handleMenuClick(3, 'Quận Ba Đình')"
                      >Quận Ba Đình</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/430-quan-hoan-kiem"
                      @click.prevent="handleMenuClick(4, 'Quận Hoàn Kiếm')"
                      >Quận Hoàn Kiếm</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/431-quan-hai-ba-trung"
                      @click.prevent="handleMenuClick(5, 'Quận Hai Bà Trưng')"
                      >Quận Hai Bà Trưng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/432-quan-dong-da"
                      @click.prevent="handleMenuClick(6, 'Quận Đống Đa')"
                      >Quận Đống Đa</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/433-quan-tay-ho"
                      @click.prevent="handleMenuClick(7, 'Quận Tây Hồ')"
                      >Quận Tây Hồ</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/434-quan-cau-giay"
                      @click.prevent="handleMenuClick(8, 'Quận Cầu Giấy')"
                      >Quận Cầu Giấy</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/435-quan-thanh-xuan"
                      @click.prevent="handleMenuClick(9, 'Quận Thanh Xuân')"
                      >Quận Thanh Xuân</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/436-quan-hoang-mai"
                      @click.prevent="handleMenuClick(10, 'Quận Hoàng Mai')"
                      >Quận Hoàng Mai</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/437-quan-long-bien"
                      @click.prevent="handleMenuClick(11, 'Quận Long Biên')"
                      >Quận Long Biên</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/438-quan-nam-tu-liem"
                      @click.prevent="handleMenuClick(12, 'Quận Nam Từ Liêm')"
                      >Quận Nam Từ Liêm</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/439-quan-bac-tu-liem"
                      @click.prevent="handleMenuClick(13, 'Quận Bắc Từ Liêm')"
                      >Quận Bắc Từ Liêm</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/440-quan-ha-dong"
                      @click.prevent="handleMenuClick(14, 'Quận Hà Đông')"
                      >Quận Hà Đông</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/441-huyen-thanh-tri"
                      @click.prevent="handleMenuClick(15, 'Huyện Thanh Trì')"
                      >Huyện Thanh Trì</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/442-huyen-gia-lam"
                      @click.prevent="handleMenuClick(16, 'Huyện Gia Lâm')"
                      >Huyện Gia Lâm</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/443-huyen-dong-anh"
                      @click.prevent="handleMenuClick(17, 'Huyện Đông Anh')"
                      >Huyện Đông Anh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/444-huyen-soc-son"
                      @click.prevent="handleMenuClick(18, 'Huyện Sóc Sơn')"
                      >Huyện Sóc Sơn</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/445-thi-xa-son-tay"
                      @click.prevent="handleMenuClick(19, 'Thị xã Sơn Tây')"
                      >Thị xã Sơn Tây</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/446-huyen-ba-vi"
                      @click.prevent="handleMenuClick(20, 'Huyện Ba Vì')"
                      >Huyện Ba Vì</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/447-huyen-phuc-tho"
                      @click.prevent="handleMenuClick(21, 'Huyện Phúc Thọ')"
                      >Huyện Phúc Thọ</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/448-huyen-dan-phuong"
                      @click.prevent="handleMenuClick(22, 'Huyện Đan Phượng')"
                      >Huyện Đan Phượng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/449-huyen-hoai-duc"
                      @click.prevent="handleMenuClick(23, 'Huyện Hoài Đức')"
                      >Huyện Hoài Đức</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/450-huyen-quoc-oai"
                      @click.prevent="handleMenuClick(24, 'Huyện Quốc Oai')"
                      >Huyện Quốc Oai</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/451-huyen-thach-that"
                      @click.prevent="handleMenuClick(25, 'Huyện Thạch Thất')"
                      >Huyện Thạch Thất</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/452-huyen-chuong-my"
                      @click.prevent="handleMenuClick(26, 'Huyện Chương Mỹ')"
                      >Huyện Chương Mỹ</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/453-huyen-thanh-oai"
                      @click.prevent="handleMenuClick(27, 'Huyện Thanh Oai')"
                      >Huyện Thanh Oai</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/454-huyen-thuong-tin"
                      @click.prevent="handleMenuClick(28, 'Huyện Thường Tín')"
                      >Huyện Thường Tín</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/455-huyen-phu-xuyen"
                      @click.prevent="handleMenuClick(29, 'Huyện Phú Xuyên')"
                      >Huyện Phú Xuyên</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/456-huyen-ung-hoa"
                      @click.prevent="handleMenuClick(30, 'Huyện Ứng Hòa')"
                      >Huyện Ứng Hòa</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/457-huyen-my-duc"
                      @click.prevent="handleMenuClick(31, 'Huyện Mỹ Đức')"
                      >Huyện Mỹ Đức</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/458-huyen-me-linh"
                      @click.prevent="handleMenuClick(32, 'Huyện Mê Linh')"
                      >Huyện Mê Linh</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Dự án Sài Gòn -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/128-du-an-sai-gon"
                    @click.prevent="handleMenuClick(32, 'Dự án Sài Gòn')"
                    >Dự án Sài Gòn</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/109-quan-1-1"
                      @click.prevent="handleMenuClick(33, 'Quận 1')"
                      >Quận 1</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/110-quan-2"
                      @click.prevent="handleMenuClick(34, 'Quận 2')"
                      >Quận 2</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/111-quan-3"
                      @click.prevent="handleMenuClick(35, 'Quận 3')"
                      >Quận 3</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/112-quan-4"
                      @click.prevent="handleMenuClick(36, 'Quận 4')"
                      >Quận 4</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/113-quan-5"
                      @click.prevent="handleMenuClick(37, 'Quận 5')"
                      >Quận 5</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/114-quan-6"
                      @click.prevent="handleMenuClick(38, 'Quận 6')"
                      >Quận 6</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/115-quan-7"
                      @click.prevent="handleMenuClick(39, 'Quận 7')"
                      >Quận 7</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/116-quan-8"
                      @click.prevent="handleMenuClick(40, 'Quận 8')"
                      >Quận 8</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/117-quan-9"
                      @click.prevent="handleMenuClick(41, 'Quận 9')"
                      >Quận 9</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/118-quan-10"
                      @click.prevent="handleMenuClick(42, 'Quận 10')"
                      >Quận 10</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/119-quan-11"
                      @click.prevent="handleMenuClick(43, 'Quận 11')"
                      >Quận 11</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/120-quan-12"
                      @click.prevent="handleMenuClick(44, 'Quận 12')"
                      >Quận 12</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/121-quan-binh-tan"
                      @click.prevent="handleMenuClick(45, 'Quận Bình Tân')"
                      >Quận Bình Tân</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/122-quan-binh-thanh"
                      @click.prevent="handleMenuClick(46, 'Quận Bình Thạnh')"
                      >Quận Bình Thạnh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/469-quan-go-vap"
                      @click.prevent="handleMenuClick(47, 'Quận Gò Vấp')"
                      >Quận Gò Vấp</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/470-quan-phu-nhuan"
                      @click.prevent="handleMenuClick(48, 'Quận Phú Nhuận')"
                      >Quận Phú Nhuận</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/471-quan-tan-binh"
                      @click.prevent="handleMenuClick(49, 'Quận Tân Bình')"
                      >Quận Tân Bình</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/472-quan-tan-phu"
                      @click.prevent="handleMenuClick(50, 'Quận Tân Phú')"
                      >Quận Tân Phú</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/473-tp-thu-duc"
                      @click.prevent="handleMenuClick(51, 'TP Thủ Đức')"
                      >TP Thủ Đức</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/474-huyen-binh-chanh"
                      @click.prevent="handleMenuClick(52, 'Huyện Bình Chánh')"
                      >Huyện Bình Chánh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/475-huyen-can-gio"
                      @click.prevent="handleMenuClick(53, 'Huyện Cần Giờ')"
                      >Huyện Cần Giờ</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/476-huyen-cu-chi"
                      @click.prevent="handleMenuClick(54, 'Huyện Củ Chi')"
                      >Huyện Củ Chi</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/477-huyen-hoc-mon"
                      @click.prevent="handleMenuClick(55, 'Huyện Hóc Môn')"
                      >Huyện Hóc Môn</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/478-huyen-nha-be"
                      @click.prevent="handleMenuClick(56, 'Huyện Nhà Bè')"
                      >Huyện Nhà Bè</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Sổ tay Nhà đất -->
          <li class="has-submenu">
            <div class="menu-item">
              <a
                href="/du-an/464-so-tay-nha-dat"
                @click.prevent="handleMenuClick(57, 'Sổ tay Nhà đất')"
              >
                <h2>Sổ tay Nhà đất</h2>
              </a>
              <span
                class="arrow"
                @click="toggleSubmenu($event)"
                aria-expanded="false"
                aria-label="Mở rộng menu con"
              ></span>
            </div>
            <ul class="submenu">
              <!-- Nhà đất Đông Bắc -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/482-nha-dat-dong-bac"
                    @click.prevent="handleMenuClick(58, 'Nhà đất Đông Bắc')"
                    >Nhà đất Đông Bắc</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/489-nha-dat-hai-phong"
                      @click.prevent="handleMenuClick(59, 'Nhà đất Hải Phòng')"
                      >Nhà đất Hải Phòng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/490-nha-dat-quang-ninh"
                      @click.prevent="handleMenuClick(60, 'Nhà đất Quảng Ninh')"
                      >Nhà đất Quảng Ninh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/491-nha-dat-bac-ninh"
                      @click.prevent="handleMenuClick(61, 'Nhà đất Bắc Ninh')"
                      >Nhà đất Bắc Ninh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/492-nha-dat-bac-giang"
                      @click.prevent="handleMenuClick(62, 'Nhà đất Bắc Giang')"
                      >Nhà đất Bắc Giang</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/493-nha-dat-hung-yen"
                      @click.prevent="handleMenuClick(63, 'Nhà đất Hưng Yên')"
                      >Nhà đất Hưng Yên</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/494-nha-dat-hai-duong"
                      @click.prevent="handleMenuClick(64, 'Nhà đất Hải Dương')"
                      >Nhà đất Hải Dương</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/495-nha-dat-thai-nguyen"
                      @click.prevent="
                        handleMenuClick(65, 'Nhà đất Thái Nguyên')
                      "
                      >Nhà đất Thái Nguyên</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/496-nha-dat-vinh-phuc"
                      @click.prevent="handleMenuClick(66, 'Nhà đất Vĩnh Phúc')"
                      >Nhà đất Vĩnh Phúc</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/497-nha-dat-ha-nam"
                      @click.prevent="handleMenuClick(67, 'Nhà đất Hà Nam')"
                      >Nhà đất Hà Nam</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/498-nha-dat-phu-tho"
                      @click.prevent="handleMenuClick(68, 'Nhà đất Phú Thọ')"
                      >Nhà đất Phú Thọ</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/499-nha-dat-thai-binh"
                      @click.prevent="handleMenuClick(69, 'Nhà đất Thái Bình')"
                      >Nhà đất Thái Bình</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/500-nha-dat-nam-dinh"
                      @click.prevent="handleMenuClick(70, 'Nhà đất Nam Định')"
                      >Nhà đất Nam Định</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/501-nha-dat-ninh-binh"
                      @click.prevent="handleMenuClick(71, 'Nhà đất Ninh Bình')"
                      >Nhà đất Ninh Bình</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/502-nha-dat-lang-son"
                      @click.prevent="handleMenuClick(72, 'Nhà đất Lạng Sơn')"
                      >Nhà đất Lạng Sơn</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/503-nha-dat-cao-bang"
                      @click.prevent="handleMenuClick(73, 'Nhà đất Cao Bằng')"
                      >Nhà đất Cao Bằng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/504-nha-dat-tuyen-quang"
                      @click.prevent="
                        handleMenuClick(74, 'Nhà đất Tuyên Quang')
                      "
                      >Nhà đất Tuyên Quang</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/505-nha-dat-ha-giang"
                      @click.prevent="handleMenuClick(75, 'Nhà đất Hà Giang')"
                      >Nhà đất Hà Giang</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/506-nha-dat-bac-kan"
                      @click.prevent="handleMenuClick(76, 'Nhà đất Bắc Kạn')"
                      >Nhà đất Bắc Kạn</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Tây Bắc -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/483-nha-dat-tay-bac"
                    @click.prevent="handleMenuClick(77, 'Nhà đất Tây Bắc')"
                    >Nhà đất Tây Bắc</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/512-nha-dat-lai-chau"
                      @click.prevent="handleMenuClick(78, 'Nhà đất Lai Châu')"
                      >Nhà đất Lai Châu</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/507-nha-dat-hoa-binh"
                      @click.prevent="handleMenuClick(79, 'Nhà đất Hòa Bình')"
                      >Nhà đất Hòa Bình</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/508-nha-dat-lao-cai"
                      @click.prevent="handleMenuClick(80, 'Nhà đất Lào Cai')"
                      >Nhà đất Lào Cai</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/509-nha-dat-yen-bai"
                      @click.prevent="handleMenuClick(81, 'Nhà đất Yên Bái')"
                      >Nhà đất Yên Bái</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/510-nha-dat-son-la"
                      @click.prevent="handleMenuClick(82, 'Nhà đất Sơn La')"
                      >Nhà đất Sơn La</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/511-nha-dat-dien-bien"
                      @click.prevent="handleMenuClick(83, 'Nhà đất Điện Biên')"
                      >Nhà đất Điện Biên</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Bắc Trung Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/484-nha-dat-bac-trung-bo"
                    @click.prevent="handleMenuClick(84, 'Nhà đất Bắc Trung Bộ')"
                    >Nhà đất Bắc Trung Bộ</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/513-nha-dat-nghe-an"
                      @click.prevent="handleMenuClick(85, 'Nhà đất Nghệ An')"
                      >Nhà đất Nghệ An</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/514-nha-dat-thanh-hoa"
                      @click.prevent="handleMenuClick(86, 'Nhà đất Thanh Hóa')"
                      >Nhà đất Thanh Hóa</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/515-nha-dat-ha-tinh"
                      @click.prevent="handleMenuClick(87, 'Nhà đất Hà Tĩnh')"
                      >Nhà đất Hà Tĩnh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/516-nha-dat-quang-binh"
                      @click.prevent="handleMenuClick(88, 'Nhà đất Quảng Bình')"
                      >Nhà đất Quảng Bình</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/517-nha-dat-quang-tri"
                      @click.prevent="handleMenuClick(89, 'Nhà đất Quảng Trị')"
                      >Nhà đất Quảng Trị</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/518-nha-dat-thua-thien-hue"
                      @click.prevent="
                        handleMenuClick(90, 'Nhà đất Thừa Thiên - Huế')
                      "
                      >Nhà đất Thừa Thiên - Huế</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Nam Trung Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/485-nha-dat-nam-trung-bo"
                    @click.prevent="handleMenuClick(91, 'Nhà đất Nam Trung Bộ')"
                    >Nhà đất Nam Trung Bộ</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/519-nha-dat-da-nang"
                      @click.prevent="handleMenuClick(92, 'Nhà đất Đà Nẵng')"
                      >Nhà đất Đà Nẵng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/520-nha-dat-quang-nam"
                      @click.prevent="handleMenuClick(93, 'Nhà đất Quảng Nam')"
                      >Nhà đất Quảng Nam</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/521-nha-dat-quang-ngai"
                      @click.prevent="handleMenuClick(94, 'Nhà đất Quảng Ngãi')"
                      >Nhà đất Quảng Ngãi</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/522-nha-dat-binh-dinh"
                      @click.prevent="handleMenuClick(95, 'Nhà đất Bình Định')"
                      >Nhà đất Bình Định</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/523-nha-dat-phu-yen"
                      @click.prevent="handleMenuClick(96, 'Nhà đất Phú Yên')"
                      >Nhà đất Phú Yên</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/524-nha-dat-khanh-hoa"
                      @click.prevent="handleMenuClick(97, 'Nhà đất Khánh Hòa')"
                      >Nhà đất Khánh Hòa</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/525-nha-dat-ninh-thuan"
                      @click.prevent="handleMenuClick(98, 'Nhà đất Ninh Thuận')"
                      >Nhà đất Ninh Thuận</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/526-nha-dat-binh-thuan"
                      @click.prevent="handleMenuClick(99, 'Nhà đất Bình Thuận')"
                      >Nhà đất Bình Thuận</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Đông Nam Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/486-nha-dat-dong-nam-bo"
                    @click.prevent="handleMenuClick(100, 'Nhà đất Đông Nam Bộ')"
                    >Nhà đất Đông Nam Bộ</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/527-nha-dat-binh-duong"
                      @click.prevent="
                        handleMenuClick(101, 'Nhà đất Bình Dương')
                      "
                      >Nhà đất Bình Dương</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/528-nha-dat-vung-tau"
                      @click.prevent="handleMenuClick(102, 'Nhà đất Vũng Tàu')"
                      >Nhà đất Vũng Tàu</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/529-nha-dat-dong-nai"
                      @click.prevent="handleMenuClick(103, 'Nhà đất Đồng Nai')"
                      >Nhà đất Đồng Nai</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/530-nha-dat-ba-ria"
                      @click.prevent="handleMenuClick(104, 'Nhà đất Bà Rịa')"
                      >Nhà đất Bà Rịa</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/531-nha-dat-tay-ninh"
                      @click.prevent="handleMenuClick(105, 'Nhà đất Tây Ninh')"
                      >Nhà đất Tây Ninh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/532-nha-dat-binh-phuoc"
                      @click.prevent="
                        handleMenuClick(106, 'Nhà đất Bình Phước')
                      "
                      >Nhà đất Bình Phước</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Tây Nam Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/487-nha-dat-tay-nam-bo"
                    @click.prevent="handleMenuClick(107, 'Nhà đất Tây Nam Bộ')"
                    >Nhà đất Tây Nam Bộ</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/533-nha-dat-can-tho"
                      @click.prevent="handleMenuClick(108, 'Nhà đất Cần Thơ')"
                      >Nhà đất Cần Thơ</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/534-nha-dat-tien-giang"
                      @click.prevent="
                        handleMenuClick(109, 'Nhà đất Tiền Giang')
                      "
                      >Nhà đất Tiền Giang</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/535-nha-dat-hau-giang"
                      @click.prevent="handleMenuClick(110, 'Nhà đất Hậu Giang')"
                      >Nhà đất Hậu Giang</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/536-nha-dat-long-an"
                      @click.prevent="handleMenuClick(111, 'Nhà đất Long An')"
                      >Nhà đất Long An</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/537-nha-dat-tra-vinh"
                      @click.prevent="handleMenuClick(112, 'Nhà đất Trà Vinh')"
                      >Nhà đất Trà Vinh</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/538-nha-dat-soc-trang"
                      @click.prevent="handleMenuClick(113, 'Nhà đất Sóc Trăng')"
                      >Nhà đất Sóc Trăng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/539-nha-dat-dong-thap"
                      @click.prevent="handleMenuClick(114, 'Nhà đất Đồng Tháp')"
                      >Nhà đất Đồng Tháp</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/540-nha-dat-vinh-long"
                      @click.prevent="handleMenuClick(115, 'Nhà đất Vĩnh Long')"
                      >Nhà đất Vĩnh Long</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/541-nha-dat-bac-lieu"
                      @click.prevent="handleMenuClick(116, 'Nhà đất Bạc Liêu')"
                      >Nhà đất Bạc Liêu</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/542-nha-dat-ben-tre"
                      @click.prevent="handleMenuClick(117, 'Nhà đất Bến Tre')"
                      >Nhà đất Bến Tre</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/543-nha-dat-ca-mau"
                      @click.prevent="handleMenuClick(118, 'Nhà đất Cà Mau')"
                      >Nhà đất Cà Mau</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/544-nha-dat-an-giang"
                      @click.prevent="handleMenuClick(119, 'Nhà đất An Giang')"
                      >Nhà đất An Giang</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/545-nha-dat-kien-giang"
                      @click.prevent="
                        handleMenuClick(120, 'Nhà đất Kiên Giang')
                      "
                      >Nhà đất Kiên Giang</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Tây Nguyên -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a
                    href="/du-an/488-nha-dat-tay-nguyen"
                    @click.prevent="handleMenuClick(121, 'Nhà đất Tây Nguyên')"
                    >Nhà đất Tây Nguyên</a
                  >
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li>
                    <a
                      href="/du-an/546-nha-dat-kon-tum"
                      @click.prevent="handleMenuClick(122, 'Nhà đất Kon Tum')"
                      >Nhà đất Kon Tum</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/547-nha-dat-lam-dong"
                      @click.prevent="handleMenuClick(123, 'Nhà đất Lâm Đồng')"
                      >Nhà đất Lâm Đồng</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/548-nha-dat-gia-lai"
                      @click.prevent="handleMenuClick(124, 'Nhà đất Gia Lai')"
                      >Nhà đất Gia Lai</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/549-nha-dat-dak-lak"
                      @click.prevent="handleMenuClick(125, 'Nhà đất Đắk Lắk')"
                      >Nhà đất Đắk Lắk</a
                    >
                  </li>
                  <li>
                    <a
                      href="/du-an/550-nha-dat-dak-nong"
                      @click.prevent="handleMenuClick(126, 'Nhà đất Đắk Nông')"
                      >Nhà đất Đắk Nông</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Nhà đất bán -->
          <li class="has-sub">
            <a href="/du-an/465-nha-dat-ban" title="Nhà đất bán">
              <h2>Nhà đất bán</h2>
            </a>
          </li>

          <!-- Nhà đất cho thuê -->
          <li class="has-sub">
            <a href="/du-an/466-nha-dat-cho-thue" title="Nhà đất cho thuê">
              <h2>Nhà đất cho thuê</h2>
            </a>
          </li>

          <!-- Kiến thức -->
          <li class="has-sub">
            <a href="/du-an/467-kien-thuc" title="Kiến thức">
              <h2>Kiến thức</h2>
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
            <div class="col-md-2 col-sm-3">
              <div class="logo">
                <a href="/">
                  <img
                    class="img-responsive"
                    src="../assets/images/logo.png"
                    alt="Logo Sổ tay chung cư"
                    width="200"
                    height="50"
                    loading="lazy"
                /></a>
                <div class="clear"></div>
              </div>
              <div class="clear"></div>
            </div>
            <div class="col-md-10 col-sm-10">
              <div id="cssmenu">
                <ul class="maunen">
                  <li class="active">
                    <a href="/"
                      ><img
                        src="~/assets/icon/home.png"
                        alt="Icon trang chủ"
                        width="13"
                        height="13"
                      />&nbsp Trang chủ</a
                    >
                  </li>

                  <li class="has-sub">
                    <a
                      title="Sổ tay Dự án"
                      href="/du-an/431-so-tay-du-an"
                      @click.prevent="handleMenuClick(1, 'Sổ tay Dự án')"
                    >
                      <h2>Sổ tay Dự án</h2>
                    </a>
                    <ul>
                      <li class="has-sub">
                        <a
                          title="Dự án Hà Nội"
                          href="/du-an/127-du-an-ha-noi"
                          @click.prevent="handleMenuClick(2, 'Dự án Hà Nội')"
                          >Dự án Hà Nội
                        </a>
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Quận Ba Đình"
                              href="/du-an/429-quan-ba-dinh"
                              @click.prevent="
                                handleMenuClick(3, 'Quận Ba Đình')
                              "
                              >Quận Ba Đình</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hoàn Kiếm"
                              href="/du-an/430-quan-hoan-kiem"
                              @click.prevent="
                                handleMenuClick(4, 'Quận Hoàn Kiếm')
                              "
                              >Quận Hoàn Kiếm</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hai Bà Trưng"
                              href="/du-an/431-quan-hai-ba-trung"
                              @click.prevent="
                                handleMenuClick(5, 'Quận Hai Bà Trưng')
                              "
                              >Quận Hai Bà Trưng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Đống Đa"
                              href="/du-an/432-quan-dong-da"
                              @click.prevent="
                                handleMenuClick(6, 'Quận Đống Đa')
                              "
                              >Quận Đống Đa</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Tây Hồ"
                              href="/du-an/433-quan-tay-ho"
                              @click.prevent="handleMenuClick(7, 'Quận Tây Hồ')"
                              >Quận Tây Hồ</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Cầu Giấy"
                              href="/du-an/434-quan-cau-giay"
                              @click.prevent="
                                handleMenuClick(8, 'Quận Cầu Giấy')
                              "
                              >Quận Cầu Giấy</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Thanh Xuân"
                              href="/du-an/435-quan-thanh-xuan"
                              @click.prevent="
                                handleMenuClick(9, 'Quận Thanh Xuân')
                              "
                              >Quận Thanh Xuân</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hoàng Mai"
                              href="/du-an/436-quan-hoang-mai"
                              @click.prevent="
                                handleMenuClick(10, 'Quận Hoàng Mai')
                              "
                              >Quận Hoàng Mai</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Long Biên"
                              href="/du-an/437-quan-long-bien"
                              @click.prevent="
                                handleMenuClick(11, 'Quận Long Biên')
                              "
                              >Quận Long Biên</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Nam Từ Liêm"
                              href="/du-an/438-quan-nam-tu-liem"
                              @click.prevent="
                                handleMenuClick(12, 'Quận Nam Từ Liêm')
                              "
                              >Quận Nam Từ Liêm</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Bắc Từ Liêm"
                              href="/du-an/439-quan-bac-tu-liem"
                              @click.prevent="
                                handleMenuClick(13, 'Quận Bắc Từ Liêm')
                              "
                              >Quận Bắc Từ Liêm</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hà Đông"
                              href="/du-an/440-quan-ha-dong"
                              @click.prevent="
                                handleMenuClick(14, 'Quận Hà Đông')
                              "
                              >Quận Hà Đông</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Thanh Trì"
                              href="/du-an/441-huyen-thanh-tri"
                              @click.prevent="
                                handleMenuClick(15, 'Huyện Thanh Trì')
                              "
                              >Huyện Thanh Trì</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Gia Lâm"
                              href="/du-an/442-huyen-gia-lam"
                              @click.prevent="
                                handleMenuClick(16, 'Huyện Gia Lâm')
                              "
                              >Huyện Gia Lâm</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Đông Anh"
                              href="/du-an/443-huyen-dong-anh"
                              @click.prevent="
                                handleMenuClick(17, 'Huyện Đông Anh')
                              "
                              >Huyện Đông Anh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Sóc Sơn"
                              href="/du-an/444-huyen-soc-son"
                              @click.prevent="
                                handleMenuClick(18, 'Huyện Sóc Sơn')
                              "
                              >Huyện Sóc Sơn</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Thị xã Sơn Tây"
                              href="/du-an/445-thi-xa-son-tay"
                              @click.prevent="
                                handleMenuClick(19, 'Thị xã Sơn Tây')
                              "
                              >Thị xã Sơn Tây</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Ba Vì"
                              href="/du-an/446-huyen-ba-vi"
                              @click.prevent="
                                handleMenuClick(20, 'Huyện Ba Vì')
                              "
                              >Huyện Ba Vì</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Phúc Thọ"
                              href="/du-an/447-huyen-phuc-tho"
                              @click.prevent="
                                handleMenuClick(21, 'Huyện Phúc Thọ')
                              "
                              >Huyện Phúc Thọ</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Đan Phượng"
                              href="/du-an/448-huyen-dan-phuong"
                              @click.prevent="
                                handleMenuClick(22, 'Huyện Đan Phượng')
                              "
                              >Huyện Đan Phượng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Hoài Đức"
                              href="/du-an/449-huyen-hoai-duc"
                              @click.prevent="
                                handleMenuClick(23, 'Huyện Hoài Đức')
                              "
                              >Huyện Hoài Đức</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Quốc Oai"
                              href="/du-an/450-huyen-quoc-oai"
                              @click.prevent="
                                handleMenuClick(24, 'Huyện Quốc Oai')
                              "
                              >Huyện Quốc Oai</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Thạch Thất"
                              href="/du-an/451-huyen-thach-that"
                              @click.prevent="
                                handleMenuClick(25, 'Huyện Thạch Thất')
                              "
                              >Huyện Thạch Thất</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Chương Mỹ"
                              href="/du-an/452-huyen-chuong-my"
                              @click.prevent="
                                handleMenuClick(26, 'Huyện Chương Mỹ')
                              "
                              >Huyện Chương Mỹ</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Thanh Oai"
                              href="/du-an/453-huyen-thanh-oai"
                              @click.prevent="
                                handleMenuClick(27, 'Huyện Thanh Oai')
                              "
                              >Huyện Thanh Oai</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Thường Tín"
                              href="/du-an/454-huyen-thuong-tin"
                              @click.prevent="
                                handleMenuClick(28, 'Huyện Thường Tín')
                              "
                              >Huyện Thường Tín</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Phú Xuyên"
                              href="/du-an/455-huyen-phu-xuyen"
                              @click.prevent="
                                handleMenuClick(29, 'Huyện Phú Xuyên')
                              "
                              >Huyện Phú Xuyên</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Ứng Hòa"
                              href="/du-an/456-huyen-ung-hoa"
                              @click.prevent="
                                handleMenuClick(30, 'Huyện Ứng Hòa')
                              "
                              >Huyện Ứng Hòa</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Mỹ Đức"
                              href="/du-an/457-huyen-my-duc"
                              @click.prevent="
                                handleMenuClick(31, 'Huyện Mỹ Đức')
                              "
                              >Huyện Mỹ Đức</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Mê Linh"
                              href="/du-an/458-huyen-me-linh"
                              @click.prevent="
                                handleMenuClick(32, 'Huyện Mê Linh')
                              "
                              >Huyện Mê Linh</a
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="has-sub">
                        <a
                          title="Dự án Sài Gòn"
                          href="/du-an/128-du-an-sai-gon"
                          @click.prevent="handleMenuClick(32, 'Dự án Sài Gòn')"
                          >Dự án Sài Gòn</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Quận 1"
                              href="/du-an/109-quan-1-1"
                              @click.prevent="handleMenuClick(33, 'Quận 1')"
                              >Quận 1</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 2"
                              href="/du-an/110-quan-2"
                              @click.prevent="handleMenuClick(34, 'Quận 2')"
                              >Quận 2</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 3"
                              href="/du-an/111-quan-3"
                              @click.prevent="handleMenuClick(35, 'Quận 3')"
                              >Quận 3</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 4"
                              href="/du-an/112-quan-4"
                              @click.prevent="handleMenuClick(36, 'Quận 4')"
                              >Quận 4</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 5"
                              href="/du-an/113-quan-5"
                              @click.prevent="handleMenuClick(37, 'Quận 5')"
                              >Quận 5</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 6"
                              href="/du-an/114-quan-6"
                              @click.prevent="handleMenuClick(38, 'Quận 6')"
                              >Quận 6</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 7"
                              href="/du-an/115-quan-7"
                              @click.prevent="handleMenuClick(39, 'Quận 7')"
                              >Quận 7</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 8"
                              href="/du-an/116-quan-8"
                              @click.prevent="handleMenuClick(40, 'Quận 8')"
                              >Quận 8</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 9"
                              href="/du-an/117-quan-9"
                              @click.prevent="handleMenuClick(41, 'Quận 9')"
                              >Quận 9</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 10"
                              href="/du-an/118-quan-10"
                              @click.prevent="handleMenuClick(42, 'Quận 10')"
                              >Quận 10</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 11"
                              href="/du-an/119-quan-11"
                              @click.prevent="handleMenuClick(43, 'Quận 11')"
                              >Quận 11</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận 12"
                              href="/du-an/120-quan-12"
                              @click.prevent="handleMenuClick(44, 'Quận 12')"
                              >Quận 12</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Bình Tân"
                              href="/du-an/121-quan-binh-tan"
                              @click.prevent="
                                handleMenuClick(45, 'Quận Bình Tân')
                              "
                              >Quận Bình Tân</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Bình Thạnh"
                              href="/du-an/122-quan-binh-thanh"
                              @click.prevent="
                                handleMenuClick(46, 'Quận Bình Thạnh')
                              "
                              >Quận Bình Thạnh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Gò Vấp"
                              href="/du-an/469-quan-go-vap"
                              @click.prevent="
                                handleMenuClick(47, 'Quận Gò Vấp')
                              "
                              >Quận Gò Vấp</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Phú Nhuận"
                              href="/du-an/470-quan-phu-nhuan"
                              @click.prevent="
                                handleMenuClick(48, 'Quận Phú Nhuận')
                              "
                              >Quận Phú Nhuận</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Tân Bình"
                              href="/du-an/471-quan-tan-binh"
                              @click.prevent="
                                handleMenuClick(49, 'Quận Tân Bình')
                              "
                              >Quận Tân Bình</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Tân Phú"
                              href="/du-an/472-quan-tan-phu"
                              @click.prevent="
                                handleMenuClick(50, 'Quận Tân Phú')
                              "
                              >Quận Tân Phú</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="TP Thủ Đức"
                              href="/du-an/473-tp-thu-duc"
                              @click.prevent="handleMenuClick(51, 'TP Thủ Đức')"
                              >TP Thủ Đức</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Bình Chánh"
                              href="/du-an/474-huyen-binh-chanh"
                              @click.prevent="
                                handleMenuClick(52, 'Huyện Bình Chánh')
                              "
                              >Huyện Bình Chánh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Cần Giờ"
                              href="/du-an/475-huyen-can-gio"
                              @click.prevent="
                                handleMenuClick(53, 'Huyện Cần Giờ')
                              "
                              >Huyện Cần Giờ</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Củ Chi"
                              href="/du-an/476-huyen-cu-chi"
                              @click.prevent="
                                handleMenuClick(54, 'Huyện Củ Chi')
                              "
                              >Huyện Củ Chi</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Hóc Môn"
                              href="/du-an/477-huyen-hoc-mon"
                              @click.prevent="
                                handleMenuClick(55, 'Huyện Hóc Môn')
                              "
                              >Huyện Hóc Môn</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Nhà Bè"
                              href="/du-an/478-huyen-nha-be"
                              @click.prevent="
                                handleMenuClick(56, 'Huyện Nhà Bè')
                              "
                              >Huyện Nhà Bè</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="has-sub">
                    <a
                      title="Sổ tay Nhà đất"
                      href="/du-an/464-so-tay-nha-dat"
                      @click.prevent="handleMenuClick(57, 'Sổ tay Nhà đất')"
                    >
                      <h2>Sổ tay Nhà đất</h2>
                    </a>
                    <ul>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Đông Bắc"
                          href="/du-an/482-nha-dat-dong-bac"
                          @click.prevent="
                            handleMenuClick(58, 'Nhà đất Đông Bắc')
                          "
                          >Nhà đất Đông Bắc</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hải Phòng"
                              href="/du-an/489-nha-dat-hai-phong"
                              @click.prevent="
                                handleMenuClick(59, 'Nhà đất Hải Phòng')
                              "
                              >Nhà đất Hải Phòng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Ninh"
                              href="/du-an/490-nha-dat-quang-ninh"
                              @click.prevent="
                                handleMenuClick(60, 'Nhà đất Quảng Ninh')
                              "
                              >Nhà đất Quảng Ninh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bắc Ninh"
                              href="/du-an/491-nha-dat-bac-ninh"
                              @click.prevent="
                                handleMenuClick(61, 'Nhà đất Bắc Ninh')
                              "
                              >Nhà đất Bắc Ninh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bắc Giang"
                              href="/du-an/492-nha-dat-bac-giang"
                              @click.prevent="
                                handleMenuClick(62, 'Nhà đất Bắc Giang')
                              "
                              >Nhà đất Bắc Giang</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hưng Yên"
                              href="/du-an/493-nha-dat-hung-yen"
                              @click.prevent="
                                handleMenuClick(63, 'Nhà đất Hưng Yên')
                              "
                              >Nhà đất Hưng Yên</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hải Dương"
                              href="/du-an/494-nha-dat-hai-duong"
                              @click.prevent="
                                handleMenuClick(64, 'Nhà đất Hải Dương')
                              "
                              >Nhà đất Hải Dương</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thái Nguyên"
                              href="/du-an/495-nha-dat-thai-nguyen"
                              @click.prevent="
                                handleMenuClick(65, 'Nhà đất Thái Nguyên')
                              "
                              >Nhà đất Thái Nguyên</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Vĩnh Phúc"
                              href="/du-an/496-nha-dat-vinh-phuc"
                              @click.prevent="
                                handleMenuClick(66, 'Nhà đất Vĩnh Phúc')
                              "
                              >Nhà đất Vĩnh Phúc</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hà Nam"
                              href="/du-an/497-nha-dat-ha-nam"
                              @click.prevent="
                                handleMenuClick(67, 'Nhà đất Hà Nam')
                              "
                              >Nhà đất Hà Nam</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Phú Thọ"
                              href="/du-an/498-nha-dat-phu-tho"
                              @click.prevent="
                                handleMenuClick(68, 'Nhà đất Phú Thọ')
                              "
                              >Nhà đất Phú Thọ</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thái Bình"
                              href="/du-an/499-nha-dat-thai-binh"
                              @click.prevent="
                                handleMenuClick(69, 'Nhà đất Thái Bình')
                              "
                              >Nhà đất Thái Bình</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Nam Định"
                              href="/du-an/500-nha-dat-nam-dinh"
                              @click.prevent="
                                handleMenuClick(70, 'Nhà đất Nam Định')
                              "
                              >Nhà đất Nam Định</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Ninh Bình"
                              href="/du-an/501-nha-dat-ninh-binh"
                              @click.prevent="
                                handleMenuClick(71, 'Nhà đất Ninh Bình')
                              "
                              >Nhà đất Ninh Bình</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lạng Sơn"
                              href="/du-an/502-nha-dat-lang-son"
                              @click.prevent="
                                handleMenuClick(72, 'Nhà đất Lạng Sơn')
                              "
                              >Nhà đất Lạng Sơn</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Cao Bằng"
                              href="/du-an/503-nha-dat-cao-bang"
                              @click.prevent="
                                handleMenuClick(73, 'Nhà đất Cao Bằng')
                              "
                              >Nhà đất Cao Bằng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Tuyên Quang"
                              href="/du-an/504-nha-dat-tuyen-quang"
                              @click.prevent="
                                handleMenuClick(74, 'Nhà đất Tuyên Quang')
                              "
                              >Nhà đất Tuyên Quang</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hà Giang"
                              href="/du-an/505-nha-dat-ha-giang"
                              @click.prevent="
                                handleMenuClick(75, 'Nhà đất Hà Giang')
                              "
                              >Nhà đất Hà Giang</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bắc Kạn"
                              href="/du-an/506-nha-dat-bac-kan"
                              @click.prevent="
                                handleMenuClick(76, 'Nhà đất Bắc Kạn')
                              "
                              >Nhà đất Bắc Kạn</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Tây Bắc"
                          href="/du-an/483-nha-dat-tay-bac"
                          @click.prevent="
                            handleMenuClick(77, 'Nhà đất Tây Bắc')
                          "
                          >Nhà đất Tây Bắc</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lai Châu"
                              href="/du-an/512-nha-dat-lai-chau"
                              @click.prevent="
                                handleMenuClick(78, 'Nhà đất Lai Châu')
                              "
                              >Nhà đất Lai Châu</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hòa Bình"
                              href="/du-an/507-nha-dat-hoa-binh"
                              @click.prevent="
                                handleMenuClick(79, 'Nhà đất Hòa Bình')
                              "
                              >Nhà đất Hòa Bình</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lào Cai"
                              href="/du-an/508-nha-dat-lao-cai"
                              @click.prevent="
                                handleMenuClick(80, 'Nhà đất Lào Cai')
                              "
                              >Nhà đất Lào Cai</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Yên Bái"
                              href="/du-an/509-nha-dat-yen-bai"
                              @click.prevent="
                                handleMenuClick(81, 'Nhà đất Yên Bái')
                              "
                              >Nhà đất Yên Bái</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Sơn La"
                              href="/du-an/510-nha-dat-son-la"
                              @click.prevent="
                                handleMenuClick(82, 'Nhà đất Sơn La')
                              "
                              >Nhà đất Sơn La</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Điện Biên"
                              href="/du-an/511-nha-dat-dien-bien"
                              @click.prevent="
                                handleMenuClick(83, 'Nhà đất Điện Biên')
                              "
                              >Nhà đất Điện Biên</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Bắc Trung Bộ"
                          href="/du-an/484-nha-dat-bac-trung-bo"
                          @click.prevent="
                            handleMenuClick(84, 'Nhà đất Bắc Trung Bộ')
                          "
                          >Nhà đất Bắc Trung Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Nghệ An"
                              href="/du-an/513-nha-dat-nghe-an"
                              @click.prevent="
                                handleMenuClick(85, 'Nhà đất Nghệ An')
                              "
                              >Nhà đất Nghệ An</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thanh Hóa"
                              href="/du-an/514-nha-dat-thanh-hoa"
                              @click.prevent="
                                handleMenuClick(86, 'Nhà đất Thanh Hóa')
                              "
                              >Nhà đất Thanh Hóa</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hà Tĩnh"
                              href="/du-an/515-nha-dat-ha-tinh"
                              @click.prevent="
                                handleMenuClick(87, 'Nhà đất Hà Tĩnh')
                              "
                              >Nhà đất Hà Tĩnh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Bình"
                              href="/du-an/516-nha-dat-quang-binh"
                              @click.prevent="
                                handleMenuClick(88, 'Nhà đất Quảng Bình')
                              "
                              >Nhà đất Quảng Bình</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Trị"
                              href="/du-an/517-nha-dat-quang-tri"
                              @click.prevent="
                                handleMenuClick(89, 'Nhà đất Quảng Trị')
                              "
                              >Nhà đất Quảng Trị</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thừa Thiên - Huê"
                              href="/du-an/518-nha-dat-thua-thien-hue"
                              @click.prevent="
                                handleMenuClick(90, 'Nhà đất Thừa Thiên - Huế')
                              "
                              >Nhà đất Thừa Thiên - Huế</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Nam Trung Bộ"
                          href="/du-an/485-nha-dat-nam-trung-bo"
                          @click.prevent="
                            handleMenuClick(91, 'Nhà đất Nam Trung Bộ')
                          "
                          >Nhà đất Nam Trung Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đà Nẵng"
                              href="/du-an/519-nha-dat-da-nang"
                              @click.prevent="
                                handleMenuClick(92, 'Nhà đất Đà Nẵng')
                              "
                              >Nhà đất Đà Nẵng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Nam"
                              href="/du-an/520-nha-dat-quang-nam"
                              @click.prevent="
                                handleMenuClick(93, 'Nhà đất Quảng Nam')
                              "
                              >Nhà đất Quảng Nam</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Ngãi"
                              href="/du-an/521-nha-dat-quang-ngai"
                              @click.prevent="
                                handleMenuClick(94, 'Nhà đất Quảng Ngãi')
                              "
                              >Nhà đất Quảng Ngãi</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Định"
                              href="/du-an/522-nha-dat-binh-dinh"
                              @click.prevent="
                                handleMenuClick(95, 'Nhà đất Bình Định')
                              "
                              >Nhà đất Bình Định</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Phú Yên"
                              href="/du-an/523-nha-dat-phu-yen"
                              @click.prevent="
                                handleMenuClick(96, 'Nhà đất Phú Yên')
                              "
                              >Nhà đất Phú Yên</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Khánh Hòa"
                              href="/du-an/524-nha-dat-khanh-hoa"
                              @click.prevent="
                                handleMenuClick(97, 'Nhà đất Khánh Hòa')
                              "
                              >Nhà đất Khánh Hòa</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Ninh Thuận"
                              href="/du-an/525-nha-dat-ninh-thuan"
                              @click.prevent="
                                handleMenuClick(98, 'Nhà đất Ninh Thuận')
                              "
                              >Nhà đất Ninh Thuận</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Thuận"
                              href="/du-an/526-nha-dat-binh-thuan"
                              @click.prevent="
                                handleMenuClick(99, 'Nhà đất Bình Thuận')
                              "
                              >Nhà đất Bình Thuận</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Đông Nam Bộ"
                          href="/du-an/486-nha-dat-dong-nam-bo"
                          @click.prevent="
                            handleMenuClick(100, 'Nhà đất Đông Nam Bộ')
                          "
                          >Nhà đất Đông Nam Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Dương"
                              href="/du-an/527-nha-dat-binh-duong"
                              @click.prevent="
                                handleMenuClick(101, 'Nhà đất Bình Dương')
                              "
                              >Nhà đất Bình Dương</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Vũng Tàu"
                              href="/du-an/528-nha-dat-vung-tau"
                              @click.prevent="
                                handleMenuClick(102, 'Nhà đất Vũng Tàu')
                              "
                              >Nhà đất Vũng Tàu</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đồng Nai"
                              href="/du-an/529-nha-dat-dong-nai"
                              @click.prevent="
                                handleMenuClick(103, 'Nhà đất Đồng Nai')
                              "
                              >Nhà đất Đồng Nai</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bà Rịa"
                              href="/du-an/530-nha-dat-ba-ria"
                              @click.prevent="
                                handleMenuClick(104, 'Nhà đất Bà Rịa')
                              "
                              >Nhà đất Bà Rịa</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Tây Ninh"
                              href="/du-an/531-nha-dat-tay-ninh"
                              @click.prevent="
                                handleMenuClick(105, 'Nhà đất Tây Ninh')
                              "
                              >Nhà đất Tây Ninh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Phước"
                              href="/du-an/532-nha-dat-binh-phuoc"
                              @click.prevent="
                                handleMenuClick(106, 'Nhà đất Bình Phước')
                              "
                              >Nhà đất Bình Phước</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Tây Nam Bộ"
                          href="/du-an/487-nha-dat-tay-nam-bo"
                          @click.prevent="
                            handleMenuClick(107, 'Nhà đất Tây Nam Bộ')
                          "
                          >Nhà đất Tây Nam Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Cần Thơ"
                              href="/du-an/533-nha-dat-can-tho"
                              @click.prevent="
                                handleMenuClick(108, 'Nhà đất Cần Thơ')
                              "
                              >Nhà đất Cần Thơ</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Tiền Giang"
                              href="/du-an/534-nha-dat-tien-giang"
                              @click.prevent="
                                handleMenuClick(109, 'Nhà đất Tiền Giang')
                              "
                              >Nhà đất Tiền Giang</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hậu Giang"
                              href="/du-an/535-nha-dat-hau-giang"
                              @click.prevent="
                                handleMenuClick(110, 'Nhà đất Hậu Giang')
                              "
                              >Nhà đất Hậu Giang</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Long An"
                              href="/du-an/536-nha-dat-long-an"
                              @click.prevent="
                                handleMenuClick(111, 'Nhà đất Long An')
                              "
                              >Nhà đất Long An</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Trà Vinh"
                              href="/du-an/537-nha-dat-tra-vinh"
                              @click.prevent="
                                handleMenuClick(112, 'Nhà đất Trà Vinh')
                              "
                              >Nhà đất Trà Vinh</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Sóc Trăng"
                              href="/du-an/538-nha-dat-soc-trang"
                              @click.prevent="
                                handleMenuClick(113, 'Nhà đất Sóc Trăng')
                              "
                              >Nhà đất Sóc Trăng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đồng Tháp"
                              href="/du-an/539-nha-dat-dong-thap"
                              @click.prevent="
                                handleMenuClick(114, 'Nhà đất Đồng Tháp')
                              "
                              >Nhà đất Đồng Tháp</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Vĩnh Long"
                              href="/du-an/540-nha-dat-vinh-long"
                              @click.prevent="
                                handleMenuClick(115, 'Nhà đất Vĩnh Long')
                              "
                              >Nhà đất Vĩnh Long</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bạc Liêu"
                              href="/du-an/541-nha-dat-bac-lieu"
                              @click.prevent="
                                handleMenuClick(116, 'Nhà đất Bạc Liêu')
                              "
                              >Nhà đất Bạc Liêu</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bến Tre"
                              href="/du-an/542-nha-dat-ben-tre"
                              @click.prevent="
                                handleMenuClick(117, 'Nhà đất Bến Tre')
                              "
                              >Nhà đất Bến Tre</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Cà Mau"
                              href="/du-an/543-nha-dat-ca-mau"
                              @click.prevent="
                                handleMenuClick(118, 'Nhà đất Cà Mau')
                              "
                              >Nhà đất Cà Mau</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất An Giang"
                              href="/du-an/544-nha-dat-an-giang"
                              @click.prevent="
                                handleMenuClick(119, 'Nhà đất An Giang')
                              "
                              >Nhà đất An Giang</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Kiên Giang"
                              href="/du-an/545-nha-dat-kien-giang"
                              @click.prevent="
                                handleMenuClick(120, 'Nhà đất Kiên Giang')
                              "
                              >Nhà đất Kiên Giang</a
                            >
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Tây Nguyên"
                          href="/du-an/488-nha-dat-tay-nguyen"
                          @click.prevent="
                            handleMenuClick(121, 'Nhà đất Tây Nguyên')
                          "
                          >Nhà đất Tây Nguyên</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Kon Tum"
                              href="/du-an/546-nha-dat-kon-tum"
                              @click.prevent="
                                handleMenuClick(122, 'Nhà đất Kon Tum')
                              "
                              >Nhà đất Kon Tum</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lâm Đồng"
                              href="/du-an/547-nha-dat-lam-dong"
                              @click.prevent="
                                handleMenuClick(123, 'Nhà đất Lâm Đồng')
                              "
                              >Nhà đất Lâm Đồng</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Gia Lai"
                              href="/du-an/548-nha-dat-gia-lai"
                              @click.prevent="
                                handleMenuClick(124, 'Nhà đất Gia Lai')
                              "
                              >Nhà đất Gia Lai</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đắk Lắk"
                              href="/du-an/549-nha-dat-dak-lak"
                              @click.prevent="
                                handleMenuClick(125, 'Nhà đất Đắk Lắk')
                              "
                              >Nhà đất Đắk Lắk</a
                            >
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đắk Nông"
                              href="/du-an/550-nha-dat-dak-nong"
                              @click.prevent="
                                handleMenuClick(126, 'Nhà đất Đắk Nông')
                              "
                              >Nhà đất Đắk Nông</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="has-sub">
                    <a title="Nhà đất bán" href="/du-an/465-nha-dat-ban">
                      <h2>Nhà đất bán</h2>
                    </a>
                    <ul></ul>
                  </li>

                  <li class="has-sub">
                    <a
                      title="Nhà đất cho thuê"
                      href="/du-an/466-nha-dat-cho-thue"
                    >
                      <h2>Nhà đất cho thuê</h2>
                    </a>
                    <ul></ul>
                  </li>

                  <li class="has-sub">
                    <a title="Kiến thức" href="/du-an/467-kien-thuc">
                      <h2>Kiến thức</h2>
                    </a>
                    <ul></ul>
                  </li>
                  <li class="active">
                    <a href="/contact">Liên hệ</a>
                  </li>
                </ul>

                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="clear"></div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useProjectStore } from "~/store/useProject";
import { useRouter } from "vue-router";

const router = useRouter();
const headerNav = ref<HTMLElement | null>(null);
const isSticky = ref(false);
const isMobileMenuOpen = ref(false);

const handleMenuClick = (index: number, text: string = "") => {
  router.push(`/du-an/${index}`);
  useProjectStore().setMenuPage(text);
};

const checkSticky = () => {
  if (!headerNav.value) return;

  const sticky = headerNav.value.offsetTop;
  isSticky.value = window.pageYOffset > sticky;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  // Prevent body scrolling when menu is open
  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

const toggleSubmenu = (event: Event) => {
  event.stopPropagation();
  const arrow = event.target as HTMLElement;
  const menuItem = arrow.closest(".menu-item");
  const submenu = menuItem?.nextElementSibling as HTMLElement;

  if (submenu) {
    // Đóng tất cả các submenu cùng cấp
    const parent = submenu.parentElement?.parentElement;
    if (parent) {
      const allSubmenus = parent.querySelectorAll(".submenu");
      allSubmenus.forEach((sub: HTMLElement) => {
        if (sub !== submenu) {
          sub.classList.remove("active");
          sub.previousElementSibling
            ?.querySelector(".arrow")
            ?.classList.remove("active");
        }
      });
    }

    // Toggle submenu hiện tại
    submenu.classList.toggle("active");
    arrow.classList.toggle("active");
  }
};

onMounted(() => {
  window.addEventListener("scroll", checkSticky);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkSticky);
});
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
