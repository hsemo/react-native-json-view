const JsonViewColors: JsonColorTheme = {
  light: {
    null: '#dc2626',
    boolean: '#ea580c',
    number: '#2563eb',
    string: '#16a34a',
    key: '#9333ea',
    bracket: '#64748b',
    meta: '#94a3b8',
    undefined: '#94a3b8',
    background: '#f8fafc',
  },

  dark: {
    null: '#ef4444',
    boolean: '#f97316',
    number: '#3b82f6',
    string: '#22c55e',
    key: '#a855f7',
    bracket: '#94a3b8',
    meta: '#64748b',
    undefined: '#64748b',
    background: '#0f172a',
  },
} as const;

const MonokaiTheme: JsonColorTheme = {
  light: {
    null: '#d4000f',
    boolean: '#c45a00',
    number: '#6f42c1',
    string: '#8a6800',
    key: '#116329',
    bracket: '#6e7781',
    meta: '#57606a',
    undefined: '#57606a',
    background: '#faf8f2',
  },
  dark: {
    null: '#ff6188',
    boolean: '#fc9867',
    number: '#ab9df2',
    string: '#ffd866',
    key: '#a9dc76',
    bracket: '#939293',
    meta: '#727072',
    undefined: '#727072',
    background: '#2d2a2e',
  },
};

const SolarizedTheme: JsonColorTheme = {
  light: {
    null: '#dc322f',
    boolean: '#cb4b16',
    number: '#d33682',
    string: '#2aa198',
    key: '#268bd2',
    bracket: '#93a1a1',
    meta: '#839496',
    undefined: '#839496',
    background: '#fdf6e3',
  },
  dark: {
    null: '#dc322f',
    boolean: '#cb4b16',
    number: '#d33682',
    string: '#2aa198',
    key: '#268bd2',
    bracket: '#657b83',
    meta: '#586e75',
    undefined: '#586e75',
    background: '#002b36',
  },
};

const GithubTheme: JsonColorTheme = {
  light: {
    null: '#cf222e',
    boolean: '#953800',
    number: '#0550ae',
    string: '#116329',
    key: '#8250df',
    bracket: '#57606a',
    meta: '#6e7781',
    undefined: '#6e7781',
    background: '#ffffff',
  },
  dark: {
    null: '#ff7b72',
    boolean: '#ffa657',
    number: '#79c0ff',
    string: '#a5d6ff',
    key: '#d2a8ff',
    bracket: '#8b949e',
    meta: '#6e7681',
    undefined: '#6e7681',
    background: '#0d1117',
  },
};

const NordTheme: JsonColorTheme = {
  light: {
    null: '#bf616a',
    boolean: '#d08770',
    number: '#5e81ac',
    string: '#4c7a34',
    key: '#3a6ea8',
    bracket: '#7a8699',
    meta: '#9099a6',
    undefined: '#9099a6',
    background: '#eceff4',
  },
  dark: {
    null: '#bf616a',
    boolean: '#d08770',
    number: '#b48ead',
    string: '#a3be8c',
    key: '#81a1c1',
    bracket: '#4c566a',
    meta: '#434c5e',
    undefined: '#434c5e',
    background: '#2e3440',
  },
};

const DraculaTheme: JsonColorTheme = {
  light: {
    null: '#cc1111',
    boolean: '#b35900',
    number: '#7c4dbd',
    string: '#5a7a00',
    key: '#0d7a45',
    bracket: '#6272a4',
    meta: '#7a8599',
    undefined: '#7a8599',
    background: '#f8f8f2',
  },
  dark: {
    null: '#ff5555',
    boolean: '#ffb86c',
    number: '#bd93f9',
    string: '#f1fa8c',
    key: '#50fa7b',
    bracket: '#6272a4',
    meta: '#44475a',
    undefined: '#44475a',
    background: '#282a36',
  },
};

const OneDarkTheme: JsonColorTheme = {
  light: {
    null: '#ca1243',
    boolean: '#b76b00',
    number: '#9b3fa0',
    string: '#4d8c00',
    key: '#0d6abf',
    bracket: '#696c77',
    meta: '#a0a1a7',
    undefined: '#a0a1a7',
    background: '#fafafa',
  },
  dark: {
    null: '#e06c75',
    boolean: '#d19a66',
    number: '#c678dd',
    string: '#98c379',
    key: '#61afef',
    bracket: '#5c6370',
    meta: '#4b5263',
    undefined: '#4b5263',
    background: '#282c34',
  },
};

const CatppuccinTheme: JsonColorTheme = {
  light: {
    null: '#d20f39',
    boolean: '#fe640b',
    number: '#8839ef',
    string: '#40a02b',
    key: '#1e66f5',
    bracket: '#9ca0b0',
    meta: '#bcc0cc',
    undefined: '#bcc0cc',
    background: '#eff1f5',
  },
  dark: {
    null: '#f38ba8',
    boolean: '#fab387',
    number: '#cba6f7',
    string: '#a6e3a1',
    key: '#89b4fa',
    bracket: '#6c7086',
    meta: '#585b70',
    undefined: '#585b70',
    background: '#1e1e2e',
  },
};

const TokyoNightTheme: JsonColorTheme = {
  light: {
    null: '#8c4351',
    boolean: '#965027',
    number: '#5a4a78',
    string: '#485e30',
    key: '#0f4b6e',
    bracket: '#9699a3',
    meta: '#c8ccd4',
    undefined: '#c8ccd4',
    background: '#d5d6db',
  },
  dark: {
    null: '#f7768e',
    boolean: '#ff9e64',
    number: '#bb9af7',
    string: '#9ece6a',
    key: '#7dcfff',
    bracket: '#565f89',
    meta: '#414868',
    undefined: '#414868',
    background: '#1a1b26',
  },
};

export enum JsonThemeName {
  Default = 'default',
  Monokai = 'monokai',
  Solarized = 'solarized',
  Github = 'github',
  Nord = 'nord',
  Dracula = 'dracula',
  OneDark = 'one_dark',
  Catppuccin = 'catppuccin',
  TokyoNight = 'tokyo_night',
}

export const JsonThemes: JsonThemeMap = {
  [JsonThemeName.Monokai]: MonokaiTheme,
  [JsonThemeName.Solarized]: SolarizedTheme,
  [JsonThemeName.Github]: GithubTheme,
  [JsonThemeName.Nord]: NordTheme,
  [JsonThemeName.Dracula]: DraculaTheme,
  [JsonThemeName.OneDark]: OneDarkTheme,
  [JsonThemeName.Catppuccin]: CatppuccinTheme,
  [JsonThemeName.TokyoNight]: TokyoNightTheme,
  [JsonThemeName.Default]: JsonViewColors,
};

export default JsonThemes;
