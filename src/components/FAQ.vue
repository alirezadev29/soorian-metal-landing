<script setup>
import { ref } from 'vue';

// لیست سوالات و پاسخ‌ها
const faqs = [
  {
    id: 1,
    question: 'زمان تحویل محصولات چقدر است؟',
    answer: 'بسته به نوع محصول و حجم سفارش متفاوت است. برای محصولات آماده، بین ۲ تا ۵ روز کاری. برای سفارش‌های سفارشی و بزرگ، بین ۱ تا ۳ هفته. در همه مراحل، زمان دقیق به شما اعلام می‌شود و ما به آن پایبند هستیم.'
  },
  {
    id: 2,
    question: 'امکان ارسال به سراسر کشور وجود دارد؟',
    answer: 'بله. ما به تمام نقاط ایران ارسال داریم. برای شهرهای بزرگ، ارسال با پیک مخصوص و برای سایر شهرها با باربری‌های معتبر. بسته‌بندی محصولات به‌گونه‌ای است که در حین حمل، هیچ آسیبی نبینند و هزینه ارسال قبل از سفارش به‌صورت شفاف اعلام می‌شود.'
  },
  {
    id: 3,
    question: 'آیا محصولات گارانتی دارند؟',
    answer: 'بله. تمام محصولات سورین متال دارای گارانتی رسمی هستند. بسته به نوع محصول، از ۱ تا ۵ سال گارانتی پوشش داده می‌شود. این گارانتی شامل تمام عیوب ساخت و زنگ‌زدگی ناشی از کیفیت مواد اولیه می‌شود.'
  },
  {
    id: 4,
    question: 'امکان سفارشی‌سازی محصولات وجود دارد؟',
    answer: 'قطعاً. بخش بزرگی از کار ما، تولید سفارشی بر اساس نیاز مشتری است. کافی است ابعاد، طرح یا ایده خود را با ما در میان بگذارید. تیم طراحی ما رایگان مشاوره می‌دهد و طرح اولیه را آماده می‌کند تا شما تأیید نهایی را بدهید.'
  },
  {
    id: 5,
    question: 'روش‌های پرداخت چیست؟',
    answer: 'برای سفارش‌های کوچک، پرداخت آنلاین یا کارت‌به‌کارت. برای سفارش‌های بزرگ و سازمانی، امکان پرداخت مرحله‌ای (پیش‌پرداخت و تسویه در حین تحویل) وجود دارد. فاکتور رسمی برای تمام سفارش‌ها صادر می‌شود.'
  },
  {
    id: 6,
    question: 'آیا نصب محصولات هم انجام می‌شود؟',
    answer: 'برای مشتریان داخل مشهد، نصب توسط تیم مجرب ما انجام می‌شود. برای سایر شهرها، راهنمای نصب کامل همراه محصول ارسال می‌شود و در صورت نیاز، از طریق تماس تصویری پشتیبانی می‌کنیم. هدف ما این است که تجربه نصب هم به‌سادگی و درستی انجام شود.'
  },
  {
    id: 7,
    question: 'امکان بازدید حضوری از کارگاه وجود دارد؟',
    answer: 'بله، خوشحال می‌شویم میزبان شما باشیم. کارگاه ما در مشهد، منطقه صنعتی چاهشک واقع شده. با هماهنگی قبلی، می‌توانید از نزدیک فرآیند تولید را ببینید و با تیم ما آشنا شوید. ساعت کاری: شنبه تا چهارشنبه ۹ تا ۱۷، پنجشنبه ۹ تا ۱۳.'
  },
  {
    id: 8,
    question: 'اگر محصول با مشکل مواجه شد، چه کنیم؟',
    answer: 'فقط کافیست با ما تماس بگیرید. تیم پشتیبانی ما در اسرع وقت پاسخ می‌دهد. اگر مشکل در حیطه گارانتی باشد، رفع آن کاملاً رایگان است. اگر خارج از گارانتی باشد، با کمترین هزینه ممکن بازسازی یا تعمیر می‌شود.'
  }
];

// آیتم‌های باز (چند آیتم می‌تواند باز باشد)
const openItems = ref([]);

// بررسی باز بودن
function isOpen(id) {
  return openItems.value.includes(id);
}

// تغییر وضعیت باز/بسته
function toggle(id) {
  if (isOpen(id)) {
    openItems.value = openItems.value.filter(item => item !== id);
  } else {
    openItems.value.push(id);
  }
}
</script>

<template>
  <section id="faq" class="section faq">
    <div class="container">
      <h2 class="section-title">
        سوالات <span class="green-text">متداول</span>
      </h2>
      <p class="section-subtitle">
        پاسخ سوالاتی که بیشتر از ما پرسیده می‌شود
      </p>

      <div class="faq-list">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          :class="['faq-item', { open: isOpen(faq.id) }]"
        >
          <!-- سوال -->
          <button
            class="faq-question"
            @click="toggle(faq.id)"
            :aria-expanded="isOpen(faq.id)"
            :aria-controls="`faq-answer-${faq.id}`"
          >
            <span class="question-text">{{ faq.question }}</span>
            <span class="question-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M5 12H19"
                  stroke="currentColor"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
              </svg>
            </span>
          </button>

          <!-- پاسخ -->
          <div
            :id="`faq-answer-${faq.id}`"
            class="faq-answer"
            :aria-hidden="!isOpen(faq.id)"
          >
            <div class="faq-answer-inner">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA پایین -->
      <div class="faq-cta">
        <p>سوال دیگری داری؟</p>
        <a href="tel:+985135231610" class="btn btn-primary">
          با ما تماس بگیر
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--white);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* آیتم */
.faq-item {
  background: var(--white);
  border: 2px solid var(--gray-light);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: rgba(26, 122, 92, 0.3);
}

.faq-item.open {
  border-color: var(--green);
  box-shadow: 0 10px 30px rgba(26, 122, 92, 0.1);
}

/* سوال */
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--navy);
  text-align: right;
  transition: all 0.3s ease;
}

.faq-item.open .faq-question {
  color: var(--green-dark);
}

.question-text {
  flex: 1;
  line-height: 1.6;
}

/* آیکون + / - */
.question-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--green-light);
  color: var(--green);
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.question-icon svg {
  width: 16px;
  height: 16px;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* وقتی باز شد، آیکون می‌چرخد */
.faq-item.open .question-icon {
  background: var(--green);
  color: var(--white);
  transform: rotate(180deg);
}

/* پاسخ — با CSS Grid Transition */
.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.faq-item.open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-answer-inner {
  overflow: hidden;
}

.faq-answer-inner p {
  padding: 0 1.75rem 1.75rem;
  color: var(--gray);
  line-height: 2;
  font-size: 0.95rem;
  text-align: justify;
  animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* CTA پایین */
.faq-cta {
  text-align: center;
  padding: 2rem;
  background: var(--green-light);
  border-radius: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.faq-cta p {
  font-size: 1.1rem;
  color: var(--navy);
  font-weight: 600;
  margin-bottom: 1rem;
}

/* موبایل */
@media (max-width: 768px) {
  .faq-question {
    padding: 1.25rem 1.25rem;
    font-size: 0.98rem;
  }

  .question-icon {
    width: 28px;
    height: 28px;
  }

  .question-icon svg {
    width: 14px;
    height: 14px;
  }

  .faq-answer-inner p {
    padding: 0 1.25rem 1.25rem;
    font-size: 0.9rem;
    line-height: 1.9;
  }
}
</style>