<script setup>
const SHOP_URL = 'https://soorianmetal.com/shop/';

const products = [
  {
    title: 'استند گل',
    desc: 'استندهای فلزی مدرن برای نگهداری گل و گیاه با طراحی مینیمال و مقاوم.',
    icon: 'flower'
  },
  {
    title: 'شلف و قفسه',
    desc: 'قفسه‌های دیواری و ایستاده فلزی با طراحی صنعتی و مدرن برای هر فضایی.',
    icon: 'shelf'
  },
  {
    title: 'میز و جلو مبلی',
    desc: 'میزهای فلزی با ترکیب شیشه و چوب، مناسب دکوراسیون داخلی مدرن.',
    icon: 'table'
  },
  {
    title: 'سازه‌های صنعتی',
    desc: 'سازه‌های فلزی صنعتی با کیفیت بالا برای کارخانه‌ها و کارگاه‌ها.',
    icon: 'factory'
  },
  {
    title: 'نرده و حفاظ',
    desc: 'نرده‌های فلزی دکوراتیو برای پله، بالکن و حیاط با طراحی سفارشی.',
    icon: 'fence'
  },
  {
    title: 'سفارشی‌سازی',
    desc: 'طراحی و ساخت محصولات فلزی سفارشی طبق نیاز و سلیقه شما.',
    icon: 'custom'
  }
];
</script>

<template>
  <section id="products" class="section products">
    <div class="container">
      <h2 class="section-title">
        محصولات <span class="green-text">سورین متال</span>
      </h2>
      <p class="section-subtitle">
        انواع محصولات فلزی صنعتی و دکوراتیو با کیفیت بالا و طراحی مدرن
      </p>

      <div class="products-grid">
        <div
          v-for="product in products"
          :key="product.title"
          class="product-card"
        >
          <!-- آیکون SVG -->
          <div class="product-icon">
            <!-- استند گل -->
            <svg v-if="product.icon === 'flower'" viewBox="0 0 64 64" fill="none">
              <rect x="28" y="30" width="8" height="24" rx="2" fill="currentColor" opacity="0.3"/>
              <circle cx="32" cy="20" r="10" fill="currentColor" opacity="0.6"/>
              <circle cx="32" cy="20" r="5" fill="currentColor"/>
              <rect x="20" y="54" width="24" height="4" rx="2" fill="currentColor"/>
            </svg>

            <!-- شلف -->
            <svg v-else-if="product.icon === 'shelf'" viewBox="0 0 64 64" fill="none">
              <rect x="10" y="10" width="44" height="4" rx="1" fill="currentColor"/>
              <rect x="10" y="26" width="44" height="4" rx="1" fill="currentColor"/>
              <rect x="10" y="42" width="44" height="4" rx="1" fill="currentColor"/>
              <rect x="10" y="10" width="4" height="44" rx="1" fill="currentColor" opacity="0.5"/>
              <rect x="50" y="10" width="4" height="44" rx="1" fill="currentColor" opacity="0.5"/>
            </svg>

            <!-- میز -->
            <svg v-else-if="product.icon === 'table'" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="20" width="48" height="4" rx="1" fill="currentColor"/>
              <rect x="12" y="24" width="4" height="30" rx="1" fill="currentColor" opacity="0.6"/>
              <rect x="48" y="24" width="4" height="30" rx="1" fill="currentColor" opacity="0.6"/>
            </svg>

            <!-- کارخانه -->
            <svg v-else-if="product.icon === 'factory'" viewBox="0 0 64 64" fill="none">
              <path d="M8 54 L8 26 L22 36 L22 26 L36 36 L36 20 L56 20 L56 54 Z" fill="currentColor" opacity="0.4"/>
              <rect x="8" y="54" width="48" height="4" fill="currentColor"/>
              <rect x="42" y="36" width="8" height="8" fill="currentColor"/>
            </svg>

            <!-- نرده -->
            <svg v-else-if="product.icon === 'fence'" viewBox="0 0 64 64" fill="none">
              <rect x="8" y="14" width="4" height="42" rx="1" fill="currentColor"/>
              <rect x="24" y="14" width="4" height="42" rx="1" fill="currentColor"/>
              <rect x="40" y="14" width="4" height="42" rx="1" fill="currentColor"/>
              <rect x="52" y="14" width="4" height="42" rx="1" fill="currentColor"/>
              <rect x="6" y="20" width="52" height="3" fill="currentColor" opacity="0.6"/>
              <rect x="6" y="46" width="52" height="3" fill="currentColor" opacity="0.6"/>
            </svg>

            <!-- سفارشی -->
            <svg v-else viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="22" stroke="currentColor" stroke-width="3" fill="none" opacity="0.4"/>
              <path d="M32 18 L32 32 L42 38" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
              <circle cx="32" cy="32" r="4" fill="currentColor"/>
            </svg>
          </div>

          <h3 class="product-title">{{ product.title }}</h3>
          <p class="product-desc">{{ product.desc }}</p>

          <a :href="SHOP_URL" target="_blank" class="product-link">
            مشاهده در فروشگاه ←
          </a>
        </div>
      </div>

      <div class="products-cta">
        <a :href="SHOP_URL" target="_blank" class="btn btn-primary">
          مشاهده همه محصولات
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.products {
  background: var(--white);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.product-card {
  background: var(--white);
  border: 1px solid var(--gray-light);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--green);
}

.product-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  color: var(--green);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green-light);
  border-radius: 50%;
  padding: 18px;
  transition: all 0.3s ease;
}

.product-card:hover .product-icon {
  background: var(--green);
  color: var(--white);
  transform: scale(1.1);
}

.product-icon svg {
  width: 100%;
  height: 100%;
}

.product-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.75rem;
}

.product-desc {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.product-link {
  color: var(--green);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.product-link:hover {
  color: var(--green-dark);
  letter-spacing: 1px;
}

.products-cta {
  text-align: center;
}

@media (max-width: 968px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-card {
    padding: 2rem 1.5rem;
  }
}
</style>