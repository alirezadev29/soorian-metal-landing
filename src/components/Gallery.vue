<script setup>
const ABOUT_URL = 'https://soorianmetal.com/about/';

// گالری نمونه کارها (با SVG برای دمو)
const galleryItems = [
  { id: 1, title: 'استند گل مدرن', type: 'stand' },
  { id: 2, title: 'قفسه دیواری', type: 'shelf' },
  { id: 3, title: 'میز جلو مبلی', type: 'table' },
  { id: 4, title: 'سازه صنعتی', type: 'factory' },
  { id: 5, title: 'نرده بالکن', type: 'fence' },
  { id: 6, title: 'طراحی سفارشی', type: 'custom' }
];
</script>

<template>
  <section id="gallery" class="section gallery">
    <div class="container">
      <h2 class="section-title">
        نمونه <span class="green-text">کارها</span>
      </h2>
      <p class="section-subtitle">
        بخشی از پروژه‌های انجام‌شده توسط سورین متال
      </p>

      <div class="gallery-grid">
        <div
          v-for="item in galleryItems"
          :key="item.id"
          class="gallery-item"
        >
          <!-- SVG جایگزین تصویر -->
          <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient :id="`grad${item.id}`" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e8f5f0" />
                <stop offset="100%" stop-color="#d1e8df" />
              </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#grad{{item.id}})" />

            <!-- استند گل -->
            <g v-if="item.type === 'stand'" transform="translate(150, 80)">
              <rect x="40" y="80" width="20" height="90" rx="3" fill="#2c3e50"/>
              <circle cx="50" cy="50" r="35" fill="#1a7a5c" opacity="0.7"/>
              <circle cx="50" cy="50" r="20" fill="#1a7a5c"/>
              <rect x="20" y="170" width="60" height="8" rx="2" fill="#2c3e50"/>
            </g>

            <!-- قفسه -->
            <g v-else-if="item.type === 'shelf'" transform="translate(100, 80)">
              <rect x="0" y="20" width="200" height="8" rx="2" fill="#2c3e50"/>
              <rect x="0" y="70" width="200" height="8" rx="2" fill="#2c3e50"/>
              <rect x="0" y="120" width="200" height="8" rx="2" fill="#2c3e50"/>
              <rect x="0" y="20" width="8" height="108" rx="2" fill="#1a7a5c"/>
              <rect x="192" y="20" width="8" height="108" rx="2" fill="#1a7a5c"/>
            </g>

            <!-- میز -->
            <g v-else-if="item.type === 'table'" transform="translate(100, 100)">
              <rect x="0" y="40" width="200" height="10" rx="2" fill="#2c3e50"/>
              <rect x="20" y="50" width="10" height="80" rx="2" fill="#1a7a5c"/>
              <rect x="170" y="50" width="10" height="80" rx="2" fill="#1a7a5c"/>
            </g>

            <!-- کارخانه -->
            <g v-else-if="item.type === 'factory'" transform="translate(80, 100)">
              <path d="M0 100 L0 40 L50 70 L50 40 L100 70 L100 30 L200 30 L200 100 Z" fill="#2c3e50" opacity="0.8"/>
              <rect x="0" y="100" width="200" height="8" fill="#1a7a5c"/>
              <rect x="140" y="60" width="30" height="30" fill="#1a7a5c"/>
            </g>

            <!-- نرده -->
            <g v-else-if="item.type === 'fence'" transform="translate(80, 60)">
              <rect x="0" y="0" width="10" height="180" rx="2" fill="#2c3e50"/>
              <rect x="60" y="0" width="10" height="180" rx="2" fill="#2c3e50"/>
              <rect x="120" y="0" width="10" height="180" rx="2" fill="#2c3e50"/>
              <rect x="180" y="0" width="10" height="180" rx="2" fill="#2c3e50"/>
              <rect x="0" y="20" width="240" height="6" rx="2" fill="#1a7a5c"/>
              <rect x="0" y="150" width="240" height="6" rx="2" fill="#1a7a5c"/>
            </g>

            <!-- سفارشی -->
            <g v-else transform="translate(200, 150)">
              <circle r="60" fill="none" stroke="#1a7a5c" stroke-width="6" opacity="0.4"/>
              <circle r="30" fill="#2c3e50" opacity="0.6"/>
              <circle r="12" fill="#1a7a5c"/>
            </g>
          </svg>

          <div class="gallery-overlay">
            <h3>{{ item.title }}</h3>
            <p>مشاهده جزئیات</p>
          </div>
        </div>
      </div>

      <div class="gallery-cta">
        <a :href="ABOUT_URL" target="_blank" class="btn btn-primary">
          مشاهده همه پروژه‌ها
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  background: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.gallery-item {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.gallery-item svg {
  width: 100%;
  height: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.gallery-item:hover svg {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(26, 122, 92, 0.95), transparent 60%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay h3 {
  color: var(--white);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.gallery-overlay p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
}

.gallery-cta {
  text-align: center;
}

@media (max-width: 968px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>