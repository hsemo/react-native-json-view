import { useCallback, useState, useMemo, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';

import makeStyles from './styles';
import JsonThemes, { JsonThemeName } from '../themes';

const DEFAULT_FONT_SIZE = 12;

const InlinePrimitive = ({
  data,
  styles,
}: {
  data: unknown;
  styles: ReturnType<typeof makeStyles>;
}) => {
  if (data === null) return <Text style={styles.nullText}>null</Text>;
  if (typeof data === 'undefined')
    return <Text style={styles.undefinedText}>undefined</Text>;
  if (typeof data === 'boolean')
    return <Text style={styles.booleanText}>{String(data)}</Text>;
  if (typeof data === 'number')
    return <Text style={styles.numberText}>{String(data)}</Text>;
  if (typeof data === 'string')
    return <Text style={styles.stringText}>"{data}"</Text>;
  return null;
};

const JsonNode = ({
  data,
  path = 'root',
  keyName,
  collapseMap,
  onToggle,
  styles,
}: JsonNodeProps<typeof makeStyles>) => {
  const isArray = Array.isArray(data);
  const isObject = typeof data === 'object' && data !== null && !isArray;
  const isCollapsible =
    (isArray || isObject) && Object.keys(data as object).length > 0;

  const openBracket = isArray ? '[' : '{';
  const closeBracket = isArray ? ']' : '}';

  const entries = isArray
    ? (data as unknown[]).map((v, i) => [String(i), v] as [string, unknown])
    : isObject
    ? Object.entries(data as object)
    : [];

  if (!isArray && !isObject) {
    return <InlinePrimitive data={data} styles={styles} />;
  }

  if (!isCollapsible) {
    return (
      <View style={styles.row}>
        {keyName !== undefined && (
          <Text style={styles.keyText}>{keyName}: </Text>
        )}
        <Text style={styles.bracketText}>
          {openBracket}
          {closeBracket}
        </Text>
      </View>
    );
  }

  const collapsed = collapseMap[path];

  return (
    <View>
      <TouchableOpacity
        onPress={() => onToggle(path)}
        activeOpacity={0.7}
        style={styles.row}
      >
        {keyName !== undefined && (
          <Text style={styles.keyText}>{keyName}: </Text>
        )}

        <Text style={styles.chevron}>{collapsed ? '▶ ' : '▼ '}</Text>

        <Text style={styles.bracketText}>{openBracket}</Text>
        {collapsed && (
          <Text style={styles.metaText}>
            {entries.length} {isArray ? 'items' : 'keys'} {closeBracket}
          </Text>
        )}
      </TouchableOpacity>

      {!collapsed && (
        <View style={styles.indent}>
          {entries.map(([key, val]) => {
            const childPath = `${path}.${key}`;
            const isChildObject = typeof val === 'object' && val !== null;

            return (
              <View key={key} style={styles.rowWrap}>
                {isChildObject ? (
                  <JsonNode
                    data={val}
                    path={childPath}
                    keyName={`"${key}"`}
                    collapseMap={collapseMap}
                    onToggle={onToggle}
                    styles={styles}
                  />
                ) : (
                  <>
                    {!isArray && <Text style={styles.keyText}>"{key}": </Text>}
                    <InlinePrimitive data={val} styles={styles} />
                  </>
                )}
              </View>
            );
          })}
        </View>
      )}

      {!collapsed && <Text style={styles.bracketText}>{closeBracket}</Text>}
    </View>
  );
};

const JsonView = ({
  data,
  collapsed,
  onlyCollapseRoot,
  fontSize = DEFAULT_FONT_SIZE,
  theme,
  themeName,
  indent,
  style,
}: JsonViewProps) => {
  const [collapseMap, setCollapseMap] = useState<CollapseMap>({
    root: !!onlyCollapseRoot,
  });

  const scheme = (useColorScheme() ?? 'light') as 'light' | 'dark';

  const styles = useMemo(() => {
    const colors =
      theme?.[scheme] ?? JsonThemes[themeName ?? JsonThemeName.Default][scheme];
    return makeStyles(fontSize, colors, indent);
  }, [fontSize, themeName, theme, indent, scheme]);

  const handleToggle = useCallback(
    (path: string) => {
      const newCollapseMap = {
        ...collapseMap,
        [path]: !collapseMap[path],
      };

      setCollapseMap(newCollapseMap);
    },
    [collapseMap]
  );

  useLayoutEffect(() => {
    if (!collapsed) return;

    const createMap = (o: any, name = 'root', res = {} as CollapseMap) => {
      for (let key in o) {
        const val = o[key];

        const k = name ? `${name}.${key}` : key;
        if (typeof val === 'object') {
          res[k] = true;
          createMap(val, k, res);
        }
      }

      return res;
    };

    const collapseMap = createMap(data);
    setCollapseMap({ ...collapseMap, root: true });
  }, [collapsed, data]);

  return (
    <ScrollView style={[styles.scrollView, style]}>
      <JsonNode
        data={data}
        collapseMap={collapseMap}
        onToggle={handleToggle}
        styles={styles}
      />
    </ScrollView>
  );
};

export default JsonView;
