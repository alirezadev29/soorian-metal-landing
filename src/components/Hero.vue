<script setup>
// لینک‌ها
const SHOP_URL = 'https://soorianmetal.com/shop/';
const PHONE_LINK = 'tel:+985135231610';

// آمار برای نمایش زیر دکمه‌ها
const stats = [
  { number: '+۱۵', label: 'سال تجربه' },
  { number: '+۵۰۰', label: 'پروژه موفق' },
  { number: '+۱۰۰۰', label: 'مشتری راضی' }
];
</script>

<template>
  <section id="home" class="hero">
    <!-- پس‌زمینه تزئینی -->
    <div class="hero-bg"></div>

    <div class="container hero-content">
      <!-- ستون متن -->
      <div class="hero-text">
        <span class="hero-badge">تولیدکننده پیشرو در مشهد</span>

        <h1 class="hero-title">
          سازه‌های فلزی
          <span class="green-text">با کیفیت و طراحی مدرن</span>
        </h1>

        <p class="hero-desc">
          سورین متال، تولیدکننده پیشرو محصولات فلزی صنعتی و دکوراتیو در مشهد.
          با کیفیت، استحکام و طراحی مدرن، همراه مطمئن کسب‌وکارها و خانواده‌ها.
        </p>

        <div class="hero-buttons">
          <a :href="SHOP_URL" target="_blank" class="btn btn-primary">
            مشاهده فروشگاه
            <span class="arrow">←</span>
          </a>
          <a :href="PHONE_LINK" class="btn btn-outline">
            تماس با ما
          </a>
        </div>

        <!-- آمار -->
        <div class="hero-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <h3 class="stat-number">{{ stat.number }}</h3>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- ستون تصویر: SVG داخلی -->
      <div class="hero-image">
        <div class="image-wrapper">
          <svg
            class="hero-svg"
            viewBox="0 0 500 560"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- تعریف گرادیان‌ها -->
            <defs>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e8f5f0" />
                <stop offset="100%" stop-color="#d1e8df" />
              </linearGradient>
              <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#2c3e50" />
                <stop offset="100%" stop-color="#1a252f" />
              </linearGradient>
              <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1a7a5c" />
                <stop offset="100%" stop-color="#145a44" />
              </linearGradient>
            </defs>

            <!-- پس‌زمینه گرد -->
            <rect width="500" height="560" rx="24" fill="url(#bgGrad)" />

            <!-- خطوط شبکه‌ای (پشت صحنه) -->
            <g stroke="#1a7a5c" stroke-width="0.5" opacity="0.1">
              <line x1="0" y1="100" x2="500" y2="100" />
              <line x1="0" y1="200" x2="500" y2="200" />
              <line x1="0" y1="300" x2="500" y2="300" />
              <line x1="0" y1="400" x2="500" y2="400" />
              <line x1="0" y1="500" x2="500" y2="500" />
              <line x1="100" y1="0" x2="100" y2="560" />
              <line x1="200" y1="0" x2="200" y2="560" />
              <line x1="300" y1="0" x2="300" y2="560" />
              <line x1="400" y1="0" x2="400" y2="560" />
            </g>

            <!-- سازه اصلی: قاب فلزی -->
            <g transform="translate(90, 120)">
              <!-- پایه چپ -->
              <rect x="0" y="180" width="80" height="260" rx="4" fill="url(#metalGrad)" />
              <rect x="10" y="190" width="60" height="240" rx="2" fill="#3d5266" opacity="0.6" />

              <!-- قوس بالا (شبیه لوگو) -->
              <path
                d="M 40 180 Q 40 60 160 60 Q 280 60 280 180"
                fill="none"
                stroke="url(#metalGrad)"
                stroke-width="18"
                stroke-linecap="round"
              />

              <!-- ستون وسط -->
              <rect x="120" y="120" width="80" height="320" rx="4" fill="url(#greenGrad)" />
              <rect x="130" y="130" width="60" height="300" rx="2" fill="#1a7a5c" opacity="0.5" />

              <!-- پایه راست -->
              <rect x="240" y="180" width="80" height="260" rx="4" fill="url(#metalGrad)" />
              <rect x="250" y="190" width="60" height="240" rx="2" fill="#3d5266" opacity="0.6" />

              <!-- خطوط افقی (طبقات) -->
              <g stroke="#ffffff" stroke-width="2" opacity="0.3">
                <line x1="0" y1="260" x2="320" y2="260" />
                <line x1="0" y1="340" x2="320" y2="340" />
                <line x1="0" y1="420" x2="320" y2="420" />
              </g>

              <!-- پایه افقی -->
              <rect x="-20" y="440" width="360" height="12" rx="2" fill="url(#metalGrad)" />
            </g>

            <!-- نقطه‌های تزئینی -->
            <circle cx="60" cy="80" r="6" fill="#1a7a5c" opacity="0.4" />
            <circle cx="440" cy="480" r="8" fill="#2c3e50" opacity="0.3" />
            <circle cx="420" cy="90" r="4" fill="#1a7a5c" opacity="0.5" />
          </svg>

          <!-- کارت شناور -->
          <div class="floating-card">
            <div class="card-icon">✓</div>
            <div>
              <h4>کیفیت تضمین‌شده</h4>
              <p>گارانتی محصولات</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ========== بخش اصلی ========== */
.hero {
  position: relative;
  min-height: 100vh;
  padding: 9rem 0 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--white) 0%, var(--green-light) 100%);
}

/* دایره تزئینی پس‌زمینه */
.hero-bg {
  position: absolute;
  top: -200px;
  left: -200px;
  width: 600px;
  height: 600px;
  background: var(--green);
  border-radius: 50%;
  opacity: 0.05;
  z-index: 0;
}

.hero-bg::after {
  content: '';
  position: absolute;
  bottom: -400px;
  right: -400px;
  width: 500px;
  height: 500px;
  background: var(--green);
  border-radius: 50%;
  opacity: 0.06;
}

/* ========== چیدمان دو ستونی ========== */
.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ========== متن ========== */
.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: rgba(26, 122, 92, 0.1);
  color: var(--green);
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(26, 122, 92, 0.2);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.25;
  color: var(--navy);
  margin-bottom: 1.5rem;
}

.hero-title .green-text {
  display: block;
  color: var(--green);
}

.hero-desc {
  font-size: 1.1rem;
  color: var(--gray);
  line-height: 1.9;
  margin-bottom: 2.5rem;
  max-width: 550px;
}

/* ========== دکمه‌ها ========== */
.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.arrow {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.btn-primary:hover .arrow {
  transform: translateX(-5px);
}

/* ========== آمار ========== */
.hero-stats {
  display: flex;
  gap: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--gray-light);
}

.stat-item {
  text-align: right;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: var(--green);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.9rem;
  color: var(--gray);
}

/* ========== تصویر (SVG) ========== */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.hero-svg {
  width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: var(--shadow-lg);
  display: block;
}

/* کارت شناور روی تصویر */
.floating-card {
  position: absolute;
  bottom: 2rem;
  right: -1.5rem;
  background: var(--white);
  padding: 1rem 1.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: var(--shadow-md);
  animation: float 3s ease-in-out infinite;
}

.card-icon {
  width: 45px;
  height: 45px;
  background: var(--green);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: bold;
  flex-shrink: 0;
}

.floating-card h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 2px;
}

.floating-card p {
  font-size: 0.8rem;
  color: var(--gray);
}

/* انیمیشن شناور */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* ========== ریسپانسیو ========== */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .floating-card {
    right: 1rem;
    bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 7rem 0 4rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-desc {
    font-size: 1rem;
  }

  .hero-stats {
    gap: 1.5rem;
    justify-content: space-between;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>