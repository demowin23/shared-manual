<template>
  <div id="page" class="wallpaper">
    <div class="container">
      <div class="row">
        <div class="col-md-9" id="content_page">
          <link rel="stylesheet" type="text/css" href="/css/tab1.css" />
          <link rel="stylesheet" type="text/css" href="/css/cart.css" />

          <div class="row">
            <div class="col-md-12">
              <div class="head_title3 text-left">
                <p>Chung cư Rice City Long Châu</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="img_detail">
                <div class="img_detail">
                  <img
                    class="xzoom4"
                    id="xzoom-fancy"
                    :src="mainImage"
                    :xoriginal="mainImage"
                    style="width: 910px"
                  />

                  <div id="gallery_01" class="xzoom-thumbs imgsmall">
                    <a
                      v-for="(image, index) in galleryImages"
                      :key="index"
                      :href="image.src"
                      @click.prevent="mainImage = image.src"
                    >
                      <img
                        :class="[
                          'xzoom-gallery4',
                          mainImage === image.src ? 'xactive' : '',
                        ]"
                        :src="image.src"
                        :alt="image.alt"
                      />
                    </a>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div id="fb-root" class="fb_reset">
                <div
                  style="
                    position: absolute;
                    top: -10000px;
                    width: 0px;
                    height: 0px;
                  "
                >
                  <div></div>
                </div>
              </div>

              <div
                style="float: left"
                class="fb-like fb_iframe_widget fb_iframe_widget_fluid"
                data-href="https://sotaychungcu.com//chi-tiet/727-chung-cu-rice-city-long-chau"
                data-width=""
                data-layout="button_count"
                data-action="like"
                data-size="small"
                data-show-faces="true"
                data-share="true"
                fb-xfbml-state="rendered"
                fb-iframe-plugin-query="action=like&amp;app_id=1951538371539278&amp;container_width=0&amp;href=https%3A%2F%2Fsotaychungcu.com%2F%2Fchi-tiet%2F727-chung-cu-rice-city-long-chau&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small&amp;width="
              >
                <span style="vertical-align: bottom; width: 150px; height: 28px"
                  ><iframe
                    name="f71611673eb03ddd5"
                    width="1000px"
                    height="1000px"
                    data-testid="fb:like Facebook Social Plugin"
                    title="fb:like Facebook Social Plugin"
                    frameborder="0"
                    allowtransparency="true"
                    allowfullscreen="true"
                    scrolling="no"
                    allow="encrypted-media"
                    src="https://web.facebook.com/v3.3/plugins/like.php?action=like&amp;app_id=1951538371539278&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfe1f9960e5e07e517%26domain%3Dsotaychungcu.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsotaychungcu.com%252Ffa7eea7edf59fcfd7%26relation%3Dparent.parent&amp;container_width=0&amp;href=https%3A%2F%2Fsotaychungcu.com%2F%2Fchi-tiet%2F727-chung-cu-rice-city-long-chau&amp;layout=button_count&amp;locale=vi_VN&amp;sdk=joey&amp;share=true&amp;show_faces=true&amp;size=small&amp;width="
                    style="
                      border: none;
                      visibility: visible;
                      width: 150px;
                      height: 28px;
                    "
                    class=""
                  ></iframe
                ></span>
              </div>
              <div
                style="
                  float: left;
                  margin-right: 2px;
                  position: relative;
                  display: inline-block;
                  width: 70px;
                  height: 20px;
                "
                class="zalo-share-button"
                data-href=""
                data-oaid="579745863508352884"
                data-layout="1"
                data-color="blue"
                data-customize="false"
              >
                <iframe
                  id="b9ab2a6a-8c43-463b-bc86-0158c6142637"
                  name="b9ab2a6a-8c43-463b-bc86-0158c6142637"
                  frameborder="0"
                  allowfullscreen=""
                  scrolling="no"
                  width="70px"
                  height="20px"
                  src="https://button-share.zalo.me/share_inline?id=b9ab2a6a-8c43-463b-bc86-0158c6142637&amp;layout=1&amp;color=blue&amp;customize=false&amp;width=70&amp;height=20&amp;isDesktop=false&amp;url=https%3A%2F%2Fsotaychungcu.com%2Fchi-tiet%2F727-chung-cu-rice-city-long-chau&amp;d=eyJ1cmwiOiJodHRwczovL3NvdGF5Y2h1bmdjdS5jb20vY2hpLXRpZXQvNzI3LWNodW5nLWN1LXJpY2UtY2l0eS1sb25nLWNoYXUifQ%253D%253D&amp;shareType=0"
                  style="position: absolute; z-index: 99; top: 0px; left: 0px"
                ></iframe>
              </div>
              <div
                class="zalo-follow-only-button"
                data-oaid="579745863508352884"
                style="overflow: hidden; display: inline-block"
              >
                <iframe
                  frameborder="0"
                  allowfullscreen=""
                  scrolling="no"
                  width="102px"
                  height="35px"
                  src="https://button-follow.zalo.me?oaid=579745863508352884&amp;style=blue&amp;customize=false&amp;callback=null&amp;cbfollowed=null&amp;domain=https%3A%2F%2Fsotaychungcu.com%2Fchi-tiet%2F727-chung-cu-rice-city-long-chau&amp;id=87d2633d-bcea-4a9a-ac41-553178fab208"
                ></iframe>
              </div>
              <div class="clear" style="margin-bottom: 10px"></div>
              <a class="addtocart btn btn-primary" href="#form-project"
                ><label>Liên hệ ngay</label><span>Để được nhận ưu đãi</span></a
              >

              <a
                style="background: #00b827"
                class="addtocart btn btn-primary ajax cboxElement"
                href="tel:0914.788.345"
                ><label>Hotline</label><span>0914.788.345</span></a
              >
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="info">
                <p class="sp" style="color: #0175d7">
                  <i class="fa fa-envelope" aria-hidden="true"></i> &nbsp; Email
                  : sotaychungcu@gmail.com
                </p>
                <p class="sp" style="color: red">
                  <i class="fa fa-phone-square" aria-hidden="true"></i> &nbsp;
                  Hotline : 0914.788.345
                </p>

                <div class=""></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="head_title3 text-left"><p>Chi tiết dự án</p></div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="content_product">
                <h2 style="text-align: center">
                  <span style="color: #27ae60"
                    ><strong
                      ><span style="font-size: 26px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          >CHUNG CƯ RICE CITY LONG CHÂU</span
                        ></span
                      ></strong
                    ></span
                  >
                </h2>

                <p style="text-align: center">
                  <span style="color: #2980b9"
                    ><strong
                      ><span style="font-size: 16px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          >LIÊN HỆ TƯ VẤN &amp; ĐẶT LỊCH XEM DỰ ÁN</span
                        ></span
                      ></strong
                    ></span
                  ><br />
                  <span style="color: #e74c3c"
                    ><strong
                      ><span style="font-size: 16px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          ><span style="background-color: #ffff00"
                            >HOTLINE: 0914.788.345</span
                          ></span
                        ></span
                      ></strong
                    ></span
                  ><br />
                  <span style="color: #2980b9"
                    ><strong
                      ><span style="font-size: 16px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          >************</span
                        ></span
                      ></strong
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-01.jpg"
                    style="height: 533px; width: 800px"
                  />
                </p>

                <h2 style="text-align: center">
                  <strong
                    ><span style="color: #e74c3c"
                      ><span style="font-size: 20px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          ><span style="background-color: #ffff00"
                            >TỔNG QUAN DỰ ÁN RICE CITY LONG CHÂU</span
                          ></span
                        ></span
                      ></span
                    ></strong
                  >
                </h2>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Tên dự án: Nhà ở xã hội Rice City Long Châu<br />
                      • Vị trí dự án: Làng Gia Quất, Phường Thượng Thanh, Quận
                      Long Biên, TP Hà Nội<br />
                      • Chủ đầu tư: Công ty CP BIC Việt Nam<br />
                      • Đơn vị thiết kế: Công ty Cổ phần Kiến trúc Lập Phương
                      (CUBIC)<br />
                      • Quy mô: cao 22 tầng, 03 tầng hầm<br />
                      • Số lượng căn hộ: 600 căn<br />
                      • Diện tích dự kiến: từ 64&nbsp;- 76.6 m2&nbsp;<br />
                      • Kinh phí đầu tư: 2.685 tỷ đồng<br />
                      • Hình thức sở hữu: Sổ hồng lâu dài&nbsp;</span
                    ></span
                  >
                </p>

                <h2 style="text-align: center">
                  <strong
                    ><span style="color: #e74c3c"
                      ><span style="font-size: 20px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          ><span style="background-color: #ffff00"
                            >VỊ TRÍ &amp; TIỆN ÍCH DỰ ÁN RICE CITY LONG
                            CHÂU</span
                          ></span
                        ></span
                      ></span
                    ></strong
                  >
                </h2>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Khu nhà ở xã hội Rice City Long Châu&nbsp;thuộc địa
                      giới hành chính phường Thượng Thanh, quận Long Biên, TP Hà
                      Nội có phía bắc giáp khu công viên cây xanh Tp theo quy
                      hoạch (công viên hồ Đầm Nấm); Phía nam giáp khu dân cư tổ
                      5 và trường mầm non Thượng Thanh; Phía đông giáp đất đất
                      nông nghiệp, dân cư phường Thượng Thanh và đường đấu nối
                      với trục đường Cầu Chui-Đông Trù; Phía tây giáp khu chung
                      cư Đầm Nấm.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-03.jpg"
                    style="height: 565px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Trên khu đất thuộc phường Thượng Thanh, Chung cư Rice
                      City Long Châu chính là cửa ngõ phía Đông Hà Nội, là trung
                      tâm giao thương huyết mạch phía Đông Hà Nội với các tỉnh
                      Hải Phòng, Quảng Ninh, Hải Dương, Bắc Giang, Bắc Ninh,
                      Lạng Sơn thông qua quốc lộ 5 và quốc lộ 1. Dự án Rice City
                      Thượng Thanh cách cầu Chương Dương khoảng 3km, từ dự án cư
                      dân có thể tiếp cận di chuyển vào nội thành chỉ mất 5 – 10
                      phút lái xe, nhờ đó mọi tiện nghi và nhịp sống sầm uất nơi
                      đô thành vẫn luôn trong tầm tay.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-04.jpg"
                    style="height: 709px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Nhà ở xã hội Rice City Long Châu đáp ứng nhu cầu về nhà
                      ở của phần lớn người dân có mức thu nhập thấp và trung
                      bình đang sinh sống tại khu vực và phụ cận. Bên cạnh đó,
                      Chủ đầu tư dự án Rice City Long Châu rà soát hiện trạng,
                      đề xuất chức năng sử dụng đất, các chỉ tiêu quy hoạch kiến
                      trúc cho từng ô đất đảm bảo phù hợp với Quy chuẩn xây dựng
                      Việt Nam, Tiêu chuẩn thiết kế chuyên ngành và phù hợp với
                      định hướng Quy hoạch phân khu được duyệt.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-05.jpg"
                    style="height: 450px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Với phương châm đem đến cho khách hàng một cuộc sống
                      thoải mái và tiện nghi, các nhà làm Dự án NƠXH Rice City
                      Long Châu không những chú trọng đặc biệt đến thiết kế các
                      căn hộ cho phù hợp với phong thủy mà còn đem đến cho các
                      khách hàng của mình một cuộc sống đầy đủ ngay chính tại
                      nơi đây mà không phải đi bất cứ đâu như: mua sắm, giải
                      trí, chăm sóc sức khỏe, làm đẹp, tập luyện thể thao... Các
                      tiện ích ngay tại dự án giúp bạn tiết kiệm nhiều thời
                      gian, công sức và tiền bạc sẽ nâng tầm cuộc sống cho
                      bạn.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-06.jpg"
                    style="height: 450px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Toàn bộ căn hộ tại Nhà ở xã hội Rice City Long Châu
                      được thiết kế với thiết kế ưu việt để đáp ứng toàn bộ nhu
                      cầu nghỉ ngơi tươi mát của khách hàng, đảm báo đưa đến
                      100% lượng không khí tươi ráo vào trong từng căn hộ của
                      bạn. Đặc biệt hơn nữa là cách bố trí hệ thống bế sát với
                      lô gia để tạo ra sự thông thoáng cho bếp và căn hộ của gia
                      chủ.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-07.jpg"
                    style="height: 452px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Với đầy đủ các công năng như trung tâm thương mại, dịch
                      vụ, văn phòng và căn hộ cao cấp, lại nằm trong khu vực có
                      tốc độ đô thị hóa và sự tăng trưởng kinh tế rất nhanh của
                      Thành phố, Rice City Long Châu - Long Biên&nbsp;sẽ là một
                      trong những địa điểm làm việc lý tưởng của nhiều doanh
                      nghiệp.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-08.jpg"
                    style="height: 450px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Tại Chung cư - Nhà ở xã hội&nbsp;Rice City Long Châu,
                      cư dân sẽ được hưởng một cuộc sống tiện nghi và thuận tiện
                      với hệ thống an toàn, hệ thống thang máy chở người và hàng
                      hóa riêng biệt nhằm đảm bảo lưu lượng di chuyển của cư dân
                      vào giờ cao điểm, hệ thống an ninh đồng bộ, camera giám
                      sát 24/24, máy phát điện dự phòng khởi động sau 15 giây
                      khi xảy ra sự cố, tầng hầm để xe rộng rãi đáp ứng nhu cầu
                      đi lại của cho cư dân</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-09.jpg"
                    style="height: 450px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Với những thiết kế hiện đại, áp dụng các tiêu chuẩn
                      kiểu mẫu cho những căn hộ tại Chung cư Rice City Long Châu
                      người mua nhà có thể hoàn toàn yên tâm về không gian sống,
                      việc vận dụng các yếu tố phong thuỷ vào trong từng thiết
                      kế với chủ đạo các căn hộ đều lấy cảm hừng "Chạm tay vào
                      Nắng và Gió" kết hợp tinh tế với thiên nhiên, mang thiên
                      nhiên vào từng căn hộ nhưng vẫn giữ được sự sang trọng và
                      đẳng cấp.</span
                    ></span
                  >
                </p>

                <h2 style="text-align: center">
                  <strong
                    ><span style="color: #e74c3c"
                      ><span style="font-size: 20px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          ><span style="background-color: #ffff00"
                            >MẶT BẰNG DỰ ÁN RICE CITY LONG CHÂU</span
                          ></span
                        ></span
                      ></span
                    ></strong
                  >
                </h2>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Với phương châm "Xây nhà cho khách phải giống như xây
                      nhà cho mình", Chủ đầu tư Rice City Long Châu đã rất chú
                      trọng lựa chọn đối tác tư vấn thiết kế, nhà thầu thi công
                      và đơn vị giám sát uy tín hàng đầu. Ngoài ra, vật liệu sử
                      dụng cho công trình cũng đều được kiểm định nghiêm ngặt,
                      đảm bảo sự tiện dụng và tối tân nhất, mang đến không gian
                      sống chất lượng cho cư dân.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-10.jpg"
                    style="height: 562px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Mặt bằng Chung cư Rice City Long Châu được thiết kế với
                      xu hướng thời đại. Với mục tiêu mang đến cho khách hàng
                      không gian sống mới lạ, mang phong cách riêng biệt. Nhưng
                      vẫn đáp ứng đầy đủ nhu cầu sinh hoạt cho người dân. Điều
                      đặc biệt trong thiết kế toàn bộ dự án luôn quan tâm đến
                      phong thuỷ. Do phong thuỷ ảnh hưởng rất nhiều đến sức khoẻ
                      cũng như tài vận của gia đình</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <img
                    alt=""
                    src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-11.jpg"
                    style="height: 564px; width: 800px"
                  />
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Thiết kế căn hộ Rice City Long Châu rộng rãi, tận dụng
                      tối đa ánh sáng thiên nhiên. Cách sắp xếp và bố trí nội
                      thất cũng mang vẻ ấm cúng nhưng không kém sang trọng. Vì
                      thế, nó không chỉ mang đến cảm giác thoải mái thư giãn cho
                      cư dân ở đây mà còn tiết kiệm chi phí tiền điện hàng tháng
                      rất đáng kể.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      ><img
                        alt=""
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-12.jpg"
                        style="height: 519px; width: 800px" /></span
                  ></span>
                </p>

                <p style="text-align: center">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      ><img
                        alt=""
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-13.jpg"
                        style="height: 515px; width: 800px" /></span
                  ></span>
                </p>

                <p style="text-align: justify">
                  <span style="font-size: 16px"
                    ><span style="font-family: Verdana, Geneva, sans-serif"
                      >• Nhà ở xã hội Rice City Long Châu được quy hoạch xây
                      dựng là khu nhà ở hiện đại, đồng bộ hạ tầng kỹ thuật, hạ
                      tầng xã hội phù hợp với nhu cầu sử dụng cho dự án nhà ở xã
                      hội và phục vụ cộng đồng dân cư khu vực; góp phần phát
                      triển kinh tế – xã hội của địa phương và thành phố; tạo bộ
                      mặt kiến trúc đô thị khang trang, hiện đại đóng góp vào
                      cảnh quan kiến trúc chung của khu vực quận Long
                      Biên.</span
                    ></span
                  >
                </p>

                <p style="text-align: center">
                  <strong
                    ><span style="color: #2980b9"
                      ><span style="font-size: 20px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          >LIÊN HỆ TƯ VẤN &amp; ĐẶT LỊCH XEM DỰ ÁN</span
                        ></span
                      ></span
                    ><br />
                    <span style="color: #e74c3c"
                      ><span style="font-size: 20px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          ><span style="background-color: #ffff00"
                            >HOTLINE: 0914.788.345</span
                          ></span
                        ></span
                      ></span
                    ><br />
                    <span style="color: #2980b9"
                      ><span style="font-size: 20px"
                        ><span style="font-family: Verdana, Geneva, sans-serif"
                          >*************&nbsp;</span
                        ></span
                      ></span
                    ></strong
                  >
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div id="form-project" class="form-project">
                <h4 class="title-form">
                  Tải trọn bộ tài liệu dự án Chung cư Rice City Long Châu
                </h4>

                <div class="col-xs-12 col-sm-6 col-left">
                  <form
                    action="https://sotaychungcu.com/dat-hang-nhanh.html"
                    method="post"
                  >
                    <div class="form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Họ tên"
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="phone"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Số điện thoại"
                        required=""
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        name="address"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Email"
                        required=""
                      />
                    </div>

                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="comment"
                        placeholder="Ý kiến khách hàng"
                        rows="3"
                      ></textarea>
                    </div>

                    <input
                      type="hidden"
                      id="items_name"
                      name="items_name"
                      value="Chung cư Rice City Long Châu"
                    />
                    <input
                      type="hidden"
                      id="items_id"
                      name="items_id"
                      value="727"
                    />
                    <input
                      type="hidden"
                      id="items_price"
                      name="items_price"
                      value=""
                    />
                    <input
                      type="hidden"
                      id="items_url"
                      name="items_url"
                      value="chung-cu-rice-city-long-chau"
                    />
                    <input
                      type="hidden"
                      id="created"
                      name="created"
                      value="1749545418"
                    />
                    <button type="submit" class="btn btn-default">
                      Đăng ký ngay
                    </button>
                  </form>
                </div>
                <div class="col-xs-12 col-sm-6 col-right">
                  <div class="text-uppercase">
                    <ul>
                      <li>File mặt bằng chất lượng cao</li>
                      <li>Bảng giá cập nhật mới nhất</li>
                      <li>Chính sách ưu đãi trực tiếp từ CĐT</li>
                      <li>Đăng ký nhận lịch mở bán</li>
                      <li>Đăng ký tham quan căn hộ mẫu</li>
                    </ul>
                    <div class="text-center">
                      <img
                        src="~/assets/images/Em.png"
                        style="position: relative; left: -30px"
                        class="lazyloading"
                        data-was-processed="true"
                      />
                    </div>
                  </div>
                </div>

                <div class="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3" id="content_right">
          <link rel="stylesheet" type="text/css" href="/css/menu.css" /><link
            rel="stylesheet"
            type="text/css"
            href="/css/styles_menu.css"
          />
          <!-- 

<div class="box-left support_col" >
	<div class="head_title4"><p>Hỗ trợ trực tuyến <i class="fa fa-star mr_5" aria-hidden="true"></i></p></div>
	<div class="border_box">
		<div class="hl"><p>0914.788.345</p></div>
		<div class="h10"></div>
		

			<div class="clear"></div>
		</div>
	</div>
-->

          <div class="box-left">
            <div class="head_title4">
              <p>
                TIN TỨC MỚI CẬP NHẬT
                <i class="fa fa-star mr_5" aria-hidden="true"></i>
              </p>
            </div>
            <div class="clear"></div>
            <div class="border_box">
              <div class="pd10">
                <div class="row news_right">
                  <div class="col-md-4 col-sm-6 col-xs-6 img">
                    <a
                      title="Dịch vụ ký gửi Bất động sản"
                      href="https://sotaychungcu.com/chi-tiet/29-dich-vu-ky-gui-bat-dong-san"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/upload/images/files/Tintuc/Ky-gui-nha-dat.jpg"
                    /></a>
                  </div>
                  <div class="col-md-8 col-sm-6 col-xs-6 info">
                    <a
                      title="Dịch vụ ký gửi Bất động sản"
                      href="https://sotaychungcu.com/chi-tiet/29-dich-vu-ky-gui-bat-dong-san"
                      >Dịch vụ ký gửi Bất động sản</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>

          <div class="box-left">
            <div class="head_title4">
              <p>
                DỰ ÁN NỔI BẬT <i class="fa fa-star mr_5" aria-hidden="true"></i>
              </p>
            </div>
            <div class="clear"></div>
            <div class="border_box">
              <div class="pd10">
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Grand Sunlake"
                      href="https://sotaychungcu.com/chi-tiet/722-chung-cu-grand-sunlake"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Grand-Sunlake-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Grand Sunlake"
                      href="https://sotaychungcu.com/chi-tiet/722-chung-cu-grand-sunlake"
                      >Chung cư Grand Sunlake</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Anland Lake View"
                      href="https://sotaychungcu.com/chi-tiet/665-chung-cu-anland-lake-view"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Anland-Lake-View-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Anland Lake View"
                      href="https://sotaychungcu.com/chi-tiet/665-chung-cu-anland-lake-view"
                      >Chung cư Anland Lake View</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Rice City Thượng Thanh"
                      href="https://sotaychungcu.com/chi-tiet/622-chung-cu-rice-city-thuong-thanh"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Thuong-Thanh-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Rice City Thượng Thanh"
                      href="https://sotaychungcu.com/chi-tiet/622-chung-cu-rice-city-thuong-thanh"
                      >Chung cư Rice City Thượng Thanh</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Him Lam Thượng Thanh "
                      href="https://sotaychungcu.com/chi-tiet/610-chung-cu-him-lam-thuong-thanh"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Him-Lam-Thuong-Thanh-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Him Lam Thượng Thanh "
                      href="https://sotaychungcu.com/chi-tiet/610-chung-cu-him-lam-thuong-thanh"
                      >Chung cư Him Lam Thượng Thanh
                    </a>
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Hinode City"
                      href="https://sotaychungcu.com/chi-tiet/599-chung-cu-hinode-city"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Hinode-City-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Hinode City"
                      href="https://sotaychungcu.com/chi-tiet/599-chung-cu-hinode-city"
                      >Chung cư Hinode City</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư 6th Element"
                      href="https://sotaychungcu.com/chi-tiet/569-chung-cu-6th-element"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-6th-Element-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư 6th Element"
                      href="https://sotaychungcu.com/chi-tiet/569-chung-cu-6th-element"
                      >Chung cư 6th Element</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Rose Town"
                      href="https://sotaychungcu.com/chi-tiet/558-chung-cu-rose-town"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rose-Town-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Rose Town"
                      href="https://sotaychungcu.com/chi-tiet/558-chung-cu-rose-town"
                      >Chung cư Rose Town</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Hà Nội Homeland"
                      href="https://sotaychungcu.com/chi-tiet/546-chung-cu-ha-noi-homeland"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Ha-Noi-Homeland-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Hà Nội Homeland"
                      href="https://sotaychungcu.com/chi-tiet/546-chung-cu-ha-noi-homeland"
                      >Chung cư Hà Nội Homeland</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Roman Plaza"
                      href="https://sotaychungcu.com/chi-tiet/498-chung-cu-roman-plaza"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Roman-Plaza-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Roman Plaza"
                      href="https://sotaychungcu.com/chi-tiet/498-chung-cu-roman-plaza"
                      >Chung cư Roman Plaza</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Sky Central"
                      href="https://sotaychungcu.com/chi-tiet/491-chung-cu-sky-central"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Sky-Central-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Sky Central"
                      href="https://sotaychungcu.com/chi-tiet/491-chung-cu-sky-central"
                      >Chung cư Sky Central</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Imperia Sky Garden"
                      href="https://sotaychungcu.com/chi-tiet/484-chung-cu-imperia-sky-garden"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Imperia-Sky-Garden-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Imperia Sky Garden"
                      href="https://sotaychungcu.com/chi-tiet/484-chung-cu-imperia-sky-garden"
                      >Chung cư Imperia Sky Garden</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư An Bình City"
                      href="https://sotaychungcu.com/chi-tiet/428-chung-cu-an-binh-city"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-An-Binh-City-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư An Bình City"
                      href="https://sotaychungcu.com/chi-tiet/428-chung-cu-an-binh-city"
                      >Chung cư An Bình City</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Imperial Plaza"
                      href="https://sotaychungcu.com/chi-tiet/390-chung-cu-imperial-plaza"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Imperial-Plaza-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Imperial Plaza"
                      href="https://sotaychungcu.com/chi-tiet/390-chung-cu-imperial-plaza"
                      >Chung cư Imperial Plaza</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Hà Nội Paragon"
                      href="https://sotaychungcu.com/chi-tiet/364-chung-cu-ha-noi-paragon"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Ha-Noi-Paragon-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Hà Nội Paragon"
                      href="https://sotaychungcu.com/chi-tiet/364-chung-cu-ha-noi-paragon"
                      >Chung cư Hà Nội Paragon</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Udic Westlake "
                      href="https://sotaychungcu.com/chi-tiet/350-chung-cu-udic-westlake"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Udic-Westlake-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Udic Westlake "
                      href="https://sotaychungcu.com/chi-tiet/350-chung-cu-udic-westlake"
                      >Chung cư Udic Westlake
                    </a>
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Mipec Rubik 360"
                      href="https://sotaychungcu.com/chi-tiet/327-chung-cu-mipec-rubik-360"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Mipec-Rubik-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Mipec Rubik 360"
                      href="https://sotaychungcu.com/chi-tiet/327-chung-cu-mipec-rubik-360"
                      >Chung cư Mipec Rubik 360</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Rivera Park Hà Nội"
                      href="https://sotaychungcu.com/chi-tiet/316-chung-cu-rivera-park-ha-noi"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Rivera-Park-Ha-Noi-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Rivera Park Hà Nội"
                      href="https://sotaychungcu.com/chi-tiet/316-chung-cu-rivera-park-ha-noi"
                      >Chung cư Rivera Park Hà Nội</a
                    >
                  </div>
                </div>
                <div class="row news_right post_hot">
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      title="Chung cư Feliz Homes"
                      href="https://sotaychungcu.com/chi-tiet/300-chung-cu-feliz-homes"
                    >
                      <img
                        class="img-responsive img-hover"
                        src="~/assets/img/webroot/upload/images/images/Hanoi/Chung-cu-Feliz-Homes-01.jpg"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      title="Chung cư Feliz Homes"
                      href="https://sotaychungcu.com/chi-tiet/300-chung-cu-feliz-homes"
                      >Chung cư Feliz Homes</a
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>

          <div class="quangcao"></div>

          <div class="floater" id="my-sticky-element">
            <div id="sidebar-item">
              <div class="bg-gold">
                Tải trọn bộ tài liệu dự án Chung cư Rice City Long Châu
              </div>
              <div class="content">
                <img
                  class="img-responsive"
                  src="~/assets/images/bg-form-sidebar.jpg"
                />

                <form
                  action="https://sotaychungcu.com/dat-hang-nhanh.html"
                  method="post"
                >
                  <div class="form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="exampleInputEmail1"
                      placeholder="Họ tên"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="phone"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Số điện thoại"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="address"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="comment"
                      placeholder="Ý kiến khách hàng"
                      rows="3"
                    ></textarea>
                  </div>
                  <input
                    type="hidden"
                    id="items_name"
                    name="items_name"
                    value="Chung cư Rice City Long Châu"
                  />
                  <input
                    type="hidden"
                    id="items_id"
                    name="items_id"
                    value="727"
                  />
                  <input
                    type="hidden"
                    id="items_price"
                    name="items_price"
                    value=""
                  />
                  <input
                    type="hidden"
                    id="items_url"
                    name="items_url"
                    value="chung-cu-rice-city-long-chau"
                  />
                  <input
                    type="hidden"
                    id="created"
                    name="created"
                    value="1749545418"
                  />
                  <center>
                    <button type="submit" class="btn btn-default">
                      Đăng ký ngay
                    </button>
                  </center>
                </form>
              </div>
            </div>
            <div class="hotline-bottom">
              <div class="text-center">
                <a href="tel:0914.788.345"
                  ><i class="fa fa-phone" aria-hidden="true"></i>
                  0914.788.345</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="head_title2 text-center">
            <p>Dự án cùng khu vực</p>
          </div>
          <div class="linefortitle">
            <span class="icon-linefortitle"><i class="fa fa-star"></i></span>
          </div>
          <div class="home_product">
            <div class="box_cathome">
              <ProjectItem
                v-for="project in projects"
                :key="project.id"
                :project="project"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectItem from "~/components/ProjectItem.vue";
import { onMounted, ref } from "vue";

definePageMeta({
  layout: "default",
});

// Add external CSS and JS
useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://sotaychungcu.com/zoom/css/xzoom.css",
      media: "all",
    },
    {
      rel: "stylesheet",
      href: "https://sotaychungcu.com/zoom/fancybox/source/jquery.fancybox.css",
      media: "all",
    },
    {
      rel: "stylesheet",
      href: "https://sotaychungcu.com/zoom/magnific-popup/css/magnific-popup.css",
      media: "all",
    },
    // Add Font Awesome 6
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      integrity:
        "sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",
      crossorigin: "anonymous",
    },
  ],
  script: [
    { src: "https://code.jquery.com/jquery-3.6.0.min.js" },
    { src: "https://sotaychungcu.com/zoom/js/xzoom.min.js", body: true },
    {
      src: "https://sotaychungcu.com/zoom/fancybox/source/jquery.fancybox.js",
      body: true,
    },
    {
      src: "https://sotaychungcu.com/zoom/magnific-popup/js/magnific-popup.js",
      body: true,
    },
    // Add Font Awesome 6 JS
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js",
      integrity:
        "sha512-GWzVrcGlo0TxTjXO8PkW6ExP+8sNhj7OZIyFcEZ+YbJT5JH4EnN1c0CNqMqxKpqMaT8U+3ydqq8Cy2rrZ/qIHA==",
      crossorigin: "anonymous",
      body: true,
    },
  ],
});

const route = useRoute();
const project = ref(null);

// Main image state
const mainImage = ref(
  "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-01.jpg"
);

// Gallery images
const galleryImages = ref([
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-01.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-03.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-04.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-05.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-06.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-07.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-08.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-09.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-10.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-11.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-12.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
  {
    src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-13.jpg",
    alt: "Chung cư Rice City Long Châu",
  },
]);

const initializeXZoom = () => {
  if (typeof window !== "undefined" && window.jQuery) {
    const $ = window.jQuery;
    $(".xzoom4, .xzoom-gallery4").xzoom({
      tint: "#006699",
      Xoffset: 15,
      position: "lens",
      lensShape: "circle",
      sourceClass: "xzoom-hidden",
    });

    //Integration with fancybox plugin
    $("#xzoom-fancy").bind("click", function (event) {
      var xzoom = $(this).data("xzoom");
      xzoom.closezoom();
      $.fancybox.open(xzoom.gallery().cgallery);
      event.preventDefault();
    });
  }
};

const loadScripts = () => {
  return new Promise((resolve) => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    jqueryScript.onload = () => {
      const xzoomScript = document.createElement("script");
      xzoomScript.src = "https://sotaychungcu.com/zoom/js/xzoom.min.js";
      xzoomScript.onload = () => {
        const fancyboxScript = document.createElement("script");
        fancyboxScript.src =
          "https://sotaychungcu.com/zoom/fancybox/source/jquery.fancybox.js";
        fancyboxScript.onload = () => {
          const magnificScript = document.createElement("script");
          magnificScript.src =
            "https://sotaychungcu.com/zoom/magnific-popup/js/magnific-popup.js";
          magnificScript.onload = () => {
            resolve();
          };
          document.body.appendChild(magnificScript);
        };
        document.body.appendChild(fancyboxScript);
      };
      document.body.appendChild(xzoomScript);
    };
    document.body.appendChild(jqueryScript);
  });
};

onMounted(async () => {
  await loadScripts();
  setTimeout(initializeXZoom, 500); // Add a small delay to ensure DOM is ready
});

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
]);
</script>

<style scoped>
.xzoom-gallery4 {
  border: 1px solid #ccc;
  margin: 5px;
  cursor: pointer;
}

.xzoom-gallery4.xactive {
  border: 1px solid #0275d8;
}

.xzoom-hidden {
  display: none;
}

/* Additional styles for zoom */
.xzoom-lens {
  border: 1px solid #555;
  cursor: crosshair;
}

.xzoom-preview {
  border: 1px solid #888;
  background: #fff;
}

.xzoom-loading {
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 100%;
  opacity: 0.7;
  background: url(../images/xloading.gif);
  width: 48px;
  height: 48px;
}
</style>
