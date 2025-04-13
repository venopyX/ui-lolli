/**
 * Themes centralized data file
 * All theme definitions and configurations are stored here
 */

// Theme definitions - each theme has an ID, name, emoji, color, and CSS variables
export const themes = [
  {
    id: "default",
    name: "Cotton Candy",
    emoji: "🌸",
    color: "#F8AFCB",
    description: "Sweet pink theme with soft accents",
    variables: {
      light: {
        "--bg-color": "#F8AFCB",
        "--accent-color": "#FAD4E0",
        "--highlight-color": "#F48DA2",
        "--container-color": "#FFFFFF",
        "--text-color": "#2E2E2E",
        "--input-border": "#FAD4E0",
        "--button-hover": "#F48DA2",
        "--shadow-color": "rgba(248, 175, 203, 0.3)",
        "--input-bg": "#FFFFFF",
      },
      dark: {
        "--accent-color": "#D07A98",
        "--highlight-color": "#CF6A80",
      },
    },
  },
  {
    id: "bubble-pop",
    name: "Bubble Pop",
    emoji: "🫧",
    color: "#FEE3EC",
    description: "Playful pink and blue bubble aesthetic",
    variables: {
      light: {
        "--bg-color": "#FEE3EC",
        "--accent-color": "#B5D9F8",
        "--highlight-color": "#FFB6C1",
        "--container-color": "#FFFFFF",
        "--text-color": "#3A3A3A",
        "--input-border": "#B5D9F8",
        "--button-hover": "#96C7F5",
        "--shadow-color": "rgba(181, 217, 248, 0.4)",
        "--input-bg": "#F8FAFF",
      },
      dark: {
        "--accent-color": "#8BADCD",
        "--highlight-color": "#DC758F",
      },
    },
  },
  {
    id: "lavender-milk",
    name: "Lavender Milk",
    emoji: "🪻",
    color: "#F3E8FF",
    description: "Soothing lavender with gentle purple accents",
    variables: {
      light: {
        "--bg-color": "#F3E8FF",
        "--accent-color": "#D6BBF6",
        "--highlight-color": "#A78BFA",
        "--container-color": "#FFFFFF",
        "--text-color": "#2B2730",
        "--input-border": "#D6BBF6",
        "--button-hover": "#9366F9",
        "--shadow-color": "rgba(167, 139, 250, 0.3)",
        "--input-bg": "#F9F5FF",
      },
      dark: {
        "--accent-color": "#9271D3",
        "--highlight-color": "#7B55D3",
      },
    },
  },
  {
    id: "milky-mocha",
    name: "Milky Mocha",
    emoji: "🧋",
    color: "#F6F0E8",
    description: "Warm coffee-inspired brown tones",
    variables: {
      light: {
        "--bg-color": "#F6F0E8",
        "--accent-color": "#EADAC8",
        "--highlight-color": "#D6BAA3",
        "--container-color": "#FFFFFF",
        "--text-color": "#5C4B3B",
        "--input-border": "#EADAC8",
        "--button-hover": "#C5A88D",
        "--shadow-color": "rgba(214, 186, 163, 0.3)",
        "--input-bg": "#FFFBF7",
      },
      dark: {
        "--accent-color": "#BBA189",
        "--highlight-color": "#A37C5B",
      },
    },
  },
  {
    id: "peach-seafoam",
    name: "Peach Seafoam",
    emoji: "🐚",
    color: "#FFD1DC",
    description: "Beach vibes with peach and teal tones",
    variables: {
      light: {
        "--bg-color": "#FFD1DC",
        "--accent-color": "#C8F2EF",
        "--highlight-color": "#8FCACA",
        "--container-color": "#FFF6F9",
        "--text-color": "#3C3C3C",
        "--input-border": "#C8F2EF",
        "--button-hover": "#77B7B7",
        "--shadow-color": "rgba(143, 202, 202, 0.3)",
        "--input-bg": "#FBFFFE",
      },
      dark: {
        "--accent-color": "#6EB1AF",
        "--highlight-color": "#60999A",
      },
    },
  },
  {
    id: "strawberry-froyo",
    name: "Strawberry Froyo",
    emoji: "🍓",
    color: "#FFC1D3",
    description: "Sweet strawberry and cream shades",
    variables: {
      light: {
        "--bg-color": "#FFC1D3",
        "--accent-color": "#FF6F91",
        "--highlight-color": "#CDA4DE",
        "--container-color": "#FFF0F5",
        "--text-color": "#1A1A1A",
        "--input-border": "#FFADC1",
        "--button-hover": "#BB7FCD",
        "--shadow-color": "rgba(205, 164, 222, 0.4)",
        "--input-bg": "#FFF8FA",
      },
      dark: {
        "--accent-color": "#D35C7C",
        "--highlight-color": "#A758A1",
      },
    },
  },
  {
    id: "blueberry-dream",
    name: "Blueberry Dream",
    emoji: "🫐",
    color: "#D4E5FF",
    description: "Cool blue palette with soft highlights",
    variables: {
      light: {
        "--bg-color": "#D4E5FF",
        "--accent-color": "#94B8FF",
        "--highlight-color": "#5A7FE2",
        "--container-color": "#FFFFFF",
        "--text-color": "#1E293B",
        "--input-border": "#94B8FF",
        "--button-hover": "#4A6FD2",
        "--shadow-color": "rgba(90, 127, 226, 0.3)",
        "--input-bg": "#F5F9FF",
      },
      dark: {
        "--accent-color": "#4A75BD",
        "--highlight-color": "#3D5A8C",
      },
    },
  },
  {
    id: "lemon-sorbet",
    name: "Lemon Sorbet",
    emoji: "🍋",
    color: "#FFFACC",
    description: "Bright and zesty yellow theme",
    variables: {
      light: {
        "--bg-color": "#FFFACC",
        "--accent-color": "#FFF599",
        "--highlight-color": "#FFD166",
        "--container-color": "#FFFFFF",
        "--text-color": "#3D3A25",
        "--input-border": "#FFF599",
        "--button-hover": "#FFCA45",
        "--shadow-color": "rgba(255, 209, 102, 0.3)",
        "--input-bg": "#FFFDF0",
      },
      dark: {
        "--accent-color": "#DDC252",
        "--highlight-color": "#C4A636",
      },
    },
  },
  {
    id: "peach-parfait",
    name: "Peach Parfait",
    emoji: "🍑",
    color: "#FFE4CC",
    description: "Warm peachy tones with orange accents",
    variables: {
      light: {
        "--bg-color": "#FFE4CC",
        "--accent-color": "#FFD1AA",
        "--highlight-color": "#FF9A6C",
        "--container-color": "#FFFFFF",
        "--text-color": "#3D2E28",
        "--input-border": "#FFD1AA",
        "--button-hover": "#FF8754",
        "--shadow-color": "rgba(255, 154, 108, 0.3)",
        "--input-bg": "#FFF8F3",
      },
      dark: {
        "--accent-color": "#E0864E",
        "--highlight-color": "#C56A38",
      },
    },
  },
  {
    id: "matcha-latte",
    name: "Matcha Latte",
    emoji: "🍵",
    color: "#DFF5D7",
    description: "Calming green tea inspired palette",
    variables: {
      light: {
        "--bg-color": "#DFF5D7",
        "--accent-color": "#C5E8B7",
        "--highlight-color": "#8ABD73",
        "--container-color": "#FFFFFF",
        "--text-color": "#2D3B2A",
        "--input-border": "#C5E8B7",
        "--button-hover": "#7AAC63",
        "--shadow-color": "rgba(138, 189, 115, 0.3)",
        "--input-bg": "#F5FDF2",
      },
      dark: {
        "--accent-color": "#609D53",
        "--highlight-color": "#4D7D43",
      },
    },
  },
];

// Base dark mode variables that apply to all themes when in dark mode
export const darkModeBase = {
  "--bg-color": "#1a1a2e",
  "--container-color": "#2a2a40",
  "--text-color": "#e6e6e6",
  "--input-bg": "#22223b",
  "--input-border": "#444464",
  "--shadow-color": "rgba(0, 0, 0, 0.3)",
};

/**
 * Apply theme CSS variables to the document
 * @param {string} themeId - The ID of the theme to apply
 * @param {boolean} isDarkMode - Whether dark mode is active
 */
export function applyTheme(themeId, isDarkMode = false) {
  // Find the selected theme
  const theme = themes.find((t) => t.id === themeId) || themes[0];

  // Get the theme variables
  const baseVars = theme.variables.light;

  // Apply base theme variables
  Object.entries(baseVars).forEach(([key, value]) => {
    document.documentElement.style.setProperty(key, value);
  });

  // If dark mode is active, apply dark mode overrides
  if (isDarkMode) {
    // First apply base dark mode variables
    Object.entries(darkModeBase).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    });

    // Then apply theme-specific dark mode overrides if they exist
    if (theme.variables.dark) {
      Object.entries(theme.variables.dark).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
  }

  // Set the data attributes for CSS selectors
  if (themeId === "default") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", themeId);
  }

  if (isDarkMode) {
    document.documentElement.setAttribute("data-theme-mode", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme-mode");
  }
}

/**
 * Get theme metadata for display without CSS variables
 * Useful for theme selector UI
 */
export function getThemesList() {
  return themes.map(({ id, name, emoji, color, description }) => ({
    id,
    name,
    emoji,
    color,
    description,
  }));
}

/**
 * Get full theme data including CSS variables
 * @param {string} themeId - The ID of the theme to get
 */
export function getThemeData(themeId) {
  return themes.find((t) => t.id === themeId) || themes[0];
}

// Export default theme ID for initial setup
export const defaultThemeId = "default";
