import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
// Danh sách menu categories lấy từ Header.vue
const areas = [
  {
    id: 1,
    name: 'Sổ tay Dự án',
    children: [
      {
        id: 2,
        name: 'Dự án Hà Nội',
        children: [
          { id: 3, name: 'Quận Ba Đình' },
          { id: 4, name: 'Quận Hoàn Kiếm' },
          { id: 5, name: 'Quận Hai Bà Trưng' },
          { id: 6, name: 'Quận Đống Đa' },
          { id: 7, name: 'Quận Tây Hồ' },
          { id: 8, name: 'Quận Cầu Giấy' },
          { id: 9, name: 'Quận Thanh Xuân' },
          { id: 10, name: 'Quận Hoàng Mai' },
          { id: 11, name: 'Quận Long Biên' },
          { id: 12, name: 'Quận Nam Từ Liêm' },
          { id: 13, name: 'Quận Bắc Từ Liêm' },
          { id: 14, name: 'Quận Hà Đông' },
          { id: 15, name: 'Huyện Thanh Trì' },
          { id: 16, name: 'Huyện Gia Lâm' },
          { id: 17, name: 'Huyện Đông Anh' },
          { id: 18, name: 'Huyện Sóc Sơn' },
          { id: 19, name: 'Thị xã Sơn Tây' },
          { id: 20, name: 'Huyện Ba Vì' },
          { id: 21, name: 'Huyện Phúc Thọ' },
          { id: 22, name: 'Huyện Đan Phượng' },
          { id: 23, name: 'Huyện Hoài Đức' },
          { id: 24, name: 'Huyện Quốc Oai' },
          { id: 25, name: 'Huyện Thạch Thất' },
          { id: 26, name: 'Huyện Chương Mỹ' },
          { id: 27, name: 'Huyện Thanh Oai' },
          { id: 28, name: 'Huyện Thường Tín' },
          { id: 29, name: 'Huyện Phú Xuyên' },
          { id: 30, name: 'Huyện Ứng Hòa' },
          { id: 31, name: 'Huyện Mỹ Đức' },
          { id: 32, name: 'Huyện Mê Linh' },
        ],
      },
      {
        id: 33,
        name: 'Dự án Sài Gòn',
        children: [
          { id: 34, name: 'Quận 1' },
          { id: 35, name: 'Quận 2' },
          { id: 36, name: 'Quận 3' },
          { id: 37, name: 'Quận 4' },
          { id: 38, name: 'Quận 5' },
          { id: 39, name: 'Quận 6' },
          { id: 40, name: 'Quận 7' },
          { id: 41, name: 'Quận 8' },
          { id: 42, name: 'Quận 9' },
          { id: 43, name: 'Quận 10' },
          { id: 44, name: 'Quận 11' },
          { id: 45, name: 'Quận 12' },
          { id: 46, name: 'Quận Bình Tân' },
          { id: 47, name: 'Quận Bình Thạnh' },
          { id: 48, name: 'Quận Gò Vấp' },
          { id: 49, name: 'Quận Phú Nhuận' },
          { id: 50, name: 'Quận Tân Bình' },
          { id: 51, name: 'Quận Tân Phú' },
          { id: 52, name: 'TP Thủ Đức' },
          { id: 53, name: 'Huyện Bình Chánh' },
          { id: 54, name: 'Huyện Cần Giờ' },
          { id: 55, name: 'Huyện Củ Chi' },
          { id: 56, name: 'Huyện Hóc Môn' },
          { id: 57, name: 'Huyện Nhà Bè' },
        ],
      },
    ],
  },
  {
    id: 58,
    name: 'Sổ Tay Nhà Đất',
    children: [
      {
        id: 59,
        name: 'Nhà đất Đông Bắc',
        children: [
          { id: 60, name: 'Nhà đất Hải Phòng' },
          { id: 61, name: 'Nhà đất Quảng Ninh' },
          { id: 62, name: 'Nhà đất Bắc Ninh' },
          { id: 63, name: 'Nhà đất Bắc Giang' },
          { id: 64, name: 'Nhà đất Hải Dương' },
          { id: 65, name: 'Nhà đất Thái Nguyên' },
          { id: 66, name: 'Nhà đất Vĩnh Phúc' },
          { id: 67, name: 'Nhà đất Hà Nam' },
          { id: 68, name: 'Nhà đất Phú Thọ' },
          { id: 69, name: 'Nhà đất Thái Bình' },
          { id: 70, name: 'Nhà đất Nam Định' },
          { id: 71, name: 'Nhà đất Ninh Bình' },
          { id: 72, name: 'Nhà đất Lạng Sơn' },
          { id: 73, name: 'Nhà đất Cao Bằng' },
          { id: 74, name: 'Nhà đất Tuyên Quang' },
          { id: 75, name: 'Nhà đất Hà Giang' },
          { id: 76, name: 'Nhà đất Bắc Kạn' },
        ],
      },
      {
        id: 77,
        name: 'Nhà đất Tây Bắc',
        children: [
          { id: 78, name: 'Nhà đất Lai Châu' },
          { id: 79, name: 'Nhà đất Hòa Bình' },
          { id: 80, name: 'Nhà đất Lào Cai' },
          { id: 81, name: 'Nhà đất Yên Bái' },
          { id: 82, name: 'Nhà đất Sơn La' },
          { id: 83, name: 'Nhà đất Điện Biên' },
        ],
      },
      {
        id: 84,
        name: 'Nhà đất Bắc Trung Bộ',
        children: [
          { id: 85, name: 'Nhà đất Nghệ An' },
          { id: 86, name: 'Nhà đất Thanh Hóa' },
          { id: 87, name: 'Nhà đất Hà Tĩnh' },
          { id: 88, name: 'Nhà đất Quảng Bình' },
          { id: 89, name: 'Nhà đất Quảng Trị' },
          { id: 90, name: 'Nhà đất Thừa Thiên - Huế' },
        ],
      },
      {
        id: 91,
        name: 'Nhà đất Nam Trung Bộ',
        children: [
          { id: 92, name: 'Nhà đất Đà Nẵng' },
          { id: 93, name: 'Nhà đất Quảng Nam' },
          { id: 94, name: 'Nhà đất Quảng Ngãi' },
          { id: 95, name: 'Nhà đất Bình Định' },
          { id: 96, name: 'Nhà đất Phú Yên' },
          { id: 97, name: 'Nhà đất Khánh Hòa' },
          { id: 98, name: 'Nhà đất Ninh Thuận' },
          { id: 99, name: 'Nhà đất Bình Thuận' },
        ],
      },
      {
        id: 100,
        name: 'Nhà đất Đông Nam Bộ',
        children: [
          { id: 101, name: 'Nhà đất Bình Dương' },
          { id: 102, name: 'Nhà đất Vũng Tàu' },
          { id: 103, name: 'Nhà đất Đồng Nai' },
          { id: 104, name: 'Nhà đất Bà Rịa' },
          { id: 105, name: 'Nhà đất Tây Ninh' },
          { id: 106, name: 'Nhà đất Bình Phước' },
        ],
      },
      {
        id: 107,
        name: 'Nhà đất Tây Nam Bộ',
        children: [
          { id: 108, name: 'Nhà đất Cần Thơ' },
          { id: 109, name: 'Nhà đất Tiền Giang' },
          { id: 110, name: 'Nhà đất Hậu Giang' },
          { id: 111, name: 'Nhà đất Long An' },
          { id: 112, name: 'Nhà đất Trà Vinh' },
          { id: 113, name: 'Nhà đất Sóc Trăng' },
          { id: 114, name: 'Nhà đất Đồng Tháp' },
          { id: 115, name: 'Nhà đất Vĩnh Long' },
          { id: 116, name: 'Nhà đất Bạc Liêu' },
          { id: 117, name: 'Nhà đất Bến Tre' },
          { id: 118, name: 'Nhà đất Cà Mau' },
          { id: 119, name: 'Nhà đất An Giang' },
          { id: 120, name: 'Nhà đất Kiên Giang' },
          { id: 121, name: 'Nhà đất Kiên Giang' },
        ],
      },
      {
        id: 122,
        name: 'Nhà đất Tây Nguyên',
        children: [
          { id: 123, name: 'Nhà đất Kon Tum' },
          { id: 124, name: 'Nhà đất Lâm Đồng' },
          { id: 125, name: 'Nhà đất Gia Lai' },
          { id: 126, name: 'Nhà đất Đắk Lắk' },
          { id: 127, name: 'Nhà đất Đắk Nông' },
        ],
      },
    ],
  },
];

export default defineEventHandler(async (event) => {
  const config = event.context.runtimeConfig || {};
  const urlBe = config.URL_BE || 'https://dadiland.com';

  // Create a new sitemap stream
  const sitemap = new SitemapStream({
    hostname: 'https://dadiland.com'
  })

  // Add static routes
  sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 })
  sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.3 })

  // --- Thêm toàn bộ categories từ menu ---
  function addCategory(area) {
    sitemap.write({
      url: `/du-an/${area.id}-${slugify(area.name)}`,
      changefreq: 'weekly',
      priority: 0.7
    });
    if (Array.isArray(area.children)) {
      for (const child of area.children) {
        addCategory(child);
      }
    }
  }
  for (const area of areas) {
    addCategory(area);
  }

  try {
    const projectsRes = await fetch(`${urlBe}/api/projects?page=1&pageSize=1000`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (projectsRes.ok) {
      const projectsData = await projectsRes.json();
      const projects = projectsData.data || projectsData.items || [];
      for (const project of projects) {
        sitemap.write({
          url: `/chi-tiet/${project.id}-${slugify(project.name)}`,
          changefreq: 'weekly',
          priority: 0.8
        })
      }
    }
  } catch (e) {
    // Nếu lỗi thì bỏ qua
  }

  // --- Thêm toàn bộ tin tức động ---
  try {
    const newsRes = await fetch(`${urlBe}/api/news?page=1&pageSize=1000`);
    if (newsRes.ok) {
      const newsData = await newsRes.json();
      const newsList = newsData.data || newsData.items || [];
      for (const news of newsList) {
        sitemap.write({
          url: `/tin-tuc/${news.id}`,
          changefreq: 'weekly',
          priority: 0.6
        })
      }
    }
  } catch (e) {
    // Nếu lỗi thì bỏ qua
  }

  sitemap.end()

  return streamToPromise(sitemap)
})

// Hàm slugify giống trong code frontend
function slugify(text) {
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
} 