export type SpacingScaleKey =
  | 'st-xs'
  | 'st-sm'
  | 'st-base'
  | 'st-md'
  | 'st-lg'
  | 'st-xl'
  | 'st-2xl'
  | 'st-3xl'
  | 'st-4xl'
  | 'st-5xl'
  | 'st-6xl'
  | 'st-7xl'
  | 'st-1'
  | 'st-2'
  | 'st-3'
  | 'st-4'
  | 'st-5'
  | 'st-6'
  | 'st-7'
  | 'st-8'
  | 'st-9'
  | 'st-10'
  | 'st-11'
  | 'st-12'
  | 'st-15'
  | 'st-16'
  | 'st-20'
  | 'st-24'
  | 'st-30'
  | 'st-32'
  | 'st-40'
  | 'st-48'
  | 'st-56'
  | 'st-64'
  | 'st-72'
  | 'st-80'
  | 'st-96'
  | 'st-128'
  | 'st-144'
  | 'st-160'
  | 'st-168'
  | 'st-240'

export const SPACING_SCALE: Readonly<Record<SpacingScaleKey, string>> = {
  'st-xs': '0.75rem',
  'st-sm': '0.875rem',
  'st-base': '1rem',
  'st-md': '1.125rem',
  'st-lg': '1.25rem',
  'st-xl': '1.5rem',
  'st-2xl': '1.875rem',
  'st-3xl': '2.25rem',
  'st-4xl': '3rem',
  'st-5xl': '3.75rem',
  'st-6xl': '4.5rem',
  'st-7xl': '5rem',
  'st-1': '8px',
  'st-2': '16px',
  'st-3': '24px',
  'st-4': '32px',
  'st-5': '40px',
  'st-6': '48px',
  'st-7': '56px',
  'st-8': '64px',
  'st-9': '72px',
  'st-10': '80px',
  'st-11': '88px',
  'st-12': '96px',
  'st-15': '120px',
  'st-16': '128px',
  'st-20': '160px',
  'st-24': '192px',
  'st-30': '240px',
  'st-32': '256px',
  'st-40': '320px',
  'st-48': '384px',
  'st-56': '448px',
  'st-64': '512px',
  'st-72': '584px',
  'st-80': '640px',
  'st-96': '768px',
  'st-128': '1024px',
  'st-144': '1152px',
  'st-160': '1280px',
  'st-168': '1344px',
  'st-240': '1920px'
} as const

export const SPACING_SCALE_PX: Readonly<Record<SpacingScaleKey, number>> = {
  'st-xs': 12,
  'st-sm': 14,
  'st-base': 16,
  'st-md': 18,
  'st-lg': 20,
  'st-xl': 24,
  'st-2xl': 30,
  'st-3xl': 36,
  'st-4xl': 48,
  'st-5xl': 60,
  'st-6xl': 72,
  'st-7xl': 80,
  'st-1': 8,
  'st-2': 16,
  'st-3': 24,
  'st-4': 32,
  'st-5': 40,
  'st-6': 48,
  'st-7': 56,
  'st-8': 64,
  'st-9': 72,
  'st-10': 80,
  'st-11': 88,
  'st-12': 96,
  'st-15': 120,
  'st-16': 128,
  'st-20': 160,
  'st-24': 192,
  'st-30': 240,
  'st-32': 256,
  'st-40': 320,
  'st-48': 384,
  'st-56': 448,
  'st-64': 512,
  'st-72': 584,
  'st-80': 640,
  'st-96': 768,
  'st-128': 1024,
  'st-144': 1152,
  'st-160': 1280,
  'st-168': 1344,
  'st-240': 1920
} as const

export const BORDER_RADIUS: Readonly<Record<'st-1' | 'st-2', string>> = {
  'st-1': '8px',
  'st-2': '16px'
} as const

export const LINE_HEIGHTS: Readonly<
  Record<'st-tight' | 'st-snug' | 'st-normal' | 'st-relaxed' | 'st-loose', string>
> = {
  'st-tight': '1.1',
  'st-snug': '1.25',
  'st-normal': '1.5',
  'st-relaxed': '1.75',
  'st-loose': '2'
} as const

export const LETTER_SPACING: Readonly<
  Record<'st-tight' | 'st-normal' | 'st-wide' | 'st-wider', string>
> = {
  'st-tight': '-0.025em',
  'st-normal': '0',
  'st-wide': '0.025em',
  'st-wider': '0.05em'
} as const

export const FONT_FAMILIES: Readonly<Record<'st-heading' | 'st-highlight' | 'st-body', string[]>> =
  {
    'st-heading': ['"Base Neue Condensed"', 'sans-serif'],
    'st-highlight': ['"Base Neue Condensed"', 'sans-serif'],
    'st-body': ['Montserrat', 'sans-serif']
  } as const

export type TextStyle = [
  fontSize: string,
  meta: { lineHeight: string; letterSpacing: string; fontWeight: string }
]

export const FONT_STYLES: Readonly<Record<string, TextStyle>> = {
  'st-heading-1': ['3rem', { lineHeight: '1.1', letterSpacing: '0', fontWeight: '800' }],
  'st-heading-2': ['2.25rem', { lineHeight: '1.1', letterSpacing: '0', fontWeight: '800' }],
  'st-heading-3': ['1.875rem', { lineHeight: '1.25', letterSpacing: '0', fontWeight: '800' }],
  'st-heading-4': ['1.5rem', { lineHeight: '1.25', letterSpacing: '0', fontWeight: '800' }],
  'st-highlight-large': ['1.5rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
  'st-highlight-medium': ['1.125rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '600' }],
  'st-body-large': ['1.125rem', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' }],
  'st-body-medium': ['1rem', { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' }],
  'st-body-small': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
  'st-hero-title': ['3rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '800' }]
} as const

export const BOX_SHADOWS: Readonly<
  Record<
    | 'st-paper-0'
    | 'st-paper-1'
    | 'st-paper-2'
    | 'st-paper-3'
    | 'st-paper-4'
    | 'st-action-hover'
    | 'st-action-pressed',
    string
  >
> = {
  'st-paper-0': '0 0 0 0 transparent',
  'st-paper-1': '0 1px 3px 0 var(--st-color-shadow-0), 0 1px 2px 0 var(--st-color-shadow-1)',
  'st-paper-2': '0 4px 6px -1px var(--st-color-shadow-0), 0 2px 4px -1px var(--st-color-shadow-1)',
  'st-paper-3':
    '0 10px 15px -3px var(--st-color-shadow-0), 0 4px 6px -2px var(--st-color-shadow-1)',
  'st-paper-4':
    '0 20px 25px -5px var(--st-color-shadow-0), 0 10px 10px -5px var(--st-color-shadow-1)',
  'st-action-hover': '0 0 16px 2px var(--st-color-shadow-hover)',
  'st-action-pressed': '0 0 16px 4px var(--st-color-shadow-pressed)'
} as const

export const DROP_SHADOWS: Readonly<Record<'st-action-hover' | 'st-action-pressed', string[]>> = {
  'st-action-hover': [
    '0 0 8px var(--st-color-shadow-hover)',
    '0 0 16px var(--st-color-shadow-hover)'
  ],
  'st-action-pressed': [
    '0 0 16px var(--st-color-shadow-pressed)',
    '0 0 24px var(--st-color-shadow-pressed)'
  ]
} as const

export const TEXT_SHADOWS: Readonly<
  Record<'st-small' | 'st-medium' | 'st-large' | 'st-action-hover' | 'st-action-pressed', string>
> = {
  'st-small': '-1px 1px transparent, -2px 2px var(--st-shadow-scale-950)',
  'st-medium': '-1px 1px transparent, -3px 3px var(--st-shadow-scale-950)',
  'st-large': '-2px 2px transparent, -4px 4px var(--st-shadow-scale-950)',
  'st-action-hover': '0 0 16px var(--st-color-shadow-hover)',
  'st-action-pressed': '0 0 16px var(--st-color-shadow-pressed)'
} as const

export type ColorPrefixKey =
  | 'brand-primary'
  | 'brand-secondary'
  | 'info'
  | 'system'
  | 'positive'
  | 'attention'
  | 'negative'
  | 'blue'
  | 'ocean'
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'pink'
  | 'purple'

export const COLOR_SCALE_PREFIXES: Readonly<Record<ColorPrefixKey, string>> = {
  'brand-primary': 'brand-primary',
  'brand-secondary': 'brand-secondary',
  info: 'info-color',
  system: 'system-color',
  positive: 'positive-color',
  attention: 'attention-color',
  negative: 'negative-color',
  blue: 'blue-color',
  ocean: 'ocean-color',
  green: 'green-color',
  yellow: 'yellow-color',
  orange: 'orange-color',
  red: 'red-color',
  pink: 'pink-color',
  purple: 'purple-color'
} as const

export const TONE_SCALE_VALUES = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const
export const NEUTRAL_SCALE_VALUES = [0, ...TONE_SCALE_VALUES] as const

export type ToneScaleValue = (typeof TONE_SCALE_VALUES)[number]
export type NeutralScaleValue = (typeof NEUTRAL_SCALE_VALUES)[number]

export type SizeValue =
  | 'auto'
  | 'full'
  | 'fit-content'
  | 'min-content'
  | 'max-content'
  | UsualSizeValue
  | '16'
  | '20'
  | '24'
  | '32'
  | '40'
  | '48'
  | '56'
  | '64'
  | '72'
  | '80'
  | '96'
  | '128'
  | '144'
  | '160'
  | '168'
  | '240'

export type UsualSizeValue =
  '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

export const PUBLIC_EXPORTS: Readonly<Record<string, string>> = {
  StBadge: './components/badge',
  StButton: './components/buttons/button',
  StButtonGroup: './components/buttons/button-group',
  StChip: './components/chip',
  StDropdown: './components/dropdown',
  StGrid: './components/grid',
  StIllustration: './components/illustrations',
  StLoading: './components/loading',
  StListItem: './components/list',
  StOrderedList: './components/list',
  StUnorderedList: './components/list',
  StModal: './components/modal',
  StCheckbox: './components/form/checkbox',
  StInput: './components/form/input',
  StOption: './components/form/option',
  StRadio: './components/form/radio',
  StRadioGroup: './components/form/radio-group',
  StSelect: './components/form/select',
  StSwitch: './components/form/switch',
  StTooltip: './components/tooltip',
  StIcon: './components/icon',
  StPaper: './components/paper',
  StTypography: './components/typography',
  useCheckableControl: './composables',
  useListContainer: './composables',
  stTailwindTheme: './tokens',
  stTailwindPlugins: './tokens',
  stCssTokenImport: './tokens'
} as const
