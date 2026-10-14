<script setup>
// شماره تلگرام سورین متال (با + و کد کشور)
const TELEGRAM_NUMBER = '+989023652212';

// لینک تلگرام
const telegramLink = `https://t.me/${TELEGRAM_NUMBER}`;
</script>

<template>
  <a
    :href="telegramLink"
    target="_blank"
    rel="noopener noreferrer"
    class="telegram-btn"
    aria-label="تماس در تلگرام"
  >
    <!-- آیکون SVG تلگرام -->
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="telegram-icon">
      <path
        d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm7.34 10.87l-2.542 11.977c-.19.85-.696 1.06-1.41.66l-3.898-2.873-1.88 1.81c-.208.208-.383.383-.785.383l.28-3.96 7.197-6.5c.313-.278-.068-.432-.485-.154l-8.898 5.605-3.833-1.2c-.833-.26-.85-.833.174-1.234l14.96-5.767c.694-.26 1.302.154 1.078 1.253z"
        fill="currentColor"
      />
    </svg>

    <!-- برچسب متنی -->
    <span class="telegram-label">گفتگو در تلگرام</span>
  </a>
</template>

<style scoped>
.telegram-btn {
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  background: #229ED9;
  color: #fff;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  font-family: 'Vazirmatn', 'Segoe UI', Tahoma, sans-serif;
  box-shadow:
    0 8px 24px rgba(34, 158, 217, 0.4),
    0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: pulse 2s infinite;
}

.telegram-btn:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow:
    0 12px 32px rgba(34, 158, 217, 0.5),
    0 6px 16px rgba(0, 0, 0, 0.2);
  animation-play-state: paused;
}

.telegram-btn:active {
  transform: translateY(-2px) scale(0.98);
}

.telegram-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
}

.telegram-label {
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  transition: max-width 0.3s ease;
}

/* درخشش پالس */
@keyframes pulse {
  0%, 100% {
    box-shadow:
      0 8px 24px rgba(34, 158, 217, 0.4),
      0 0 0 0 rgba(34, 158, 217, 0.7);
  }
  50% {
    box-shadow:
      0 8px 24px rgba(34, 158, 217, 0.4),
      0 0 0 12px rgba(34, 158, 217, 0);
  }
}

/* در موبایل، فقط آیکون */
@media (max-width: 500px) {
  .telegram-btn {
    bottom: 1.25rem;
    left: 1.25rem;
    padding: 0.9rem;
    border-radius: 50%;
  }

  .telegram-label {
    display: none;
  }

  .telegram-icon {
    width: 26px;
    height: 26px;
  }
}
</style>