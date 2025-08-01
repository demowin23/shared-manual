<template>
  <div class="dashboard-content">
    <div class="dashboard-stats">
      <div class="stat-card">
        <div class="stat-icon">📰</div>
        <div class="stat-content">
          <h3>{{ stats.newsCount }}</h3>
          <p>Tin tức</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🏢</div>
        <div class="stat-content">
          <h3>{{ stats.projectCount }}</h3>
          <p>Dự án</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">👥</div>
        <div class="stat-content">
          <h3>{{ stats.userCount }}</h3>
          <p>Người dùng</p>
        </div>
      </div>
    </div>

    <div class="quick-actions">
      <h2>Thao tác nhanh</h2>
      <div class="action-buttons">
        <button @click="goToAddNews" class="action-btn">
          <span class="btn-icon">➕</span>
          Thêm tin tức mới
        </button>
        <button @click="goToAddProject" class="action-btn">
          <span class="btn-icon">🏗️</span>
          Thêm dự án mới
        </button>
      </div>
    </div>

    <div class="recent-content">
      <h2>Nội dung gần đây</h2>
      <div class="content-list">
        <div v-for="item in recentContent" :key="item.id" class="content-item">
          <div class="item-info">
            <h4>{{ item.title }}</h4>
            <p>{{ item.type }} • {{ formatDate(item.createdAt) }}</p>
          </div>
          <div class="item-actions">
            <button @click="editItem(item)" class="edit-btn">Sửa</button>
            <button @click="deleteItem(item)" class="delete-btn">Xóa</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

// Set page title for admin layout
definePageMeta({
  layout: "admin",
  pageTitle: "Dashboard",
});

const router = useRouter();
const stats = ref({
  newsCount: 0,
  projectCount: 0,
  userCount: 0,
});
const recentContent = ref([]);

onMounted(() => {
  // Load dashboard data
  loadDashboardData();
});

const loadDashboardData = async () => {
  // Giả lập data - thay thế bằng API call thực tế
  stats.value = {
    newsCount: 15,
    projectCount: 8,
    userCount: 1250,
  };

  recentContent.value = [
    {
      id: 1,
      title: "Thị trường bất động sản 2024",
      type: "Tin tức",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Dự án Golden Mansion",
      type: "Dự án",
      createdAt: new Date(Date.now() - 86400000),
    },
    {
      id: 3,
      title: "Hướng dẫn mua nhà lần đầu",
      type: "Wiki BĐS",
      createdAt: new Date(Date.now() - 172800000),
    },
  ];
};

const goToAddNews = () => {
  router.push("/admin/news/add");
};

const goToAddProject = () => {
  router.push("/admin/projects/add");
};

const editItem = (item) => {
  if (item.type === "Tin tức" || item.type === "Wiki BĐS") {
    router.push(`/admin/news/edit/${item.id}`);
  } else {
    router.push(`/admin/projects/edit/${item.id}`);
  }
};

const deleteItem = (item) => {
  if (confirm(`Bạn có chắc muốn xóa "${item.title}"?`)) {
    // Xử lý xóa item
    console.log("Deleting item:", item.id);
  }
};

const formatDate = (date) => {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};
</script>

<style scoped>
.dashboard-content {
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 16px;
  transition: transform 0.2s;
}

.stat-card:hover {
  transform: translateY(-2px);
}

.stat-icon {
  font-size: 2.5rem;
  background: #f1f5f9;
  padding: 12px;
  border-radius: 8px;
}

.stat-content h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 4px 0;
}

.stat-content p {
  color: #64748b;
  margin: 0;
  font-size: 1.4rem;
}

.quick-actions {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.quick-actions h2 {
  color: #1e293b;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}

.action-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1.4rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.action-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 1.6rem;
}

.recent-content {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.recent-content h2 {
  color: #1e293b;
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0 0 20px 0;
}

.content-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.content-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  transition: background 0.2s;
}

.content-item:hover {
  background: #f8fafc;
}

.item-info h4 {
  color: #1e293b;
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.item-info p {
  color: #64748b;
  font-size: 1.2rem;
  margin: 0;
}

.item-actions {
  display: flex;
  gap: 8px;
}

.edit-btn,
.delete-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.2s;
}

.edit-btn {
  background: #10b981;
  color: white;
}

.edit-btn:hover {
  background: #059669;
}

.delete-btn {
  background: #ef4444;
  color: white;
}

.delete-btn:hover {
  background: #dc2626;
}

@media (max-width: 768px) {
  .dashboard-stats {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }

  .content-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
