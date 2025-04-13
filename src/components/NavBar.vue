<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-(--container-color) backdrop-blur-md bg-opacity-90 shadow-sm transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Logo/Brand Section -->
      <div class="flex items-center space-x-2">
        <div
          class="w-8 h-8 rounded-full bg-(--accent-color) flex items-center justify-center shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-[--highlight-color]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <circle cx="12" cy="8" r="5" fill="url(#burstGradient)" />
            <circle cx="9" cy="6" r="1" fill="#ffffff" />
            <circle cx="12" cy="5" r="1" fill="#ffffff" />
            <circle cx="15" cy="6" r="1" fill="#ffffff" />
            <line
              x1="12"
              y1="13"
              x2="12"
              y2="21"
              stroke="currentColor"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="burstGradient"
                x1="7"
                y1="3"
                x2="17"
                y2="13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#A66CFF" />
                <stop offset="0.5" stop-color="#F8F988" />
                <stop offset="1" stop-color="#43E97B" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span class="text-lg font-bold text-(--text-color)">UI Lolli</span>
      </div>

      <!-- Navigation Links (Middle) - You can add more links here if needed -->
      <div class="hidden md:flex items-center space-x-6">
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors"
          >Home</a
        >
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors"
          >Features</a
        >
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors"
          >About</a
        >
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors"
          >Contact</a
        >
      </div>

      <!-- Theme Controls Section -->
      <div class="flex items-center space-x-3">
        <!-- Day/Night Mode Toggle -->
        <button
          @click="toggleDarkMode"
          class="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-(--accent-color) hover:bg-opacity-30 transition-colors"
          :class="{ 'bg-(--accent-color) bg-opacity-20': isDarkMode }"
        >
          <transition name="mode" mode="out-in">
            <!-- Sun icon for light mode -->
            <svg
              v-if="isDarkMode"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-(--text-color)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <!-- Moon icon for dark mode -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-(--text-color)"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </transition>
        </button>

        <!-- Divider -->
        <div class="h-6 w-px bg-(--accent-color) opacity-30"></div>

        <!-- Theme Selector Button -->
        <ThemeSwitcher
          :themes="themes"
          :activeTheme="activeTheme"
          @change-theme="$emit('change-theme', $event)"
          :is-dark-mode="isDarkMode"
          nav-mode
        />

        <!-- Mobile Menu Button (Hamburger) -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-(--accent-color) hover:bg-opacity-30 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-(--text-color)"
            :class="{ hidden: isMenuOpen, block: !isMenuOpen }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-(--text-color)"
            :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (Hidden by default) -->
    <div
      class="md:hidden transition-all duration-300 overflow-hidden"
      :class="{ 'max-h-60 py-3': isMenuOpen, 'max-h-0 py-0': !isMenuOpen }"
    >
      <div class="flex flex-col space-y-3">
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors px-2"
          >Home</a
        >
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors px-2"
          >Features</a
        >
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors px-2"
          >About</a
        >
        <a
          href="#"
          class="text-sm font-medium text-(--text-color) hover:text-(--highlight-color) transition-colors px-2"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue";
import ThemeSwitcher from "./ThemeSwitcher.vue";

// Props
const props = defineProps({
  themes: {
    type: Array,
    required: true,
  },
  activeTheme: {
    type: String,
    default: "default",
  },
  isDarkMode: {
    type: Boolean,
    default: false,
  },
});

// Define emits
const emit = defineEmits(["toggle-dark-mode", "change-theme"]);

// Mobile menu state
const isMenuOpen = ref(false);

// Toggle dark mode
const toggleDarkMode = () => {
  emit("toggle-dark-mode");
};

// Close mobile menu when screen size changes
watch(
  () => window.innerWidth,
  (newWidth) => {
    if (newWidth >= 768) {
      // md breakpoint
      isMenuOpen.value = false;
    }
  }
);

// Add window resize listener
if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      isMenuOpen.value = false;
    }
  });
}
</script>

<style scoped>
.mode-enter-active,
.mode-leave-active {
  transition: all 0.3s ease;
}

.mode-enter-from,
.mode-leave-to {
  opacity: 0;
  transform: rotate(-45deg) scale(0.5);
}
</style>
