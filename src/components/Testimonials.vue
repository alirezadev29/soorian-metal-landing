<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// لیست نظرات مشتریان (۶ نفر از صنایع مختلف)
const testimonials = [
  {
    name: 'علی رضایی',
    role: 'مدیر کافه رستوران',
    industry: 'رستوران',
    text: 'راستش اولش نگران بودم که استندهای گل با دکور کافه‌م هماهنگ نشه، ولی آقای صوریان خودشون اومدن و اندازه‌گیری کردن. ۲ روز قبل از موعد تحویل دادن و نصبشون هم خیلی تمیز و حرفه‌ای بود. مشتری‌های کافه همیشه از دکور تعریف می‌کنن.',
    rating: 5,
    initial: 'ع'
  },
  {
    name: 'فاطمه احمدی',
    role: 'طراح داخلی',
    industry: 'طراحی داخلی',
    text: 'من با خیلی از تولیدکنندگان فلزی کار کردم ولی اینجا یک چیز متفاوت بود. توضیح دادن که چرا فلان ضخامت بهتره، چرا فلان رنگ ماندگارتره. هیچ‌وقت احساس نکردم فقط میخوان یه سفارش بگیرن و برن. نتیجه کار هم دقیقاً همون چیزی شد که تو ذهنم بود.',
    rating: 5,
    initial: 'ف'
  },
  {
    name: 'محمد کریمی',
    role: 'مدیر کارخانه',
    industry: 'صنعت',
    text: 'برای کارگاهمون چند تا سازه سنگین سفارش دادیم. چیزی که منو جذب کرد، صداقتشون بود. گفتن این مدل به کار شما نمی‌خوره و مدل بهتری پیشنهاد دادن، حتی با قیمت کمتر. تو این بازار که همه دنبال سودن، این برخورد واقعاً ارزشمنده.',
    rating: 5,
    initial: 'م'
  },
  {
    name: 'زهرا موسوی',
    role: 'صاحب بوتیک',
    industry: 'پوشاک',
    text: 'من از شهرستان سفارش دادم و خیلی نگران بودم که قفسه‌ها آسیب ببینن یا رنگشون فرق کنه. ولی هم بسته‌بندی خیلی محکم بود، هم دقیقاً همون رنگی که تو عکس دیده بودم. پیگیری بعد از تحویل هم داشتن، پرسیدن که راضی هستم یا نه. این خیلی کم دیده میشه.',
    rating: 5,
    initial: 'ز'
  },
  {
    name: 'حسین نوری',
    role: 'مدیر فروشگاه لوازم خانگی',
    industry: 'خرده‌فروشی',
    text: 'من معمولاً از هر جایی خرید نمی‌کنم چون تجربه‌های بدی داشتم. ولی اینجا همه چیز شفاف بود. فاکتور رسمی، زمان تحویل دقیق، قیمت بدون چونه. وقتی تحویل دادن، خودشون چک کردن که همه چیز سالم باشه و بعد رفتن. برخوردشون با من مثل یه مشتری معمولی نبود، مثل یه شریک بود.',
    rating: 5,
    initial: 'ح'
  },
  {
    name: 'مریم شریفی',
    role: 'مدیر ساختمان',
    industry: 'املاک',
    text: 'برای لابی ساختمون چند تا نرده و سازه دکوراتیو سفارش دادیم. یه بار وسط کار نظرم عوض شد و خواستم طرح رو تغییر بدم. فکر می‌کردم کلی دردسر بشه، ولی بدون هیچ بحثی قبول کردن و حتی کمک کردن طرح بهتری پیدا کنم. برای منی که کارم با پیمانکار زیاده، این انعطاف خیلی باارزشه.',
    rating: 5,
    initial: 'م'
  }
];

// ایندکس اسلاید فعلی
const currentIndex = ref(0);

// تعداد کارت‌های قابل نمایش همزمان (بر اساس عرض صفحه)
const cardsPerView = ref(1);

// آیا auto-play فعال است
const isPlaying = ref(true);

let timer = null;

// تعداد کل
const total = computed(() => testimonials.length);

// حداکثر ایندکس
const maxIndex = computed(() => Math.max(0, total.value - cardsPerView.value));

// اسلایدهای قابل نمایش
const visibleTestimonials = computed(() => {
  return testimonials.slice(currentIndex.value, currentIndex.value + cardsPerView.value);
});

// رفتن به بعدی
function next() {
  if (currentIndex.value >= maxIndex.value) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
}

// رفتن به قبلی
function prev() {
  if (currentIndex.value <= 0) {
    currentIndex.value = maxIndex.value;
  } else {
    currentIndex.value--;
  }
}

// رفتن به ایندکس خاص
function goTo(index) {
  currentIndex.value = Math.min(index, maxIndex.value);
  resetTimer();
}

// شروع تایمر
function startTimer() {
  stopTimer();
  if (isPlaying.value) {
    timer = setInterval(next, 6000);
  }
}

// توقف تایمر
function stopTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

// ریست تایمر
function resetTimer() {
  startTimer();
}

// توقف/شروع
function togglePlay() {
  isPlaying.value = !isPlaying.value;
  if (isPlaying.value) {
    startTimer();
  } else {
    stopTimer();
  }
}

// مدیریت Hover
function onMouseEnter() {
  stopTimer();
}

function onMouseLeave() {
  if (isPlaying.value) {
    startTimer();
  }
}

// تنظیم تعداد کارت بر اساس عرض صفحه
function updateCardsPerView() {
  const width = window.innerWidth;
  if (width < 768) {
    cardsPerView.value = 1;
  } else if (width < 1024) {
    cardsPerView.value = 2;
  } else {
    cardsPerView.value = 3;
  }
  // اگر ایندکس از حد خارج شد، اصلاح کن
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = 0;
  }
}

// شروع
onMounted(() => {
  updateCardsPerView();
  window.addEventListener('resize', updateCardsPerView);
  startTimer();
});

// پاک‌سازی
onUnmounted(() => {
  stopTimer();
  window.removeEventListener('resize', updateCardsPerView);
});
</script>

<template>
  <section id="testimonials" class="section testimonials">
    <div class="container">
      <h2 class="section-title">
        نظرات <span class="green-text">مشتریان</span>
      </h2>
      <p class="section-subtitle">
        تجربه افرادی که با سورین متال همکاری کرده‌اند
      </p>

      <!-- کاروسل -->
      <div
        class="carousel"
        @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave"
      >
        <!-- ردیف کارت‌ها -->
        <div class="testimonials-row">
          <div
            v-for="(item, index) in visibleTestimonials"
            :key="currentIndex + '-' + index"
            class="testimonial-card"
          >
            <!-- هدر کارت: آواتار حرف + اطلاعات -->
            <div class="card-header">
              <div class="avatar" :data-industry="item.industry">
                <span>{{ item.initial }}</span>
              </div>
              <div class="author-info">
                <h4>{{ item.name }}</h4>
                <p>{{ item.role }}</p>
                <span class="industry-tag">{{ item.industry }}</span>
              </div>
            </div>

            <!-- ستاره‌ها -->
            <div class="rating">
              <span
                v-for="n in 5"
                :key="n"
                :class="['star', { filled: n <= item.rating }]"
              >
                ★
              </span>
            </div>

            <!-- نقل قول -->
            <div class="quote-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 7.5C9.5 6.1 8.4 5 7 5C5.6 5 4.5 6.1 4.5 7.5C4.5 8.9 5.6 10 7 10C7.3 10 7.6 9.9 7.8 9.8C7.5 11 6.5 12 5.3 12.5L6 14C8.5 13 9.5 10.5 9.5 8.5V7.5ZM17.5 7.5C17.5 6.1 16.4 5 15 5C13.6 5 12.5 6.1 12.5 7.5C12.5 8.9 13.6 10 15 10C15.3 10 15.6 9.9 15.8 9.8C15.5 11 14.5 12 13.3 12.5L14 14C16.5 13 17.5 10.5 17.5 8.5V7.5Z" fill="currentColor"/>
              </svg>
            </div>

            <!-- متن -->
            <p class="testimonial-text">{{ item.text }}</p>
          </div>
        </div>

        <!-- دکمه‌های ناوبری -->
        <button
          class="nav-btn nav-prev"
          @click="prev(); resetTimer();"
          aria-label="قبلی"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        </button>
        <button
          class="nav-btn nav-next"
          @click="next(); resetTimer();"
          aria-label="بعدی"
        >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          </svg>
        </button>
      </div>

      <!-- نقطه‌های ناوبری + دکمه play -->
      <div class="carousel-footer">
        <div class="dots">
          <button
            v-for="(item, index) in maxIndex + 1"
            :key="index"
            :class="['dot', { active: index === currentIndex }]"
            @click="goTo(index)"
            :aria-label="`اسلاید ${index + 1}`"
          ></button>
        </div>

        <button
          class="play-btn"
          @click="togglePlay"
          :aria-label="isPlaying ? 'توقف' : 'شروع'"
        >
          <svg v-if="isPlaying" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="5" width="3.5" height="14" rx="1" fill="currentColor"/>
            <rect x="13.5" y="5" width="3.5" height="14" rx="1" fill="currentColor"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5L18 12L8 19V5Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: var(--off-white);
  overflow: hidden;
}

/* کاروسل */
.carousel {
  position: relative;
  padding: 0 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ردیف کارت‌ها */
.testimonials-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  transition: transform 0.5s ease;
}

/* کارت */
.testimonial-card {
  background: var(--white);
  padding: 2rem 1.5rem;
  border-radius: 20px;
  border: 1px solid var(--gray-light);
  position: relative;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  animation: fadeInCard 0.5s ease;
}

.testimonial-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(26, 122, 92, 0.12);
  border-color: var(--green);
}

@keyframes fadeInCard {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* هدر کارت */
.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 1;
}

/* آواتار حرف اول */
.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-dark) 100%);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(26, 122, 92, 0.3);
  font-family: 'Vazirmatn', sans-serif;
}

/* آواتار بر اساس صنعت — رنگ متفاوت */
.avatar[data-industry="رستوران"] {
  background: linear-gradient(135deg, #ef4444, #dc2626);
}

.avatar[data-industry="طراحی داخلی"] {
  background: linear-gradient(135deg, #a855f7, #7e22ce);
}

.avatar[data-industry="صنعت"] {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
}

.avatar[data-industry="پوشاک"] {
  background: linear-gradient(135deg, #ec4899, #be185d);
}

.avatar[data-industry="خرده‌فروشی"] {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.avatar[data-industry="املاک"] {
  background: linear-gradient(135deg, #14b8a6, #0f766e);
}

.author-info {
  text-align: right;
  flex: 1;
}

.author-info h4 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 0.15rem;
}

.author-info p {
  font-size: 0.8rem;
  color: var(--gray);
  margin-bottom: 0.35rem;
}

.industry-tag {
  display: inline-block;
  padding: 0.15rem 0.6rem;
  background: var(--green-light);
  color: var(--green-dark);
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 50px;
}

/* ستاره‌ها */
.rating {
  display: flex;
  gap: 0.15rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.star {
  color: #e5e7eb;
}

.star.filled {
  color: #fbbf24;
}

/* آیکون نقل قول */
.quote-icon {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 32px;
  height: 32px;
  color: var(--green);
  opacity: 0.15;
}

.quote-icon svg {
  width: 100%;
  height: 100%;
}

/* متن */
.testimonial-text {
  font-size: 0.95rem;
  line-height: 1.9;
  color: #374151;
  flex-grow: 1;
  position: relative;
  z-index: 1;
  text-align: justify;
}

/* دکمه‌های ناوبری */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  background: var(--white);
  color: var(--green);
  border: 2px solid var(--green);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 3;
}

.nav-btn svg {
  width: 22px;
  height: 22px;
}

.nav-btn:hover {
  background: var(--green);
  color: var(--white);
  transform: translateY(-50%) scale(1.1);
}

.nav-prev {
  right: 0;
}

.nav-next {
  left: 0;
}

/* فوتر کاروسل */
.carousel-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
  position: relative;
}

/* نقطه‌ها */
.dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--gray-light);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.dot.active {
  background: var(--green);
  width: 28px;
  border-radius: 5px;
}

.dot:hover:not(.active) {
  background: var(--gray);
}

/* دکمه play/pause */
.play-btn {
  width: 36px;
  height: 36px;
  background: var(--green-light);
  color: var(--green);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-btn svg {
  width: 16px;
  height: 16px;
}

.play-btn:hover {
  background: var(--green);
  color: var(--white);
  transform: scale(1.1);
}

/* تبلت */
@media (max-width: 1024px) {
  .carousel {
    padding: 0 2.5rem;
  }
}

/* موبایل */
@media (max-width: 768px) {
  .carousel {
    padding: 0 1rem;
  }

  .testimonials-row {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .testimonial-card {
    padding: 1.5rem 1.25rem;
  }

  .nav-btn {
    width: 38px;
    height: 38px;
  }

  .nav-btn svg {
    width: 18px;
    height: 18px;
  }

  .nav-prev {
    right: -0.5rem;
  }

  .nav-next {
    left: -0.5rem;
  }

  .testimonial-text {
    font-size: 0.9rem;
    line-height: 1.8;
  }

  .avatar {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
}
</style>