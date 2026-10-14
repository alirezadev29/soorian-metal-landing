<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// آیا دکمه نمایش داده شود؟
const isVisible = ref(false);

// تابع بررسی اسکرول
function handleScroll() {
  // اگر بیش از ۴۰۰ پیکسل اسکرول شد، دکمه را نشان بده
  isVisible.value = window.scrollY > 400;
}

// برگشت به بالا
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// اضافه کردن listener وقتی کامپوننت لود شد
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// حذف listener وقتی کامپوننت نابود شد
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <Transition name="fade">
    <button
      v-if="isVisible"
      class="back-to-top"
      @click="scrollToTop"
      aria-label="بازگشت به بالا"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
        <path
          d="M12 4L12 20M12 4L5 11M12 4L19 11"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
      </svg>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow:
    0 8px 20px rgba(26, 122, 92, 0.35),
    0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-to-top:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow:
    0 12px 28px rgba(26, 122, 92, 0.5),
    0 6px 12px rgba(0, 0, 0, 0.15);
}

.back-to-top:active {
  transform: translateY(-2px) scale(1.02);
}

.arrow-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.back-to-top:hover .arrow-icon {
  transform: translateY(-2px);
}

/* انیمیشن ورود/خروج Vue Transition */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* موبایل */
@media (max-width: 500px) {
  .back-to-top {
    bottom: 5.5rem;
    right: 1.25rem;
    width: 46px;
    height: 46px;
  }

  .arrow-icon {
    width: 20px;
    height: 20px;
  }
}
</style>