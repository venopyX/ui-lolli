<template>
  <div
    class="min-h-screen flex flex-col bg-(--bg-color) transition-colors duration-300"
    :class="{ 'dark-mode': isDarkMode }"
  >
    <!-- Navigation Bar -->
    <NavBar
      :themes="themesList"
      :activeTheme="activeTheme"
      :isDarkMode="isDarkMode"
      @toggle-dark-mode="toggleDarkMode"
      @change-theme="setActiveTheme"
    />

    <!-- Login Content -->
    <div
      class="flex-1 flex flex-col items-center justify-center px-4 pt-20 pb-10"
    >
      <!-- Login Container -->
      <div
        class="w-full max-w-md px-8 py-10 rounded-2xl shadow-lg bg-(--container-color) flex flex-col items-center relative overflow-hidden"
      >
        <!-- Decorative Elements -->
        <div
          class="absolute top-0 right-0 h-24 w-24 rounded-full bg-(--accent-color) opacity-20 -translate-y-1/2 translate-x-1/2"
        ></div>
        <div
          class="absolute bottom-0 left-0 h-16 w-16 rounded-full bg-(--highlight-color) opacity-20 translate-y-1/2 -translate-x-1/2"
        ></div>

        <!-- Logo -->
        <div
          class="w-20 h-20 rounded-full mb-6 bg-(--accent-color) flex items-center justify-center shadow-lg floating"
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

        <!-- Welcome Text -->
        <h1 class="text-2xl font-bold mb-1 text-(--text-color)">
          Welcome to UI Lolli
        </h1>
        <p class="text-sm mb-8 opacity-70 text-(--text-color)">
          Enter your credentials to access your account
        </p>

        <!-- Login Form -->
        <form class="w-full" @submit.prevent="handleLogin">
          <!-- Email Input -->
          <div class="mb-5">
            <label
              for="email"
              class="block text-sm font-medium mb-2 text-(--text-color)"
              >Email</label
            >
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-(--accent-color)"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                v-model="email"
                class="w-full px-4 py-3 pl-10 rounded-lg border border-(--input-border) bg-(--input-bg) text-(--text-color)"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-2">
              <label
                for="password"
                class="block text-sm font-medium text-(--text-color)"
                >Password</label
              >
              <a
                href="#"
                class="text-xs text-(--highlight-color) hover:underline"
                >Forgot password?</a
              >
            </div>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-(--accent-color)"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                v-model="password"
                class="w-full px-4 py-3 pl-10 rounded-lg border border-(--input-border) bg-(--input-bg) text-(--text-color)"
                placeholder="••••••••"
              />
            </div>
          </div>

          <!-- Remember Me -->
          <div class="flex items-center mb-6">
            <input
              type="checkbox"
              id="remember"
              v-model="rememberMe"
              class="rounded border-2 border-(--accent-color) text-(--highlight-color) focus:ring-0"
            />
            <label for="remember" class="ml-2 text-sm text-(--text-color)"
              >Remember me</label
            >
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            class="w-full py-3.5 rounded-lg font-medium transition-all duration-300 bg-(--highlight-color) text-white btn-hover"
          >
            Sign in
          </button>

          <!-- Register Link -->
          <p class="text-center mt-6 text-sm text-(--text-color)">
            Don't have an account?
            <a
              href="#"
              class="text-(--highlight-color) font-medium hover:underline"
              >Sign up</a
            >
          </p>
        </form>
      </div>

      <p class="mt-5 text-white text-opacity-70 text-xs">
        Made with ❤️ • Gemechis Chala • @venopyx
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import NavBar from "./NavBar.vue";
import { themes, getThemesList, applyTheme, defaultThemeId } from "./../themes";

// Form data
const email = ref("");
const password = ref("");
const rememberMe = ref(false);

// Theme data - now imported from centralized themes.js
const themesList = getThemesList();
const activeTheme = ref(defaultThemeId);

// Dark mode state
const isDarkMode = ref(false);

// Set theme by applying theme from centralized applyTheme function
const setActiveTheme = (themeId) => {
  activeTheme.value = themeId;
  applyTheme(themeId, isDarkMode.value);

  // Save preference to localStorage
  localStorage.setItem("preferredTheme", themeId);
};

// Toggle dark mode
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  applyTheme(activeTheme.value, isDarkMode.value);

  // Save preference to localStorage
  localStorage.setItem("darkMode", isDarkMode.value ? "enabled" : "disabled");
};

// Handle login submission
const handleLogin = () => {
  // Here you would integrate with your authentication logic
  console.log("Login attempted with:", {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
};

// Load saved preferences on component mount
onMounted(() => {
  // Load theme preference
  const savedTheme = localStorage.getItem("preferredTheme");
  if (savedTheme) {
    activeTheme.value = savedTheme;
  }

  // Load dark mode preference
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode === "enabled") {
    isDarkMode.value = true;
  }

  // Check system preference if no saved preference
  if (
    !savedDarkMode &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    isDarkMode.value = true;
  }

  // Apply theme on initial load
  applyTheme(activeTheme.value, isDarkMode.value);
});

// Watch for system color scheme changes
watch(
  () => isDarkMode.value,
  () => {
    document.body.classList.toggle("dark-mode", isDarkMode.value);
  },
  { immediate: true }
);
</script>

<style>
/* Global CSS for theme transition and animations */
body {
  transition: all 0.3s ease;
  font-family: "Inter", sans-serif;
}

.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
  background-color: var(--button-hover);
}

input {
  transition: all 0.2s ease;
}

input:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--shadow-color);
  border-color: var(--highlight-color);
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating {
  animation: floating 3s ease-in-out infinite;
}
</style>
