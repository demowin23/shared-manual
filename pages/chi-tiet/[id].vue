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
                <p>{{ project?.name }}</p>
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
                ></div>
              </div>

              <div
                style="float: left"
                class="fb-like fb_iframe_widget fb_iframe_widget_fluid"
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
                  : dadiland@gmail.com
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
                <div class="custom-quill-editor ql-container ql-snow">
                  <div
                    class="ql-editor html-output"
                    data-gramm="false"
                    contenteditable="true"
                  >
                    <div class="html-preview" v-html="project?.detail"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div id="form-project" class="form-project">
                <h4 class="title-form">
                  Tải trọn bộ tài liệu dự án {{ project?.name }}
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
                        src="/images/Em.png"
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
                        src="/images/Ky-gui-nha-dat.jpg"
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
                <div
                  class="row news_right post_hot"
                  v-for="project in projects"
                  :key="project.id"
                >
                  <div class="col-md-12 col-sm-12 col-xs-12 img">
                    <a
                      :title="project.name"
                      :href="`/chi-tiet/${project.id}-${slugify(project.name)}`"
                    >
                      <img
                        class="img-responsive img-hover"
                        :src="`${urlBe}/uploads/${project.images[0]}`"
                    /></a>
                  </div>
                  <div class="col-md-12 col-sm-12 col-xs-12 info">
                    <a
                      :title="project.name"
                      :href="`/chi-tiet/${project.id}-${slugify(project.name)}`"
                      >{{ project.name }}</a
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
                <img class="img-responsive" src="/images/bg-form-sidebar.jpg" />

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

<script>
import ProjectItem from "~/components/ProjectItem.vue";
import { useRoute } from "vue-router";
import { useProjectStore } from "~/store/useProject";

export default {
  components: { ProjectItem },
  data() {
    return {
      project: null,
      idParam: "",
      mainImage: "",
      defaultGallery: [
        {
          src: "https://sotaychungcu.com/img/webroot/upload/images/images/Hanoi/Chung-cu-Rice-City-Long-Chau-01.jpg",
          alt: "Chung cư Rice City Long Châu",
        },
      ],
      projects: [],
    };
  },
  setup() {
    // Remove useNuxtApp from here to avoid composable error
    // Instead, use useRuntimeConfig in a computed or method
    // Or, if you need urlBe, use useRuntimeConfig directly
    // This setup() can be removed if not used for other things
    return {};
  },
  computed: {
    urlBe() {
      // Use useRuntimeConfig here, which is safe in computed
      return useRuntimeConfig().public.URL_BE;
    },
    galleryImages() {
      if (
        this.project &&
        Array.isArray(this.project.images) &&
        this.project.images.length > 0
      ) {
        if (typeof this.project.images[0] === "string") {
          const prefix = `${this.urlBe}/uploads/`;
          return this.project.images.map((img, idx) => ({
            src: prefix + img,
            alt: this.project.name || `Ảnh ${idx + 1}`,
          }));
        }
        return this.project.images;
      }
      return this.defaultGallery;
    },
  },
  watch: {
    galleryImages: {
      handler(newVal) {
        if (newVal.length > 0) {
          this.mainImage = newVal[0].src;
        } else {
          this.mainImage = this.defaultGallery[0].src;
        }
      },
      immediate: true,
    },
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
    async call(id) {
      const store = useProjectStore();
      await store.fetchProjectById(Number(id));
      this.project = store.getProject;
    },
    async loadScripts() {
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
    },
    initializeXZoom() {
      if (typeof window !== "undefined" && window.jQuery) {
        const $ = window.jQuery;
        $(".xzoom4, .xzoom-gallery4").xzoom({
          tint: "#006699",
          Xoffset: 15,
          position: "lens",
          lensShape: "circle",
          sourceClass: "xzoom-hidden",
        });
        $("#xzoom-fancy").bind("click", function (event) {
          var xzoom = $(this).data("xzoom");
          xzoom.closezoom();
          $.fancybox.open(xzoom.gallery().cgallery);
          event.preventDefault();
        });
      }
    },
  },
  async created() {
    const route = useRoute();
    let rawId = route.params.id;
    if (typeof rawId === "string") {
      const match = rawId.match(/^(\d+)/);

      if (match) this.idParam = match[1];
      else this.idParam = rawId;
    } else {
      this.idParam = rawId;
    }
    await this.call(this.idParam);
    const store = useProjectStore();
    await store.fetchProjects();
    this.projects = store.projects;
  },
  async mounted() {
    await this.loadScripts();
    setTimeout(this.initializeXZoom, 500);
  },
};
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
.html-output {
  background: #f6f8fa;
  border-radius: 8px;
  padding: 18px 16px;
  margin-top: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}
.html-output h3 {
  margin-top: 0;
  font-size: 17px;
  color: #333;
}
.html-output pre {
  background: #23272f;
  color: #e6e6e6;
  padding: 10px;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 13px;
  margin-bottom: 12px;
}
</style>
