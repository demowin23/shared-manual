import { defineNuxtRouteMiddleware, navigateTo } from '#app'

export default defineNuxtRouteMiddleware((to, from) => {
  // Chỉ áp dụng cho các route admin
  if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
    // Kiểm tra token trong localStorage (client-side)
    if (process.client) {
      const token = localStorage.getItem('admin_token')
      const user = localStorage.getItem('admin_user')
      
      if (!token || !user) {
        // Chưa đăng nhập, chuyển hướng đến trang login
        return navigateTo('/admin/login')
      }
    }
  }
  
  // Nếu đã đăng nhập và đang ở trang login, chuyển hướng đến dashboard
  if (to.path === '/admin/login' && process.client) {
    const token = localStorage.getItem('admin_token')
    const user = localStorage.getItem('admin_user')
    
    if (token && user) {
      return navigateTo('/admin/dashboard')
    }
  }
}) 