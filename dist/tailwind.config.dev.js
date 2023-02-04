"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  presets: [],
  darkMode: 'media',
  // or 'class'
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      '2xl': '1536px'
    },
    supports: {},
    colors: function colors(_ref) {
      var _colors = _ref.colors;
      return {
        inherit: _colors.inherit,
        current: _colors.current,
        transparent: _colors.transparent,
        black: _colors.black,
        white: _colors.white,
        slate: _colors.slate,
        gray: _colors.gray,
        zinc: _colors.zinc,
        neutral: _colors.neutral,
        stone: _colors.stone,
        red: _colors.red,
        orange: _colors.orange,
        amber: _colors.amber,
        yellow: _colors.yellow,
        lime: _colors.lime,
        green: _colors.green,
        emerald: _colors.emerald,
        teal: _colors.teal,
        cyan: _colors.cyan,
        sky: _colors.sky,
        blue: _colors.blue,
        indigo: _colors.indigo,
        violet: _colors.violet,
        purple: _colors.purple,
        fuchsia: _colors.fuchsia,
        pink: _colors.pink,
        rose: _colors.rose
      };
    },
    columns: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      '3xs': '16rem',
      '2xs': '18rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem'
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite'
    },
    aria: {
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9'
    },
    backdropBlur: function backdropBlur(_ref2) {
      var theme = _ref2.theme;
      return theme('blur');
    },
    backdropBrightness: function backdropBrightness(_ref3) {
      var theme = _ref3.theme;
      return theme('brightness');
    },
    backdropContrast: function backdropContrast(_ref4) {
      var theme = _ref4.theme;
      return theme('contrast');
    },
    backdropGrayscale: function backdropGrayscale(_ref5) {
      var theme = _ref5.theme;
      return theme('grayscale');
    },
    backdropHueRotate: function backdropHueRotate(_ref6) {
      var theme = _ref6.theme;
      return theme('hueRotate');
    },
    backdropInvert: function backdropInvert(_ref7) {
      var theme = _ref7.theme;
      return theme('invert');
    },
    backdropOpacity: function backdropOpacity(_ref8) {
      var theme = _ref8.theme;
      return theme('opacity');
    },
    backdropSaturate: function backdropSaturate(_ref9) {
      var theme = _ref9.theme;
      return theme('saturate');
    },
    backdropSepia: function backdropSepia(_ref10) {
      var theme = _ref10.theme;
      return theme('sepia');
    },
    backgroundColor: function backgroundColor(_ref11) {
      var theme = _ref11.theme;
      return theme('colors');
    },
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--tw-gradient-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--tw-gradient-stops))'
    },
    backgroundOpacity: function backgroundOpacity(_ref12) {
      var theme = _ref12.theme;
      return theme('opacity');
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },
    blur: {
      0: '0',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '40px',
      '3xl': '64px'
    },
    brightness: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5',
      200: '2'
    },
    borderColor: function borderColor(_ref13) {
      var theme = _ref13.theme;
      return _objectSpread({}, theme('colors'), {
        DEFAULT: theme('colors.gray.200', 'currentColor')
      });
    },
    borderOpacity: function borderOpacity(_ref14) {
      var theme = _ref14.theme;
      return theme('opacity');
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px'
    },
    borderSpacing: function borderSpacing(_ref15) {
      var theme = _ref15.theme;
      return _objectSpread({}, theme('spacing'));
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none'
    },
    boxShadowColor: function boxShadowColor(_ref16) {
      var theme = _ref16.theme;
      return theme('colors');
    },
    caretColor: function caretColor(_ref17) {
      var theme = _ref17.theme;
      return theme('colors');
    },
    accentColor: function accentColor(_ref18) {
      var theme = _ref18.theme;
      return _objectSpread({}, theme('colors'), {
        auto: 'auto'
      });
    },
    contrast: {
      0: '0',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      200: '2'
    },
    container: {},
    content: {
      none: 'none'
    },
    cursor: {
      auto: 'auto',
      "default": 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      help: 'help',
      'not-allowed': 'not-allowed',
      none: 'none',
      'context-menu': 'context-menu',
      progress: 'progress',
      cell: 'cell',
      crosshair: 'crosshair',
      'vertical-text': 'vertical-text',
      alias: 'alias',
      copy: 'copy',
      'no-drop': 'no-drop',
      grab: 'grab',
      grabbing: 'grabbing',
      'all-scroll': 'all-scroll',
      'col-resize': 'col-resize',
      'row-resize': 'row-resize',
      'n-resize': 'n-resize',
      'e-resize': 'e-resize',
      's-resize': 's-resize',
      'w-resize': 'w-resize',
      'ne-resize': 'ne-resize',
      'nw-resize': 'nw-resize',
      'se-resize': 'se-resize',
      'sw-resize': 'sw-resize',
      'ew-resize': 'ew-resize',
      'ns-resize': 'ns-resize',
      'nesw-resize': 'nesw-resize',
      'nwse-resize': 'nwse-resize',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out'
    },
    divideColor: function divideColor(_ref19) {
      var theme = _ref19.theme;
      return theme('borderColor');
    },
    divideOpacity: function divideOpacity(_ref20) {
      var theme = _ref20.theme;
      return theme('borderOpacity');
    },
    divideWidth: function divideWidth(_ref21) {
      var theme = _ref21.theme;
      return theme('borderWidth');
    },
    dropShadow: {
      sm: '0 1px 1px rgb(0 0 0 / 0.05)',
      DEFAULT: ['0 1px 2px rgb(0 0 0 / 0.1)', '0 1px 1px rgb(0 0 0 / 0.06)'],
      md: ['0 4px 3px rgb(0 0 0 / 0.07)', '0 2px 2px rgb(0 0 0 / 0.06)'],
      lg: ['0 10px 8px rgb(0 0 0 / 0.04)', '0 4px 3px rgb(0 0 0 / 0.1)'],
      xl: ['0 20px 13px rgb(0 0 0 / 0.03)', '0 8px 5px rgb(0 0 0 / 0.08)'],
      '2xl': '0 25px 25px rgb(0 0 0 / 0.15)',
      none: '0 0 #0000'
    },
    fill: function fill(_ref22) {
      var theme = _ref22.theme;
      return _objectSpread({
        none: 'none'
      }, theme('colors'));
    },
    grayscale: {
      0: '0',
      DEFAULT: '100%'
    },
    hueRotate: {
      0: '0deg',
      15: '15deg',
      30: '30deg',
      60: '60deg',
      90: '90deg',
      180: '180deg'
    },
    invert: {
      0: '0',
      DEFAULT: '100%'
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexBasis: function flexBasis(_ref23) {
      var theme = _ref23.theme;
      return _objectSpread({
        auto: 'auto'
      }, theme('spacing'), {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%'
      });
    },
    flexGrow: {
      0: '0',
      DEFAULT: '1'
    },
    flexShrink: {
      0: '0',
      DEFAULT: '1'
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
    },
    fontSize: {
      xs: ['0.75rem', {
        lineHeight: '1rem'
      }],
      sm: ['0.875rem', {
        lineHeight: '1.25rem'
      }],
      base: ['1rem', {
        lineHeight: '1.5rem'
      }],
      lg: ['1.125rem', {
        lineHeight: '1.75rem'
      }],
      xl: ['1.25rem', {
        lineHeight: '1.75rem'
      }],
      '2xl': ['1.5rem', {
        lineHeight: '2rem'
      }],
      '3xl': ['1.875rem', {
        lineHeight: '2.25rem'
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.5rem'
      }],
      '5xl': ['3rem', {
        lineHeight: '1'
      }],
      '6xl': ['3.75rem', {
        lineHeight: '1'
      }],
      '7xl': ['4.5rem', {
        lineHeight: '1'
      }],
      '8xl': ['6rem', {
        lineHeight: '1'
      }],
      '9xl': ['8rem', {
        lineHeight: '1'
      }]
    },
    fontWeight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900'
    },
    gap: function gap(_ref24) {
      var theme = _ref24.theme;
      return theme('spacing');
    },
    gradientColorStops: function gradientColorStops(_ref25) {
      var theme = _ref25.theme;
      return theme('colors');
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1'
    },
    gridColumnEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridColumnStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13'
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1'
    },
    gridRowStart: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7'
    },
    gridRowEnd: {
      auto: 'auto',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7'
    },
    gridTemplateColumns: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      7: 'repeat(7, minmax(0, 1fr))',
      8: 'repeat(8, minmax(0, 1fr))',
      9: 'repeat(9, minmax(0, 1fr))',
      10: 'repeat(10, minmax(0, 1fr))',
      11: 'repeat(11, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))'
    },
    gridTemplateRows: {
      none: 'none',
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      5: 'repeat(5, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))'
    },
    height: function height(_ref26) {
      var theme = _ref26.theme;
      return _objectSpread({
        auto: 'auto'
      }, theme('spacing'), {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        full: '100%',
        screen: '100vh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      });
    },
    inset: function inset(_ref27) {
      var theme = _ref27.theme;
      return _objectSpread({
        auto: 'auto'
      }, theme('spacing'), {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%'
      });
    },
    keyframes: {
      spin: {
        to: {
          transform: 'rotate(360deg)'
        }
      },
      ping: {
        '75%, 100%': {
          transform: 'scale(2)',
          opacity: '0'
        }
      },
      pulse: {
        '50%': {
          opacity: '.5'
        }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
        }
      }
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: function margin(_ref28) {
      var theme = _ref28.theme;
      return _objectSpread({
        auto: 'auto'
      }, theme('spacing'));
    },
    maxHeight: function maxHeight(_ref29) {
      var theme = _ref29.theme;
      return _objectSpread({}, theme('spacing'), {
        full: '100%',
        screen: '100vh',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      });
    },
    maxWidth: function maxWidth(_ref30) {
      var theme = _ref30.theme,
          breakpoints = _ref30.breakpoints;
      return _objectSpread({
        none: 'none',
        0: '0rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '7xl': '80rem',
        full: '100%',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content',
        prose: '65ch'
      }, breakpoints(theme('screens')));
    },
    minHeight: {
      0: '0px',
      full: '100%',
      screen: '100vh',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content'
    },
    minWidth: {
      0: '0px',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      fit: 'fit-content'
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      0: '0',
      5: '0.05',
      10: '0.1',
      20: '0.2',
      25: '0.25',
      30: '0.3',
      40: '0.4',
      50: '0.5',
      60: '0.6',
      70: '0.7',
      75: '0.75',
      80: '0.8',
      90: '0.9',
      95: '0.95',
      100: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12'
    },
    padding: function padding(_ref31) {
      var theme = _ref31.theme;
      return theme('spacing');
    },
    placeholderColor: function placeholderColor(_ref32) {
      var theme = _ref32.theme;
      return theme('colors');
    },
    placeholderOpacity: function placeholderOpacity(_ref33) {
      var theme = _ref33.theme;
      return theme('opacity');
    },
    outlineColor: function outlineColor(_ref34) {
      var theme = _ref34.theme;
      return theme('colors');
    },
    outlineOffset: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    outlineWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    ringColor: function ringColor(_ref35) {
      var theme = _ref35.theme;
      return _objectSpread({
        DEFAULT: theme('colors.blue.500', '#3b82f6')
      }, theme('colors'));
    },
    ringOffsetColor: function ringOffsetColor(_ref36) {
      var theme = _ref36.theme;
      return theme('colors');
    },
    ringOffsetWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    ringOpacity: function ringOpacity(_ref37) {
      var theme = _ref37.theme;
      return _objectSpread({
        DEFAULT: '0.5'
      }, theme('opacity'));
    },
    ringWidth: {
      DEFAULT: '3px',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    rotate: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg',
      45: '45deg',
      90: '90deg',
      180: '180deg'
    },
    saturate: {
      0: '0',
      50: '.5',
      100: '1',
      150: '1.5',
      200: '2'
    },
    scale: {
      0: '0',
      50: '.5',
      75: '.75',
      90: '.9',
      95: '.95',
      100: '1',
      105: '1.05',
      110: '1.1',
      125: '1.25',
      150: '1.5'
    },
    scrollMargin: function scrollMargin(_ref38) {
      var theme = _ref38.theme;
      return _objectSpread({}, theme('spacing'));
    },
    scrollPadding: function scrollPadding(_ref39) {
      var theme = _ref39.theme;
      return theme('spacing');
    },
    sepia: {
      0: '0',
      DEFAULT: '100%'
    },
    skew: {
      0: '0deg',
      1: '1deg',
      2: '2deg',
      3: '3deg',
      6: '6deg',
      12: '12deg'
    },
    space: function space(_ref40) {
      var theme = _ref40.theme;
      return _objectSpread({}, theme('spacing'));
    },
    stroke: function stroke(_ref41) {
      var theme = _ref41.theme;
      return _objectSpread({
        none: 'none'
      }, theme('colors'));
    },
    strokeWidth: {
      0: '0',
      1: '1',
      2: '2'
    },
    textColor: function textColor(_ref42) {
      var theme = _ref42.theme;
      return theme('colors');
    },
    textDecorationColor: function textDecorationColor(_ref43) {
      var theme = _ref43.theme;
      return theme('colors');
    },
    textDecorationThickness: {
      auto: 'auto',
      'from-font': 'from-font',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    textUnderlineOffset: {
      auto: 'auto',
      0: '0px',
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px'
    },
    textIndent: function textIndent(_ref44) {
      var theme = _ref44.theme;
      return _objectSpread({}, theme('spacing'));
    },
    textOpacity: function textOpacity(_ref45) {
      var theme = _ref45.theme;
      return theme('opacity');
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left'
    },
    transitionDelay: {
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    transitionDuration: {
      DEFAULT: '150ms',
      75: '75ms',
      100: '100ms',
      150: '150ms',
      200: '200ms',
      300: '300ms',
      500: '500ms',
      700: '700ms',
      1000: '1000ms'
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      DEFAULT: 'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
      colors: 'color, background-color, border-color, text-decoration-color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform'
    },
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      "in": 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    translate: function translate(_ref46) {
      var theme = _ref46.theme;
      return _objectSpread({}, theme('spacing'), {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        full: '100%'
      });
    },
    width: function width(_ref47) {
      var theme = _ref47.theme;
      return _objectSpread({
        auto: 'auto'
      }, theme('spacing'), {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw',
        min: 'min-content',
        max: 'max-content',
        fit: 'fit-content'
      });
    },
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      transform: 'transform'
    },
    zIndex: {
      auto: 'auto',
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50'
    }
  },
  variantOrder: ['first', 'last', 'odd', 'even', 'visited', 'checked', 'empty', 'read-only', 'group-hover', 'group-focus', 'focus-within', 'hover', 'focus', 'focus-visible', 'active', 'disabled'],
  plugins: []
};