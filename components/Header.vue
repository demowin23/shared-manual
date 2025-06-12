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
              <a href="/du-an/431-so-tay-du-an" @click.stop>
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
                  <a href="/du-an/127-du-an-ha-noi" @click.stop>Dự án Hà Nội</a>
                  <span
                    class="arrow"
                    @click="toggleSubmenu($event)"
                    aria-expanded="false"
                    aria-label="Mở rộng menu con"
                  ></span>
                </div>
                <ul class="submenu">
                  <li><a href="/du-an/429-quan-ba-dinh">Quận Ba Đình</a></li>
                  <li>
                    <a href="/du-an/430-quan-hoan-kiem">Quận Hoàn Kiếm</a>
                  </li>
                  <li>
                    <a href="/du-an/431-quan-hai-ba-trung">Quận Hai Bà Trưng</a>
                  </li>
                  <li><a href="/du-an/432-quan-dong-da">Quận Đống Đa</a></li>
                  <li><a href="/du-an/433-quan-tay-ho">Quận Tây Hồ</a></li>
                  <li><a href="/du-an/434-quan-cau-giay">Quận Cầu Giấy</a></li>
                  <li>
                    <a href="/du-an/435-quan-thanh-xuan">Quận Thanh Xuân</a>
                  </li>
                  <li>
                    <a href="/du-an/436-quan-hoang-mai">Quận Hoàng Mai</a>
                  </li>
                  <li>
                    <a href="/du-an/437-quan-long-bien">Quận Long Biên</a>
                  </li>
                  <li>
                    <a href="/du-an/438-quan-nam-tu-liem">Quận Nam Từ Liêm</a>
                  </li>
                  <li>
                    <a href="/du-an/439-quan-bac-tu-liem">Quận Bắc Từ Liêm</a>
                  </li>
                  <li><a href="/du-an/440-quan-ha-dong">Quận Hà Đông</a></li>
                  <li>
                    <a href="/du-an/441-huyen-thanh-tri">Huyện Thanh Trì</a>
                  </li>
                  <li><a href="/du-an/442-huyen-gia-lam">Huyện Gia Lâm</a></li>
                  <li>
                    <a href="/du-an/443-huyen-dong-anh">Huyện Đông Anh</a>
                  </li>
                  <li><a href="/du-an/444-huyen-soc-son">Huyện Sóc Sơn</a></li>
                  <li>
                    <a href="/du-an/445-thi-xa-son-tay">Thị xã Sơn Tây</a>
                  </li>
                  <li><a href="/du-an/446-huyen-ba-vi">Huyện Ba Vì</a></li>
                  <li>
                    <a href="/du-an/447-huyen-phuc-tho">Huyện Phúc Thọ</a>
                  </li>
                  <li>
                    <a href="/du-an/448-huyen-dan-phuong">Huyện Đan Phượng</a>
                  </li>
                  <li>
                    <a href="/du-an/449-huyen-hoai-duc">Huyện Hoài Đức</a>
                  </li>
                  <li>
                    <a href="/du-an/450-huyen-quoc-oai">Huyện Quốc Oai</a>
                  </li>
                  <li>
                    <a href="/du-an/451-huyen-thach-that">Huyện Thạch Thất</a>
                  </li>
                  <li>
                    <a href="/du-an/452-huyen-chuong-my">Huyện Chương Mỹ</a>
                  </li>
                  <li>
                    <a href="/du-an/453-huyen-thanh-oai">Huyện Thanh Oai</a>
                  </li>
                  <li>
                    <a href="/du-an/454-huyen-thuong-tin">Huyện Thường Tín</a>
                  </li>
                  <li>
                    <a href="/du-an/455-huyen-phu-xuyen">Huyện Phú Xuyên</a>
                  </li>
                  <li><a href="/du-an/456-huyen-ung-hoa">Huyện Ứng Hòa</a></li>
                  <li><a href="/du-an/457-huyen-my-duc">Huyện Mỹ Đức</a></li>
                  <li><a href="/du-an/458-huyen-me-linh">Huyện Mê Linh</a></li>
                </ul>
              </li>

              <!-- Dự án Sài Gòn -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/128-du-an-sai-gon" @click.stop
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
                  <li><a href="/du-an/109-quan-1-1">Quận 1</a></li>
                  <li><a href="/du-an/110-quan-2">Quận 2</a></li>
                  <li><a href="/du-an/111-quan-3">Quận 3</a></li>
                  <li><a href="/du-an/112-quan-4">Quận 4</a></li>
                  <li><a href="/du-an/113-quan-5">Quận 5</a></li>
                  <li><a href="/du-an/114-quan-6">Quận 6</a></li>
                  <li><a href="/du-an/115-quan-7">Quận 7</a></li>
                  <li><a href="/du-an/116-quan-8">Quận 8</a></li>
                  <li><a href="/du-an/117-quan-9">Quận 9</a></li>
                  <li><a href="/du-an/118-quan-10">Quận 10</a></li>
                  <li><a href="/du-an/119-quan-11">Quận 11</a></li>
                  <li><a href="/du-an/120-quan-12">Quận 12</a></li>
                  <li><a href="/du-an/121-quan-binh-tan">Quận Bình Tân</a></li>
                  <li>
                    <a href="/du-an/122-quan-binh-thanh">Quận Bình Thạnh</a>
                  </li>
                  <li><a href="/du-an/469-quan-go-vap">Quận Gò Vấp</a></li>
                  <li>
                    <a href="/du-an/470-quan-phu-nhuan">Quận Phú Nhuận</a>
                  </li>
                  <li><a href="/du-an/471-quan-tan-binh">Quận Tân Bình</a></li>
                  <li><a href="/du-an/472-quan-tan-phu">Quận Tân Phú</a></li>
                  <li><a href="/du-an/473-tp-thu-duc">TP Thủ Đức</a></li>
                  <li>
                    <a href="/du-an/474-huyen-binh-chanh">Huyện Bình Chánh</a>
                  </li>
                  <li><a href="/du-an/475-huyen-can-gio">Huyện Cần Giờ</a></li>
                  <li><a href="/du-an/476-huyen-cu-chi">Huyện Củ Chi</a></li>
                  <li><a href="/du-an/477-huyen-hoc-mon">Huyện Hóc Môn</a></li>
                  <li><a href="/du-an/478-huyen-nha-be">Huyện Nhà Bè</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Sổ tay Nhà đất -->
          <li class="has-submenu">
            <div class="menu-item">
              <a href="/du-an/464-so-tay-nha-dat" @click.stop>
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
                  <a href="/du-an/482-nha-dat-dong-bac" @click.stop
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
                    <a href="/du-an/489-nha-dat-hai-phong">Nhà đất Hải Phòng</a>
                  </li>
                  <li>
                    <a href="/du-an/490-nha-dat-quang-ninh"
                      >Nhà đất Quảng Ninh</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/491-nha-dat-bac-ninh">Nhà đất Bắc Ninh</a>
                  </li>
                  <li>
                    <a href="/du-an/492-nha-dat-bac-giang">Nhà đất Bắc Giang</a>
                  </li>
                  <li>
                    <a href="/du-an/493-nha-dat-hung-yen">Nhà đất Hưng Yên</a>
                  </li>
                  <li>
                    <a href="/du-an/494-nha-dat-hai-duong">Nhà đất Hải Dương</a>
                  </li>
                  <li>
                    <a href="/du-an/495-nha-dat-thai-nguyen"
                      >Nhà đất Thái Nguyên</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/496-nha-dat-vinh-phuc">Nhà đất Vĩnh Phúc</a>
                  </li>
                  <li>
                    <a href="/du-an/497-nha-dat-ha-nam">Nhà đất Hà Nam</a>
                  </li>
                  <li>
                    <a href="/du-an/498-nha-dat-phu-tho">Nhà đất Phú Thọ</a>
                  </li>
                  <li>
                    <a href="/du-an/499-nha-dat-thai-binh">Nhà đất Thái Bình</a>
                  </li>
                  <li>
                    <a href="/du-an/500-nha-dat-nam-dinh">Nhà đất Nam Định</a>
                  </li>
                  <li>
                    <a href="/du-an/501-nha-dat-ninh-binh">Nhà đất Ninh Bình</a>
                  </li>
                  <li>
                    <a href="/du-an/502-nha-dat-lang-son">Nhà đất Lạng Sơn</a>
                  </li>
                  <li>
                    <a href="/du-an/503-nha-dat-cao-bang">Nhà đất Cao Bằng</a>
                  </li>
                  <li>
                    <a href="/du-an/504-nha-dat-tuyen-quang"
                      >Nhà đất Tuyên Quang</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/505-nha-dat-ha-giang">Nhà đất Hà Giang</a>
                  </li>
                  <li>
                    <a href="/du-an/506-nha-dat-bac-kan">Nhà đất Bắc Kạn</a>
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Tây Bắc -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/483-nha-dat-tay-bac" @click.stop
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
                    <a href="/du-an/512-nha-dat-lai-chau">Nhà đất Lai Châu</a>
                  </li>
                  <li>
                    <a href="/du-an/507-nha-dat-hoa-binh">Nhà đất Hòa Bình</a>
                  </li>
                  <li>
                    <a href="/du-an/508-nha-dat-lao-cai">Nhà đất Lào Cai</a>
                  </li>
                  <li>
                    <a href="/du-an/509-nha-dat-yen-bai">Nhà đất Yên Bái</a>
                  </li>
                  <li>
                    <a href="/du-an/510-nha-dat-son-la">Nhà đất Sơn La</a>
                  </li>
                  <li>
                    <a href="/du-an/511-nha-dat-dien-bien">Nhà đất Điện Biên</a>
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Bắc Trung Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/484-nha-dat-bac-trung-bo" @click.stop
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
                    <a href="/du-an/513-nha-dat-nghe-an">Nhà đất Nghệ An</a>
                  </li>
                  <li>
                    <a href="/du-an/514-nha-dat-thanh-hoa">Nhà đất Thanh Hóa</a>
                  </li>
                  <li>
                    <a href="/du-an/515-nha-dat-ha-tinh">Nhà đất Hà Tĩnh</a>
                  </li>
                  <li>
                    <a href="/du-an/516-nha-dat-quang-binh"
                      >Nhà đất Quảng Bình</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/517-nha-dat-quang-tri">Nhà đất Quảng Trị</a>
                  </li>
                  <li>
                    <a href="/du-an/518-nha-dat-thua-thien-hue"
                      >Nhà đất Thừa Thiên - Huế</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Nam Trung Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/485-nha-dat-nam-trung-bo" @click.stop
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
                    <a href="/du-an/519-nha-dat-da-nang">Nhà đất Đà Nẵng</a>
                  </li>
                  <li>
                    <a href="/du-an/520-nha-dat-quang-nam">Nhà đất Quảng Nam</a>
                  </li>
                  <li>
                    <a href="/du-an/521-nha-dat-quang-ngai"
                      >Nhà đất Quảng Ngãi</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/522-nha-dat-binh-dinh">Nhà đất Bình Định</a>
                  </li>
                  <li>
                    <a href="/du-an/523-nha-dat-phu-yen">Nhà đất Phú Yên</a>
                  </li>
                  <li>
                    <a href="/du-an/524-nha-dat-khanh-hoa">Nhà đất Khánh Hòa</a>
                  </li>
                  <li>
                    <a href="/du-an/525-nha-dat-ninh-thuan"
                      >Nhà đất Ninh Thuận</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/526-nha-dat-binh-thuan"
                      >Nhà đất Bình Thuận</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Đông Nam Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/486-nha-dat-dong-nam-bo" @click.stop
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
                    <a href="/du-an/527-nha-dat-binh-duong"
                      >Nhà đất Bình Dương</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/528-nha-dat-vung-tau">Nhà đất Vũng Tàu</a>
                  </li>
                  <li>
                    <a href="/du-an/529-nha-dat-dong-nai">Nhà đất Đồng Nai</a>
                  </li>
                  <li>
                    <a href="/du-an/530-nha-dat-ba-ria">Nhà đất Bà Rịa</a>
                  </li>
                  <li>
                    <a href="/du-an/531-nha-dat-tay-ninh">Nhà đất Tây Ninh</a>
                  </li>
                  <li>
                    <a href="/du-an/532-nha-dat-binh-phuoc"
                      >Nhà đất Bình Phước</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Tây Nam Bộ -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/487-nha-dat-tay-nam-bo" @click.stop
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
                    <a href="/du-an/533-nha-dat-can-tho">Nhà đất Cần Thơ</a>
                  </li>
                  <li>
                    <a href="/du-an/534-nha-dat-tien-giang"
                      >Nhà đất Tiền Giang</a
                    >
                  </li>
                  <li>
                    <a href="/du-an/535-nha-dat-hau-giang">Nhà đất Hậu Giang</a>
                  </li>
                  <li>
                    <a href="/du-an/536-nha-dat-long-an">Nhà đất Long An</a>
                  </li>
                  <li>
                    <a href="/du-an/537-nha-dat-tra-vinh">Nhà đất Trà Vinh</a>
                  </li>
                  <li>
                    <a href="/du-an/538-nha-dat-soc-trang">Nhà đất Sóc Trăng</a>
                  </li>
                  <li>
                    <a href="/du-an/539-nha-dat-dong-thap">Nhà đất Đồng Tháp</a>
                  </li>
                  <li>
                    <a href="/du-an/540-nha-dat-vinh-long">Nhà đất Vĩnh Long</a>
                  </li>
                  <li>
                    <a href="/du-an/541-nha-dat-bac-lieu">Nhà đất Bạc Liêu</a>
                  </li>
                  <li>
                    <a href="/du-an/542-nha-dat-ben-tre">Nhà đất Bến Tre</a>
                  </li>
                  <li>
                    <a href="/du-an/543-nha-dat-ca-mau">Nhà đất Cà Mau</a>
                  </li>
                  <li>
                    <a href="/du-an/544-nha-dat-an-giang">Nhà đất An Giang</a>
                  </li>
                  <li>
                    <a href="/du-an/545-nha-dat-kien-giang"
                      >Nhà đất Kiên Giang</a
                    >
                  </li>
                </ul>
              </li>

              <!-- Nhà đất Tây Nguyên -->
              <li class="has-submenu">
                <div class="menu-item">
                  <a href="/du-an/488-nha-dat-tay-nguyen" @click.stop
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
                    <a href="/du-an/546-nha-dat-kon-tum">Nhà đất Kon Tum</a>
                  </li>
                  <li>
                    <a href="/du-an/547-nha-dat-lam-dong">Nhà đất Lâm Đồng</a>
                  </li>
                  <li>
                    <a href="/du-an/548-nha-dat-gia-lai">Nhà đất Gia Lai</a>
                  </li>
                  <li>
                    <a href="/du-an/549-nha-dat-dak-lak">Nhà đất Đắk Lắk</a>
                  </li>
                  <li>
                    <a href="/du-an/550-nha-dat-dak-nong">Nhà đất Đắk Nông</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>

          <!-- Nhà đất bán -->
          <li>
            <a href="/du-an/465-nha-dat-ban" title="Nhà đất bán">
              <h2>Nhà đất bán</h2>
            </a>
          </li>

          <!-- Nhà đất cho thuê -->
          <li>
            <a href="/du-an/466-nha-dat-cho-thue" title="Nhà đất cho thuê">
              <h2>Nhà đất cho thuê</h2>
            </a>
          </li>

          <!-- Kiến thức -->
          <li>
            <a href="/du-an/467-kien-thuc" title="Kiến thức">
              <h2>Kiến thức</h2>
            </a>
          </li>

          <!-- Liên hệ -->
          <li>
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
                    src="https://sotaychungcu.com//img/upload/images/files/Slideshow/sotaychungcu.png"
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
                    <a title="Sổ tay Dự án" href="/du-an/431-so-tay-du-an">
                      <h2>Sổ tay Dự án</h2>
                    </a>
                    <ul>
                      <li class="has-sub">
                        <a title="Dự án Hà Nội " href="/du-an/127-du-an-ha-noi"
                          >Dự án Hà Nội
                        </a>
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Quận Nam Từ Liêm"
                              href="/du-an/432-quan-nam-tu-liem"
                              >Quận Nam Từ Liêm</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Bắc Từ Liêm"
                              href="/du-an/433-quan-bac-tu-liem"
                              >Quận Bắc Từ Liêm</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hà Đông "
                              href="/du-an/434-quan-ha-dong"
                              >Quận Hà Đông
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Cầu Giấy "
                              href="/du-an/435-quan-cau-giay"
                              >Quận Cầu Giấy
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Thanh Xuân "
                              href="/du-an/436-quan-thanh-xuan"
                              >Quận Thanh Xuân
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hoàng Mai "
                              href="/du-an/437-quan-hoang-mai"
                              >Quận Hoàng Mai
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Long Biên "
                              href="/du-an/438-quan-long-bien"
                              >Quận Long Biên
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Đống Đa"
                              href="/du-an/439-quan-dong-da"
                              >Quận Đống Đa</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hoàn Kiếm"
                              href="/du-an/441-quan-hoan-kiem"
                              >Quận Hoàn Kiếm</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Hai Bà Trưng "
                              href="/du-an/452-quan-hai-ba-trung"
                              >Quận Hai Bà Trưng
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Ba Đình"
                              href="/du-an/453-quan-ba-dinh"
                              >Quận Ba Đình</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận Tây Hồ" href="/du-an/454-quan-tay-ho"
                              >Quận Tây Hồ</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Hoài Đức"
                              href="/du-an/459-huyen-hoai-duc"
                              >Huyện Hoài Đức</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Đông Anh "
                              href="/du-an/461-huyen-dong-anh"
                              >Huyện Đông Anh
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Thanh Trì"
                              href="/du-an/462-huyen-thanh-tri"
                              >Huyện Thanh Trì</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Đan Phượng"
                              href="/du-an/468-huyen-dan-phuong-1"
                              >Huyện Đan Phượng</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Quốc Oai"
                              href="/du-an/479-huyen-quoc-oai"
                              >Huyện Quốc Oai</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Gia Lâm"
                              href="/du-an/480-huyen-gia-lam"
                              >Huyện Gia Lâm</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Mê Linh "
                              href="/du-an/481-huyen-me-linh"
                              >Huyện Mê Linh
                            </a>

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a title="Dự án Sài Gòn" href="/du-an/128-du-an-sai-gon"
                          >Dự án Sài Gòn</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a title="Quận 1" href="/du-an/109-quan-1-1"
                              >Quận 1</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 2" href="/du-an/110-quan-2"
                              >Quận 2</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 3" href="/du-an/111-quan-3"
                              >Quận 3</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 4" href="/du-an/112-quan-4"
                              >Quận 4</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 5" href="/du-an/113-quan-5"
                              >Quận 5</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 6" href="/du-an/114-quan-6"
                              >Quận 6</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 7" href="/du-an/115-quan-7"
                              >Quận 7</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 8" href="/du-an/116-quan-8"
                              >Quận 8</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 9" href="/du-an/117-quan-9"
                              >Quận 9</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 10" href="/du-an/118-quan-10"
                              >Quận 10</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 11" href="/du-an/119-quan-11"
                              >Quận 11</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận 12" href="/du-an/120-quan-12"
                              >Quận 12</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Bình Tân"
                              href="/du-an/121-quan-binh-tan"
                              >Quận Bình Tân</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Bình Thạnh "
                              href="/du-an/122-quan-binh-thanh"
                              >Quận Bình Thạnh
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="Quận Gò Vấp" href="/du-an/469-quan-go-vap"
                              >Quận Gò Vấp</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Phú Nhuận "
                              href="/du-an/470-quan-phu-nhuan"
                              >Quận Phú Nhuận
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Tận Bình"
                              href="/du-an/471-quan-tan-binh"
                              >Quận Tận Bình</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Quận Tân Phú"
                              href="/du-an/472-quan-tan-phu"
                              >Quận Tân Phú</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a title="TP Thủ Đức" href="/du-an/473-tp-thu-duc"
                              >TP Thủ Đức</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Bình Chánh"
                              href="/du-an/474-huyen-binh-chanh"
                              >Huyện Bình Chánh</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Cần Giờ"
                              href="/du-an/475-huyen-can-gio"
                              >Huyện Cần Giờ</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Củ Chi"
                              href="/du-an/476-huyen-cu-chi"
                              >Huyện Củ Chi</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Hóc Môn "
                              href="/du-an/477-huyen-hoc-mon"
                              >Huyện Hóc Môn
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Huyện Nhà Bè"
                              href="/du-an/478-huyen-nha-be"
                              >Huyện Nhà Bè</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="has-sub">
                    <a title="Sổ tay Nhà đất" href="/du-an/464-so-tay-nha-dat">
                      <h2>Sổ tay Nhà đất</h2>
                    </a>
                    <ul>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Đồng Bắc"
                          href="/du-an/482-nha-dat-dong-bac"
                          >Nhà đất Đồng Bắc</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hải Phòng"
                              href="/du-an/489-nha-dat-hai-phong"
                              >Nhà đất Hải Phòng</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Ninh"
                              href="/du-an/490-nha-dat-quang-ninh"
                              >Nhà đất Quảng Ninh</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bắc Ninh "
                              href="/du-an/491-nha-dat-bac-ninh"
                              >Nhà đất Bắc Ninh
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bắc Giang"
                              href="/du-an/492-nha-dat-bac-giang"
                              >Nhà đất Bắc Giang</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hưng Yên"
                              href="/du-an/493-nha-dat-hung-yen"
                              >Nhà đất Hưng Yên</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hải Dương"
                              href="/du-an/494-nha-dat-hai-duong"
                              >Nhà đất Hải Dương</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thái Nguyên"
                              href="/du-an/495-nha-dat-thai-nguyen"
                              >Nhà đất Thái Nguyên</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Vĩnh Phúc"
                              href="/du-an/496-nha-dat-vinh-phuc"
                              >Nhà đất Vĩnh Phúc</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hà Nam"
                              href="/du-an/497-nha-dat-ha-nam"
                              >Nhà đất Hà Nam</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Phú Thọ"
                              href="/du-an/498-nha-dat-phu-tho"
                              >Nhà đất Phú Thọ</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thái Bình"
                              href="/du-an/499-nha-dat-thai-binh"
                              >Nhà đất Thái Bình</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Nam Định"
                              href="/du-an/500-nha-dat-nam-dinh"
                              >Nhà đất Nam Định</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Ninh Bình"
                              href="/du-an/501-nha-dat-ninh-binh"
                              >Nhà đất Ninh Bình</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lạng Sơn"
                              href="/du-an/502-nha-dat-lang-son"
                              >Nhà đất Lạng Sơn</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Cao Bằng"
                              href="/du-an/503-nha-dat-cao-bang"
                              >Nhà đất Cao Bằng</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Tuyên Quang"
                              href="/du-an/504-nha-dat-tuyen-quang"
                              >Nhà đất Tuyên Quang</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hà Giang"
                              href="/du-an/505-nha-dat-ha-giang"
                              >Nhà đất Hà Giang</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bắc Kạn"
                              href="/du-an/506-nha-dat-bac-kan"
                              >Nhà đất Bắc Kạn</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Tây Bắc"
                          href="/du-an/483-nha-dat-tay-bac"
                          >Nhà đất Tây Bắc</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lai Châu"
                              href="/du-an/512-nha-dat-lai-chau"
                              >Nhà đất Lai Châu</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hòa Bình"
                              href="/du-an/507-nha-dat-hoa-binh"
                              >Nhà đất Hòa Bình</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lào Cai"
                              href="/du-an/508-nha-dat-lao-cai"
                              >Nhà đất Lào Cai</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Yên Bái"
                              href="/du-an/509-nha-dat-yen-bai"
                              >Nhà đất Yên Bái</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Sơn La "
                              href="/du-an/510-nha-dat-son-la"
                              >Nhà đất Sơn La
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Điện Biên"
                              href="/du-an/511-nha-dat-dien-bien"
                              >Nhà đất Điện Biên</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Bắc Trung Bộ"
                          href="/du-an/484-nha-dat-bac-trung-bo"
                          >Nhà đất Bắc Trung Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Nghệ An "
                              href="/du-an/513-nha-dat-nghe-an"
                              >Nhà đất Nghệ An
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thanh Hóa"
                              href="/du-an/514-nha-dat-thanh-hoa"
                              >Nhà đất Thanh Hóa</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hà Tĩnh "
                              href="/du-an/515-nha-dat-ha-tinh"
                              >Nhà đất Hà Tĩnh
                            </a>

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Bình"
                              href="/du-an/516-nha-dat-quang-binh"
                              >Nhà đất Quảng Bình</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Trị"
                              href="/du-an/517-nha-dat-quang-tri"
                              >Nhà đất Quảng Trị</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Thừa Thiên - Huê"
                              href="/du-an/518-nha-dat-thua-thien-hue"
                              >Nhà đất Thừa Thiên - Huế</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Nam Trung Bộ"
                          href="/du-an/485-nha-dat-nam-trung-bo"
                          >Nhà đất Nam Trung Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đà Nẵng"
                              href="/du-an/519-nha-dat-da-nang"
                              >Nhà đất Đà Nẵng</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Nam"
                              href="/du-an/520-nha-dat-quang-nam"
                              >Nhà đất Quảng Nam</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Quảng Ngãi"
                              href="/du-an/521-nha-dat-quang-ngai"
                              >Nhà đất Quảng Ngãi</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Định"
                              href="/du-an/522-nha-dat-binh-dinh"
                              >Nhà đất Bình Định</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Phú Yên"
                              href="/du-an/523-nha-dat-phu-yen"
                              >Nhà đất Phú Yên</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Khánh Hòa"
                              href="/du-an/524-nha-dat-khanh-hoa"
                              >Nhà đất Khánh Hòa</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Ninh Thuận"
                              href="/du-an/525-nha-dat-ninh-thuan"
                              >Nhà đất Ninh Thuận</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Thuận"
                              href="/du-an/526-nha-dat-binh-thuan"
                              >Nhà đất Bình Thuận</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Đông Nam Bộ"
                          href="/du-an/486-nha-dat-dong-nam-bo"
                          >Nhà đất Đông Nam Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Dương"
                              href="/du-an/527-nha-dat-binh-duong"
                              >Nhà đất Bình Dương</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Vũng Tàu"
                              href="/du-an/528-nha-dat-vung-tau"
                              >Nhà đất Vũng Tàu</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đồng Nai"
                              href="/du-an/529-nha-dat-dong-nai"
                              >Nhà đất Đồng Nai</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bà Rịa"
                              href="/du-an/530-nha-dat-ba-ria"
                              >Nhà đất Bà Rịa</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Tây Ninh"
                              href="/du-an/531-nha-dat-tay-ninh"
                              >Nhà đất Tây Ninh</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bình Phước"
                              href="/du-an/532-nha-dat-binh-phuoc"
                              >Nhà đất Bình Phước</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Tây Nam Bộ"
                          href="/du-an/487-nha-dat-tay-nam-bo"
                          >Nhà đất Tây Nam Bộ</a
                        >
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Cần Thơ"
                              href="/du-an/533-nha-dat-can-tho"
                              >Nhà đất Cần Thơ</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title=" Nhà đất Tiền Giang"
                              href="/du-an/534-nha-dat-tien-giang"
                            >
                              Nhà đất Tiền Giang</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Hậu Giang"
                              href="/du-an/535-nha-dat-hau-giang"
                              >Nhà đất Hậu Giang</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Long An"
                              href="/du-an/536-nha-dat-long-an"
                              >Nhà đất Long An</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Trà Vinh"
                              href="/du-an/537-nha-dat-tra-vinh"
                              >Nhà đất Trà Vinh</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Sóc Trăng"
                              href="/du-an/538-nha-dat-soc-trang"
                              >Nhà đất Sóc Trăng</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đồng Tháp"
                              href="/du-an/539-nha-dat-dong-thap"
                              >Nhà đất Đồng Tháp</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Vĩnh Long"
                              href="/du-an/540-nha-dat-vinh-long"
                              >Nhà đất Vĩnh Long</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bạc Liêu"
                              href="/du-an/541-nha-dat-bac-lieu"
                              >Nhà đất Bạc Liêu</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Bến Tre"
                              href="/du-an/542-nha-dat-ben-tre"
                              >Nhà đất Bến Tre</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Cà Mau"
                              href="/du-an/543-nha-dat-ca-mau"
                              >Nhà đất Cà Mau</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất An Giang"
                              href="/du-an/544-nha-dat-an-giang"
                              >Nhà đất An Giang</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Kiên Giang"
                              href="/du-an/545-nha-dat-kien-giang"
                              >Nhà đất Kiên Giang</a
                            >

                            <ul></ul>
                          </li>
                        </ul>
                      </li>
                      <li class="has-sub">
                        <a
                          title="Nhà đất Tây Nguyên "
                          href="/du-an/488-nha-dat-tay-nguyen"
                          >Nhà đất Tây Nguyên
                        </a>
                        <ul>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Kon Tum"
                              href="/du-an/546-nha-dat-kon-tum"
                              >Nhà đất Kon Tum</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Lâm Đồng"
                              href="/du-an/547-nha-dat-lam-dong"
                              >Nhà đất Lâm Đồng</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Gia Lai"
                              href="/du-an/548-nha-dat-gia-lai"
                              >Nhà đất Gia Lai</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đắk Lắk"
                              href="/du-an/549-nha-dat-dak-lak"
                              >Nhà đất Đắk Lắk</a
                            >

                            <ul></ul>
                          </li>
                          <li class="has-sub">
                            <a
                              title="Nhà đất Đắk Nông"
                              href="/du-an/550-nha-dat-dak-nong"
                              >Nhà đất Đắk Nông</a
                            >

                            <ul></ul>
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

const headerNav = ref<HTMLElement | null>(null);
const isSticky = ref(false);
const isMobileMenuOpen = ref(false);

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
