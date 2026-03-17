import { StyleSheet } from 'react-native';

const makeStyles = (fontSize: number, COLORS: JsonThemeColors, indent = 16) =>
  StyleSheet.create({
    scrollView: {
      maxHeight: 400,
      backgroundColor: COLORS.background,
      padding: 5,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowWrap: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
    },
    indent: {
      paddingLeft: indent,
    },
    nullText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.null,
    },
    booleanText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.boolean,
    },
    numberText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.number,
    },
    stringText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.string,
    },
    undefinedText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.undefined,
    },
    keyText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.key,
    },
    bracketText: {
      fontSize,
      fontFamily: 'ui-monospace',
      color: COLORS.bracket,
    },
    chevron: {
      fontSize: fontSize - 3,
      fontFamily: 'ui-monospace',
      color: COLORS.meta,
      marginLeft: 4,
    },
    metaText: {
      fontSize: fontSize - 2,
      fontFamily: 'ui-monospace',
      color: COLORS.meta,
      marginLeft: 4,
    },
  });

export default makeStyles;
