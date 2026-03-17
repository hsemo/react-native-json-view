# react-native-json-view

Simple, pure JavaScript formatted JSON view component for React Native.

## Installation

```sh
npm install react-native-json-view
```

or

```sh
yarn add react-native-json-view
```

## Usage

```tsx
import JsonView, { JsonThemeName } from 'react-native-json-view';

const sampleData = {
  name: 'John Doe',
  age: 30,
  active: true,
  hobbies: ['reading', 'coding'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    zip: '12345',
  },
};

export default function App() {
  return (
    <JsonView
      data={sampleData}
      themeName={JsonThemeName.Default}
      fontSize={16}
    />
  );
}
```

## Props

| Prop               | Type             | Default | Description                                              |
| ------------------ | ---------------- | ------- | -------------------------------------------------------- |
| `data`             | `unknown`        | -       | The JSON data to display                                 |
| `themeName`        | `JsonThemeName`  | -       | Predefined theme name (mutually exclusive with `theme`)  |
| `theme`            | `JsonColorTheme` | -       | Custom color theme (mutually exclusive with `themeName`) |
| `collapsed`        | `boolean`        | `false` | Whether to collapse all nodes by default                 |
| `onlyCollapseRoot` | `boolean`        | `false` | Whether to only allow collapsing the root node           |
| `fontSize`         | `number`         | `14`    | Font size for the JSON text                              |
| `indent`           | `number`         | `2`     | Number of spaces for indentation                         |

All other `ScrollView` props are also supported.

## Themes

The component comes with several built-in themes:

- `JsonThemeName.Default` - Clean default theme
- `JsonThemeName.Monokai` - Monokai editor theme
- `JsonThemeName.Solarized` - Solarized color scheme
- `JsonThemeName.Github` - GitHub's syntax highlighting
- `JsonThemeName.Nord` - Nord color palette
- `JsonThemeName.Dracula` - Dracula theme
- `JsonThemeName.OneDark` - One Dark Pro theme
- `JsonThemeName.Catppuccin` - Catppuccin theme
- `JsonThemeName.TokyoNight` - Tokyo Night theme

Each theme supports both light and dark variants.

## Custom Theme

You can also provide a custom theme:

```tsx
const customTheme = {
  light: {
    null: '#ff0000',
    boolean: '#00ff00',
    number: '#0000ff',
    string: '#ff00ff',
    key: '#00ffff',
    bracket: '#888888',
    meta: '#aaaaaa',
    undefined: '#cccccc',
    background: '#ffffff',
  },
  dark: {
    // ... dark variant
  },
};

<JsonView data={data} theme={customTheme} />;
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
