<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// وضعیت باز/بسته منوی موبایل
const isMenuOpen = ref(false);

// وضعیت اسکرول (برای تغییر ظاهر هدر)
const isScrolled = ref(false);

// آیتم‌های منو
const navLinks = [
  { name: 'خانه', href: '#home' },
  { name: 'محصولات', href: '#products' },
  { name: 'مزایا', href: '#features' },
  { name: 'نمونه کارها', href: '#gallery' },
  { name: 'تماس با ما', href: '#contact' }
];

// لینک‌های خارجی (سایت اصلی و فروشگاه)
const SHOP_URL = 'https://soorianmetal.com/shop/';
const MAIN_URL = 'https://soorianmetal.com/';

// تابع باز/بسته کردن منو
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

// تابع بستن منو وقتی روی لینک کلیک شد
function closeMenu() {
  isMenuOpen.value = false;
}

// تشخیص اسکرول
function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

// اضافه کردن event listener وقتی کامپوننت لود شد
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

// حذف event listener وقتی کامپوننت نابود شد
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="container header-content">
      <!-- لوگو -->
      <a href="#home" class="logo" @click="closeMenu">
        <span class="logo-text">SOORIAN</span>
        <span class="logo-sub">METAL</span>
      </a>

      <!-- منوی دسکتاپ + موبایل -->
      <nav :class="['nav', { open: isMenuOpen }]">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="nav-link"
          @click="closeMenu"
        >
          {{ link.name }}
        </a>

        <!-- دکمه فروشگاه داخل منو (فقط موبایل) -->
        <a :href="SHOP_URL" target="_blank" class="btn btn-primary mobile-shop-btn">
          مشاهده فروشگاه
        </a>
      </nav>

      <!-- دکمه فروشگاه (فقط دسکتاپ) -->
      <a :href="SHOP_URL" target="_blank" class="btn btn-primary desktop-shop-btn">
        مشاهده فروشگاه
      </a>

      <!-- دکمه همبرگری موبایل -->
      <button class="hamburger" @click="toggleMenu" aria-label="منو">
        <span :class="['bar', { open: isMenuOpen }]"></span>
        <span :class="['bar', { open: isMenuOpen }]"></span>
        <span :class="['bar', { open: isMenuOpen }]"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
/* ========== هدر اصلی ========== */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.25rem 0;
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow-sm);
  padding: 0.75rem 0;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ========== لوگو ========== */
.logo {
  display: flex;
  flex-direction: column;
  line-height: 1;
  text-decoration: none;
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: var(--navy);
}

.logo-sub {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 6px;
  color: var(--green);
  margin-top: 2px;
}

/* ========== منو ========== */
.nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--navy);
  position: relative;
  transition: color 0.3s;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--green);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--green);
}

.nav-link:hover::after {
  width: 100%;
}

/* ========== دکمه فروشگاه ========== */
.desktop-shop-btn {
  padding: 0.65rem 1.5rem;
  font-size: 0.9rem;
}

.mobile-shop-btn {
  display: none;
}

/* ========== همبرگر ========== */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 30px;
  padding: 5px 0;
}

.bar {
  width: 100%;
  height: 2.5px;
  background: var(--navy);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.bar.open:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

/* ========== ریسپانسیو ========== */
@media (max-width: 900px) {
  .nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--white);
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 6rem 2rem 2rem;
    gap: 1.5rem;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
    transition: right 0.4s ease;
  }

  .nav.open {
    right: 0;
  }

  .nav-link {
    font-size: 1.1rem;
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--gray-light);
  }

  .mobile-shop-btn {
    display: inline-flex;
    width: 100%;
    justify-content: center;
    margin-top: 1rem;
  }

  .desktop-shop-btn {
    display: none;
  }

  .hamburger {
    display: flex;
    z-index: 1001;
  }
}
</style>