<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// درصد پیشرفت اسکرول (0 تا 100)
const progress = ref(0);

// تابع محاسبه پیشرفت
function updateProgress() {
  // مقدار اسکرول فعلی
  const scrollTop = window.scrollY;

  // ارتفاع کل قابل اسکرول
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // اگر ارتفاع صفر بود (صفحه کوتاه)، صفر بگذار
  if (docHeight <= 0) {
    progress.value = 0;
    return;
  }

  // محاسبه درصد
  const percentage = (scrollTop / docHeight) * 100;

  // محدود کردن بین 0 و 100
  progress.value = Math.min(100, Math.max(0, percentage));
}

// اضافه کردن listener
onMounted(() => {
  window.addEventListener('scroll', updateProgress);
  // یک بار در ابتدا اجرا کن
  updateProgress();
});

// حذف listener
onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress);
});
</script>

<template>
  <div class="progress-bar">
    <div
      class="progress-fill"
      :style="{ transform: `scaleX(${progress / 100})` }"
    ></div>
  </div>
</template>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background: rgba(0, 0, 0, 0.05);
  z-index: 1001;
  pointer-events: none;
}

.progress-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--green) 0%, var(--green-dark) 100%);
  transform-origin: right;   /* چون RTL است، از راست شروع می‌شود */
  transform: scaleX(0);
  transition: transform 0.1s linear;
  box-shadow: 0 0 8px rgba(26, 122, 92, 0.5);
}

/* موبایل */
@media (max-width: 500px) {
  .progress-bar {
    height: 3px;
  }
}
</style>