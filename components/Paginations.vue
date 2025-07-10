<template>
  <div class="pagination-container">
    <div class="pagination-left">
      <select v-model.number="localPageSize" @change="changePageSize">
        <option v-for="size in pageSizeOptions" :key="size" :value="size">
          {{ size }}
        </option>
      </select>
    </div>
    <div class="pagination-center"></div>
    <div class="pagination-right">
      <button :disabled="page <= 1" @click="changePage(page - 1)">Prev</button>
      <template v-for="p in visiblePages" :key="p">
        <button v-if="p === '...'" class="pagination-ellipsis" disabled>
          ...
        </button>
        <button
          v-else
          :class="['pagination-page', { active: p === page }]"
          @click="changePage(p)"
        >
          {{ p }}
        </button>
      </template>
      <button :disabled="page >= totalPages" @click="changePage(page + 1)">
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
const props = defineProps({
  page: {
    type: Number,
    default: 1,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    default: 0,
  },
  pageSizeOptions: {
    type: Array as () => number[],
    default: () => [10, 20, 50, 100],
  },
});
const totalPages = computed(() =>
  Math.max(1, Math.ceil(props.total / props.pageSize))
);
const emit = defineEmits(["update:page", "update:pageSize"]);
const localPageSize = ref(props.pageSize);

watch(
  () => props.pageSize,
  (val) => {
    localPageSize.value = val;
  }
);

function changePage(newPage: number) {
  if (newPage < 1 || newPage > totalPages.value || newPage === props.page)
    return;
  emit("update:page", newPage);
}
function changePageSize() {
  emit("update:pageSize", localPageSize.value);
}

// Hiển thị các số trang, ...
const visiblePages = computed(() => {
  const pages: (number | string)[] = [];
  const max = totalPages.value;
  const cur = props.page;
  if (max <= 7) {
    for (let i = 1; i <= max; i++) pages.push(i);
  } else {
    if (cur <= 4) {
      pages.push(1, 2, 3, 4, 5, "...", max);
    } else if (cur >= max - 3) {
      pages.push(1, "...", max - 4, max - 3, max - 2, max - 1, max);
    } else {
      pages.push(1, "...", cur - 1, cur, cur + 1, "...", max);
    }
  }
  return pages;
});
</script>

<style scoped>
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 16px 0;
  gap: 0;
}
.pagination-left {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}
.pagination-left select {
  border: 1px solid #1976d2;
  border-radius: 6px;
  padding: 3px 8px;
  font-size: 14px;
  color: #1976d2;
  background: #fff;
  font-weight: 500;
  outline: none;
  min-width: 56px;
  max-width: 70px;
  transition: border 0.2s;
}
.pagination-left select:focus {
  border: 1.5px solid #1565c0;
}
.pagination-center {
  flex: 1 1 auto;
}
.pagination-right {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  gap: 6px;
}
.pagination-right button {
  background: #fff;
  border: 1px solid #1976d2;
  color: #1976d2;
  padding: 5px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.08);
}
.pagination-right button:hover:not(:disabled),
.pagination-right button:focus:not(:disabled) {
  background: #1976d2;
  color: #fff;
}
.pagination-right button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: #f5f5f5;
  color: #aaa;
  border: 1px solid #eee;
}
.pagination-page.active {
  background: #1976d2 !important;
  color: #fff !important;
  border: 1.5px solid #1565c0;
}
.pagination-ellipsis {
  background: transparent !important;
  border: none !important;
  color: #888 !important;
  cursor: default !important;
  box-shadow: none !important;
  font-size: 18px;
  padding: 0 8px;
}
.pagination-right span {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  padding: 0 8px;
}
@media (max-width: 600px) {
  .pagination-container {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
  .pagination-left,
  .pagination-right {
    justify-content: center;
    width: 100%;
  }
  .pagination-right {
    gap: 4px;
  }
}
</style>
