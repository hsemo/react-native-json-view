import type { ScrollViewProps } from 'react-native';
import type { JsonThemeName } from './themes';

declare global {
  interface JsonThemeColors {
    null: string;
    boolean: string;
    number: string;
    string: string;
    key: string;
    bracket: string;
    meta: string;
    undefined: string;
    background: string;
  }

  type JsonColorTheme = Record<'dark' | 'light', JsonThemeColors>;

  type CollapseMap = Record<string, boolean>;

  interface JsonNodeProps<T extends (...args: any) => unknown> {
    data: unknown;
    path?: string;
    keyName?: string;
    collapseMap: CollapseMap;
    onToggle: (path: string) => void;
    styles: ReturnType<T>;
  }

  interface JsonViewBaseProps extends ScrollViewProps {
    data: unknown;
    collapsed?: boolean;
    onlyCollapseRoot?: boolean;
    fontSize?: number;
    indent?: number;
  }

  type JsonViewProps =
    | (JsonViewBaseProps & { themeName: JsonThemeName; theme?: never })
    | (JsonViewBaseProps & { theme: JsonColorTheme; themeName?: never });

  type JsonThemeMap = Record<JsonThemeName, JsonColorTheme>;
}
