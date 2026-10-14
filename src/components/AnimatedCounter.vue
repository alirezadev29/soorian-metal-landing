<script setup>
import { ref, onMounted } from 'vue';

// دریافت props از والد
const props = defineProps({
  // عدد نهایی
  end: {
    type: Number,
    required: true
  },
  // مدت زمان انیمیشن (میلی‌ثانیه)
  duration: {
    type: Number,
    default: 2000
  },
  // پیشوند (مثلاً +)
  prefix: {
    type: String,
    default: ''
  },
  // پسوند (مثلاً K یا %)
  suffix: {
    type: String,
    default: ''
  }
});

// مقدار فعلی نمایش داده شده
const currentValue = ref(0);

// تابع انیمیشن
function animate() {
  const startTime = performance.now();
  const endValue = props.end;
  const duration = props.duration;

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing: easeOutCubic (شروع سریع، پایان نرم)
    const eased = 1 - Math.pow(1 - progress, 3);

    // محاسبه مقدار فعلی
    currentValue.value = Math.floor(eased * endValue);

    // اگر تمام نشده، ادامه بده
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      // مقدار نهایی را دقیق تنظیم کن
      currentValue.value = endValue;
    }
  }

  requestAnimationFrame(update);
}

// شروع انیمیشن وقتی کامپوننت لود شد
onMounted(() => {
  animate();
});
</script>

<template>
  <span class="animated-counter">
    {{ prefix }}{{ currentValue }}{{ suffix }}
  </span>
</template>

<style scoped>
.animated-counter {
  display: inline-block;
  font-variant-numeric: tabular-nums;   /* اعداد هم‌عرض (جلوگیری از لرزش) */
}
</style>