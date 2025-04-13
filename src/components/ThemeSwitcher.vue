<template>
  <div class="relative">
    <!-- Theme Selector Button - Different style when in NavBar -->
    <button
      @click="toggleThemeSelector"
      :class="[
        navMode
          ? 'px-3 py-2 rounded-lg'
          : 'mt-8 px-5 py-3 rounded-xl shadow-md',
        isOpen ? 'ring-2 ring-(--highlight-color)' : '',
        'bg-(--container-color) text-(--text-color) flex items-center gap-2 transition-all hover:bg-(--accent-color) hover:bg-opacity-20',
      ]"
    >
      <div
        class="w-6 h-6 rounded-full flex items-center justify-center"
        :style="{ backgroundColor: getCurrentTheme().color }"
      >
        <span class="text-xs">{{ getCurrentTheme().emoji }}</span>
      </div>
      <span class="font-medium text-sm" v-if="!navMode">{{
        getCurrentTheme().name
      }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 transition-transform"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        v-if="!navMode"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <!-- Theme Selector Dropdown/Popup -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isOpen"
        :class="[
          navMode ? 'right-0' : '',
          isDarkMode ? 'theme-selector-dark' : '',
          'absolute z-50 mt-2 w-72 max-h-80 overflow-y-auto rounded-xl bg-(--container-color) shadow-xl p-4 theme-selector-popup',
        ]"
        ref="dropdownRef"
      >
        <!-- Search bar for themes -->
        <div class="relative mb-4">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 text-(--text-color) opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Search themes..."
            class="w-full pl-10 pr-4 py-2 rounded-lg bg-(--input-bg) border border-(--input-border) text-(--text-color) text-sm focus:ring-2 focus:ring-(--highlight-color) focus:border-(--highlight-color)"
          />
        </div>

        <!-- Favorites section -->
        <div v-if="favoriteThemes.length > 0" class="mb-4">
          <h3
            class="text-xs uppercase tracking-wider text-(--text-color) opacity-70 mb-2 font-semibold"
          >
            Favorites
          </h3>
          <div class="grid grid-cols-3 gap-2">
            <button
              v-for="theme in favoriteThemes"
              :key="theme.id"
              @click="selectTheme(theme.id)"
              class="p-2 rounded-lg hover:bg-(--accent-color) hover:bg-opacity-30 transition-all flex flex-col items-center"
              :class="{
                'bg-(--accent-color) bg-opacity-20': activeTheme === theme.id,
              }"
            >
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                :style="{ backgroundColor: theme.color }"
              >
                <span class="text-lg">{{ theme.emoji }}</span>
              </div>
              <span
                class="text-xs text-(--text-color) font-medium truncate w-full text-center"
                >{{ theme.name }}</span
              >
            </button>
          </div>
        </div>

        <!-- All themes -->
        <div>
          <h3
            class="text-xs uppercase tracking-wider text-(--text-color) opacity-70 mb-2 font-semibold"
          >
            All Themes
          </h3>
          <div class="grid grid-cols-3 gap-2">
            <div
              v-for="theme in filteredThemes"
              :key="theme.id"
              class="relative group"
            >
              <button
                @click="selectTheme(theme.id)"
                class="theme-item p-2 rounded-lg hover:bg-(--accent-color) hover:bg-opacity-30 transition-all flex flex-col items-center relative"
                :class="{
                  'bg-(--accent-color) bg-opacity-20': activeTheme === theme.id,
                }"
                :title="theme.description"
              >
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center mb-1"
                  :style="{ backgroundColor: theme.color }"
                >
                  <span class="text-lg">{{ theme.emoji }}</span>
                </div>
                <span
                  class="text-xs text-(--text-color) font-medium truncate w-full text-center"
                  >{{ theme.name }}</span
                >
              </button>

              <!-- Favorite star icon -->
              <button
                @click.stop="toggleFavorite(theme.id)"
                class="absolute top-0 right-0 w-6 h-6 opacity-0 group-hover:opacity-100 hover:scale-110 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  :class="
                    isFavorite(theme.id)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-(--text-color) opacity-60'
                  "
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- No search results message -->
        <p
          v-if="filteredThemes.length === 0"
          class="text-center py-4 text-(--text-color) opacity-70"
        >
          No themes match your search
        </p>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";

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
  navMode: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["change-theme"]);

const isOpen = ref(false);
const searchQuery = ref("");
const favorites = ref([]);
const dropdownRef = ref(null);

// Load favorites from localStorage
onMounted(() => {
  try {
    const savedFavorites = localStorage.getItem("themesFavorites");
    if (savedFavorites) {
      favorites.value = JSON.parse(savedFavorites);
    }
  } catch (e) {
    console.error("Error loading favorites:", e);
  }

  // Add click outside listener
  document.addEventListener("mousedown", handleClickOutside);
});

// Remove event listeners
onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

// Handle click outside to close dropdown
const handleClickOutside = (event) => {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target) &&
    isOpen.value
  ) {
    isOpen.value = false;
  }
};

// Toggle dropdown visibility
const toggleThemeSelector = () => {
  isOpen.value = !isOpen.value;

  if (isOpen.value) {
    nextTick(() => {
      // Focus search input when dropdown opens
      const searchInput = dropdownRef.value.querySelector("input");
      if (searchInput) searchInput.focus();
    });
  }
};

// Get current theme
const getCurrentTheme = () => {
  return (
    props.themes.find((theme) => theme.id === props.activeTheme) ||
    props.themes[0]
  );
};

// Filter themes based on search
const filteredThemes = computed(() => {
  if (!searchQuery.value) return props.themes;

  const query = searchQuery.value.toLowerCase();
  return props.themes.filter(
    (theme) =>
      theme.name.toLowerCase().includes(query) ||
      theme.emoji.includes(query) ||
      (theme.description && theme.description.toLowerCase().includes(query))
  );
});

// Favorite themes functionality
const favoriteThemes = computed(() => {
  return props.themes.filter((theme) => favorites.value.includes(theme.id));
});

// Check if theme is favorite
const isFavorite = (themeId) => {
  return favorites.value.includes(themeId);
};

// Toggle favorite status
const toggleFavorite = (themeId) => {
  if (isFavorite(themeId)) {
    favorites.value = favorites.value.filter((id) => id !== themeId);
  } else {
    favorites.value.push(themeId);
  }

  // Save to localStorage
  try {
    localStorage.setItem("themesFavorites", JSON.stringify(favorites.value));
  } catch (e) {
    console.error("Error saving favorites:", e);
  }
};

// Select theme and close dropdown
const selectTheme = (themeId) => {
  emit("change-theme", themeId);
  isOpen.value = false;
};
</script>

<style scoped>
.theme-selector-popup {
  scrollbar-width: thin;
}

.theme-selector-popup::-webkit-scrollbar {
  width: 4px;
}

.theme-selector-popup::-webkit-scrollbar-thumb {
  background-color: var(--accent-color);
  border-radius: 4px;
}

.theme-selector-dark {
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
