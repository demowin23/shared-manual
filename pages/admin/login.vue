<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <h1>Admin Panel</h1>
        <p>Đăng nhập để quản lý hệ thống</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Tên đăng nhập</label>
          <input
            id="username"
            v-model="username"
            type="text"
            required
            placeholder="Nhập tên đăng nhập"
            :disabled="isLoading"
          />
        </div>

        <div class="form-group">
          <label for="password">Mật khẩu</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Nhập mật khẩu"
            :disabled="isLoading"
          />
        </div>

        <button type="submit" :disabled="isLoading" class="login-btn">
          <span v-if="isLoading" class="loading-spinner"></span>
          {{ isLoading ? "Đang đăng nhập..." : "Đăng nhập" }}
        </button>
      </form>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");
const isLoading = ref(false);
const error = ref("");

const handleLogin = async () => {
  if (!username.value || !password.value) {
    error.value = "Vui lòng nhập đầy đủ thông tin";
    return;
  }

  isLoading.value = true;
  error.value = "";

  try {
    // Giả lập API call - thay thế bằng API thực tế
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Kiểm tra thông tin đăng nhập (demo: admin/admin)
    if (username.value === "admin" && password.value === "admin123") {
      // Lưu token vào localStorage
      localStorage.setItem("admin_token", "demo_token_123");
      localStorage.setItem(
        "admin_user",
        JSON.stringify({
          username: username.value,
          role: "admin",
        })
      );

      // Chuyển hướng đến trang admin
      router.push("/admin/dashboard");
    } else {
      error.value = "Tên đăng nhập hoặc mật khẩu không đúng";
    }
  } catch (err) {
    error.value = "Có lỗi xảy ra, vui lòng thử lại";
    console.error(err);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.login-header p {
  color: #666;
  font-size: 0.95rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

.form-group input {
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f8f9fa;
}

.form-group input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-message {
  background: #fee;
  color: #c53030;
  padding: 12px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
}

@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
  }

  .login-header h1 {
    font-size: 1.5rem;
  }
}
</style>
