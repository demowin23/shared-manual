<template>
  <div class="admin-layout">
    <!-- Header -->
    <header class="admin-header">
      <div class="header-content">
        <div class="logo">
          <h1>{{ pageTitle || "Admin Panel" }}</h1>
        </div>
        <div class="user-info">
          <span>Xin chào, {{ userInfo.username }}</span>
          <button @click="handleLogout" class="logout-btn">
            <span>Đăng xuất</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="admin-content">
      <!-- Sidebar -->
      <aside class="admin-sidebar">
        <nav class="sidebar-nav">
          <div class="nav-section">
            <h3>Quản lý nội dung</h3>
            <ul>
              <li>
                <NuxtLink
                  to="/admin/dashboard"
                  class="nav-link"
                  active-class="active"
                >
                  <span class="nav-icon">📊</span>
                  Dashboard
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/admin/news"
                  class="nav-link"
                  active-class="active"
                >
                  <span class="nav-icon">📰</span>
                  Tin tức
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/admin/project"
                  class="nav-link"
                  active-class="active"
                >
                  <span class="nav-icon">🏢</span>
                  Dự án
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      <!-- Main Area -->
      <main class="main-area">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const userInfo = ref({});

// Props for page title
const props = defineProps({
  pageTitle: {
    type: String,
    default: "Admin Panel",
  },
});

onMounted(() => {
  // Lấy thông tin user từ localStorage
  const user = localStorage.getItem("admin_user");
  if (user) {
    userInfo.value = JSON.parse(user);
  }
});

const handleLogout = () => {
  localStorage.removeItem("admin_token");
  localStorage.removeItem("admin_user");
  router.push("/admin/login");
};
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background: #f8fafc;
}

.admin-header {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo h1 {
  color: #1e293b;
  font-size: 2.2rem;
  font-weight: 700;
  margin: 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.user-info span {
  color: #64748b;
  font-size: 1.4rem;
}

.logout-btn {
  background: #ef4444;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background 0.2s;
}

.logout-btn:hover {
  background: #dc2626;
}

.admin-content {
  display: flex;
  min-height: calc(100vh - 70px);
}

.admin-sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e2e8f0;
  padding: 24px 0;
}

.sidebar-nav {
  padding: 0 24px;
}

.nav-section h3 {
  color: #64748b;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav li {
  margin-bottom: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  color: #64748b;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s;
  font-size: 1.4rem;
}

.nav-link:hover {
  background: #f1f5f9;
  color: #1e293b;
}

.nav-link.active {
  background: #3b82f6;
  color: white;
}

.nav-icon {
  font-size: 1.6rem;
}

.main-area {
  flex: 1;
  padding: 32px;
}

@media (max-width: 768px) {
  .admin-content {
    flex-direction: column;
  }

  .admin-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }

  .main-area {
    padding: 20px;
  }
}
</style>
