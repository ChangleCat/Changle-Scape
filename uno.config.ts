// uno.config.ts
import { defineConfig } from "unocss";
import { presetUno } from "unocss"; //  预定义配置
import { presetIcons } from "unocss"; // CSS 图标
import { presetAttributify, presetTypography } from "unocss"; // 版式预设
import presetLegacyCompat from '@unocss/preset-legacy-compat' // 旧版兼容预设
import { IconifyJSON } from '@iconify/types';

import carbonIcons from '@iconify-json/carbon/icons.json';
import mdiIcons from '@iconify-json/mdi/icons.json';

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetTypography(),
    presetIcons({
      collections: {
        mdi: () => mdiIcons as IconifyJSON,
        carbon: () => carbonIcons as IconifyJSON,
      },
    }),
    presetLegacyCompat({
      commaStyleColorFunction: true,
    })
  ],safelist: [
    'i-carbon-information',
    'i-carbon-idea',
    'i-carbon-warning-alt',
    'i-carbon-warning',
    'i-carbon-warning-hex',
    // 'i-carbon-warning-filled',
    // 添加颜色类
    'bg-blue-100/100', 'border-blue-500', 'text-blue-700',
    'bg-green-100/100', 'border-green-500', 'text-green-700',
    'bg-purple-100/100', 'border-purple-500', 'text-purple-700',
    'bg-yellow-100/100', 'border-yellow-500', 'text-yellow-700',
    'bg-red-100/100', 'border-red-500', 'text-red-700',
    // 暗色模式类
    'dark:bg-blue-500/10', 'dark:text-blue-100', 'dark:text-blue-300',
    'dark:bg-green-500/10', 'dark:text-green-100', 'dark:text-green-300',
    'dark:bg-purple-500/10', 'dark:text-purple-100', 'dark:text-purple-300',
    'dark:bg-yellow-500/10', 'dark:text-yellow-100', 'dark:text-yellow-300',
    'dark:bg-red-500/10', 'dark:text-red-100', 'dark:text-red-300',
  ],
  shortcuts: {
    // shortcuts to multiple utilities
    "un-postcard": "flex flex-col-reverse md:flex-col w-full rounded-[var(--radius-large)] overflow-hidden relative",
    "un-postcard-in": "pl-6 md:pl-9 pr-6 md:pr-2 pt-6 md:pt-7 pb-6 relative w-[99%]",
    "un-postcard-title": `
      transition w-full block font-bold mb-3 text-3xl 
      hover:text-[var(--primary)] dark:hover:text-[var(--primary)]
      active:text-[var(--title-active)] dark:active:text-[var(--title-active)]
      before:content-['']
      before:w-1 before:h-5 before:rounded-md before:bg-[var(--primary)]
      before:absolute before:top-[35px] before:left-[18px] before:hidden md:before:block`,
    "un-list-line": `transition-all mx-auto w-1 h-1 rounded group-hover:h-5
      bg-[oklch(0.5_0.05_var(--hue))] group-hover:bg-[var(--primary)]
      outline outline-4 z-50
      outline-[var(--card-bg)]
      group-hover:outline-[var(--btn-plain-bg-hover)]
      group-active:outline-[var(--btn-plain-bg-active)]`
  },
  rules: [
    [
      /^text-(\d+)$/,
      ([, d]) => {
        return `.text-${d} { color: rgb(0 0 0 / ${parseInt(d) / 100}); }
:is(.dark .text-${d}) { color: rgb(255 255 255 / ${parseInt(d) / 100}); }`;
      },
    ],
  ],
  // shortcuts: [[/^text-(\d+)$/, ([, d]) => `text-${d} dark:text-${d}`]],
});
